import Link from 'next/link'
import Head from 'next/head'
import ReactSlick from 'react-slick'
import Layout from '../../layouts/default'
import { useState } from 'react'
import API from '../../effects/api'

export async function getServerSideProps() {
  try {
    const [banners] = await Promise.all([API.getBannersByCategory(6)])
    return { props: { banners } }
  } catch (error) {
    return { props: { banners: {} } }
  }
}

export default function ProductDetail({ banners }) {
  if (!banners || !Array.isArray(banners.data) || banners.data.length === 0) {
    banners.data = [0, 1, 2, 3, 4, 5, 6].map((i) => ({
      id: i,
      path: `https://www.balmuda.com/jp/rain/img/index/desktop/billboard--0${i}@2x.jpg?20210505`
    }))
  }

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
              <Link href="/rain/classic">经典先端</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--humidity">
              <Link href="/rain/humidity">适宜的湿润度</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/rain/spec">规格</Link>
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
        <ReactSlick dots className="billboard">
          {banners.data.map((item) => (
            <img key={item.id} className="w-full" src={item.path} />
          ))}
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
            净化空气
            <br />
            精美加湿器
          </h2>
          <span className="label__block">气化式加湿器</span>
          <p>
            巴慕达加湿器是实现了颠覆性无缸结构的精美加湿器。只需从顶部注入清水即可。具有先端的旋转控制环操作和精美的显示器。与空气净化器相同采用了溶菌酶滤网，对吸入主机内空气中所含的细菌进行分解。去除空气中的灰尘及杂菌后，对清洁的空气进行加湿处理并排放到室内。提供清洁、舒适的湿润度。确保您在干燥的季节，也能够健康地生活。
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
            <h2 className="section__title">经典先端</h2>
            <p>
              能够直接注水的颠覆性无缸结构。全新的精妙控制环操作方法。时尚、便于观察的显示器。所有这些元素都融入到巧妙优美的设计中。
            </p>
            <Link href="/rain/classic">
              <a className="btn btn--page">继续阅读</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="section section--index section--02 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">清洁适宜的湿润度</h2>
            <p>
              ウイルスが活性化する乾燥状態、カビなどが繁殖しやすい多湿状態。そのどちらでもない約50％の湿度が、健康や家具に適切と言われています。Rainは取り入れた空気を酵素プレフィルターで除菌してから加湿、送風するので、适宜的湿润度を清潔に提供します。
            </p>
            <Link href="/rain/humidity">
              <a className="btn btn--page">继续阅读</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
