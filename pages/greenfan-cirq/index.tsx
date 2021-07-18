import Link from 'next/link'
import Head from 'next/head'
import ReactSlick from 'react-slick'
import Layout from '../../layouts/default'
import API from '../../effects/api'

export async function getServerSideProps() {
  try {
    const [banners] = await Promise.all([API.getBannersByCategory(4)])
    return { props: { banners } }
  } catch (error) {
    return { props: { banners: {} } }
  }
}

export default function ProductDetail({ banners }) {
  if (!Array.isArray(banners.data) || banners.data.length === 0) {
    banners.data = [0, 1, 2, 3, 4, 5].map((i) => ({
      id: i,
      path: `https://www.balmuda.com/jp/greenfan-cirq/img/index/desktop/billboard--0${i}@2x.jpg?20210505`
    }))
  }

  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/greenfan-cirq/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/greenfan-cirq/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <a href="/greenfan-cirq/" className="pagemap__content--logo">
            <img
              className="w-full"
              src="/_theme/img/svg/balmuda-greenfan-cirq.min.svgz"
              alt="GreenFan Cirq"
            />
          </a>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index __current">
              <Link href="/greenfan-cirq/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--features">
              <Link href="/greenfan-cirq/features">改变室温</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology">
              <Link href="/greenfan-cirq/technology">远达15米的送风距离</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design">
              <Link href="/greenfan-cirq/design">设计</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--specs">
              <Link href="/greenfan-cirq/specs">规格</Link>
            </li>
          </ul>

          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=EGF-3300-WK"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="billboard__wrapper">
        <ReactSlick dots className="billboard">
          {banners.data.map((item) => (
            <img key={item.id} className="w-full" src={item.path} />
          ))}
        </ReactSlick>
      </div>

      <div className="section section--index section--00">
        <div className="__mainimage">
          <img
            data-mobile="https://www.balmuda.com/jp/greenfan-cirq/img/index/mobile/main.jpg"
            data-desktop="https://www.balmuda.com/jp/greenfan-cirq/img/index/desktop/main.jpg"
            data-retina="https://www.balmuda.com/jp/greenfan-cirq/img/index/desktop/main@2x.jpg"
            className="__image adaptiveimage"
            src="https://www.balmuda.com/jp/greenfan-cirq/img/index/desktop/main@2x.jpg"
          />
        </div>
        <div className="viewport">
          <h2 className="page__title __wb">风的使用方法</h2>
          <span className="label__block">空气循环扇</span>
          <p className="overview_text">
            冷暖空气时，脚下和天花板附近的温差最大可达7°C。在房间晾晒增多的季节，封闭的房间会产生霉菌，散发出难闻的气味。GreenFan
            Cirq是一台空气式循环机，它以前所未有的压倒性的大风量和宽广到遥远的强大送风力，使房间内的空气同时循环。空调的电费最多能降低20%，房间晾的衣服最多能快干3倍。
          </p>
          <div className="the-price">
            <p className="price price--excl_tax" id="price2">
              20,160
            </p>
          </div>
        </div>
      </div>

      <div className="section section--index section--01 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">改变室温</h2>
            <p>
              温暖的空气向上飘。冷空气往下走。这是导致冷暖空气效率变差的原因。GreenFan
              Cirq以强大的送风力使空气循环，消除不愉快的温差。
            </p>
            <Link href="/greenfan-cirq/features">
              <a className="btn btn--page">详情</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="section section--index section--02 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">远达15米的送风距离届く</h2>
            <p>
              通过独自的双重构造的叶片和提高直进性的风扇保护形状，送出远达15米的送风距离到达的强劲的风。30张榻榻米大小，一台就足够了。
            </p>
            <Link href="/greenfan-cirq/technology">
              <a className="btn btn--page">详情</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="section section--index section--03 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">设计</h2>
            <p>
              轻轻移动，啪的一声停住。稍微倾斜的话，用一个指尖。电源的ON/OFF,
              4个阶段的风量切换，不用说主体的按钮，遥控器也能操作。
            </p>
            <Link href="/greenfan-cirq/design">
              <a className="btn btn--page btn">详情</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
