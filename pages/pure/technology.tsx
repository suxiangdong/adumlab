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
              <Link href="/pure/technology">科技</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design">
              <Link href="/pure/design">设计</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--howto">
              <Link href="/pure/howto">使用方法</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/pure/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="/support?PRODUCT_SERIES=A01A"
              className="btn btn--pagemap">
              购买
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
            data-mobile="https://www.balmuda.com/jp/pure/img/technology/movie/technology_head_mobile.jpg"
            data-desktop="https://www.balmuda.com/jp/pure/img/technology/movie/technology_head_desktop.jpg"
            data-retina="https://www.balmuda.com/jp/pure/img/technology/movie/technology_head_desktop@2x.jpg"
            className="__image adaptiveimage"
            src="https://www.balmuda.com/jp/pure/img/technology/movie/technology_head_desktop@2x.jpg"
            alt=""
          />
        </div>

        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">强力的循环能力，净化室内角落</h2>
            <p>
            BALMUDA The Pure通过正上方送出洁净空气的同时，会从设置于主机下方开口处吸取大量空气
因为PUSH & PULL 的设计，能让室内空气加速循环，每分钟净化5000左右
            </p>
            <p className="asterisk __ref">*1 : 喷射清洁模式时</p>
          </div>
        </div>
      </div>
      <div className="section section--technology section--01 scrollLoader lazyload">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">
            不管是灰尘或者是病毒都能补捉的高性能滤网

              <em className="asterisk __pointer">*2</em>
            </h2>
            <div className="desc desc_1">
              <div className="text">
                <h3>
                  <span>活性炭除臭滤网
</span>
                </h3>
                <p>
                可去除在意的臭味、甲醛等对身体有害的物质

                </p>
              </div>
              <div className="graph">
                <figure className="tobacco">
                  <img src="https://www.balmuda.com/jp/pure/img/technology/svg/tobacco.svg" alt="烟味" />
                  <figcaption>烟味</figcaption>
                </figure>
                <figure className="pet">
                  <img src="https://www.balmuda.com/jp/pure/img/technology/svg/pet.svg" alt="宠物异味
" />
                  <figcaption>宠物异味
