import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'
import { useState } from 'react'

export default function ProductDetail() {
  const [playing, setPlaying] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

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

	const handleOpenModal = (e) => {
		e.preventDefault()
		setIsOpen(true)
	}

  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/pure/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/pure/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <Link href="/pure/">
            <a className="pagemap__content--logo">
              <img
                className="w-full"
                src="/_theme/img/svg/balmuda-the-pure.min.svgz"
                alt="BALMUDA The Pure"
              />
            </a>
          </Link>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/pure/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology __current">
              <Link href="/pure/technology">テクノロジー</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design">
              <Link href="/pure/design">デザイン</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--howto">
              <Link href="/pure/howto">使い方</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/pure/spec">スペック</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=A01A"
              className="btn btn--pagemap">
              購入
            </a>
          </div>
        </div>
      </div>

      <div className="section section--technology section--00">
        <div className="billboard__wrapper">
          <div className="mov_mobile">
            <div className="section_overlay section_overlay--vmb visible" id="overlay--vmb">
              <video className="vmb invisible" width="100%" muted autoPlay playsInline>
                <source
                  src="//s3.balmuda.com/www/jp/pure/movie/technology_mobile.mp4"
                  type="video/mp4"
                />
                <source
                  src="//s3.balmuda.com/www/jp/pure/movie/technology_mobile.webm"
                  type="video/webm"
                />
              </video>
              <div className="video_stop_mb invisible" data-video-target="vmb"></div>
              <div className="video_play_mb visible" data-video-target="vmb">
                <span></span>
              </div>
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
                  src="//s3.balmuda.com/www/jp/pure/movie/technology.webm"
                  type="video/webm"
                />
                <source src="//s3.balmuda.com/www/jp/pure/movie/technology.mp4" type="video/mp4" />
              </video>
              <div
                className={`video_stop_dk ${playing ? 'visible' : 'invisible'}`}
                data-video-target="vdk"
                onClick={handleEnded}></div>
              <div
                className={`video_play_dk ${playing ? 'invisible' : 'visible'}`}
                data-video-target="vdk"
                onClick={handlePlay}>
                <span></span>
              </div>
            </div>
          </div>

          <img
            data-mobile="//www.balmuda.com/jp/pure/img/technology/movie/technology_head_mobile.jpg"
            data-desktop="//www.balmuda.com/jp/pure/img/technology/movie/technology_head_desktop.jpg"
            data-retina="//www.balmuda.com/jp/pure/img/technology/movie/technology_head_desktop@2x.jpg"
            className="__image adaptiveimage"
            src="//www.balmuda.com/jp/pure/img/technology/movie/technology_head_desktop@2x.jpg"
            alt=""
          />
        </div>

        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">プッシュ＆プル</h2>
            <p>
              部屋の向こう側の空気も強力に引き寄せて清浄するために。
              <br />
              BALMUDA The Pure
              は、真上に向かって清浄された空気を送り出すと同時に、本体の下に設けられた開口部から大量の空気を吸い込みます。このプッシュ＆プルの設計思想により、
              <br />
              部屋や全体の空気を大きく循環させ、毎分7000リットル
              <em className="asterisk __pointer">*1</em>の空気を清浄します。
            </p>
            <p className="asterisk __ref">*1 : ジェットクリーニングモード運転時</p>
          </div>
        </div>
      </div>
      <div className="section section--technology section--01 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">
              微細な粒子からウィルスまで捕らえる高性能フィルター
              <em className="asterisk __pointer">*2</em>
            </h2>
            <div className="desc desc_1">
              <div className="text">
                <h3>
                  <span>活性炭脱臭フィルター</span>
                </h3>
                <p>
                  ペット臭やタバコ臭などのニオイ成分から、ホルムアルデヒドなどの有害物質を取り除きます。
                </p>
              </div>
              <div className="graph">
                <figure className="tobacco">
                  <img src="//www.balmuda.com/jp/pure/img/technology/svg/tobacco.svg" alt="タバコ臭" />
                  <figcaption>タバコ臭</figcaption>
                </figure>
                <figure className="pet">
                  <img src="//www.balmuda.com/jp/pure/img/technology/svg/pet.svg" alt="ペット臭" />
                  <figcaption>ペット臭</figcaption>
                </figure>
              </div>
            </div>
            <div className="desc desc_2">
              <div className="text">
                <h3>
                  <span>TrueHEPAフィルター</span>
                  <em className="asterisk __pointer">*3</em>
                </h3>
                <p>
                  ホコリや花粉、PM2.5やハウスダストから、カビやウィルスなど、微細な粒子も確実にキャッチ。
                </p>
              </div>
              <div className="graph">
                <figure className="micro">
                  <img src="//www.balmuda.com/jp/pure/img/technology/svg/micro.svg" alt="微小粒子" />
                  <figcaption>微小粒子</figcaption>
                </figure>
                <figure className="pm25">
                  <img src="//www.balmuda.com/jp/pure/img/technology/svg/pm25.svg" alt="PM2.5" />
                  <figcaption>PM2.5</figcaption>
                </figure>
                <figure className="pollen">
                  <img src="//www.balmuda.com/jp/pure/img/technology/svg/pollen.svg" alt="花粉" />
                  <figcaption>花粉</figcaption>
                </figure>
                <figure className="hazard">
                  <img src="//www.balmuda.com/jp/pure/img/technology/svg/hazard.svg" alt="有害物質" />
                  <figcaption>有害物質</figcaption>
                </figure>
              </div>
            </div>
            <div className="desc desc_3">
              <div className="text">
                <h3>
                  <span>プレネット</span>
                </h3>
                <p>大きなホコリを入り口でキャッチ。抗菌仕様が微生物の繁殖を抑制します</p>
              </div>
            </div>

            <p className="asterisk __ref re2">
              *2 : 空気中のすべての有害物質を除去できるものではありません。
              <br />
              *3 :
              0.3μmの微粒子を99.97%以上の粒子捕集率をもつフィルターです。0.3μｍ未満の微粒子状物質については、除去の確認ができていません。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--technology section--02 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">
              PM2.5集じん性能
              <br className="sp" />
              試験結果
            </h2>
            <img
              data-mobile="//www.balmuda.com/jp/pure/img/technology/mobile/section--02.png?20190130"
              data-desktop="//www.balmuda.com/jp/pure/img/technology/desktop/section--02.png?20190130"
              data-retina="//www.balmuda.com/jp/pure/img/technology/desktop/section--02@2x.png?20190130"
              className="__image adaptiveimage"
              src="//www.balmuda.com/jp/pure/img/technology/desktop/section--02@2x.png?20190130"
              alt=""
            />
            <p className="note">日本電機工業会規格 JEM 1467に基づく</p>
          </div>
        </div>
      </div>

      <div className="section section--technology section--03 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <img
              data-mobile="//www.balmuda.com/jp/pure/img/technology/mobile/section--03.png"
              data-desktop="//www.balmuda.com/jp/pure/img/technology/desktop/section--03.png"
              data-retina="//www.balmuda.com/jp/pure/img/technology/desktop/section--03@2x.png"
              className="__image adaptiveimage"
              src="//www.balmuda.com/jp/pure/img/technology/desktop/section--03@2x.png"
              alt=""
            />
            <a href="#" onClick={handleOpenModal} className="button modal-action" data-modal-for="section--03_modal">
              詳しい試験結果
            </a>
          </div>
        </div>
        <div className={`modal modal--buynow ${isOpen ? 'modal--active': ''}`} id="section--03_modal">
          <div className="modal__close icon__circle__close" onClick={() => setIsOpen(false)}></div>
          <div className="modal__content">
            <div className="wrapper">
              <div className="modal__graph graph_1">
                <div className="title">
                  <div className="graph__icon">
                    <img src="//www.balmuda.com/jp/pure/img/technology/svg/virus.svg" alt="浮遊ウィルス" />
                  </div>
                  <h3>浮遊ウィルス</h3>
                </div>
                <figure>
                  <img
                    data-mobile="//www.balmuda.com/jp/pure/img/technology/mobile/section--03_modal--01.png"
                    data-desktop="//www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--01.png"
                    data-retina="//www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--01@2x.png"
                    className="__image adaptiveimage"
                    src="//www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--01@2x.png"
                    alt=""
                  />
                </figure>
                <div className="text">
                  <p>
                    日本電気工業会規格　JEM1467に基づく試験を実施。浮遊ウィルス、浮遊細菌、浮遊カビの除去率が99.9％となる理論上の所要時間。
                  </p>
                </div>
              </div>

              <div className="modal__graph graph_2">
                <div className="title">
                  <div className="graph__icon">
                    <img src="//www.balmuda.com/jp/pure/img/technology/svg/bac.svg" alt="浮遊菌" />
                  </div>
                  <h3>浮遊菌</h3>
                </div>
                <figure>
                  <img
                    data-mobile="//www.balmuda.com/jp/pure/img/technology/mobile/section--03_modal--02.png"
                    data-desktop="//www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--02.png"
                    data-retina="//www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--02@2x.png"
                    className="__image adaptiveimage"
                    src="//www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--02@2x.png"
                    alt=""
                  />
                </figure>
                <div className="text">
                  <p>
                    日本電気工業会規格　JEM1467に基づく試験を実施。浮遊ウィルス、浮遊細菌、浮遊カビの除去率が99.9％となる理論上の所要時間。
                  </p>
                </div>
              </div>

              <div className="modal__graph graph_3">
                <div className="title">
                  <div className="graph__icon">
                    <img src="//www.balmuda.com/jp/pure/img/technology/svg/mold.svg" alt="浮遊カビ" />
                  </div>
                  <h3>浮遊カビ</h3>
                </div>
                <figure>
                  <img
                    data-mobile="//www.balmuda.com/jp/pure/img/technology/mobile/section--03_modal--03.png"
                    data-desktop="//www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--03.png"
                    data-retina="//www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--03@2x.png"
                    className="__image adaptiveimage"
                    src="//www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--03@2x.png"
                    alt=""
                  />
                </figure>
                <div className="text">
                  <p>
                    日本電気工業会規格　JEM1467に基づく試験を実施。浮遊ウィルス、浮遊細菌、浮遊カビの除去率が99.9％となる理論上の所要時間。
                  </p>
                </div>
              </div>

              <div className="modal__graph graph_4">
                <div className="title">
                  <div className="graph__icon">
                    <img
                      src="//www.balmuda.com/jp/pure/img/technology/svg/trimethylamine.svg"
                      alt="生ゴミ臭（トリメチルアミン）"
                    />
                  </div>
                  <h3>
                    生ゴミ臭<span>（トリメチルアミン）</span>
                  </h3>
                </div>
                <figure>
                  <img
                    data-mobile="//www.balmuda.com/jp/pure/img/technology/mobile/section--03_modal--04.png"
                    data-desktop="//www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--04.png"
                    data-retina="//www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--04@2x.png"
                    className="__image adaptiveimage"
                    src="//www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--04@2x.png"
                    alt=""
                  />
                </figure>
                <div className="text">
                  <p>
                    1m3ボックスに空気清浄機および臭気ガスを投入し空気清浄機を運転。臭気ガス濃度の測定結果
                  </p>
                </div>
              </div>

              <div className="modal__graph graph_5">
                <div className="title">
                  <div className="graph__icon">
                    <img
                      src="//www.balmuda.com/jp/pure/img/technology/svg/hexanal.svg"
                      alt="調理臭・油臭（ヘキサナール）"
                    />
                  </div>
                  <h3>
                    調理臭・油臭<span>（ヘキサナール）</span>
                  </h3>
                </div>
                <figure>
                  <img
                    data-mobile="//www.balmuda.com/jp/pure/img/technology/mobile/section--03_modal--05.png"
                    data-desktop="//www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--05.png"
                    data-retina="//www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--05@2x.png"
                    className="__image adaptiveimage"
                    src="//www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--05@2x.png"
                    alt=""
                  />
                </figure>
                <div className="text">
                  <p>
                    1m3ボックスに空気清浄機および臭気ガスを投入し空気清浄機を運転。臭気ガス濃度の測定結果
                  </p>
                </div>
              </div>

              <div className="modal__graph graph_6">
                <div className="title">
                  <div className="graph__icon">
                    <img
                      src="//www.balmuda.com/jp/pure/img/technology/svg/formaldehyde.svg"
                      alt="建材臭（ホルムアルデヒト）"
                    />
                  </div>
                  <h3>
                    建材臭<span>（ホルムアルデヒト）</span>
                  </h3>
                </div>
                <figure>
                  <img
                    data-mobile="//www.balmuda.com/jp/pure/img/technology/mobile/section--03_modal--06.png"
                    data-desktop="//www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--06.png"
                    data-retina="//www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--06@2x.png"
                    className="__image adaptiveimage"
                    src="//www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--06@2x.png"
                    alt=""
                  />
                </figure>
                <div className="text">
                  <p>
                    1m3ボックスに空気清浄機および臭気ガスを投入し空気清浄機を運転。臭気ガス濃度の測定結果
                  </p>
                </div>
              </div>

              <div className="modal__graph graph_7">
                <div className="title">
                  <div className="graph__icon">
                    <img
                      src="//www.balmuda.com/jp/pure/img/technology/svg/isovaleric_acid.svg"
                      alt="ペット臭（イソ吉草酸）"
                    />
                  </div>
                  <h3>
                    ペット臭<span>（イソ吉草酸）</span>
                  </h3>
                </div>
                <figure>
                  <img
                    data-mobile="//www.balmuda.com/jp/pure/img/technology/mobile/section--03_modal--07.png"
                    data-desktop="//www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--07.png"
                    data-retina="//www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--07@2x.png"
                    className="__image adaptiveimage"
                    src="//www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--07@2x.png"
                    alt=""
                  />
                </figure>
                <div className="text">
                  <p>
                    1m3ボックスに空気清浄機および臭気ガスを投入し空気清浄機を運転。臭気ガス濃度の測定結果
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--technology section--04 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">
              力強く、
              <br className="sp" />
              大量の空気を循環
            </h2>
          </div>
        </div>
      </div>

      <div className="section section--technology section--05 scrollLoader lazyload loaded"></div>

      <div className="section section--technology section--06 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <p>
              BALMUDA The Pure
              には、空気を送り出すファンの上に、整流翼が用意されています。従来、航空機のジェットエンジンなどで使われるこのテクノロジーを、BALMUDA
              The Pure
              のために流体力学に基づき再設計しました。これにより、より大容量の空気を、静かに、循環させることが可能になりました。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
