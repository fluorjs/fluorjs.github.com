import React from "react"
import tw from "components/tw"
import BaseSource from "./Source"

const Root = tw.div`my-4`
const Source = tw(BaseSource)`rounded-t-none`
const Run = tw.div`
  run
  bg-white
  border
  border-solid
  border-gray-300
  rounded-lg
  rounded-b-none
  p-8
  flex
  flex-col
  items-center
  text-center
`

export default function Example({ children }) {
  return (
    <Root>
      <Run dangerouslySetInnerHTML={{ __html: String(children) }} />
      <Source language="html">{children}</Source>
    </Root>
  )
}
