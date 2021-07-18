import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'
import { useState } from 'react'

export default function ProductDetail() {
  const [isOpen, setIsOpen] = useState(false)

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
          href="/rain/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/rain/style/desktop.css?20210701173839"></link>
      </Head>

      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <Link href="/rain/">
            <a className="pagemap__content--logo">
              <img src="/_theme/img/svg/balmuda-rain.min.svgz" alt="Rain" />
            </a>
          </Link>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/rain/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--classic">
              <Link href="/rain/classic">经典先端</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--humidity ">
              <Link href="/rain/humidity">适宜的湿润度</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec __current">
              <Link href="/rain/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=ERN-1100SD-WK"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="section section--spec section--00">
        <img
          data-mobile="https://www.balmuda.com/jp/rain/img/spec/mobile/section--00.jpg"
          data-desktop="https://www.balmuda.com/jp/rain/img/spec/desktop/section--00.jpg"
          data-retina="https://www.balmuda.com/jp/rain/img/spec/desktop/section--00@2x.jpg"
          className="adaptiveimage"
          src="https://www.balmuda.com/jp/rain/img/spec/desktop/section--00@2x.jpg"
        />
      </div>

      <div className="section section--spec section--01">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">产品规格</h2>
            <table className="__basic">
              <tbody>
                <tr>
                  <th>产品名称</th>
                  <td>Rain スタンダードモデル</td>
                </tr>
                <tr>
                  <th>机身尺寸</th>
                  <td>幅 350mm × 奥行き 350mm × 374mm（高さ）</td>
                </tr>
                <tr>
                  <th>製品重量</th>
                  <td>约5.7kg（満水時 约10kg）</td>
                </tr>
                <tr>
                  <th>動作電力</th>
                  <td>AC100V 50/60Hz対応</td>
                </tr>
                <tr>
                  <th>コード長さ</th>
                  <td>1.8m（ACアダプター コード長）</td>
                </tr>
                <tr>
                  <th>颜色</th>
                  <td>白色 (型番 : ERN-1100SD-WK、JANコード : 4560330118982）</td>
                </tr>
                <tr>
                  <th>
                    パッケージ
                    <br />
                    内容
                  </th>
                  <td>
                    Rain本体、取扱説明書（保証書付き）、マルチプラグアダプター、加湿フィルター、酵素プレフィルター
                  </td>
                </tr>
                <tr>
                  <th>产地</th>
                  <td>中国</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="section section--spec section--02 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title __wb">
              マルチプラグ
              <br />
              アダプター
            </h2>
            <p>
              マルチプラグアダプターはコンセントの差し込み部分を取り外して、縦横の向きを変えることが可能。コンセントの状況に合わせて使えます。
            </p>
            <div id="animation_container" style={{ width: 219, height: 424 }}></div>
          </div>
        </div>
      </div>

      <div className="section section--spec section--03">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">性能／運転モード</h2>
            <table className="__basic mode">
              <tbody>
                <tr>
                  <th>加湿方式</th>
                  <td>気化式</td>
                </tr>
                <tr>
                  <th>運転モード</th>
                  <td className="mode_list">
                    <div>風量1</div>
                    <div>風量2</div>
                    <div>風量3</div>
                    <div>風量4</div>
                    <div>風量5</div>
                  </td>
                </tr>
                <tr>
                  <th>加湿能力目安 (*1)</th>
                  <td className="mode_list standard">
                    <div>150ml/h</div>
                    <div>250ml/h</div>
                    <div>400ml/h</div>
                    <div>500ml/h</div>
                    <div>600ml/h</div>
                  </td>
                </tr>
                <tr>
                  <th>耗电量</th>
                  <td>2W〜23W (*2)</td>
                </tr>
                <tr>
                  <th>運転音</th>
                  <td>6db〜42db</td>
                </tr>
                <tr>
                  <th>適用畳数目安</th>
                  <td>约17畳まで (*3)</td>
                </tr>
                <tr>
                  <th>給水ボウル容量</th>
                  <td>4.2L</td>
                </tr>
                <tr>
                  <th>連続加湿时间目安</th>
                  <td>6〜25时间</td>
                </tr>
              </tbody>
            </table>
            <p className="note">
              <span>*1 加湿能力は室温20℃、湿度30%の場合の最大値です。</span>
              <span>*2 最小耗电量（2W）はインジケーターの明るさが半減した場合です。</span>
              <span>
                *3 適用畳数は、（社）日本電機工業会規格（JEM
                1426）に基づいたプレハブ洋室の場合です。使用環境や残水量によって加湿能力が変化するため、適用畳数は目安です。
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="section section--spec section--04 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title __wb">
              各国の设计賞を
              <br />
              受賞
            </h2>
            <p>
              Rainは、レッドドット设计・アワード 2014（ドイツ）、グッド设计賞
              2014（日本）など、国際的に権威のある设计賞を受賞し、世界各国に認められています。
            </p>

            <div className="columns cf">
              <div className="column __award__gd">
                <p>
                  该奖项由公益财团法人日本设计振兴会主办，创立于1957年，是日本唯一的综合性设计奖，吸引了国内外众多企业和设计师参加。
                </p>
              </div>
              <div className="column __award__rd">
                <p>
                  ドイツの「Design Zentrum Nordrhein
                  Westfalen」が主催する世界最大級の设计賞で、革新性、機能性、人間工学、耐久性など9つの審査基準に基づき、卓越した设计が選定されます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
