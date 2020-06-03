import React from "react"
import { Code, Example, Section, Source, Warning, searchable } from "components"

export default function Quickstart() {
  return (
    <Section
      id="guide-quickstart"
      title="Quickstart"
      style={{ scrollMarginTop: "6rem" }}
      {...searchable({
        category: "guide",
        name: "Quickstart",
        link: "#guide-quickstart",
        type: "",
        shortDescription: "Setup Fluor.js in your project in a few minutes.",
      })}
    >
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
          <!-- Your script executes only within its root element -->
          <div>
            <p>
              <!-- We use the clicks variable contents as text of the strong element  -->
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
    </Section>
  )
}
