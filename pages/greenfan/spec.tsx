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
              <Link href="/greenfan/feature">風の気持ちよさ</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design ">
              <Link href="/greenfan/design">使いやすさ</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story ">
              <Link href="/greenfan/story">ストーリー</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec __current">
              <Link href="/greenfan/spec">スペック</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=EGF-1700"
              className="btn btn--pagemap">
              購入
            </a>
          </div>
        </div>
      </div>

      <div className="section section--spec section--00">
        <img
          src="//www.balmuda.com/jp/greenfan/img/spec/mobile/section--00.jpg"
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
                  <td>幅 330mm × 奥行き 320mm × 高さ 871mm（フロア）／ 497mm（卓上）</td>
                </tr>
                <tr>
                  <th>本体重量</th>
                  <td>約4.1kg</td>
                </tr>
                <tr>
                  <th>電源</th>
                  <td>AC100V　50/60Hz（ACアダプター）</td>
                </tr>
                <tr>
                  <th>消費電力</th>
                  <td>1.5W 〜 20W（バッテリー非充電時）</td>
                </tr>
                <tr>
                  <th>電源コード長さ</th>
                  <td>約1.8m（ACアダプター コード長）</td>
                </tr>
                <tr>
                  <th>保証期間</th>
                  <td>お買い上げ日から2年間</td>
                </tr>
                <tr>
                  <th>パッケージ内容</th>
                  <td>本体、リモコン、マルチプラグアダプター、取扱説明書（保証書付）</td>
                </tr>
                <tr>
                  <th>カラー</th>
                  <td>ホワイト×ブラック (型番 : EGF-1700-WK、JANコード : 4560330110207）</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>ホワイト×グレー (型番 : EGF-1700-WG、JANコード : 4560330110214）</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>ダークグレー×ブラック (型番 : EGF-1700-DK、JANコード : 4560330110238）</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>
                    ホワイト × シャンパンゴールド (型番 : EGF-1700-WC、JANコード : 4560330110221）
                  </td>
                </tr>
                <tr>
                  <th>生産地</th>
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
              data-mobile="//www.balmuda.com/jp/greenfan/img/spec/mobile/spec--00.jpg?20210408"
              data-desktop="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--00.jpg?20210408"
              data-retina="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--00@2x.jpg?20210408"
              src="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--00@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--01">
            <img
              data-mobile="//www.balmuda.com/jp/greenfan/img/spec/mobile/spec--01.jpg?20210408"
              data-desktop="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--01.jpg?20210408"
              data-retina="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--01@2x.jpg?20210408"
              src="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--01@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--02">
            <img
              data-mobile="//www.balmuda.com/jp/greenfan/img/spec/mobile/spec--02.jpg?20210408"
              data-desktop="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--02.jpg?20210408"
              data-retina="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--02@2x.jpg?20210408"
              src="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--02@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--03">
            <img
              data-mobile="//www.balmuda.com/jp/greenfan/img/spec/mobile/spec--03.jpg?20210408"
              data-desktop="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--03.jpg?20210408"
              data-retina="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--03@2x.jpg?20210408"
              src="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--03@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--07">
            <img
              data-mobile="//www.balmuda.com/jp/greenfan/img/spec/mobile/spec--07.jpg?20210408"
              data-desktop="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--07.jpg?20210408"
              data-retina="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--07@2x.jpg?20210408"
              src="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--07@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--09">
            <img
              data-mobile="//www.balmuda.com/jp/greenfan/img/spec/mobile/spec--09.jpg?20210408"
              data-desktop="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--09.jpg?20210408"
              data-retina="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--09@2x.jpg?20210408"
              src="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--09@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--10">
            <img
              data-mobile="//www.balmuda.com/jp/greenfan/img/spec/mobile/spec--10.jpg?20210408"
              data-desktop="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--10.jpg?20210408"
              data-retina="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--10@2x.jpg?20210408"
              src="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--10@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--04">
            <img
              data-mobile="//www.balmuda.com/jp/greenfan/img/spec/mobile/spec--04.jpg?20210408"
              data-desktop="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--04.jpg?20210408"
              data-retina="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--04@2x.jpg?20210408"
              src="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--04@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--05">
            <img
              data-mobile="//www.balmuda.com/jp/greenfan/img/spec/mobile/spec--05.jpg?20210408"
              data-desktop="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--05.jpg?20210408"
              data-retina="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--05@2x.jpg?20210408"
              src="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--05@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--06">
            <img
              data-mobile="//www.balmuda.com/jp/greenfan/img/spec/mobile/spec--06.jpg?20210408"
              data-desktop="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--06.jpg?20210408"
              data-retina="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--06@2x.jpg?20210408"
              src="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--06@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--11">
            <img
              data-mobile="//www.balmuda.com/jp/greenfan/img/spec/mobile/spec--11.jpg?20210408"
              data-desktop="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--11.jpg?20210408"
              data-retina="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--11@2x.jpg?20210408"
              src="//www.balmuda.com/jp/greenfan/img/spec/desktop/spec--11@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
        </ReactSlick>
      </div>
      <div className="section section--spec section--03">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">性能／運転モード</h2>
            <div className="__wrapper">
              <table className="__basic">
                <tbody>
                  <tr>
                    <th>1日の電気代の目安</th>
                    <td>0.4円 (*1)</td>
                  </tr>
                  <tr>
                    <th>最小動作音</th>
                    <td>13dB (*2)</td>
                  </tr>
                  <tr>
                    <th>風の届く距離</th>
                    <td>15m</td>
                  </tr>
                  <tr>
                    <th>風量調節</th>
                    <td>4段階</td>
                  </tr>
                  <tr>
                    <th>切タイマー</th>
                    <td>1・2・3・4時間</td>
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
                      モーター異常検知、バッテリー異常検知、異常電圧検知、オートパワーオフ(18時間無操作のとき)
                      (*3)
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className="note">
                *1
                電気代は最弱運転で1日8時間運転した場合の目安です。電気料金は1kWhあたり27円で計算しています。
                <br />
                *2 最小動作音は、無響室にて製品から距離1m地点で計測した値です。
                <br />
                *3 型番 :
                EGF-1700からオートパワーオフが作動する無操作時間が、12時間から18時間に延長しました。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
