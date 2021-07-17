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
            <li className="pagemap__content__item pagemap__content__item--setting">
              <Link href="/speaker/setting">设置</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec __current">
              <Link href="/speaker/spec">规格</Link>
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
      <div className="section section--spec section--00 scrollLoader lazyload loaded">
        <div className="__image_outer __is_desktop">
          <div className="__image_inner">
            <img
              data-desktop="//www.balmuda.com/jp/speaker/img/spec/desktop/section--00.jpg?20200326"
              data-retina="//www.balmuda.com/jp/speaker/img/spec/desktop/section--00@2x.jpg?20200326"
              src="//www.balmuda.com/jp/speaker/img/spec/desktop/section--00@2x.jpg?20200326"
              className="adaptiveimage __image"
              data-model="black"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="section section--spec section--01">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">製品仕様</h2>
            <table className="__basic">
              <tbody>
                <tr>
                  <th>製品名</th>
                  <td>BALMUDA The Speaker</td>
                </tr>
                <tr>
                  <th>本体寸法</th>
                  <td>直径 105mm × 高さ 188mm</td>
                </tr>
                <tr>
                  <th>本体重量</th>
                  <td>約1.0kg</td>
                </tr>
                <tr>
                  <th>消費電力</th>
                  <td>最大15W、待機時0.15W</td>
                </tr>
                <tr>
                  <th>内蔵バッテリー</th>
                  <td>
                    リチウムイオン
                    <br />
                    ポリマーバッテリー
                  </td>
                </tr>
                <tr>
                  <th>
                    バッテリー
                    <br />
                    充電時間
                  </th>
                  <td>約2.5時間</td>
                </tr>
                <tr>
                  <th>バッテリー充放電</th>
                  <td>約500回</td>
                </tr>
                <tr>
                  <th>
                    バッテリー
                    <br />
                    連続使用時間
                  </th>
                  <td>約7時間</td>
                </tr>
                <tr>
                  <th>スピーカー部</th>
                  <td>直径77mm（フルレンジ）</td>
                </tr>
                <tr>
                  <th>エンクロージャー方式</th>
                  <td>密閉型</td>
                </tr>
                <tr>
                  <th>アンプ部最大出力</th>
                  <td>8W</td>
                </tr>
                <tr>
                  <th>外部入力端子（AUX）</th>
                  <td>
                    3.5mm ステレオ
                    <br />
                    ミニジャック
                  </td>
                </tr>
                <tr>
                  <th>動作温度</th>
                  <td>0〜40℃</td>
                </tr>
                <tr>
                  <th>素材</th>
                  <td>
                    台座部：ABS、スピーカー部：ABS・鉄、透明パイプ部：アクリル、金属パイプ部：SUS・真鍮
                  </td>
                </tr>
                <tr>
                  <th>保証期間</th>
                  <td>お買い上げ日から１年間</td>
                </tr>
                <tr>
                  <th>パッケージ内容</th>
                  <td>本体、ACアダプター（1.0m）、取扱説明書（保証書含む）、スタートガイド</td>
                </tr>
                <tr>
                  <th>カラー</th>
                  <td>ブラック（型番: M01A-BK、JANコード: 4560330118234）</td>
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
            <h2 className="section__title section__title_sub">
              Bluetooth<sup>®</sup>仕様
            </h2>
            <table className="__basic">
              <tbody>
                <tr>
                  <th>通信方式</th>
                  <td>Bluetooth標準規格 ver.5.0</td>
                </tr>
                <tr>
                  <th>出力</th>
                  <td>Bluetooth標準規格 Power Class2</td>
                </tr>
                <tr>
                  <th>最大通信距離</th>
                  <td>約10 m</td>
                </tr>
                <tr>
                  <th>使用周波数帯域</th>
                  <td>2.4 GHz 帯</td>
                </tr>
                <tr>
                  <th>対応プロファイル</th>
                  <td>A2DP、AVRCP</td>
                </tr>
                <tr>
                  <th>対応コーデック</th>
                  <td>SBC</td>
                </tr>
                <tr>
                  <th>コンテンツ保護</th>
                  <td>対応（SCMS-T 方式）</td>
                </tr>
                <tr>
                  <th>伝送帯域（A2DP)</th>
                  <td>20 〜20,000 Hz（44.1 kHz サンプリング時）</td>
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
              data-mobile="//www.balmuda.com/jp/speaker/img/spec/mobile/section--02.png?20200326"
              data-desktop="//www.balmuda.com/jp/speaker/img/spec/desktop/section--02.png?20200326"
              data-retina="//www.balmuda.com/jp/speaker/img/spec/desktop/section--02@2x.png?20200326"
              className="__image adaptiveimage"
              alt="本体（×１）、ACアダプター（×１）、電源ケーブル（×１）、取扱説明書（保証証含む）（×１）"
              src="//www.balmuda.com/jp/speaker/img/spec/desktop/section--02@2x.png?20200326"
            />
          </div>
        </div>
      </div>

      <div className="section section--spec section--03 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">受賞歴</h2>
            <p>BALMUDA The Speakerは、2020年度 グッド设计賞を受賞しました。</p>

            <div className="columns cf">
              <div className="column __award__gd">
                <p>
                  公益財団法人日本设计振興会が主催する、1957年に創設された日本で唯一の総合的な设计賞で、国内外の多くの企業やデザイナーが参加しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
