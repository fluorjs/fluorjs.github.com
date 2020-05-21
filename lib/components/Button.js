import tw from "windsock"

export default tw.button`
  rounded-full
  p-4
  font-bold
  shadow-md
  leading-none
  focus:outline-none
  focus:shadow-outline
  ${(props) => [
    props.disabled ? "bg-green-400" : "bg-green-500",
    props.disabled ? "text-green-200" : "text-green-100",
  ]}
  ${(props) => ({
    "hover:bg-green-600": !props.disabled,
    "cursor-not-allowed": props.disabled,
  })}
`
