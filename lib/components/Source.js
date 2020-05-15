import React from "react"
import hljs from "highlight.js"
import styled from "components/styled"

const Root = styled("pre", [
  "text-sm",
  "overflow-x-auto",
  "font-mono",
  "text-gray-800",
  "bg-gray-200",
  "p-4",
  "border",
  "border-solid",
  "border-gray-400",
  "rounded-lg",
])

export default function Source({
  children,
  language = "javascript",
  ...props
}) {
  const sourceCode = fixSource(String(children))
  const source = hljs.highlight(language, sourceCode).value

  return (
    <Root {...props}>
      <code dangerouslySetInnerHTML={{ __html: source }}></code>
    </Root>
  )
}

function fixSource(source) {
  const trimmedSource = source.replace(/^\n+/, "").trimEnd()
  const firstLineIndentMatch = trimmedSource.match(/^\s+/)
  return firstLineIndentMatch === null
    ? trimmedSource
    : trimmedSource.replace(new RegExp(`^${firstLineIndentMatch[0]}`, "gm"), "")
}
