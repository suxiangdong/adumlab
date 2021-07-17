import Link from 'next/link'
import Head from 'next/head'
import ReactSlick from 'react-slick'
import Layout from '../../layouts/default'
import API from '../../effects/api'

export async function getServerSideProps() {
  try {
    const [banners] = await Promise.all([API.getBannersByCategory(7)])
    return { props: { banners } }
  } catch (error) {
    return { props: { banners: {} } }
  }
}

export default function ProductDetail({ banners }) {
  if (!banners || !Array.isArray(banners.data) || banners.data.length === 0) {
    banners.data = [0, 1, 2, 3, 4].map((i) => ({
      id: i,
      path: `https://www.balmuda.com/jp/lantern/img/index/desktop/billboard--0${i}@2x.jpg?20210425`
    }))
  }

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
              <Link href="/lantern/story">故事</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/lantern/spec">规格</Link>
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
      <div className="billboard__wrapper">
        <ReactSlick dots className="billboard" style={{ opacity: 1, visibility: 'visible' }}>
          {banners.data.map((item) => (
            <img key={item.id} className="w-full" src={item.path} />
          ))}
        </ReactSlick>
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
          <span className="label__block">便携式LED灯</span>
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
