void ((global) => {
  const registry = {}

  global.Fluorine = function Fluorine(id, fn) {
    const root = $$(`[data-fluorine-id="${id}"]`)
    const fluorine = createFluorine(root)
    fn(fluorine)
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
      if (child.dataset.fluorineId) {
        continue
      }
      walk(child, fn)
    }
  }

  function handleTextBind(attr, el, data) {
    el.textContent = data[attr.value]
  }

  function handleLoop(attr, el, data) {
    if (el.tagName !== "TEMPLATE") {
      throw "@each only works on <template> tags"
    }
    const loopId = el.dataset.fluorineLoopId || createId()
    el.dataset.fluorineLoopId = loopId
    const [source, iterName] = attr.value.split(/\s+as\s+/)
    const items = data[source]
    const fragment = document.createDocumentFragment()

    for (const item of items) {
      const clone = el.content.cloneNode(true)
      for (const childRoot of clone.children) {
        childRoot.dataset.fluorineId = createId()
        childRoot.dataset.fluorineParentLoopId = loopId
        const fluorine = createFluorine(childRoot)
        with (fluorine) {
          initialize({ ...data, [iterName]: item })
        }
        fragment.appendChild(childRoot)
      }
    }
    const previousItems = $(
      `[data-fluorine-parent-loop-id="${loopId}"]`,
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

  function createFluorine(rootNode) {
    const data = {}

    function render() {
      walk(rootNode, (el) => {
        for (const attr of el.attributes) {
          switch (attr.name) {
            case "@text":
              handleTextBind(attr, el, data)
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

      on(selector, event, fn) {
        $$(selector, rootNode).addEventListener(event, fn)
      },

      update(name, valueOrFn) {
        return () => {
          data[name] = makeValue(valueOrFn, data[name])
          render()
        }
      },

      toggle(selector, className) {
        return () => {
          $$(selector, rootNode).classList.toggle(className)
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
    }
  }

  for (const atom of $("script[type=fluorine]")) {
    const id = createId()
    const scriptEl = document.createElement("script")
    const wrappedScript = `
      Fluorine("${id}", (fluorine) => {
        with (fluorine) {
          ${atom.textContent}
        }
      })
    `

    atom.parentElement.dataset.fluorineId = id
    atom.parentElement.removeChild(atom)

    scriptEl.textContent = wrappedScript
    document.body.appendChild(scriptEl)
  }
})(window)
