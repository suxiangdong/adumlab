import Link from 'next/link'
import ReactSlick from 'react-slick'
import Layout from '../layouts/default'

export default function About() {
  return (
    <Layout>
      <div className="flex flex-col justify-between h-custom-90 max-w-5xl mx-auto pt-6 pb-3 text-left">
        <Link href="/">
          <a className="block w-20">
            <img src="https://www.balmuda.com/_theme/img/svg/about.min.svgz" alt="About" />
          </a>
        </Link>
        <div className="text-xs">
          <Link href="/">
            <a className="text-green mr-6">概要</a>
          </Link>
          <Link href="/">
            <a className="mr-6">デザイン</a>
          </Link>
          <Link href="/">
            <a className="mr-6">淹れ方</a>
          </Link>
          <Link href="/">
            <a className="mr-6">ストーリー</a>
          </Link>
        </div>
      </div>
      <ReactSlick arrows={false} dots>
        <div>
          <img className="w-full" src="https://www.balmuda.com/jp/about/img/index/desktop/billboard/0@2x.jpg?20200221" />
        </div>
        <div>
          <img className="w-full" src="https://www.balmuda.com/jp/about/img/index/desktop/billboard/1@2x.jpg?20200221" />
        </div>
        <div>
          <img className="w-full" src="https://www.balmuda.com/jp/about/img/index/desktop/billboard/2@2x.jpg?20200221" />
        </div>
        <div>
          <img className="w-full" src="https://www.balmuda.com/jp/about/img/index/desktop/billboard/3@2x.jpg?20200221" />
        </div>
        <div>
          <img className="w-full" src="https://www.balmuda.com/jp/about/img/index/desktop/billboard/4@2x.jpg?20200221" />
        </div>
      </ReactSlick>
    </Layout>
  )
}
