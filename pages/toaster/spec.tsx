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
              <Link href="/toaster/taste">特别的美味</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/technology">科学与设计</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/howto">使用方法</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/story">故事</Link>
            </li>
            <li className={`pagemap__content__item __current`}>
              <Link href="/toaster/spec">规格</Link>
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
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="section section--spec section--00">
        <img
          src="https://www.balmuda.com/jp/toaster/img/spec/mobile/section--00.jpg"
          className="__image __is_mobile"
        />
      </div>
      <div className="section section--spec section--01">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">产品规格</h2>
            <table className="__basic">
              <tbody>
                <tr>
                  <th>机身尺寸</th>
                  <td>357毫米(宽)×321毫米(长)×209毫米(高)</td>
                </tr>
                <tr>
                  <th>库内尺寸</th>
                  <td>274mm(宽)×204mm(长)×178mm(高)</td>
                </tr>
                <tr>
                  <th>产品重量</th>
                  <td>约4.4kg</td>
                </tr>
                <tr>
                  <th>電源</th>
                  <td>AC100V 50Hz/60Hz</td>
                </tr>
                <tr>
                  <th>额定耗电量</th>
                  <td>1300W</td>
                </tr>
                <tr>
                  <th>电源线长度</th>
                  <td>约1m</td>
                </tr>
                <tr>
                  <th>彩色</th>
                  <td>黑色(型号:K05A-BK, JAN代码:4560330110139)</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>白色(型号:K05A-WH, JAN代码:4560330110146)</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>米色(型号:K05A-BG, JAN代码:4560330110153)</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>灰色(型号:K05A-GR, JAN代码:4560330110665)</td>
                </tr>
                <tr>
                  <th>产地</th>
                  <td>中国</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>本产品是日本国内专用的。请注意在海外的使用不属于保修及修理受理的对象。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="section section--spec section--02">
        <div className="__selector_wrap">
          <span className="__selector __current" data-model="black">
            黑色
          </span>
          <span className="__selector" data-model="white">
            白色
          </span>
          <span className="__selector" data-model="beige">
            米色
          </span>
          <span className="__selector" data-model="gray">
            灰色
          </span>
        </div>
        <div className="__image_outer __is_desktop">
          <div className="__image_inner">
            <img
              data-desktop="https://www.balmuda.com/jp/toaster/img/spec/desktop/black.jpg?20210501"
              data-retina="https://www.balmuda.com/jp/toaster/img/spec/desktop/black@2x.jpg?20210501"
              src="https://www.balmuda.com/jp/toaster/img/spec/desktop/black@2x.jpg?20210501"
              className="adaptiveimage __image __current"
              data-model="black"
              alt=""
            />
            <img
              data-desktop="https://www.balmuda.com/jp/toaster/img/spec/desktop/white.jpg?20210501"
              data-retina="https://www.balmuda.com/jp/toaster/img/spec/desktop/white@2x.jpg?20210503"
              src="https://www.balmuda.com/jp/toaster/img/spec/desktop/white@2x.jpg?20210503"
              className="adaptiveimage __image"
              data-model="white"
              alt=""
            />
            <img
              data-desktop="https://www.balmuda.com/jp/toaster/img/spec/desktop/beige.jpg?20210501"
              data-retina="https://www.balmuda.com/jp/toaster/img/spec/desktop/beige@2x.jpg?20210502"
              src="https://www.balmuda.com/jp/toaster/img/spec/desktop/beige@2x.jpg?20210502"
              className="adaptiveimage __image"
              data-model="beige"
              alt=""
            />
            <img
              data-desktop="https://www.balmuda.com/jp/toaster/img/spec/desktop/gray.jpg?20210501"
              data-retina="https://www.balmuda.com/jp/toaster/img/spec/desktop/gray@2x.jpg?20210501"
              src="https://www.balmuda.com/jp/toaster/img/spec/desktop/gray@2x.jpg?20210501"
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
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/black--02.jpg"
                        className="__image adaptiveimage slick--lazy __current"
                        data-model="black"
                        alt=""
                      />
                      <img
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/white--02.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="white"
                        alt=""
                      />
                      <img
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/beige--02.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="beige"
                        alt=""
                      />
                      <img
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/gray--02.jpg"
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
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/black--00.jpg"
                        className="__image adaptiveimage slick--lazy __current"
                        data-model="black"
                        alt=""
                      />
                      <img
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/white--00.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="white"
                        alt=""
                      />
                      <img
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/beige--00.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="beige"
                        alt=""
                      />
                      <img
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/gray--00.jpg"
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
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/black--01.jpg"
                        className="__image adaptiveimage slick--lazy __current"
                        data-model="black"
                        alt=""
                      />
                      <img
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/white--01.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="white"
                        alt=""
                      />
                      <img
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/beige--01.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="beige"
                        alt=""
                      />
                      <img
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/gray--01.jpg"
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
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/black--02.jpg"
                        className="__image adaptiveimage slick--lazy __current"
                        data-model="black"
                        alt=""
                      />
                      <img
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/white--02.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="white"
                        alt=""
                      />
                      <img
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/beige--02.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="beige"
                        alt=""
                      />
                      <img
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/gray--02.jpg"
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
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/black--00.jpg"
                        className="__image adaptiveimage slick--lazy __current"
                        data-model="black"
                        alt=""
                      />
                      <img
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/white--00.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="white"
                        alt=""
                      />
                      <img
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/beige--00.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="beige"
                        alt=""
                      />
                      <img
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/gray--00.jpg"
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
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/black--01.jpg"
                        className="__image adaptiveimage slick--lazy __current"
                        data-model="black"
                        alt=""
                      />
                      <img
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/white--01.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="white"
                        alt=""
                      />
                      <img
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/beige--01.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="beige"
                        alt=""
                      />
                      <img
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/gray--01.jpg"
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
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/black--02.jpg"
                        className="__image adaptiveimage slick--lazy __current"
                        data-model="black"
                        alt=""
                      />
                      <img
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/white--02.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="white"
                        alt=""
                      />
                      <img
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/beige--02.jpg"
                        className="__image adaptiveimage slick--lazy"
                        data-model="beige"
                        alt=""
                      />
                      <img
                        src="https://www.balmuda.com/jp/toaster/img/spec/mobile/gray--02.jpg"
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
            <h2 className="section__title">性能/运行模式</h2>
            <table className="__basic">
              <tbody>
                <tr>
                  <th>计时器</th>
                  <td>1～10 ・ 15分</td>
                </tr>
                <tr>
                  <th>运转模式</th>
                  <td>
                    1. 烤面包模式
                    <br />
                    2. 奶酪烤面包模式
                    <br />
                    3. 法国模式
                    <br />
                    4. 羊角面包模式
                    <br />
                    5. 经典模式(170、200、230°C)
                  </td>
                </tr>
                <tr>
                  <th>蒸汽</th>
                  <td>5cc锅炉</td>
                </tr>
              </tbody>
            </table>

            <h2 className="section__title">同捆物品</h2>
            <div className="initems">
              <div className="initems__desc">
                <p>5cc杯，使用说明书(附有保证书)，指南书</p>
              </div>
              <div className="initems__img">
                <img
                  data-mobile="https://www.balmuda.com/jp/toaster/img/spec/mobile/img1.jpg?2021"
                  data-desktop="https://www.balmuda.com/jp/toaster/img/spec/desktop/img1.jpg?2021"
                  data-retina="https://www.balmuda.com/jp/toaster/img/spec/desktop/img1@2x.jpg?2021"
                  className="__image adaptiveimage"
                  src="https://www.balmuda.com/jp/toaster/img/spec/desktop/img1@2x.jpg?2021"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--spec section--04 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">获奖经历</h2>
            <p>
              在1957年创设的日本唯一的综合性设计奖“good设计奖”中，BALMUDA The
              Toaster被评选为2015年度good设计奖金奖、同年good设计·best 100。
            </p>

            <div className="columns cf">
              <div className="column __award__gd--gold">
                <p>
                  优秀设计奖金奖是由优秀设计奖审查委员会评为最优秀的设计颁发的。BALMUDA The
                  Toaster的设计性，从丰富人的生活的角度来看，被高度评价。
                </p>
              </div>
              <div className="column __award__gd--best100">
                <p>
                  最佳设计100是从获得最佳设计奖的产品中获得特别高评价的100件。BALMUDA The
                  Toaster被选为2015年度最佳设计100强。
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
