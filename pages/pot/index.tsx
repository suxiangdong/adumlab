import Link from 'next/link'
import Head from 'next/head'
import ReactSlick from 'react-slick'
import Layout from '../../layouts/default'
import API from '../../effects/api'

export async function getServerSideProps() {
  try {
    const [banners] = await Promise.all([API.getBannersByCategory(2)])
    return { props: { banners } }
  } catch (error) {
    return { props: { banners: {} } }
  }
}

export default function ProductDetail({ banners }) {
  if (!banners || !Array.isArray(banners.data) || banners.data.length === 0) {
    banners.data = [0, 1, 2, 3].map((i) => ({
      id: i,
      path: `https://www.balmuda.com/jp/pot/img/index/desktop/billboard--0${i}@2x.jpg?20201006`
    }))
  }

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
              <Link href="/pot/design">设计</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story">
              <Link href="/pot/story">故事</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/pot/spec">规格</Link>
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
              购买
            </a>
          </div>
        </div>
      </div>
      <div className="billboard__wrapper">
        <ReactSlick className="billboard" dots>
          {banners.data.map((item) => (
            <img key={item.id} className="w-full" src={item.path} />
          ))}
        </ReactSlick>
      </div>

      <div className="section section--index section--00">
        <div className="__mainimage">
          <div className="__inner">
            <img
              data-mobile="https://www.balmuda.com/jp/pot/img/index/mobile/main.jpg?20201006"
              data-desktop="https://www.balmuda.com/jp/pot/img/index/desktop/main.jpg?20201006"
              data-retina="https://www.balmuda.com/jp/pot/img/index/desktop/main@2x.jpg?20201006"
              className="__image adaptiveimage"
              src="https://www.balmuda.com/jp/pot/img/index/desktop/main@2x.jpg?20201006"
            />
          </div>
        </div>
        <div className="viewport">
          <h2 className="page__title __wb">
            <span>小而美的电水壶</span>
          </h2>
          <span className="label__block">600ml 1200w不锈钢电水壶</span>
          <p className="overview_text">
            BALMUDA电水壶，
            <br />
            前所未有般美丽设计，让你想要每日使用。
          </p>
          <div className="the-price">
            <p className="price price--excl_tax" id="price2">
              12,100
            </p>
            <p className="colores">黑色/白色</p>
          </div>
        </div>
      </div>

      <div className="section section--index section--01 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h3 className="section__subtitle">设计</h3>
            <h2 className="section__title __wb">
              <span>小さなサイズだから、</span>
              <span>湯沸かしがより</span>
              <span>手軽に。</span>
            </h2>
            <p>
              600ml容量，刚刚好的尺寸，不占据多余收纳空间。精心设计的壶嘴与把手形状，让水流操控更加得心应手，每天的使用更加轻松舒适。
            </p>
            <Link href="/pot/design">
              <a className="btn btn--page btn--page--white">详情</a>
            </Link>
          </div>
        </div>
      </div>
      {/*
      <div className="section section--index section--02 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h3 className="section__subtitle">淹れ方</h3>
            <h2 className="section__title __wb">
              <span>お茶の时间が</span>
              <span>もっと</span>
              <span>楽しくなる</span>
              <span>淹れ方</span>
            </h2>
            <p>
              コーヒー、紅茶、日本茶のおいしさをさらに広げます。毎日のお茶の时间がもっと楽しくなる淹れ方をご紹介します。
            </p>
            <Link href="/pot/brewing">
              <a className="btn btn--page">详情</a>
            </Link>
          </div>
        </div>
      </div> */}

      <div className="section section--index section--03 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h3 className="section__subtitle">故事</h3>
            <h2 className="section__title __wb">
              <span>BALMUDA The Potが</span>
              <span>生まれるまで</span>
            </h2>
            <p>
              美味的饮食可以带来活力。即使只是日常的料理，好吃的瞬间都会变成就充满快乐的回忆。BALMUDA电水壶，为这些美好的时间添彩。
            </p>
            <Link href="/pot/story">
              <a className="btn btn--page">详情</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="section section--index section--gallery">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">画廊</h2>
          </div>

          <div className="gallery__content" data-pswp-uid="1">
            <figure>
              <img
                data-mobile="https://www.balmuda.com/jp/pot/img/index/gallery/1@2x.jpg?20201006"
                data-desktop="https://www.balmuda.com/jp/pot/img/index/gallery/1.jpg?20201006"
                data-retina="https://www.balmuda.com/jp/pot/img/index/gallery/1@2x.jpg?20201006"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/pot/img/index/gallery/1@2x.jpg?20201006"
              />
            </figure>
            <figure>
              <img
                data-mobile="https://www.balmuda.com/jp/pot/img/index/gallery/2@2x.jpg?20201006"
                data-desktop="https://www.balmuda.com/jp/pot/img/index/gallery/2.jpg?20201006"
                data-retina="https://www.balmuda.com/jp/pot/img/index/gallery/2@2x.jpg?20201006"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/pot/img/index/gallery/2@2x.jpg?20201006"
              />
            </figure>
            <figure>
              <img
                data-mobile="https://www.balmuda.com/jp/pot/img/index/gallery/3@2x.jpg?20201006"
                data-desktop="https://www.balmuda.com/jp/pot/img/index/gallery/3.jpg?20201006"
                data-retina="https://www.balmuda.com/jp/pot/img/index/gallery/3@2x.jpg?20201006"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/pot/img/index/gallery/3@2x.jpg?20201006"
              />
            </figure>
            <figure>
              <img
                data-mobile="https://www.balmuda.com/jp/pot/img/index/gallery/4@2x.jpg?20201006"
                data-desktop="https://www.balmuda.com/jp/pot/img/index/gallery/4.jpg?20201006"
                data-retina="https://www.balmuda.com/jp/pot/img/index/gallery/4@2x.jpg?20201006"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/pot/img/index/gallery/4@2x.jpg?20201006"
              />
            </figure>
            <figure>
              <img
                data-mobile="https://www.balmuda.com/jp/pot/img/index/gallery/5@2x.jpg?20201006"
                data-desktop="https://www.balmuda.com/jp/pot/img/index/gallery/5.jpg?20201006"
                data-retina="https://www.balmuda.com/jp/pot/img/index/gallery/5@2x.jpg?20201006"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/pot/img/index/gallery/5@2x.jpg?20201006"
              />
            </figure>
            <figure>
              <img
                data-mobile="https://www.balmuda.com/jp/pot/img/index/gallery/6@2x.jpg?20201006"
                data-desktop="https://www.balmuda.com/jp/pot/img/index/gallery/6.jpg?20201006"
                data-retina="https://www.balmuda.com/jp/pot/img/index/gallery/6@2x.jpg?20201006"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/pot/img/index/gallery/6@2x.jpg?20201006"
              />
            </figure>
          </div>
        </div>
      </div>
    </Layout>
  )
}
