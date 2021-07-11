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
          href="/lantern/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/lantern/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <Link href="/lantern/">
            <a className="pagemap__content--logo">
              <img src="/_theme/img/svg/balmuda-the-lantern.min.svgz" alt="BALMUDA The Lantern" />
            </a>
          </Link>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index __current">
              <Link href="/lantern/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story">
              <Link href="/lantern/story">ストーリー</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/lantern/spec">スペック</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=L02A"
              className="btn btn--pagemap">
              購入
            </a>
          </div>
        </div>
      </div>
//TODO
      <div className="mp__wrap">
        <div className="mp">
          <div className="mp__inner">

            <ReactSlick dots className="mp__list">
              <li >
                <div className="mp__list_image_wrap  __slide">
                  <img
                    data-mobile="//www.balmuda.com/jp/lantern/img/index/mobile/billboard--05.jpg?20210425"
                    data-desktop="//www.balmuda.com/jp/lantern/img/index/desktop/billboard--05.jpg?20210425"
                    data-retina="//www.balmuda.com/jp/lantern/img/index/desktop/billboard--05@2x.jpg?20210425"
                    src="//www.balmuda.com/jp/lantern/img/index/desktop/billboard--05@2x.jpg?20210425"
                    className="mp__list_image adaptiveimage"
                  />
                </div>
                <img
                  src="//www.balmuda.com/jp/lantern/img/index/svg/section--05-copy-white.svg"
                  className="mp__list_copy __00 __desktop"
                  data-index="0"
                />
                <img
                  src="//www.balmuda.com/jp/lantern/img/index/svg/section--05-copy-whiteb.svg"
                  className="mp__list_copy __00 __mobile"
                  data-index="0"
                />
              </li>
              <li >
                <div className="mp__list_image_wrap __slide">
                  <img
                    data-mobile="//www.balmuda.com/jp/lantern/img/index/mobile/billboard--00.jpg?20210425"
                    data-desktop="//www.balmuda.com/jp/lantern/img/index/desktop/billboard--00.jpg?20210425"
                    data-retina="//www.balmuda.com/jp/lantern/img/index/desktop/billboard--00@2x.jpg?20210425"
                    src="//www.balmuda.com/jp/lantern/img/index/desktop/billboard--00@2x.jpg?20210425"
                    className="mp__list_image adaptiveimage"
                  />
                </div>
                <img
                  src="//www.balmuda.com/jp/lantern/img/index/svg/section--00-copy-white.svg?20210425"
                  className="mp__list_copy __01 __desktop"
                  data-index="1"
                />
              </li>
              <li >
                <div className="mp__list_image_wrap">
                  <video className="mp__list_image __movie __is_mobile" muted playsInline>
                    <source src="//s3.balmuda.com/www/jp/lantern/movie/slide_video_mobile.mp4?20210425" />
                  </video>
                  <video className="mp__list_image __movie __is_desktop" muted playsInline>
                    <source src="//s3.balmuda.com/www/jp/lantern/movie/slide_video_desktop.mp4?20210425" />
                  </video>
                </div>
              </li>

              <li >
                <div className="mp__list_image_wrap">
                  <img
                    data-mobile="//www.balmuda.com/jp/lantern/img/index/mobile/billboard--01.jpg?20210425"
                    data-desktop="//www.balmuda.com/jp/lantern/img/index/desktop/billboard--01.jpg?20210425"
                    data-retina="//www.balmuda.com/jp/lantern/img/index/desktop/billboard--01@2x.jpg?20210425"
                    src="//www.balmuda.com/jp/lantern/img/index/desktop/billboard--01@2x.jpg?20210425"
                    className="mp__list_image adaptiveimage"
                  />
                </div>
                <img
                  src="//www.balmuda.com/jp/lantern/img/index/svg/section--00-copy-white.svg?20210425"
                  className="mp__list_copy __01"
                  data-index="1"
                />
              </li>
              <li >
                <div className="mp__list_image_wrap">
                  <img
                    data-mobile="//www.balmuda.com/jp/lantern/img/index/mobile/billboard--02.jpg?20210425"
                    data-desktop="//www.balmuda.com/jp/lantern/img/index/desktop/billboard--02.jpg?20210425"
                    data-retina="//www.balmuda.com/jp/lantern/img/index/desktop/billboard--02@2x.jpg?20210425"
                    src="//www.balmuda.com/jp/lantern/img/index/desktop/billboard--02@2x.jpg?20210425"
                    className="mp__list_image adaptiveimage"
                  />
                </div>
              </li>
              <li >
                <div className="mp__list_image_wrap">
                  <img
                    data-mobile="//www.balmuda.com/jp/lantern/img/index/mobile/billboard--03.jpg?20210425"
                    data-desktop="//www.balmuda.com/jp/lantern/img/index/desktop/billboard--03.jpg?20210425"
                    data-retina="//www.balmuda.com/jp/lantern/img/index/desktop/billboard--03@2x.jpg?20210425"
                    src="//www.balmuda.com/jp/lantern/img/index/desktop/billboard--03@2x.jpg?20210425"
                    className="mp__list_image adaptiveimage"
                  />
                </div>
                <img
                  src="//www.balmuda.com/jp/lantern/img/index/svg/section--00-copy-white.svg?20210425"
                  className="mp__list_copy __01"
                  data-index="3"
                />
              </li>
              <li >
                <div className="mp__list_image_wrap">
                  <img
                    data-mobile="//www.balmuda.com/jp/lantern/img/index/mobile/billboard--04.jpg?20210425"
                    data-desktop="//www.balmuda.com/jp/lantern/img/index/desktop/billboard--04.jpg?20210425"
                    data-retina="//www.balmuda.com/jp/lantern/img/index/desktop/billboard--04@2x.jpg?20210425"
                    src="//www.balmuda.com/jp/lantern/img/index/desktop/billboard--04@2x.jpg?20210425"
                    className="mp__list_image adaptiveimage"
                  />
                </div>
              </li>
            </ReactSlick>

            <div className="__is_desktop section_overlay" id="overlay--sec40_desktop">
              <video
                width="100%"
                height="100%"
                id="sec40_desktop"
                preload="none"
                data-log="lantern_index_sec40_desktop">
                <source
                  src="//s3.balmuda.com/www/jp/lantern/movie/trailer_low.mp4?20210425"
                  type="video/mp4"
                />
              </video>
              <div className="video_stop" data-video-target="sec40_desktop"></div>
            </div>
            <div className="__is_desktop invisible video_play" data-video-target="sec40_desktop">
              <span></span>
            </div>
          </div>
        </div>
        <div className="section_overlay section_overlay--v7_sec" id="overlay--v7_sec">
          <video
            width="100%"
            height="100%"
            id="v7_sec"
            preload="none"
            playsInline
            muted
            data-mobile="//s3.balmuda.com/www/jp/lantern/movie/15sec_mobile.mp4?20210425"
            data-desktop="//s3.balmuda.com/www/jp/lantern/movie/15sec_desktop.mp4?20210425"></video>
          <div className="video_stop" data-video-target="v7_sec"></div>
        </div>
      </div>

      <div className="section section--index section--00 scrollLoader lazyload loaded">
        <div className="__mainimage">
          <div className="__inner">
            <img
              data-mobile="//www.balmuda.com/jp/lantern/img/index/mobile/main.jpg?20210425"
              data-desktop="//www.balmuda.com/jp/lantern/img/index/desktop/main.jpg?20210425"
              data-retina="//www.balmuda.com/jp/lantern/img/index/desktop/main@2x.jpg?20210425"
              className="__image adaptiveimage"
              src="//www.balmuda.com/jp/lantern/img/index/desktop/main@2x.jpg?20210425"
              alt=""
            />
            <img
              src="//www.balmuda.com/jp/lantern/img/index/svg/main_text.svg?20210425"
              className="__image adaptiveimage_copy"
              alt="オンラインストア限定"
            />
          </div>
        </div>
        <div className="viewport">
          <h2 className="page__title __wb">
            <span>時間をたのしむ</span>
            <span>LEDランタン</span>
          </h2>
          <span className="label__block">ポータブルLEDランタン</span>
          <p className="overview_text">
            キャンドルのように揺らぐ暖色の灯りから、読書灯にも使える温白色の灯りまで。
            <br />
            BALMUDA The Lanternは、日常の何気ない時間を、少しだけ特別に彩るLEDランタンです。
            <br />
            バッテリー内蔵で部屋中どこでも、アウトドアにも持ち出してお使いいただけます。
          </p>
          <div className="the-price">
            <p className="price price--excl_tax" id="price2">
              15,180
            </p>
            <p className="colores">
              ブラック／ホワイト／グレー／
              <br />
              クラシックレッド／ネイビーブルー
            </p>
          </div>

          <div className="__trailer __is_mobile">
            <video
              width="100%"
              height="100%"
              id="sec40_mobile"
              poster="//www.balmuda.com/jp/lantern/img/index/mobile/trailer_low.jpg"
              preload="none"
              controls
              data-log="lantern_index_sec40_mobile">
              <source
                src="//s3.balmuda.com/www/jp/lantern/movie/trailer_low_mobile.mp4?20210425"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>

      <div className="section section--index section--01 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">
              シーンにあわせた
              <br />
              光をたのしむ
            </h2>
            <p className="section__desc">
              BALMUDA The
              Lanternは、簡単な操作で調光が可能。明るさに応じて光の色あいも変化するので、読書灯や、特別な日の食事のテーブルなど、シーンにあわせてお使いいただけます。
            </p>
            <a href="./design#dimming" className="section__btn">
              調光について詳しく
            </a>
          </div>
        </div>
      </div>

      <div className="section section--index section--02 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <h2 className="section__title">
            選べる
            <br />
            カラーバリエーション
          </h2>
          <a href="./design#colors" className="section__btn">
            各色の使用シーンをみる
          </a>
        </div>
      </div>

      <div className="section section--index section--03 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">製品開発ストーリー</h2>
            <p className="section__desc">
              目の前で音を立てる暖炉の炎のように、見飽きることのない複雑な光の動きが欲しい。BALMUDA
              The Lanternの開発ストーリーをご紹介します。
            </p>
            <a href="./story" className="section__btn">
              ストーリーを読む
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
