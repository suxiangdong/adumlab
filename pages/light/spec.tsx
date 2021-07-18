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
          href="/light/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/light/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <Link href="/light/">
            <a className="pagemap__content--logo">
              <img src="/_theme/img/svg/balmuda-the-light.min.svgz" alt="BALMUDA The Light" />
            </a>
          </Link>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/light/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology ">
              <Link href="/light/technology">科技</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--howto ">
              <Link href="/light/howto">使用方法</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec __current">
              <Link href="/light/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=L01A"
              className="btn btn--pagemap">
              购买
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
				 dotsClass={'slick-dots'}
				 customPaging={(i) => (
					 <button type="button" role="tab" id={`slick-slide-control0${i}`} aria-controls="slick-slide00" aria-label="1 of 3" aria-selected="true">{i}</button>
				 )}
				className="spec--image" id="spec--image">
          <div className="spec--00">
            <img
              data-mobile="https://www.balmuda.com/jp/light/img/spec/mobile/spec--00.jpg?20190222"
              data-desktop="https://www.balmuda.com/jp/light/img/spec/desktop/spec--00.jpg?20190222"
              data-retina="https://www.balmuda.com/jp/light/img/spec/desktop/spec--00@2x.jpg?20190222"
							src="https://www.balmuda.com/jp/light/img/spec/desktop/spec--00@2x.jpg?20190222"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--01">
            <img
              data-mobile="https://www.balmuda.com/jp/light/img/spec/mobile/spec--01.jpg?20190222"
              data-desktop="https://www.balmuda.com/jp/light/img/spec/desktop/spec--01.jpg?20190222"
              data-retina="https://www.balmuda.com/jp/light/img/spec/desktop/spec--01@2x.jpg?20190222"
							src="https://www.balmuda.com/jp/light/img/spec/desktop/spec--01@2x.jpg?20190222"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--02">
            <img
              data-mobile="https://www.balmuda.com/jp/light/img/spec/mobile/spec--02.jpg?20190222"
              data-desktop="https://www.balmuda.com/jp/light/img/spec/desktop/spec--02.jpg?20190222"
              data-retina="https://www.balmuda.com/jp/light/img/spec/desktop/spec--02@2x.jpg?20190222"
							src="https://www.balmuda.com/jp/light/img/spec/desktop/spec--02@2x.jpg?20190222"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
        </ReactSlick>
      </div>
      <div className="section section--spec section--01">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">产品规格</h2>
            <table className="__basic">
              <tbody>
                <tr>
                  <th>机身尺寸</th>
                  <td>幅 191mm、奥行き 264mm、高さ 463mm（標準姿勢）</td>
                </tr>
                <tr>
                  <th>机身重量</th>
                  <td>约3.2kg</td>
                </tr>
                <tr>
                  <th>光源</th>
                  <td>LED 3灯</td>
                </tr>
                <tr>
                  <th>色温度</th>
                  <td>5700K</td>
                </tr>
                <tr>
                  <th>演色性</th>
                  <td>平均演色評価数Ra97以上</td>
                </tr>
                <tr>
                  <th>光源寿命</th>
                  <td>40,000时间</td>
                </tr>
                <tr>
                  <th>器具光束</th>
                  <td>430lm</td>
                </tr>
                <tr>
                  <th>調光機能</th>
                  <td>6段階（15〜100％）</td>
                </tr>
                <tr>
                  <th>イルミネーション機能</th>
                  <td>あり（ツールボックス）ON/OFFスイッチあり</td>
                </tr>
                <tr>
                  <th>電源</th>
                  <td>AC100V 50/60Hz共用（ACアダプター）</td>
                </tr>
                <tr>
                  <th>耗电量</th>
                  <td>全灯時最大14W、消灯時0.1W以下</td>
                </tr>
                <tr>
                  <th>電源コード長さ</th>
                  <td>1.8m（ACアダプター）</td>
                </tr>
                <tr>
                  <th>保证期限</th>
                  <td>购买日から1年</td>
                </tr>
                <tr>
                  <th>パッケージ内容</th>
                  <td>本体、ACアダプター、取扱説明書、保証書、ステッカー</td>
                </tr>
                <tr>
                  <th>颜色</th>
                  <td>黑色（型番: L01A-BK、JANコード: 4560330119828）</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>白色（型番:L01A-WH、JANコード: 4560330119835）</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>米色（型番:L01A-BG、JANコード: 4560330119859）</td>
                </tr>
                <tr>
                  <th>用途</th>
                  <td>家庭用　屋内用　学習・読書用</td>
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
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">同梱物一覧</h2>
            <div className="spec__item">
              <div className="spec__item--block">
                <figure className="spec__item--elm">
                  <img
                    data-mobile="https://www.balmuda.com/jp/light/img/spec/mobile/img1.png"
                    data-desktop="https://www.balmuda.com/jp/light/img/spec/desktop/img1.png"
                    data-retina="https://www.balmuda.com/jp/light/img/spec/desktop/img1@2x.png"
                    className="__image adaptiveimage"
                    src="https://www.balmuda.com/jp/light/img/spec/desktop/img1@2x.png"
                  />
                </figure>
              </div>
              <div className="spec__item--block">
                <figure className="spec__item--elm">
                  <img
                    data-mobile="https://www.balmuda.com/jp/light/img/spec/mobile/img2.png"
                    data-desktop="https://www.balmuda.com/jp/light/img/spec/desktop/img2.png"
                    data-retina="https://www.balmuda.com/jp/light/img/spec/desktop/img2@2x.png"
                    className="__image adaptiveimage"
                    src="https://www.balmuda.com/jp/light/img/spec/desktop/img2@2x.png"
                  />
                </figure>
                <figure className="spec__item--elm">
                  <img
                    data-mobile="https://www.balmuda.com/jp/light/img/spec/mobile/img3.png"
                    data-desktop="https://www.balmuda.com/jp/light/img/spec/desktop/img3.png"
                    data-retina="https://www.balmuda.com/jp/light/img/spec/desktop/img3@2x.png"
                    className="__image adaptiveimage"
                    src="https://www.balmuda.com/jp/light/img/spec/desktop/img3@2x.png"
                  />
                </figure>
              </div>
              <div className="spec__item--block">
                <figure className="spec__item--elm">
                  <img
                    data-mobile="https://www.balmuda.com/jp/light/img/spec/mobile/img4.png"
                    data-desktop="https://www.balmuda.com/jp/light/img/spec/desktop/img4.png"
                    data-retina="https://www.balmuda.com/jp/light/img/spec/desktop/img4@2x.png"
                    className="__image adaptiveimage"
                    src="https://www.balmuda.com/jp/light/img/spec/desktop/img4@2x.png"
                  />
                </figure>
                <figure className="spec__item--elm">
                  <img
                    data-mobile="https://www.balmuda.com/jp/light/img/spec/mobile/img5.png"
                    data-desktop="https://www.balmuda.com/jp/light/img/spec/desktop/img5.png"
                    data-retina="https://www.balmuda.com/jp/light/img/spec/desktop/img5@2x.png"
                    className="__image adaptiveimage"
                    src="https://www.balmuda.com/jp/light/img/spec/desktop/img5@2x.png"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--spec section--03">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">傾きと照射範囲</h2>
            <div className="specimages">
              <div className="specimage __1">
                <img
                  data-mobile="https://www.balmuda.com/jp/light/img/spec/mobile/img6-1.png?20190222"
                  data-desktop="https://www.balmuda.com/jp/light/img/spec/desktop/img6-1.png?20190222"
                  data-retina="https://www.balmuda.com/jp/light/img/spec/desktop/img6-1@2x.png?20190222"
                  className="__image adaptiveimage"
                  src="https://www.balmuda.com/jp/light/img/spec/desktop/img6-1@2x.png?20190222"
                />
              </div>
              <div className="specimage __2">
                <img
                  data-mobile="https://www.balmuda.com/jp/light/img/spec/mobile/img6-2.png?20190222"
                  data-desktop="https://www.balmuda.com/jp/light/img/spec/desktop/img6-2.png?20190222"
                  data-retina="https://www.balmuda.com/jp/light/img/spec/desktop/img6-2@2x.png?20190222"
                  className="__image adaptiveimage"
                  src="https://www.balmuda.com/jp/light/img/spec/desktop/img6-2@2x.png?20190222"
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
              BALMUDA The Lightは、2019年度 グッド设计賞、2019年度
              キッズ设计賞を受賞しました。
            </p>

            <div className="columns cf">
              <div className="column __award__kids--2019">
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
