import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'

export default function ProductDetail() {
	const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    setPlaying(true)
    const video = document.getElementById('v3') as HTMLVideoElement
    video.style.opacity = '1'
    video.play()
  }

  const handleEnded = () => {
    setPlaying(false)
    const video = document.getElementById('v3') as HTMLVideoElement
    video.style.opacity = '0'
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
            <li className="pagemap__content__item pagemap__content__item--feature ">
              <Link href="/greenfan/feature">先进性</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design __current">
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
              href="/support"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="section section--design section--00">
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title __wb">使用方法</h2>
            <p>
              让我们轻松度过炎热夏天的果岭风扇
              <br />
              具备在生活中的各种场景中活跃的使用方法。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--design section--00a">
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title __wb">
              和空调一起使用
              <br />
              健康凉爽
            </h2>
            <p>
              将 GreenFan Japan 配置在空调的对角线上，循环空调方向下停留的冷星空，整个房间都会变凉。
            </p>
          </div>
          <img
            src="https://www.balmuda.com/jp/greenfan/img/design/svg/section--00a.svgz?20210406"
            className="__title"
            alt="GreenFan Japan 的使用"
          />
        </div>
      </div>

      <div className="section section--design section--01 scrollLoader lazyload">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">便携移动 轻松畅享</h2>
            <p>
              GreenFan
              Japan配合充电池和充电港使用，升级为随处都可以使用的便携式电风扇，充电时仅需放在充电港上即可。由于采用新结构实现了150°超广转角，转动范围约为传统电风扇的2倍。除此以外，头部摆动范围可自由设定。
            </p>
          </div>
        </div>
      </div>
      <div className="section_wrap" id="turn">
        <div className="section section--design section--02 scrollLoader lazyload loaded">
          <div className="__image __is_mobile"></div>
          <div className="viewport scrollLoader fadeInUp loaded">
            <div className="__content">
              <h2 className="section__title">任意转弯</h2>
              <p>
                GreenFan Japan 独有的功能“任意转身”。可以根据用途自由地设定摇头角度。天气热的时候，可以缩小角度集中送风，想让整个房间的空气流通的时候，可以将摇头角度设定得更大，这样就能一直创造出舒适的空间。
              </p>
              <span className="video_play __is_desktop" data-video-target="v3" onClick={handlePlay}>
                播放视频
              </span>
            </div>
          </div>
        </div>
        <div className={`section_overlay section_overlay--v3 ${playing ? 'visible' : ''}`} id="overlay--v3">
          <video controls width="100%" id="v3" onEnded={handleEnded}>
            <source src="//s3.balmuda.com/www/jp/greenfan/movie/v3.mp4" type="video/mp4" />
            <source src="//s3.balmuda.com/www/jp/greenfan/movie/v3.webm" type="video/webm" />
          </video>
          <div className="video_stop __is_desktop" data-video-target="v3" onClick={handleEnded}></div>
        </div>
      </div>
      <div className="section section--design section--03 scrollLoader lazyload" id="quiet">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">不影响睡眠的声音</h2>
            <p>
              实现静音运行的 GreenFan Japan ，风量1的噪音只有13dB，和两只蝴蝶扇动翅膀一样，舒适安静的风适合夏天的卧室
              *注：噪音值由BALMUDA在东京实验室测得声压级数据
              *注：风扇摆头过程中出现的轻微转动声属于正常情况
            </p>
          </div>
        </div>
      </div>

      <div className="section section--design section--04 scrollLoader lazyload">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">洗的衣服能很快风干</h2>
            <p>
              送风距离达到15米的 GreenFan Japan，可以设定摆头角度，在衣服范围内加速空气流动，帮助晾在房间内的衣物加速风干
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
