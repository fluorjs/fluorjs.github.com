import React from "react"
import tw from "windsock"

const Root = tw.article`mb-16`
const Title = tw.h2`text-xl sm:text-2xl font-bold`

export default function Section({ children, title, ...props }) {
  return (
    <Root {...props}>
      <Title>{title}</Title>
      {children}
    </Root>
  )
}

Section.P = tw.p`
  sm:text-lg
  my-4
  first:mt-0
  last:mb-0
  leading-relaxed
  text-gray-800
`

Section.Heading = tw.h3`text-xl font-bold text-gray-700`
