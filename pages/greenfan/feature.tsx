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
              alt="GreenFan Japan"
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
            <a href="/support" className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="section section--feature section--00">
        <div className="__image"></div>
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title __wb">重现自然风</h2>
            <p>
              GreenFan Japan 和自然风相同，可以送出幅度宽广且柔和的风。 重现夏日午后吹拂的徐徐清风。{' '}
            </p>
          </div>
        </div>
      </div>

      <div className="section_wrap">
        <div className="section section--feature section--01 scrollLoader lazyload">
          <div className="__image __is_mobile"></div>
          <div className="viewport scrollLoader fadeInUp lazyload">
            <div className="__content">
              <h2 className="section__title">崭新的双层结构扇叶</h2>
              <p>
                可以从电扇送出自然风吗?
                实现这想法的就是独特的双层结构扇叶。可同时送出快速风和慢速风，再让两种风速相互碰撞消除涡旋，风幅宽广的电扇因应而生。
              </p>
              <span
                className="video_play __is_desktop __fff"
                data-video-target="v5"
                onClick={handlePlayV5}>
                播放视频
              </span>
            </div>
          </div>
        </div>
        <div
          className={`section_overlay section_overlay--v5 ${playingV5 ? 'visible' : ''}`}
          id="overlay--v5">
          <video controls={true} width="100%" height="100%" id="v5" onEnded={handlePauseV5}>
            <source src="//s3.balmuda.com/www/jp/greenfan/movie/v5.mp4" type="video/mp4" />
            <source src="//s3.balmuda.com/www/jp/greenfan/movie/v5.webm" type="video/webm" />
          </video>
          <div
            className="video_stop __is_desktop"
            data-video-target="v5"
            onClick={handlePauseV5}></div>
        </div>
      </div>

      <div className="section_wrap" id="spread">
        <div className="section section--feature section--02 scrollLoader lazyload">
          <div className="__image __is_mobile"></div>
          <div className="viewport scrollLoader fadeInUp lazyload">
            <div className="__content">
              <h2 className="section__title">风幅宽广</h2>
              <p>
                送风幅度宽广且柔和是GreenFan的特色。可以送出和一般电扇相比4倍广的风，就如同被自然风环绕的凉爽舒适。
              </p>
              <span
                className="video_play __is_desktop __fff"
                data-video-target="v8"
                onClick={handlePlayV8}>
                播放视频
              </span>
            </div>
          </div>
        </div>
        <div
          className={`section_overlay section_overlay--v6 ${playingV8 ? 'visible' : ''}`}
          id="overlay--v8">
          <video controls={true} width="100%" height="100%" id="v8" onEnded={handlePauseV8}>
            <source src="//s3.balmuda.com/www/jp/greenfan/movie/v8.mp4" type="video/mp4" />
            <source src="//s3.balmuda.com/www/jp/greenfan/movie/v8.webm" type="video/webm" />
          </video>
          <div
            className="video_stop __is_desktop __fff"
            data-video-target="v8"
            onClick={handlePauseV8}></div>
        </div>
      </div>

      <div className="section section--feature section--03 scrollLoader lazyload">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">低耗能</h2>
            <p>
              独特的高效送风扇叶和DC直流马达，专用的省电电路落实先进的节能性能。最低耗电1.5W，一个夏天的电费仅仅
              90元。
            </p>
            <p className="note">* 在最低运转的状况下，1天8小时，使用90天，电费以每度3.7元计算。</p>
          </div>
        </div>
      </div>

      <div className="section section--feature section--04 scrollLoader lazyload">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">送风距离可达15米的大风量</h2>
            <p>
              送风幅度宽广，且风量大的GreenFan，其送风距离可达15米。
              因为可以使空气大量流动，在冬天也可当作循环机使用，全年都适用。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
