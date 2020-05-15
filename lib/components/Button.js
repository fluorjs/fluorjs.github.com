import styled from "components/styled"

export default styled(
  "button",
  (props) => [
    "rounded",
    "py-3",
    "px-4",
    "font-bold",
    "shadow-md",
    "leading-none",
    "focus:outline-none",
    "focus:shadow-outline",
    props.disabled ? "bg-green-200" : "bg-green-400",
    props.disabled ? "text-green-500" : "text-green-100",
  ],
  (props) => ({
    "hover:bg-green-500": !props.disabled,
    "cursor-not-allowed": props.disabled,
  })
)
