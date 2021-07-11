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
		const target = (e.currentTarget as HTMLVideoElement)
		let targetId = target.getAttribute('data-video-target')
		if(!targetId) {
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
              <Link href="/speaker/technology">テクノロジー</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story">
              <Link href="/speaker/story">ストーリー</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--setting __current">
              <Link href="/speaker/setting">セッティング</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/speaker/spec">スペック</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=M01A"
              className="btn btn--pagemap">
              購入
            </a>
          </div>
        </div>
      </div>

      <div className="section section--setting section--00">
        <img
          data-mobile="//www.balmuda.com/jp/speaker/img/setting/mobile/section--00.jpg?20200612"
          data-desktop="//www.balmuda.com/jp/speaker/img/setting/desktop/section--00.jpg?20200612"
          data-retina="//www.balmuda.com/jp/speaker/img/setting/desktop/section--00@2x.jpg?20200612"
          className="__image adaptiveimage"
          src="//www.balmuda.com/jp/speaker/img/setting/desktop/section--00@2x.jpg?20200612"
        />
      </div>

      <div className="section section--setting section--01 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h1 className="section__title">セッティング</h1>
            <p className="section__txt">
              <span>BALMUDA The Speakerは、</span>
              <span>
                お使いの機器とBluetooth<sup>®</sup>
              </span>
              <span>またはAUX入力で接続できます。</span>
              <br className="pc" />
              <span>LEDユニットの輝きは、</span>
              <span>3つのモードから選択可能です。</span>
              <br className="pc" />
              <span>曲やシーンに合わせて、</span>
              <span>お好きなスタイルで</span>
              <span>音楽をお楽しみください。</span>
            </p>
          </div>
        </div>
      </div>

      <div className="section_wrap">
        <div className="section section--setting section--02 scrollLoader lazyload loaded">
          <div className="viewport scrollLoader fadeInUp loaded">
            <div className="__content">
              <h2 className="section__title">再生機器と接続する</h2>
            </div>
            <div className="__box scrollLoader lazyload loaded">
              <img
                data-desktop="//www.balmuda.com/jp/speaker/img/setting/desktop/section--02--01.jpg?20200612"
                data-retina="//www.balmuda.com/jp/speaker/img/setting/desktop/section--02--01@2x.jpg?20200612"
                src="//www.balmuda.com/jp/speaker/img/setting/desktop/section--02--01@2x.jpg?20200612"
                className="adaptiveimage __image"
                data-model="black"
                alt=""
              />
              <div className="__wrap">
                <h3 className="__title">Bluetoothペアリング方法</h3>
                <p className="__txt">
                  特別なアプリケーションは必要ありません。お使いの機器で、起動からペアリングまでスマートな操作で行えます。
                </p>
                <p className="list__txt">
                  <span className="list__txt--no">
                    <img
                      src="//www.balmuda.com/jp/speaker/img/svg/no1.svgz"
                      className="list__txt--icon"
                      alt=""
                    />
                  </span>
                  <span className="list__txt--txt list__txt--txt__01">
                    製品の背面にある
                    <img
                      src="//www.balmuda.com/jp/speaker/img/setting/svg/icon--01.svg"
                      className="__icon"
                      alt=""
                    />
                    を押すと、電源がONになります。
                  </span>
                </p>
                <p className="list__txt">
                  <span className="list__txt--no">
                    <img
                      src="//www.balmuda.com/jp/speaker/img/svg/no2.svgz"
                      className="list__txt--icon"
                      alt=""
                    />
                  </span>
                  <span className="list__txt--txt list__txt--txt__01">
                    <img
                      src="//www.balmuda.com/jp/speaker/img/setting/svg/icon--02.svg"
                      className="__icon"
                      alt=""
                    />
                    を2秒間長押しすると、ペアリングの待機が開始します。
                  </span>
                </p>
                <p className="list__txt">
                  <span className="list__txt--no">
                    <img
                      src="//www.balmuda.com/jp/speaker/img/svg/no3.svgz"
                      className="list__txt--icon"
                      alt=""
                    />
                  </span>
                  <span className="list__txt--txt list__txt--txt__02">
                    お使いのデバイスのBluetooth<sup>®</sup>選択画面で「BALMUDA
                    M01」を選ぶとペアリングが完了します。お手持ちのアプリケーションで音楽を再生します。
                  </span>
                </p>
              </div>
            </div>
            <div className="__box scrollLoader lazyload loaded">
              <img
                data-desktop="//www.balmuda.com/jp/speaker/img/setting/desktop/section--02--02.jpg?20200612"
                data-retina="//www.balmuda.com/jp/speaker/img/setting/desktop/section--02--02@2x.jpg?20200612"
                src="//www.balmuda.com/jp/speaker/img/setting/desktop/section--02--02@2x.jpg?20200612"
                className="adaptiveimage __image"
                data-model="black"
                alt=""
              />
              <div className="__wrap">
                <h3 className="__title">AUX入力端子を利用する</h3>
                <p className="__txt">
                  オーディオ出力を搭載するすべての機器からも、再生することができます。
                </p>
                <p className="list__txt">
                  <span className="list__txt--no">
                    <img
                      src="//www.balmuda.com/jp/speaker/img/svg/no1.svgz"
                      className="list__txt--icon"
                      alt=""
                    />
                  </span>
                  <span className="list__txt--txt list__txt--txt__02">
                    製品背面のAUX入力端子とオーディオ機器のステレオミニジャックを対応ケーブル（市販品）で接続します。
                  </span>
                </p>
                <p className="list__txt">
                  <span className="list__txt--no">
                    <img
                      src="//www.balmuda.com/jp/speaker/img/svg/no2.svgz"
                      className="list__txt--icon"
                      alt=""
                    />
                  </span>
                  <span className="list__txt--txt list__txt--txt__01">
                    オーディオ機器で音楽を再生します。
                  </span>
                </p>
              </div>
            </div>

            <div id="live_light"></div>

            <div className="__content __content__02 scrollLoader lazyload loaded">
              <h2 className="section__title">
                輝きを3つの
                <br className="sp" />
                モードから選択する
              </h2>
            </div>
            <div className="__box scrollLoader lazyload loaded">
              <img
                data-desktop="//www.balmuda.com/jp/speaker/img/setting/desktop/section--02--03.jpg?20200612"
                data-retina="//www.balmuda.com/jp/speaker/img/setting/desktop/section--02--03@2x.jpg?20200612"
                src="//www.balmuda.com/jp/speaker/img/setting/desktop/section--02--03@2x.jpg?20200612"
                className="adaptiveimage __image"
                data-model="black"
                alt=""
              />
              <div className="__wrap __wrap__02">
                <h3 className="__title">LiveLightのモード選択</h3>
                <p>
                  背面の
                  <img
                    src="//www.balmuda.com/jp/speaker/img/setting/svg/icon--02.svg"
                    className="__icon"
                    alt=""
                  />
                  を押すと、LED
                  ユニットの光り方を「Beat（ビート）」「Ambient（アンビエント）」「Candle（キャンドル）」の3つのモードから選択することができます。曲やシーンに合わせてお楽しみください。
                </p>
                <ul className="__speaker">
                  <li className="__speaker_item">
                    <div className="__speaker_info __speaker_info_pc">
                      <p className="__speaker_title">Beat</p>
                      <p className="__speaker_text">
                        楽曲に合わせてダイナミックに明滅。
                        <br />
                        もっとも臨場感を感じられます。
                      </p>
                    </div>
                    <img
                      data-mobile="//www.balmuda.com/jp/speaker/img/setting/mobile/section--02--04.jpg?20200612"
                      data-desktop="//www.balmuda.com/jp/speaker/img/setting/desktop/section--02--04.jpg?20200612"
                      data-retina="//www.balmuda.com/jp/speaker/img/setting/desktop/section--02--04@2x.jpg?20200612"
                      className="__image adaptiveimage"
                      alt=""
                      src="//www.balmuda.com/jp/speaker/img/setting/desktop/section--02--04@2x.jpg?20200612"
                    />
                    <div className="__speaker_info">
                      <div className="__speaker_info_sp">
                        <p className="__speaker_title">Beat</p>
                        <p className="__speaker_text">
                          楽曲に合わせてダイナミックに明滅。
                          <br />
                          もっとも臨場感を感じられます。
                        </p>
                      </div>
                      <a
                        className="__speaker_button video_play"
                        href="javascript:void(0);"
                        onClick={handlePlay}
                        data-video-target="spec_beat">
                        ビデオを再生
                      </a>
                    </div>
                  </li>
                  <li className="__speaker_item">
                    <div className="__speaker_info __speaker_info_pc">
                      <p className="__speaker_title">Ambient</p>
                      <p className="__speaker_text">
                        楽曲に合わせてほどよい抑揚をつけ
                        <br />
                        明滅します。
                      </p>
                    </div>
                    <img
                      data-mobile="//www.balmuda.com/jp/speaker/img/setting/mobile/section--02--05.jpg?20200612"
                      data-desktop="//www.balmuda.com/jp/speaker/img/setting/desktop/section--02--05.jpg?20200612"
                      data-retina="//www.balmuda.com/jp/speaker/img/setting/desktop/section--02--05@2x.jpg?20200612"
                      className="__image adaptiveimage"
                      alt=""
                      src="//www.balmuda.com/jp/speaker/img/setting/desktop/section--02--05@2x.jpg?20200612"
                    />
                    <div className="__speaker_info">
                      <div className="__speaker_info_sp">
                        <p className="__speaker_title">Ambient</p>
                        <p className="__speaker_text">
                          楽曲に合わせてほどよい抑揚をつけ
                          <br />
                          明滅します。
                        </p>
                      </div>
                      <a
                        className="__speaker_button video_play"
                        href="javascript:void(0);"
                        onClick={handlePlay}
                        data-video-target="spec_ambient">
                        ビデオを再生
                      </a>
                    </div>
                  </li>
                  <li className="__speaker_item">
                    <div className="__speaker_info __speaker_info_pc">
                      <p className="__speaker_title">Candle</p>
                      <p className="__speaker_text">
                        楽曲を問わず、常にゆらぎのある落ち
                        <br />
                        着いた光を灯します。
                      </p>
                    </div>
                    <img
                      data-mobile="//www.balmuda.com/jp/speaker/img/setting/mobile/section--02--06.jpg?20200612"
                      data-desktop="//www.balmuda.com/jp/speaker/img/setting/desktop/section--02--06.jpg?20200612"
                      data-retina="//www.balmuda.com/jp/speaker/img/setting/desktop/section--02--06@2x.jpg?20200612"
                      className="__image adaptiveimage"
                      alt=""
                      src="//www.balmuda.com/jp/speaker/img/setting/desktop/section--02--06@2x.jpg?20200612"
                    />
                    <div className="__speaker_info">
                      <div className="__speaker_info_sp">
                        <p className="__speaker_title">Candle</p>
                        <p className="__speaker_text">
                          楽曲を問わず、常にゆらぎのある落ち
                          <br />
                          着いた光を灯します。
                        </p>
                      </div>
                      <a
                        className="__speaker_button video_play"
                        href="javascript:void(0);"
                        onClick={handlePlay}
                        data-video-target="spec_candle">
                        ビデオを再生
                      </a>
                    </div>
                  </li>
                </ul>
                <p className="__txt_sub">
                  ※モード選択のボタンを押すと通知音が鳴ります。各モードにより通知音の回数が異なります。
                  <br />
                  通知音3回「Beat」／2回「Ambient」／1回「Candle」
                </p>
                <div className="__caption">
                  <div className="__caption_box">
                    <p className="__caption_txt __caption_txt_01">
                      充分な輝きを
                      <br className="pc" />
                      お楽しみ
                      <br />
                      いただくために
                    </p>
                    <p className="__caption_txt __caption_txt_02">
                      LEDユニットの光量は、スピーカー本体ではなく再生する端末側の音量に応じて変わります。光量が充分でないと感じた際には、スマートフォンやパソコンなど端末の音量を上げてお試しください。
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
              <div className="video_stop" data-video-target="spec_ambient" onClick={handleEnded}></div>
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
              <div className="video_stop" data-video-target="spec_candle" onClick={handleEnded}></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
