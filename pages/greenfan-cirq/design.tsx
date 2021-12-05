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
              href="/support"
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
          叶片及马达是 GreenFan Cirq 的关键。 GreenFan Cirq 特别设计是在于有效率地送出大量空气自由改变风向，减少噪音产生。 满足循环扇所需的条件。
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
            GreenFan Cirq 可无段差地从水平方向到垂直甚至90度转向。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
