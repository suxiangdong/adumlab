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
          href="/pot/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/pot/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <a href="/pot/" className="pagemap__content--logo">
            <img src="/_theme/img/svg/balmuda-the-pot.min.svgz" alt="BALMUDA The Pot" />
          </a>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/pot/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design ">
              <Link href="/pot/design">设计</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story ">
              <Link href="/pot/story">故事</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec __current">
              <Link href="/pot/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__dropdown hidden" id="greedynav--btn">
            <span className="pagemap__dropdown__btn"></span>
            <ul className="pagemap__dropdown__content"></ul>
          </div>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=K02A"
              className="btn btn--pagemap">
              購入
            </a>
          </div>
        </div>
      </div>

      <div className="section section--spec section--00">
        <ReactSlick
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          dots={true}
          dotsClass={'slick_selector_wrapper'}
          customPaging={(i) => (
            <span className="slick_selector __black mx-1" data-slick-option="0">
              {i === 0 ? 'ブラック' : 'ホワイト'}
            </span>
          )}
          className="spec_model_image slick-initialized">
          <div className="bk">
            <img
              data-mobile="//www.balmuda.com/jp/pot/img/spec/mobile/bk.jpg?20200929"
              data-desktop="//www.balmuda.com/jp/pot/img/spec/desktop/bk.jpg?20200929"
              data-retina="//www.balmuda.com/jp/pot/img/spec/desktop/bk@2x.jpg?20200929"
              className="__image adaptiveimage"
              src="//www.balmuda.com/jp/pot/img/spec/desktop/bk@2x.jpg?20200929"
            />
          </div>
          <div className="wh">
            <img
              data-mobile="//www.balmuda.com/jp/pot/img/spec/mobile/wh.jpg?20200929"
              data-desktop="//www.balmuda.com/jp/pot/img/spec/desktop/wh.jpg?20200929"
              data-retina="//www.balmuda.com/jp/pot/img/spec/desktop/wh@2x.jpg?20200929"
              className="__image adaptiveimage"
              src="//www.balmuda.com/jp/pot/img/spec/desktop/wh@2x.jpg?20200929"
            />
          </div>
        </ReactSlick>
      </div>

      <div className="section section--spec section--01">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">製品仕様</h2>
            <table className="__basic">
              <tbody>
                <tr>
                  <th>本体寸法</th>
                  <td>本体のみ : 幅 269mm × 奥行き 128mm × 高さ 170mm</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>電源ベース込み : 幅 269mm × 奥行き 142mm × 高さ 194mm</td>
                </tr>
                <tr>
                  <th>本体重量</th>
                  <td>本体 : 約0.6kg</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>電源ベース : 約0.3kg</td>
                </tr>
                <tr>
                  <th>容量</th>
                  <td>0.6L（リットル）</td>
                </tr>
                <tr>
                  <th>電源</th>
                  <td>AC100V　50Hz/60Hz</td>
                </tr>
                <tr>
                  <th>定格消費電力</th>
                  <td>1200W</td>
                </tr>
                <tr>
                  <th>電源コード長さ</th>
                  <td>1.3m</td>
                </tr>
                <tr>
                  <th>素材</th>
                  <td>本体：ステンレス　フタ、取っ手：ポリプロピレン</td>
                </tr>
                <tr>
                  <th>安全機能</th>
                  <td>空だき防止機能、自動電源OFF機能</td>
                </tr>
                <tr>
                  <th>沸騰時間の目安</th>
                  <td>
                    200ml 約1分半 ／ 600ml（満水時）約3分
                    <br />
                    *水温25度の場合の目安。使用環境により前後します。
                  </td>
                </tr>
                <tr>
                  <th>保証期間</th>
                  <td>お買い上げ日から1年間</td>
                </tr>
                <tr>
                  <th>パッケージ内容</th>
                  <td>本体、フタ、電源ベース、取扱説明書（保証書付）</td>
                </tr>
                <tr>
                  <th>カラー</th>
                  <td>ブラック (型番 : K02A-BK、JANコード : 4560330117718）</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>ホワイト (型番 : K02A-WH、JANコード : 4560330117725）</td>
                </tr>
                <tr>
                  <th>生産地</th>
                  <td>台湾、中国</td>
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

      <div className="section section--spec section--02 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">各部の名前</h2>
            <div className="__imagewrap">
              <img
                data-mobile="//www.balmuda.com/jp/pot/img/spec/mobile/wire.png"
                data-desktop="//www.balmuda.com/jp/pot/img/spec/desktop/wire.png"
                data-retina="//www.balmuda.com/jp/pot/img/spec/desktop/wire@2x.png"
                className="__image adaptiveimage"
                src="//www.balmuda.com/jp/pot/img/spec/desktop/wire@2x.png"
              />
            </div>
            <p>
              電源コードは電源ベース裏の電源コードホルダーに収納することができます。設置の際は適切な長さに調節し、ご使用ください。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--spec section--03 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">お手入れについて</h2>
            <div className="__imagewrap">
              <img
                data-mobile="//www.balmuda.com/jp/pot/img/spec/mobile/maintenance.png"
                data-desktop="//www.balmuda.com/jp/pot/img/spec/desktop/maintenance.png"
                data-retina="//www.balmuda.com/jp/pot/img/spec/desktop/maintenance@2x.png"
                className="__image adaptiveimage"
                src="//www.balmuda.com/jp/pot/img/spec/desktop/maintenance@2x.png"
              />
            </div>
            <p>
              本体（内側）は水ですすぎ洗いしてください。本体（外側）、電源ベース部、フタは、水をやわらかい布などに染み込ませ、固く絞って拭いてください。
            </p>
            <p className="note">
              *
              本体内側の汚れが気になってきたら、市販の顆粒タイプのクエン酸でつけ置き洗いが可能です。詳しくは取り扱い説明書をご覧ください。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--spec section--04 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">受賞歴</h2>
            <p>
              BALMUDA The
              Potは、2017年度グッド设计賞、2017年度iF设计・アワード（ドイツ）、2017年度レッドドット设计・アワード（ドイツ）など国際的に権威のある设计賞を受賞し、世界各国に認められています。
            </p>
            <p></p>
            <div className="columns cf">
              <div className="column __award__gd">
                <p>
                  公益財団法人日本设计振興会が主催する、1957年に創設された日本で唯一の総合的な设计賞で、国内外の多くの企業やデザイナーが参加しています。
                </p>
              </div>
              <div className="column __award__if">
                <p>
                  ドイツ「iF International Forum Design
                  GmbH」が主催する半世紀以上の歴史がある世界的に権威ある设计賞で、全世界の工業製品を対象に優れた工業设计を選定しています。
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
