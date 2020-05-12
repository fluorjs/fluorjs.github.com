import React from "react"
import { Helmet } from "react-helmet"

import { Fluor, FluorSource, Page } from "components"

export default function Index() {
  return (
    <Page>
      <Helmet>
        <link rel="stylesheet" href="/assets/home.css" />
      </Helmet>
      <main className="max-w-3xl h-screen mx-auto p-8 flex flex-col items-center justify-center">
        <header className="flex flex-col items-center justify-center">
          <img src="/assets/logo.svg" alt="" className="w-24" />
          <h1 className="font-maven text-4xl sm:text-5xl text-green-400 tracking-wide leading-none mt-6">
            Fluor.js
          </h1>
          <p className="text-xl sm:text-2xl text-green-900 text-center mt-4 mb-8">
            Sprinkle interactivity on your design
          </p>
        </header>

        <article className="max-w-full">
          <FluorSource>
            {`
              on("click", "button", toggle("wobble", "header"))
              on("animationend", "header", toggle("wobble"))
            `}
          </FluorSource>
          <div className="mt-2 flex flex-wrap justify-center">
            <button className="py-4 px-6 text-lg mr-4 mt-4">Try it!</button>
            <a
              className="rounded py-4 px-6 mt-4 bg-white text-green-900 hover:text-green-700 font-bold text-lg shadow-lg leading-none"
              href="https://github.com/fluorjs/fluor/"
            >
              Get Started
            </a>
          </div>
        </article>

        <Fluor>
          {`
            on("click", "button", toggle("wobble", "header"))
            on("animationend", "header", toggle("wobble"))
          `}
        </Fluor>
      </main>
    </Page>
  )
}
