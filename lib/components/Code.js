import React from "react"
import hljs from "highlight.js"
import styled from "components/styled"

const Root = styled("code", [
  "text-base",
  "font-mono",
  "text-gray-800",
  "bg-gray-200",
  "px-1",
  "py-1",
  "rounded",
])

export default function Code({ children, language = "javascript", ...props }) {
  const source = hljs.highlight(language, String(children)).value

  return <Root dangerouslySetInnerHTML={{ __html: source }} {...props} />
}
