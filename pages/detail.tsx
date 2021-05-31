import Link from 'next/link'
import ReactSlick from 'react-slick'
import Layout from '../layouts/default'

export default function ProductDetail() {
  return (
    <Layout>
      <div className="flex flex-col justify-between h-custom-90 max-w-5xl mx-auto pt-6 pb-3 text-left">
        <Link href="/">
          <a className="block w-60">
            <img src="https://www.balmuda.com/_theme/img/svg/balmuda-the-pot.min.svgz" alt="BALMUDA The Pot" />
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
          <img className="w-full" src="https://www.balmuda.com/jp/pot/img/index/desktop/billboard--00@2x.jpg?20201006" />
        </div>
        <div>
          <img className="w-full" src="https://www.balmuda.com/jp/pot/img/index/desktop/billboard--01@2x.jpg?20201006" />
        </div>
        <div>
          <img className="w-full" src="https://www.balmuda.com/jp/pot/img/index/desktop/billboard--02@2x.jpg?20201006" />
        </div>
        <div>
          <img className="w-full" src="https://www.balmuda.com/jp/pot/img/index/desktop/billboard--03@2x.jpg?20201006" />
        </div>
      </ReactSlick>
      <section className="py-24 text-center">
        <img className="max-w-xl mx-auto" src="https://www.balmuda.com/jp/pot/img/index/desktop/main@2x.jpg?20201006" alt="main image" />
        <h2 className="text-4xl mb-8">小さくて美しい電気ケトル</h2>
        <span className="block text-999 text-xs border border-999 h-8 leading-8 w-80 mx-auto mb-8">600ml　1200W　ステンレス製　電気ケトル</span>
        <p className="text-xl mb-12">
          BALMUDA The Potは、毎日使いたくなる
          <br />
          今までにない美しいデザインの電気ケトルです。
        </p>
        <p className="price text-4xl">12,100</p>
      </section>
      <section className="text-white relative">
        <img src="https://www.balmuda.com/jp/pot/img/index/desktop/section--01@2x.jpg?20201005" alt="" />
        <div className="flex flex-col justify-center absolute inset-0 m-auto transform translate-x-2/4 max-w-md">
          <h2 className="text-4xl mb-8">デザイン</h2>
          <p className="text-lg mb-4 leading-8">収納スペースをとらない600mlのちょうどいいサイズ。注ぎごこちにこだわったノズルとハンドルの形。毎日、手軽に、気持ちよく使うためにデザインしました。</p>
          <Link href="/design">
            <a className="text-lg">続きを読む</a>
          </Link>
        </div>
      </section>
      <section className="relative">
        <img src="https://www.balmuda.com/jp/pot/img/index/desktop/section--02@2x.jpg?20201005" alt="" />

        <div className="flex flex-col justify-center absolute inset-0 m-auto transform -translate-x-2/4 translate-y-28 max-w-md">
          <h2 className="text-4xl mb-8">淹れ方</h2>
          <p className="text-lg mb-4 leading-8">収納スペースをとらない600mlのちょうどいいサイズ。注ぎごこちにこだわったノズルとハンドルの形。毎日、手軽に、気持ちよく使うためにデザインしました。</p>
          <Link href="/design">
            <a className="text-lg text-666">続きを読む</a>
          </Link>
        </div>
      </section>
      <section className="relative">
        <img src="https://www.balmuda.com/jp/pot/img/index/desktop/section--03@2x.jpg?20201005" alt="" />
        <div className="flex flex-col justify-center absolute inset-0 m-auto transform -translate-x-2/4 translate-y-28 max-w-md">
          <h2 className="text-4xl mb-8">ストーリー</h2>
          <p className="text-lg mb-4 leading-8">おいしい食事は私たちに元気をくれます。特別なごちそうでなくても、おいしいと思う瞬間が多いほど、楽しい思いもふくらみます。BALMUDA The Potとともに素晴らしいひとときを。</p>
          <Link href="/design">
            <a className="text-lg text-666">続きを読む</a>
          </Link>
        </div>
      </section>
      {/* <section className="relative text-center">
        <img src="https://www.balmuda.com/jp/pot/img/index/desktop/section--05@2x.jpg?20201005" alt="" />
        <div className="flex flex-col justify-center absolute inset-0 m-auto transform -translate-y-28 max-w-4xl">
          <img className="h-24 mb-6" src="https://www.balmuda.com/jp/pot/img/svg/starbucks-reserve.color.min.svgz?20201006" alt="" />
          <p className="text-lg text-coffee mb-4 leading-8">東京・中目黒のSTARBUCKS RESERVE® ROASTERY TOKYOと、全国のSTARBUCKS RESERVE® 取扱店舗で販売します。 </p>
          <Link href="/design">
            <a className="text-lg text-coffee">続きを読む</a>
          </Link>
        </div>
      </section> */}
      <section className="py-24 max-w-4xl mx-auto">
        <h2 className="text-4xl mb-8">ギャラリー</h2>
        <div className="grid grid-cols-3 grid-rows-2 gap-5">
          <img className="rounded" src="https://www.balmuda.com/jp/pot/img/index/gallery/1@2x.jpg?20201006" alt="" />
          <img className="rounded" src="https://www.balmuda.com/jp/pot/img/index/gallery/2@2x.jpg?20201006" alt="" />
          <img className="rounded" src="https://www.balmuda.com/jp/pot/img/index/gallery/3@2x.jpg?20201006" alt="" />
          <img className="rounded" src="https://www.balmuda.com/jp/pot/img/index/gallery/4@2x.jpg?20201006" alt="" />
          <img className="rounded" src="https://www.balmuda.com/jp/pot/img/index/gallery/5@2x.jpg?20201006" alt="" />
          <img className="rounded" src="https://www.balmuda.com/jp/pot/img/index/gallery/6@2x.jpg?20201006" alt="" />
        </div>
      </section>
    </Layout>
  )
}
