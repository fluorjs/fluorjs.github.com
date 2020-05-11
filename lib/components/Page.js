import React from "react"
import { Helmet } from "react-helmet"

export default function Page({ children }) {
  return (
    <React.Fragment>
      <Helmet
        titleTemplate="Fluor.js - %s"
        defaultTitle="Fluor.js - Sprinkle interactivity on your design"
      >
        <html lang="en" />
        <link rel="shortcut icon" href="/assets/logo.svg" />
        <link rel="stylesheet" href="/assets/styles.css" />
        <link rel="stylesheet" href="/assets/atom-one-light.css" />
        <script
          type="module"
          src="//cdn.jsdelivr.net/npm/fluor@0.2.0/dist/fluor.dev.js"
        ></script>
      </Helmet>
      {children}
    </React.Fragment>
  )
}
