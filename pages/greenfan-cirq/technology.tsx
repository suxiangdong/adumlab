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
            <li className="pagemap__content__item pagemap__content__item--technology __current">
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

      <div className="section section--technology section--00">
        <div className="__image">
          <img
            data-mobile="https://www.balmuda.com/jp/greenfan-cirq/img/technology/mobile/section--00.jpg"
            data-desktop="https://www.balmuda.com/jp/greenfan-cirq/img/technology/desktop/section--00.jpg"
            data-retina="https://www.balmuda.com/jp/greenfan-cirq/img/technology/desktop/section--00@2x.jpg"
            className="__image adaptiveimage"
            src="https://www.balmuda.com/jp/greenfan-cirq/img/technology/desktop/section--00@2x.jpg"
          />
        </div>
        <div className="__content">
          <h2 className="page__title __wb">远达15米的送风距离</h2>
          <p>
            空气循环机最重要的作用是使室内空气循环。它必须产生能够带动远处空气流动的强风。GreenFan
            Cirq通过BALMUDA独特的双重扇叶结构和格栅设计，实现与普通循环器完全不同质量的风质。能够带动远达15米空气的流动。
          </p>
        </div>
      </div>

      <div className="section_wrap">
        <div className="section section--technology section--01 scrollLoader lazyload loaded">
          <div className="__image __is_mobile"></div>
          <div className="viewport scrollLoader fadeInUp loaded">
            <div className="__content">
              <h2 className="section__title">省エネルギー</h2>
              <img
                data-mobile="https://www.balmuda.com/jp/greenfan-cirq/img/technology/mobile/section--01.jpg"
                data-desktop="https://www.balmuda.com/jp/greenfan-cirq/img/technology/desktop/section--01.jpg"
                data-retina="https://www.balmuda.com/jp/greenfan-cirq/img/technology/desktop/section--01@2x.jpg"
                className="__image adaptiveimage"
                src="https://www.balmuda.com/jp/greenfan-cirq/img/technology/desktop/section--01@2x.jpg"
              />
              <p>
                GreenFan
                Cirq采用直流无刷电机。具有超群的节能性能，最低档运转时的耗电量仅为3W。每日使用8小时，电费仅为0.01元，非常经济。
              </p>
              <p className="note">* 电费按每1kWh 0.48元计算。</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section_wrap">
        <div className="section section--technology section--02 scrollLoader lazyload loaded">
          <div className="__image __is_mobile"></div>
          <div className="viewport scrollLoader fadeInUp loaded">
            <div className="__content">
              <h2 className="section__title __wb">
                <span>节省空调电费20%</span>
              </h2>
              <img
                data-mobile="https://www.balmuda.com/jp/greenfan-cirq/img/technology/mobile/section--02.png"
                data-desktop="https://www.balmuda.com/jp/greenfan-cirq/img/technology/desktop/section--02.png"
                data-retina="https://www.balmuda.com/jp/greenfan-cirq/img/technology/desktop/section--02@2x.png"
                className="__image adaptiveimage"
                src="https://www.balmuda.com/jp/greenfan-cirq/img/technology/desktop/section--02@2x.png"
              />
              <p>
                通过GreenFan
                Cirq出色的空气循环能力，提高空调效率。夏天可将设定温度提高2〜3°C，冬天可将设定温度降低2〜3°C，最大可节省20%电费。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--technology section--03 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title __wb">
              <span>GreenFan</span>
              <span>科技</span>
            </h2>
            <img
              data-mobile="https://www.balmuda.com/jp/greenfan-cirq/img/technology/mobile/section--03.png"
              data-desktop="https://www.balmuda.com/jp/greenfan-cirq/img/technology/desktop/section--03.png"
              data-retina="https://www.balmuda.com/jp/greenfan-cirq/img/technology/desktop/section--03@2x.png"
              className="__image adaptiveimage"
              src="https://www.balmuda.com/jp/greenfan-cirq/img/technology/desktop/section--03@2x.png"
            />
            <p>
              巴慕达独特的GreenFan科技通过1组扇叶送出两种速度的风，从而改变送风质量。这两种不同风速的风形成旋窝，集中到一点。GreenFan
              Cirq利用这种技术送出大量的风，并将风送达远端，并且通过调节转速与出口形状，使风尽可能的集中在前方。因此，其送出的强劲风力可推动远达15米范围内的空气。风扇转速低，且出风量大。唯有GreenFan科技才能产生如此特别的风。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
