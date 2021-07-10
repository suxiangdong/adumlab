import Link from 'next/link'
import Head from 'next/head'
import ReactSlick from 'react-slick'
import Layout from '../../layouts/default'

export default function ProductDetail() {
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/greenfan/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/greenfan/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <a href="/greenfan/" className="pagemap__content--logo">
            <img
              className="w-full"
              src="/_theme/img/svg/the-greenfan.000.min.svgz"
              alt="The GreenFan"
            />
          </a>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index __current">
              <Link href="/greenfan/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--feature">
              <Link href="/greenfan/feature">風の気持ちよさ</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design">
              <Link href="/greenfan/design">使いやすさ</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story">
              <Link href="/greenfan/story">ストーリー</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/greenfan/spec">スペック</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="//store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=EGF-1700"
              className="btn btn--pagemap">
              購入
            </a>
          </div>
        </div>
      </div>
      <ReactSlick arrows={false} dots>
        <div className="billboard--00">
          <img
            data-mobile="//www.balmuda.com/jp/greenfan/img/index/mobile/billboard--00.jpg?20210410"
            data-desktop="//www.balmuda.com/jp/greenfan/img/index/desktop/billboard--00.jpg?20210410"
            data-retina="//www.balmuda.com/jp/greenfan/img/index/desktop/billboard--00@2x.jpg?20210410"
						src="//www.balmuda.com/jp/greenfan/img/index/desktop/billboard--00@2x.jpg?20210410"
            className="__image adaptiveimage slick--lazy"
          />
        </div>
        <div className="billboard--02">
          <img
            data-mobile="//www.balmuda.com/jp/greenfan/img/index/mobile/billboard--02.jpg?20210410"
            data-desktop="//www.balmuda.com/jp/greenfan/img/index/desktop/billboard--02.jpg?20210410"
            data-retina="//www.balmuda.com/jp/greenfan/img/index/desktop/billboard--02@2x.jpg?20210410"
						src="//www.balmuda.com/jp/greenfan/img/index/desktop/billboard--02@2x.jpg?20210410"
            className="__image adaptiveimage slick--lazy"
          />
        </div>
        <div className="billboard--03">
          <img
            data-mobile="//www.balmuda.com/jp/greenfan/img/index/mobile/billboard--03.jpg?20210410"
            data-desktop="//www.balmuda.com/jp/greenfan/img/index/desktop/billboard--03.jpg?20210410"
            data-retina="//www.balmuda.com/jp/greenfan/img/index/desktop/billboard--03@2x.jpg?20210410"
						src="//www.balmuda.com/jp/greenfan/img/index/desktop/billboard--03@2x.jpg?20210410"
            className="__image adaptiveimage slick--lazy"
          />
        </div>
        <div className="billboard--04">
          <img
            data-mobile="//www.balmuda.com/jp/greenfan/img/index/mobile/billboard--04.jpg?20210410"
            data-desktop="//www.balmuda.com/jp/greenfan/img/index/desktop/billboard--04.jpg?20210410"
            data-retina="//www.balmuda.com/jp/greenfan/img/index/desktop/billboard--04@2x.jpg?20210410"
						src="//www.balmuda.com/jp/greenfan/img/index/desktop/billboard--04@2x.jpg?20210410"
            className="__image adaptiveimage slick--lazy"
          />
        </div>
      </ReactSlick>
      <div className="section section--index section--00">
        <div className="__mainimage">
          <img
            data-mobile="//www.balmuda.com/jp/greenfan/img/index/mobile/main.jpg?20210404"
            data-desktop="//www.balmuda.com/jp/greenfan/img/index/desktop/main.jpg?20210404"
            data-retina="//www.balmuda.com/jp/greenfan/img/index/desktop/main@2x.jpg?20210404"
            className="__image adaptiveimage"
            src="//www.balmuda.com/jp/greenfan/img/index/desktop/main@2x.jpg?20210404"
          />
        </div>
        <div className="viewport">
          <h2 className="page__title __wb">
            自然界の風を再現する
            <br />
            扇風機
          </h2>
          <span className="label__block">DCモーター扇風機</span>
          <p className="overview_text">
            <span>The GreenFanは、独自の技術によって自然界の風を再現する扇風機。</span>
            <span>夏の午後を吹き抜ける心地よい風を部屋の中に再現します。</span>
            <span>気持ちのいいグリーンファンの風と一緒に、</span>
            <span>素晴らしい夏の一日をお過ごしください。</span>
          </p>
          <div className="the-price">
            <p className="price price--excl_tax" id="price2">
              39,600
            </p>
            <p className="colores">
              ホワイト × ブラック／ホワイト × グレー／ダークグレー × ブラック／ホワイト ×
              シャンパンゴールド
            </p>
          </div>
        </div>
      </div>

      <div className="section section--index section--01 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">風の気持ちよさ</h2>
            <p>
              バルミューダだけのグリーンファンテクノロジー。二重構造の羽根が作り出すのは、自然界の風と同じ、大きな面で移動する空気の流れ。一般的な扇風機に比べ、約4倍に広がる風はまさに自然界の風の気持ちよさです。
            </p>
            <Link href="/greenfan/feature">
              <a className="btn btn--page">続きを読む</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="section section--index section--02 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">使いやすさ</h2>
            <p>
              超静音、ポータブル、自由に替えられる首振り角度。暮らしの道具として自由に使うことができるよう、さまざまな工夫が詰まっています。
            </p>
            <Link href="/greenfan/design">
              <a className="btn btn--page">続きを読む</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="section section--index section--03 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">ストーリー</h2>
            <p>
              次の時代の扇風機を作ろう！こんな想いから開発が始まったGreenFan。現実のものとして生まれるまでには、意外なヒントや偶然の発見がありました。
            </p>
            <Link href="/greenfan/story">
              <a className="btn btn--page btn">続きを読む</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
