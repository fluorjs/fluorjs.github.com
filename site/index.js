import React from "react"
import { Helmet } from "react-helmet"

import { Button, Fluor, FluorSource, Page } from "components"

function Menu() {
  return (
    <ul className="flex justify-center items-center">
      {[
        { text: "Handbook", href: "/handbook/" },
        { text: "GitHub", href: "https://github.com/fluorjs/fluor" },
      ].map(({ text, href }) => (
        <li key={href}>
          <a
            className="py-4 px-6 text-yellow-700 hover:text-yellow-500 font-bold text-lg leading-none"
            href={href}
          >
            {text}
          </a>
        </li>
      ))}
    </ul>
  )
}

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
          <p className="text-xl sm:text-2xl text-green-900 text-center mt-4">
            Sprinkle interactivity on your design
          </p>
        </header>

        <article className="max-w-full mt-6">
          <Menu />

          <div className="flex flex-col sm:flex-row mt-6">
            <FluorSource className="rounded-b-none sm:rounded-l sm:rounded-r-none">
              {`
                on("click", "button", toggle("wobble", "header"))
                on("animationend", "header", toggle("wobble"))
              `}
            </FluorSource>
            <Button className="rounded-t-none sm:rounded-r sm:rounded-l-none">
              Run
            </Button>
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
