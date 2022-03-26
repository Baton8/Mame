import NextDocument, { Head, Html, Main, NextScript } from "next/document"
import React from "react"


const TITLE = "mame"
const DESCRIPTION = ""

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <title>{TITLE}</title>
          <meta name="description" content={DESCRIPTION} />
          <meta property="og:url" content="http://learninganimals.io" />
          <meta property="og:title" content={TITLE} />
          <meta property="og:site_name" content={TITLE} />
          <meta property="og:description" content={DESCRIPTION} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/ogp.png" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Passion+One:wght@700;900&display=swap" rel="stylesheet"/>
          
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
