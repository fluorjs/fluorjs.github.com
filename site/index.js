import React from "react"
import { Helmet } from "react-helmet"

import { Button, Fluor, Page, Source } from "components"

import Sections from "./_partials/"

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

      <header className="max-w-3xl h-screen mx-auto px-4 flex flex-col items-center justify-center -mt-8">
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
        <Sections.Intro />
        <Sections.Install />
        <Sections.Guide />
        <Sections.API />
      </main>
    </Page>
  )
}
