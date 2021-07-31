import Link from 'next/link'
import Head from 'next/head'
import ReactSlick from 'react-slick'
import Layout from '../../layouts/default'
import { useEffect, useState } from 'react'
import API from '../../effects/api'

export async function getServerSideProps() {
  try {
    const [banners, evaluations] = await Promise.all([
      API.getBannersByCategory(5),
      API.getEvaluationsByCategory(5)
    ])
    return { props: { banners, evaluations } }
  } catch (error) {
    return { props: { banners: {}, evaluations: {} } }
  }
}

export default function ProductDetail({ banners, evaluations }) {
  if (!banners || !Array.isArray(banners.data) || banners.data.length === 0) {
    banners.data = [0, 1, 2, 3, 4].map((i) => ({
      id: i,
      path: `https://www.balmuda.com/jp/pure/img/index/desktop/billboard--0${i}@2x.jpg?20210505`
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

  useEffect(() => {
    if ((window as any).initPhotoSwipeFromDOM) {
      ;(window as any).initPhotoSwipeFromDOM('.gallery__content')
    }
  }, [])

  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="https://photoswipe.com/dist/photoswipe.css?v=4.1.3-1.0.4" />
        <link
          rel="stylesheet"
          href="https://photoswipe.com/dist/default-skin/default-skin.css?v=4.1.3-1.0.4"
        />
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/pure/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/pure/style/desktop.css?20210701173839"></link>
        <script src="https://www.balmuda.com/_theme/vendor/photoswipe/js/photoswipe.min.js"></script>
        <script src="https://www.balmuda.com/_theme/vendor/photoswipe/js/photoswipe-init-custom-opacity.js"></script>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <Link href="/pure/">
            <a className="pagemap__content--logo">
              <img
                className="w-full"
                src="/_theme/img/svg/balmuda-the-pure.min.svgz"
                alt="BALMUDA The Pure"
              />
            </a>
          </Link>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index __current">
              <Link href="/pure/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology">
              <Link href="/pure/technology">科技</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design">
              <Link href="/pure/design">设计</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--howto">
              <Link href="/pure/howto">使用方法</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/pure/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=A01A"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="billboard__wrapper">
        <div className="mov_mobile">
          <div className="section_overlay section_overlay--vmb visible">
            <video
              id="overlay--vmb"
              className="vmb"
              width="100%"
              muted
              autoPlay
              playsInline></video>
          </div>
        </div>
        <div className="mov_desktop">
          <div className="section_overlay section_overlay--vdk visible">
            <video
              id="overlay--vdk"
              className={`vdk ${playing ? 'visible' : 'invisible'}`}
              width="100%"
              playsInline
              onEnded={handleEnded}>
              <source src="//s3.balmuda.com/www/jp/pure/movie/trailer.webm" type="video/webm" />
              <source src="//s3.balmuda.com/www/jp/pure/movie/trailer.mp4" type="video/mp4" />
            </video>
            <div
              className={`video_stop_dk ${playing ? 'visible' : 'invisible'}`}
              data-video-target="vdk"
              onClick={handleEnded}></div>
            <div
              className={`video_play_dk ${playing ? 'invisible' : 'visible'}`}
              data-video-target="vdk"
              onClick={handlePlay}>
              <span></span>
            </div>
          </div>
        </div>
        <div className="billboard__wrapper">
          <ReactSlick dots className="billboard" style={{ opacity: 1, visibility: 'visible' }}>
            {banners.data.map((item) => (
              <img key={item.id} className="w-full" src={item.path} />
            ))}
          </ReactSlick>
        </div>
      </div>
      <div className="section section--index section--00 scrollLoader lazyload">
        <div className="__mainimage">
          <img
            data-mobile="https://www.balmuda.com/jp/pure/img/index/mobile/main.jpg?20210502"
            data-desktop="https://www.balmuda.com/jp/pure/img/index/desktop/main.jpg?20210502"
            data-retina="https://www.balmuda.com/jp/pure/img/index/desktop/main@2x.jpg?20210502"
            src="https://www.balmuda.com/jp/pure/img/index/desktop/main@2x.jpg?20210502"
            className="__image adaptiveimage"
            alt=""
          />
        </div>
        <div className="viewport">
          <h2 className="page__title">
            卓越的空气净化能力，
            <br className="sp" />
            可以体感的
            <br />
            空气净化器
          </h2>
          <span className="label__block">塔式空气净化器</span>
          <p className="overview_text">
            <span>
              以往的空气净化器无法吸附室内边远处的悬浮物质。
              <br />
              为了吸附室内边远处空气，需要强大的循环气流。
            </span>
            <span>
              独特的双风扇结构完美实现了这个功能。BALMUDA The Pure
              能够驱动室内空气流动，因此不仅病毒大小的微细颗粒物和大气污染物质PM2.5，即使较大的如花粉状大小的颗粒物也能够吸附。
              新型360°溶菌酶滤网在除尘净化的同时，还能够溶菌和除臭。精美的设计和简捷的操作，为您提供安心、清洁的空气。
            </span>
          </p>

          <div className="the-price">
            <p className="price price--excl_tax" id="price2">
              57,200
            </p>
            <p className="colores">白色/深灰色</p>
          </div>

          <div className="__trailer __is_mobile">
            <video
              controls={true}
              poster="https://www.balmuda.com/jp/pure/img/index/mobile/v1.jpg"
              width="100%"
              height="100%">
              <source src="//s3.balmuda.com/www/jp/pure/movie/trailer.webm" type="video/webm" />
              <source src="//s3.balmuda.com/www/jp/pure/movie/trailer.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <Link href="/pure/technology">
        <a>
          <div className="section section--index section--01 scrollLoader lazyload">
            <div className="viewport scrollLoader fadeInUp lazyload">
              <div className="__content">
                <h2 className="section__title">
                  <img
                    src="https://www.balmuda.com/jp/pure/img/index/svg/technology.svg"
                    alt="TECHNOLOGY"
                  />
                </h2>
                <h3 className="section__subtitle">净享纯净安心的空气。</h3>
                <p className="section__desc">
                  空气净化器能够强力吸附传统空气净化器无法吸附的花粉等较大的颗粒物。对于大气污染物质PM2.5也能卓有成效的去除。新型360°溶菌酶滤网在除尘的同时，还能抗菌和溶菌。
                </p>
                <p className="asterisk __ref">*2 : 当喷气清洁模式运行时</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
      <Link href="/pure/design">
        <a>
          <div className="section section--index section--02 scrollLoader lazyload">
            <div className="viewport scrollLoader fadeInUp lazyload">
              <div className="__content">
                <h2 className="section__title">
                  <img
                    src="https://www.balmuda.com/jp/pure/img/index/svg/design.svg"
                    alt="DESIGN"
                  />
                </h2>
                <h3 className="section__subtitle">全新的结构</h3>
                <p className="section__desc">
                  BALMUDA The Pure
                  空气净化器独特的双风扇结构，可以吸附室内边远处的悬浮物质，强有力的循环气流，让室内空气短时间多次通过高性能的溶菌酶滤网，有效实现室内空气净化。
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
      <Link href="/pure/howto">
        <a>
          <div className="section section--index section--03 scrollLoader lazyload">
            <div className="viewport scrollLoader fadeInUp lazyload">
              <div className="__content">
                <h3 className="section__subtitle">
                  <span>简单的操作</span>
                </h3>
                <p className="section__desc">
                  BALMUDA The Pure
                  空气净化器的操作按钮仅有3个。自动模式可以根据异味传感器和灰尘传感器自动运行。喷射清洁模式有10～30分钟的定时档，能迅速强力净化空气。
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
      <div className="section section--blockquote">
        <div className="viewport">
          <h2 className="section__title">
            <img
              src="https://www.balmuda.com/jp/pure/img/index/svg/media.svgz?20210502"
              className="__title inline-block"
              alt="MEDIA"
            />
            <span className="__caption">被各种媒体报道。</span>
          </h2>
          <ReactSlick className="blockquotes" arrows={false} dots>
            {evaluations.data?.map((item) => (
              <div key={item.id} className="blockquote">
                <blockquote>{item.content}</blockquote>
                <p className="__media">{`${new Date(item.publish_at).toLocaleDateString('zh')} ${
                  item.source
                }`}</p>
                <a href={item.source_url} target="_blank" className="__link">
                  {item.source_url}
                </a>
              </div>
            ))}
          </ReactSlick>
        </div>
      </div>

      <div className="gallery scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="gallery__h">画廊</h2>
          </div>

          <div className="gallery__content" data-pswp-uid="1">
            <figure>
              <a
                href="https://www.balmuda.com/jp/pure/img/index/gallery/1@2x.jpg?20210502"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/pure/img/index/gallery/1@2x.jpg?20210502"
                  data-desktop="https://www.balmuda.com/jp/pure/img/index/gallery/1.jpg?20210502"
                  data-retina="https://www.balmuda.com/jp/pure/img/index/gallery/1@2x.jpg?20210502"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/pure/img/index/gallery/1@2x.jpg?20210502"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://www.balmuda.com/jp/pure/img/index/gallery/2@2x.jpg?20210502"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/pure/img/index/gallery/2@2x.jpg?20210502"
                  data-desktop="https://www.balmuda.com/jp/pure/img/index/gallery/2.jpg?20210502"
                  data-retina="https://www.balmuda.com/jp/pure/img/index/gallery/2@2x.jpg?20210502"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/pure/img/index/gallery/2@2x.jpg?20210502"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://www.balmuda.com/jp/pure/img/index/gallery/3@2x.jpg?20210502"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/pure/img/index/gallery/3@2x.jpg?20210502"
                  data-desktop="https://www.balmuda.com/jp/pure/img/index/gallery/3.jpg?20210502"
                  data-retina="https://www.balmuda.com/jp/pure/img/index/gallery/3@2x.jpg?20210502"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/pure/img/index/gallery/3@2x.jpg?20210502"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://www.balmuda.com/jp/pure/img/index/gallery/4@2x.jpg?20210502"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/pure/img/index/gallery/4@2x.jpg?20210502"
                  data-desktop="https://www.balmuda.com/jp/pure/img/index/gallery/4.jpg?20210502"
                  data-retina="https://www.balmuda.com/jp/pure/img/index/gallery/4@2x.jpg?20210502"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/pure/img/index/gallery/4@2x.jpg?20210502"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://www.balmuda.com/jp/pure/img/index/gallery/5@2x.jpg?20210502"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/pure/img/index/gallery/5@2x.jpg?20210502"
                  data-desktop="https://www.balmuda.com/jp/pure/img/index/gallery/5.jpg?20210502"
                  data-retina="https://www.balmuda.com/jp/pure/img/index/gallery/5@2x.jpg?20210502"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/pure/img/index/gallery/5@2x.jpg?20210502"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://www.balmuda.com/jp/pure/img/index/gallery/6@2x.jpg?20210502"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/pure/img/index/gallery/6@2x.jpg?20210502"
                  data-desktop="https://www.balmuda.com/jp/pure/img/index/gallery/6.jpg?20210502"
                  data-retina="https://www.balmuda.com/jp/pure/img/index/gallery/6@2x.jpg?20210502"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/pure/img/index/gallery/6@2x.jpg?20210502"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://www.balmuda.com/jp/pure/img/index/gallery/7@2x.jpg?20210502"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/pure/img/index/gallery/7@2x.jpg?20210502"
                  data-desktop="https://www.balmuda.com/jp/pure/img/index/gallery/7.jpg?20210502"
                  data-retina="https://www.balmuda.com/jp/pure/img/index/gallery/7@2x.jpg?20210502"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/pure/img/index/gallery/7@2x.jpg?20210502"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://www.balmuda.com/jp/pure/img/index/gallery/8@2x.jpg?20210502"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/pure/img/index/gallery/8@2x.jpg?20210502"
                  data-desktop="https://www.balmuda.com/jp/pure/img/index/gallery/8.jpg?20210502"
                  data-retina="https://www.balmuda.com/jp/pure/img/index/gallery/8@2x.jpg?20210502"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/pure/img/index/gallery/8@2x.jpg?20210502"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://www.balmuda.com/jp/pure/img/index/gallery/9@2x.jpg?20210502"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/pure/img/index/gallery/9@2x.jpg?20210502"
                  data-desktop="https://www.balmuda.com/jp/pure/img/index/gallery/9.jpg?20210502"
                  data-retina="https://www.balmuda.com/jp/pure/img/index/gallery/9@2x.jpg?20210502"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/pure/img/index/gallery/9@2x.jpg?20210502"
                />
              </a>
            </figure>
          </div>
        </div>
      </div>
      <div className="pswp" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="pswp__bg"></div>

        <div className="pswp__scroll-wrap">
          <div className="pswp__container">
            <div className="pswp__item"></div>
            <div className="pswp__item"></div>
            <div className="pswp__item"></div>
          </div>

          <div className="pswp__ui pswp__ui--hidden">
            <div className="pswp__top-bar">
              <div className="pswp__counter"></div>

              <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>

              <button className="pswp__button pswp__button--share" title="Share"></button>

              <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

              <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

              <div className="pswp__preloader">
                <div className="pswp__preloader__icn">
                  <div className="pswp__preloader__cut">
                    <div className="pswp__preloader__donut"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div className="pswp__share-tooltip"></div>
            </div>

            <button
              className="pswp__button pswp__button--arrow--left"
              title="Previous (arrow left)"></button>
            <button
              className="pswp__button pswp__button--arrow--right"
              title="Next (arrow right)"></button>
            <div className="pswp__caption">
              <div className="pswp__caption__center"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
