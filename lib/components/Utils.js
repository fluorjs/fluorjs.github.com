import React from "react"
import Code from "./Code"

export const Ref = ({ children, member }) => (
  <a href={`#api-${member}`} className="no-underline">
    {children}
  </a>
)

export const FunctionRef = ({ member }) => (
  <Ref member={member}>
    <Code language="fluor-function" className="hover:bg-gray-800">
      {member}
    </Code>
  </Ref>
)

export const ActionRef = ({ member }) => (
  <Ref member={member}>
    <Code language="fluor-action" className="hover:bg-gray-800">
      {member}
    </Code>
  </Ref>
)

export const ObjectRef = ({ member }) => (
  <Ref member={member}>
    <Code language="fluor-object" className="hover:bg-gray-800">
      {member}
    </Code>
  </Ref>
)

export const CAction = ({ children }) => (
  <Code language="fluor-action">{children}</Code>
)
export const CBool = ({ children }) => (
  <Code language="fluor-boolean">{children}</Code>
)
export const CFunction = ({ children }) => (
  <Code language="fluor-function">{children}</Code>
)
export const CMixed = ({ children }) => (
  <Code language="fluor-mixed">{children}</Code>
)
export const CNumber = ({ children }) => (
  <Code language="fluor-number">{children}</Code>
)
export const CString = ({ children }) => (
  <Code language="fluor-string">{children}</Code>
)
export const CObject = ({ children }) => (
  <Code language="fluor-object">{children}</Code>
)
