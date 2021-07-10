import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="//fonts.googleapis.com/css?family=Open+Sans:400" id="googlefont" rel="stylesheet" />
          <link rel="stylesheet" href="/_theme/font/icon.css" />
          <link rel="stylesheet" media="(max-width: 640px)" href="/_theme/style/mobile.css" />
          <link rel="stylesheet" media="(min-width: 641px)" href="/_theme/style/desktop.css"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
