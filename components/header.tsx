import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-202020 pt-6 text-center">
      <a href="/jp/" className="text-xl text-white">
        <img src="//www.balmuda.com/_theme/img/svg/balmuda_fff.min.svgz" className="m-auto" width="140" />
      </a>
      <nav className="flex items-center max-w-screen-lg h-12 mt-2 mx-auto text-ccc font-medium">
        <Link href="/">
          <a className="nav-item relative w-1/5 hover:text-white">Home</a>
        </Link>
        <span className="nav-item cursor-pointer relative w-1/5 hover:text-white">Products</span>
        <Link href="/about">
          <a className="nav-item relative w-1/5 hover:text-white">About</a>
        </Link>
        <Link href="/support">
          <a className="nav-item relative w-1/5 hover:text-white">Support</a>
        </Link>
        <Link href="/support">
          <a className="nav-item relative w-1/5 hover:text-white">News</a>
        </Link>
      </nav>
    </header>
  )
}
