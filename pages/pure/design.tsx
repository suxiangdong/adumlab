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
              <Link href="/pure/technology">科技</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design __current">
              <Link href="/pure/design">设计</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--howto">
              <Link href="/pure/howto">使用方法</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/pure/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=A01A"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="section section--design section--00">
        <div className="billboard__wrapper">
          <img
            data-mobile="https://www.balmuda.com/jp/pure/img/design/movie/design_head_mobile.jpg"
            data-desktop="https://www.balmuda.com/jp/pure/img/design/movie/design_head_desktop.jpg"
            data-retina="https://www.balmuda.com/jp/pure/img/design/movie/design_head_desktop@2x.jpg"
            className="__image adaptiveimage"
            src="https://www.balmuda.com/jp/pure/img/design/movie/design_head_desktop@2x.jpg"
            alt=""
          />
        </div>

        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">
              空気をきれいにする
              <br className="sp" />
              光の柱
            </h2>
            <p>
              空気清浄の強さと共に、明るさが変化するBALMUDA The Pure の流路。
              <br />
              本体は極力シンプルに。そして光を设计の一部に取り込みました。
              <br />
              光の柱を通ることで、部屋の空気は清浄されていきます。
              <br />
              部屋が暗くなると、それに合わせて、光も暗くなります。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--design section--01 scrollLoader lazyload loaded">
        <div className="__image __is_mobile">
          <img
            data-mobile="https://www.balmuda.com/jp/pure/img/design/mobile/section--01.jpg"
            className="__image adaptiveimage"
            src="https://www.balmuda.com/jp/pure/img/design/mobile/section--01.jpg"
            alt=""
          />
        </div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">はっきりとわかる作用感</h2>
            <p>
              たとえば他の灯りが消えた夜中のリビングで。BALMUDA The Pure
              が動作中の場合、薄暗く流路が光っています。それは空気が清浄されつづけているサイン。寝室などでお使いの場合、光を消灯させることもできます。
            </p>
          </div>
        </div>
      </div>

      <div className="design--image__wrapper scrollLoader lazyload loaded">
        <ReactSlick dots className="design--image" id="pure--design">
          <div className="design--00">
            <img
              data-mobile="https://www.balmuda.com/jp/pure/img/design/mobile/design--00.jpg"
              data-desktop="https://www.balmuda.com/jp/pure/img/design/desktop/design--00.jpg"
              data-retina="https://www.balmuda.com/jp/pure/img/design/desktop/design--00@2x.jpg"
              src="https://www.balmuda.com/jp/pure/img/design/desktop/design--00@2x.jpg"
              className="__image adaptiveimage slick--lazy"
              alt=""
            />
          </div>
          <div className="design--01">
            <img
              data-mobile="https://www.balmuda.com/jp/pure/img/design/mobile/design--01.jpg"
              data-desktop="https://www.balmuda.com/jp/pure/img/design/desktop/design--01.jpg"
              data-retina="https://www.balmuda.com/jp/pure/img/design/desktop/design--01@2x.jpg"
              src="https://www.balmuda.com/jp/pure/img/design/desktop/design--01@2x.jpg"
              className="__image adaptiveimage slick--lazy"
              alt=""
            />
          </div>
        </ReactSlick>
        <div className="__text">
          <div className="viewport">
            <div className="__content">
              <h2 className="section__title">清潔な存在感</h2>
              <p>
                リビングや寝室の主役は、もちろん人であるはずです。そして普段から使う家具やベッド。同じ空間に置く家電は、むしろ存在感がない方がいいと、私たちは考えています。シンプルに、シンプルに。清潔さだけを追求しました。また、設置面積はA4の紙一枚とほぼ同じサイズ。他の家具と一緒に置く時も、邪魔をしません。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--design section--02 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">簡単な操作</h2>
            <p>
              すべての操作が上面の3つのボタンで完結。
              <br />
              気持ちよい操作音が快適な使い心地を提供します。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--design section--03 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <div className="control">
              <div className="power">
                <span>電源</span>
              </div>
              <div className="operation">
                <span>
                  運転モード
                  <br />
                  インジケーター
                </span>
              </div>
              <div className="modechange">
                <span>
                  オート／マニュアル
                  <br />
                  モードきりかえ
                </span>
              </div>
              <div className="jetcleaning">
                <span>
                  ジェット
                  <br />
                  クリーニング
                  <br className="pc" />
                  モード
                </span>
              </div>
            </div>
            <div className="desc desc_1">
              <div className="desc__icon">
                <img
                  src="https://www.balmuda.com/jp/pure/img/design/svg/autoormanual.svg"
                  alt="オートモード／マニュアルモード"
                />
              </div>
              <div className="text">
                <p>
                  <span className="title">オートモード：</span>
                  内蔵センサーにより風量を自動コントロール。
                </p>
                <p>
                  <span className="title">マニュアルモード：</span>３段階の風量を設定可能。
                </p>
              </div>
            </div>
            <div className="desc desc_2">
              <div className="desc__icon">
                <img
                  src="https://www.balmuda.com/jp/pure/img/design/svg/jetcleaning.svg"
                  alt="ジェットクリーニングモード"
                />
              </div>
              <div className="text">
                <p>
                  <span className="title">ジェットクリーニングモード：</span>
                  最大風量モード。強力な循環気流により部屋の空気を効率的に清浄します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--design section--04 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title __wb">
              お手入れ簡単、
              <br className="sp" />
              水洗いOK
            </h2>
            <img
              data-mobile="https://www.balmuda.com/jp/pure/img/design/mobile/section--04.png"
              data-desktop="https://www.balmuda.com/jp/pure/img/design/desktop/section--04.png"
              data-retina="https://www.balmuda.com/jp/pure/img/design/desktop/section--04@2x.png"
              className="__image adaptiveimage"
              src="https://www.balmuda.com/jp/pure/img/design/desktop/section--04@2x.png"
              alt=""
            />
            <p>
              BALMUDA The Pureは、お手入れも簡単。ホコリが溜まりやすいパーツを取り外して
              <br />
              水洗いすることが可能。いつも清潔に保つことができます。
            </p>
            <Link href="/pure/spec">
              <a className="button section__btn">详情</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
