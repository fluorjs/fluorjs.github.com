import React from "react"
import clsx from "clsx"
import hljs from "highlight.js"

export default function Source({
  className,
  children,
  language = "javascript",
}) {
  const source = hljs.highlight(language, String(children)).value
  const cls = clsx(
    [
      "text-base",
      "font-mono",
      "text-gray-800",
      "bg-gray-200",
      "px-2",
      "py-1",
      "rounded",
    ],
    className
  )

  return (
    <code className={cls} dangerouslySetInnerHTML={{ __html: source }}></code>
  )
}
