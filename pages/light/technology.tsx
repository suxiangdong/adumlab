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
            <a href="/support?PRODUCT_SERIES=L01A" className="btn btn--pagemap">
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
              <span className="__caption">前向光束技术</span>
              <p className="__title __is_desktop">在视野范围内不产生阴影的光</p>
            </div>
          </div>
        </div>
        <div className="forwardbeam--body">
          <div className="viewport">
            <p className="section__title __is_mobile">
              在视野范围内不产生
              <br />
              阴影的光
            </p>
            <p className="forwardbeam--lead __wb">
              <span>以医疗手术灯为灵感而开发的独家光源扩散技术，从一定距离的场所照明到</span>
              <br />
              <span>手边，可实现在视野范围不产生阴影的光。</span>
            </p>
            <div className="forwardbeam__img">
              <div className="forwardbeam__img--item forwardbeam__img--item--01">
                <h3 className="forwardbeam__img--h">一般的桌上台灯</h3>
                <div className="forwardbeam__img--head">
                  <img
                    data-mobile="https://www.balmuda.com/jp/light/img/technology/mobile/fowardbeam-img1.png"
                    data-desktop="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img1.png"
                    data-retina="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img1@2x.png"
                    className="__image adaptiveimage"
                    alt="一般的桌上台灯"
                    src="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img1@2x.png"
                  />
                  <div className="forwardbeam__img--head--text">
                    <p className="__wb">
                      <span>来自位于比自己头部更高的光源，</span>
                      <span>往下照射会产生头部的阴影。</span>
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
                      <span>从一定距离的场所照射而来的</span>
                      <span>光，不会遮蔽光线产生阴影</span>
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
                <li>一般的桌上台灯</li>
                <li>
                  <img
                    src="https://www.balmuda.com/jp/light/img/logo/the-light-fff.svgz"
                    alt="BALMUDA The Light"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="forwardbeam--foot">
          <div className="forwardbeam--foot--inner">
            <div className="forwardbeam--foot--info">
              <h3>与日本国内手术灯市占率第一的山田医疗照明共同开发</h3>
              <p>
                在医疗现场所使用的光，追求的是最高的正确性和精密性，特别是手术时所运用的光。手术灯亦被称为无影灯，利用镜反射开发出不会产生阴影的光。
                &nbsp;FowardBeam Technology&nbsp;
                是与日本国内手术灯市占率第一山田医疗照明共同开发的技术。
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
            <span>太阳光 LED｜</span>
            <span>理想光线，看清本色</span>
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
                  <h4 className="__title">最高等級的演色性</h4>
                  <p>
                    太阳光 LED 用于需要颜色准确度的环境，例如医疗场所和博物馆。
                    它照亮了原来的颜色，培养了孩子们看颜色的能力。
                  </p>
                  <p className="__note">
                    最高等级是指依据 CIE (国际照明委员会) 制订的演色评价指数标准区分，当中最高 1A
                    (Ra90以上) 等级。
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
                  <span>在美术馆或医疗现场采用的照明演色水准Ra90以上</span>
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
                      <span>仅有一半的蓝光峰值波长</span>
                    </h4>
                    <p>
                      几近大自然光波长的自然光 LED，蓝光峰值波长的强度，只有一般白色 LED
                      灯的大约一半。能减轻对双眼的负担，提供友善舒适的光。
                    </p>
                  </div>
                  <div className="__add">
                    <p className="__title">太阳光和白色 LED 的差异</p>
                    <p>
                      对我们来说，即使是大自然里公认最理想的太阳光，也含有会对双眼成负担的蓝光。而使用在一般照明或液晶萤幕上的白色LED灯，亦蕴含高度不自然蓝光的峰值波长，会造成对视网膜等不好的影响。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="__column __03 scrollLoader fadeInUp lazyload">
            <div className="__content">
              <div className="__text">
                <h4 className="__title">不频闪的光</h4>
                <p>
                  采用电流强弱控制明亮度的「电流调光」来调整明亮度。和一般的PWM调光不同，提供稳定不频闪的光，能减轻对双眼的负担。
                </p>
              </div>

              <div className="__wrap">
                <div className="__graph __1">
                  <div className="__caption">
                    <span className="__title">PWM调光</span>
                    <p className="__wb">
                      <span>利用亮灯和熄灯的间隔来控制明亮度</span>
                    </p>
                    <em>发生闪烁</em>
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
                    <span className="__title">电流调光</span>
                    <p className="__wb">
                      <span>利用电流流通的强弱来控制明亮度</span>
                    </p>
                    <em>不闪烁</em>
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
