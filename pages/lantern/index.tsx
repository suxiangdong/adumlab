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
              购买
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
              data-mobile="https://www.balmuda.com/jp/lantern/img/index/mobile/main.jpg?20210425"
              data-desktop="https://www.balmuda.com/jp/lantern/img/index/desktop/main.jpg?20210425"
              data-retina="https://www.balmuda.com/jp/lantern/img/index/desktop/main@2x.jpg?20210425"
              className="__image adaptiveimage"
              src="https://www.balmuda.com/jp/lantern/img/index/desktop/main@2x.jpg?20210425"
              alt=""
            />
            <img
              src="https://www.balmuda.com/jp/lantern/img/index/svg/main_text.svg?20210425"
              className="__image adaptiveimage_copy"
              alt="オンラインストア限定"
            />
          </div>
        </div>
        <div className="viewport">
          <h2 className="page__title __wb">
            <span>享受时间的LED灯</span>
          </h2>
          <span className="label__block">便携式LED灯</span>
          <p className="overview_text">
            从像蜡烛一样摇曳的暖色灯，到可以用作读书灯的温白色灯。
            <br />
            BALMUDA The Lantern是在日常的不经意的时间，稍微特别点缀的LED灯。
            <br />
            内置电池在房间里的任何地方，带到户外也可以使用。
          </p>
          <div className="the-price">
            <p className="price price--excl_tax" id="price2">
              15,180
            </p>
            <p className="colores">
              黑色/白色/灰色/
              <br />
              经典红/海蓝色
            </p>
          </div>

          <div className="__trailer __is_mobile">
            <video
              width="100%"
              height="100%"
              id="sec40_mobile"
              poster="https://www.balmuda.com/jp/lantern/img/index/mobile/trailer_low.jpg"
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
              配合场景
              <br />
              享受光
            </h2>
            <p className="section__desc">
              BALMUDA The
              Lantern，简单的操作就可以调光。随着亮度的变化，光的颜色也会发生变化，所以可以配合阅读灯、特殊日子的餐桌等场景使用。
            </p>
            <Link href="/lantern/design#dimming">
              <a className="section__btn">关于调光的详细信息</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="section section--index section--02 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <h2 className="section__title">
            可选
            <br />
            颜色变化
          </h2>
          <Link href="/lantern/design#colors">
            <a className="section__btn">观察各种颜色的使用场景</a>
          </Link>
        </div>
      </div>

      <div className="section section--index section--03 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">产品开发故事</h2>
            <p className="section__desc">
              就像在眼前发出声音的壁炉的火焰一样，想要永不厌倦的复杂的光的移动。下面介绍BALMUDA The
              Lantern的开发故事。
            </p>
            <Link href="/lantern/story">
              <a className="section__btn">读故事</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
