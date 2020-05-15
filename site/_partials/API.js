import React from "react"
import { Info, Section } from "components"

export default function API() {
  return (
    <Section id="api" title="API">
      <APIMember member="set"></APIMember>
      <APIMember member="setup"></APIMember>
      <APIMember member="on"></APIMember>
      <APIMember member="addClass"></APIMember>
      <APIMember member="removeClass"></APIMember>
      <APIMember member="toggleClass"></APIMember>
      <APIMember member="append"></APIMember>
      <APIMember member="prepend"></APIMember>
      <APIMember member="pop"></APIMember>
      <APIMember member="shift"></APIMember>
      <APIMember member="withEvent"></APIMember>
      <APIMember member="render"></APIMember>
      <APIMember member="classes"></APIMember>
      <APIMember member="$data"></APIMember>
      <APIMember member="$id"></APIMember>
      <APIMember member="$root"></APIMember>
      <APIMember member="$parent"></APIMember>
      <APIMember member="$"></APIMember>
      <APIMember member="$$"></APIMember>
    </Section>
  )
}

function APIMember({ children, member }) {
  return (
    <section id={`api-${member}`}>
      <h3>
        <code>{member}</code>
      </h3>
      <Info>
        <Info.P>Under construction</Info.P>
      </Info>
      {children}
    </section>
  )
}
