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
              <Link href="/rain/classic">クラシックで先進的</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--humidity">
              <Link href="/rain/humidity">適切な湿度</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/rain/spec">スペック</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=ERN-1100SD-WK"
              className="btn btn--pagemap">
              購入
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
            data-mobile="//www.balmuda.com/jp/rain/movie/classic_head_mobile.jpg"
            data-desktop="//www.balmuda.com/jp/rain/movie/classic_head_desktop.jpg"
            data-retina="//www.balmuda.com/jp/rain/movie/classic_head_desktop@2x.jpg"
            className="__image adaptiveimage"
            src="//www.balmuda.com/jp/rain/movie/classic_head_desktop@2x.jpg"
          />
        </div>

        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">クラシックで先進的</h2>
            <p>
              このような加湿器は、これまでどこにもありませんでした。そのまま注ぎ入れる給水方法、美しいディスプレイと新しい操作方法。
              <br />
              クラシックで上質なデザインの内部には、先進性が隠されています。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--classic section--01 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title __wb">あたらしい操作方法</h2>
            <p>
              Rainは、本体上部のコントロールリングを回したり、クリックしたり、長押しすることで操作します。余計なボタンはありません。有機ELディスプレイを見ながら、メニューの選択や決定など、基本的なすべての操作を行うことができます。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--classic section--02 scrollLoader lazyload loaded">
        <div className="viewport">
          <div className="__content scrollLoader fadeInUp loaded">
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
                  src="//www.balmuda.com/jp/rain/movie/replay_375-400.png?20181001"
                  id="play_elmov"
                  style={{ opacity: playing2 ? 0 : 1, display: playing2 ? 'none' : 'block' }}
                  onClick={handlePlay2}
                />
                <img
                  src="//www.balmuda.com/jp/rain/movie/text_mask.png?20181001"
                  className="cover mask"
                />
                <img
                  src="//www.balmuda.com/jp/rain/movie/eldisplay_cover.png?20181001"
                  className="cover"
                />
                <div className="text">
                  <ul className="checklist">
                    <li id="flow1" className="checklist0" onClick={handlePlay2Start}>
                      風量変更
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

            <h2 className="section__title __wb">有機ELディスプレイ</h2>
            <p>
              本体上部の有機ELディスプレイは、必要なすべての情報を、美しく整理して表示します。給水を始めると自動的に水量表示に切り替わり、終わると通常表示に戻ります。周囲のLEDインジケーターは、通常時には風量を、給水時には水量を表示します。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--classic section--03 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title __wb">
              2つの運転モードと
              <br />
              24hタイマー
            </h2>

            <div className="mode_column">
              <div>
                <img src="//www.balmuda.com/jp/rain/img/classic/icn_auto.svg" />
                <h3>オートモード</h3>
                <p>
                  オートモードでは一定の湿度を保持するよう、Rainが自動運転します。初期設定は湿度50％ですが、40％から60％まで好みの湿度に設定することも出来ます。
                </p>
              </div>
              <div>
                <img src="//www.balmuda.com/jp/rain/img/classic/icn_man.svg" />
                <h3>マニュアルモード</h3>
                <p>
                  マニュアルモードでは、手動で5段階から風量を選ぶことができます。部屋が乾燥してつらいときなどは、風量を最大の5に設定してお使いください。
                </p>
              </div>
              <div>
                <img src="//www.balmuda.com/jp/rain/img/classic/icn_timer.svg" />
                <h3>24hタイマー</h3>
                <p>
                  Rainの運転のオン・オフを1時間ごとに自由に設定することができます。人がいない時間帯には運転を停止させ、帰宅前に運転を開始させるなどの設定ができます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--classic section--04 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title __wb">
              最小2Wの
              <br />
              省エネ性能
            </h2>
            <img
              data-desktop="//www.balmuda.com/jp/rain/img/classic/desktop/section--04.png"
              data-retina="//www.balmuda.com/jp/rain/img/classic/desktop/section--04@2x.png"
              className="section--02_img adaptiveimage __is_desktop"
              src="//www.balmuda.com/jp/rain/img/classic/desktop/section--04@2x.png"
            />
            <p>
              Rainは最小2Wのわずかな消費電力で十分な加湿を行います。急速に加湿を行う最大風量時でも消費電力は23W。これは一般的なハイブリッド式加湿器の1/10以下のエネルギー消費です。オートモードの繊細な制御や、操作時以外はディスプレイを半分の明るさにするなど、無駄な電力を使いません。
            </p>
          </div>
        </div>
        <div className="__image __is_mobile"></div>
      </div>
    </Layout>
  )
}
