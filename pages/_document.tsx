import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="//fonts.googleapis.com/css?family=Open+Sans:400" id="googlefont" rel="stylesheet" />
          <link rel="stylesheet" href="//www.balmuda.com/_theme/font/icon.css?20210630160508" />
          <link rel="stylesheet" media="(max-width: 640px)" href="//www.balmuda.com/_theme/style/mobile.css?20210630160510" />
          <link rel="stylesheet" media="(min-width: 641px)" href="//www.balmuda.com/_theme/style/desktop.css?20210630160509"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
