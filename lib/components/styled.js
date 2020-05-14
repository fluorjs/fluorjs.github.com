import React from "react"
import clsx from "clsx"

function isFunction(object) {
  return Boolean(object && object.constructor && object.call && object.apply)
}

export default (Component, ...tailwindStyles) => ({ className, ...props }) => {
  const resolvedStyles = tailwindStyles.map((style) =>
    isFunction(style) ? style(props) : style
  )
  return <Component className={clsx(...resolvedStyles, className)} {...props} />
}
