import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'
import { useState } from 'react'

export default function ProductDetail() {
  const [playing, setPlaying] = useState(false)
  const [playing2, setPlaying2] = useState(false)

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

  const handlePlay2 = () => {
    setPlaying2(true)
    const video = document.getElementById('elmov') as HTMLVideoElement
    video.style.opacity = '1'
    video.play()
  }

  const handleEnded2 = () => {
    setPlaying2(false)
    const video = document.getElementById('elmov') as HTMLVideoElement
    video.style.opacity = '0'
    video.pause()
  }

  const handlePlay2Start = () => {
    setPlaying2(true)
    const video = document.getElementById('elmov') as HTMLVideoElement
    video.style.opacity = '1'
    video.playbackRate = 0.9
    video.play()
  }

  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/rain/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/rain/style/desktop.css?20210701173839"></link>
      </Head>

      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <Link href="/rain/">
            <a className="pagemap__content--logo">
              <img src="/_theme/img/svg/balmuda-rain.min.svgz" alt="Rain" />
            </a>
          </Link>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/rain/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--classic __current">
              <Link href="/rain/classic">经典先端</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--humidity">
              <Link href="/rain/humidity">适宜的湿润度</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/rain/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=ERN-1100SD-WK"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="section section--classic section--00">
        <div className="billboard__wrapper">
          <div className="mov_mobile">
            <div className="section_overlay section_overlay--vmb visible" id="overlay--vmb">
              <video className="vmb" width="100%" muted autoPlay playsInline>
                <source
                  src="//s3.balmuda.com/www/jp/rain/movie/classic_head_mobile2.mp4"
                  type="video/mp4"
                />
                <source
                  src="//s3.balmuda.com/www/jp/rain/movie/classic_head_mobile2.webm"
                  type="video/webm"
                />
              </video>
              <div className="video_stop_mb visible" data-video-target="vmb"></div>
              <span className="video_play_mb invisible" data-video-target="vmb"></span>
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
                playsInline>
                <source
                  src="//s3.balmuda.com/www/jp/rain/movie/classic_head_desktop.mp4"
                  type="video/mp4"
                />
                <source
                  src="//s3.balmuda.com/www/jp/rain/movie/classic_head_desktop.webm"
                  type="video/webm"
                />
              </video>
              <div
                className={`video_stop_dk ${playing ? 'visible' : 'invisible'}`}
                data-video-target="vdk"
                onClick={handleEnded}></div>
              <span
                className={`video_play_dk ${playing ? 'invisible' : 'visible'}`}
                data-video-target="vdk"
                onClick={handlePlay}></span>
            </div>
          </div>

          <img
            data-mobile="https://www.balmuda.com/jp/rain/movie/classic_head_mobile.jpg"
            data-desktop="https://www.balmuda.com/jp/rain/movie/classic_head_desktop.jpg"
            data-retina="https://www.balmuda.com/jp/rain/movie/classic_head_desktop@2x.jpg"
            className="__image adaptiveimage"
            src="https://www.balmuda.com/jp/rain/movie/classic_head_desktop@2x.jpg"
          />
        </div>

        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">经典先端</h2>
            <p>
              这是一款前所未有的智能加湿器。顶部直接注水、精美的显示器、全新的旋转控制环操作方法、精妙的内部设计蕰藏着先进技术。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--classic section--01 scrollLoader lazyload">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title __wb">全新的操作方法</h2>
            <p>
              智能加湿器通过旋转、点击、按压上方的控制环进行操作。完全没有多余的按钮。可以通过有机EL显示器选择确定菜单，进行所有基本操作。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--classic section--02 scrollLoader lazyload">
        <div className="viewport">
          <div className="__content scrollLoader fadeInUp lazyload">
            <div className="video">
              <div className="el_display">
                <video id="elmov" muted autoPlay playsInline onEnded={handleEnded2}>
                  <source src="//s3.balmuda.com/www/jp/rain/movie/eldisplay.mp4" type="video/mp4" />
                  <source
                    src="//s3.balmuda.com/www/jp/rain/movie/eldisplay.webm"
                    type="video/webm"
                  />
                </video>
                <img
                  src="https://www.balmuda.com/jp/rain/movie/replay_375-400.png?20181001"
                  id="play_elmov"
                  style={{ opacity: playing2 ? 0 : 1, display: playing2 ? 'none' : 'block' }}
                  onClick={handlePlay2}
                />
                <img
                  src="https://www.balmuda.com/jp/rain/movie/text_mask.png?20181001"
                  className="cover mask"
                />
                <img
                  src="https://www.balmuda.com/jp/rain/movie/eldisplay_cover.png?20181001"
                  className="cover"
                />
                <div className="text">
                  <ul className="checklist">
                    <li id="flow1" className="checklist0" onClick={handlePlay2Start}>
                      风量変更
                    </li>
                    <li id="flow2" className="checklist1">
                      給水時
                    </li>
                    <li id="flow3" className="checklist2 checklist_on">
                      モード切り替え
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="section__title __wb">有机EL显示器</h2>
            <p>
              主体上方的有机EL显示器美观清晰地显示所有必要信息。开始注水后，自动切换到水量显示；终止后，返回到通常显示状态。环形LED指示灯显示风量，注水时显示水量。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--classic section--03 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title __wb">
              两种使用模式
              <br />
              4小时计时器
            </h2>

            <div className="mode_column">
              <div>
                <img src="https://www.balmuda.com/jp/rain/img/classic/icn_auto.svg" />
                <h3>自动模式</h3>
                <p>
                  自动模式下，智能加湿器通过自动运行，保持适当湿润度。初始设置为50%湿润度，根据需要，可以在40％～60％之间调节湿润度。
                </p>
              </div>
              <div>
                <img src="https://www.balmuda.com/jp/rain/img/classic/icn_man.svg" />
                <h3>手动模式</h3>
                <p>
                  手动模式下，可以通过手动方式选择5档风量。房间干燥时，请将风量设置为最高档5档使用。
                </p>
              </div>
              <div>
                <img src="https://www.balmuda.com/jp/rain/img/classic/icn_timer.svg" />
                <h3>24小时计时器</h3>
                <p>
                  可以小时为单位，自由设置智能加湿器运行的开始/结束。可以在家中无人的时间段，停止加湿器运行；回家前，自动开始运行。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--classic section--04 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title __wb">
              最小2w的
              <br />
              节能性能
            </h2>
            <img
              data-desktop="https://www.balmuda.com/jp/rain/img/classic/desktop/section--04.png"
              data-retina="https://www.balmuda.com/jp/rain/img/classic/desktop/section--04@2x.png"
              className="section--02_img adaptiveimage __is_desktop"
              src="https://www.balmuda.com/jp/rain/img/classic/desktop/section--04@2x.png"
            />
            <p>
              智能加湿器最小仅用2W的消耗电力即可以进行充分的加湿。急速加湿时的最大风量也仅用23W的消耗电力。这是一般加热式加湿器1/10以下的能耗。自动模式的细腻控制及非操作时显示器只显示一半的亮度等设计都节省电力。
            </p>
          </div>
        </div>
        <div className="__image __is_mobile"></div>
      </div>
    </Layout>
  )
}
