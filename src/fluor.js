const registry = {}

window.Fluor = function Fluor(id, fn) {
  const root = $$(`[data-fluor-id="${id}"]`)
  const fluor = createFluor(root)
  fn(fluor)
}

function $(selector, root = document) {
  return root.querySelectorAll(selector)
}

function $$(selector, root = document) {
  return root.querySelector(selector)
}

function isFunction(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply)
}

function createId() {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(36)
}

function walk(node, fn) {
  fn(node)
  for (const child of node.children) {
    if (child.dataset.fluorId) {
      continue
    }
    walk(child, fn)
  }
}

function handleTextBind(attr, el, data) {
  el.textContent = data[attr.value]
}

function handleHTMLBind(attr, el, data) {
  el.innerHTML = data[attr.value]
}

function handleLoop(attr, el, data) {
  if (el.tagName !== "TEMPLATE") {
    throw "@each only works on <template> tags"
  }
  const loopId = el.dataset.fluorLoopId || createId()
  el.dataset.fluorLoopId = loopId
  const [source, iterName] = attr.value.split(/\s+as\s+/)
  const items = data[source]
  const fragment = document.createDocumentFragment()

  for (const item of items) {
    const clone = el.content.cloneNode(true)
    for (const childRoot of clone.children) {
      childRoot.dataset.fluorId = createId()
      childRoot.dataset.fluorParentLoopId = loopId
      const fluor = createFluor(childRoot)
      fluor.initialize({ ...data, [iterName]: item })
      fragment.appendChild(childRoot)
    }
  }
  const previousItems = $(
    `[data-fluor-parent-loop-id="${loopId}"]`,
    el.parentNode
  )
  for (const previousItem of previousItems) {
    previousItem.parentNode.removeChild(previousItem)
  }
  el.parentNode.insertBefore(fragment, el.nextSibling)
}

function handleAttributeBind(attr, el, data) {
  if (!attr.name.startsWith("@")) {
    return
  }

  const value = data[attr.value]
  const concreteAttr = attr.name.slice(1)
  switch (value) {
    case true:
      el.setAttribute(concreteAttr, "")
      break
    case false:
      el.removeAttribute(concreteAttr)
      break
    default:
      el.setAttribute(concreteAttr, value)
  }
}

function createFluor(rootNode) {
  const data = {}

  function render() {
    walk(rootNode, (el) => {
      for (const attr of el.attributes) {
        switch (attr.name) {
          case "@text":
            handleTextBind(attr, el, data)
            break
          case "@html":
            handleHTMLBind(attr, el, data)
            break
          case "@each":
            handleLoop(attr, el, data)
            break
          default:
            handleAttributeBind(attr, el, data)
        }
      }
    })
  }

  function makeValue(valueOrFn, prevValue) {
    return isFunction(valueOrFn) ? valueOrFn(prevValue) : valueOrFn
  }

  return {
    initialize(objOrKey, value = null) {
      if (typeof objOrKey === "object") {
        Object.assign(data, objOrKey)
      } else {
        data[objOrKey] = value
      }
      render()
    },

    on(event, selector, fnOrArray) {
      const handler = Array.isArray(fnOrArray)
        ? (ev) => fnOrArray.forEach((fn) => fn(ev))
        : fnOrArray
      $$(selector, rootNode).addEventListener(event, handler)
    },

    update(objOrKey, valueOrFn) {
      return () => {
        if (typeof objOrKey === "object") {
          Object.assign(
            data,
            Object.keys(objOrKey).reduce(
              (a, k) =>
                Object.assign(a, { [k]: makeValue(objOrKey[k], data[k]) }),
              {}
            )
          )
        } else {
          data[objOrKey] = makeValue(valueOrFn, data[objOrKey])
        }
        render()
      }
    },

    toggle(className, selector = null) {
      return (ev) => {
        const target = selector ? $$(selector, rootNode) : ev.currentTarget
        target.classList.toggle(className)
      }
    },

    append(name, valueOrFn) {
      return () => {
        data[name].push(makeValue(valueOrFn, data[name]))
        render()
      }
    },

    prepend(name, valueOrFn) {
      return () => {
        data[name].unshift(makeValue(valueOrFn, data[name]))
        render()
      }
    },

    withEvent(fn) {
      return (ev) => fn(ev)()
    },

    render,
    $root: rootNode,
    $: (selector) => $(selector, rootNode),
    $$: (selector) => $$(selector, rootNode),
  }
}

// Thanks @stimulus and alpine
function domReady() {
  return new Promise((resolve) => {
    if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", resolve)
    } else {
      resolve()
    }
  })
}

async function start() {
  await domReady()

  const PUBLIC_API = Object.keys(createFluor())

  for (const atom of $("script[type=fluor]")) {
    const id = createId()
    const scriptEl = document.createElement("script")
    const wrappedScript = `
        Fluor("${id}", ({${PUBLIC_API.join(",")}}) => {
          ${atom.textContent}
        })
      `

    atom.parentElement.dataset.fluorId = id
    atom.parentElement.removeChild(atom)

    scriptEl.textContent = wrappedScript
    document.body.appendChild(scriptEl)
  }
}

start()
