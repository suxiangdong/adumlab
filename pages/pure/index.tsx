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
              href="/support?PRODUCT_SERIES=A01A"
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
          让纯净空气传散到室内的每个角落。

          </h2>
          <span className="label__block">塔式空气净化器</span>
          <p className="overview_text">
            <span>
            直立式BALMUDA空气清净机的独家结构设计，实现直达天花板的大风量。
            </span>
            <span>
            循环室内空气的同时，透过HEPA滤网，可过滤0.3um悬浮微粒效率达99%以上。 亦搭配可吸收相当六座足球场表面积大小*1的活性碳除臭滤网，极速去除恼人的异味。<br />
            BALMUDA The Pure用纯净的好空气，提供舒适空间给每一位用户。<br />
*1 ： 从内含于活性炭除臭滤网里的材料总量进行试
            </span>
          </p>

          {/* <div className="the-price">
            <p className="price price--excl_tax" id="price2">
              57,200
            </p>
            <p className="colores">白色/深灰色</p>
          </div> */}

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
                <h3 className="section__subtitle">净化每分钟5200升*2的空气</h3>
                <p className="section__desc">
                独家的整流翼及扇叶设计，能强力吸引大量空气。 搭载两个滤网，去除对身体有害的物质。                </p>
                <p className="asterisk __ref">*2 : 当喷射清洁模式运行时</p>
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
                <h3 className="section__subtitle">让空气净化的光柱
</h3>
                <p className="section__desc">
                吸气口及空气吸吐流路会发亮的 BALMUDA The Pure ，透过这个光柱，持续净化空气。 主体采极简风格设计，能融入多种风格的室内装潢。
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
                  <span>有效使用方法</span>
                </h3>
                <p className="section__desc">
                为了让用户能更有效使用 BALMUDA The Pure，介绍推荐的使用方法。
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
      {/* <div className="section section--blockquote">
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
      </div> */}

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
