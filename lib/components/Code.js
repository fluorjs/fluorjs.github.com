import React from "react"
import prism from "prismjs"
import tw from "components/tw"

const Root = tw("code", { noForward: ["language"] })`
  text-base
  font-mono
  text-gray-800
  bg-gray-200
  px-1
  py-1
  rounded
  ${({ language }) => `language-${language}`}
`

export default function Code({ children, language = "javascript", ...props }) {
  const source = prism.highlight(
    String(children),
    prism.languages[language],
    language
  )

  return <Root dangerouslySetInnerHTML={{ __html: source }} {...props} />
}
