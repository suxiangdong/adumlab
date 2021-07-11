import Link from 'next/link'
import Head from 'next/head'
import ReactSlick from 'react-slick'
import Layout from '../../layouts/default'
import { useState } from 'react'

export default function ProductDetail() {
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    setPlaying(true)
    const video = document.getElementById('overlay--vdk') as HTMLVideoElement
    video.style.opacity = '1'
    video.play()
  }

  const handleEnded = () => {
    setPlaying(false)
    const video = document.getElementById('overlay--vdk') as HTMLVideoElement
    video.style.opacity = '0'
    video.pause()
  }

  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/rain/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/rain/style/desktop.css?20210701173839"></link>
      </Head>

      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <Link href="/rain/">
            <a className="pagemap__content--logo">
              <img src="/_theme/img/svg/balmuda-rain.min.svgz" alt="Rain" />
            </a>
          </Link>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index __current">
              <Link href="/rain/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--classic">
              <Link href="/rain/classic">クラシックで先進的</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--humidity">
              <Link href="/rain/humidity">適切な湿度</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/rain/spec">スペック</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=ERN-1100SD-WK"
              className="btn btn--pagemap">
              購入
            </a>
          </div>
        </div>
      </div>

      <div className="billboard__wrapper">
        <ReactSlick dots className="billboard" id="billboard">
          <div className="billboard--00">
            <img
              data-mobile="//www.balmuda.com/jp/rain/img/index/mobile/billboard--00.jpg?20180329"
              data-desktop="//www.balmuda.com/jp/rain/img/index/desktop/billboard--00.jpg?20180329"
              data-retina="//www.balmuda.com/jp/rain/img/index/desktop/billboard--00@2x.jpg?20180329"
              src="//www.balmuda.com/jp/rain/img/index/desktop/billboard--00@2x.jpg?20180329"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="billboard--01">
            <img
              data-mobile="//www.balmuda.com/jp/rain/img/index/mobile/billboard--01.jpg?20180329"
              data-desktop="//www.balmuda.com/jp/rain/img/index/desktop/billboard--01.jpg?20180329"
              data-retina="//www.balmuda.com/jp/rain/img/index/desktop/billboard--01@2x.jpg?20180329"
              src="//www.balmuda.com/jp/rain/img/index/desktop/billboard--01@2x.jpg?20180329"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="billboard--02">
            <img
              data-mobile="//www.balmuda.com/jp/rain/img/index/mobile/billboard--02.jpg?20180329"
              data-desktop="//www.balmuda.com/jp/rain/img/index/desktop/billboard--02.jpg?20180329"
              data-retina="//www.balmuda.com/jp/rain/img/index/desktop/billboard--02@2x.jpg?20180329"
              src="//www.balmuda.com/jp/rain/img/index/desktop/billboard--02@2x.jpg?20180329"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="billboard--03">
            <img
              data-mobile="//www.balmuda.com/jp/rain/img/index/mobile/billboard--03.jpg?20180329"
              data-desktop="//www.balmuda.com/jp/rain/img/index/desktop/billboard--03.jpg?20180329"
              data-retina="//www.balmuda.com/jp/rain/img/index/desktop/billboard--03@2x.jpg?20180329"
              src="//www.balmuda.com/jp/rain/img/index/desktop/billboard--03@2x.jpg?20180329"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="billboard--04">
            <img
              data-mobile="//www.balmuda.com/jp/rain/img/index/mobile/billboard--04.jpg?20180329"
              data-desktop="//www.balmuda.com/jp/rain/img/index/desktop/billboard--04.jpg?20180329"
              data-retina="//www.balmuda.com/jp/rain/img/index/desktop/billboard--04@2x.jpg?20180329"
              src="//www.balmuda.com/jp/rain/img/index/desktop/billboard--04@2x.jpg?20180329"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="billboard--05">
            <img
              data-mobile="//www.balmuda.com/jp/rain/img/index/mobile/billboard--05.jpg?20180329"
              data-desktop="//www.balmuda.com/jp/rain/img/index/desktop/billboard--05.jpg?20180329"
              data-retina="//www.balmuda.com/jp/rain/img/index/desktop/billboard--05@2x.jpg?20180329"
              src="//www.balmuda.com/jp/rain/img/index/desktop/billboard--05@2x.jpg?20180329"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="billboard--06">
            <img
              data-mobile="//www.balmuda.com/jp/rain/img/index/mobile/billboard--06.jpg?20180329"
              data-desktop="//www.balmuda.com/jp/rain/img/index/desktop/billboard--06.jpg?20180329"
              data-retina="//www.balmuda.com/jp/rain/img/index/desktop/billboard--06@2x.jpg?20180329"
              src="//www.balmuda.com/jp/rain/img/index/desktop/billboard--06@2x.jpg?20180329"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
        </ReactSlick>
      </div>

      <div className="section section--index section--00">
        <div className="__mainimage">
          <img
            data-mobile="//www.balmuda.com/jp/rain/img/index/mobile/main.jpg"
            data-desktop="//www.balmuda.com/jp/rain/img/index/desktop/main.jpg"
            data-retina="//www.balmuda.com/jp/rain/img/index/desktop/main@2x.jpg"
            className="__image adaptiveimage"
            src="//www.balmuda.com/jp/rain/img/index/desktop/main@2x.jpg"
          />
        </div>
        <div className="viewport">
          <h2 className="page__title __wb">
            空気を洗う
            <br />
            美しい加湿器
          </h2>
          <span className="label__block">気化式加湿器</span>
          <p>
            Rainは画期的なタンクレス構造を実現した美しい加湿器。水を上から注ぎ入れるだけで給水ができます。美しいディスプレイとコントロールリングによる先進的な操作方法。Rainに取り込まれた乾燥した空気は、まず酵素フィルターで取り入れた空気に含まれる細菌を分解。ホコリや雑菌を取り除き、清潔になった空気を加湿して送り出します。乾燥する季節を健康的に過ごすために、清潔で適切な湿度を提供します。
          </p>
          <div className="the-price">
            <p className="price price--excl_tax" id="price2">
              49,500
            </p>
          </div>
        </div>
      </div>
      <div className="section section--index section--01 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">クラシックで先進的</h2>
            <p>
              そのまま給水できる画期的なタンクレス構造。新しい操作方法。現代的で見やすいディスプレイ。これら全てがひとつの美しいデザインにまとめられています。
            </p>
            <Link href="/rain/classic">
              <a className="btn btn--page">続きを読む</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="section section--index section--02 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">清潔で適切な湿度</h2>
            <p>
              ウイルスが活性化する乾燥状態、カビなどが繁殖しやすい多湿状態。そのどちらでもない約50％の湿度が、健康や家具に適切と言われています。Rainは取り入れた空気を酵素プレフィルターで除菌してから加湿、送風するので、適切な湿度を清潔に提供します。
            </p>
            <Link href="/rain/humidity">
              <a className="btn btn--page">続きを読む</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
