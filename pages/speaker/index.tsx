import { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import ReactSlick from 'react-slick'
import Layout from '../../layouts/default'
import API from '../../effects/api'

export async function getServerSideProps() {
  try {
    const [banners, evaluations] = await Promise.all([
      API.getBannersByCategory(9),
      API.getEvaluationsByCategory(9)
    ])
    return { props: { banners, evaluations } }
  } catch (error) {
    return { props: { banners: {}, evaluations: {} } }
  }
}

export default function ProductDetail({ banners, evaluations }) {
  if (!banners || !Array.isArray(banners.data) || banners.data.length === 0) {
    banners.data = [0, 1, 'v', 2, 3, 4].map((i) => ({
      id: i,
      type: i === 'v' ? 'video' : 'image',
      path: `https://www.balmuda.com/jp/speaker/img/index/desktop/billboard--0${i}@2x.jpg?20210425`
    }))
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
          href="/speaker/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/speaker/style/desktop.css?20210701173839"></link>
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
          <Link href="/speaker/">
            <a className="pagemap__content--logo">
              <img src="/_theme/img/svg/balmuda-the-speaker.svgz" alt="BALMUDA The Speaker" />
            </a>
          </Link>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index __current">
              <Link href="/speaker/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology">
              <Link href="/speaker/technology">科技</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story">
              <Link href="/speaker/story">故事</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--setting">
              <Link href="/speaker/setting">设置</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/speaker/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="/support?PRODUCT_SERIES=M01A"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>
      <div className="billboard__wrapper">
        <ReactSlick dots className="billboard" style={{ opacity: 1, visibility: 'visible' }}>
          {banners.data.map((item) =>
            item.type === 'video' ? (
              <video key={item.id} muted playsInline>
                <source
                  src="//s3.balmuda.com/www/jp/speaker/movie/slide_video_desktop.mp4?20201225"
                  type="video/mp4"
                />
              </video>
            ) : (
              <img key={item.id} className="w-full" src={item.path} />
            )
          )}
        </ReactSlick>
      </div>
      <div className="section section--index section--00 scrollLoader lazyload">
        <div className="__mainimage">
          <img
            data-mobile="https://www.balmuda.com/jp/speaker/img/index/mobile/main.jpg?20201225"
            data-desktop="https://www.balmuda.com/jp/speaker/img/index/desktop/main.jpg?20201225"
            data-retina="https://www.balmuda.com/jp/speaker/img/index/desktop/main@2x.jpg?20201225"
            className="__image adaptiveimage"
            src="https://www.balmuda.com/jp/speaker/img/index/desktop/main@2x.jpg?20201225"
            alt=""
          />
        </div>
        <div className="viewport">
          <h2 className="page__title __wb">
            <span>前所未有的音乐体验</span>
          </h2>
          <span className="label__block">无线扬声器</span>
          <p className="overview_text">
            360°扩散、立体且穿透力强的舒适音效、搭配令节奏感倍增的闪耀，
            <br />
            带来现场舞台表演般的临场感受。
            <br />
            充电式便携式蓝牙<sup>®</sup>·支持AUX输入
            <br />
            以自由的风格享受新的音乐体验。
          </p>
          {/* <div className="the-price">
            <p className="price price--excl_tax" id="price2">
              35,200
            </p>
          </div> */}

          <div className="__trailer __is_mobile">
            <video
              width="100%"
              height="100%"
              id="sec104_mobile"
              poster="https://www.balmuda.com/jp/speaker/img/index/mobile/trailer_low.jpg"
              preload="none"
              controls
              data-log="speaker_index_sec104_mobile">
              <source
                src="//s3.balmuda.com/www/jp/speaker/movie/trailer_low_mobile.mp4?20201225"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <Link href="/speaker/technology">
        <a>
          <div className="section section--index section--01 scrollLoader lazyload">
            <img
              data-mobile="https://www.balmuda.com/jp/speaker/img/index/mobile/section--01.jpg?20201225"
              className="sp section__image adaptiveimage __image"
              alt=""
            />
            <div className="viewport scrollLoader fadeInUp lazyload">
              <div className="__content">
                <h2 className="section__title">立体且鲜明的音效</h2>
                <p className="section__desc">
                  保持乐曲本身平衡的同时、带来立体且轮廓清晰的音效。特别适合突出主唱歌声的音乐，带来犹如在眼前吟唱般的感受。
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>

      <Link href="/speaker/technology#LED">
        <a>
          <div className="section section--index section--02 scrollLoader lazyload">
            <img
              data-mobile="https://www.balmuda.com/jp/speaker/img/index/mobile/section--02.jpg?20201225"
              className="sp section__image adaptiveimage __image"
              alt=""
            />
            <div className="viewport scrollLoader fadeInUp lazyload">
              <div className="__content">
                <h2 className="section__title">彷如在眼前展开的临场感</h2>
                <p className="section__desc">
                  为乐曲的律动增色的，是三体LED灯光模块，追踪音乐的能量，以0.004秒的速度细腻的闪耀。带来犹如现场舞台表演般的内心跃动。
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
      <Link href="/speaker/story">
        <a>
          <div className="section section--index section--03 scrollLoader lazyload">
            <img
              data-mobile="https://www.balmuda.com/jp/speaker/img/index/mobile/section--03.jpg?20201225"
              className="sp section__image adaptiveimage __image"
              alt=""
            />
            <div className="viewport scrollLoader fadeInUp lazyload">
              <div className="__content">
                <h2 className="section__title">开发故事</h2>
                <p className="section__desc">
                  音乐带来的感动，只有临场才能最真实的感受到。改变我这个想法的，是设计师带来的一个奇妙的随身听播放器。BALMUDA
                  The Speaker的故事。
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>

      <div className="section section--index section--04 scrollLoader lazyload">
        <img
          data-mobile="https://www.balmuda.com/jp/speaker/img/index/mobile/section--04.jpg?20201225"
          className="sp section__image adaptiveimage __image"
          alt=""
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">献给每一位聆听者</h2>
            <p className="section__desc">
              来听音乐吧。充电便携，随意摆放。且声音360度环绕扩散，在场的每一个人都可以乐享音乐乐趣。
            </p>
          </div>
        </div>
      </div>
      {/* <div className="section section--index section--blockquote">
        <div className="viewport">
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
      <div className="section section--index section--gallery">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">画廊</h2>
          </div>

          <div className="gallery__content">
            <figure>
              <a
                href="https://www.balmuda.com/jp/speaker/img/index/gallery/1@2x.jpg?20201225"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/speaker/img/index/gallery/1@2x.jpg?20201225"
                  data-desktop="https://www.balmuda.com/jp/speaker/img/index/gallery/1.jpg?20201225"
                  data-retina="https://www.balmuda.com/jp/speaker/img/index/gallery/1@2x.jpg?20201225"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/speaker/img/index/gallery/1@2x.jpg?20201225"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://www.balmuda.com/jp/speaker/img/index/gallery/2@2x.jpg?20201225"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/speaker/img/index/gallery/2@2x.jpg?20201225"
                  data-desktop="https://www.balmuda.com/jp/speaker/img/index/gallery/2.jpg?20201225"
                  data-retina="https://www.balmuda.com/jp/speaker/img/index/gallery/2@2x.jpg?20201225"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/speaker/img/index/gallery/2@2x.jpg?20201225"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://www.balmuda.com/jp/speaker/img/index/gallery/3@2x.jpg?20201225"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/speaker/img/index/gallery/3@2x.jpg?20201225"
                  data-desktop="https://www.balmuda.com/jp/speaker/img/index/gallery/3.jpg?20201225"
                  data-retina="https://www.balmuda.com/jp/speaker/img/index/gallery/3@2x.jpg?20201225"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/speaker/img/index/gallery/3@2x.jpg?20201225"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://www.balmuda.com/jp/speaker/img/index/gallery/4@2x.jpg?20201225"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/speaker/img/index/gallery/4@2x.jpg?20201225"
                  data-desktop="https://www.balmuda.com/jp/speaker/img/index/gallery/4.jpg?20201225"
                  data-retina="https://www.balmuda.com/jp/speaker/img/index/gallery/4@2x.jpg?20201225"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/speaker/img/index/gallery/4@2x.jpg?20201225"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://www.balmuda.com/jp/speaker/img/index/gallery/5@2x.jpg?20201225"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/speaker/img/index/gallery/5@2x.jpg?20201225"
                  data-desktop="https://www.balmuda.com/jp/speaker/img/index/gallery/5.jpg?20201225"
                  data-retina="https://www.balmuda.com/jp/speaker/img/index/gallery/5@2x.jpg?20201225"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/speaker/img/index/gallery/5@2x.jpg?20201225"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://www.balmuda.com/jp/speaker/img/index/gallery/6@2x.jpg?20201225"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/speaker/img/index/gallery/6@2x.jpg?20201225"
                  data-desktop="https://www.balmuda.com/jp/speaker/img/index/gallery/6.jpg?20201225"
                  data-retina="https://www.balmuda.com/jp/speaker/img/index/gallery/6@2x.jpg?20201225"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/speaker/img/index/gallery/6@2x.jpg?20201225"
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
