import React from "react"
import { Helmet } from "react-helmet"

import {
  Button,
  Code,
  Example,
  Fluor,
  Page,
  Section,
  Source,
  Warning,
} from "components"

export default function Index() {
  return (
    <Page>
      <Helmet>
        <link rel="stylesheet" href="/assets/home.css" />
      </Helmet>

      <nav className="p-4 flex justify-center items-center bg-green-400">
        {/* <div className="flex items-center bg-green-800 p-2 rounded-lg text-green-100"> */}
        {/*   <svg */}
        {/*     className="fill-current text-green-200 mr-2" */}
        {/*     xmlns="http://www.w3.org/2000/svg" */}
        {/*     viewBox="0 0 24 24" */}
        {/*     width="24" */}
        {/*     height="24" */}
        {/*   > */}
        {/*     <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /> */}
        {/*   </svg> */}
        {/*   <input */}
        {/*     type="search" */}
        {/*     placeholder="Search docs..." */}
        {/*     className="bg-green-800 placeholder-green-200" */}
        {/*     f-value="search" */}
        {/*   /> */}
        {/* </div> */}
      </nav>

      <header className="max-w-3xl mx-auto px-4 py-12 sm:py-20 flex flex-col items-center justify-center">
        <h1 className="font-maven text-5xl sm:text-6xl text-green-400 tracking-wide leading-none mt-6 flex items-center justify-center flex-wrap">
          <img
            src="/assets/logo.svg"
            alt=""
            className="w-12 h-12 sm:w-16 sm:h-16 mr-4 mb-2 sm:mb-0"
          />
          Fluor.js
        </h1>
        <h2 className="text-lg sm:text-xl text-gray-600 text-center mt-4">
          Sprinkle interactivity on your design
        </h2>

        <div className="max-w-full flex flex-col mt-10 sm:mt-20">
          <Source className="mb-4">
            {`
              on("click", "button", toggle("wobble", "h1"))
              on("animationend", "h1", toggle("wobble"))
            `}
          </Source>
          <Button className="rounded-full px-4 py-4 self-center flex">
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M4 0 L4 24 L24 12 Z" />
            </svg>
            Try now
          </Button>
        </div>

        <Fluor>
          {`
            on("click", "button", toggle("wobble", "h1"))
            on("animationend", "h1", toggle("wobble"))
          `}
        </Fluor>
      </header>

      <main className="max-w-3xl mx-auto px-4">
        <Section id="intro" title="What is it?">
          <Section.P>
            Fluor.js is a tiny JavaScript library that provides you with a
            high-level language to easily add interactions and effects to your
            websites.
          </Section.P>
          <Section.P>
            It is great for prototypes, UI and UX research and for all websites
            that do not require the cumbersome machinery of a full-fledged
            framework.
          </Section.P>
          <Section.P>
            It is inspired by <a href="http://uilang.com">uilang</a> and{" "}
            <a href="https://github.com/alpinejs/alpine">Alpine.js</a>, has no
            dependencies and can be added to any page with a single line of
            HTML.
          </Section.P>
        </Section>

        <Section id="usage" title="Usage">
          <Section.P>
            To load the latest version of Fluor.js in your webpage, all you need
            to do is drop this HTML snippet just before the{" "}
            <Code language="html">{`</body>`}</Code> tag of your document:
          </Section.P>

          <Source language="html">
            {`
              <script type="module" src="//cdn.jsdelivr.net/npm/fluor@latest/dist/fluor.min.js"></script>
            `}
          </Source>

          <Warning>
            <Warning.P className="text-orange-400">
              Fluor.js is still experimental so you may encounter breaking
              changes when using the <Code>latest</Code> version. You can use a
              fixed version number instead of <Code>latest</Code> to avoid those
              breaking changes.
            </Warning.P>
          </Warning>

          <Section.P>
            To use Fluor.js, add a{" "}
            <Code language="html">{`<script type="fluor">`}</Code> tag inside
            one of your HTML elements with your Fluor code. Here&apos;s an
            example:
          </Section.P>

          <Example>
            {`
              <div>
                <p>Number of clicks: <slot f-text="clicks"></slot></p>
                <button>Click me</button>

                <script type="fluor">
                  setup("clicks", 0)
                  on("click", "button", set("clicks", n => n + 1))
                </script>
              </div>
            `}
          </Example>
        </Section>

        <Section id="Guide" title="Guide"></Section>

        <Section id="api" title="API">
          <APISection member="set"></APISection>
          <APISection member="setup"></APISection>
          <APISection member="on"></APISection>
          <APISection member="toggle"></APISection>
          <APISection member="append"></APISection>
          <APISection member="prepend"></APISection>
          <APISection member="pop"></APISection>
          <APISection member="shift"></APISection>
          <APISection member="withEvent"></APISection>
          <APISection member="render"></APISection>
          <APISection member="classes"></APISection>
          <APISection member="$data"></APISection>
          <APISection member="$id"></APISection>
          <APISection member="$root"></APISection>
          <APISection member="$parent"></APISection>
          <APISection member="$"></APISection>
          <APISection member="$$"></APISection>
        </Section>
      </main>
    </Page>
  )
}

function APISection({ children, member }) {
  return (
    <section id={`api-${member}`}>
      <h3>
        <code>{member}</code>
      </h3>
      {children}
    </section>
  )
}
