import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'
import { useState } from 'react'

export default function ProductDetail() {
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    setPlaying(true)
    const video = document.getElementById('__video_content') as HTMLVideoElement
    video.style.opacity = '1'
    video.play()
  }

  const handleEnded = () => {
    setPlaying(false)
    const video = document.getElementById('__video_content') as HTMLVideoElement
    video.style.opacity = '0'
    video.pause()
  }
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/pot/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/pot/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <a href="/pot/" className="pagemap__content--logo">
            <img src="/_theme/img/svg/balmuda-the-pot.min.svgz" alt="BALMUDA The Pot" />
          </a>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/pot/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design __current">
              <Link href="/pot/design">设计</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story">
              <Link href="/pot/story">故事</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/pot/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__dropdown hidden" id="greedynav--btn">
            <span className="pagemap__dropdown__btn"></span>
            <ul className="pagemap__dropdown__content"></ul>
          </div>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=K02A"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="section section--design section--00">
        <img
          src="https://www.balmuda.com/jp/pot/img/design/mobile/section--00.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">
              每天都想用的
              <br />
              电水壶
            </h2>
            <p>
              因为体积小，所以烧水更方便。在不锈钢上涂了漆的美丽的质感和微微发光的灯塔一样的电源灯，1天重复几次的烧水的时间快乐。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--design section--01 scrollLoader lazyload loaded">
        <img
          src="https://www.balmuda.com/jp/pot/img/design/mobile/section--01.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">尺寸适中，使用方便。</h2>
            <p>3杯咖啡，2杯方便面。是和经常使用的量一致的尺寸。容易拿取，快速使用的轻便。</p>
          </div>
        </div>
      </div>

      <div className="section section--design section--05 scrollLoader lazyload loaded">
        <img
          src="https://www.balmuda.com/jp/pot/img/design/mobile/section--05.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">舒服的倒酒感觉</h2>
            <p>
              研究制造的方向盘和喷嘴实现了至今没有的注入心情。方向盘很容易上手，喷嘴很容易断水，被设计成很容易准确地把水倒到目标的地方。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--design section--06 scrollLoader lazyload loaded">
        <img
          src="https://www.balmuda.com/jp/pot/img/design/mobile/section--06.jpg"
          className="__section_image __is_mobile"
        />
        <div className="__is_mobile">
          <div className="__overlay_video">
            <video controls={true} muted={true} width="100%" height="100%" onEnded={handleEnded}>
              <source src="//s3.balmuda.com/www/jp/pot/movie/v2.mp4" type="video/mp4" />
              <source src="//s3.balmuda.com/www/jp/pot/movie/v2.webm" type="video/webm" />
              <source src="//s3.balmuda.com/www/jp/pot/movie/v2.ogv" type="video/ogg" />
            </video>
          </div>
        </div>
        <div className="__is_desktop">
          <div className="__overlay_video">
            <video
              muted={true}
              width="100%"
              height="100%"
              id="__video_content"
              onEnded={handleEnded}>
              <source src="//s3.balmuda.com/www/jp/pot/movie/v1.mp4" type="video/mp4" />
              <source src="//s3.balmuda.com/www/jp/pot/movie/v1.webm" type="video/webm" />
              <source src="//s3.balmuda.com/www/jp/pot/movie/v1.ogv" type="video/ogg" />
            </video>
          </div>
          <span
            className={`__video_play ${playing ? '' : '__visible'}`}
            id="__video_play"
            onClick={handlePlay}>
            ビデオを再生
          </span>
        </div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">缓慢也好，快速也好，自由自在</h2>
            <p>滴滤咖啡要慢，泡面要快。因为可以毫无压力地控制流速，注入热水的时间比现在更快乐。</p>
          </div>
        </div>
      </div>

      <div className="section section--design section--03 scrollLoader lazyload loaded">
        <img
          src="https://www.balmuda.com/jp/pot/img/design/mobile/section--03.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">从哪里都能看清楚的灯</h2>
            <p>
              从各种角度容易看到的电源灯是使用小的霓虹灯管的独特的温柔的灯。就连烧水的那一瞬间也能成为丰富的时间。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--design section--04 scrollLoader lazyload loaded">
        <img
          src="https://www.balmuda.com/jp/pot/img/design/mobile/section--04.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">美好的时光</h2>
            <p>
              悠闲地泡咖啡的奢侈时间，在客人面前泡茶的款待。请在 BALMUDA The Pot 享受美好的时光。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
