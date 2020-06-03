import React from "react"
import tw from "windsock"
import searchable from "./searchable"

export default function APIMember({
  children,
  member,
  type,
  shortDescription,
  ...props
}) {
  const Signature = SIGNATURE_COMPONENTS[type]
  const Label = LABEL_COMPONENTS[type]
  return (
    <section
      id={`api-${member}`}
      className="mt-4 mb-16 md:mb-24 target:bg-green-100 md:shadow p-4 md:p-8 md:pt-4 md:pb-8 rounded md:box-content w-full md:-ml-8"
      style={{ scrollMarginTop: "6rem" }}
      {...searchable({
        category: "api",
        name: member,
        type,
        link: `#api-${member}`,
        shortDescription: shortDescription || "",
      })}
    >
      <h3 className="text-lg font-mono mb-2 flex items-center">
        <a href={`#api-${member}`} className="order-last md:order-none">
          <svg
            className="inline fill-current text-gray-500 hover:text-gray-700 w-4 h-4 md:-ml-5 ml-2 md:mr-2 md:ml-0 order-last"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M19.48 13.03A4 4 0 0 1 16 19h-4a4 4 0 1 1 0-8h1a1 1 0 0 0 0-2h-1a6 6 0 1 0 0 12h4a6 6 0 0 0 5.21-8.98L21.2 12a1 1 0 1 0-1.72 1.03zM4.52 10.97A4 4 0 0 1 8 5h4a4 4 0 1 1 0 8h-1a1 1 0 0 0 0 2h1a6 6 0 1 0 0-12H8a6 6 0 0 0-5.21 8.98l.01.02a1 1 0 1 0 1.72-1.03z" />
          </svg>
        </a>
        <span className="font-black flex-auto">{member}</span>
        <Label>{type}</Label>
      </h3>
      {Signature && <Signature member={member} {...props} />}
      {children}
    </section>
  )
}

APIMember.Examples = function Examples({ children }) {
  return (
    <details className="my-8 last:mb-0">
      <summary className="uppercase text-gray-700 font-bold">Examples</summary>
      {children}
    </details>
  )
}

const LabelComponent = tw.em`not-italic text-xs rounded p-2 ml-2 leading-none`
export const LABEL_COMPONENTS = {
  action: tw(LabelComponent)`bg-blue-300 text-blue-900`,
  function: tw(LabelComponent)`bg-yellow-400 text-yellow-900`,
  object: tw(LabelComponent)`bg-orange-400 text-orange-900`,
  string: tw(LabelComponent)`bg-green-400 text-green-900`,
}

const FunctionMember = tw.var`not-italic text-yellow-400`
const ActionMember = tw.var`not-italic text-blue-300`

const SIGNATURE_COMPONENTS = {
  function: CallableSignatureFor(FunctionMember),
  action: CallableSignatureFor(ActionMember),
}

function CallableSignatureFor(MemberTypeComponent) {
  return function CallableSignature({ member, signatures }) {
    return (
      <ul className="text-sm p-4 bg-gray-900 text-gray-300 rounded-lg">
        {signatures.map((signature, i) => (
          <li key={i}>
            <code>
              <MemberTypeComponent>{member}</MemberTypeComponent>(
              {signature.map((argument, j) => {
                const ArgumentComponent =
                  ARGUMENT_TYPE_COMPONENTS[argument.type]
                return (
                  <React.Fragment key={j}>
                    {j > 0 && ", "}
                    <ArgumentComponent>{argument.name}</ArgumentComponent>
                    {argument.array && "[]"}
                    {argument.rest && "..."}
                  </React.Fragment>
                )
              })}
              )
            </code>
          </li>
        ))}
      </ul>
    )
  }
}

const ArgumentTypeComponent = tw.var`not-italic`

const ARGUMENT_TYPE_COMPONENTS = {
  action: tw(ArgumentTypeComponent)`text-blue-300`,
  function: tw(ArgumentTypeComponent)`text-yellow-400`,
  mixed: tw(ArgumentTypeComponent)`text-pink-500`,
  number: tw(ArgumentTypeComponent)`text-purple-500`,
  object: tw(ArgumentTypeComponent)`text-orange-500`,
  string: tw(ArgumentTypeComponent)`text-green-400`,
}
