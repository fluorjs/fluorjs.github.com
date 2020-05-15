import React from "react"
import styled from "components/styled"

const Root = styled("aside", [
  "mt-4",
  "mb-8",
  "p-4",
  "bg-blue-100",
  "border",
  "border-blue-300",
  "text-blue-800",
  "text-sm",
  "rounded-lg",
  "flex",
])

export default function Info({ children }) {
  return (
    <Root>
      <svg
        className="text-blue-600 fill-current mr-2 mt-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </svg>
      <div className="flex-1">{children}</div>
    </Root>
  )
}

Info.P = styled("p", ["text-sm", "sm:text-base", "text-blue-800"])
