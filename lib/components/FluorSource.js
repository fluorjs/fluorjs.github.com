import React from "react"
import hljs from "highlight.js"

export default function FluorSource({ children }) {
  const sourceCode = String(children).replace(/^\n+/, "").trimEnd()
  const firstLineIndentMatch = sourceCode.match(/^\s+/)
  const fixedSourceCode =
    firstLineIndentMatch === null
      ? sourceCode
      : sourceCode.replace(new RegExp(`^${firstLineIndentMatch[0]}`, "gm"), "")
  const source = hljs.highlight("javascript", fixedSourceCode).value
  return (
    <pre className="text-xs sm:text-base overflow-x-auto">
      <code dangerouslySetInnerHTML={{ __html: source }}></code>
    </pre>
  )
}