</figcaption>
                </figure>
              </div>
            </div>
            <div className="desc desc_2">
              <div className="text">
                <h3>
                  <span>TrueHEPA滤网</span>
                  <em className="asterisk __pointer">*3</em>
                </h3>
                <p>
                灰尘、花粉、PM2.5或者家中粉尘，甚至霉菌、病毒等细微粒子，都能有效过滤。
                </p>
              </div>
              <div className="graph">
                <figure className="micro">
                  <img src="https://www.balmuda.com/jp/pure/img/technology/svg/micro.svg" alt="微小粒子" />
                  <figcaption>微小粒子</figcaption>
                </figure>
                <figure className="pm25">
                  <img src="https://www.balmuda.com/jp/pure/img/technology/svg/pm25.svg" alt="PM2.5" />
                  <figcaption>PM2.5</figcaption>
                </figure>
                <figure className="pollen">
                  <img src="https://www.balmuda.com/jp/pure/img/technology/svg/pollen.svg" alt="花粉" />
                  <figcaption>花粉</figcaption>
                </figure>
                <figure className="hazard">
                  <img src="https://www.balmuda.com/jp/pure/img/technology/svg/hazard.svg" alt="有害物质" />
                  <figcaption>有害物质</figcaption>
                </figure>
              </div>
            </div>
            <div className="desc desc_3">
              <div className="text">
                <h3>
                  <span>前网</span>
                </h3>
                <p>在入口处捕捉大灰尘。 抗菌状态抑制微生物的生长</p>
              </div>
            </div>

            <p className="asterisk __ref re2">
              *2 : 并非空气中的所有有害物质都可以去除。
              <br />
              *3 :
              对0.3μm的微粒子的捕集率为99.97%以上的过滤器。 我们尚未确认去除小于 0.3 μm 的细小颗粒。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--technology section--02 scrollLoader lazyload">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">
            PM2.5性能实验结果
            </h2>
            <img
              data-mobile="https://www.balmuda.com/jp/pure/img/technology/mobile/section--02.png?20190130"
              data-desktop="https://www.balmuda.com/jp/pure/img/technology/desktop/section--02.png?20190130"
              data-retina="https://www.balmuda.com/jp/pure/img/technology/desktop/section--02@2x.png?20190130"
              className="__image adaptiveimage"
              src="https://www.balmuda.com/jp/pure/img/technology/desktop/section--02@2x.png?20190130"
              alt=""
            />
            <p className="note">基于日本电机工业协会JEM1467的测试结果</p>
          </div>
        </div>
      </div>

      <div className="section section--technology section--03 scrollLoader lazyload">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <img
              data-mobile="https://www.balmuda.com/jp/pure/img/technology/mobile/section--03.png"
              data-desktop="https://www.balmuda.com/jp/pure/img/technology/desktop/section--03.png"
              data-retina="https://www.balmuda.com/jp/pure/img/technology/desktop/section--03@2x.png"
              className="__image adaptiveimage"
              src="https://www.balmuda.com/jp/pure/img/technology/desktop/section--03@2x.png"
              alt=""
            />
            <a href="#" onClick={handleOpenModal} className="button modal-action" data-modal-for="section--03_modal">
            详细测试结果
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
                    <img src="https://www.balmuda.com/jp/pure/img/technology/svg/virus.svg" alt="浮遊ウィルス" />
                  </div>
                  <h3>浮遊ウィルス</h3>
                </div>
                <figure>
                  <img
                    data-mobile="https://www.balmuda.com/jp/pure/img/technology/mobile/section--03_modal--01.png"
                    data-desktop="https://www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--01.png"
                    data-retina="https://www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--01@2x.png"
                    className="__image adaptiveimage"
                    src="https://www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--01@2x.png"
                    alt=""
                  />
                </figure>
                <div className="text">
                  <p>
                    日本電气工業会規格　JEM1467に基づく試験を実施。浮遊ウィルス、浮遊細菌、浮遊カビの除去率が99.9％となる理論上の所要时间。
                  </p>
                </div>
              </div>

              <div className="modal__graph graph_2">
                <div className="title">
                  <div className="graph__icon">
                    <img src="https://www.balmuda.com/jp/pure/img/technology/svg/bac.svg" alt="浮遊菌" />
                  </div>
                  <h3>浮遊菌</h3>
                </div>
                <figure>
                  <img
                    data-mobile="https://www.balmuda.com/jp/pure/img/technology/mobile/section--03_modal--02.png"
                    data-desktop="https://www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--02.png"
                    data-retina="https://www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--02@2x.png"
                    className="__image adaptiveimage"
                    src="https://www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--02@2x.png"
                    alt=""
                  />
                </figure>
                <div className="text">
                  <p>
                    日本電气工業会規格　JEM1467に基づく試験を実施。浮遊ウィルス、浮遊細菌、浮遊カビの除去率が99.9％となる理論上の所要时间。
                  </p>
                </div>
              </div>

              <div className="modal__graph graph_3">
                <div className="title">
                  <div className="graph__icon">
                    <img src="https://www.balmuda.com/jp/pure/img/technology/svg/mold.svg" alt="浮遊カビ" />
                  </div>
                  <h3>浮遊カビ</h3>
                </div>
                <figure>
                  <img
                    data-mobile="https://www.balmuda.com/jp/pure/img/technology/mobile/section--03_modal--03.png"
                    data-desktop="https://www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--03.png"
                    data-retina="https://www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--03@2x.png"
                    className="__image adaptiveimage"
                    src="https://www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--03@2x.png"
                    alt=""
                  />
                </figure>
                <div className="text">
                  <p>
                    日本電气工業会規格　JEM1467に基づく試験を実施。浮遊ウィルス、浮遊細菌、浮遊カビの除去率が99.9％となる理論上の所要时间。
                  </p>
                </div>
              </div>

              <div className="modal__graph graph_4">
                <div className="title">
                  <div className="graph__icon">
                    <img
                      src="https://www.balmuda.com/jp/pure/img/technology/svg/trimethylamine.svg"
                      alt="生ゴミ臭（トリメチルアミン）"
                    />
                  </div>
                  <h3>
                    生ゴミ臭<span>（トリメチルアミン）</span>
                  </h3>
                </div>
                <figure>
                  <img
                    data-mobile="https://www.balmuda.com/jp/pure/img/technology/mobile/section--03_modal--04.png"
                    data-desktop="https://www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--04.png"
                    data-retina="https://www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--04@2x.png"
                    className="__image adaptiveimage"
                    src="https://www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--04@2x.png"
                    alt=""
                  />
                </figure>
                <div className="text">
                  <p>
                    1m3ボックスに空气净化器および臭气ガスを投入し空气净化器を運転。臭气ガス濃度の測定結果
                  </p>
                </div>
              </div>

              <div className="modal__graph graph_5">
                <div className="title">
                  <div className="graph__icon">
                    <img
                      src="https://www.balmuda.com/jp/pure/img/technology/svg/hexanal.svg"
                      alt="調理臭・油臭（ヘキサナール）"
                    />
                  </div>
                  <h3>
                    調理臭・油臭<span>（ヘキサナール）</span>
                  </h3>
                </div>
                <figure>
                  <img
                    data-mobile="https://www.balmuda.com/jp/pure/img/technology/mobile/section--03_modal--05.png"
                    data-desktop="https://www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--05.png"
                    data-retina="https://www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--05@2x.png"
                    className="__image adaptiveimage"
                    src="https://www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--05@2x.png"
                    alt=""
                  />
                </figure>
                <div className="text">
                  <p>
                    1m3ボックスに空气净化器および臭气ガスを投入し空气净化器を運転。臭气ガス濃度の測定結果
                  </p>
                </div>
              </div>

              <div className="modal__graph graph_6">
                <div className="title">
                  <div className="graph__icon">
                    <img
                      src="https://www.balmuda.com/jp/pure/img/technology/svg/formaldehyde.svg"
                      alt="建材臭（ホルムアルデヒト）"
                    />
                  </div>
                  <h3>
                    建材臭<span>（ホルムアルデヒト）</span>
                  </h3>
                </div>
                <figure>
                  <img
                    data-mobile="https://www.balmuda.com/jp/pure/img/technology/mobile/section--03_modal--06.png"
                    data-desktop="https://www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--06.png"
                    data-retina="https://www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--06@2x.png"
                    className="__image adaptiveimage"
                    src="https://www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--06@2x.png"
                    alt=""
                  />
                </figure>
                <div className="text">
                  <p>
                    1m3ボックスに空气净化器および臭气ガスを投入し空气净化器を運転。臭气ガス濃度の測定結果
                  </p>
                </div>
              </div>

              <div className="modal__graph graph_7">
                <div className="title">
                  <div className="graph__icon">
                    <img
                      src="https://www.balmuda.com/jp/pure/img/technology/svg/isovaleric_acid.svg"
                      alt="ペット臭（イソ吉草酸）"
                    />
                  </div>
                  <h3>
                    ペット臭<span>（イソ吉草酸）</span>
                  </h3>
                </div>
                <figure>
                  <img
                    data-mobile="https://www.balmuda.com/jp/pure/img/technology/mobile/section--03_modal--07.png"
                    data-desktop="https://www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--07.png"
                    data-retina="https://www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--07@2x.png"
                    className="__image adaptiveimage"
                    src="https://www.balmuda.com/jp/pure/img/technology/desktop/section--03_modal--07@2x.png"
                    alt=""
                  />
                </figure>
                <div className="text">
                  <p>
                    1m3ボックスに空气净化器および臭气ガスを投入し空气净化器を運転。臭气ガス濃度の測定結果
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--technology section--04 scrollLoader lazyload">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">
            强力循环
              <br className="sp" />
              大量的空气
            </h2>
          </div>
        </div>
      </div>

      <div className="section section--technology section--05 scrollLoader lazyload"></div>

      <div className="section section--technology section--06 scrollLoader lazyload">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <p>
            送风扇叶上搭载整流翼的 BALMUDA The Pure
 过去只是用在飞机引擎上面的技术，运用到空气净化器上
基于流体力学进行设计
可以安静的循环大量的空气
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
