import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'

export default function ProductDetail() {
  const [playing, setPlaying] = useState(false)
  const handlePlay = () => {
    setPlaying(true)
    const video = document.getElementById('v1b') as HTMLVideoElement
    video.play()
  }

  const handlePause = () => {
    setPlaying(false)
    const video = document.getElementById('v1b') as HTMLVideoElement
    video.pause()
  }
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/toaster/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/toaster/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <a href="/toaster/" className="pagemap__content--logo">
            <img
              className="w-full"
              src="/_theme/img/svg/balmuda-the-toaster.min.svgz"
              alt="BALMUDA The Toaster"
            />
          </a>
          <ul className="pagemap__main" id="greedynav-links">
            <li className={`pagemap__content__item `}>
              <Link href="/toaster/index">概要</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/taste">特别的美味</Link>
            </li>
            <li className={`pagemap__content__item __current`}>
              <Link href="/toaster/technology">科学与设计</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/howto">使用方法</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/story">故事</Link>
            </li>
            <li className={`pagemap__content__item `}>
              <Link href="/toaster/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__dropdown hidden" id="greedynav--btn">
            <span className="pagemap__dropdown__btn"></span>
            <ul className="pagemap__dropdown__content"></ul>
          </div>
          <div className="pagemap__btns">
            <a
              href="//store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=K05A"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="section section--technology section--00">
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">科学与设计</h2>
            <p>
              表面是烤得焦黄的金黄色，里面含有大量水分，热气腾腾的令人感动的吐司。BALMUA The
              Toaster以科学的眼光彻底追求吐司，通过独特的蒸汽科技和细致的温度控制，任何人都能简单地做出令人惊讶的美味吐司。
            </p>
          </div>

          <div className="__fig">
            <img
              data-mobile="https://www.balmuda.com/jp/toaster/img/technology/mobile/the-toast.jpg?20200915"
              data-desktop="https://www.balmuda.com/jp/toaster/img/technology/desktop/the-toast.jpg?20200915"
              data-retina="https://www.balmuda.com/jp/toaster/img/technology/desktop/the-toast@2x.jpg?20200915"
              className="__toast adaptiveimage"
              src="https://www.balmuda.com/jp/toaster/img/technology/desktop/the-toast@2x.jpg?20200915"
            />
          </div>
        </div>
      </div>

      <div className="section_wrap">
        <div className="section section--technology section--01 scrollLoader lazyload loaded">
          <img
            src="https://www.balmuda.com/jp/toaster/img/technology/mobile/section--01.jpg"
            className="__image __is_mobile"
          />
          <div className="viewport scrollLoader fadeInUp loaded">
            <div className="__content">
              <h2 className="section__title __wb">
                <span>封闭水分和香味的蒸汽科技</span>
                <span>蒸汽科技</span>
              </h2>
              <p>
                用BALMUDA The
                Toaster烹饪时，请在供水口放入5cc的水。开始运转后，冰箱里充满了蒸汽，面包的表面覆盖着一层薄薄的水分膜。由于水分的加热速度比空气快得多，所以只有面包的表面处于轻微的烘烤状态，面包中的水分和黄油等油脂成分以及香味都被牢牢地锁在里面，在真正的加热器控制下进行烤制。
              </p>
              <span
                className="video_play __is_desktop"
                data-video-target="v1b"
                onClick={handlePlay}>
                查看视频
              </span>
            </div>
          </div>
        </div>
        <div
          className={`section_overlay section_overlay--v1b ${playing ? 'visible' : ''}`}
          id="overlay--v1b">
          <video
            controls={true}
            playsInline={true}
            poster="./img/technology/mobile/v1b-thumb.jpg"
            width="100%"
            height="100%"
            id="v1b">
            <source src="//s3.balmuda.com/www/jp/toaster/movie/v1b.mp4" type="video/mp4" />
          </video>
          <div
            className="video_stop __is_desktop"
            data-video-target="v1b"
            onClick={handlePause}></div>
        </div>
      </div>

      <div
        className="section section--technology section--02 scrollLoader lazyload loaded"
        id="temperature-control">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <div className="head">
              <div className="head__info">
                <h2 className="section__title __wb">
                  <span>以每秒为单位</span>
                  <span>细致的温度控制</span>
                </h2>
                <p>
                  BALMUDA The
                  Toaster细致地控制3个温度带。面包的柔软度和风味得以复苏(淀粉的α化)的温度是60度左右，表面开始变成黄棕色的温度是160度左右，还有开始焦化(炭化)的温度是220度左右。另外，根据面包的种类不同，考虑到不同的口感和香味的平衡，每个模式都设定了上面和下面的加热器的强度。实现感动的烤好。
                </p>
              </div>
              <div className="head__img">
                <img
                  data-mobile="https://www.balmuda.com/jp/toaster/img/technology/mobile/section--02.png?20200915"
                  data-desktop="https://www.balmuda.com/jp/toaster/img/technology/desktop/section--02.png?20200915"
                  data-retina="https://www.balmuda.com/jp/toaster/img/technology/desktop/section--02@2x.png?20200915"
                  className="__image adaptiveimage"
                  src="https://www.balmuda.com/jp/toaster/img/technology/desktop/section--02@2x.png?20200915"
                />
              </div>
            </div>
            <div className="mode">
              <h3 className="mode__title">
                每个模式
                <br className="sp" />
                最佳的烤法
              </h3>
              <ul className="mode__list">
                <li className="mode__list_item">
                  <p className="mode__list_title">烤面包模式</p>
                  <p className="mode__list_point">烤制的时候要加强上面的加热器</p>
                  <img
                    data-mobile="https://www.balmuda.com/jp/toaster/img/technology/mobile/mode--01.png?20200915"
                    data-desktop="https://www.balmuda.com/jp/toaster/img/technology/desktop/mode--01.png?20200915"
                    data-retina="https://www.balmuda.com/jp/toaster/img/technology/desktop/mode--01@2x.png?20200915"
                    className="__image adaptiveimage"
                    src="https://www.balmuda.com/jp/toaster/img/technology/desktop/mode--01@2x.png?20200915"
                  />
                </li>
                <li className="mode__list_item">
                  <p className="mode__list_title">奶酪烤面包模式</p>
                  <p className="mode__list_point">从开始烧的时候开始加大上面的加热器</p>
                  <img
                    data-mobile="https://www.balmuda.com/jp/toaster/img/technology/mobile/mode--02.png?20200915"
                    data-desktop="https://www.balmuda.com/jp/toaster/img/technology/desktop/mode--02.png?20200915"
                    data-retina="https://www.balmuda.com/jp/toaster/img/technology/desktop/mode--02@2x.png?20200915"
                    className="__image adaptiveimage"
                    src="https://www.balmuda.com/jp/toaster/img/technology/desktop/mode--02@2x.png?20200915"
                  />
                </li>
                <li className="mode__list_item">
                  <p className="mode__list_title">法国模式</p>
                  <p className="mode__list_point">
                    上下的强度不变
                    <br className="sp" />
                    用一定的温度烤制
                  </p>
                  <img
                    data-mobile="https://www.balmuda.com/jp/toaster/img/technology/mobile/mode--03.png?20200915"
                    data-desktop="https://www.balmuda.com/jp/toaster/img/technology/desktop/mode--03.png?20200915"
                    data-retina="https://www.balmuda.com/jp/toaster/img/technology/desktop/mode--03@2x.png?20200915"
                    className="__image adaptiveimage"
                    src="https://www.balmuda.com/jp/toaster/img/technology/desktop/mode--03@2x.png?20200915"
                  />
                </li>
                <li className="mode__list_item">
                  <p className="mode__list_title">羊角面包模式</p>
                  <p className="mode__list_point">
                    在保持高温度的同时，
                    <br className="sp" />
                    表面很脆弱
                  </p>
                  <img
                    data-mobile="https://www.balmuda.com/jp/toaster/img/technology/mobile/mode--04.png?20200915"
                    data-desktop="https://www.balmuda.com/jp/toaster/img/technology/desktop/mode--04.png?20200915"
                    data-retina="https://www.balmuda.com/jp/toaster/img/technology/desktop/mode--04@2x.png?20200915"
                    className="__image adaptiveimage"
                    src="https://www.balmuda.com/jp/toaster/img/technology/desktop/mode--04@2x.png?20200915"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--technology section--03 scrollLoader lazyload loaded">
        <img
          src="https://www.balmuda.com/jp/toaster/img/technology/mobile/section--03.jpg?20200915"
          className="__image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title __wb">
              <span>四种模式和经典模式</span>
            </h2>
            <p>
              在BALMUDA The
              Toaster中，除了适合面包种类的4种烤法之外，还准备了不使用蒸汽，在一定温度下烤制的经典烤法。不需要预热，也可以制作年糕、焗饭等烤面包机，还可以制作简单的点心。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
