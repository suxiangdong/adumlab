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
              href="/support?PRODUCT_SERIES=K02A"
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
              小巧的尺寸，让烧水更轻松。金属材质加上优美质感的涂层，忽明忽暗的灯台般的电源灯，一天之中可以重复享受每一次的烧水时间。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--design section--01 scrollLoader lazyload">
        <img
          src="https://www.balmuda.com/jp/pot/img/design/mobile/section--01.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">刚刚好的大小，便于使用的轻便</h2>
            <p>咖啡3杯，杯面2杯，为日常所需所设计的尺寸。便于取用，重量亦得心应手。</p>
          </div>
        </div>
      </div>

      <div className="section section--design section--05 scrollLoader lazyload">
        <img
          src="https://www.balmuda.com/jp/pot/img/design/mobile/section--05.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">随心所欲的倾注水流</h2>
            <p>
              精心研究过的把手和壶嘴，带来前所未有的倾注感受。把手握感服帖，注水口不洒溅，让您轻松又精确的控制水流。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--design section--06 scrollLoader lazyload">
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
            播放视频
          </span>
        </div>
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">无论快慢，随心所欲。</h2>
            <p>
              手冲咖啡时的细缓，泡面时的豪迈。BALMUDA电水壶可以毫无压力的控制流速，让您注水的过程比以往更快乐。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--design section--03 scrollLoader lazyload">
        <img
          src="https://www.balmuda.com/jp/pot/img/design/mobile/section--03.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">各个角度都可以看到的灯</h2>
            <p>
              从各个角度都可以看到的电源灯，使用小型霓虹管，独特的柔和灯光，让水沸腾的瞬间变得更加的享受。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--design section--04 scrollLoader lazyload">
        <img
          src="https://www.balmuda.com/jp/pot/img/design/mobile/section--04.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">美好的一刻</h2>
            <p>
              无论是悠闲地冲泡着咖啡的慢时光，亦或是冲茶待客的招待场合。请尽情享受BALMUDA电水壶带给您的美好一刻。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
