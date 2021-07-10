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
          href="/pot/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/pot/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <a href="/pot/" className="pagemap__content--logo">
            <img src="/_theme/img/svg/balmuda-the-pot.min.svgz" alt="BALMUDA The Pot" />
          </a>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index __current">
              <Link href="/pot/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design">
              <Link href="/pot/design">デザイン</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story">
              <Link href="/pot/story">ストーリー</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/pot/spec">スペック</Link>
            </li>
          </ul>
          <div className="pagemap__dropdown hidden" id="greedynav--btn">
            <span className="pagemap__dropdown__btn"></span>
            <ul className="pagemap__dropdown__content"></ul>
          </div>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=K02A"
              className="btn btn--pagemap">
              購入
            </a>
          </div>
        </div>
      </div>
      <ReactSlick arrows={false} dots>
        <div>
          <img
            className="w-full"
            src="//www.balmuda.com/jp/pot/img/index/desktop/billboard--00@2x.jpg?20201006"
          />
        </div>
        <div>
          <img
            className="w-full"
            src="//www.balmuda.com/jp/pot/img/index/desktop/billboard--01@2x.jpg?20201006"
          />
        </div>
        <div>
          <img
            className="w-full"
            src="//www.balmuda.com/jp/pot/img/index/desktop/billboard--02@2x.jpg?20201006"
          />
        </div>
        <div>
          <img
            className="w-full"
            src="//www.balmuda.com/jp/pot/img/index/desktop/billboard--03@2x.jpg?20201006"
          />
        </div>
      </ReactSlick>

      <div className="section section--index section--00">
        <div className="__mainimage">
          <div className="__inner">
            <img
              data-mobile="//www.balmuda.com/jp/pot/img/index/mobile/main.jpg?20201006"
              data-desktop="//www.balmuda.com/jp/pot/img/index/desktop/main.jpg?20201006"
              data-retina="//www.balmuda.com/jp/pot/img/index/desktop/main@2x.jpg?20201006"
              className="__image adaptiveimage"
              src="//www.balmuda.com/jp/pot/img/index/desktop/main@2x.jpg?20201006"
            />
          </div>
        </div>
        <div className="viewport">
          <h2 className="page__title __wb">
            <span>小さくて美しい</span>
            <span>電気ケトル</span>
          </h2>
          <span className="label__block">600ml　1200W　ステンレス製　電気ケトル</span>
          <p className="overview_text">
            BALMUDA The Potは、毎日使いたくなる
            <br />
            今までにない美しいデザインの電気ケトルです。
          </p>
          <div className="the-price">
            <p className="price price--excl_tax" id="price2">
              12,100
            </p>
            <p className="colores">ブラック／ホワイト</p>
          </div>
        </div>
      </div>

      <div className="section section--index section--01 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h3 className="section__subtitle">デザイン</h3>
            <h2 className="section__title __wb">
              <span>小さなサイズだから、</span>
              <span>湯沸かしがより</span>
              <span>手軽に。</span>
            </h2>
            <p>
              収納スペースをとらない600mlのちょうどいいサイズ。注ぎごこちにこだわったノズルとハンドルの形。毎日、手軽に、気持ちよく使うためにデザインしました。
            </p>
            <Link href="/pot/design">
              <a className="btn btn--page btn--page--white">続きを読む</a>
            </Link>
          </div>
        </div>
      </div>
      {/*
      <div className="section section--index section--02 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h3 className="section__subtitle">淹れ方</h3>
            <h2 className="section__title __wb">
              <span>お茶の時間が</span>
              <span>もっと</span>
              <span>楽しくなる</span>
              <span>淹れ方</span>
            </h2>
            <p>
              コーヒー、紅茶、日本茶のおいしさをさらに広げます。毎日のお茶の時間がもっと楽しくなる淹れ方をご紹介します。
            </p>
            <Link href="/pot/brewing">
              <a className="btn btn--page">続きを読む</a>
            </Link>
          </div>
        </div>
      </div> */}

      <div className="section section--index section--03 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h3 className="section__subtitle">ストーリー</h3>
            <h2 className="section__title __wb">
              <span>BALMUDA The Potが</span>
              <span>生まれるまで</span>
            </h2>
            <p>
              おいしい食事は私たちに元気をくれます。特別なごちそうでなくても、おいしいと思う瞬間が多いほど、楽しい思いもふくらみます。BALMUDA
              The Potとともに素晴らしいひとときを。
            </p>
            <Link href="/pot/story">
              <a className="btn btn--page">続きを読む</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="section section--index section--gallery">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">ギャラリー</h2>
          </div>

          <div className="gallery__content" data-pswp-uid="1">
            <figure>
              <img
                data-mobile="//www.balmuda.com/jp/pot/img/index/gallery/1@2x.jpg?20201006"
                data-desktop="//www.balmuda.com/jp/pot/img/index/gallery/1.jpg?20201006"
                data-retina="//www.balmuda.com/jp/pot/img/index/gallery/1@2x.jpg?20201006"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/pot/img/index/gallery/1@2x.jpg?20201006"
              />
            </figure>
            <figure>
              <img
                data-mobile="//www.balmuda.com/jp/pot/img/index/gallery/2@2x.jpg?20201006"
                data-desktop="//www.balmuda.com/jp/pot/img/index/gallery/2.jpg?20201006"
                data-retina="//www.balmuda.com/jp/pot/img/index/gallery/2@2x.jpg?20201006"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/pot/img/index/gallery/2@2x.jpg?20201006"
              />
            </figure>
            <figure>
              <img
                data-mobile="//www.balmuda.com/jp/pot/img/index/gallery/3@2x.jpg?20201006"
                data-desktop="//www.balmuda.com/jp/pot/img/index/gallery/3.jpg?20201006"
                data-retina="//www.balmuda.com/jp/pot/img/index/gallery/3@2x.jpg?20201006"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/pot/img/index/gallery/3@2x.jpg?20201006"
              />
            </figure>
            <figure>
              <img
                data-mobile="//www.balmuda.com/jp/pot/img/index/gallery/4@2x.jpg?20201006"
                data-desktop="//www.balmuda.com/jp/pot/img/index/gallery/4.jpg?20201006"
                data-retina="//www.balmuda.com/jp/pot/img/index/gallery/4@2x.jpg?20201006"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/pot/img/index/gallery/4@2x.jpg?20201006"
              />
            </figure>
            <figure>
              <img
                data-mobile="//www.balmuda.com/jp/pot/img/index/gallery/5@2x.jpg?20201006"
                data-desktop="//www.balmuda.com/jp/pot/img/index/gallery/5.jpg?20201006"
                data-retina="//www.balmuda.com/jp/pot/img/index/gallery/5@2x.jpg?20201006"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/pot/img/index/gallery/5@2x.jpg?20201006"
              />
            </figure>
            <figure>
              <img
                data-mobile="//www.balmuda.com/jp/pot/img/index/gallery/6@2x.jpg?20201006"
                data-desktop="//www.balmuda.com/jp/pot/img/index/gallery/6.jpg?20201006"
                data-retina="//www.balmuda.com/jp/pot/img/index/gallery/6@2x.jpg?20201006"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/pot/img/index/gallery/6@2x.jpg?20201006"
              />
            </figure>
          </div>
        </div>
      </div>
    </Layout>
  )
}