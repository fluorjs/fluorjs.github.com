import React from "react"
import { APIMember, Code, Example, Section } from "components"

export default function API() {
  return (
    <Section id="api" title="API">
      <APIMember
        member="setup"
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
          Adds an event handler for <String>eventName</String> on all elements
          matched by <String>selector</String>. When the event occurs, the
          specified <Action>action</Action> is run.
        </Section.P>

        <Section.P>
          In the second form, you can pass an array of actions to be run
          sequentially.
        </Section.P>

        <Section.P>
          Event matching is done live, which means that if you add or remove
          elements that match <String>selector</String>, Fluor.js will take care
          of handling those changes.
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
                  ]
                  )
                </script>
              </div>
            `}
          </Example>
        </APIMember.Examples>
      </APIMember>

      <APIMember
        member="set"
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
          The first form updates the variable named <String>variable</String>{" "}
          with <Mixed>value</Mixed>. You can also pass an{" "}
          <Function>updater</Function> that will receive the previous value and
          that must return a new value.
        </Section.P>

        <Section.P>
          The third form allows you to pass an <Objekt>object</Objekt> where the
          keys are variable names and the values are either plain values or an
          updater function.
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
          <String>className</String> to the current action target.
        </Section.P>
        <Section.P>
          If called with two arguments, adds the HTML class specified with{" "}
          <String>className</String> to all the elements matched by{" "}
          <String>selector</String>.
        </Section.P>
      </APIMember>

      <APIMember
        member="removeClass"
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
          This works the same way as <ActionRef member="addClass" /> but removes
          the class instead.
        </Section.P>
      </APIMember>

      <APIMember
        member="toggleClass"
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
          This works the same way as <ActionRef member="addClass" /> but toggles
          the class on and off instead.
        </Section.P>
      </APIMember>

      <APIMember
        member="append"
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
      ></APIMember>

      <APIMember
        member="prepend"
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
      ></APIMember>

      <APIMember
        member="pop"
        type="action"
        signatures={[[{ name: "variable", type: "string" }]]}
      ></APIMember>

      <APIMember
        member="shift"
        type="action"
        signatures={[[{ name: "variable", type: "string" }]]}
      ></APIMember>

      <APIMember member="withEvent" type="action" signatures={[]}></APIMember>

      <APIMember member="render" type="function" signatures={[]}></APIMember>

      <APIMember member="classes" type="function" signatures={[]}></APIMember>

      <APIMember member="$" type="function" signatures={[]}></APIMember>

      <APIMember member="$$" type="function" signatures={[]}></APIMember>

      <APIMember member="$data" type="object"></APIMember>

      <APIMember member="$id" type="string"></APIMember>

      <APIMember member="$root" type="object"></APIMember>

      <APIMember member="$parent" type="object"></APIMember>
    </Section>
  )
}

const Ref = ({ children, member }) => (
  <a href={`#api-${member}`} className="no-underline">
    {children}
  </a>
)

const FunctionRef = ({ member }) => (
  <Ref member={member}>
    <Code language="fluor-function" className="hover:bg-gray-800">
      {member}
    </Code>
  </Ref>
)

const ActionRef = ({ member }) => (
  <Ref member={member}>
    <Code language="fluor-action" className="hover:bg-gray-800">
      {member}
    </Code>
  </Ref>
)

const Action = ({ children }) => <Code language="fluor-action">{children}</Code>
const Function = ({ children }) => (
  <Code language="fluor-function">{children}</Code>
)
const Mixed = ({ children }) => <Code language="fluor-mixed">{children}</Code>
const String = ({ children }) => <Code language="fluor-string">{children}</Code>
const Objekt = ({ children }) => <Code language="fluor-object">{children}</Code>
