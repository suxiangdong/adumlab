import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import ReactSlick from 'react-slick'

import Layout from '../../layouts/default'

export default function ProductDetail() {
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/greenfan/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/greenfan/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <a href="/greenfan/" className="pagemap__content--logo">
            <img
              className="w-full"
              src="/_theme/img/svg/the-greenfan.000.min.svgz"
              alt="The GreenFan"
            />
          </a>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/greenfan/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--feature ">
              <Link href="/greenfan/feature">先进性</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design ">
              <Link href="/greenfan/design">使用方法</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story ">
              <Link href="/greenfan/story">故事</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec __current">
              <Link href="/greenfan/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=EGF-1700"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="section section--spec section--00">
        <img
          src="https://www.balmuda.com/jp/greenfan/img/spec/mobile/section--00.jpg"
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
                  <th>产品尺寸</th>
                  <td>幅 330mm × 奥行き 320mm × 高さ 871mm（フロア）／ 497mm（卓上）</td>
                </tr>
                <tr>
                  <th>机身重量</th>
                  <td>约4.1kg</td>
                </tr>
                <tr>
                  <th>电源</th>
                  <td>AC100V　50/60Hz（ACアダプター）</td>
                </tr>
                <tr>
                  <th>耗电量</th>
                  <td>1.5W 〜 20W（电池非充電時）</td>
                </tr>
                <tr>
                  <th>电源线长度</th>
                  <td>约1.8m（交流适配器的电线长度）</td>
                </tr>
                <tr>
                  <th>保修期限</th>
                  <td>お買い上げ日から2年間</td>
                </tr>
                <tr>
                  <th>包装内容</th>
                  <td>本体、遥控器、マルチプラグアダプター、取扱説明書（保証書付）</td>
                </tr>
                <tr>
                  <th>颜色</th>
                  <td>白色×黑色 (型番 : EGF-1700-WK、JANコード : 4560330110207）</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>白色×灰色 (型番 : EGF-1700-WG、JANコード : 4560330110214）</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>ダーク灰色×黑色 (型番 : EGF-1700-DK、JANコード : 4560330110238）</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>
                    白色 × シャンパンゴールド (型番 : EGF-1700-WC、JANコード : 4560330110221）
                  </td>
                </tr>
                <tr>
                  <th>产地</th>
                  <td>日本</td>
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
        <ReactSlick arrows={false} dots className="spec--image" id="spec--image">
          <div className="spec--00">
            <img
              data-mobile="https://www.balmuda.com/jp/greenfan/img/spec/mobile/spec--00.jpg?20210408"
              data-desktop="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--00.jpg?20210408"
              data-retina="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--00@2x.jpg?20210408"
              src="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--00@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--01">
            <img
              data-mobile="https://www.balmuda.com/jp/greenfan/img/spec/mobile/spec--01.jpg?20210408"
              data-desktop="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--01.jpg?20210408"
              data-retina="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--01@2x.jpg?20210408"
              src="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--01@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--02">
            <img
              data-mobile="https://www.balmuda.com/jp/greenfan/img/spec/mobile/spec--02.jpg?20210408"
              data-desktop="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--02.jpg?20210408"
              data-retina="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--02@2x.jpg?20210408"
              src="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--02@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--03">
            <img
              data-mobile="https://www.balmuda.com/jp/greenfan/img/spec/mobile/spec--03.jpg?20210408"
              data-desktop="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--03.jpg?20210408"
              data-retina="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--03@2x.jpg?20210408"
              src="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--03@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--07">
            <img
              data-mobile="https://www.balmuda.com/jp/greenfan/img/spec/mobile/spec--07.jpg?20210408"
              data-desktop="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--07.jpg?20210408"
              data-retina="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--07@2x.jpg?20210408"
              src="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--07@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--09">
            <img
              data-mobile="https://www.balmuda.com/jp/greenfan/img/spec/mobile/spec--09.jpg?20210408"
              data-desktop="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--09.jpg?20210408"
              data-retina="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--09@2x.jpg?20210408"
              src="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--09@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--10">
            <img
              data-mobile="https://www.balmuda.com/jp/greenfan/img/spec/mobile/spec--10.jpg?20210408"
              data-desktop="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--10.jpg?20210408"
              data-retina="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--10@2x.jpg?20210408"
              src="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--10@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--04">
            <img
              data-mobile="https://www.balmuda.com/jp/greenfan/img/spec/mobile/spec--04.jpg?20210408"
              data-desktop="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--04.jpg?20210408"
              data-retina="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--04@2x.jpg?20210408"
              src="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--04@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--05">
            <img
              data-mobile="https://www.balmuda.com/jp/greenfan/img/spec/mobile/spec--05.jpg?20210408"
              data-desktop="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--05.jpg?20210408"
              data-retina="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--05@2x.jpg?20210408"
              src="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--05@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--06">
            <img
              data-mobile="https://www.balmuda.com/jp/greenfan/img/spec/mobile/spec--06.jpg?20210408"
              data-desktop="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--06.jpg?20210408"
              data-retina="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--06@2x.jpg?20210408"
              src="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--06@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--11">
            <img
              data-mobile="https://www.balmuda.com/jp/greenfan/img/spec/mobile/spec--11.jpg?20210408"
              data-desktop="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--11.jpg?20210408"
              data-retina="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--11@2x.jpg?20210408"
              src="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--11@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
        </ReactSlick>
      </div>
      <div className="section section--spec section--03">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">性能／运转模式</h2>
            <div className="__wrapper">
              <table className="__basic">
                <tbody>
                  <tr>
                    <th>1日の電气代の目安</th>
                    <td>0.4円 (*1)</td>
                  </tr>
                  <tr>
                    <th>最小動作音</th>
                    <td>13dB (*2)</td>
                  </tr>
                  <tr>
                    <th>风の届く距離</th>
                    <td>15m</td>
                  </tr>
                  <tr>
                    <th>风量調節</th>
                    <td>4段階</td>
                  </tr>
                  <tr>
                    <th>切タイマー</th>
                    <td>1・2・3・4时间</td>
                  </tr>
                  <tr>
                    <th>自動首振り</th>
                    <td>左右それぞれ最大75°</td>
                  </tr>
                  <tr>
                    <th>手動角度調節</th>
                    <td>左右それぞれ75° ／上向きに19° ／下向きに11°</td>
                  </tr>
                  <tr>
                    <th>安全機能</th>
                    <td>
                      モーター異常検知、电池異常検知、異常電圧検知、オートパワーオフ(18时间無操作のとき)
                      (*3)
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className="note">
                *1
                電气代は最弱運転で1日8时间運転した場合の目安です。電气料金は1kWhあたり27円で計算しています。
                <br />
                *2 最小動作音は、無響室にて製品から距離1m地点で計測した値です。
                <br />
                *3 型番 :
                EGF-1700からオートパワーオフが作動する無操作时间が、12时间から18时间に延長しました。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
