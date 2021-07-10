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
          href="/greenfan-cirq/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/greenfan-cirq/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <a href="/greenfan-cirq/" className="pagemap__content--logo">
            <img
              className="w-full"
              src="/_theme/img/svg/balmuda-greenfan-cirq.min.svgz"
              alt="GreenFan Cirq"
            />
          </a>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/greenfan-cirq/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--features">
              <Link href="/greenfan-cirq/features">室温が変わる</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology ">
              <Link href="/greenfan-cirq/technology">15m先まで</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design ">
              <Link href="/greenfan-cirq/design">デザイン</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--specs __current">
              <Link href="/greenfan-cirq/specs">スペック</Link>
            </li>
          </ul>

          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=EGF-3300-WK"
              className="btn btn--pagemap">
              購入
            </a>
          </div>
        </div>
      </div>

      <div className="section section--specs section--00">
        <img
          data-mobile="//www.balmuda.com/jp/greenfan-cirq/img/specs/mobile/section--00.jpg"
          data-desktop="//www.balmuda.com/jp/greenfan-cirq/img/specs/desktop/section--00.jpg"
          data-retina="//www.balmuda.com/jp/greenfan-cirq/img/specs/desktop/section--00@2x.jpg"
          className="adaptiveimage"
          src="//www.balmuda.com/jp/greenfan-cirq/img/specs/desktop/section--00@2x.jpg"
        />
      </div>
      <div className="section section--specs section--01">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">製品仕様</h2>
            <table className="__basic">
              <tbody>
                <tr>
                  <th>製品名</th>
                  <td>GreenFan Cirq（グリーンファンサーキュ）</td>
                </tr>
                <tr>
                  <th>本体寸法</th>
                  <td>340mm（幅）× 256mm（奥行き）× 360mm（高さ）</td>
                </tr>
                <tr>
                  <th>製品重量</th>
                  <td>約2.3kg</td>
                </tr>
                <tr>
                  <th>動作電力</th>
                  <td>AC100V 50/60Hz対応</td>
                </tr>
                <tr>
                  <th>コード長さ</th>
                  <td>約1.8m（ACアダプター コード長）</td>
                </tr>
                <tr>
                  <th>カラー</th>
                  <td>ホワイト×ブラック（型番：EGF-3300-WK）</td>
                </tr>
                <tr>
                  <th>
                    パッケージ
                    <br />
                    内容
                  </th>
                  <td>GreenFan Cirq本体、取扱説明書（保証書付き）、ACアダプター、リモコン</td>
                </tr>
                <tr>
                  <th>生産地</th>
                  <td>台湾</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="section section--specs section--02">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">性能／運転モード</h2>
            <table className="__basic">
              <tbody>
                <tr>
                  <th>消費電力</th>
                  <td>3W 〜 20W</td>
                </tr>
                <tr>
                  <th>最大回転数</th>
                  <td>850 rpm</td>
                </tr>
                <tr>
                  <th>最大風速</th>
                  <td>230 m/min</td>
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
                  <th>手動角度調整</th>
                  <td>水平（0°）〜 垂直上向き（90°）</td>
                </tr>
                <tr>
                  <th>本体操作</th>
                  <td>電源 ON／OFF、風量切り替え</td>
                </tr>
                <tr>
                  <th>リモコン操作</th>
                  <td>電源 ON／OFF、風量切り替え</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="section section--specs section--03 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title __wb">受賞歴</h2>
            <p>
              GreenFan
              Cirqは、国際的に最も権威のあるデザイン賞のひとつである、ドイツの「レッドドット・デザイン賞」を受賞し、革新性、機能性などが高く評価されています。
            </p>

            <div className="columns cf">
              <div className="column __award__rd">
                <p>
                  ドイツの「Design Zentrum Nordrhein
                  Westfalen」が主催する世界最大級のデザイン賞で、革新性、機能性、人間工学、耐久性など9つの審査基準に基づき、卓越したデザインが選定されます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
