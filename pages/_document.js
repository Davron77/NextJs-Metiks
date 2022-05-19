import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="/fonts/style.css" rel="stylesheet" />
      </Head>

      <body>
        <Main />
        <NextScript />
        {/* Your portal here */}
        <div id="modal-root"></div>
      </body>
    </Html>
  )
}
