import React from "react"
import styled from "components/styled"
import BaseSource from "./Source"

const Root = styled("div", ["my-4"])
const Source = styled(BaseSource, ["rounded-t-none"])
const Run = styled("div", [
  "run",
  "bg-white",
  "border",
  "border-solid",
  "border-gray-300",
  "rounded-lg",
  "rounded-b-none",
  "p-8",
  "flex",
  "flex-col",
  "items-center",
  "text-center",
])

export default function Example({ children }) {
  return (
    <Root>
      <Run dangerouslySetInnerHTML={{ __html: String(children) }} />
      <Source language="html">{children}</Source>
    </Root>
  )
}
