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
              <Link href="/greenfan-cirq/features">改变室温</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology ">
              <Link href="/greenfan-cirq/technology">远达15米的送风距离</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design __current">
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
      <div className="section section--design section--00">
        <div className="__image"></div>
        <div className="__content">
          <h2 className="page__title __wb">全新构造</h2>
          <p>
            精雕细琢的GreenFan扇叶和直流电机以及支架。GreenFan
            Cirq特别的外形设计满足了能够高效地送出大量空气，能够自由改变风向并且最大限度降低噪音等条件。GreenFan
            Cirq设计的创新性体现了功能性与美感的有机结合。
          </p>
        </div>
        <img
          data-mobile="https://www.balmuda.com/jp/greenfan-cirq/img/design/mobile/section--00.jpg"
          data-desktop="https://www.balmuda.com/jp/greenfan-cirq/img/design/desktop/section--00.jpg"
          data-retina="https://www.balmuda.com/jp/greenfan-cirq/img/design/desktop/section--00@2x.jpg"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/greenfan-cirq/img/design/desktop/section--00@2x.jpg"
        />
      </div>

      <div className="section section--design section--01 scrollLoader lazyload">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">遥控器</h2>
            <img
              data-mobile="https://www.balmuda.com/jp/greenfan-cirq/img/design/mobile/section--01.jpg"
              data-desktop="https://www.balmuda.com/jp/greenfan-cirq/img/design/desktop/section--01.jpg"
              data-retina="https://www.balmuda.com/jp/greenfan-cirq/img/design/desktop/section--01@2x.jpg"
              className="__image adaptiveimage"
              src="https://www.balmuda.com/jp/greenfan-cirq/img/design/desktop/section--01@2x.jpg"
            />
            <p>
              将GreenFan
              Cirq放置在远处或高处时，可以用附带的遥控器开关电源，切换风量。遥控器设计与主机一样简洁且容易操作。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--design section--02 scrollLoader lazyload">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">轻松一点，调节风向</h2>
            <p>
              GreenFan
              Cirq能够从水平到垂直方向90°自由变换风扇方向，只需轻轻一点，轻松调节。独特设计，平滑转动，自由设定想停就停。室内送风时建议把GreenFan
              Cirq放置在地面，向上倾斜45°同时应防止前方柜子等较高的障碍物阻挡送风。吹干晾晒的衣物时，建议放置在衣物下方，向正上方90°垂直送风。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
