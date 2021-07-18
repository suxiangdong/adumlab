import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'

export default function ProductDetail() {
	const [playingV5, setPlayingV5] = useState(false)
	const [playingV8, setPlayingV8] = useState(false)
  const handlePlayV5 = () => {
    setPlayingV5(true)
    const video = document.getElementById('v5') as HTMLVideoElement
    video.play()
  }

  const handlePauseV5 = () => {
    setPlayingV5(false)
    const video = document.getElementById('v5') as HTMLVideoElement
    video.pause()
  }

	const handlePlayV8 = () => {
    setPlayingV8(true)
    const video = document.getElementById('v8') as HTMLVideoElement
    video.play()
  }

  const handlePauseV8 = () => {
    setPlayingV8(false)
    const video = document.getElementById('v8') as HTMLVideoElement
    video.pause()
  }

  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/greenfan/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/greenfan/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <a href="/greenfan/" className="pagemap__content--logo">
            <img
              className="w-full"
              src="/_theme/img/svg/the-greenfan.000.min.svgz"
              alt="The GreenFan"
            />
          </a>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/greenfan/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--feature __current">
              <Link href="/greenfan/feature">先进性</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design">
              <Link href="/greenfan/design">使用方法</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story">
              <Link href="/greenfan/story">故事</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/greenfan/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=EGF-1700"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="section section--feature section--00">
        <div className="__image"></div>
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title __wb">
              再現するのは
              <br />
              自然界の風
            </h2>
            <p>
              自然界の風と同じ、広くゆっくり移動する空気の流れをつくり出すグリーンファン。夏の午後を吹き抜ける、あの時の風を部屋の中に再現します。
            </p>
          </div>
        </div>
      </div>

      <div className="section_wrap">
        <div className="section section--feature section--01 scrollLoader lazyload loaded">
          <div className="__image __is_mobile"></div>
          <div className="viewport scrollLoader fadeInUp loaded">
            <div className="__content">
              <h2 className="section__title">まったく新しい二重構造の羽根</h2>
              <p>
                扇風機から自然界の風を送り出すことはできないだろうか。このアイディアを実現したのが、特徴的な二重構造の羽根でした。独自の羽根によって生まれた風は肌を冷やし過ぎず、いつまでも当たっていたくなるので、夏のお昼寝にもぴったりです。
              </p>
              <span className="video_play __is_desktop __fff" data-video-target="v5" onClick={handlePlayV5}>
                動画を再生
              </span>
            </div>
          </div>
        </div>
        <div className={`section_overlay section_overlay--v5 ${playingV5 ? 'visible': ''}`} id="overlay--v5">
          <video controls={true} width="100%" height="100%" id="v5" onEnded={handlePauseV5}>
            <source src="//s3.balmuda.com/www/jp/greenfan/movie/v5.mp4" type="video/mp4" />
            <source src="//s3.balmuda.com/www/jp/greenfan/movie/v5.webm" type="video/webm" />
          </video>
          <div className="video_stop __is_desktop" data-video-target="v5" onClick={handlePauseV5}></div>
        </div>
      </div>

      <div className="section_wrap" id="spread">
        <div className="section section--feature section--02 scrollLoader lazyload loaded">
          <div className="__image __is_mobile"></div>
          <div className="viewport scrollLoader fadeInUp loaded">
            <div className="__content">
              <h2 className="section__title">大きく広がる風</h2>
              <p>
                大きく広がりゆっくりと進む風が特徴のグリーンファン。一般的な扇風機に比べ、約4倍に広がる風はまさに自然界の風のようにやさしく包みこむ気持ちよさです。
              </p>
              <span className="video_play __is_desktop __fff" data-video-target="v8" onClick={handlePlayV8}>
                動画を再生
              </span>
            </div>
          </div>
        </div>
        <div className={`section_overlay section_overlay--v6 ${playingV8 ? 'visible': ''}`} id="overlay--v8">
          <video controls={true} width="100%" height="100%" id="v8" onEnded={handlePauseV8}>
            <source src="//s3.balmuda.com/www/jp/greenfan/movie/v8.mp4" type="video/mp4" />
            <source src="//s3.balmuda.com/www/jp/greenfan/movie/v8.webm" type="video/webm" />
          </video>
          <div className="video_stop __is_desktop __fff" data-video-target="v8" onClick={handlePauseV8}></div>
        </div>
      </div>

      <div className="section section--feature section--03 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">最小のエネルギー</h2>
            <p>
              送風効率のよい独自の羽根とDCブラシレスモーター、専用の低電力回路が先進の省エネルギー性能を実現しました。最小消費電力は1.5W、ひと夏つかっても電気代はわずか29円（*1）です。
            </p>
            <p className="note">
              * 最弱運転で1日8時間、90日使用した場合。電気料金は1kWhあたり27円で計算。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--feature section--04 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">远达15米的送风距离届く豊かな風</h2>
            <p>
              広く、大きな風を生み出すグリーンファンの風は远达15米的送风距离風を届けることができます。大量の空気を動かすことができるので、冬場は空气循环机として利用でき、一年中活躍します。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
