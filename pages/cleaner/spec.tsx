import Link from 'next/link'
import ReactSlick from 'react-slick'
import Head from 'next/head'
import Layout from '../../layouts/default'
import { useState } from 'react'

export default function CleanerDetail() {
  const [current, setCurrent] = useState(0)

  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          href="//www.balmuda.com/_theme/vendor/photoswipe/css/photoswipe.css?20210701173655"
        />
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="//www.balmuda.com/jp/cleaner/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="//www.balmuda.com/jp/cleaner/style/desktop.css?20210701173839"></link>
      </Head>

      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <Link href="/cleaner/">
            <a className="pagemap__content--logo">
              <img src="/_theme/img/svg/balmuda-the-cleaner.svgz" alt="BALMUDA The Cleaner" />
            </a>
          </Link>
          <ul className="pagemap__main" id="greedynav-links">
            <li className={`pagemap__content__item __current`}>
              <Link href="/cleaner/">概要</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/function">特点和性能</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/design">设计</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/feature">不同场景的使用方法</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/technology">科技</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/story">ストーリー</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/spec">规格</Link>
            </li>
          </ul>

          <div className="pagemap__btns">
            <a
              href="//store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=C01A"
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
              data-desktop="//www.balmuda.com/jp/cleaner/img/spec/desktop/white.jpg?20201224"
              data-retina="//www.balmuda.com/jp/cleaner/img/spec/desktop/white@2x.jpg?20201224"
							src="//www.balmuda.com/jp/cleaner/img/spec/desktop/white@2x.jpg?20201224"
              className={`adaptiveimage __image ${current === 0 ? '__current' : ''}`}
              data-model="white"
              alt=""
            />
            <img
              data-desktop="//www.balmuda.com/jp/cleaner/img/spec/desktop/black.jpg?20201224"
              data-retina="//www.balmuda.com/jp/cleaner/img/spec/desktop/black@2x.jpg?20201224"
							src="//www.balmuda.com/jp/cleaner/img/spec/desktop/black@2x.jpg?20201224"
							className={`adaptiveimage __image ${current === 1 ? '__current' : ''}`}
              data-model="black"
              alt=""
            />
          </div>
        </div>

        <div className="__selector_wrap">
          <span className={`__selector ${current === 0 ? '__current' : ''}`}  data-model="white" onClick={() => setCurrent(0)}>
            ホワイト
          </span>
          <span className={`__selector ${current === 1 ? '__current' : ''}`}  data-model="black" onClick={() => setCurrent(1)}>
            ブラック
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
                  <td>BALMUDA The Cleaner</td>
                </tr>
                <tr>
                  <th>本体寸法</th>
                  <td>幅300mm × 奥行 165mm × 高さ 1240mm</td>
                </tr>
                <tr>
                  <th>製品重量（フィルター含む）</th>
                  <td>約3.1kg</td>
                </tr>
                <tr>
                  <th>電源</th>
                  <td>充電式（リチウムイオンバッテリー）</td>
                </tr>
                <tr>
                  <th>電力</th>
                  <td>AC100-240V　50/60Hz（ACアダプター）</td>
                </tr>
                <tr>
                  <th>コード長さ</th>
                  <td>1.2m</td>
                </tr>
                <tr>
                  <th>運転時間</th>
                  <td>標準モード ：30分&nbsp;&nbsp;強モード ：10分</td>
                </tr>
                <tr>
                  <th>充電時間</th>
                  <td>約４時間</td>
                </tr>
                <tr>
                  <th>ダストボックス容量</th>
                  <td>0.13L</td>
                </tr>
                <tr className="__is_desktop">
                  <th>カラー</th>
                  <td>
                    ホワイト（型番：C01A-WH、JANコード：4560330118333）
                    <br />
                    ブラック（型番：C01A-BK、JANコード：4560330118326）
                  </td>
                </tr>
                <tr className="__is_mobile">
                  <th>カラー</th>
                  <td>ホワイト（型番：C01A-WH、JANコード：4560330118333）</td>
                </tr>
                <tr className="__is_mobile">
                  <th></th>
                  <td>ブラック（型番：C01A-BK、JANコード：4560330118326）</td>
                </tr>
                <tr>
                  <th>保証期間</th>
                  <td>１年</td>
                </tr>
                <tr>
                  <th>パッケージ内容</th>
                  <td>
                    BALMUDA The
                    Cleaner本体、ハンディハンドル、すきま用ノズル、充電スタンド、充電アダプター、
                    <br />
                    メンテナンスブラシ、取扱説明書(保証書付き)
                  </td>
                </tr>
                <tr>
                  <th>生産地</th>
                  <td>中国</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="section section--spec section--02">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">製品付属品</h2>
            <ReactSlick dots className="spec--slider">
              <div className="spec--slider-slide">
                <img
                  data-mobile="//www.balmuda.com/jp/cleaner/img/spec/mobile/section--00-00.jpg?20201224"
                  data-desktop="//www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-00.jpg?20201224"
                  data-retina="//www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-00@2x.jpg?20201224"
									src="//www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-00@2x.jpg?20201224"
                  className="__image adaptiveimage"
                  alt=""
                />
                <p>
                  すきま用ノズル＋ハンディハンドル
                  <br className="pc" />
                  (ホワイト)
                </p>
              </div>
              <div className="spec--slider-slide">
                <img
                  data-mobile="//www.balmuda.com/jp/cleaner/img/spec/mobile/section--00-01.jpg?20201224"
                  data-desktop="//www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-01.jpg?20201224"
                  data-retina="//www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-01@2x.jpg?20201224"
									src="//www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-01@2x.jpg?20201224"
                  className="__image adaptiveimage"
                  alt=""
                />
                <p>
                  充電スタンド
                  <br className="pc" />
                  (ホワイト)
                </p>
              </div>
              <div className="spec--slider-slide">
                <img
                  data-mobile="//www.balmuda.com/jp/cleaner/img/spec/mobile/section--00-02.jpg?20201224"
                  data-desktop="//www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-02.jpg?20201224"
                  data-retina="//www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-02@2x.jpg?20201224"
									src="//www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-02@2x.jpg?20201224"
                  className="__image adaptiveimage"
                  alt=""
                />
                <p>
                  すきま用ノズル＋ハンディハンドル
                  <br className="pc" />
                  (ブラック)
                </p>
              </div>
              <div className="spec--slider-slide">
                <img
                  data-mobile="//www.balmuda.com/jp/cleaner/img/spec/mobile/section--00-03.jpg?20201224"
                  data-desktop="//www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-03.jpg?20201224"
                  data-retina="//www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-03@2x.jpg?20201224"
									src="//www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-03@2x.jpg?20201224"
                  className="__image adaptiveimage"
                  alt=""
                />
                <p>
                  充電スタンド
                  <br className="pc" />
                  (ブラック)
                </p>
              </div>
              <div className="spec--slider-slide">
                <img
                  data-mobile="//www.balmuda.com/jp/cleaner/img/spec/mobile/section--00-04.jpg?20201224"
                  data-desktop="//www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-04.jpg?20201224"
                  data-retina="//www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-04@2x.jpg?20201224"
									src="//www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-04@2x.jpg?20201224"
                  className="__image adaptiveimage"
                  alt=""
                />
                <p>
                  充電アダプター
                  <br className="pc" />
                  (ホワイト・ブラック共通)
                </p>
              </div>
            </ReactSlick>
          </div>
        </div>
      </div>
    </Layout>
  )
}
