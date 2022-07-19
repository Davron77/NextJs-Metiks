import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="/fonts/style.css" rel="stylesheet" />
        <title>Metiks</title>
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
