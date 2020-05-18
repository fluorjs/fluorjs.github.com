import React from "react"
import Prism from "prism"
import tw from "components/tw"

const Root = tw("pre", { noForward: ["language"] })`
  text-sm
  overflow-x-auto
  font-mono
  p-4
  border
  border-solid
  border-gray-400
  rounded-lg
  ${({ language }) => `language-${language}`}
`

export default function Source({
  children,
  language = "javascript",
  ...props
}) {
  const sourceCode = fixSource(String(children))
  const source = Prism.highlight(
    sourceCode,
    Prism.languages[language],
    language
  )

  return (
    <Root {...props} language={language}>
      <code
        className={`language-${language}`}
        dangerouslySetInnerHTML={{ __html: source }}
      ></code>
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
