import React from "react"
import { Helmet } from "react-helmet"

export default function Page({ children }) {
  return (
    <React.Fragment>
      <Helmet
        titleTemplate="Fluor.js - %s"
        defaultTitle="Fluor.js - Sprinkle interactivity on your design"
      >
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <html lang="en" />
        <link rel="shortcut icon" href="/assets/logo.svg" />
        <link rel="stylesheet" href="/assets/styles.css" />
        <meta property="og:title" content="Fluor.js" />
        <meta
          property="og:description"
          content="Sprinkle interactivity on your design"
        />
        <meta
          property="og:image"
          content="https://fluorjs.github.io/assets/logo-256.png"
        />
        <meta property="og:url" content="https://fluorjs.github.io" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@madx" />
        <script
          type="module"
          src="https://cdn.jsdelivr.net/npm/fluor@0.4.2/dist/fluor.dev.js"
        ></script>
      </Helmet>
      {children}
    </React.Fragment>
  )
}
