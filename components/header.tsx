import { useState } from 'react'
import Link from 'next/link'
import Products from './products'

export default function Header() {
  const [isShowProduct, setShowProduct] = useState(false)
  return (
    <header className="bg-202020 pt-6 text-center">
      <a href="/jp/" className="text-xl text-white">
        <img src="//www.balmuda.com/_theme/img/svg/balmuda_fff.min.svgz" className="m-auto" width="140" />
      </a>
      <nav className="flex items-center max-w-screen-lg h-12 mt-2 mx-auto text-ccc font-medium">
        <Link href="/">
          <a className="nav-item relative w-1/5 leading-10 hover:text-white">Home</a>
        </Link>
        <div className="product-container leading-10 cursor-pointer w-1/5 hover:text-white">
          <span className="nav-item relative block">Products</span>
          <div className="hidden w-full absolute left-0 top-24 translate-y-1 z-10">
            <Products />
          </div>
        </div>
        <Link href="/about">
          <a className="nav-item relative leading-10 w-1/5 hover:text-white">About</a>
        </Link>
        <Link href="/support">
          <a className="nav-item relative leading-10 w-1/5 hover:text-white">Support</a>
        </Link>
        <Link href="/support">
          <a className="nav-item relative leading-10 w-1/5 hover:text-white">News</a>
        </Link>
      </nav>
    </header>
  )
}
