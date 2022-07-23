import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="/fonts/style.css" rel="stylesheet" />
        <title>Metiks</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/m.png" />
      </Head>

      <body>
        <Main />
        <div>
          <NextScript />
        </div>
        {/* Your portal here */}
        <div id="modal-root"></div>
        <div id="modal-search"></div>
        <div id="modal-video"></div>
      </body>
    </Html>
  )
}
