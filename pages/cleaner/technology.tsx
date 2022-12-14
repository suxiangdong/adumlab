import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'

export default function CleanerDetail() {
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
            <li className={`pagemap__content__item `}>
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
            <li className={`pagemap__content__item __current`}>
              <Link href="/cleaner/technology">科技</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/story">故事</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/spec">规格</Link>
            </li>
          </ul>

          <div className="pagemap__btns">
            <a
              href="/support"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="section--technology">
        <div className="mp__wrap moviePreload" id="Movie" style={{ height: 801.562 }}>
          <img
            data-mobile="https://www.balmuda.com/jp/cleaner/img/technology/mobile/movie.jpg?20210421"
            data-desktop="https://www.balmuda.com/jp/cleaner/img/technology/desktop/movie.jpg?20210421"
            data-retina="https://www.balmuda.com/jp/cleaner/img/technology/desktop/movie@2x.jpg?20210421"
            className="mp__image adaptiveimage"
            src="https://www.balmuda.com/jp/cleaner/img/technology/desktop/movie@2x.jpg?20210421"
          />
        </div>
      </div>

      <div className="section section--technology section--00 scrollLoader lazyload">
        <div className="viewport">
          <div className="__content">
            <p>
              浮いているかのような軽い操作感と、
              <br />
              <span>自在な動きを生む</span>
            </p>
            <h2 className="page__title">ホバー科技</h2>
          </div>
        </div>
        <img
          data-desktop="https://www.balmuda.com/jp/cleaner/img/technology/desktop/section--00-01.png?20210421"
          data-retina="https://www.balmuda.com/jp/cleaner/img/technology/desktop/section--00-01@2x.png?20210421"
          src="https://www.balmuda.com/jp/cleaner/img/technology/desktop/section--00-01@2x.png?20210421"
          className="adaptiveimage __image scrollLoader lazyload"
          data-model="black"
          alt=""
          loading="lazy"
        />
      </div>

      <div className="section section--technology section--01 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <p className="section__label">デュアルブラシヘッド</p>
            <h2 className="section__title">
              <span>浮いているかの</span>
              <span>ような</span>
              <span>軽さ</span>
              <br />
              驚きの操作感
            </h2>
            <p className="section__desc">
              2つのブラシをそれぞれ内側に回転させ、床面との摩擦を低減。クリーナー自体が浮いているかのような、驚きの操作感を実現しました。
              <br className="__is_desktop" />
              さらに左右のキャスターが、ヘッドの動きに完璧に追従し<span>、</span>
              全方向への掃除を可能にしています<span>。</span>
            </p>
          </div>
        </div>
      </div>

      <div className="section section--technology section--02 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <p className="section__label">360°スワイプ構造</p>
            <h2 className="section__title">
              前後、左右、斜め
              <br />
              <span>ヘッドの</span>
              <span>動きは</span>
              <span>自由自在</span>
            </h2>
            <p className="section__desc">
              デュアルブラシによって生み出される浮遊感。これを自由自在の域にまで高めるのが360°スワイプ構造です。その中核となるのが専用設計されたユニバーサルジョイント。
            </p>
            <p className="section__desc2">
              BALMUDA The Cleanerは<span>、</span>あらゆる角度の移動<span>、</span>
              横方向へのスライドなど今までにない自在な動きを実現しています。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--technology section--03 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">
              ホバー科技による
              <br />
              自由自在な動きで、
              <br className="sp" />
              あらゆる場所をきれいに
            </h2>

            <Link href="/technology/feature">
              <a className="section__btn">详情</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
