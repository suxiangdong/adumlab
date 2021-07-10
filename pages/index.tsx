import Link from 'next/link'
import Head from 'next/head'
import ReactSlick from 'react-slick'
import Layout from '../layouts/default'

export default function Home() {
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" media="(max-width: 640px)" href="/index/style/mobile.css" />
        <link rel="stylesheet" media="(min-width: 641px)" href="/index/style/desktop.css" />
      </Head>
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
          <Link href="/toaster/index">
            <a className="w-1/5">
              <img className="hover:opacity-80" src="https://www.balmuda.com/jp/index/img/desktop/popular/0.jpg?20210429" />
              <p className="">BALMUDA THE Toaster</p>
              <p className="text-999 text-sm">スチームトースター</p>
            </a>
          </Link>
          <Link href="/cleaner/index">
            <a className="w-1/5">
              <img className="hover:opacity-80" src="https://www.balmuda.com/jp/index/img/desktop/popular/9.jpg?20210429" />
              <p className="">BALMUDA THE Cleaner</p>
              <p className="text-999 text-sm">ホバー式 クリーナー</p>
            </a>
          </Link>
          <Link href="/speaker/index">
            <a className="w-1/5">
              <img className="hover:opacity-80" src="https://www.balmuda.com/jp/index/img/desktop/popular/7.jpg?20210429" />
              <p className="">BALMUDA THE Speaker</p>
              <p className="text-999 text-sm">ワイヤレススピーカー</p>
            </a>
          </Link>
          <Link href="/range/index">
            <a className="w-1/5">
              <img className="hover:opacity-80" src="https://www.balmuda.com/jp/index/img/desktop/popular/10.jpg?20210429" />
              <p className="">BALMUDA THE Range</p>
              <p className="text-999 text-sm">オーブンレンジ</p>
            </a>
          </Link>
        </div>
      </section>
      <div className="topics_wrapper">
        <div className="viewport scrollLoader lazyload loaded">
          <div className="topics">
            <a href="/about/index" className="topic">
              <div className="__image __5 scrollLoader lazyload loaded"></div>
              <h4 className="__title">バルミューダについて</h4>
              <p className="__description">バルミューダは2003年に東京で設立されたクリエイティブとテクノロジーの会社です。</p>
            </a>
            <a href="/cleaner/index" className="topic">
              <div className="__image __6 scrollLoader lazyload loaded"></div>
              <h4 className="__title">かけやすさを極めたクリーナー</h4>
              <p className="__description">独自のホバーテクノロジーによる抜群の操作性と、優れた集塵性能で掃除時間を大幅に短縮します。</p>
            </a>
            <a href="/greenfan/index" className="topic">
              <div className="__image __16 scrollLoader lazyload loaded"></div>
              <h4 className="__title">自然界の風を再現する扇風機</h4>
              <p className="__description">The GreenFanは自然界の風を再現する扇風機。夏の午後を吹き抜ける心地よい風を部屋に作りだします。</p>
            </a>
            <a href="/range/index" className="topic">
              <div className="__image __10 scrollLoader lazyload loaded"></div>
              <h4 className="__title">BALMUDA The Range限定カラー</h4>
              <p className="__description">キッチンを楽しくするオーブンレンジに、オンラインストア限定カラー「ダークグレー」が登場。</p>
            </a>
            <a href="/speaker/index" className="topic">
              <div className="__image __19 scrollLoader lazyload loaded"></div>
              <h4 className="__title longtext">新しい音楽体験を楽しむスピーカー</h4>
              <p className="__description">BALMUDA The Speakerは、独自のサウンドと輝きでライブステージのような臨場感をつくり出します。</p>
            </a>
            <a href="/lantern/index" className="topic">
              <div className="__image __17 scrollLoader lazyload loaded"></div>
              <h4 className="__title">BALMUDA The Lantern限定カラー</h4>
              <p className="__description">オンラインストア限定カラー「クラシックレッド」と「ネイビーブルー」が新登場。</p>
            </a>
            <a href="/giftwrapping/index" className="topic">
              <div className="__image __0 scrollLoader lazyload loaded"></div>
              <h4 className="__title">ギフトラッピング</h4>
              <p className="__description">大切な家族や友人へのプレゼントに。特別な思いを伝えるギフトラッピングをご用意しています。</p>
            </a>
            <a href="/shops/index" className="topic">
              <div className="__image __12 scrollLoader lazyload loaded"></div>
              <h4 className="__title">BALMUDA 松屋銀座・阪急うめだ本店</h4>
              <p className="__description">バルミューダ製品を体験できる特別なブランドショップです。</p>
            </a>
            <a href="/recipe/index" className="topic">
              <div className="__image __1 scrollLoader lazyload loaded"></div>
              <h4 className="__title">バルミューダのレシピ集</h4>
              <p className="__description">トースター、ケトル、炊飯器、オーブンレンジあわせて100品を超えるレシピをご紹介。</p>
            </a>
          </div>
        </div>
      </div>
      <div className="notice ">
        <div className="viewport">
          <span className="__title">重要なお知らせ</span>
          <p className="__item">
            <a href="/legal/fake-website-alert" className="__link">
              悪質なサイト／SNSのなりすましアカウントによる詐欺被害に関するご注意
            </a>
          </p>
          <p className="__item">
            <a href="/support/notice/range-program-2019/" className="__link">
              BALMUDA The Range（K04Aシリーズ）をお持ちのお客様へ重要なお知らせ
            </a>
          </p>
          <p className="__item">
            <a href="/support/notice/toaster-program-2018/" className="__link">
              BALMUDA The Toaster（K01Aシリーズ）をお持ちのお客様へ重要なお知らせ
            </a>
          </p>
          <p className="__item">
            <a href="/support/notice/greenfan-program-2017/" className="__link">
              GreenFan Japan 2014年・2015年モデルをお持ちのお客様へ重要なお知らせ
            </a>
          </p>
        </div>
      </div>
    </Layout>
  )
}
