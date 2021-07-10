import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'

export default function ProductDetail() {
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
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/greenfan-cirq/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--features">
              <Link href="/greenfan-cirq/features">室温が変わる</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology ">
              <Link href="/greenfan-cirq/technology">15m先まで</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design __current">
              <Link href="/greenfan-cirq/design">デザイン</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--specs">
              <Link href="/greenfan-cirq/specs">スペック</Link>
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
      <div className="section section--design section--00">
        <div className="__image"></div>
        <div className="__content">
          <h2 className="page__title __wb">まったく新しい形</h2>
          <p>
            ファンとモーター。そして、それらを支えるもの。GreenFan
            Cirqの特別な形は、大量の空気を効率よく送り出し、自由に風の方向を変え、出来る限り騒音を少なくするといった、サーキュレータに求められる条件を満足させるために設計されました。
          </p>
        </div>
        <img
          data-mobile="//www.balmuda.com/jp/greenfan-cirq/img/design/mobile/section--00.jpg"
          data-desktop="//www.balmuda.com/jp/greenfan-cirq/img/design/desktop/section--00.jpg"
          data-retina="//www.balmuda.com/jp/greenfan-cirq/img/design/desktop/section--00@2x.jpg"
          className="__image adaptiveimage"
          src="//www.balmuda.com/jp/greenfan-cirq/img/design/desktop/section--00@2x.jpg"
        />
      </div>

      <div className="section section--design section--01 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">リモコン</h2>
            <img
              data-mobile="//www.balmuda.com/jp/greenfan-cirq/img/design/mobile/section--01.jpg"
              data-desktop="//www.balmuda.com/jp/greenfan-cirq/img/design/desktop/section--01.jpg"
              data-retina="//www.balmuda.com/jp/greenfan-cirq/img/design/desktop/section--01@2x.jpg"
              className="__image adaptiveimage"
              src="//www.balmuda.com/jp/greenfan-cirq/img/design/desktop/section--01@2x.jpg"
            />
            <p>
              離れたところや高いところにGreenFan
              Cirqを設置しても、付属のリモコンから電源のON/OFF、風量の切り替えがリモコンで操作できます。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--design section--02 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">水平から垂直まで無段階</h2>
            <p>
              GreenFan Cirqは、水平から垂直まで、90°無段階にファンの向きを変えることができます。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
