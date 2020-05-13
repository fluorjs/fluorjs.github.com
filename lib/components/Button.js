import React from "react"
import clsx from "clsx"

export default function Button({ className, ...props }) {
  const cls = clsx(
    [
      "rounded",
      "py-3",
      "px-4",
      "font-bold",
      "shadow-md",
      "leading-none",
      props.disabled ? "bg-green-200" : "bg-green-400",
      props.disabled ? "text-green-500" : "text-blue-900",
      "focus:outline-none",
      "focus:shadow-outline",
    ],
    {
      "hover:bg-green-300": !props.disabled,
      "hover:text-green-800": !props.disabled,
      "cursor-not-allowed": props.disabled,
    },
    className
  )

  return <button className={cls} {...props}></button>
}
