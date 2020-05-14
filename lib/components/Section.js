import React from "react"
import styled from "components/styled"

const Root = styled("article", ["mb-12"])
const Title = styled("h2", ["text-xl", "sm:text-2xl", "font-bold"])

export default function Section({ children, title, ...props }) {
  return (
    <Root {...props}>
      <Title>{title}</Title>
      {children}
    </Root>
  )
}

Section.P = styled("p", [
  "sm:text-lg",
  "my-4",
  "first-child:mt-0",
  "last-child:mb-0",
  "leading-relaxed",
  "text-gray-800",
])
