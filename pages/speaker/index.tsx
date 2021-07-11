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
            <li className="pagemap__content__item pagemap__content__item--index __current">
              <Link href="/speaker/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology">
              <Link href="/speaker/technology">テクノロジー</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story">
              <Link href="/speaker/story">ストーリー</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--setting">
              <Link href="/speaker/setting">セッティング</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/speaker/spec">スペック</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=M01A"
              className="btn btn--pagemap">
              購入
            </a>
          </div>
        </div>
      </div>
      //TODO
      <div className="section section--index section--00 scrollLoader lazyload loaded">
        <div className="__mainimage">
          <img
            data-mobile="//www.balmuda.com/jp/speaker/img/index/mobile/main.jpg?20201225"
            data-desktop="//www.balmuda.com/jp/speaker/img/index/desktop/main.jpg?20201225"
            data-retina="//www.balmuda.com/jp/speaker/img/index/desktop/main@2x.jpg?20201225"
            className="__image adaptiveimage"
            src="//www.balmuda.com/jp/speaker/img/index/desktop/main@2x.jpg?20201225"
            alt=""
          />
        </div>
        <div className="viewport">
          <h2 className="page__title __wb">
            <span>今までにない音楽体験</span>
          </h2>
          <span className="label__block">ワイヤレススピーカー</span>
          <p className="overview_text">
            まったく新しいスピーカーの登場です。
            <br />
            360°広がる立体的で抜けるような気持ちよいサウンドと、グルーヴを増幅させる輝きで
            <br />
            ライブステージのような臨場感をつくり出す BALMUDA The Speaker。
            <br />
            充電式でポータブル、Bluetooth<sup>®</sup>・AUX入力対応で
            <br />
            自由なスタイルで新しい音楽体験をお楽しみいただけます。
          </p>
          <div className="the-price">
            <p className="price price--excl_tax" id="price2">
              35,200
            </p>
          </div>

          <div className="__trailer __is_mobile">
            <video
              width="100%"
              height="100%"
              id="sec104_mobile"
              poster="//www.balmuda.com/jp/speaker/img/index/mobile/trailer_low.jpg"
              preload="none"
              controls
              data-log="speaker_index_sec104_mobile">
              <source
                src="//s3.balmuda.com/www/jp/speaker/movie/trailer_low_mobile.mp4?20201225"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div className="section section--index section--01 scrollLoader lazyload loaded">
        <img
          data-mobile="//www.balmuda.com/jp/speaker/img/index/mobile/section--01.jpg?20201225"
          className="sp section__image adaptiveimage __image"
          alt=""
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">
              立体的で
              <br />
              鮮明なサウンド
            </h2>
            <p className="section__desc">
              曲本来のバランスはそのままに、音の輪郭をはっきり、かつ立体的に再生。この音響設計はボーカル中心の音楽と相性抜群。驚くほどボーカルが近くに聴こえます。
            </p>
            <a href="./technology" className="section__btn">
              詳しく
            </a>
          </div>
        </div>
      </div>
      <div className="section section--index section--02 scrollLoader lazyload loaded">
        <img
          data-mobile="//www.balmuda.com/jp/speaker/img/index/mobile/section--02.jpg?20201225"
          className="sp section__image adaptiveimage __image"
          alt=""
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">
              視界に広がる
              <br />
              臨場感
            </h2>
            <p className="section__desc">
              曲のグルーヴを印象づけるのは、3基のLEDユニット。音のエネルギーに追従し、光が0.004秒の速さで緻密にシンクロ。音楽的な光がライブステージのような高揚感をお届けします。
            </p>
            <a href="./technology#LED" className="section__btn">
              詳しく
            </a>
          </div>
        </div>
      </div>
      <div className="section section--index section--03 scrollLoader lazyload loaded">
        <img
          data-mobile="//www.balmuda.com/jp/speaker/img/index/mobile/section--03.jpg?20201225"
          className="sp section__image adaptiveimage __image"
          alt=""
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">開発ストーリー</h2>
            <p className="section__desc">
              音楽的な感動は、生演奏でしか得られない。その考えを改めることになったのは、デザイナーが持ってきた奇妙なラジカセでした。BALMUDA
              The Speakerのストーリー。
            </p>
            <a href="./story" className="section__btn">
              ストーリーを読む
            </a>
          </div>
        </div>
      </div>
      <div className="section section--index section--04 scrollLoader lazyload loaded">
        <img
          data-mobile="//www.balmuda.com/jp/speaker/img/index/mobile/section--04.jpg?20201225"
          className="sp section__image adaptiveimage __image"
          alt=""
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">
              すべての
              <br />
              音楽リスナーへ
            </h2>
            <p className="section__desc">
              さあ、音楽を聴きましょう。充電式でポータブルだから、置き場所を選ばず、どこへでもこの音楽体験を持ち出せます。360°全方位に広がるサウンドで、その場にいる誰もが音楽を楽しめます。
            </p>
          </div>
        </div>
      </div>
      <div className="section section--index section--blockquote">
        <div className="viewport">
          <ReactSlick dots className="blockquotes" id="blockquotes">
            <div className="blockquote">
              <blockquote>
                <span>複雑な光り方が実に美しく、</span>
                <span>眺めているだけで</span>
                <span>気持ちが良い。</span>
              </blockquote>
              <p className="__media">AV Watch</p>
              <a
                href="https://av.watch.impress.co.jp/docs/review/review/1251187.html"
                target="_blank"
                className="__link">
                https://av.watch.impress.co.jp/docs/review/review/1251187.html
              </a>
            </div>
            <div className="blockquote">
              <blockquote>
                厚みのあるボーカルや、こもらず抜けの良い高音など、聴き始めてすぐに“いい音だ”と分かる。
              </blockquote>
              <p className="__media">家電Watch</p>
              <a
                href="https://kaden.watch.impress.co.jp/docs/column_review/kaden/1251598.html"
                target="_blank"
                className="__link">
                https://kaden.watch.impress.co.jp/docs/column_review/kaden/1251598.html
              </a>
            </div>
            <div className="blockquote">
              <blockquote>
                お部屋のどこにおいても、お部屋のどこから聴いても、常に心地よいサウンドを提供してくれます。
              </blockquote>
              <p className="__media">価格.comマガジン</p>
              <a href="https://kakakumag.com/av-kaden/?id=15423" target="_blank" className="__link">
                https://kakakumag.com/av-kaden/?id=15423
              </a>
            </div>
          </ReactSlick>
        </div>
      </div>
      <div className="section section--index section--gallery">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">ギャラリー</h2>
          </div>

          <div className="gallery__content" data-pswp-uid="1">
            <figure>
              <img
                data-mobile="//www.balmuda.com/jp/speaker/img/index/gallery/1@2x.jpg?20201225"
                data-desktop="//www.balmuda.com/jp/speaker/img/index/gallery/1.jpg?20201225"
                data-retina="//www.balmuda.com/jp/speaker/img/index/gallery/1@2x.jpg?20201225"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/speaker/img/index/gallery/1@2x.jpg?20201225"
              />
              s{' '}
            </figure>
            <figure>
              <img
                data-mobile="//www.balmuda.com/jp/speaker/img/index/gallery/2@2x.jpg?20201225"
                data-desktop="//www.balmuda.com/jp/speaker/img/index/gallery/2.jpg?20201225"
                data-retina="//www.balmuda.com/jp/speaker/img/index/gallery/2@2x.jpg?20201225"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/speaker/img/index/gallery/2@2x.jpg?20201225"
              />
              s{' '}
            </figure>
            <figure>
              <img
                data-mobile="//www.balmuda.com/jp/speaker/img/index/gallery/3@2x.jpg?20201225"
                data-desktop="//www.balmuda.com/jp/speaker/img/index/gallery/3.jpg?20201225"
                data-retina="//www.balmuda.com/jp/speaker/img/index/gallery/3@2x.jpg?20201225"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/speaker/img/index/gallery/3@2x.jpg?20201225"
              />
              s{' '}
            </figure>
            <figure>
              <img
                data-mobile="//www.balmuda.com/jp/speaker/img/index/gallery/4@2x.jpg?20201225"
                data-desktop="//www.balmuda.com/jp/speaker/img/index/gallery/4.jpg?20201225"
                data-retina="//www.balmuda.com/jp/speaker/img/index/gallery/4@2x.jpg?20201225"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/speaker/img/index/gallery/4@2x.jpg?20201225"
              />
              s{' '}
            </figure>
            <figure>
              <img
                data-mobile="//www.balmuda.com/jp/speaker/img/index/gallery/5@2x.jpg?20201225"
                data-desktop="//www.balmuda.com/jp/speaker/img/index/gallery/5.jpg?20201225"
                data-retina="//www.balmuda.com/jp/speaker/img/index/gallery/5@2x.jpg?20201225"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/speaker/img/index/gallery/5@2x.jpg?20201225"
              />
              s{' '}
            </figure>
            <figure>
              <img
                data-mobile="//www.balmuda.com/jp/speaker/img/index/gallery/6@2x.jpg?20201225"
                data-desktop="//www.balmuda.com/jp/speaker/img/index/gallery/6.jpg?20201225"
                data-retina="//www.balmuda.com/jp/speaker/img/index/gallery/6@2x.jpg?20201225"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/speaker/img/index/gallery/6@2x.jpg?20201225"
              />
              s{' '}
            </figure>
          </div>
        </div>
      </div>
    </Layout>
  )
}
