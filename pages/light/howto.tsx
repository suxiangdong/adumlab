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
            <li className="pagemap__content__item pagemap__content__item--howto __current">
              <Link href="/light/howto">使用方法</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
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
      <div className="section section--howto section--00">
        <div className="viewport">
          <div className="__content">
            <img
              src="https://www.balmuda.com/jp/light/img/howto/svg/section--00--title.min.svgz"
              className="__svg"
              alt="BALMUDA The Lightは光源の真下ではなく、光源から约30cm前方の位置を中心に、離れた場所を広く照らします。"
            />
            <p>
              BALMUDA The
              Lightの特徴を最大限に引き出す、効果的な設置方法と使用方法を3つのステップでご紹介します。
            </p>
          </div>
          <div className="__img">
            <img
              data-mobile="https://www.balmuda.com/jp/light/img/howto/mobile/section--00.png"
              data-desktop="https://www.balmuda.com/jp/light/img/howto/desktop/section--00.png"
              data-retina="https://www.balmuda.com/jp/light/img/howto/desktop/section--00@2x.png"
              className="__image adaptiveimage"
              src="https://www.balmuda.com/jp/light/img/howto/desktop/section--00@2x.png"
            />
          </div>
        </div>
      </div>

      <div className="section section--howto section--01">
        <div className="viewport">
          <div className="__column __01 scrollLoader fadeInUp loaded">
            <div className="__content">
              <h2 className="__title __wb">
                <span>本体は利き手と</span>
                <span>反対側の</span>
                <span>対角線上に</span>
                <span>設置します。</span>
              </h2>
              <div className="__img">
                <img
                  data-mobile="https://www.balmuda.com/jp/light/img/howto/mobile/column--1--position.png"
                  data-desktop="https://www.balmuda.com/jp/light/img/howto/desktop/column--1--position.png"
                  data-retina="https://www.balmuda.com/jp/light/img/howto/desktop/column--1--position@2x.png"
                  className="__image adaptiveimage"
                  src="https://www.balmuda.com/jp/light/img/howto/desktop/column--1--position@2x.png"
                />
              </div>
            </div>
            <div className="__point">
              <p className="__subtitle">利き手の対角線に置くことで、手元に影ができなくなります。</p>
            </div>
          </div>

          <div className="__column __02 scrollLoader fadeInUp loaded">
            <div className="__content">
              <h2 className="__title __wb">
                <span>光源が直接目に</span>
                <span>入らないように</span>
                <span>ヘッド部を</span>
                <span>水平に調整します。</span>
              </h2>
              <p>
                水平でも光源のまぶしさが气になる場合は、更にヘッド部を寝かせ角度を調整してください。
              </p>
              <div className="__img">
                <img
                  data-mobile="https://www.balmuda.com/jp/light/img/howto/mobile/column--2--horizontal.png"
                  data-desktop="https://www.balmuda.com/jp/light/img/howto/desktop/column--2--horizontal.png"
                  data-retina="https://www.balmuda.com/jp/light/img/howto/desktop/column--2--horizontal@2x.png"
                  className="__image adaptiveimage"
                  src="https://www.balmuda.com/jp/light/img/howto/desktop/column--2--horizontal@2x.png"
                />
              </div>
            </div>
            <div className="__point">
              <p className="__subtitle">机の広さに合わせて使うことが出来ます</p>
              <img
                data-mobile="https://www.balmuda.com/jp/light/img/howto/mobile/column--2--point--adjust.png"
                data-desktop="https://www.balmuda.com/jp/light/img/howto/desktop/column--2--point--adjust.png"
                data-retina="https://www.balmuda.com/jp/light/img/howto/desktop/column--2--point--adjust@2x.png"
                className="__image adaptiveimage"
                src="https://www.balmuda.com/jp/light/img/howto/desktop/column--2--point--adjust@2x.png"
              />
            </div>
          </div>

          <div className="__column __03 scrollLoader fadeInUp loaded">
            <div className="__content">
              <h2 className="__title __wb">
                <span>設置した環境に合わせ、</span>
                <span>明るさを</span>
                <span>調節してください。</span>
              </h2>
              <p>
                落ち着いた雰囲气の部屋では1～3、明るめの部屋や細かい作業には4～6をおすすめします。
              </p>
              <div className="__img">
                <img
                  data-mobile="https://www.balmuda.com/jp/light/img/howto/mobile/column--3--dial.png"
                  data-desktop="https://www.balmuda.com/jp/light/img/howto/desktop/column--3--dial.png"
                  data-retina="https://www.balmuda.com/jp/light/img/howto/desktop/column--3--dial@2x.png"
                  className="__image adaptiveimage"
                  src="https://www.balmuda.com/jp/light/img/howto/desktop/column--3--dial@2x.png"
                />
              </div>
            </div>
            <div className="__point">
              <p className="__subtitle">集中力を高める使いかた</p>
              <p className="__caption">
                部屋全体を均一に明るくするよりも、少し暗めの部屋（100～200lx
                *）でデスクライトを部屋の5～10倍程度の明るさで併用した方が集中力が高まると言われています。
              </p>
              <p className="__caption">
                * lx（ルクス＝照度）とは、照らされた面の明るさを表す単位です。
              </p>
              <div className="__img">
                <img
                  data-mobile="https://www.balmuda.com/jp/light/img/howto/mobile/column--3--point--illuminance.png?20200603"
                  data-desktop="https://www.balmuda.com/jp/light/img/howto/desktop/column--3--point--illuminance.png?20200603"
                  data-retina="https://www.balmuda.com/jp/light/img/howto/desktop/column--3--point--illuminance@2x.png?20200603"
                  className="__image adaptiveimage"
                  src="https://www.balmuda.com/jp/light/img/howto/desktop/column--3--point--illuminance@2x.png?20200603"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--howto section--02 scrollLoader fadeInUp loaded">
        <div className="viewport">
          <div className="__content">
            <img
              src="https://www.balmuda.com/jp/light/img/howto/svg/section--02--title.min.svgz"
              className="__svg"
              alt="BALMUDA The Lightは、離れた場所へ光を届け手もとに影のできない最適な明るさをお届けします。"
            />
            <p className="__wb">
              <span>ツールボックスに</span>
              <span>お气に入りの</span>
              <span>文房具を入れて</span>
              <span>自分だけのデスクライトを</span>
              <span>お楽しみください。</span>
            </p>
          </div>
          <div className="__img">
            <img
              data-mobile="https://www.balmuda.com/jp/light/img/howto/mobile/section--02.png?20200603"
              data-desktop="https://www.balmuda.com/jp/light/img/howto/desktop/section--02.png?20200603"
              data-retina="https://www.balmuda.com/jp/light/img/howto/desktop/section--02@2x.png?20200603"
              className="__image adaptiveimage"
              src="https://www.balmuda.com/jp/light/img/howto/desktop/section--02@2x.png?20200603"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
