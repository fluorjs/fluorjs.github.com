import React from "react"
import {
  APIMember,
  Example,
  Section,
  FunctionRef,
  ActionRef,
  CAction,
  CFunction,
  CMixed,
  CString,
  CObject,
} from "components"

export default function API() {
  return (
    <Section id="api" title="Scripting API">
      <APIMember
        member="setup"
        shortDescription="Initialize molecule state without triggering a render."
        type="function"
        signatures={[
          [
            { name: "variable", type: "string" },
            { name: "value", type: "mixed" },
          ],
          [
            { name: "variable", type: "string" },
            { name: "updater", type: "function" },
          ],
          [{ name: "object", type: "object" }],
        ]}
      >
        <Section.P>
          Initializes variables without calling <FunctionRef member="render" />.
          As the name implies, this is mostly used for setting up state in your
          Fluor scripts as the system will perform an initial render after
          executing your script.
        </Section.P>
        <Section.P>
          Please refer to the <FunctionRef member="set" /> documentation for
          details about the different ways to call it.
        </Section.P>
      </APIMember>

      <APIMember
        member="on"
        shortDescription="Bind actions to DOM events on selected elements."
        type="function"
        signatures={[
          [
            { name: "eventName", type: "string" },
            { name: "selector", type: "string" },
            { name: "action", type: "action" },
          ],
          [
            { name: "eventName", type: "string" },
            { name: "selector", type: "string" },
            { name: "actions", type: "action", array: true },
          ],
        ]}
      >
        <Section.P>
          Adds an event handler for <CString>eventName</CString> on all elements
          matched by <CString>selector</CString>. When the event occurs, the
          specified <CAction>action</CAction> is run.
        </Section.P>

        <Section.P>
          In the second form, you can pass an array of actions to be run
          sequentially.
        </Section.P>

        <APIMember.Examples>
          <Example title="Basic handler with a single action">
            {`
              <div>
                <p class="p-2">Hello!</p>
                <script type="fluor">
                  on("click", "p", toggleClass("text-red-900"))
                </script>
              </div>
            `}
          </Example>

          <Example title="With an array of actions">
            {`
              <div>
                <p class="p-2">Hello!</p>
                <script type="fluor">
                  on("click", "p", [
                    toggleClass("text-red-900"),
                    toggleClass("bg-red-200"),
                  ])
                </script>
              </div>
            `}
          </Example>
        </APIMember.Examples>
      </APIMember>

      <APIMember
        member="set"
        shortDescription="Updates molecule state and trigger a render"
        type="action"
        signatures={[
          [
            { name: "variable", type: "string" },
            { name: "value", type: "mixed" },
          ],
          [
            { name: "variable", type: "string" },
            { name: "updater", type: "function" },
          ],
          [{ name: "object", type: "object" }],
        ]}
      >
        <Section.P>
          The first form updates the variable named <CString>variable</CString>{" "}
          with <CMixed>value</CMixed>. You can also pass an{" "}
          <CFunction>updater</CFunction> that will receive the previous value
          and that must return a new value.
        </Section.P>

        <Section.P>
          The third form allows you to pass an <CObject>object</CObject> where
          the keys are variable names and the values are either plain values or
          an updater function.
        </Section.P>

        <APIMember.Examples>
          <Example title="Calling with a value">
            {`
            <div>
              <p f-text="value"></p>
              <button>Set value to 2</button>
              <script type="fluor">
                setup("value", 1)
                on("click", "button", set("value", 2))
              </script>
            </div>
            `}
          </Example>
          <Example title="Calling with an updater">
            {`
            <div>
              <p f-text="value"></p>
              <button>Increment</button>
              <script type="fluor">
                setup("value", 1)
                on("click", "button", set("value", previous => previous + 1))
              </script>
            </div>
            `}
          </Example>
          <Example title="Calling with an object">
            {`
            <div>
              <p f-text="square"></p>
              <p f-text="cube"></p>
              <button>Next</button>
              <script type="fluor">
                setup({
                  square: 1,
                  cube: 1,
                })
                on("click", "button", set({
                  square: prev => prev * 2,
                  cube: prev => prev * 3,
                }))
              </script>
            </div>
            `}
          </Example>
        </APIMember.Examples>
      </APIMember>

      <APIMember
        member="addClass"
        shortDescription="Add HTML classes to selected elements."
        type="action"
        signatures={[
          [{ name: "className", type: "string" }],
          [
            { name: "className", type: "string" },
            { name: "selector", type: "string" },
          ],
        ]}
      >
        <Section.P>
          If called with one argument, adds the HTML class specified with{" "}
          <CString>className</CString> to the current action target.
        </Section.P>
        <Section.P>
          If called with two arguments, adds the HTML class specified with{" "}
          <CString>className</CString> to all the elements matched by{" "}
          <CString>selector</CString>.
        </Section.P>
      </APIMember>

      <APIMember
        member="removeClass"
        shortDescription="Remove HTML classes from selected elements."
        type="action"
        signatures={[
          [{ name: "className", type: "string" }],
          [
            { name: "className", type: "string" },
            { name: "selector", type: "string" },
          ],
        ]}
      >
        <Section.P>
          Works the same way as <ActionRef member="addClass" /> but removes the
          class instead.
        </Section.P>
      </APIMember>

      <APIMember
        member="toggleClass"
        shortDescription="Toggle HTML classes on selected elements."
        type="action"
        signatures={[
          [{ name: "className", type: "string" }],
          [
            { name: "className", type: "string" },
            { name: "selector", type: "string" },
          ],
        ]}
      >
        <Section.P>
          Works the same way as <ActionRef member="addClass" /> but toggles the
          class on and off instead.
        </Section.P>
      </APIMember>

      <APIMember
        member="append"
        shortDescription="Add items at the end of lists."
        type="action"
        signatures={[
          [
            { name: "variable", type: "string" },
            { name: "item", type: "mixed" },
          ],
          [
            { name: "variable", type: "string" },
            { name: "builder", type: "function" },
          ],
        ]}
      >
        <Section.P>
          Adds <CMixed>item</CMixed> at the end of the list stored at
          <CString>variable</CString>.
        </Section.P>

        <Section.P>
          In the second form, generate the appended value from the result of
          calling <CFunction>builder</CFunction> with the list as an argument.
        </Section.P>
      </APIMember>

      <APIMember
        member="prepend"
        shortDescription="Add items at the beginning of lists."
        type="action"
        signatures={[
          [
            { name: "variable", type: "string" },
            { name: "item", type: "mixed" },
          ],
          [
            { name: "variable", type: "string" },
            { name: "builder", type: "function" },
          ],
        ]}
      >
        <Section.P>
          Works the same way as <ActionRef member="append" /> but inserts the
          item at the beginning of the list.
        </Section.P>
      </APIMember>

      <APIMember
        member="pop"
        shortDescription="Remove items from the end of lists."
        type="action"
        signatures={[[{ name: "variable", type: "string" }]]}
      >
        <Section.P>
          Removes the last item from the list stored at{" "}
          <CString>variable</CString>.
        </Section.P>
      </APIMember>

      <APIMember
        member="shift"
        shortDescription="Remove items from the beginning of lists."
        type="action"
        signatures={[[{ name: "variable", type: "string" }]]}
      >
        <Section.P>
          Works the same way as <ActionRef member="shift" /> but removes the
          item from the beginning of the list.
        </Section.P>
      </APIMember>

      <APIMember
        member="withEvent"
        shortDescription="Consume DOM events in an action."
        type="action"
        signatures={[[{ name: "action", type: "action" }]]}
      >
        <Section.P>
          This is an utility method that helps with consuming an event inside an{" "}
          <CAction>action</CAction>.
        </Section.P>

        <APIMember.Examples>
          <Example title="Changing state based on an event">
            {`
              <div>
                <input />
                <p>
                  Last keyCode: <strong f-text="keyCode"></strong>
                </p>
                <script type="fluor">
                  setup("keyCode", 0)
                  on("keyup", "input", withEvent(e => set("keyCode", e.keyCode)))
                </script>
              </div>
            `}
          </Example>
        </APIMember.Examples>
      </APIMember>

      <APIMember
        member="classes"
        shortDescription="Build HTML class names."
        type="function"
        signatures={[
          [{ name: "strings", type: "string", array: true }],
          [{ name: "object", type: "object" }],
        ]}
      >
        <Section.P>
          Generates HTML class names from an array of strings or an object. This
          works like the{" "}
          <a href="https://npmjs.com/package/classnames">classnames</a> or{" "}
          <a href="https://npmjs.com/package/clsx">clsx</a> libraries, but it
          handles less cases.
        </Section.P>
      </APIMember>

      <APIMember
        member="render"
        shortDescription="Manually render a molecule."
        type="function"
        signatures={[[]]}
      >
        <Section.P>
          Triggers a render of the current molecule and its children. You should
          not have to call this method manually.
        </Section.P>
      </APIMember>

      <APIMember
        member="$"
        shortDescription="Find elements matching a selector in a molecule."
        type="function"
        signatures={[
          [{ name: "selector", type: "string" }],
          [
            { name: "selector", type: "string" },
            { name: "root", type: "object" },
          ],
        ]}
      >
        <Section.P>
          Returns all elements matching <CString>selector</CString> in the
          current molecule. Performs the search on <CObject>root</CObject> if
          given.
        </Section.P>
      </APIMember>

      <APIMember
        member="$$"
        shortDescription="Find a single element matching a selector in a molecule."
        type="function"
        signatures={[
          [{ name: "selector", type: "string" }],
          [
            { name: "selector", type: "string" },
            { name: "root", type: "object" },
          ],
        ]}
      >
        <Section.P>
          Returns the firrst element matching <CString>selector</CString> in the
          current molecule. Performs the search on <CObject>root</CObject> if
          given.
        </Section.P>
      </APIMember>

      <APIMember member="$data" type="object">
        <Section.P>
          The current molecule state object. This can be used in functions or
          custom actions.
        </Section.P>
      </APIMember>

      <APIMember member="$id" type="string">
        <Section.P>
          The current molecule identifier. This is an internal property, messing
          with it is at your own risk!
        </Section.P>
      </APIMember>

      <APIMember member="$root" type="object">
        <Section.P>The root DOM Node for the current molecule.</Section.P>
      </APIMember>

      <APIMember member="$parent" type="object">
        <Section.P>The parent molecule if it exists.</Section.P>
      </APIMember>
    </Section>
  )
}
