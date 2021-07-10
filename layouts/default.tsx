import Footer from '../components/footer'
import Header from '../components/header'

export default function DefaultLayout({ children }) {
  return (
    <>
			<Header />
      <div className="main">{children}</div>
      <Footer />
    </>
  )
}
