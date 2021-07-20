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
            <li className="pagemap__content__item pagemap__content__item--technology __current">
              <Link href="/speaker/technology">科技</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story">
              <Link href="/speaker/story">故事</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--setting">
              <Link href="/speaker/setting">设置</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/speaker/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=M01A"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>
      <div className="section section--technology section--00">
        <img
          data-desktop="https://www.balmuda.com/jp/speaker/img/technology/desktop/section--00.jpg?20200421b"
          data-retina="https://www.balmuda.com/jp/speaker/img/technology/desktop/section--00@2x.jpg?20200421b"
          src="https://www.balmuda.com/jp/speaker/img/technology/desktop/section--00@2x.jpg?20200421b"
          className="adaptiveimage __image"
          data-model="black"
          alt=""
        />
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">
              音楽の熱量を
              <br />
              引き出す科技
            </h2>
            <p>
              立体的でクリアな音像を実現する独自の構造。
              <br />
              さらに、楽曲にシンクロする緻密な輝きが加わり、
              <br />
              音楽が持つエネルギーを耳に、目に届け、新しい音楽体験をつくりだします。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--technology section--01 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <img
            src="https://www.balmuda.com/jp/speaker//img/technology/mobile/section--01.jpg"
            className="__image__sp"
            alt=""
          />
          <div className="__content">
            <p className="section__label">上向き構造</p>
            <h2 className="section__title">
              360°どこでも
              <br />
              同じ音楽体験を
            </h2>
            <p className="section__desc">
              スピーカーを上向きに設置したユニークな構造。音が上方向に拡散し、どこにいても、何人でも、リスニングポジションを气にせず立体的なサウンドを楽しめます。
            </p>
          </div>
          <div className="__box">
            <div className="__item __item__01">
              <p className="__title">一般的な横向きのスピーカー</p>
              <img
                data-desktop="https://www.balmuda.com/jp/speaker/img/technology/desktop/section--01--00.png?20200421b"
                data-retina="https://www.balmuda.com/jp/speaker/img/technology/desktop/section--01--00@2x.png?20200421b"
                src="https://www.balmuda.com/jp/speaker/img/technology/desktop/section--01--00@2x.png?20200421b"
                className="adaptiveimage __image __image__01"
                data-model="black"
                alt=""
              />
              <p className="__txt">水平に音が進むので、リスニングポジションが小さく限られます。</p>
            </div>
            <div className="__item __item__02">
              <p className="__title">BALMUDA The Speaker</p>
              <img
                data-desktop="https://www.balmuda.com/jp/speaker/img/technology/desktop/section--01--01.png?20200421b"
                data-retina="https://www.balmuda.com/jp/speaker/img/technology/desktop/section--01--01@2x.png?20200421b"
                src="https://www.balmuda.com/jp/speaker/img/technology/desktop/section--01--01@2x.png?20200421b"
                className="adaptiveimage __image __image__02"
                data-model="black"
                alt=""
              />
              <p className="__txt">
                上方向に音が広がり、置き場所を選ばずどこにいても同じように楽曲を聴くことができます。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--technology section--02 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <p className="section__label">77mmスピーカー</p>
            <h2 className="section__title">すぐれた再現性</h2>
            <p className="section__desc">
              全音域をシームレスに再生する77mmフルレンジスピーカーは、楽器やボーカルの声をリアルに再生。不自然なひずみや違和感を感じることなく、素直なサウンドをリスナーへ届けます。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--technology section--03 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <img
            src="https://www.balmuda.com/jp/speaker//img/technology/mobile/section--03.jpg"
            className="__image__sp"
            alt=""
          />
          <div className="__content">
            <p className="section__label">独自ドライブユニット</p>
            <h2 className="section__title">立体的な音像</h2>
            <p className="section__desc">
              低音は下方から、高音は頭上から、そしてボーカルは目の前から聞こえてくるような、奥行きのある音像を生む、独自のドライブユニットを搭載。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--technology section--04 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <img
            src="https://www.balmuda.com/jp/speaker//img/technology/mobile/section--04.jpg"
            className="__image__sp"
            alt=""
          />
          <div className="__content">
            <p className="section__label">密閉型エンクロージャー</p>
            <h2 className="section__title">
              輪郭のある
              <br />
              クリアな音
            </h2>
            <p className="section__desc">
              真空管のような美しいチューブは、強度と硬度も兼ね備えた有機ガラス製。さらに密閉型構造を採用し、しっかりと閉じ込めた空气がバネのように作用し、明瞭でキレのある音を実現しました。
            </p>
          </div>
        </div>
      </div>

      <div
        id="LED"
        className="section section--technology section--05 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <p className="section__label">LEDユニット</p>
            <h2 className="section__title">
              グルーヴ感を
              <br />
              増幅する輝き
            </h2>
            <p className="section__desc">
              楽曲に合わせてライブステージのように輝くLEDユニット。光の色のわずかな差や光量、明滅速度の緩急から成る、緻密で複雑な輝きが1曲のグルーヴ感をさらに高めます。
            </p>
            <Link href="/speaker/setting#live_light">
              <a className="section__btn">LiveLight機能について</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="section section--technology section--06 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <p className="section__label">アルゴリズム</p>
            <h2 className="section__title">
              0.004秒の速さで
              <br />
              音と光をシンクロ
            </h2>
            <p className="section__desc">
              独自のアルゴリズムにより0.004秒の速さで音を光の輝きへと変換。アップテンポな曲から静かな曲まで、音と素晴らしい輝きが融合します。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
