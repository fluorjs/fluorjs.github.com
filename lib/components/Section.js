import React from "react"
import tw from "components/tw"

const Root = tw.article`mb-12`
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
  mt-4
  mb-6
  first-child:mt-0
  last-child:mb-0
  leading-relaxed
  text-gray-800
`

Section.Heading = tw.h3`text-xl font-bold text-gray-700`
