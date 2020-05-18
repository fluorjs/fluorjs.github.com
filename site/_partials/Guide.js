import React from "react"
import { Code, Example, Info, Section } from "components"

export default function Guide() {
  return (
    <Section id="Guide" title="Guide">
      <Section.P>
        To use Fluor.js, add a{" "}
        <Code language="html">{`<script type="fluor">`}</Code> tag inside one of
        your HTML elements with your Fluor code. Here&apos;s an example:
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

      <Section.Heading id="guide-variables">Variables</Section.Heading>
      <Section.Heading id="guide-events">Reacting to events</Section.Heading>
      <Section.Heading id="guide-actions">Actions</Section.Heading>
      <Section.Heading id="guide-js">{`It's just JavaScript!`}</Section.Heading>

      <Info>
        <Info.P>This guide is still under construction</Info.P>
      </Info>
    </Section>
  )
}
