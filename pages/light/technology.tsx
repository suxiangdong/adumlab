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
              <Link href="/light/technology">科技与设计</Link>
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
              <span className="__caption">前束光技术</span>
              <p className="__title __is_desktop">视野范围内不会产生阴影的光</p>
            </div>
          </div>
        </div>
        <div className="forwardbeam--body">
          <div className="viewport">
            <p className="section__title __is_mobile">
              视野范围内不会产生
              <br />
              阴影的光
            </p>
            <p className="forwardbeam--lead __wb">
              <span>以医疗手术灯为灵感而开发的结构设计，从一定距离投射来</span>
              <br />
              <span>的光，可以实现在视野范围内没有阴影的影响的光。</span>
            </p>
            <div className="forwardbeam__img">
              <div className="forwardbeam__img--item forwardbeam__img--item--01">
                <h3 className="forwardbeam__img--h">一般的台灯</h3>
                <div className="forwardbeam__img--head">
                  <img
                    data-mobile="https://www.balmuda.com/jp/light/img/technology/mobile/fowardbeam-img1.png"
                    data-desktop="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img1.png"
                    data-retina="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img1@2x.png"
                    className="__image adaptiveimage"
                    alt="一般的台灯                    "
                    src="https://www.balmuda.com/jp/light/img/technology/desktop/fowardbeam-img1@2x.png"
                  />
                  <div className="forwardbeam__img--head--text">
                    <p className="__wb">
                      <span>来自于比自己头部更高的<br />光源，往下照射会产生头部的阴影</span>
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
                      <span>从一定距离投射来的</span>
                      <span>光，避免因遮挡光线造成的阴影</span>
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
            {/* <div className="forwardbeam__light">
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
                <li>一般的台灯</li>
                <li>
                  <img
                    src="https://www.balmuda.com/jp/light/img/logo/the-light-fff.svgz"
                    alt="BALMUDA The Light"
                  />
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="forwardbeam--foot">
          <div className="forwardbeam--foot--inner">
            <div className="forwardbeam--foot--info">
              <h3>与日本手术灯山田医疗照明共同开发</h3>
              <p>
                在医疗场所使用的光，追求的是准确与精密，特别是手术时所运用的光。手术灯又称为无影灯，利用镜面反射开发出不会产生阴影的光。
                &nbsp;FowardBeam Technology&nbsp; 前束光技术，是与日本山田医疗照明共同开发的技术。
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
                  <h4 className="__title">Ra97显色值</h4>

                  <p className="__note">
                    在追求的是准确与精密的医疗场所或美术馆等环境中使用的太阳光LED，能照射出更接近真实的物品本身的颜色
                  </p>
                </div>
                <div className="__graph">
                  <img
                    data-mobile="/light/img/section--04--graph--01_re.png"
                    data-desktop="/light/img/section--04--graph--01_re.png"
                    data-retina="/light/img/section--04--graph--01_re.png"
                    className="adaptiveimage"
                    alt=""
                    src="/light/img/section--04--graph--01_re.png"
                  />
                </div>
              </div>
              <div className="__add">
                <p className="__wb">
                  <span>在美术馆或医疗机构使用的照明显色指数在Ra90以上</span>
                </p>
              </div>
            </div>
          </div>

          <div className="__column __02 scrollLoader fadeInUp lazyload" id="bluelight">
            <div className="__content">
              <div className="__wrap">
                <div className="__graph">
                  <img
                    data-mobile="/light/img/section--04--graph--02.png"
                    data-desktop="/light/img/section--04--graph--02.png"
                    data-retina="/light/img/section--04--graph--02.png"
                    className="adaptiveimage"
                    alt=""
                    src="/light/img/section--04--graph--02.png"
                  />
                </div>
                <div className="__text">
                  <div className="__main">
                    <h4 className="__title __wb">
                      <span>仅有一半的蓝光峰值波长</span>
                    </h4>
                    <p>
                      接近自然界光线波长的太阳光LED，蓝光峰值波长的强度，只有一般白色LED灯的一半左右，能减轻视觉负担。
                    </p>
                  </div>
                  <div className="__add">
                    <p className="__title">太阳光和白色LED的区别</p>
                    <p>
                      对我们来说，即使是大自然里公认的理想的太阳光，也会含有造成视觉负担的蓝光，而在一般照明或液晶屏幕上的白色LED灯，亦含有高度不自然蓝光的峰值波长，会造成一定程度的视觉负担
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
                  采用电流强弱控制照明亮度的“电流调光”来调整亮度。和一般的PWM调光不同，提供稳定的光线，能减轻双眼的负担
                </p>
              </div>

              <div className="__wrap">
                <div className="__graph __1">
                  <div className="__caption">
                    <span className="__title">PWM调光</span>
                    <p className="__wb">
                      <span>利用亮灯和熄灯的间隔调整亮度</span>
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
                      <span>利用电流流通的强弱来控制照明亮度</span>
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
