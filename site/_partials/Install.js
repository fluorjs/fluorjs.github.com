import React from "react"
import { Code, Section, Source, Warning } from "components"

export default function Install() {
  return (
    <Section id="install" title="Install">
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
    </Section>
  )
}
