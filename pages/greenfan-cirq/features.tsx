import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'
import { useState } from 'react'

export default function ProductDetail() {
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    setPlaying(true)
    const video = document.getElementById('v1') as HTMLVideoElement
    video.style.opacity = '1'
    video.play()
  }

  const handleEnded = () => {
    setPlaying(false)
    const video = document.getElementById('v1') as HTMLVideoElement
    video.style.opacity = '0'
		video.pause()
  }
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/greenfan-cirq/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/greenfan-cirq/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <a href="/greenfan-cirq/" className="pagemap__content--logo">
            <img
              className="w-full"
              src="/_theme/img/svg/balmuda-greenfan-cirq.min.svgz"
              alt="GreenFan Cirq"
            />
          </a>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/greenfan-cirq/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--features __current">
              <Link href="/greenfan-cirq/features">改变室温</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology">
              <Link href="/greenfan-cirq/technology">远达15米的送风距离</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design">
              <Link href="/greenfan-cirq/design">设计</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--specs">
              <Link href="/greenfan-cirq/specs">规格</Link>
            </li>
          </ul>

          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=EGF-3300-WK"
              className="btn btn--pagemap">
              購入
            </a>
          </div>
        </div>
      </div>

      <div className="section section--feature section--00">
        <div className="__image"></div>
        <div className="__content">
          <h2 className="page__title __wb">空気を動かすと改变室温</h2>
        </div>
        <img
          data-mobile="//www.balmuda.com/jp/greenfan-cirq/img/features/desktop/section--00.jpg"
          data-desktop="//www.balmuda.com/jp/greenfan-cirq/img/features/desktop/section--00.jpg"
          data-retina="//www.balmuda.com/jp/greenfan-cirq/img/features/desktop/section--00@2x.jpg"
          className="__image adaptiveimage"
          src="//www.balmuda.com/jp/greenfan-cirq/img/features/desktop/section--00@2x.jpg"
        />
      </div>

      <div className="section_wrap">
        <div className="section section--feature section--01 scrollLoader lazyload loaded">
          <div className="__image __is_mobile"></div>
          <div className="viewport scrollLoader fadeInUp loaded">
            <div className="__content">
              <h2 className="section__title">部屋の温度差を解消</h2>
              <span className="video_play __is_desktop" data-video-target="v1" onClick={handlePlay}>
                動画を再生
              </span>
              <p>
                空気の流れが無い部屋の中では、暖かい空気は軽いため天井付近に、冷たい空気は重く床に溜まってしまいます。エアコンを使っていても設定温度より寒く感じたり、足下が冷えたりしてしまうのはこのためです。GreenFan
                Cirqはこの温度層を破壊し不快な温度差を解消します。エアコンの性能を引き出すには風の力が必要です。
              </p>
            </div>
          </div>
        </div>
        <div
          className={`section_overlay section_overlay--v1 ${playing ? 'visible' : ''}`}
          id="overlay--v1">
          <video controls={true} width="100%" height="100%" id="v1" onEnded={handleEnded}>
            <source src="//s3.balmuda.com/www/jp/greenfan-cirq/movie/v1.mp4" type="video/mp4" />
            <source src="//s3.balmuda.com/www/jp/greenfan-cirq/movie/v1.webm" type="video/webm" />
          </video>
          <div
            className="video_stop __is_desktop __fff"
            data-video-target="v1"
            onClick={handleEnded}></div>
        </div>
      </div>

      <div className="section section--feature section--02 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">3倍速乾</h2>
            <img
              data-desktop="//www.balmuda.com/jp/greenfan-cirq/img/features/desktop/section--02.png"
              data-retina="//www.balmuda.com/jp/greenfan-cirq/img/features/desktop/section--02.png"
              className="section--02_img adaptiveimage __is_desktop"
              src="//www.balmuda.com/jp/greenfan-cirq/img/features/desktop/section--02.png"
            />
            <p>
              衣類の乾燥には風が最も効果的。乾燥に時間がかかるとニオイやカビが発生することがあります。GreenFan
              Cirqの送風力で生乾きのニオイやカビの発生を抑えます。
            </p>
          </div>
        </div>
      </div>
      <div className="section section--feature section--03 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">30畳対応</h2>
            <img
              data-desktop="//www.balmuda.com/jp/greenfan-cirq/img/features/desktop/section--03.png"
              data-retina="//www.balmuda.com/jp/greenfan-cirq/img/features/desktop/section--03.png"
              className="section--03_img adaptiveimage __is_desktop"
              src="//www.balmuda.com/jp/greenfan-cirq/img/features/desktop/section--03.png"
            />
            <p>
              エアコンと併用して室温をすばやく均一にするだけではなく、隣りの部屋への送風も短時間で行います。また、就寝時には寝室の空気をゆるやかに循環させ快適に過ごせます。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--feature section--04 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">カビの予防</h2>
            <img
              data-desktop="//www.balmuda.com/jp/greenfan-cirq/img/features/desktop/section--04.png"
              data-retina="//www.balmuda.com/jp/greenfan-cirq/img/features/desktop/section--04.png"
              className="section--04_img adaptiveimage __is_desktop"
              src="//www.balmuda.com/jp/greenfan-cirq/img/features/desktop/section--04.png"
            />
            <p>
              外気の取り入れや、湿気がこもりがちなクローゼット、押し入れの換気に使えます。浴室など水回りの換気は、カビの予防に効果的です。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
