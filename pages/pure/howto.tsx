import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'
import { useState } from 'react'

export default function ProductDetail() {
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

  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/pure/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/pure/style/desktop.css?20210701173839"></link>
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
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/pure/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology">
              <Link href="/pure/technology">科技</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design ">
              <Link href="/pure/design">设计</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--howto __current">
              <Link href="/pure/howto">使用方法</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/pure/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a href="/support?PRODUCT_SERIES=A01A" className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>
      <div className="section section--howto section--00">
        <div className="billboard__wrapper">
          <div className="mov_mobile">
            <div className="section_overlay section_overlay--vmb visible" id="overlay--vmb">
              <video className="vmb invisible" width="100%" muted autoPlay playsInline>
                <source
                  src="//s3.balmuda.com/www/jp/pure/movie/howto_mobile.mp4"
                  type="video/mp4"
                />
                <source
                  src="//s3.balmuda.com/www/jp/pure/movie/howto_mobile.webm"
                  type="video/webm"
                />
              </video>
              <div className="video_stop_mb invisible" data-video-target="vmb"></div>
              <div className="video_play_mb visible" data-video-target="vmb">
                <span></span>
              </div>
            </div>
          </div>
          <div className="mov_desktop">
            <div className="section_overlay section_overlay--vdk visible">
              <video
                id="overlay--vdk"
                className={`vdk ${playing ? 'visible' : 'invisible'}`}
                width="100%"
                muted
                autoPlay
                playsInline
                onEnded={handleEnded}>
                <source src="//s3.balmuda.com/www/jp/pure/movie/howto.webm" type="video/webm" />
                <source src="//s3.balmuda.com/www/jp/pure/movie/howto.mp4" type="video/mp4" />
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

          <img
            data-mobile="https://www.balmuda.com/jp/pure/img/howto/movie/howto_head_mobile.jpg"
            data-desktop="https://www.balmuda.com/jp/pure/img/howto/movie/howto_head_desktop.jpg"
            data-retina="https://www.balmuda.com/jp/pure/img/howto/movie/howto_head_desktop@2x.jpg"
            className="__image adaptiveimage"
            src="https://www.balmuda.com/jp/pure/img/howto/movie/howto_head_desktop@2x.jpg"
            alt=""
          />
        </div>

        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">使用方法</h2>
            <p>
              一般推荐24小时持续使用，使用自动模式运转时，
              <br />
              内建感应器会自动感应 室内的空气状态，
              <br />
              以适当的模式净化空气 随时保持舒适的生活空间
            </p>
          </div>
        </div>
      </div>

      <div className="section section--howto section--01">
        <div className="viewport">
          <h2 className="section__title __wb">
            <span className="subtitle">有效使用方法</span>
          </h2>

          <div className="__column __01 scrollLoader fadeInUp lazyload">
            <div className="column_index">
              <img
                data-mobile="https://www.balmuda.com/jp/pure/img/howto/mobile/howto-img1.jpg"
                data-desktop="https://www.balmuda.com/jp/pure/img/howto/desktop/howto-img1.jpg"
                data-retina="https://www.balmuda.com/jp/pure/img/howto/desktop/howto-img1@2x.jpg"
                className="adaptiveimage"
                alt=""
                src="https://www.balmuda.com/jp/pure/img/howto/desktop/howto-img1@2x.jpg"
              />
            </div>

            <div className="__content">
              <div className="__wrap">
                <h3 className="__title">打扫中运作， 加倍干净</h3>
                <p>
                  在打扫时，建议一并使用吸尘器和喷射清洁模式。若一起使用吸尘器，因为可吸引空气中飞舞粉尘和悬浮微粒，达到更有效的净化室内空气。{' '}
                </p>
              </div>
            </div>
          </div>

          <div className="__column __02 scrollLoader fadeInUp lazyload" id="bluelight">
            <div className="column_index">
              <img
                data-mobile="https://www.balmuda.com/jp/pure/img/howto/mobile/howto-img2.jpg"
                data-desktop="https://www.balmuda.com/jp/pure/img/howto/desktop/howto-img2.jpg"
                data-retina="https://www.balmuda.com/jp/pure/img/howto/desktop/howto-img2@2x.jpg"
                className="adaptiveimage"
                alt=""
                src="https://www.balmuda.com/jp/pure/img/howto/desktop/howto-img2@2x.jpg"
              />
            </div>

            <div className="__content">
              <div className="__wrap">
                <h3 className="__title">极速除臭</h3>
                <p>
                  想要消除料理后、吃饭后室内弥漫的油烟饭菜异味时，喷射清洁模式可强力吸引室内空气，透过活性炭滤网快速地去除在意的异味。
                </p>
              </div>
            </div>
          </div>

          <div className="__column __03 scrollLoader fadeInUp lazyload">
            <div className="column_index">
              <img
                data-mobile="https://www.balmuda.com/jp/pure/img/howto/mobile/howto-img3.jpg"
                data-desktop="https://www.balmuda.com/jp/pure/img/howto/desktop/howto-img3.jpg"
                data-retina="https://www.balmuda.com/jp/pure/img/howto/desktop/howto-img3@2x.jpg"
                className="adaptiveimage"
                alt=""
                src="https://www.balmuda.com/jp/pure/img/howto/desktop/howto-img3@2x.jpg"
              />
            </div>

            <div className="__content">
              <div className="__wrap">
                <h3 className="__title">放置玄关入口处防止花粉入侵</h3>
                <p>
                  花粉是在户外附着于衣服上，回家后入侵到室内。花粉的季节，可放置于玄关入口处是有效果的。使用喷射清净模式时，极速去除花粉，可防止入侵到室内。回家后马上在玄关入口处拍打衣服，于花粉落下到地板前将它吸引，如此一来，将会达到更好的效果。
                </p>
                <figure>
                  <img
                    data-mobile="https://www.balmuda.com/jp/pure/img/howto/mobile/section--03--img--01.jpg"
                    data-desktop="https://www.balmuda.com/jp/pure/img/howto/desktop/section--03--img--01.jpg"
                    data-retina="https://www.balmuda.com/jp/pure/img/howto/desktop/section--03--img--01@2x.jpg"
                    className="adaptiveimage"
                    alt=""
                    src="https://www.balmuda.com/jp/pure/img/howto/desktop/section--03--img--01@2x.jpg"
                  />
                </figure>
              </div>
            </div>
          </div>

          <div className="__column __04 scrollLoader fadeInUp lazyload">
            <div className="column_index">
              <img
                data-mobile="https://www.balmuda.com/jp/pure/img/howto/mobile/howto-img4.jpg"
                data-desktop="https://www.balmuda.com/jp/pure/img/howto/desktop/howto-img4.jpg"
                data-retina="https://www.balmuda.com/jp/pure/img/howto/desktop/howto-img4@2x.jpg"
                className="adaptiveimage"
                alt=""
                src="https://www.balmuda.com/jp/pure/img/howto/desktop/howto-img4@2x.jpg"
              />
            </div>

            <div className="__content">
              <div className="__wrap">
                <h3 className="__title">和冷气一并使用，轻松快速达到舒适的室温</h3>
                <p>
                  因为可利用 BALMUDA The Pure
                  的大风量，加速循环室内的空气，可消除使用冷暖器机时，不舒服的温度差。另外，可提高冷暖器的效率，达到节能的效果。
                </p>
                <figure>
                  <img
                    data-mobile="https://www.balmuda.com/jp/pure/img/howto/mobile/section--04--img--01.jpg?20190524"
                    data-desktop="https://www.balmuda.com/jp/pure/img/howto/desktop/section--04--img--01.jpg?20190524"
                    data-retina="https://www.balmuda.com/jp/pure/img/howto/desktop/section--04--img--01@2x.jpg?20190524"
                    className="adaptiveimage"
                    alt="和冷气一并使用，轻松快速达到舒适的室温"
                    src="https://www.balmuda.com/jp/pure/img/howto/desktop/section--04--img--01@2x.jpg?20190524"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
