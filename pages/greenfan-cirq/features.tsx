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
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="section section--feature section--00">
        <div className="__image"></div>
        <div className="__content">
          <h2 className="page__title __wb">通过空气流动，改变室温</h2>
        </div>
        <img
          data-mobile="https://www.balmuda.com/jp/greenfan-cirq/img/features/desktop/section--00.jpg"
          data-desktop="https://www.balmuda.com/jp/greenfan-cirq/img/features/desktop/section--00.jpg"
          data-retina="https://www.balmuda.com/jp/greenfan-cirq/img/features/desktop/section--00@2x.jpg"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/greenfan-cirq/img/features/desktop/section--00@2x.jpg"
        />
      </div>

      <div className="section_wrap">
        <div className="section section--feature section--01 scrollLoader lazyload">
          <div className="__image __is_mobile"></div>
          <div className="viewport scrollLoader fadeInUp lazyload">
            <div className="__content">
              <h2 className="section__title">消除房间的温差</h2>
              <span className="video_play __is_desktop" data-video-target="v1" onClick={handlePlay}>
                播放视频
              </span>
              <p>
                在没有空气流动的房间中，由于暖空气较轻，所以停留在房间顶部周围，而冷空气较重，故停留在地面。即使提高暖气温度，仍然会感到下身寒冷或脚下发凉。GreenFan
                Cirq有效的中和温度层，并保持一定的均衡。所以要使空调发挥最佳性能，需要形成室内空气流动。
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

      <div className="section section--feature section--02 scrollLoader lazyload">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">三倍速干</h2>
            <img
              data-desktop="https://www.balmuda.com/jp/greenfan-cirq/img/features/desktop/section--02.png"
              data-retina="https://www.balmuda.com/jp/greenfan-cirq/img/features/desktop/section--02.png"
              className="section--02_img adaptiveimage __is_desktop"
              src="https://www.balmuda.com/jp/greenfan-cirq/img/features/desktop/section--02.png"
            />
            <p>
              GreenFan
              Cirq送出的强风可以有效吹干衣物，避免因晾晒时间过长，会产生异味或发霉的现象出现。
            </p>
          </div>
        </div>
      </div>
      <div className="section section--feature section--03 scrollLoader lazyload">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">循环</h2>
            <img
              data-desktop="https://www.balmuda.com/jp/greenfan-cirq/img/features/desktop/section--03.png"
              data-retina="https://www.balmuda.com/jp/greenfan-cirq/img/features/desktop/section--03.png"
              className="section--03_img adaptiveimage __is_desktop"
              src="https://www.balmuda.com/jp/greenfan-cirq/img/features/desktop/section--03.png"
            />
            <p>
              与空调同时使用不仅可以使室温快速均衡，还可以在短时间内将凉风送到附近的房间。夜晚睡觉时，可以让寝室内的空气缓慢循环，使身体倍感舒适。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--feature section--04 scrollLoader lazyload">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">换气</h2>
            <img
              data-desktop="https://www.balmuda.com/jp/greenfan-cirq/img/features/desktop/section--04.png"
              data-retina="https://www.balmuda.com/jp/greenfan-cirq/img/features/desktop/section--04.png"
              className="section--04_img adaptiveimage __is_desktop"
              src="https://www.balmuda.com/jp/greenfan-cirq/img/features/desktop/section--04.png"
            />
            <p>
              可用于外部空气难以进入的地方进行换气。如：湿气滞留的衣柜、抽屉、浴室等湿气较大的地方，能够有效地防止发霉。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
