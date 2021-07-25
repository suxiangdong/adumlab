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
          media="(max-width: 640px)"
          href="/cleaner/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/cleaner/style/desktop.css?20210701173839"></link>
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
              <Link href="/cleaner/story">开发故事</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/spec">规格</Link>
            </li>
          </ul>

          <div className="pagemap__btns">
            <a
              href="//store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=C01A"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>
      <div className="section section--spec section--00 scrollLoader lazyload">
        <div className="__image_outer __is_desktop">
          <div className="__image_inner">
            <img
              data-desktop="https://www.balmuda.com/jp/cleaner/img/spec/desktop/white.jpg?20201224"
              data-retina="https://www.balmuda.com/jp/cleaner/img/spec/desktop/white@2x.jpg?20201224"
							src="https://www.balmuda.com/jp/cleaner/img/spec/desktop/white@2x.jpg?20201224"
              className={`adaptiveimage __image ${current === 0 ? '__current' : ''}`}
              data-model="white"
              alt=""
            />
            <img
              data-desktop="https://www.balmuda.com/jp/cleaner/img/spec/desktop/black.jpg?20201224"
              data-retina="https://www.balmuda.com/jp/cleaner/img/spec/desktop/black@2x.jpg?20201224"
							src="https://www.balmuda.com/jp/cleaner/img/spec/desktop/black@2x.jpg?20201224"
							className={`adaptiveimage __image ${current === 1 ? '__current' : ''}`}
              data-model="black"
              alt=""
            />
          </div>
        </div>

        <div className="__selector_wrap">
          <span className={`__selector ${current === 0 ? '__current' : ''}`}  data-model="white" onClick={() => setCurrent(0)}>
            白色
          </span>
          <span className={`__selector ${current === 1 ? '__current' : ''}`}  data-model="black" onClick={() => setCurrent(1)}>
            黑色
          </span>
        </div>
      </div>

      <div className="section section--spec section--01">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">产品规格</h2>
            <table className="__basic">
              <tbody>
                <tr>
                  <th>产品名称</th>
                  <td>BALMUDA The Cleaner</td>
                </tr>
                <tr>
                  <th>产品尺寸</th>
                  <td>幅300mm × 奥行 165mm × 高さ 1240mm</td>
                </tr>
                <tr>
                  <th>产品重量（フィルター含む）</th>
                  <td>约3.1kg</td>
                </tr>
                <tr>
                  <th>电源</th>
                  <td>充電式（リチウムイオン电池）</td>
                </tr>
                <tr>
                  <th>電力</th>
                  <td>AC100-240V　50/60Hz（ACアダプター）</td>
                </tr>
                <tr>
                  <th>电线长度</th>
                  <td>1.2m</td>
                </tr>
                <tr>
                  <th>運転时间</th>
                  <td>標準モード ：30分&nbsp;&nbsp;強モード ：10分</td>
                </tr>
                <tr>
                  <th>充电时间</th>
                  <td>约４时间</td>
                </tr>
                <tr>
                  <th>ダストボックス容量</th>
                  <td>0.13L</td>
                </tr>
                <tr className="__is_desktop">
                  <th>颜色</th>
                  <td>
                    白色（型番：C01A-WH、JANコード：4560330118333）
                    <br />
                    黑色（型番：C01A-BK、JANコード：4560330118326）
                  </td>
                </tr>
                <tr className="__is_mobile">
                  <th>颜色</th>
                  <td>白色（型番：C01A-WH、JANコード：4560330118333）</td>
                </tr>
                <tr className="__is_mobile">
                  <th></th>
                  <td>黑色（型番：C01A-BK、JANコード：4560330118326）</td>
                </tr>
                <tr>
                  <th>保修期限</th>
                  <td>１年</td>
                </tr>
                <tr>
                  <th>包装内容</th>
                  <td>
                    BALMUDA The
                    Cleaner本体、ハンディハンドル、すきま用ノズル、充電スタンド、充電アダプター、
                    <br />
                    メンテナンスブラシ、取扱説明書(保証書付き)
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

      <div className="section section--spec section--02">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">製品付属品</h2>
            <ReactSlick dots className="spec--slider">
              <div className="spec--slider-slide">
                <img
                  data-mobile="https://www.balmuda.com/jp/cleaner/img/spec/mobile/section--00-00.jpg?20201224"
                  data-desktop="https://www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-00.jpg?20201224"
                  data-retina="https://www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-00@2x.jpg?20201224"
									src="https://www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-00@2x.jpg?20201224"
                  className="__image adaptiveimage"
                  alt=""
                />
                <p>
                  すきま用ノズル＋ハンディハンドル
                  <br className="pc" />
                  (白色)
                </p>
              </div>
              <div className="spec--slider-slide">
                <img
                  data-mobile="https://www.balmuda.com/jp/cleaner/img/spec/mobile/section--00-01.jpg?20201224"
                  data-desktop="https://www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-01.jpg?20201224"
                  data-retina="https://www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-01@2x.jpg?20201224"
									src="https://www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-01@2x.jpg?20201224"
                  className="__image adaptiveimage"
                  alt=""
                />
                <p>
                  充電スタンド
                  <br className="pc" />
                  (白色)
                </p>
              </div>
              <div className="spec--slider-slide">
                <img
                  data-mobile="https://www.balmuda.com/jp/cleaner/img/spec/mobile/section--00-02.jpg?20201224"
                  data-desktop="https://www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-02.jpg?20201224"
                  data-retina="https://www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-02@2x.jpg?20201224"
									src="https://www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-02@2x.jpg?20201224"
                  className="__image adaptiveimage"
                  alt=""
                />
                <p>
                  すきま用ノズル＋ハンディハンドル
                  <br className="pc" />
                  (黑色)
                </p>
              </div>
              <div className="spec--slider-slide">
                <img
                  data-mobile="https://www.balmuda.com/jp/cleaner/img/spec/mobile/section--00-03.jpg?20201224"
                  data-desktop="https://www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-03.jpg?20201224"
                  data-retina="https://www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-03@2x.jpg?20201224"
									src="https://www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-03@2x.jpg?20201224"
                  className="__image adaptiveimage"
                  alt=""
                />
                <p>
                  充電スタンド
                  <br className="pc" />
                  (黑色)
                </p>
              </div>
              <div className="spec--slider-slide">
                <img
                  data-mobile="https://www.balmuda.com/jp/cleaner/img/spec/mobile/section--00-04.jpg?20201224"
                  data-desktop="https://www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-04.jpg?20201224"
                  data-retina="https://www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-04@2x.jpg?20201224"
									src="https://www.balmuda.com/jp/cleaner/img/spec/desktop/section--00-04@2x.jpg?20201224"
                  className="__image adaptiveimage"
                  alt=""
                />
                <p>
                  充電アダプター
                  <br className="pc" />
                  (白色・黑色共通)
                </p>
              </div>
            </ReactSlick>
          </div>
        </div>
      </div>
    </Layout>
  )
}
