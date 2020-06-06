import React from "react"
import { Code, Directive, Example, Section } from "components"

export default function DirectivesAPI() {
  return (
    <Section
      id="directives"
      title="Directives API"
      style={{ scrollMarginTop: "6rem" }}
    >
      <Directive
        name="f-bind-{attr}"
        shortDescription="Bind variable values to attributes"
      >
        <Section.P>
          Binds a variable to an attribute of the target DOM node. Replace{" "}
          <Code>{"{attr}"}</Code> with the name of the HTML attribute you want
          to bind, and use a dotted path to a variable as the value.
        </Section.P>
        <Section.P>
          If the variable is a boolean, the given attribute is added or removed
          from the DOM node accordingly.
        </Section.P>

        <Directive.Examples>
          <Example title="Binding value">
            {`
              <div>
                <button f-bind-class="buttonClass">Click me!</button>
                <style>
                  .big-button { font-size: 2rem; }
                </style>
                <script type="fluor">
                  setup("buttonClass", "big-button")
                </script>
              </div>
            `}
          </Example>
          <Example title="Binding boolean variables">
            {`
              <div>
                <button f-bind-disabled="buttonIsDisabled">Click me!</button>
                <script type="fluor">
                  setup("buttonIsDisabled", true)
                </script>
              </div>
            `}
          </Example>
        </Directive.Examples>
      </Directive>

      <Directive
        name="f-text"
        shortDescription="Display variable contents inside a node."
      >
        <Section.P>
          Display contents of a variable as the <Code>textContent</Code> of the
          target DOM node.
        </Section.P>

        <Example>
          {`
            <div>
              <p f-text="message"></p>
              <script type="fluor">
                setup("message", "Hello, world!")
              </script>
            </div>
          `}
        </Example>
      </Directive>

      <Directive name="f-html" shortDescription="Render HTML inside a node.">
        <Section.P>
          Render HTML stored in a variable inside the target DOM node.
        </Section.P>

        <Example>
          {`
            <div>
              <p f-html="message"></p>
              <script type="fluor">
                setup("message", "<b>Hello, world!</b>")
              </script>
            </div>
          `}
        </Example>
      </Directive>

      <Directive name="f-if" shortDescription="Conditionally render some HTML.">
        <Section.P>Conditionally renders some HTML.</Section.P>
        <Section.P>
          Due to the way Fluor.js works, you must use a{" "}
          <Code language="html">{`<template>`}</Code> tag for this directive in
          order for this directive to work.
        </Section.P>

        <Example>
          {`
            <div>
              <template f-if="shown">
                <p>I'm visible!</p>
              </template>
              <button>Toggle paragraph</button>
              <script type="fluor">
                setup("shown", false)
                on("click", "button", toggle("shown"))
              </script>
            </div>
          `}
        </Example>
      </Directive>

      <Directive
        name="f-each"
        shortDescription="Loop over a collection of items."
      >
        <Section.P>Loop over a collection of items.</Section.P>
        <Section.P>
          Due to the way Fluor.js works, you must use a{" "}
          <Code language="html">{`<template>`}</Code> tag for this directive in
          order for this directive to work.
        </Section.P>

        <Example>
          {`
            <div>
              <ul>
                <template f-each="item in items">
                  <li f-text="item"></li>
                </template>
              </ul>
              <script type="fluor">
                setup("items", ["Item 1", "Item 2", "Item 3"])
              </script>
            </div>
          `}
        </Example>
      </Directive>
    </Section>
  )
}
