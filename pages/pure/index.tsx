import Link from 'next/link'
import Head from 'next/head'
import ReactSlick from 'react-slick'
import Layout from '../../layouts/default'
import { useState } from 'react'

export default function ProductDetail() {
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    setPlaying(true)
    const video = document.getElementById('overlay--vdk') as HTMLVideoElement
    video.style.opacity = '1'
    video.play()
  }

  const handleEnded = () => {
    setPlaying(false)
    const video = document.getElementById('overlay--vdk') as HTMLVideoElement
    video.style.opacity = '0'
    video.pause()
  }

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
            <li className="pagemap__content__item pagemap__content__item--index __current">
              <Link href="/pure/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology">
              <Link href="/pure/technology">テクノロジー</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design">
              <Link href="/pure/design">デザイン</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--howto">
              <Link href="/pure/howto">使い方</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
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

      <div className="billboard__wrapper">
        <div className="mov_mobile">
          <div className="section_overlay section_overlay--vmb visible">
            <video
              id="overlay--vmb"
              className="vmb"
              width="100%"
              muted
              autoPlay
              playsInline></video>
          </div>
        </div>
        <div className="mov_desktop">
          <div className="section_overlay section_overlay--vdk visible">
            <video
              id="overlay--vdk"
              className={`vdk ${playing ? 'visible' : 'invisible'}`}
              width="100%"
              playsInline
              onEnded={handleEnded}>
              <source src="//s3.balmuda.com/www/jp/pure/movie/trailer.webm" type="video/webm" />
              <source src="//s3.balmuda.com/www/jp/pure/movie/trailer.mp4" type="video/mp4" />
            </video>
            <div
              className={`video_stop_dk ${playing ? 'visible' : 'invisible'}`}
              data-video-target="vdk"
              onClick={handleEnded}></div>
            <div
              className={`video_play_dk ${playing ? 'invisible' : 'visible'}`}
              data-video-target="vdk"
              onClick={handlePlay}>
              <span></span>
            </div>
          </div>
        </div>
        <ReactSlick
          dots
          className="blockquotes slick-initialized slick-slider slick-dotted"
          style={{ visibility: 'visible', opacity: 1 }}
          id="billboard">
          <div className="billboard--00">
            <img
              data-mobile="//www.balmuda.com/jp/pure/img/index/mobile/billboard--00.jpg?20180329"
              data-desktop="//www.balmuda.com/jp/pure/img/index/desktop/billboard--00.jpg?20180329"
              data-retina="//www.balmuda.com/jp/pure/img/index/desktop/billboard--00@2x.jpg?20180329"
              src="//www.balmuda.com/jp/pure/img/index/desktop/billboard--00@2x.jpg?20180329"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="billboard--01">
            <img
              data-mobile="//www.balmuda.com/jp/pure/img/index/mobile/billboard--01.jpg?20180329"
              data-desktop="//www.balmuda.com/jp/pure/img/index/desktop/billboard--01.jpg?20180329"
              data-retina="//www.balmuda.com/jp/pure/img/index/desktop/billboard--01@2x.jpg?20180329"
              src="//www.balmuda.com/jp/pure/img/index/desktop/billboard--01@2x.jpg?20180329"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="billboard--02">
            <img
              data-mobile="//www.balmuda.com/jp/pure/img/index/mobile/billboard--02.jpg?20180329"
              data-desktop="//www.balmuda.com/jp/pure/img/index/desktop/billboard--02.jpg?20180329"
              data-retina="//www.balmuda.com/jp/pure/img/index/desktop/billboard--02@2x.jpg?20180329"
              src="//www.balmuda.com/jp/pure/img/index/desktop/billboard--02@2x.jpg?20180329"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="billboard--03">
            <img
              data-mobile="//www.balmuda.com/jp/pure/img/index/mobile/billboard--03.jpg?20180329"
              data-desktop="//www.balmuda.com/jp/pure/img/index/desktop/billboard--03.jpg?20180329"
              data-retina="//www.balmuda.com/jp/pure/img/index/desktop/billboard--03@2x.jpg?20180329"
              src="//www.balmuda.com/jp/pure/img/index/desktop/billboard--03@2x.jpg?20180329"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="billboard--04">
            <img
              data-mobile="//www.balmuda.com/jp/pure/img/index/mobile/billboard--04.jpg?20180329"
              data-desktop="//www.balmuda.com/jp/pure/img/index/desktop/billboard--04.jpg?20180329"
              data-retina="//www.balmuda.com/jp/pure/img/index/desktop/billboard--04@2x.jpg?20180329"
              src="//www.balmuda.com/jp/pure/img/index/desktop/billboard--04@2x.jpg?20180329"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
        </ReactSlick>
      </div>
      <div className="section section--index section--00 scrollLoader lazyload loaded">
        <div className="__mainimage">
          <img
            data-mobile="//www.balmuda.com/jp/pure/img/index/mobile/main.jpg?20210502"
            data-desktop="//www.balmuda.com/jp/pure/img/index/desktop/main.jpg?20210502"
            data-retina="//www.balmuda.com/jp/pure/img/index/desktop/main@2x.jpg?20210502"
            src="//www.balmuda.com/jp/pure/img/index/desktop/main@2x.jpg?20210502"
            className="__image adaptiveimage"
            alt=""
          />
        </div>
        <div className="viewport">
          <h2 className="page__title">
            部屋中の空気を
            <br className="sp" />
            きれいにする
            <br />
            空気清浄機
          </h2>
          <span className="label__block">タワー型 空気清浄機</span>
          <p className="overview_text">
            <span>
              部屋の空気をすみずみまで、きれいに。
              <br />
              バルミューダの空気清浄機は、独自の構造で天井まで届く大風量を実現。
            </span>
            <span>
              部屋中の空気を循環させ、花粉・ウィルス、ペットやタバコの臭いなどを強力吸引、​
              <br />
              0.3μmの微粒子を99.97%キャッチするTrueHEPAフィルター
              <em className="asterisk __pointer">*1</em>と活性炭フィルターで素早く清浄します。
            </span>
            <span>清潔な空気で。BALMUDA The Pure は気持ちのいい空間をお届けします。</span>
          </p>

          <p className="asterisk __ref">
            *1 :
            0.3μmの微粒子を99.97%以上の粒子捕集率をもつフィルターです。0.3μｍ未満の微粒子状物質については、除去の確認ができていません。​
          </p>

          <div className="the-price">
            <p className="price price--excl_tax" id="price2">
              57,200
            </p>
            <p className="colores">ホワイト／ダークグレー</p>
          </div>

          <div className="__trailer __is_mobile">
            <video
              controls={true}
              poster="//www.balmuda.com/jp/pure/img/index/mobile/v1.jpg"
              width="100%"
              height="100%">
              <source src="//s3.balmuda.com/www/jp/pure/movie/trailer.webm" type="video/webm" />
              <source src="//s3.balmuda.com/www/jp/pure/movie/trailer.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="section section--index section--01 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">
              <img src="//www.balmuda.com/jp/pure/img/index/svg/technology.svg" alt="TECHNOLOGY" />
            </h2>
            <h3 className="section__subtitle">
              毎分7000リットル<em className="asterisk __pointer">*2</em>の<br className="sp" />
              空気を清浄
            </h3>
            <p className="section__desc">
              航空機のジェットエンジン技術を応用した独自の整流翼とファン​により、力強く大容量の空気を吸引。​部屋の浮遊物の中でも比較的重たいとされる花粉や、ウィルスなども確実に捕集します。
            </p>
            <p className="asterisk __ref">*2 : ジェットクリーニングモード運転時</p>
            <a href="./technology" className="section__btn">
              さらに詳しく
            </a>
          </div>
        </div>
      </div>

      <div className="section section--index section--02 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">
              <img src="//www.balmuda.com/jp/pure/img/index/svg/design.svg" alt="DESIGN" />
            </h2>
            <h3 className="section__subtitle">
              空気をきれいにする
              <br />
              光の柱
            </h3>
            <p className="section__desc">
              BALMUDA The Pure
              は、吸気口と流路が点灯し、この光の柱を通って空気が清浄されていきます。そして本体のデザインは極力シンプルに。さまざまな部屋と調和するようにデザインしました。
            </p>
            <a href="./design" className="section__btn">
              さらに詳しく
            </a>
          </div>
        </div>
      </div>

      <div className="section section--index section--03 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h3 className="section__subtitle">
              <span>効果的な使い方</span>
            </h3>
            <p className="section__desc">
              BALMUDA The Pureをもっと効果的にお使いいただくために。おすすめの使い方を紹介します。
            </p>
            <a href="./howto" className="section__btn">
              さらに詳しく
            </a>
          </div>
        </div>
      </div>

      <div className="section section--blockquote">
        <div className="viewport">
          <h2 className="section__title">
            <img
              src="//www.balmuda.com/jp/pure/img/index/svg/media.svgz?20210502"
              className="__title"
              alt="MEDIA"
            />
            <span className="__caption">様々なメディアに取り上げられています</span>
          </h2>
          <ReactSlick dots className="blockquotes" id="blockquotes">
            <div className="blockquote">
              <blockquote className="__wb">
                <span>空気を磨く手腕は</span>
                <span>文句なし。</span>
                <span>花粉除去能力は</span>
                <span>全製品中No.1でした​</span>
              </blockquote>
              <p className="__media">家電批評　2019年4月号​</p>
              <a
                href="//www.fujisan.co.jp/product/1281683835/b/1792093/"
                target="_blank"
                className="__link">
                https://www.fujisan.co.jp/product/1281683835/b/1792093/
              </a>
            </div>
            <div className="blockquote">
              <blockquote className="__wb">
                <span>家電アワード​</span>
                <span>2019 WINNER : </span>
                <span>基本性能も高く、</span>
                <span>特に「臭い」に強い製品</span>
              </blockquote>
              <p className="__media">デジモノステーション​</p>
              <a href="//www.digimonostation.jp/0000119881/" target="_blank" className="__link">
                https://www.digimonostation.jp/0000119881/
              </a>
            </div>
            <div className="blockquote">
              <blockquote className="__wb">
                <span>大きく吸って大きく吐く。​</span>
                <span>これにより部屋全体の空気を</span>
                <span>大きく循環させている</span>
              </blockquote>
              <p className="__media">ギズモード・ジャパン</p>
              <a
                href="//www.gizmodo.jp/2019/02/balmuda-the-pure.html"
                target="_blank"
                className="__link">
                https://www.gizmodo.jp/2019/02/balmuda-the-pure.html
              </a>
            </div>
            <div className="blockquote">
              <blockquote className="__wb">
                <span>機能とデザインが両立、​</span>
                <span>完璧すぎる空気清浄機</span>
              </blockquote>
              <p className="__media">Precious.jp​</p>
              <a href="//precious.jp/articles/-/10093" target="_blank" className="__link">
                https://precious.jp/articles/-/10093
              </a>
            </div>
          </ReactSlick>
        </div>
      </div>

      <div className="gallery scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="gallery__h">ギャラリー</h2>
          </div>

          <div className="gallery__content" data-pswp-uid="1">
            <figure>

                <img
                  data-mobile="//www.balmuda.com/jp/pure/img/index/gallery/1@2x.jpg?20210502"
                  data-desktop="//www.balmuda.com/jp/pure/img/index/gallery/1.jpg?20210502"
                  data-retina="//www.balmuda.com/jp/pure/img/index/gallery/1@2x.jpg?20210502"
                  className="__clip adaptiveimage"
                  src="//www.balmuda.com/jp/pure/img/index/gallery/1@2x.jpg?20210502"
                />
            </figure>
            <figure>

                <img
                  data-mobile="//www.balmuda.com/jp/pure/img/index/gallery/2@2x.jpg?20210502"
                  data-desktop="//www.balmuda.com/jp/pure/img/index/gallery/2.jpg?20210502"
                  data-retina="//www.balmuda.com/jp/pure/img/index/gallery/2@2x.jpg?20210502"
                  className="__clip adaptiveimage"
                  src="//www.balmuda.com/jp/pure/img/index/gallery/2@2x.jpg?20210502"
                />
            </figure>
            <figure>

                <img
                  data-mobile="//www.balmuda.com/jp/pure/img/index/gallery/3@2x.jpg?20210502"
                  data-desktop="//www.balmuda.com/jp/pure/img/index/gallery/3.jpg?20210502"
                  data-retina="//www.balmuda.com/jp/pure/img/index/gallery/3@2x.jpg?20210502"
                  className="__clip adaptiveimage"
                  src="//www.balmuda.com/jp/pure/img/index/gallery/3@2x.jpg?20210502"
                />
            </figure>
            <figure>

                <img
                  data-mobile="//www.balmuda.com/jp/pure/img/index/gallery/4@2x.jpg?20210502"
                  data-desktop="//www.balmuda.com/jp/pure/img/index/gallery/4.jpg?20210502"
                  data-retina="//www.balmuda.com/jp/pure/img/index/gallery/4@2x.jpg?20210502"
                  className="__clip adaptiveimage"
                  src="//www.balmuda.com/jp/pure/img/index/gallery/4@2x.jpg?20210502"
                />
            </figure>
            <figure>

                <img
                  data-mobile="//www.balmuda.com/jp/pure/img/index/gallery/5@2x.jpg?20210502"
                  data-desktop="//www.balmuda.com/jp/pure/img/index/gallery/5.jpg?20210502"
                  data-retina="//www.balmuda.com/jp/pure/img/index/gallery/5@2x.jpg?20210502"
                  className="__clip adaptiveimage"
                  src="//www.balmuda.com/jp/pure/img/index/gallery/5@2x.jpg?20210502"
                />
            </figure>
            <figure>

                <img
                  data-mobile="//www.balmuda.com/jp/pure/img/index/gallery/6@2x.jpg?20210502"
                  data-desktop="//www.balmuda.com/jp/pure/img/index/gallery/6.jpg?20210502"
                  data-retina="//www.balmuda.com/jp/pure/img/index/gallery/6@2x.jpg?20210502"
                  className="__clip adaptiveimage"
                  src="//www.balmuda.com/jp/pure/img/index/gallery/6@2x.jpg?20210502"
                />
            </figure>
            <figure>

                <img
                  data-mobile="//www.balmuda.com/jp/pure/img/index/gallery/7@2x.jpg?20210502"
                  data-desktop="//www.balmuda.com/jp/pure/img/index/gallery/7.jpg?20210502"
                  data-retina="//www.balmuda.com/jp/pure/img/index/gallery/7@2x.jpg?20210502"
                  className="__clip adaptiveimage"
                  src="//www.balmuda.com/jp/pure/img/index/gallery/7@2x.jpg?20210502"
                />
            </figure>
            <figure>

                <img
                  data-mobile="//www.balmuda.com/jp/pure/img/index/gallery/8@2x.jpg?20210502"
                  data-desktop="//www.balmuda.com/jp/pure/img/index/gallery/8.jpg?20210502"
                  data-retina="//www.balmuda.com/jp/pure/img/index/gallery/8@2x.jpg?20210502"
                  className="__clip adaptiveimage"
                  src="//www.balmuda.com/jp/pure/img/index/gallery/8@2x.jpg?20210502"
                />
            </figure>
            <figure>

                <img
                  data-mobile="//www.balmuda.com/jp/pure/img/index/gallery/9@2x.jpg?20210502"
                  data-desktop="//www.balmuda.com/jp/pure/img/index/gallery/9.jpg?20210502"
                  data-retina="//www.balmuda.com/jp/pure/img/index/gallery/9@2x.jpg?20210502"
                  className="__clip adaptiveimage"
                  src="//www.balmuda.com/jp/pure/img/index/gallery/9@2x.jpg?20210502"
                />
            </figure>
          </div>
        </div>
      </div>
    </Layout>
  )
}
