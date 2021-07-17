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
            data-mobile="//www.balmuda.com/jp/greenfan-cirq/img/index/mobile/main.jpg"
            data-desktop="//www.balmuda.com/jp/greenfan-cirq/img/index/desktop/main.jpg"
            data-retina="//www.balmuda.com/jp/greenfan-cirq/img/index/desktop/main@2x.jpg"
            className="__image adaptiveimage"
            src="//www.balmuda.com/jp/greenfan-cirq/img/index/desktop/main@2x.jpg"
          />
        </div>
        <div className="viewport">
          <h2 className="page__title __wb">風の使用方法</h2>
          <span className="label__block">空气循环机</span>
          <p className="overview_text">
            冷暖房時、足元と天井付近では最大7°Cもの温度差が発生することがあります。部屋干しが増える季節、閉め切った部屋ではカビが発生し、ニオイがこもってしまいます。GreenFan
            Cirqは、従来にない圧倒的大風量と、広く遠くまで届く強力な送風力で、部屋の空気をいっきに循環させる空气循环机。エアコンの電気代は最大20％下がり、部屋干しの洗濯物は最大3倍速く乾きます。
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
              暖かい空気は上へ。冷たい空気は下へ。これが、冷暖房効率を悪くする原因です。GreenFan
              Cirqは強力な送風力で空気を循環させ、不快な温度差を解消します。
            </p>
            <Link href="/greenfan-cirq/features">
              <a className="btn btn--page">詳しく</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="section section--index section--02 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">远达15米的送风距离届く</h2>
            <p>
              独自の二重構造の羽根と直進性を高めるファンガード形状により、远达15米的送风距离届く力強い風を送り出します。30畳の広さでも一台で十分です。
            </p>
            <Link href="/greenfan-cirq/technology">
              <a className="btn btn--page">詳しく</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="section section--index section--03 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">设计</h2>
            <p>
              軽く動かせて、ピタッと止まる。少しの傾きなら、指先一つで。電源のON/OFF、4段階の風量切り替えは、本体のボタンはもちろん、リモコンからも操作できます。
            </p>
            <Link href="/greenfan-cirq/design">
              <a className="btn btn--page btn">詳しく</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
