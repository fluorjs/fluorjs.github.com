import React from "react"
import { Section } from "components"

export default function Intro() {
  return (
    <Section id="intro" title="What is it?">
      <Section.P>
        Fluor.js is a tiny JavaScript library that provides you with a
        high-level language to easily add interactions and effects to your
        websites.
      </Section.P>
      <Section.P>
        It is great for prototypes, UI and UX research and for all websites that
        do not require the cumbersome machinery of a full-fledged framework.
      </Section.P>
      <Section.P>
        It is inspired by <a href="http://uilang.com">uilang</a> and{" "}
        <a href="https://github.com/alpinejs/alpine">Alpine.js</a>, has no
        dependencies and can be added to any page with a single line of HTML.
      </Section.P>
    </Section>
  )
}
