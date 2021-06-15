import Link from 'next/link'
import ReactSlick from 'react-slick'
import Layout from '../layouts/default'

export default function Home() {
  var settings = {
    dots: true,
    arrow: false
  }
  return (
    <Layout>
      <ReactSlick arrows={false} dots>
        <div>
          <img className="w-full" src="https://www.balmuda.com/jp/index/img/desktop/billboard/0.jpg?20210420" />
        </div>
        <div>
          <img className="w-full" src="https://www.balmuda.com/jp/index/img/desktop/billboard/1.jpg?20210420" />
        </div>
        <div>
          <img className="w-full" src="https://www.balmuda.com/jp/index/img/desktop/billboard/2.jpg?20210420" />
        </div>
        <div>
          <img className="w-full" src="https://www.balmuda.com/jp/index/img/desktop/billboard/3.jpg?20210420" />
        </div>
      </ReactSlick>
      <section className="py-16 px-8 border-b border-fuchsia-600">
        <h2 className="text-4xl text-center mb-4">人气爆品</h2>
        <div className="flex justify-center max-w-5xl mx-auto">
          <Link href="/p/toaster">
					<a className="w-1/5">
            <img className="hover:opacity-80" src="https://www.balmuda.com/jp/index/img/desktop/popular/0.jpg?20210429" />
            <p className="">BALMUDA THE Toaster</p>
            <p className="text-999 text-sm">スチームトースター</p>
          </a>
					</Link>
					<Link href="/p/cleaner">
					<a className="w-1/5">
            <img className="hover:opacity-80" src="https://www.balmuda.com/jp/index/img/desktop/popular/9.jpg?20210429" />
            <p className="">BALMUDA THE Cleaner</p>
            <p className="text-999 text-sm">ホバー式 クリーナー</p>
          </a>
					</Link>
					<Link href="/p/speaker">
					<a className="w-1/5">
            <img className="hover:opacity-80" src="https://www.balmuda.com/jp/index/img/desktop/popular/7.jpg?20210429" />
            <p className="">BALMUDA THE Speaker</p>
            <p className="text-999 text-sm">ワイヤレススピーカー</p>
          </a>
					</Link>
					<Link href="/p/range">
					<a className="w-1/5">
            <img className="hover:opacity-80" src="https://www.balmuda.com/jp/index/img/desktop/popular/10.jpg?20210429" />
            <p className="">BALMUDA THE Range</p>
            <p className="text-999 text-sm">オーブンレンジ</p>
          </a>
					</Link>

        </div>
      </section>
      <section className="max-w-5xl mx-auto py-16 text-left grid grid-cols-3 grid-rows-3 gap-4">
        <a href="">
          <img className="mb-6 hover:opacity-80" src="https://www.balmuda.com/jp/index/img/desktop/post/5@2x.jpg?20210429" alt="" />
          <h4 className="mb-2">バルミューダについて</h4>
          <p className="text-sm text-gray-200">バルミューダは2003年に東京で設立されたクリエイティブとテクノロジーの会社です。</p>
        </a>
        <a href="">
          <img className="mb-6 hover:opacity-80" src="https://www.balmuda.com/jp/index/img/desktop/post/6@2x.jpg?20210530" alt="" />
          <h4 className="mb-2">かけやすさを極めたクリーナー</h4>
          <p className="text-sm text-gray-200">独自のホバーテクノロジーによる抜群の操作性と、優れた集塵性能で掃除時間を大幅に短縮します。</p>
        </a>
        <a href="">
          <img className="mb-6 hover:opacity-80" src="https://www.balmuda.com/jp/index/img/desktop/post/16@2x.jpg?20210530" alt="" />
          <h4 className="mb-2">The GreenFan販売開始</h4>
          <p className="text-sm text-gray-200">今年度の販売を開始しました。特別限定カラー「ホワイト×シャンパンゴールド」もご用意しています。</p>
        </a>
        <a href="">
          <img className="mb-6 hover:opacity-80" src="https://www.balmuda.com/jp/index/img/desktop/post/10@2x.jpg?20210530" alt="" />
          <h4 className="mb-2">BALMUDA The Range限定カラー</h4>
          <p className="text-sm text-gray-200">キッチンを楽しくするオーブンレンジに、オンラインストア限定カラー「ダークグレー」が登場。</p>
        </a>
        <a href="">
          <img className="mb-6 hover:opacity-80" src="https://www.balmuda.com/jp/index/img/desktop/post/19@2x.jpg?20210530" alt="" />
          <h4 className="mb-2">新しい音楽体験を楽しむスピーカー</h4>
          <p className="text-sm text-gray-200">BALMUDA The Speakerは、独自のサウンドと輝きでライブステージのような臨場感をつくり出します。</p>
        </a>
        <a href="">
          <img className="mb-6 hover:opacity-80" src="https://www.balmuda.com/jp/index/img/desktop/post/17@2x.jpg?20210530" alt="" />
          <h4 className="mb-2">BALMUDA The Lantern限定カラー</h4>
          <p className="text-sm text-gray-200">オンラインストア限定カラー「クラシックレッド」と「ネイビーブルー」が新登場。</p>
        </a>
        <a href="">
          <img className="mb-6 hover:opacity-80" src="https://www.balmuda.com/jp/index/img/desktop/post/0@2x.jpg?20210530" alt="" />
          <h4 className="mb-2">ギフトラッピング</h4>
          <p className="text-sm text-gray-200">大切な家族や友人へのプレゼントに。特別な思いを伝えるギフトラッピングをご用意しています。</p>
        </a>
        <a href="">
          <img className="mb-6 hover:opacity-80" src="https://www.balmuda.com/jp/index/img/desktop/post/12@2x.jpg?20210530" alt="" />
          <h4 className="mb-2">BALMUDA 松屋銀座・阪急うめだ本店</h4>
          <p className="text-sm text-gray-200">バルミューダ製品を体験できる特別なブランドショップです。</p>
        </a>
        <a href="">
          <img className="mb-6 hover:opacity-80" src="https://www.balmuda.com/jp/index/img/desktop/post/1@2x.jpg?20210530" alt="" />
          <h4 className="mb-2">バルミューダのレシピ集</h4>
          <p className="text-sm text-gray-200">トースター、ケトル、炊飯器、オーブンレンジあわせて100品を超えるレシピをご紹介。</p>
        </a>
      </section>
      <section className="py-8 bg-orange text-white">
        <h4 className="text-xl font-bold mb-4">重要なお知らせ</h4>
        <p>悪質なサイト／SNSのなりすましアカウントによる詐欺被害に関するご注意</p>
        <p>悪質なサイト／SNSのなりすましアカウントによる詐欺被害に関するご注意</p>
        <p>悪質なサイト／SNSのなりすましアカウントによる詐欺被害に関するご注意</p>
        <p>悪質なサイト／SNSのなりすましアカウントによる詐欺被害に関するご注意</p>
      </section>
    </Layout>
  )
}
