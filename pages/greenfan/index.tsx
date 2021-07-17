import Link from 'next/link'
import Head from 'next/head'
import ReactSlick from 'react-slick'
import Layout from '../../layouts/default'
import API from '../../effects/api'

export async function getServerSideProps() {
  try {
    const [banners] = await Promise.all([API.getBannersByCategory(3)])
    return { props: { banners } }
  } catch (error) {
    return { props: { banners: {} } }
  }
}

export default function ProductDetail({ banners }) {
  if (!banners || !Array.isArray(banners.data) || banners.data.length === 0) {
    banners.data = [0, 1, 2, 3].map((i) => ({
      id: i,
      path: `https://www.balmuda.com/jp/greenfan/img/index/desktop/billboard--0${i}@2x.jpg?20210410`
    }))
  }

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
              <Link href="/greenfan/feature">先进性</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design">
              <Link href="/greenfan/design">使用方法</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story">
              <Link href="/greenfan/story">故事</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/greenfan/spec">规格</Link>
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
      <div className="billboard__wrapper"></div>
      <ReactSlick className="billboard" dots>
        {banners.data.map((item) => (
          <img key={item.id} className="w-full" src={item.path} />
        ))}
      </ReactSlick>
      <div className="section section--index section--00">
        <div className="__mainimage">
          <img
            data-mobile="https://www.balmuda.com/jp/greenfan/img/index/mobile/main.jpg?20210404"
            data-desktop="https://www.balmuda.com/jp/greenfan/img/index/desktop/main.jpg?20210404"
            data-retina="https://www.balmuda.com/jp/greenfan/img/index/desktop/main@2x.jpg?20210404"
            className="__image adaptiveimage"
            src="https://www.balmuda.com/jp/greenfan/img/index/desktop/main@2x.jpg?20210404"
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
            <h2 className="section__title">先进性</h2>
            <p>
              バルミューダだけのグリーンファン科技。二重構造の羽根が作り出すのは、自然界の風と同じ、大きな面で移動する空気の流れ。一般的な扇風機に比べ、約4倍に広がる風はまさに自然界の先进性です。
            </p>
            <Link href="/greenfan/feature">
              <a className="btn btn--page">继续阅读</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="section section--index section--02 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">使用方法</h2>
            <p>
              超静音、ポータブル、自由に替えられる首振り角度。暮らしの道具として自由に使うことができるよう、さまざまな工夫が詰まっています。
            </p>
            <Link href="/greenfan/design">
              <a className="btn btn--page">继续阅读</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="section section--index section--03 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">故事</h2>
            <p>
              次の時代の扇風機を作ろう！こんな想いから開発が始まったGreenFan。現実のものとして生まれるまでには、意外なヒントや偶然の発見がありました。
            </p>
            <Link href="/greenfan/story">
              <a className="btn btn--page btn">继续阅读</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
