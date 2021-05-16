import Footer from '../components/footer'

export default function DefaultLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}
