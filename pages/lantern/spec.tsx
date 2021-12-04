import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'
import { useState } from 'react'

export default function ProductDetail() {
  const [current, setCurrent] = useState(0)

	const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    setPlaying(true)
    const video = document.getElementById('spec_yuragi') as HTMLVideoElement
    video.style.opacity = '1'
    video.play()
  }

  const handleEnded = () => {
    setPlaying(false)
    const video = document.getElementById('spec_yuragi') as HTMLVideoElement
    video.style.opacity = '0'
    video.pause()
  }

  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/lantern/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/lantern/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <Link href="/lantern/">
            <a className="pagemap__content--logo">
              <img src="/_theme/img/svg/balmuda-the-lantern.min.svgz" alt="BALMUDA The Lantern" />
            </a>
          </Link>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/lantern/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story">
              <Link href="/lantern/story">故事</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec __current">
              <Link href="/lantern/spec">规格</Link>
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
      <div className="section section--spec section--00 scrollLoader lazyload">
        <div className="__image_outer __is_desktop">
          <div className="__image_inner">
            <img
              data-desktop="https://www.balmuda.com/jp/lantern/img/spec/desktop/black.jpg?20210421"
              data-retina="https://www.balmuda.com/jp/lantern/img/spec/desktop/black@2x.jpg?20210421"
              src="https://www.balmuda.com/jp/lantern/img/spec/desktop/black@2x.jpg?20210421"
							className={`adaptiveimage __image ${current === 0 ? '__current' : ''}`}
              data-model="black"
              alt=""
            />
            <img
              data-desktop="https://www.balmuda.com/jp/lantern/img/spec/desktop/white.jpg?20210421"
              data-retina="https://www.balmuda.com/jp/lantern/img/spec/desktop/white@2x.jpg?20210421"
              src="https://www.balmuda.com/jp/lantern/img/spec/desktop/white@2x.jpg?20210421"
              className={`adaptiveimage __image ${current === 1 ? '__current' : ''}`}
              data-model="white"
              alt=""
            />
            <img
              data-desktop="https://www.balmuda.com/jp/lantern/img/spec/desktop/gray.jpg?20210421"
              data-retina="https://www.balmuda.com/jp/lantern/img/spec/desktop/gray@2x.jpg?20210421"
              src="https://www.balmuda.com/jp/lantern/img/spec/desktop/gray@2x.jpg?20210421"
              className={`adaptiveimage __image ${current === 2 ? '__current' : ''}`}
              data-model="gray"
              alt=""
            />
            <img
              data-desktop="https://www.balmuda.com/jp/lantern/img/spec/desktop/red.jpg?20210421"
              data-retina="https://www.balmuda.com/jp/lantern/img/spec/desktop/red@2x.jpg?20210421"
              src="https://www.balmuda.com/jp/lantern/img/spec/desktop/red@2x.jpg?20210421"
              className={`adaptiveimage __image ${current === 3 ? '__current' : ''}`}
              data-model="red"
              alt=""
            />
            <img
              data-desktop="https://www.balmuda.com/jp/lantern/img/spec/desktop/navy.jpg?20210421"
              data-retina="https://www.balmuda.com/jp/lantern/img/spec/desktop/navy@2x.jpg?20210421"
              src="https://www.balmuda.com/jp/lantern/img/spec/desktop/navy@2x.jpg?20210421"
              className={`adaptiveimage __image ${current === 4 ? '__current' : ''}`}
              data-model="navy"
              alt=""
            />
          </div>
        </div>

        <div className="__selector_wrap">
          <span className={`__selector ${current === 0 ? '__current' : ''}`} onClick={() => setCurrent(0)} data-model="black">
            黑色
          </span>
          <span className={`__selector ${current === 1 ? '__current' : ''}`} onClick={() => setCurrent(1)} data-model="white">
            白色
          </span>
          <span className={`__selector ${current === 2 ? '__current' : ''}`} onClick={() => setCurrent(2)} data-model="gray">
            灰色
          </span>
          <span className={`__selector ${current === 3 ? '__current' : ''}`} onClick={() => setCurrent(3)} data-model="red">
            クラシック
            <br />
            レッド
          </span>
          <span className={`__selector ${current === 4 ? '__current' : ''}`} onClick={() => setCurrent(4)} data-model="navy">
            ネイビー
            <br />
            ブルー
          </span>
        </div>
      </div>

      <div className="section section--spec section--01">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">产品规格</h2>
            <table className="__basic">
              <tbody>
                <tr>
                  <th>产品名称</th>
                  <td>BALMUDA The Lantern</td>
                </tr>
                <tr>
                  <th>产品尺寸</th>
                  <td>幅 110mm × 奥行 103mm × 高さ 248mm（ハンドル含む）</td>
                </tr>
                <tr>
                  <th>机身重量</th>
                  <td>约630g</td>
                </tr>
                <tr>
                  <th>耗电量</th>
                  <td>最大6.0W(同時に点灯/充電した場合)、待机時0.1W</td>
                </tr>
                <tr>
                  <th>电源ケーブル長さ</th>
                  <td>1.0m</td>
                </tr>
                <tr>
                  <th>素材</th>
                  <td>本体：ABS、シェード部：PC、ハンドル・フレーム：SUS</td>
                </tr>
                <tr>
                  <th>充電电池</th>
                  <td>Ni-MH充電电池 3.6V/2000mAh（ニッケル水素電池）</td>
                </tr>
                <tr>
                  <th>电池充电时间</th>
                  <td>约6时间</td>
                </tr>
                <tr>
                  <th>电池充放电</th>
                  <td>约500回</td>
                </tr>
                <tr>
                  <th>连续使用时间</th>
                  <td>3〜50时间(最大照度〜最小照度)</td>
                </tr>
                <tr>
                  <th>防塵・防水性能</th>
                  <td>IP54（生活防水）</td>
                </tr>
                <tr>
                  <th>光源</th>
                  <td>暖色用：太陽光LED（色温度：1600K）／温白色用：白色LED（色温度：3000K）</td>
                </tr>
                <tr>
                  <th>全光束</th>
                  <td>约195lm</td>
                </tr>
                <tr>
                  <th>工作温度</th>
                  <td>5〜35℃</td>
                </tr>
                <tr>
                  <th>調光機能</th>
                  <td>無段階調光</td>
                </tr>
                <tr>
                  <th>包装</th>
                  <td>
                    BALMUDA The Lantern本体、ACアダプター、电源ケーブル、取扱説明書（保証書含む）
                  </td>
                </tr>
                <tr>
                  <th>颜色</th>
                  <td>
                    黑色（型号: L02A-BK、JAN 代码: 4560330119378）
                    <br />
                    白色（型号: L02A-WH、JAN 代码: 4560330119385）
                    <br />
                    灰色（型号: L02A-GR、JAN 代码: 4560330118319）
                    <br />
                    クラシックレッド（型号: L02A-RD、JAN 代码: 4560330118449）
                    <br />
                    ネイビーブルー（型号: L02A-NV、JAN 代码: 4560330118432）
                  </td>
                </tr>
                <tr></tr>
                <tr>
                  <th>产地</th>
                  <td>中国</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>
                    本製品は日本国内専用です。海外での使用は保証および修理受付の対象外となりますのでご注意ください。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="section section--spec section--02">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">同梱物一覧</h2>
            <img
              data-mobile="https://www.balmuda.com/jp/lantern/img/spec/mobile/section--02.png?20210421"
              data-desktop="https://www.balmuda.com/jp/lantern/img/spec/desktop/section--02.png?20210421"
              data-retina="https://www.balmuda.com/jp/lantern/img/spec/desktop/section--02.png?20210421"
              className="__image adaptiveimage"
              alt="本体（×１）、ACアダプター（×１）、电源ケーブル（×１）、取扱説明書（保証証含む）（×１）"
              src="https://www.balmuda.com/jp/lantern/img/spec/desktop/section--02.png?20210421"
            />
          </div>
        </div>
      </div>

      <div className="section_wrap" id="turn">
        <div className="section section--spec section--03">
          <div className="viewport scrollLoader fadeInUp lazyload">
            <div className="__top">
              <h2 className="section__title">使用方法</h2>
              <div className="__column ">
                <div className="__content">
                  <p>
                    本体のツマミを右に回すと点灯します。さらに回すと明るさが変化。明るさに応じて、ゆらぎのある光から温白色の光に変化します。左に回しきると、电源が切れます。
                  </p>
                </div>
                <div className="__img">
                  <img
                    src="https://www.balmuda.com/jp/lantern/img/spec/svg/section--03--figure.svg"
                    className="__figure"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="__bottom">
              <ul className="__light ">
                <li className="__light_item">
                  <img
                    data-mobile="https://www.balmuda.com/jp/lantern/img/spec/mobile/section--03--light--00.jpg?20210421"
                    data-desktop="https://www.balmuda.com/jp/lantern/img/spec/desktop/section--03--light--00.jpg?20210421"
                    data-retina="https://www.balmuda.com/jp/lantern/img/spec/desktop/section--03--light--00@2x.jpg?20210421"
                    className="__image adaptiveimage"
                    alt=""
                    src="https://www.balmuda.com/jp/lantern/img/spec/desktop/section--03--light--00@2x.jpg?20210421"
                  />
                  <div className="__light_info">
                    <p className="__light_text">ゆらぎのある光</p>
                    <a
                      className="__light_button video_play __is_desktop"
											onClick={handlePlay}
                      href="javascript:void(0);"
                      data-video-target="spec_yuragi">
                      ビデオを再生
                    </a>
                  </div>
                </li>
                <li className="__light_item">
                  <img
                    data-mobile="https://www.balmuda.com/jp/lantern/img/spec/mobile/section--03--light--01.jpg?20210421"
                    data-desktop="https://www.balmuda.com/jp/lantern/img/spec/desktop/section--03--light--01.jpg?20210421"
                    data-retina="https://www.balmuda.com/jp/lantern/img/spec/desktop/section--03--light--01@2x.jpg?20210421"
                    className="__image adaptiveimage"
                    alt=""
                    src="https://www.balmuda.com/jp/lantern/img/spec/desktop/section--03--light--01@2x.jpg?20210421"
                  />
                  <div className="__light_info">
                    <p className="__light_text">暖色の光</p>
                  </div>
                </li>
                <li className="__light_item">
                  <img
                    data-mobile="https://www.balmuda.com/jp/lantern/img/spec/mobile/section--03--light--02.jpg?20210421"
                    data-desktop="https://www.balmuda.com/jp/lantern/img/spec/desktop/section--03--light--02.jpg?20210421"
                    data-retina="https://www.balmuda.com/jp/lantern/img/spec/desktop/section--03--light--02@2x.jpg?20210421"
                    className="__image adaptiveimage"
                    alt=""
                    src="https://www.balmuda.com/jp/lantern/img/spec/desktop/section--03--light--02@2x.jpg?20210421"
                  />
                  <div className="__light_info">
                    <p className="__light_text">温白色の光</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={`section_overlay section_overlay--v3 ${playing ? 'visible':''}`} id="overlay--spec_yuragi">
            <div className="section_overlay_inner">
              <video
                controls
                id="spec_yuragi"
                width="100%"
								onEnded={handleEnded}
                poster="https://www.balmuda.com/jp/lantern/img/spec/movie/poster.jpg"
                data-log="lantern_spec_yuragi">
                <source
                  src="//s3.balmuda.com/www/jp/lantern/movie/yuragi.mp4?20210421"
                  type="video/mp4"
                />
              </video>
              <div className="video_stop __is_desktop" data-video-target="spec_yuragi" onClick={handleEnded}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--spec section--04 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">获奖经历</h2>
            <p>
              BALMUDA The Lanternは、2020年度 キッズ设计賞・グッド设计賞を受賞しました。
            </p>

            <div className="columns cf">
              <div className="column __award__kids--2020">
                <p>
                  キッズ设计賞は「子どもたちの安全・安心に貢献する设计」「子どもたちの創造性と未来を拓く设计」「子どもたちを産み育てやすい设计」の3つの視点において優れた製品が選ばれます。
                </p>
              </div>
              <div className="column __award__gd">
                <p>
                  该奖项由公益财团法人日本设计振兴会主办，创立于1957年，是日本唯一的综合性设计奖，吸引了国内外众多企业和设计师参加。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
