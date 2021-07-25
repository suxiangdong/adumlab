import '../styles/globals.css'
import lazySizes from 'lazysizes'

lazySizes.cfg.loadMode = 1
lazySizes.cfg.lazyloadClass = 'lazyload'
lazySizes.cfg.loadedClass = 'loaded'
lazySizes.cfg.expand = 10

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
