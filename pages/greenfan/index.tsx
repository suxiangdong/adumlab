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
              购买
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
            再现自然风的
            <br />
            电风扇
          </h2>
          <span className="label__block">直流电扇</span>
          <p className="overview_text">
            <span>The GreenFan是通过独特的技术再现自然风的电风扇。</span>
            <span>在房间里再现吹过夏日午后的舒适的风。</span>
            <span>伴随着令人心情愉悦的绿茵场风，</span>
            <span>请度过美好的夏日一天。</span>
          </p>
          <div className="the-price">
            <p className="price price--excl_tax" id="price2">
              39,600
            </p>
            <p className="colores">白色×黑色/白色×灰色/深灰色×黑色/白色×香槟金</p>
          </div>
        </div>
      </div>

      <div className="section section--index section--01 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">先进性</h2>
            <p>
              巴慕达独有的绿色风扇科技。双层结构的叶片产生的是与自然界的风一样，在较大的表面移动的空气流动。与一般的电风扇相比，能扩散约4倍的风是自然界的先进性。
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
              超静音，便携式，可自由更换摇头角度。为了能够自由地使用它作为生活的工具，它倾注了各种各样的心思。
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
              制造下一个时代的电风扇吧!从这样的想法开始开发的GreenFan。在它成为现实之前，有过意外的启示和偶然的发现。
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
