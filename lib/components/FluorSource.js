import React from "react"
import hljs from "highlight.js"

export default function FluorSource({ children }) {
  const source = hljs.highlight("javascript", String(children)).value
  return (
    <pre className="text-xs sm:text-base">
      <code dangerouslySetInnerHTML={{ __html: source }}></code>
    </pre>
  )
}
