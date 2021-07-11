import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'
import { useState } from 'react'

export default function ProductDetail() {
  const [current, setCurrent] = useState(0)

  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/pure/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/pure/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <Link href="/pure/">
            <a className="pagemap__content--logo">
              <img
                className="w-full"
                src="/_theme/img/svg/balmuda-the-pure.min.svgz"
                alt="BALMUDA The Pure"
              />
            </a>
          </Link>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/pure/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology">
              <Link href="/pure/technology">テクノロジー</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design ">
              <Link href="/pure/design">デザイン</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--howto">
              <Link href="/pure/howto">使い方</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec __current">
              <Link href="/pure/spec">スペック</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=A01A"
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
              data-desktop="//www.balmuda.com/jp/pure/img/spec/desktop/section--00.jpg?20181023"
              data-retina="//www.balmuda.com/jp/pure/img/spec/desktop/section--00@2x.jpg?20181023"
              src="//www.balmuda.com/jp/pure/img/spec/desktop/section--00.jpg?20181023"
              className={`adaptiveimage __image ${current === 0 ? '__current' : ''}`}
              data-model="white"
              alt=""
            />
            <img
              data-desktop="//www.balmuda.com/jp/pure/img/spec/desktop/section--01.jpg?20181023"
              data-retina="//www.balmuda.com/jp/pure/img/spec/desktop/section--01@2x.jpg?20181023"
              src="//www.balmuda.com/jp/pure/img/spec/desktop/section--01.jpg?20181023"
              className={`adaptiveimage __image ${current === 1 ? '__current' : ''}`}
              data-model="darkgray"
              alt=""
            />
          </div>
        </div>
        <div className="__image_outer __is_mobile">
          <div className="__image_inner" id="pure--spec--mobile">
            <div className="__image_item">
              <img
                src="//www.balmuda.com/jp/pure/img/spec/mobile/spec--00.jpg?20181023"
                className="__image adaptiveimage slick--lazy __current"
                data-model="white"
                alt=""
              />
              <img
                src="//www.balmuda.com/jp/pure/img/spec/mobile/spec--04.jpg?20181023"
                className="__image adaptiveimage slick--lazy"
                data-model="darkgray"
                alt=""
              />
            </div>
            <div className="__image_item">
              <img
                src="//www.balmuda.com/jp/pure/img/spec/mobile/spec--01.jpg?20181023"
                className="__image adaptiveimage slick--lazy __current"
                data-model="white"
                alt=""
              />
              <img
                src="//www.balmuda.com/jp/pure/img/spec/mobile/spec--05.jpg?20181023"
                className="__image adaptiveimage slick--lazy"
                data-model="darkgray"
                alt=""
              />
            </div>
            <div className="__image_item">
              <img
                src="//www.balmuda.com/jp/pure/img/spec/mobile/spec--02.jpg?20181023"
                className="__image adaptiveimage slick--lazy __current"
                data-model="white"
                alt=""
              />
              <img
                src="//www.balmuda.com/jp/pure/img/spec/mobile/spec--06.jpg?20181023"
                className="__image adaptiveimage slick--lazy"
                data-model="darkgray"
                alt=""
              />
            </div>
            <div className="__image_item">
              <img
                src="//www.balmuda.com/jp/pure/img/spec/mobile/spec--03.jpg?20181023"
                className="__image adaptiveimage slick--lazy __current"
                data-model="white"
                alt=""
              />
              <img
                src="//www.balmuda.com/jp/pure/img/spec/mobile/spec--07.jpg?20181023"
                className="__image adaptiveimage slick--lazy"
                data-model="darkgray"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="__selector_wrap">
          <span
            className={`__selector ${current === 0 ? '__current' : ''}`}
            data-model="white"
            onClick={() => setCurrent(0)}>
            ホワイト
          </span>
          <span
            className={`__selector ${current === 1 ? '__current' : ''}`}
            data-model="darkgray"
            onClick={() => setCurrent(1)}>
            ダークグレー
          </span>
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
                  <td>BALMUDA The Pure</td>
                </tr>
                <tr>
                  <th>製品寸法</th>
                  <td>幅 260mm × 奥行 260mm × 高さ 700mm</td>
                </tr>
                <tr>
                  <th>製品重量（フィルター含む）</th>
                  <td>約7.4kg</td>
                </tr>
                <tr>
                  <th>電源</th>
                  <td>AC100V 50/60Hz共用ACアダプター</td>
                </tr>
                <tr>
                  <th>消費電力</th>
                  <td>2〜72W</td>
                </tr>
                <tr>
                  <th>コード長さ</th>
                  <td>AC側：1.0m／DC側：1.8m（ACアダプター コード長）</td>
                </tr>
                <tr>
                  <th>カラー</th>
                  <td>ホワイト(型番：A01A-WH、JANコード：4560330119958）</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>ダークグレー(型番：A01A-GR、JANコード：4560330119460）</td>
                </tr>
                <tr>
                  <th>パッケージ内容</th>
                  <td>
                    BALMUDA The
                    Pure本体、取扱説明書（保証書付き）、ACアダプター、集じん・脱臭フィルターセット（A01A-P100）
                  </td>
                </tr>
                <tr>
                  <th>保証期間</th>
                  <td>お買い上げ日から1年間</td>
                </tr>
                <tr>
                  <th>交換用フィルター</th>
                  <td>
                    集じん・脱臭フィルターセット（A01A-P100）
                    <br />
                    集じんフィルター（A01A-S100）、脱臭フィルター（A01A-D100）
                  </td>
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
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">性能／運転モード</h2>
            <table className="__basic">
              <tbody>
                <tr>
                  <th>適用床面積（目安）</th>
                  <td>〜36畳／〜60m²（*1）</td>
                </tr>
                <tr>
                  <th>清浄時間</th>
                  <td>8畳を8分</td>
                </tr>
                <tr>
                  <th>運転モード / 清浄風量</th>
                  <td>
                    風量1 / 0.3㎥/min
                    <br />
                    風量2 / 1.5㎥/min
                    <br />
                    風量3 / 4.8㎥/min
                    <br />
                    ジェットクリーニング / 7.3㎥/min
                  </td>
                </tr>
                <tr>
                  <th>運転音</th>
                  <td>19〜64dB</td>
                </tr>
              </tbody>
            </table>
            <p className="note">
              *1「適用床面積」ならびに「清浄時間」の数値は、日本電機工業会 JEM1467
              に基づく数値です（ジェットクリーニングモード運転時）
            </p>
          </div>
        </div>
      </div>

      <div id="maintenance" className="section section--spec section--03">
        <div className="viewport">
          <h2 className="section__title __wb">
            <span>メンテナンス</span>
          </h2>
          <div className="__column __01 scrollLoader fadeInUp loaded">
            <div className="__content">
              <h3 className="column__title">水洗いができる</h3>
              <p>
                BALMUDA The Pureは、お手入れが簡単。
                <br />
                ホコリが溜まりやすいパーツ取り外して水洗いすることが可能。いつも清潔に保つことができます。
              </p>
            </div>
            <div className="__img">
              <img
                data-mobile="//www.balmuda.com/jp/pure/img/spec/mobile/spec-img1.jpg"
                data-desktop="//www.balmuda.com/jp/pure/img/spec/desktop/spec-img1.jpg"
                data-retina="//www.balmuda.com/jp/pure/img/spec/desktop/spec-img1@2x.jpg"
                className="__image adaptiveimage"
                alt=""
                src="//www.balmuda.com/jp/pure/img/spec/desktop/spec-img1@2x.jpg"
              />
            </div>
          </div>
          <div className="__column __02 scrollLoader fadeInUp loaded">
            <div className="__content">
              <h3 className="column__title">フィルターのメンテナンス</h3>
              <p>
                本体背面のハッチを開けるとすぐにフィルターにアクセスすることができます。1ヶ月に1回を目安に掃除機でフィルター表面のホコリを吸い取り、きれいにしてください。
              </p>
            </div>
            <div className="__img">
              <img
                data-mobile="//www.balmuda.com/jp/pure/img/spec/mobile/spec-img2.jpg"
                data-desktop="//www.balmuda.com/jp/pure/img/spec/desktop/spec-img2.jpg"
                data-retina="//www.balmuda.com/jp/pure/img/spec/desktop/spec-img2@2x.jpg"
                className="__image adaptiveimage"
                alt=""
                src="//www.balmuda.com/jp/pure/img/spec/desktop/spec-img2@2x.jpg"
              />
            </div>
          </div>
          <div className="__column __03 scrollLoader fadeInUp loaded">
            <div className="__content">
              <h3 className="column__title">1年に1回のフィルター交換</h3>
              <p>
                BALMUDA The
                Pureのフィルターは大量の浮遊物質やホコリを吸引します。本来の性能を保つために、1年に1回の交換を推奨しています。
              </p>
            </div>
            <div className="__img">
              <img
                data-mobile="//www.balmuda.com/jp/pure/img/spec/mobile/spec-img3.jpg"
                data-desktop="//www.balmuda.com/jp/pure/img/spec/desktop/spec-img3.jpg"
                data-retina="//www.balmuda.com/jp/pure/img/spec/desktop/spec-img3@2x.jpg"
                className="__image adaptiveimage"
                alt=""
                src="//www.balmuda.com/jp/pure/img/spec/desktop/spec-img3@2x.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section section--spec section--04 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">受賞歴</h2>
            <p>
              BALMUDA The Pureは、2019年度 グッドデザイン賞、2020年度 キッズデザイン賞 優秀賞
              経済産業大臣賞を受賞しました。
            </p>

            <div className="columns cf">
              <div className="column __award__if">
                <p>
                  ドイツ「iF International Forum Design
                  GmbH」が主催する半世紀以上の歴史がある世界的に権威あるデザイン賞で、全世界の工業製品を対象に優れた工業デザインを選定しています。
                </p>
              </div>
              <div className="column __award__gd">
                <p>
                  公益財団法人日本デザイン振興会が主催する、1957年に創設された日本で唯一の総合的なデザイン賞で、国内外の多くの企業やデザイナーが参加しています。
                </p>
              </div>
              <div className="column __award__kids">
                <p>優秀賞 経済産業大臣賞受賞</p>
                <p>
                  キッズデザイン賞は「子どもたちの安全・安心に貢献するデザイン」「子どもたちの創造性と未来を拓くデザイン」「子どもたちを産み育てやすいデザイン」の3つの視点において優れた製品が選ばれます。
                  <br />
                  <br />
                  優秀賞
                  経済産業大臣賞受賞理由として、「最新のテクノロジーにより、大容量の空気の循環を実現した空気清浄機である。また上部にあるファンに巻き込まれてケガをしないよう、ロックされていないとファンが回らない構造になっている。回っている最中に外蓋を取り外そうとすると、その瞬間にファンが止まる機能もある。非常に高い安全性と衛生空間を実現している点を、洗練されたフォルムとともに高く評価した。」とコメントをいただきました。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
