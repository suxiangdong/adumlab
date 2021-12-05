import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'
import { SyntheticEvent, useState } from 'react'

export default function ProductDetail() {
  const [playing, setPlaying] = useState('')
  const handlePlay = (e: SyntheticEvent) => {
    const targetId = (e.currentTarget as HTMLVideoElement).getAttribute('data-video-target')

    setPlaying(targetId)
    const video = document.getElementById(targetId) as HTMLVideoElement
    video.style.opacity = '1'
    video.play()
  }

  const handleEnded = (e: SyntheticEvent) => {
    const target = e.currentTarget as HTMLVideoElement
    let targetId = target.getAttribute('data-video-target')
    if (!targetId) {
      targetId = target.getAttribute('id')
    }

    setPlaying('')
    const video = document.getElementById(targetId) as HTMLVideoElement
    video.style.opacity = '0'
    video.pause()
  }
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/speaker/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/speaker/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <Link href="/speaker/">
            <a className="pagemap__content--logo">
              <img src="/_theme/img/svg/balmuda-the-speaker.svgz" alt="BALMUDA The Speaker" />
            </a>
          </Link>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/speaker/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology">
              <Link href="/speaker/technology">科技</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story">
              <Link href="/speaker/story">故事</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--setting __current">
              <Link href="/speaker/setting">设定</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/speaker/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a href="/support?PRODUCT_SERIES=M01A" className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="section section--setting section--00">
        <img
          data-mobile="https://www.balmuda.com/jp/speaker/img/setting/mobile/section--00.jpg?20200612"
          data-desktop="https://www.balmuda.com/jp/speaker/img/setting/desktop/section--00.jpg?20200612"
          data-retina="https://www.balmuda.com/jp/speaker/img/setting/desktop/section--00@2x.jpg?20200612"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/speaker/img/setting/desktop/section--00@2x.jpg?20200612"
        />
      </div>

      <div className="section section--setting section--01 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h1 className="section__title">设定</h1>
            <p className="section__txt">
              <span>BALMUDA The Speaker，</span>
              <span>
                可以通过 Bluetooth<sup>®</sup>
              </span>
              <span>或AUX连接到您的设备。</span>
              <br className="pc" />
              <span>提供三种模式选择LED单元的亮度</span>
              <br className="pc" />
              <span>可根据歌曲或场景，选择喜好的风格享受音乐。</span>
            </p>
          </div>
        </div>
      </div>

      <div className="section_wrap">
        <div className="section section--setting section--02 scrollLoader lazyload">
          <div className="viewport scrollLoader fadeInUp lazyload">
            <div className="__content">
              <h2 className="section__title">播放与连接设备</h2>
            </div>
            <div className="__box scrollLoader lazyload">
              <img
                data-desktop="https://www.balmuda.com/jp/speaker/img/setting/desktop/section--02--01.jpg?20200612"
                data-retina="https://www.balmuda.com/jp/speaker/img/setting/desktop/section--02--01@2x.jpg?20200612"
                src="https://www.balmuda.com/jp/speaker/img/setting/desktop/section--02--01@2x.jpg?20200612"
                className="adaptiveimage __image"
                data-model="black"
                alt=""
              />
              <div className="__wrap">
                <h3 className="__title">Bluetooth 配對方法</h3>
                <p className="__txt">
                  无需特殊的应用程序，从启动到配对，简单的智能操作即能使用设备
                </p>
                <p className="list__txt">
                  <span className="list__txt--no">
                    <img
                      src="https://www.balmuda.com/jp/speaker/img/svg/no1.svgz"
                      className="list__txt--icon"
                      alt=""
                    />
                  </span>
                  <span className="list__txt--txt list__txt--txt__01">
                    按下主机背面
                    <img
                      src="https://www.balmuda.com/jp/speaker/img/setting/svg/icon--01.svg"
                      className="__icon"
                      alt=""
                    />
                    的电源按钮，即可打开/关闭电源
                  </span>
                </p>
                <p className="list__txt">
                  <span className="list__txt--no">
                    <img
                      src="https://www.balmuda.com/jp/speaker/img/svg/no2.svgz"
                      className="list__txt--icon"
                      alt=""
                    />
                  </span>
                  <span className="list__txt--txt list__txt--txt__01">
                    <img
                      src="https://www.balmuda.com/jp/speaker/img/setting/svg/icon--02.svg"
                      className="__icon"
                      alt=""
                    />
                    电源打开状态下，长按（light）按钮2秒，开始等待配对。
                  </span>
                </p>
                <p className="list__txt">
                  <span className="list__txt--no">
                    <img
                      src="https://www.balmuda.com/jp/speaker/img/svg/no3.svgz"
                      className="list__txt--icon"
                      alt=""
                    />
                  </span>
                  <span className="list__txt--txt list__txt--txt__02">
                    启用使用设备的 Bluetooth 功能，从显示的连接对象列表中选择“BALMUDA
                    M01”，完成配对，从使用设备中的应用程序中播放音乐。
                  </span>
                </p>
              </div>
            </div>
            <div className="__box scrollLoader lazyload">
              <img
                data-desktop="https://www.balmuda.com/jp/speaker/img/setting/desktop/section--02--02.jpg?20200612"
                data-retina="https://www.balmuda.com/jp/speaker/img/setting/desktop/section--02--02@2x.jpg?20200612"
                src="https://www.balmuda.com/jp/speaker/img/setting/desktop/section--02--02@2x.jpg?20200612"
                className="adaptiveimage __image"
                data-model="black"
                alt=""
              />
              <div className="__wrap">
                <h3 className="__title">连接外部设备</h3>
                <p className="__txt">所有配备音频输出的设备也可以播放。</p>
                <p className="list__txt">
                  <span className="list__txt--no">
                    <img
                      src="https://www.balmuda.com/jp/speaker/img/svg/no1.svgz"
                      className="list__txt--icon"
                      alt=""
                    />
                  </span>
                  <span className="list__txt--txt list__txt--txt__02">
                    使用兼容的AUX线缆的一端连接主机背面的AUX外部输入端子，另一端连接音乐播放器的立体声迷你插孔。
                  </span>
                </p>
                <p className="list__txt">
                  <span className="list__txt--no">
                    <img
                      src="https://www.balmuda.com/jp/speaker/img/svg/no2.svgz"
                      className="list__txt--icon"
                      alt=""
                    />
                  </span>
                  <span className="list__txt--txt list__txt--txt__01">
                    在音乐播放器上播放音乐。
                  </span>
                </p>
              </div>
            </div>

            <div id="live_light"></div>

            <div className="__content __content__02 scrollLoader lazyload">
              <h2 className="section__title">从三种模式中选择发光亮度</h2>
            </div>
            <div className="__box scrollLoader lazyload">
              <img
                data-desktop="https://www.balmuda.com/jp/speaker/img/setting/desktop/section--02--03.jpg?20200612"
                data-retina="https://www.balmuda.com/jp/speaker/img/setting/desktop/section--02--03@2x.jpg?20200612"
                src="https://www.balmuda.com/jp/speaker/img/setting/desktop/section--02--03@2x.jpg?20200612"
                className="adaptiveimage __image"
                data-model="black"
                alt=""
              />
              <div className="__wrap __wrap__02">
                <h3 className="__title">LIGHT的模式选择</h3>
                <p>
                  按下背面的
                  <img
                    src="https://www.balmuda.com/jp/speaker/img/setting/svg/icon--02.svg"
                    className="__icon"
                    alt=""
                  />
                  按下后，LED单元的发光方式可以从“Beat”、“Ambient”、“Candle(蜡烛)”三种模式中选择。请根据喜好进行设定，尽享Light模式。
                </p>
                <ul className="__speaker">
                  <li className="__speaker_item">
                    <div className="__speaker_info __speaker_info_pc">
                      <p className="__speaker_title">Beat</p>
                      <p className="__speaker_text">
                        配合音乐的能量和节奏，
                        <br />
                        发出动感的光芒。
                      </p>
                    </div>
                    <img
                      data-mobile="https://www.balmuda.com/jp/speaker/img/setting/mobile/section--02--04.jpg?20200612"
                      data-desktop="https://www.balmuda.com/jp/speaker/img/setting/desktop/section--02--04.jpg?20200612"
                      data-retina="https://www.balmuda.com/jp/speaker/img/setting/desktop/section--02--04@2x.jpg?20200612"
                      className="__image adaptiveimage"
                      alt=""
                      src="https://www.balmuda.com/jp/speaker/img/setting/desktop/section--02--04@2x.jpg?20200612"
                    />
                    <div className="__speaker_info">
                      <div className="__speaker_info_sp">
                        <p className="__speaker_title">Beat</p>
                        <p className="__speaker_text">
                          配合音乐的能量和节奏，
                          <br />
                          发出动感的光芒。
                        </p>
                      </div>
                      <a
                        className="__speaker_button video_play"
                        href="javascript:void(0);"
                        onClick={handlePlay}
                        data-video-target="spec_beat">
                        播放视频
                      </a>
                    </div>
                  </li>
                  <li className="__speaker_item">
                    <div className="__speaker_info __speaker_info_pc">
                      <p className="__speaker_title">Ambient</p>
                      <p className="__speaker_text">
                        伴随著歌唱声和演奏声，
                        <br />
                        发出温暖的光芒。
                      </p>
                    </div>
                    <img
                      data-mobile="https://www.balmuda.com/jp/speaker/img/setting/mobile/section--02--05.jpg?20200612"
                      data-desktop="https://www.balmuda.com/jp/speaker/img/setting/desktop/section--02--05.jpg?20200612"
                      data-retina="https://www.balmuda.com/jp/speaker/img/setting/desktop/section--02--05@2x.jpg?20200612"
                      className="__image adaptiveimage"
                      alt=""
                      src="https://www.balmuda.com/jp/speaker/img/setting/desktop/section--02--05@2x.jpg?20200612"
                    />
                    <div className="__speaker_info">
                      <div className="__speaker_info_sp">
                        <p className="__speaker_title">Ambient</p>
                        <p className="__speaker_text">
                          伴随著歌唱声和演奏声，
                          <br />
                          发出温暖的光芒。
                        </p>
                      </div>
                      <a
                        className="__speaker_button video_play"
                        href="javascript:void(0);"
                        onClick={handlePlay}
                        data-video-target="spec_ambient">
                        播放视频
                      </a>
                    </div>
                  </li>
                  <li className="__speaker_item">
                    <div className="__speaker_info __speaker_info_pc">
                      <p className="__speaker_title">Candle</p>
                      <p className="__speaker_text">
                        不与声音联动，如蜡烛般摇曳，
                        <br />
                        持续安静地发出光芒。
                      </p>
                    </div>
                    <img
                      data-mobile="https://www.balmuda.com/jp/speaker/img/setting/mobile/section--02--06.jpg?20200612"
                      data-desktop="https://www.balmuda.com/jp/speaker/img/setting/desktop/section--02--06.jpg?20200612"
                      data-retina="https://www.balmuda.com/jp/speaker/img/setting/desktop/section--02--06@2x.jpg?20200612"
                      className="__image adaptiveimage"
                      alt=""
                      src="https://www.balmuda.com/jp/speaker/img/setting/desktop/section--02--06@2x.jpg?20200612"
                    />
                    <div className="__speaker_info">
                      <div className="__speaker_info_sp">
                        <p className="__speaker_title">Candle</p>
                        <p className="__speaker_text">
                          不与声音联动，如蜡烛般摇曳，
                          <br />
                          持续安静地发出光芒。
                        </p>
                      </div>
                      <a
                        className="__speaker_button video_play"
                        href="javascript:void(0);"
                        onClick={handlePlay}
                        data-video-target="spec_candle">
                        播放视频
                      </a>
                    </div>
                  </li>
                </ul>
                <p className="__txt_sub">
                  ※按下模式选择按钮时，将发出通知音。各模式下按下Light按钮时通知音的次数不同。
                  <br />
                  3次为「Beat」，2次为「Ambient」，1次为「Candle」。
                </p>
                <div className="__caption">
                  <div className="__caption_box">
                    <p className="__caption_txt __caption_txt_01">
                      为了享受
                      <br className="pc" />
                      充足的发光量
                    </p>
                    <p className="__caption_txt __caption_txt_02">
                      LED单元的发光量是根据俩节的终端设备（智能手机、电脑、外部设备等）的播放音量而变化，而不是扬声器的音量，如果觉的发光量不足，请尝试调整智能手机、电脑等终端设备的音量
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`section_overlay section_overlay--v3 ${
              playing === 'spec_beat' ? 'visible' : ''
            }`}
            id="overlay--spec_beat">
            <div className="section_overlay_inner section_overlay_inner_01">
              <video
                controls
                id="spec_beat"
                width="100%"
                data-log="speaker_spec_beat"
                onEnded={handleEnded}>
                <source
                  src="//s3.balmuda.com/www/jp/speaker/movie/beat.mp4?20200612"
                  type="video/mp4"
                />
              </video>
              <div className="video_stop" data-video-target="spec_beat" onClick={handleEnded}></div>
            </div>
          </div>
          <div
            className={`section_overlay section_overlay--v3 ${
              playing === 'spec_ambient' ? 'visible' : ''
            }`}
            id="overlay--spec_ambient">
            <div className="section_overlay_inner section_overlay_inner_02">
              <video controls id="spec_ambient" width="100%" data-log="speaker_spec_ambient">
                <source
                  src="//s3.balmuda.com/www/jp/speaker/movie/ambient.mp4?20200612"
                  type="video/mp4"
                />
              </video>
              <div
                className="video_stop"
                data-video-target="spec_ambient"
                onClick={handleEnded}></div>
            </div>
          </div>
          <div
            className={`section_overlay section_overlay--v3 ${
              playing === 'spec_candle' ? 'visible' : ''
            }`}
            id="overlay--spec_candle">
            <div className="section_overlay_inner section_overlay_inner_03">
              <video controls id="spec_candle" width="100%" data-log="speaker_spec_candle">
                <source
                  src="//s3.balmuda.com/www/jp/speaker/movie/candle.mp4?20200612"
                  type="video/mp4"
                />
              </video>
              <div
                className="video_stop"
                data-video-target="spec_candle"
                onClick={handleEnded}></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
