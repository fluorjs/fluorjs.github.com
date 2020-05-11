import React from "react"

import { Fluor, FluorSource, Page } from "components"

export default function Index() {
  return (
    <Page>
      <main className="max-w-3xl h-screen mx-auto p-8 flex flex-col items-center justify-center">
        <header className="flex flex-col items-center justify-center">
          <img src="/assets/logo.svg" alt="" className="w-24" />
          <h1 className="font-maven text-4xl sm:text-5xl text-green-400 tracking-wide leading-none mt-6">
            {"Fluor.js".split("").map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </h1>
          <p className="text-xl sm:text-2xl text-green-900 text-center mt-4 mb-8">
            Sprinkle interactivity on your design
          </p>
        </header>

        <article>
          <FluorSource>{`on("click", "button", toggle("wooosh", "h1"))`}</FluorSource>
          <div className="mt-6 flex justify-center">
            <button className="py-4 px-6 text-lg mr-4">Try it!</button>
            <a
              className="rounded py-4 px-6 bg-white text-green-900 hover:text-green-700 font-bold text-lg shadow-md leading-none"
              href="https://github.com/fluorjs/fluor/"
            >
              Get Started
            </a>
          </div>
        </article>

        <Fluor>{`console.log($root); on("click", "button", toggle("wooosh", "h1"))`}</Fluor>
      </main>
    </Page>
  )
}
