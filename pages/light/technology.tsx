import Link from 'next/link'
import Head from 'next/head'
import ReactSlick from 'react-slick'
import Layout from '../../layouts/default'

export default function ProductDetail() {
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/light/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/light/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <Link href="/light/">
            <a className="pagemap__content--logo">
              <img src="/_theme/img/svg/balmuda-the-light.min.svgz" alt="BALMUDA The Light" />
            </a>
          </Link>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/light/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology __current">
              <Link href="/light/technology">科技</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--howto">
              <Link href="/light/howto">使用方法</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/light/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="/support?PRODUCT_SERIES=L01A"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="section section--technology section--02 scrollLoader lazyload">
        <div className="__keyvisual">
          <div className="viewport">
            <div className="__copy">
              <img
                src="https://www.balmuda.com/jp/light/img/technology/desktop/forwardbeam_technology.svgz"
                className="__logo"
                alt="FowardBeam Technology"
              />
              <span className="__caption">フォワードビーム科技</span>
              <p className="__title __is_desktop">目線の先に影を作らない光</p>
            </div>
          </div>
        </div>
        <div className="forwardbeam--body">
          <div className="viewport">
            <p className="section__title __is_mobile">
              目線の先に影を
              <br />
              作らない光
            </p>
            <p className="forwardbeam--lead __wb">
              <span>医療用の手術灯をヒントに開発した</span>
              <span>独自の光拡散技術で、</span>
              <span>離れた場所から広く手元を照らし、</span>
              <span>目線の先に影を作らない光を実現しました。</span>
            </p>
            <div className="forwardbeam__img">
              <div className="forwardbeam__img--item forwardbeam__img--item--01">
                <h3 className="forwardbeam__img--h">一般的なデスクライト</h3>
                <div className="forwardbeam__img--head">
                  <img
                    data-mobile="https://www.balmuda.com/jp/light/img/technology/mobile/fowardbeam-img1.png"
                    data-desktop="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img1.png"
                    data-retina="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img1@2x.png"
                    className="__image adaptiveimage"
                    alt="通常の照明"
                    src="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img1@2x.png"
                  />
                  <div className="forwardbeam__img--head--text">
                    <p className="__wb">
                      <span>自身の頭より</span>
                      <span>高い位置にある光は</span>
                      <span>頭の影が落ちてしまう</span>
                    </p>
                  </div>
                </div>
                <div className="forwardbeam__img--elm">
                  <img
                    data-mobile="https://www.balmuda.com/jp/light/img/technology/mobile/fowardbeam-img2.png"
                    data-desktop="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img2.png"
                    data-retina="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img2@2x.png"
                    className="__image adaptiveimage"
                    alt=""
                    src="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img2@2x.png"
                  />
                </div>
              </div>
              <div className="forwardbeam__img--item forwardbeam__img--item--02">
                <h3 className="forwardbeam__img--h">
                  <img
                    src="https://www.balmuda.com/jp/light/img/technology/desktop/forwardbeam_technology.svgz"
                    alt="FowardBeam Technology"
                  />
                </h3>
                <div className="forwardbeam__img--head">
                  <img
                    data-mobile="https://www.balmuda.com/jp/light/img/technology/mobile/fowardbeam-img3.png"
                    data-desktop="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img3.png"
                    data-retina="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img3@2x.png"
                    className="__image adaptiveimage"
                    alt="フォワードビーム科技"
                    src="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img3@2x.png"
                  />
                  <div className="forwardbeam__img--head--text">
                    <p className="__wb">
                      <span>離れた場所から照らし</span>
                      <span>光が遮られず、</span>
                      <span>影を作らない</span>
                    </p>
                  </div>
                </div>
                <div className="forwardbeam__img--elm">
                  <img
                    data-mobile="https://www.balmuda.com/jp/light/img/technology/mobile/fowardbeam-img4.png"
                    data-desktop="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img4.png"
                    data-retina="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img4@2x.png"
                    className="__image adaptiveimage"
                    alt=""
                    src="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img4@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="forwardbeam__light">
              <div className="forwardbeam__light--inner">
                <span className="__is_desktop">
                  <img
                    data-desktop="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img5.jpg"
                    data-retina="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img5@2x.jpg"
                    className="__image adaptiveimage"
                    alt=""
                    src="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img5@2x.jpg"
                  />
                </span>
                <span className="__is_desktop">
                  <img
                    data-desktop="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img6.jpg"
                    data-retina="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img6@2x.jpg"
                    className="__image adaptiveimage"
                    alt=""
                    src="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img6@2x.jpg"
                  />
                </span>
              </div>
              <ul className="forwardbeam__light--list __is_mobile">
                <li>一般的なデスクライト</li>
                <li>
                  <img src="https://www.balmuda.com/jp/light/img/logo/the-light-fff.svgz" alt="BALMUDA The Light" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="forwardbeam--foot">
          <div className="forwardbeam--foot--inner">
            <div className="forwardbeam--foot--info">
              <h3>手術灯で国内シェアNo.1の山田医療照明と共同開発</h3>
              <p>
                あらゆる光の中で最も正確さと精密さが求められるのは医療現場、特に手術時の光です。手術灯は無影灯とも呼ばれ、ミラーで光を反射させ、影のない光を作り出します。フォワードビーム科技は、手術灯で国内シェアNo.1の
                <a href="https://www.skylux.co.jp" target="_blank">
                  山田医療照明
                </a>
                と共同開発しました。
              </p>
            </div>
            <figure className="forwardbeam--foot--img">
              <img
                data-mobile="https://www.balmuda.com/jp/light/img/technology/mobile/fowardbeam-img7.jpg?20200603"
                data-desktop="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img7.jpg?20200603"
                data-retina="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img7@2x.jpg?20200603"
                className="__image adaptiveimage"
                alt="医療用の手術灯"
                src="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img7@2x.jpg?20200603"
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="section section--technology section--04" id="led">
        <div className="viewport">
          <h2 className="section__title __wb">
            <span>太陽光LED｜</span>
            <span>本当の色が見える理想的な光</span>
          </h2>

          <div className="__column __01 scrollLoader fadeInUp lazyload">
            <div className="color_rendering_index">
              <div className="led__img--item led__img--item--01">
                <img
                  data-mobile="https://www.balmuda.com/jp/light/img/technology/mobile/led-img1.jpg"
                  data-desktop="https://www.balmuda.com/jp/light/img/technology/desktop/led-img1.jpg"
                  data-retina="https://www.balmuda.com/jp/light/img/technology/desktop/led-img1@2x.jpg"
                  className="adaptiveimage"
                  alt="一般的なLED照明(イメージ)"
                  src="https://www.balmuda.com/jp/light/img/technology/desktop/led-img1@2x.jpg"
                />
              </div>
              <div className="led__img--item led__img--item--02">
                <img
                  data-mobile="https://www.balmuda.com/jp/light/img/technology/mobile/led-img2.jpg"
                  data-desktop="https://www.balmuda.com/jp/light/img/technology/desktop/led-img2.jpg"
                  data-retina="https://www.balmuda.com/jp/light/img/technology/desktop/led-img2@2x.jpg"
                  className="adaptiveimage"
                  alt="BALMUDA The Light(イメージ)"
                  src="https://www.balmuda.com/jp/light/img/technology/desktop/led-img2@2x.jpg"
                />
              </div>
            </div>
            <div className="__content">
              <div className="__wrap">
                <div className="__text">
                  <h4 className="__title">最高レベルの演色性</h4>
                  <p>
                    医療現場や美術館など、色に正確さが求められる環境で使用されている太陽光LED。本来の色を照らし出し、子どもたちの色を見る力を育てます。
                  </p>
                  <p className="__note">
                    最高レベルとは、CIE（国際照明委員会）が定める演色評価指数の区分で最高の1A（Ra90以上）であることことに基づきます。
                  </p>
                </div>
                <div className="__graph">
                  <img
                    data-mobile="https://www.balmuda.com/jp/light/img/technology/mobile/section--04--graph--01_re.png"
                    data-desktop="https://www.balmuda.com/jp/light/img/technology/desktop/section--04--graph--01_re.png"
                    data-retina="https://www.balmuda.com/jp/light/img/technology/desktop/section--04--graph--01_re@2x.png"
                    className="adaptiveimage"
                    alt=""
                    src="https://www.balmuda.com/jp/light/img/technology/desktop/section--04--graph--01_re@2x.png"
                  />
                </div>
              </div>
              <div className="__add">
                <p className="__wb">
                  <span>美術館や医療現場で採用されている</span>
                  <span>照明の演色性の水準</span>
                </p>
              </div>
            </div>
          </div>

          <div className="__column __02 scrollLoader fadeInUp lazyload" id="bluelight">
            <div className="__content">
              <div className="__wrap">
                <div className="__graph">
                  <img
                    data-mobile="https://www.balmuda.com/jp/light/img/technology/mobile/section--04--graph--02.png"
                    data-desktop="https://www.balmuda.com/jp/light/img/technology/desktop/section--04--graph--02.png"
                    data-retina="https://www.balmuda.com/jp/light/img/technology/desktop/section--04--graph--02@2x.png"
                    className="adaptiveimage"
                    alt=""
                    src="https://www.balmuda.com/jp/light/img/technology/desktop/section--04--graph--02@2x.png"
                  />
                </div>
                <div className="__text">
                  <div className="__main">
                    <h4 className="__title __wb">
                      <span>ブルーライトの</span>
                      <span>ピーク波長が半分</span>
                    </h4>
                    <p>
                      太陽光の波長に近い太陽光LEDは、ブルーライトのピーク波長の強さが一般的な白色LEDライトの约半分。目への負担を抑えた、やさしい光を提供します。
                    </p>
                  </div>
                  <div className="__add">
                    <p className="__title">太陽光と白色LEDの大きな違い</p>
                    <p>
                      わたしたちにとって最も理想的な光であり日中に浴びることが推奨されている太陽光にも、目に悪影響があるとされるブルーライトは含まれています。しかし、一般的な照明や液晶などに使われる白色LEDライトが持つブルーライトのピーク波長は不自然に高く、網膜傷害などの悪影響を引き起こします。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="__column __03 scrollLoader fadeInUp lazyload">
            <div className="__content">
              <div className="__text">
                <h4 className="__title">ちらつきのない光</h4>
                <p>
                  明るさの調整は、電流の強弱で明るさを制御する「電流調光」を採用。一般的なPWM調光と違い、ちらつきのない光が、目への負担を軽くします。
                </p>
              </div>

              <div className="__wrap">
                <div className="__graph __1">
                  <div className="__caption">
                    <span className="__title">PWM調光</span>
                    <p className="__wb">
                      <span>点灯と消灯の間隔で</span>
                      <span>明るさを制御</span>
                    </p>
                    <em>ちらつきが起こる</em>
                  </div>
                  <img
                    data-mobile="https://www.balmuda.com/jp/light/img/technology/mobile/section--04--graph--03--01.png"
                    data-desktop="https://www.balmuda.com/jp/light/img/technology/desktop/section--04--graph--03--01.png"
                    data-retina="https://www.balmuda.com/jp/light/img/technology/desktop/section--04--graph--03--01@2x.png"
                    className="adaptiveimage"
                    alt=""
                    src="https://www.balmuda.com/jp/light/img/technology/desktop/section--04--graph--03--01@2x.png"
                  />
                </div>

                <div className="__graph __2">
                  <div className="__caption">
                    <span className="__title">電流調光</span>
                    <p className="__wb">
                      <span>流す電流の強弱で</span>
                      <span>明るさを制御</span>
                    </p>
                    <em>ちらつかない</em>
                  </div>
                  <img
                    data-mobile="https://www.balmuda.com/jp/light/img/technology/mobile/section--04--graph--03--02.png"
                    data-desktop="https://www.balmuda.com/jp/light/img/technology/desktop/section--04--graph--03--02.png"
                    data-retina="https://www.balmuda.com/jp/light/img/technology/desktop/section--04--graph--03--02@2x.png"
                    className="adaptiveimage"
                    alt=""
                    src="https://www.balmuda.com/jp/light/img/technology/desktop/section--04--graph--03--02@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
