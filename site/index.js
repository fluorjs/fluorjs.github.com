import React from "react"
import { Helmet } from "react-helmet"

import { Button, Fluor, Page, Source } from "components"

import Sections from "./_partials/"

export default function Index() {
  return (
    <Page>
      <Helmet>
        <link rel="stylesheet" href="/assets/home.css" />
        <body className="pt-32" />
      </Helmet>

      <nav className="p-4 flex justify-center items-center bg-green-400 fixed w-screen top-0 shadow">
        <div className="flex items-center bg-green-800 p-2 rounded-lg text-green-100 focus-within:bg-green-900">
          <svg
            className="fill-current text-green-200 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          </svg>
          <input
            type="search"
            placeholder="Search docs..."
            className="bg-green-800 focus:bg-green-900 placeholder-green-200"
          />
        </div>

        <ul f-bind="class:searchResultsClass" style={{ bottom: "0.5rem" }}>
          <template f-each="match in matches">
            <li className="border-b">
              <a
                className="flex items-start flex-wrap p-4 block hover:bg-gray-200 no-underline text-gray-800 focus:shadow-outline"
                f-bind="href:match.link"
              >
                <small
                  className="mr-2 uppercase text-xs text-gray-600 bg-gray-100 p-1 rounded-xs"
                  f-text="match.category"
                ></small>
                <div className="flex-auto flex flex-col">
                  <p f-text="match.name"></p>
                  <p
                    className="w-full text-gray-600 mt-1"
                    f-text="match.shortDescription"
                  ></p>
                </div>
                <em f-text="match.type" f-bind="class:labelClass"></em>
              </a>
              <Fluor>{`
                setup("labelClass", \`search-label $\{$data.match.type}\`)
                on("click", "a", $parent.$data.resetMatches)
              `}</Fluor>
            </li>
          </template>
        </ul>

        <Fluor>
          {`
            const BASE_SEARCH_RESULTS_CLASS = "absolute bg-white shadow-xl rounded-md transform translate-y-full w-full max-w-2xl"
            const INITIAL_STATE = {
              searchResultsClass: classes([BASE_SEARCH_RESULTS_CLASS, "hidden"]),
              matches: [],
            }
            const resetMatches = set(INITIAL_STATE)
            setup({
              ...INITIAL_STATE,
              resetMatches: () => resetMatches
            })
            on("keyup", "input", withEvent(ev => findMatches(ev.target.value)))

            // We don't have support for modifiers on events yet so I'll manually
            // add the click:outside event
            document.addEventListener("click", (ev) => {
              if (!$$("ul").contains(ev.target)) {
                resetMatches()
              }
            })
            document.addEventListener("keyup", (ev) => {
              if ($data.matches.length && ev.key === "Escape") {
                resetMatches()
              }
            })

            function matchesSource(searchString, source) {
              const re = new RegExp(\`.*\${searchString}.*\`)

              return re.test(source.name) || re.test(source.shortDescription)
            }

            function findMatches(searchString) {
              if (!searchString.length) {
                return resetMatches
              }

              const sources = $("[data-search-meta]", document.body)
              const matches = [...sources].map(source => (
                JSON.parse(source.dataset.searchMeta)
              )).filter(source => matchesSource(searchString, source))

              return set({
                searchResultsClass: classes(BASE_SEARCH_RESULTS_CLASS),
                matches: matches,
              })
            }
          `}
        </Fluor>
      </nav>

      <header
        className="max-w-screen-md mx-auto px-4 flex flex-col items-center justify-center"
        style={{ height: "calc(100vh - 3.5rem)", marginTop: "-3.5rem" }}
      >
        <h1 className="font-maven text-5xl sm:text-6xl text-green-400 tracking-wide leading-none flex items-center justify-center flex-wrap">
          <img
            src="/assets/logo.svg"
            alt=""
            className="w-12 h-12 sm:w-16 sm:h-16 mr-4 mb-2 sm:mb-0"
          />
          Fluor.js
        </h1>
        <h2 className="text-lg sm:text-xl text-gray-600 text-center mt-8">
          Sprinkle interactivity on your design
        </h2>

        <div className="max-w-full flex flex-col mt-8">
          <Source className="mb-8">
            {`
              on("click", "button", addClass("wobble", "h1"))
              on("animationend", "h1", removeClass("wobble"))
            `}
          </Source>
          <Button className="self-center flex">
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
            on("click", "button", addClass("wobble", "h1"))
            on("animationend", "h1", removeClass("wobble"))
          `}
        </Fluor>
      </header>

      <main className="max-w-screen-md mx-auto px-4">
        <Sections.Intro />
        <Sections.Quickstart />
        <Sections.API />
      </main>
    </Page>
  )
}
