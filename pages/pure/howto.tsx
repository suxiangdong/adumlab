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
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=A01A"
              className="btn btn--pagemap">
              購入
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
            data-mobile="//www.balmuda.com/jp/pure/img/howto/movie/howto_head_mobile.jpg"
            data-desktop="//www.balmuda.com/jp/pure/img/howto/movie/howto_head_desktop.jpg"
            data-retina="//www.balmuda.com/jp/pure/img/howto/movie/howto_head_desktop@2x.jpg"
            className="__image adaptiveimage"
            src="//www.balmuda.com/jp/pure/img/howto/movie/howto_head_desktop@2x.jpg"
            alt=""
          />
        </div>

        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">使用方法</h2>
            <p>
              通常時は、24時間使い続けることをおすすめします。
              <br />
              オートモードで使用すれば、内蔵のセンサーが部屋の空気の状態を検知し、最適なモードで空気を清浄。
              <br />
              いつでも快適な状態に保ちます。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--howto section--01">
        <div className="viewport">
          <h2 className="section__title __wb">
            <span className="subtitle">効果的な使用方法</span>
          </h2>

          <div className="__column __01 scrollLoader fadeInUp loaded">
            <div className="column_index">
              <img
                data-mobile="//www.balmuda.com/jp/pure/img/howto/mobile/howto-img1.jpg"
                data-desktop="//www.balmuda.com/jp/pure/img/howto/desktop/howto-img1.jpg"
                data-retina="//www.balmuda.com/jp/pure/img/howto/desktop/howto-img1@2x.jpg"
                className="adaptiveimage"
                alt=""
                src="//www.balmuda.com/jp/pure/img/howto/desktop/howto-img1@2x.jpg"
              />
            </div>

            <div className="__content">
              <div className="__wrap">
                <h3 className="__title">
                  掃除中の運転で
                  <br className="sp" />
                  もっときれいに
                </h3>
                <p>
                  効果的に掃除をするなら、掃除機とジェットクリーニングモードの併用がおすすめです。掃除機を併用すれば舞い上がった微細なホコリや浮遊物質を吸引できるので、より効果的に部屋の空気を清浄することができます。
                </p>
              </div>
            </div>
          </div>

          <div className="__column __02 scrollLoader fadeInUp loaded" id="bluelight">
            <div className="column_index">
              <img
                data-mobile="//www.balmuda.com/jp/pure/img/howto/mobile/howto-img2.jpg"
                data-desktop="//www.balmuda.com/jp/pure/img/howto/desktop/howto-img2.jpg"
                data-retina="//www.balmuda.com/jp/pure/img/howto/desktop/howto-img2@2x.jpg"
                className="adaptiveimage"
                alt=""
                src="//www.balmuda.com/jp/pure/img/howto/desktop/howto-img2@2x.jpg"
              />
            </div>

            <div className="__content">
              <div className="__wrap">
                <h3 className="__title">すばやくニオイを脱臭</h3>
                <p>
                  調理後、食事後などの部屋にこもったニオイを消したいとき。
                  <br />
                  ジェットクリーニングモードは部屋の空気を強力に引き寄せ、活性炭フィルターを通すので、気になるニオイはすばやく除去されます。
                </p>
              </div>
            </div>
          </div>

          <div className="__column __03 scrollLoader fadeInUp loaded">
            <div className="column_index">
              <img
                data-mobile="//www.balmuda.com/jp/pure/img/howto/mobile/howto-img3.jpg"
                data-desktop="//www.balmuda.com/jp/pure/img/howto/desktop/howto-img3.jpg"
                data-retina="//www.balmuda.com/jp/pure/img/howto/desktop/howto-img3@2x.jpg"
                className="adaptiveimage"
                alt=""
                src="//www.balmuda.com/jp/pure/img/howto/desktop/howto-img3@2x.jpg"
              />
            </div>

            <div className="__content">
              <div className="__wrap">
                <h3 className="__title">
                  玄関で花粉の侵入を
                  <br className="sp" />
                  防ぐ
                </h3>
                <p>
                  花粉は屋外で衣服に付着し、帰宅後に部屋の中に侵入します。花粉の季節は、玄関での設置が効果的。ジェットクリーニングモードを使えば、すばやく花粉を除去し、室内への侵入を防ぐことができます。帰宅後すぐに玄関先で衣服をはたいて花粉が床に落下する前に吸引すると、より効果的です。
                </p>
                <figure>
                  <img
                    data-mobile="//www.balmuda.com/jp/pure/img/howto/mobile/section--03--img--01.jpg"
                    data-desktop="//www.balmuda.com/jp/pure/img/howto/desktop/section--03--img--01.jpg"
                    data-retina="//www.balmuda.com/jp/pure/img/howto/desktop/section--03--img--01@2x.jpg"
                    className="adaptiveimage"
                    alt=""
                    src="//www.balmuda.com/jp/pure/img/howto/desktop/section--03--img--01@2x.jpg"
                  />
                </figure>
              </div>
            </div>
          </div>

          <div className="__column __04 scrollLoader fadeInUp loaded">
            <div className="column_index">
              <img
                data-mobile="//www.balmuda.com/jp/pure/img/howto/mobile/howto-img4.jpg"
                data-desktop="//www.balmuda.com/jp/pure/img/howto/desktop/howto-img4.jpg"
                data-retina="//www.balmuda.com/jp/pure/img/howto/desktop/howto-img4@2x.jpg"
                className="adaptiveimage"
                alt=""
                src="//www.balmuda.com/jp/pure/img/howto/desktop/howto-img4@2x.jpg"
              />
            </div>

            <div className="__content">
              <div className="__wrap">
                <h3 className="__title">
                  エアコンとの併用で
                  <br className="sp" />
                  快適な室温に
                </h3>
                <p>
                  BALMUDA
                  ThePureは大風量で部屋中の空気を循環させるので、冷暖房使用時にできる不快な温度差を解消することができます。また、冷暖房効率をあげられるので省エネにもなります。
                </p>
                <figure>
                  <img
                    data-mobile="//www.balmuda.com/jp/pure/img/howto/mobile/section--04--img--01.jpg?20190524"
                    data-desktop="//www.balmuda.com/jp/pure/img/howto/desktop/section--04--img--01.jpg?20190524"
                    data-retina="//www.balmuda.com/jp/pure/img/howto/desktop/section--04--img--01@2x.jpg?20190524"
                    className="adaptiveimage"
                    alt="エアコンとの併用で快適な室温に"
                    src="//www.balmuda.com/jp/pure/img/howto/desktop/section--04--img--01@2x.jpg?20190524"
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
