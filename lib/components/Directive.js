import React from "react"
import searchable from "./searchable"

export default function Directive({ children, name, shortDescription }) {
  return (
    <section
      id={`directive-${name}`}
      className="mt-4 mb-16 md:mb-24 target:bg-green-100 md:shadow p-4 md:p-8 md:pt-4 md:pb-8 rounded md:box-content w-full md:-ml-8"
      style={{ scrollMarginTop: "6rem" }}
      {...searchable({
        category: "api",
        name,
        type: "directive",
        link: `#directive-${name}`,
        shortDescription: shortDescription || "",
      })}
    >
      <h3 className="text-lg font-mono mb-2 flex items-center">
        <a href={`#directive-${name}`} className="order-last md:order-none">
          <svg
            className="inline fill-current text-gray-500 hover:text-gray-700 w-4 h-4 md:-ml-5 ml-2 md:mr-2 md:ml-0 order-last"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M19.48 13.03A4 4 0 0 1 16 19h-4a4 4 0 1 1 0-8h1a1 1 0 0 0 0-2h-1a6 6 0 1 0 0 12h4a6 6 0 0 0 5.21-8.98L21.2 12a1 1 0 1 0-1.72 1.03zM4.52 10.97A4 4 0 0 1 8 5h4a4 4 0 1 1 0 8h-1a1 1 0 0 0 0 2h1a6 6 0 1 0 0-12H8a6 6 0 0 0-5.21 8.98l.01.02a1 1 0 1 0 1.72-1.03z" />
          </svg>
        </a>
        <span className="font-black flex-auto">{name}</span>
      </h3>
      {children}
    </section>
  )
}

Directive.Examples = function Examples({ children }) {
  return (
    <details className="my-8 last:mb-0">
      <summary className="uppercase text-gray-700 font-bold">Examples</summary>
      {children}
    </details>
  )
}
