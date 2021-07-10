import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'

export default function ProductDetail() {
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/toaster/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/toaster/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <a href="/toaster/" className="pagemap__content--logo">
            <img
              className="w-full"
              src="/_theme/img/svg/balmuda-the-toaster.min.svgz"
              alt="BALMUDA The Toaster"
            />
          </a>
          <ul className="pagemap__main" id="greedynav-links">
            <li className={`pagemap__content__item `}>
              <Link href="/toaster/index">概要</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/taste">特別なおいしさ</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/technology">トーストを科学する</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/howto">使い方</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/story">ストーリー</Link>
            </li>
            <li className={`pagemap__content__item __current`}>
              <Link href="/toaster/spec">スペック</Link>
            </li>
          </ul>
          <div className="pagemap__dropdown hidden" id="greedynav--btn">
            <span className="pagemap__dropdown__btn"></span>
            <ul className="pagemap__dropdown__content"></ul>
          </div>
          <div className="pagemap__btns">
            <a
              href="//store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=K05A"
              className="btn btn--pagemap">
              購入
            </a>
          </div>
        </div>

        <div className="modal__cashless">
          <div className="modal__cashless__box">
            <p className="modal__cashless__txt">
              オンラインストア、正規販売店で30日間返金保証。ぜひお試しください。
            </p>
            <a href="//www.balmuda.com/jp/toaster/30-days" className="modal__cashless__link">
              詳しくはこちら
            </a>
            <div className="modal__cashless__btn"></div>
          </div>
        </div>
      </div>

      <div className="section section--spec section--00">
        <img
          src="//www.balmuda.com/jp/toaster/img/spec/mobile/section--00.jpg"
          className="__image __is_mobile"
        />
      </div>
      <div className="section section--spec section--01">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">製品仕様</h2>
            <table className="__basic">
              <tbody>
                <tr>
                  <th>本体寸法</th>
                  <td>357mm（幅）× 321mm（奥行き）× 209mm（高さ）</td>
                </tr>
                <tr>
                  <th>庫内寸法</th>
                  <td>274mm（幅）× 204mm（奥行き）× 178mm（高さ）</td>
                </tr>
                <tr>
                  <th>製品重量</th>
                  <td>約4.4kg</td>
                </tr>
                <tr>
                  <th>電源</th>
                  <td>AC100V 50Hz/60Hz</td>
                </tr>
                <tr>
                  <th>定格消費電力</th>
                  <td>1300W</td>
                </tr>
                <tr>
                  <th>電源コード長さ</th>
                  <td>約1m</td>
                </tr>
                <tr>
                  <th>カラー</th>
                  <td>ブラック (型番 : K05A-BK、JANコード : 4560330110139）</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>ホワイト (型番 : K05A-WH、JANコード : 4560330110146）</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>ベージュ (型番 : K05A-BG、JANコード : 4560330110153）</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>グレー (型番 : K05A-GR、JANコード : 4560330110665）</td>
                </tr>
                <tr>
                  <th>生産地</th>
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
        <div className="__selector_wrap">
          <span className="__selector __current" data-model="black">
            ブラック
          </span>
          <span className="__selector" data-model="white">
            ホワイト
          </span>
          <span className="__selector" data-model="beige">
            ベージュ
          </span>
          <span className="__selector" data-model="gray">
            グレー
          </span>
        </div>
        <div className="__image_outer __is_desktop">
          <div className="__image_inner">
            <img
              data-desktop="//www.balmuda.com/jp/toaster/img/spec/desktop/black.jpg?20210501"
              data-retina="//www.balmuda.com/jp/toaster/img/spec/desktop/black@2x.jpg?20210501"
              src="//www.balmuda.com/jp/toaster/img/spec/desktop/black@2x.jpg?20210501"
              className="adaptiveimage __image __current"
              data-model="black"
              alt=""
            />
            <img
              data-desktop="//www.balmuda.com/jp/toaster/img/spec/desktop/white.jpg?20210501"
              data-retina="//www.balmuda.com/jp/toaster/img/spec/desktop/white@2x.jpg?20210503"
              src="//www.balmuda.com/jp/toaster/img/spec/desktop/white@2x.jpg?20210503"
              className="adaptiveimage __image"
              data-model="white"
              alt=""
            />
            <img
              data-desktop="//www.balmuda.com/jp/toaster/img/spec/desktop/beige.jpg?20210501"
              data-retina="//www.balmuda.com/jp/toaster/img/spec/desktop/beige@2x.jpg?20210502"
              src="//www.balmuda.com/jp/toaster/img/spec/desktop/beige@2x.jpg?20210502"
              className="adaptiveimage __image"
              data-model="beige"
              alt=""
            />
            <img
              data-desktop="//www.balmuda.com/jp/toaster/img/spec/desktop/gray.jpg?20210501"
              data-retina="//www.balmuda.com/jp/toaster/img/spec/desktop/gray@2x.jpg?20210501"
              src="//www.balmuda.com/jp/toaster/img/spec/desktop/gray@2x.jpg?20210501"
              className="adaptiveimage __image"
              data-model="gray"
              alt=""
            />
          </div>
        </div>
        <div className="__image_outer __is_mobile">
          <div
            className="__image_inner slick-initialized slick-slider slick-dotted"
            id="toaster--spec">
            <div className="slick-list draggable">
              <div
                className="slick-track"
                style={{ opacity: 1, width: 0, transform: 'translate3d(0px, 0px, 0px)' }}>
                <div
                  className="slick-slide slick-cloned"
                  data-slick-index="-1"
                  aria-hidden="true"
                  style={{ width: 0 }}
                  tabIndex={-1}>
                  <div>
                    <div
                      className="__image_item"
                      style={{ width: '100%', display: 'inline-block' }}>
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/black--02.jpg"
                        className="__image adaptiveimage slick--lazy __current"
                        data-model="black"
                        alt=""
                      />
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/white--02.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="white"
                        alt=""
                      />
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/beige--02.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="beige"
                        alt=""
                      />
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/gray--02.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="gray"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-current slick-active"
                  data-slick-index="0"
                  aria-hidden="false"
                  style={{ width: 0 }}
                  role="tabpanel"
                  id="slick-slide00">
                  <div>
                    <div
                      className="__image_item"
                      style={{ width: '100%', display: 'inline-block' }}>
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/black--00.jpg"
                        className="__image adaptiveimage slick--lazy __current"
                        data-model="black"
                        alt=""
                      />
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/white--00.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="white"
                        alt=""
                      />
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/beige--00.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="beige"
                        alt=""
                      />
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/gray--00.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="gray"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide"
                  data-slick-index="1"
                  aria-hidden="true"
                  style={{ width: 0 }}
                  tabIndex={-1}
                  role="tabpanel"
                  id="slick-slide01">
                  <div>
                    <div
                      className="__image_item"
                      style={{ width: '100%', display: 'inline-block' }}>
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/black--01.jpg"
                        className="__image adaptiveimage slick--lazy __current"
                        data-model="black"
                        alt=""
                      />
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/white--01.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="white"
                        alt=""
                      />
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/beige--01.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="beige"
                        alt=""
                      />
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/gray--01.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="gray"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide"
                  data-slick-index="2"
                  aria-hidden="true"
                  style={{ width: 0 }}
                  tabIndex={-1}
                  role="tabpanel"
                  id="slick-slide02">
                  <div>
                    <div
                      className="__image_item"
                      style={{ width: '100%', display: 'inline-block' }}>
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/black--02.jpg"
                        className="__image adaptiveimage slick--lazy __current"
                        data-model="black"
                        alt=""
                      />
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/white--02.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="white"
                        alt=""
                      />
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/beige--02.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="beige"
                        alt=""
                      />
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/gray--02.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="gray"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-cloned"
                  data-slick-index="3"
                  aria-hidden="true"
                  style={{ width: 0 }}
                  tabIndex={-1}>
                  <div>
                    <div
                      className="__image_item"
                      style={{ width: '100%', display: 'inline-block' }}>
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/black--00.jpg"
                        className="__image adaptiveimage slick--lazy __current"
                        data-model="black"
                        alt=""
                      />
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/white--00.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="white"
                        alt=""
                      />
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/beige--00.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="beige"
                        alt=""
                      />
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/gray--00.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="gray"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-cloned"
                  data-slick-index="4"
                  aria-hidden="true"
                  style={{ width: 0 }}
                  tabIndex={-1}>
                  <div>
                    <div
                      className="__image_item"
                      style={{ width: '100%', display: 'inline-block' }}>
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/black--01.jpg"
                        className="__image adaptiveimage slick--lazy __current"
                        data-model="black"
                        alt=""
                      />
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/white--01.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="white"
                        alt=""
                      />
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/beige--01.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="beige"
                        alt=""
                      />
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/gray--01.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="gray"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-cloned"
                  data-slick-index="5"
                  aria-hidden="true"
                  style={{ width: 0 }}
                  tabIndex={-1}>
                  <div>
                    <div
                      className="__image_item"
                      style={{ width: '100%', display: 'inline-block' }}>
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/black--02.jpg"
                        className="__image adaptiveimage slick--lazy __current"
                        data-model="black"
                        alt=""
                      />
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/white--02.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="white"
                        alt=""
                      />
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/beige--02.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="beige"
                        alt=""
                      />
                      <img
                        src="//www.balmuda.com/jp/toaster/img/spec/mobile/gray--02.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="gray"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="slick-dots" style={{ display: 'block' }} role="tablist">
              <li className="slick-active" role="presentation">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control00"
                  aria-controls="slick-slide00"
                  aria-label="1 of 3"
                  tabIndex={0}
                  aria-selected="true">
                  1
                </button>
              </li>
              <li role="presentation">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control01"
                  aria-controls="slick-slide01"
                  aria-label="2 of 3"
                  tabIndex={-1}>
                  2
                </button>
              </li>
              <li role="presentation">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control02"
                  aria-controls="slick-slide02"
                  aria-label="3 of 3"
                  tabIndex={-1}>
                  3
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section section--spec section--03">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">性能／運転モード</h2>
            <table className="__basic">
              <tbody>
                <tr>
                  <th>タイマー</th>
                  <td>1～10 ・ 15分</td>
                </tr>
                <tr>
                  <th>運転モード</th>
                  <td>
                    1. トーストモード
                    <br />
                    2. チーズトーストモード
                    <br />
                    3. フランスパンモード
                    <br />
                    4. クロワッサンモード
                    <br />
                    5. クラシックモード (170、200、230°C)
                  </td>
                </tr>
                <tr>
                  <th>スチーム</th>
                  <td>5ccボイラー</td>
                </tr>
              </tbody>
            </table>

            <h2 className="section__title">同梱物</h2>
            <div className="initems">
              <div className="initems__desc">
                <p>5ccカップ、取扱説明書（保証書付き）、ガイドブック</p>
              </div>
              <div className="initems__img">
                <img
                  data-mobile="//www.balmuda.com/jp/toaster/img/spec/mobile/img1.jpg?2021"
                  data-desktop="//www.balmuda.com/jp/toaster/img/spec/desktop/img1.jpg?2021"
                  data-retina="//www.balmuda.com/jp/toaster/img/spec/desktop/img1@2x.jpg?2021"
                  className="__image adaptiveimage"
                  src="//www.balmuda.com/jp/toaster/img/spec/desktop/img1@2x.jpg?2021"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--spec section--04 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">受賞歴</h2>
            <p>
              1957年に創設された日本で唯一の総合的なデザイン賞「グッドデザイン賞」にて、BALMUDA The
              Toasterは、2015年度 グッドデザイン賞
              金賞、同年のグッドデザイン・ベスト100に選出されました。
            </p>

            <div className="columns cf">
              <div className="column __award__gd--gold">
                <p>
                  グッドデザイン賞
                  金賞は、グッドデザイン賞審査委員会がもっとも優れていると評価したデザインに贈られます。BALMUDA
                  The
                  Toasterのデザイン性は、ひとの暮らしを豊かにするという視点で優れていると高く評価されました。
                </p>
              </div>
              <div className="column __award__gd--best100">
                <p>
                  グッドデザイン・ベスト100は、グッドデザイン賞を受賞した製品の中から特に高い評価を得た100件です。BALMUDA
                  The Toasterは2015年度グッドデザイン・ベスト100に選出されました。
                </p>
              </div>
              <div className="column __award__gd">
                <p>
                  公益財団法人日本デザイン振興会が主催する、1957年に創設された日本で唯一の総合的なデザイン賞で、国内外の多くの企業やデザイナーが参加しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
