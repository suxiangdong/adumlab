import { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import ReactSlick from 'react-slick'
import Layout from '../../layouts/default'
import API from '../../effects/api'

export async function getServerSideProps() {
  try {
    const [banners] = await Promise.all([API.getBannersByCategory(7)])
    return { props: { banners } }
  } catch (error) {
    return { props: { banners: {} } }
  }
}

export default function ProductDetail({ banners }) {
  if (!banners || !Array.isArray(banners.data) || banners.data.length === 0) {
    banners.data = [5, 0, 'v', 1, 2, 3, 4].map((i) => ({
      id: i,
      type: i === 'v' ? 'video' : 'image',
      image_url: `https://www.balmuda.com/jp/lantern/img/index/desktop/billboard--0${i}@2x.jpg?20210425`
    }))
  }

  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    setPlaying(true)
    const video = document.getElementById('sec40_desktop') as HTMLVideoElement
    video.style.opacity = '1'
    video.play()
  }

  const handleEnded = () => {
    setPlaying(false)
    const video = document.getElementById('sec40_desktop') as HTMLVideoElement
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
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/lantern/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/lantern/style/desktop.css?20210701173839"></link>
        <link rel="stylesheet" href="https://photoswipe.com/dist/photoswipe.css?v=4.1.3-1.0.4" />
        <link
          rel="stylesheet"
          href="https://photoswipe.com/dist/default-skin/default-skin.css?v=4.1.3-1.0.4"
        />
        <script src="https://www.balmuda.com/_theme/vendor/photoswipe/js/photoswipe.min.js"></script>
        <script src="https://www.balmuda.com/_theme/vendor/photoswipe/js/photoswipe-init-custom-opacity.js"></script>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <Link href="/lantern/">
            <a className="pagemap__content--logo">
              <img src="/_theme/img/svg/balmuda-the-lantern.min.svgz" alt="BALMUDA The Lantern" />
            </a>
          </Link>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index __current">
              <Link href="/lantern/">??????</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story">
              <Link href="/lantern/story">??????</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/lantern/spec">??????</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="/support"
              className="btn btn--pagemap">
              ??????
            </a>
          </div>
        </div>
      </div>
      <div className="billboard__wrapper">
        <ReactSlick
          dots
          lazyLoad
          className="billboard"
          style={{ opacity: 1, visibility: 'visible' }}>
          {banners.data.map((item) =>
            item.type === 'video' ? (
              <video key={item.id} muted autoPlay playsInline>
                <source src="//s3.balmuda.com/www/jp/lantern/movie/slide_video_desktop.mp4?20210425" />
              </video>
            ) : (
              <img key={item.id} className="w-full" src={item.image_url} />
            )
          )}
        </ReactSlick>
        <div
          className={`__is_desktop section_overlay ${playing ? 'visible' : ''}`}
          id="overlay--sec40_desktop">
          <video
            width="100%"
            height="100%"
            id="sec40_desktop"
            preload="none"
            data-log="lantern_index_sec40_desktop"
            onEnded={handleEnded}>
            <source
              src="//s3.balmuda.com/www/jp/lantern/movie/trailer_low.mp4?20210425"
              type="video/mp4"
            />
          </video>
          <div className="video_stop" data-video-target="sec40_desktop" onClick={handleEnded}></div>
        </div>
        <div
          className="__is_desktop video_play"
          data-video-target="sec40_desktop"
          onClick={handlePlay}>
          <span></span>
        </div>
      </div>

      <div className="section section--index section--00 scrollLoader lazyload">
        <div className="__mainimage">
          <div className="__inner">
            <img
              data-mobile="https://www.balmuda.com/jp/lantern/img/index/mobile/main.jpg?20210425"
              data-desktop="https://www.balmuda.com/jp/lantern/img/index/desktop/main.jpg?20210425"
              data-retina="https://www.balmuda.com/jp/lantern/img/index/desktop/main@2x.jpg?20210425"
              className="__image adaptiveimage"
              src="https://www.balmuda.com/jp/lantern/img/index/desktop/main@2x.jpg?20210425"
              alt=""
            />
            <img
              src="https://www.balmuda.com/jp/lantern/img/index/svg/main_text.svg?20210425"
              className="__image adaptiveimage_copy"
              alt="??????????????????????????????"
            />
          </div>
        </div>
        <div className="viewport">
          <h2 className="page__title __wb">
            <span>???????????????LED???</span>
          </h2>
          <span className="label__block">?????????LED???</span>
          <p className="overview_text">
            ?????????????????????????????????????????????????????????????????????????????????
            <br />
            BALMUDA The Lantern?????????????????????????????????????????????????????????LED??????
            <br />
            ????????????????????????????????????????????????????????????????????????
          </p>
          <div className="the-price">
            <p className="price price--excl_tax" id="price2">
              15,180
            </p>
            <p className="colores">
              ??????/??????/??????/
              <br />
              ?????????/?????????
            </p>
          </div>

          <div className="__trailer __is_mobile">
            <video
              width="100%"
              height="100%"
              id="sec40_mobile"
              poster="https://www.balmuda.com/jp/lantern/img/index/mobile/trailer_low.jpg"
              preload="none"
              controls
              data-log="lantern_index_sec40_mobile">
              <source
                src="//s3.balmuda.com/www/jp/lantern/movie/trailer_low_mobile.mp4?20210425"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <Link href="/lantern/design#dimming">
        <a>
          <div className="section section--index section--01 scrollLoader lazyload">
            <div className="viewport scrollLoader fadeInUp lazyload">
              <div className="__content">
                <h2 className="section__title">
                  ????????????
                  <br />
                  ?????????
                </h2>
                <p className="section__desc">
                  BALMUDA The
                  Lantern??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
      <Link href="/lantern/design#colors">
        <a>
          <div className="section section--index section--02 scrollLoader lazyload">
            <div className="viewport scrollLoader fadeInUp lazyload">
              <h2 className="section__title">
                ??????
                <br />
                ????????????
              </h2>
            </div>
          </div>
        </a>
      </Link>
      <Link href="/lantern/story">
        <a>
          <div className="section section--index section--03 scrollLoader lazyload">
            <div className="viewport scrollLoader fadeInUp lazyload">
              <div className="__content">
                <h2 className="section__title">??????????????????</h2>
                <p className="section__desc">
                  ???????????????????????????????????????????????????????????????????????????????????????????????????????????????BALMUDA
                  The Lantern??????????????????
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>

      <div className="gallery scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="gallery__h">??????</h2>
          </div>

          <div className="gallery__content" data-pswp-uid="1">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <figure key={`gallery__content-${i}`}>
                <a
                  href={`https://www.balmuda.com/jp/lantern/img/index/desktop/section--05-0${i}@2x.jpg?20210425`}
                  data-size="800x800">
                  <img
                    className="adaptiveimage w-72 h-72"
                    src={`https://www.balmuda.com/jp/lantern/img/index/desktop/section--05-0${i}@2x.jpg?20210425`}
                  />
                </a>
              </figure>
            ))}
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
