import React from "react"
import {
  Code,
  Example,
  Info,
  Section,
  Source,
  Warning,
  FunctionRef,
  ActionRef,
  searchable,
} from "components"

export default function Quickstart() {
  return (
    <Section id="guide" title="Quickstart">
      <Section.P>
        To load the latest version of Fluor.js in your webpage, all you need to
        do is drop this HTML snippet just before the{" "}
        <Code language="html">{`</body>`}</Code> tag of your document:
      </Section.P>

      <Source language="html">
        {`
          <script type="module" src="//cdn.jsdelivr.net/npm/fluor@latest/dist/fluor.min.js"></script>
        `}
      </Source>

      <Warning>
        <Warning.P className="text-orange-400">
          Fluor.js is still experimental so you may encounter breaking changes
          when using the <Code>latest</Code> version. You can use a fixed
          version number instead of <Code>latest</Code> to avoid those breaking
          changes.
        </Warning.P>
      </Warning>

      <Section.P>
        To use Fluor.js, add a{" "}
        <Code language="html">{`<script type="fluor">`}</Code> tag inside one of
        your HTML elements with your Fluor script code. Here&apos;s an example:
      </Section.P>

      <Example>
        {`
          <div>
            <p>
              <strong f-text="clicks"></strong>
            </p>
            <button>Click me</button>

            <!-- This is your fluor script -->
            <script type="fluor">
              setup("clicks", 0)
              on("click", "button", set("clicks", n => n + 1))
            </script>
          </div>
        `}
      </Example>

      <Section.Heading
        id="guide-variables"
        style={{ scrollMarginTop: "6rem" }}
        {...searchable({
          category: "guide",
          name: "Variables",
          link: "#guide-variables",
          type: "",
          shortDescription: "Learn how to use variables.",
        })}
      >
        Variables
      </Section.Heading>

      <Section.P>
        Variables are defined using the <FunctionRef member="setup" /> function
        and updated with the <ActionRef member="set" /> action. They can hold
        any type of value.
      </Section.P>

      <Section.Heading id="guide-events" style={{ scrollMarginTop: "6rem" }}>
        Reacting to events
      </Section.Heading>
      <Section.Heading id="guide-actions" style={{ scrollMarginTop: "6rem" }}>
        Actions
      </Section.Heading>
      <Section.Heading
        id="guide-js"
        style={{ scrollMarginTop: "6rem" }}
      >{`It's just JavaScript!`}</Section.Heading>

      <Info>
        <Info.P>This guide is still under construction</Info.P>
      </Info>
    </Section>
  )
}
