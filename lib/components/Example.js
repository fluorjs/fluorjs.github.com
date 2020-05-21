import React from "react"
import tw from "windsock"
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
  ${({ title }) => title && "rounded-t-none"}
`
const Title = tw.header`uppercase text-gray-600 text-sm bg-gray-200 p-2 rounded-lg rounded-b-none`

export default function Example({ children, title }) {
  return (
    <Root>
      {title && <Title>{title}</Title>}
      <Run
        title={title}
        dangerouslySetInnerHTML={{ __html: String(children) }}
      />
      <Source language="html">{children}</Source>
    </Root>
  )
}
