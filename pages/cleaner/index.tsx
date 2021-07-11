import Link from 'next/link'
import ReactSlick from 'react-slick'
import Head from 'next/head'
import Layout from '../../layouts/default'
import { useRouter } from 'next/router'

export default function CleanerDetail() {
  const router = useRouter()
  const { item } = router.query

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
              <Link href="/cleaner/function">特徴と性能</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/design">デザイン</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/feature">シーン別の使い方</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/technology">テクノロジー</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/story">ストーリー</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/spec">スペック</Link>
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
      <div className="mp__wrap">
        <div className="mp __active">
          <div className="mp__inner">
            <button className="mp__prev" type="button">
              Previous
            </button>
            <ul className="mp__list">
              <li className="mp__list_item __zoom">
                <div className="mp__list_image_wrap">
                  <img
                    data-mobile="//www.balmuda.com/jp/cleaner/img/index/mobile/billboard--00.jpg?20210429"
                    data-desktop="//www.balmuda.com/jp/cleaner/img/index/desktop/billboard--00.jpg?20210429"
                    data-retina="/cleaner/img/index/desktop/billboard--00@2x.jpg?20210429"
                    className="mp__list_image adaptiveimage"
                    src="//www.balmuda.com/jp/cleaner/img/index/desktop/billboard--00@2x.jpg?20210429"
                    style={{ transform: 'matrix(1.08, 0, 0, 1.08, 0, -395.5)' }}
                  />
                </div>
                <img
                  src="//www.balmuda.com/jp/cleaner/img/index/desktop/section--00-copy.svg?20210429"
                  className="mp__list_copy __00 pc"
                  data-index="0"
                />
                <img
                  src="//www.balmuda.com/jp/cleaner/img/index/mobile/section--00-copy.svg?20210429"
                  className="mp__list_copy __00 sp"
                  data-index="0"
                />
              </li>

              <li className="mp__list_item __zoom">
                <div className="mp__list_image_wrap">
                  <img
                    data-mobile="//www.balmuda.com/jp/cleaner/img/index/mobile/billboard--02.jpg?20210429"
                    data-desktop="//www.balmuda.com/jp/cleaner/img/index/desktop/billboard--02.jpg?20210429"
                    data-retina="/cleaner/img/index/desktop/billboard--02@2x.jpg?20210429"
                    className="mp__list_image adaptiveimage"
                    src="//www.balmuda.com/jp/cleaner/img/index/desktop/billboard--02@2x.jpg?20210429"
                    style={{ transform: 'matrix(1.08, 0, 0, 1.08, 0, -395.5)' }}
                  />
                </div>
              </li>
              <li className="mp__list_item __slide __active">
                <div className="mp__list_image_wrap">
                  <img
                    data-mobile="//www.balmuda.com/jp/cleaner/img/index/mobile/billboard--03.jpg?20210429"
                    data-desktop="//www.balmuda.com/jp/cleaner/img/index/desktop/billboard--03.jpg?20210429"
                    data-retina="/cleaner/img/index/desktop/billboard--03@2x.jpg?20210429"
                    className="mp__list_image adaptiveimage"
                    src="//www.balmuda.com/jp/cleaner/img/index/desktop/billboard--03@2x.jpg?20210429"
                    style={{ transform: 'translate3d(-30.4133px, -406.5px, 0px)' }}
                  />
                </div>
              </li>
              <li className="mp__list_item __zoom">
                <div className="mp__list_image_wrap">
                  <img
                    data-mobile="//www.balmuda.com/jp/cleaner/img/index/mobile/billboard--04.jpg?20210429"
                    data-desktop="//www.balmuda.com/jp/cleaner/img/index/desktop/billboard--04.jpg?20210429"
                    data-retina="/cleaner/img/index/desktop/billboard--04@2x.jpg?20210429"
                    className="mp__list_image adaptiveimage"
                    src="//www.balmuda.com/jp/cleaner/img/index/desktop/billboard--04@2x.jpg?20210429"
                    style={{ transform: 'matrix(1.08, 0, 0, 1.08, 0, -395.5)' }}
                  />
                </div>
              </li>
            </ul>
            <button className="mp__next" type="button">
              Next
            </button>
            <div className="section_overlay" id="overlay--sec104_desktop">
              <video
                width="100%"
                height="100%"
                id="sec104_desktop"
                preload="none"
                data-log="speaker_index_sec104_desktop">
                <source
                  src="//s3.balmuda.com/www/cleaner/movie/cm_Fullbit_low.mp4?20210429"
                  type="video/mp4"
                />
              </video>
              <div className="video_stop" data-video-target="sec104_desktop"></div>
            </div>
            <div className="video_play __is_desktop" data-video-target="sec104_desktop">
              <span></span>
            </div>
          </div>
          <ul className="mp__dots">
            <li className="mp__dots_item">
              <button className="mp__dots_button">1</button>
            </li>
            <li className="mp__dots_item">
              <button className="mp__dots_button">2</button>
            </li>
            <li className="mp__dots_item __active">
              <button className="mp__dots_button">3</button>
            </li>
            <li className="mp__dots_item">
              <button className="mp__dots_button">4</button>
            </li>
          </ul>
        </div>
        <div className="section_overlay section_overlay--v7_sec" id="overlay--v7_sec">
          <video
            width="100%"
            height="100%"
            id="v7_sec"
            preload="none"
            playsInline
            muted
            data-mobile="//s3.balmuda.com/www/cleaner/movie/cm_Fullbit_mobile.mp4?20210429"
            data-desktop="//s3.balmuda.com/www/cleaner/movie/cm_Fullbit_low.mp4"></video>
          <div className="video_stop" data-video-target="v7_sec"></div>
        </div>
      </div>

      <div className="section section--index section--00 scrollLoader lazyload loaded">
        <div className="__mainimage">
          <img
            data-mobile="//www.balmuda.com/jp/cleaner/img/index/mobile/main.jpg?20210429"
            data-desktop="//www.balmuda.com/jp/cleaner/img/index/desktop/main.jpg?20210429"
            data-retina="/cleaner/img/index/desktop/main@2x.jpg?20210429"
            className="__image adaptiveimage"
            src="//www.balmuda.com/jp/cleaner/img/index/desktop/main@2x.jpg?20210429"
            alt=""
          />
        </div>
        <div className="viewport">
          <h2 className="page__title __wb">
            <span>
              自由自在。
              <br />
              かけやすさを極めた
              <br className="__is_mobile" />
              クリーナー。
            </span>
          </h2>
          <span className="label__block">ホバー式 クリーナー</span>
          <p className="overview_text">
            クリーナーは、前後の動きから
            <br className="__is_mobile" />
            自由な動きへ。
            <br />
            独自のホバーテクノロジーにより、
            <br />
            まるで浮いているかのような
            <br className="__is_se" />
            操作性を
            <br className="__is_mobile" />
            実現した
            <br className="__is_se" />
            BALMUDA The Cleaner。
            <br />
            バルミューダが、これまでになかった
            <br />
            まったく新しい掃除体験をお届けします<span>。</span>
          </p>
          <div className="the-price">
            <p className="price price--excl_tax" id="price2">
              59,400
            </p>
            <p className="colores">ホワイト／ブラック</p>
          </div>

          <div className="__trailer __is_mobile">
            <video
              width="100%"
              height="100%"
              id="sec104_mobile"
              poster="/cleaner/img/index/mobile/trailer_cm.jpg?20210429"
              preload="none"
              data-log="speaker_index_sec104_mobile"
              controls>
              <source
                src="//s3.balmuda.com/www/cleaner/movie/cm_Fullbit_low.mp4?20210429"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>

      <div className="section section--index section--04 scrollLoader lazyload loaded">
        <img
          data-mobile="//www.balmuda.com/jp/cleaner/img/index/mobile/section--06.jpg?20210429"
          className="sp section__image adaptiveimage __image"
          alt=""
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <p className="section__label">特徴と性能</p>
            <h2 className="section__title">
              バルミューダなら、
              <br />
              掃除がもっと
              <br className="__is_mobile" />
              早く終わる。
            </h2>
            <p className="section__desc">
              ホバー式クリーナー独自の操作性と、優れた集じん性能でこれまでの約半分<sup>*1</sup>
              の時間で、掃除を完了させることができます。
              <br />
              <sup className="text__sup">
                *1：自社調べ。0.88㎡の床に擬似ゴミとしてコルクパウダー11gを散布、同一操作者が擬似ゴミを99%以上取り切るまでの時間を計測。比較機として、ローラーブラシ搭載の幅約210mmのヘッドを持つサイクロン式スティッククリーナーを使用。
              </sup>
            </p>
            <Link href="/cleaner/function">
              <a className="section__btn">詳しく</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="section section--index section--03 scrollLoader lazyload loaded">
        <img
          data-mobile="//www.balmuda.com/jp/cleaner/img/index/mobile/section--03.jpg?20210429"
          className="sp section__image adaptiveimage __image"
          alt=""
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <p className="section__label">デザイン</p>
            <h2 className="section__title">
              立てかけられた
              <br />
              <span>一本のほうきの</span>
              <span>ように。</span>
            </h2>
            <p className="section__desc">
              シンプルで清潔であること。そして一本のほうきのように自然であること。使っていないときも美しく。BALMUDA
              The Cleaner は、現代の掃除機がどんな姿であるべきかを考えてデザインされました。
            </p>
            <Link href="/cleaner/design">
              <a className="section__btn">詳しく</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="section section--index section--02 scrollLoader lazyload loaded">
        <img
          data-mobile="//www.balmuda.com/jp/cleaner/img/index/mobile/section--02.jpg?20210429"
          className="sp section__image adaptiveimage __image"
          alt=""
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <p className="section__label">シーン別の使い方</p>
            <h2 className="section__title">
              <span>すみから</span>
              <span>すみまで。</span>
              <br />
              <span>届かせたかった</span>
              <span>あの場所まで。</span>
            </h2>
            <p className="section__desc">
              広いフローリングや畳の上も。椅子や机の下も、せまいすき間も壁ぎわも。BALMUDA The
              Cleaner なら、思いどおりに、気持ちよく掃除をすることができます。
            </p>
            <Link href="/cleaner/feature">
              <a className="section__btn">詳しく</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="section section--index section--01 scrollLoader lazyload loaded">
        <img
          data-mobile="//www.balmuda.com/jp/cleaner/img/index/mobile/section--01.jpg?20210429"
          className="sp section__image adaptiveimage __image"
          alt=""
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <p className="section__label">ホバーテクノロジー</p>
            <h2 className="section__title">
              浮いているのか。
              <br />
              滑っているのか。
            </h2>
            <p className="section__desc">
              <span>摩擦抵抗を</span>
              <span>低減する</span>
              <span>デュアル</span>
              <span>ブラシヘッド、</span>
              <span>それを</span>
              <span>自在に</span>
              <span>操るための</span>
              <span>360°スワイプ</span>
              <span>構造、</span>
              <span>２つの要素</span>
              <span>によって</span>
              <span>実現した</span>
              <span>独自のホバー</span>
              <span>テクノロジー。</span>
            </p>
            <Link href="/cleaner/technology">
              <a className="section__btn">詳しく</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="section section--index section--05 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <p className="section__label">ストーリー</p>
            <h2 className="section__title">
              思い描いたのは
              <br />
              ホバークラフト。
            </h2>
            <p className="section__desc">
              BALMUDA The
              Cleanerがこだわり抜いた、掃除が楽しくなるくらいの自由自在な操作感。子どもの頃、憧れていたホバークラフトをヒントに、開発が始まりました。そのストーリーを紹介します。
            </p>
            <Link href="/cleaner/story">
              <a className="section__btn">ストーリーを読む</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="section section--index section--blockquote">
        <div className="viewport">
          <ReactSlick dots className="blockquotes" id="blockquotes">
            <div className="blockquote">
              <blockquote className="">
                <span>BALMUDA The Cleanerは、家事スタイルを快適に変える</span>
                <span>新しい暮らしの</span>
                <span>道具といっていいだろう。</span>
              </blockquote>
              <p className="__media">2020.12.28　日経電子版　MONO TRENDY モノ・フラッシュ</p>
              <a
                href="https://style.nikkei.com/article/DGXMZO67332670V11C20A2000000?channel=DF260120166491&page=2"
                target="_blank"
                className="__link">
                https://style.nikkei.com/article/DGXMZO67332670V11C20A2000000?channel=DF260120166491&page=2
              </a>
            </div>
            <div className="blockquote">
              <blockquote className="">
                <span>狙った方向に</span>ヘッドを<span>動かせる</span>
                <span>小気味よさもあり、</span>
                <span>掃除につきまとう</span>
                <span>フラストレーションが</span>
                <span>大きく減った。</span>
              </blockquote>
              <p className="__media">2020.12.17　家電Watch</p>
              <a
                href="https://kaden.watch.impress.co.jp/docs/column_review/kaden/1295689.html"
                target="_blank"
                className="__link">
                https://kaden.watch.impress.co.jp/docs/column_review/kaden/1295689.html
              </a>
            </div>
            <div className="blockquote">
              <blockquote className="">
                <span>この感覚は……</span>フリーダム。
                <br className="__is_mobile" />
                <span>そう、</span>
                <span>自由です！</span>
              </blockquote>
              <p className="__media">2020.12.30　GetNavi web</p>
              <a
                href="https://getnavi.jp/homeappliances/561518/"
                target="_blank"
                className="__link">
                https://getnavi.jp/homeappliances/561518/
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
                data-mobile="//www.balmuda.com/jp/cleaner/img/index/gallery/1@2x.jpg?20210429"
                data-desktop="//www.balmuda.com/jp/cleaner/img/index/gallery/1.jpg?20210429"
                data-retina="/cleaner/img/index/gallery/1@2x.jpg?20210429"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/cleaner/img/index/gallery/1@2x.jpg?20210429"
              />
            </figure>
            <figure>
              <img
                data-mobile="//www.balmuda.com/jp/cleaner/img/index/gallery/2@2x.jpg?20210429"
                data-desktop="//www.balmuda.com/jp/cleaner/img/index/gallery/2.jpg?20210429"
                data-retina="/cleaner/img/index/gallery/2@2x.jpg?20210429"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/cleaner/img/index/gallery/2@2x.jpg?20210429"
              />
            </figure>
            <figure>
              <img
                data-mobile="//www.balmuda.com/jp/cleaner/img/index/gallery/3@2x.jpg?20210429"
                data-desktop="//www.balmuda.com/jp/cleaner/img/index/gallery/3.jpg?20210429"
                data-retina="/cleaner/img/index/gallery/3@2x.jpg?20210429"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/cleaner/img/index/gallery/3@2x.jpg?20210429"
              />
            </figure>
            <figure>
              <img
                data-mobile="//www.balmuda.com/jp/cleaner/img/index/gallery/4@2x.jpg?20210429"
                data-desktop="//www.balmuda.com/jp/cleaner/img/index/gallery/4.jpg?20210429"
                data-retina="/cleaner/img/index/gallery/4@2x.jpg?20210429"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/cleaner/img/index/gallery/4@2x.jpg?20210429"
              />
            </figure>
            <figure>
              <img
                data-mobile="//www.balmuda.com/jp/cleaner/img/index/gallery/5@2x.jpg?20210429"
                data-desktop="//www.balmuda.com/jp/cleaner/img/index/gallery/5.jpg?20210429"
                data-retina="/cleaner/img/index/gallery/5@2x.jpg?20210429"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/cleaner/img/index/gallery/5@2x.jpg?20210429"
              />
            </figure>
            <figure>
              <img
                data-mobile="//www.balmuda.com/jp/cleaner/img/index/gallery/6@2x.jpg?20210429"
                data-desktop="//www.balmuda.com/jp/cleaner/img/index/gallery/6.jpg?20210429"
                data-retina="/cleaner/img/index/gallery/6@2x.jpg?20210429"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/cleaner/img/index/gallery/6@2x.jpg?20210429"
              />
            </figure>
            <figure>
              <img
                data-mobile="//www.balmuda.com/jp/cleaner/img/index/gallery/7@2x.jpg?20210429"
                data-desktop="//www.balmuda.com/jp/cleaner/img/index/gallery/7.jpg?20210429"
                data-retina="/cleaner/img/index/gallery/7@2x.jpg?20210429"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/cleaner/img/index/gallery/7@2x.jpg?20210429"
              />
            </figure>
            <figure>
              <img
                data-mobile="//www.balmuda.com/jp/cleaner/img/index/gallery/8@2x.jpg?20210429"
                data-desktop="//www.balmuda.com/jp/cleaner/img/index/gallery/8.jpg?20210429"
                data-retina="/cleaner/img/index/gallery/8@2x.jpg?20210429"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/cleaner/img/index/gallery/8@2x.jpg?20210429"
              />
            </figure>
            <figure>
              <img
                data-mobile="//www.balmuda.com/jp/cleaner/img/index/gallery/9@2x.jpg?20210429"
                data-desktop="//www.balmuda.com/jp/cleaner/img/index/gallery/9.jpg?20210429"
                data-retina="/cleaner/img/index/gallery/9@2x.jpg?20210429"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/cleaner/img/index/gallery/9@2x.jpg?20210429"
              />
            </figure>
          </div>
        </div>
      </div>
    </Layout>
  )
}
