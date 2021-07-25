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
              <Link href="/speaker/setting">设置</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/speaker/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=M01A"
              className="btn btn--pagemap">
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
            <h1 className="section__title">设置</h1>
            <p className="section__txt">
              <span>BALMUDA The Speaker，</span>
              <span>
                使用的设备和蓝牙<sup>®</sup>
              </span>
              <span>或者可以用AUX输入连接。</span>
              <br className="pc" />
              <span>LED单元的光芒，</span>
              <span>有三种模式可以选择。</span>
              <br className="pc" />
              <span>配合着歌曲和场景</span>
              <span>你喜欢的风格</span>
              <span>请享受音乐。</span>
            </p>
          </div>
        </div>
      </div>

      <div className="section_wrap">
        <div className="section section--setting section--02 scrollLoader lazyload">
          <div className="viewport scrollLoader fadeInUp lazyload">
            <div className="__content">
              <h2 className="section__title">与再生设备连接</h2>
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
                <h3 className="__title">蓝牙配对方法</h3>
                <p className="__txt">
                  不需要特别的应用程序。用您使用的机器，从启动到配对用智能的操作进行。
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
                    在产品的背面
                    <img
                      src="https://www.balmuda.com/jp/speaker/img/setting/svg/icon--01.svg"
                      className="__icon"
                      alt=""
                    />
                    按下按钮，电源就会接通。
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
                    长按2秒的话，配对的待机开始。
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
                    在你使用的设备的蓝牙<sup>®</sup>选择画面中选择“BALMUDA
                    M01”就完成配对。用你手头的应用程序播放音乐。
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
                <h3 className="__title">使用AUX输入端子</h3>
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
                    产品背面的AUX输入端子和音频设备的立体声迷你插口用对应电缆(市售产品)连接。
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
                  <span className="list__txt--txt list__txt--txt__01">用音响设备播放音乐。</span>
                </p>
              </div>
            </div>

            <div id="live_light"></div>

            <div className="__content __content__02 scrollLoader lazyload">
              <h2 className="section__title">
                三个光辉
                <br className="sp" />
                从模式中选择
              </h2>
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
                <h3 className="__title">LiveLight的模式选择</h3>
                <p>
                  背面的
                  <img
                    src="https://www.balmuda.com/jp/speaker/img/setting/svg/icon--02.svg"
                    className="__icon"
                    alt=""
                  />
                  按下后，LED单元的发光方式可以从“Beat”、“Ambient”、“Candle(蜡烛)”三种模式中选择。请配合曲子和场景来享受。
                </p>
                <ul className="__speaker">
                  <li className="__speaker_item">
                    <div className="__speaker_info __speaker_info_pc">
                      <p className="__speaker_title">Beat</p>
                      <p className="__speaker_text">
                        配合着乐曲动态地明灭。
                        <br />
                        最能让人感受到身临其境的感觉。
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
                          配合着乐曲动态地明灭。
                          <br />
                          最能让人感受到身临其境的感觉。
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
                        配合着乐曲适当的抑扬顿挫
                        <br />
                        明灭。
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
                          配合着乐曲适当的抑扬顿挫
                          <br />
                          明灭。
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
                        不论乐曲，总是有波动的落下
                        <br />
                        点亮到达的光。
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
                          不论乐曲，总是有波动的落下
                          <br />
                          点亮到达的光。
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
                  ※按下模式选择的按钮的话通知音会响。根据各模式通知音的次数不同。
                  <br />
                  通知音3次「Beat」／2次「Ambient」／1次「Candle」
                </p>
                <div className="__caption">
                  <div className="__caption_box">
                    <p className="__caption_txt __caption_txt_01">
                      为了充分
                      <br className="pc" />
                      享受
                      <br />
                      它的光辉
                    </p>
                    <p className="__caption_txt __caption_txt_02">
                      LED单元的光量，不是扬声器本体而是根据播放的终端侧的音量变化。感觉光量不够的时候，请试着提高手机和电脑等终端的音量。
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
