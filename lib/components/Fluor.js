import React from "react"

export default function Fluor({ children }) {
  const script = `SCRIPT[${Buffer.from(children).toString("base64")}]`

  return <script type="fluor">{script}</script>
}
