import React from "react"
import { Helmet } from "react-helmet"

import { Button, Fluor, FluorSource, Page } from "components"

export default function Index() {
  return (
    <Page>
      <Helmet>
        <link rel="stylesheet" href="/assets/home.css" />
      </Helmet>

      <nav className="p-4 flex justify-center items-center bg-green-400">
        <input
          type="search"
          placeholder="Search docs..."
          className="w-48 bg-green-800 text-green-100 rounded-lg p-2 placeholder-green-200 border-2 border-green-500 shadow-inner"
        />
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
          <FluorSource className="rounded mb-4">
            {`
              on("click", "button", toggle("wobble", "h1"))
              on("animationend", "h1", toggle("wobble"))
            `}
          </FluorSource>
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

      <main className="max-w-3xl mx-auto px-8">
        <article id="intro">
          <h2>What is it?</h2>
          <p>
            Fluor.js is a small JavaScript library that provides a high-level
            language for easily adding interactions and effects to your
            websites.
          </p>
          <p>
            It is great for prototypes, UI and UX research and for all websites
            that do not require the cumbersome machinery of a full-fledged
            framework.
          </p>
          <p>
            It is inspired by <a href="http://uilang.com">uilang</a> and{" "}
            <a href="https://github.com/alpinejs/alpine">Alpine.js</a>, has 0
            dependencies and can be added to any page with a single line of
            HTML.
          </p>
        </article>
      </main>
    </Page>
  )
}
