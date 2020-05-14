import React from "react"
import clsx from "clsx"
import hljs from "highlight.js"

function fixSource(source) {
  const trimmedSource = source.replace(/^\n+/, "").trimEnd()
  const firstLineIndentMatch = trimmedSource.match(/^\s+/)
  return firstLineIndentMatch === null
    ? trimmedSource
    : trimmedSource.replace(new RegExp(`^${firstLineIndentMatch[0]}`, "gm"), "")
}

export default function FluorSource({ className, children }) {
  const sourceCode = fixSource(String(children))
  const source = hljs.highlight("javascript", sourceCode).value
  const cls = clsx(
    [
      "text-sm",
      "sm:text-base",
      "overflow-x-auto",
      "font-mono",
      "text-gray-800",
      "bg-gray-200",
      "p-4",
      "rounded-lg",
      "shadow-inner",
    ],
    className
  )

  return (
    <pre className={cls}>
      <code dangerouslySetInnerHTML={{ __html: source }}></code>
    </pre>
  )
}
