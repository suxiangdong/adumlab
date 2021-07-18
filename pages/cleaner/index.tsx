import Link from 'next/link'
import ReactSlick from 'react-slick'
import Head from 'next/head'
import Layout from '../../layouts/default'
import API from '../../effects/api'

export async function getServerSideProps() {
  try {
    API.getEvaluationsByCategory(1)
    const [banners, evaluations] = await Promise.all([
      API.getBannersByCategory(10),
      API.getEvaluationsByCategory(10)
    ])
    return { props: { banners, evaluations } }
  } catch (error) {
    return { props: { banners: {}, evaluations: {} } }
  }
}

export default function CleanerDetail({ banners, evaluations }) {
  if (!banners || !Array.isArray(banners.data) || banners.data.length === 0) {
    banners.data = [0, 1, 2, 3, 4].map((i) => ({
      id: i,
      path: `https://www.balmuda.com/jp/cleaner/img/index/desktop/billboard--0${i}@2x.jpg?20210425`
    }))
  }

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
              <Link href="/cleaner/design">创新设计</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/feature">不同场景的使用方法</Link>
            </li>
            <li className={`pagemap__content__item`}>
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
              href="//store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=C01A"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>
      <div className="billboard__wrapper">
        <ReactSlick dots className="billboard" style={{ opacity: 1, visibility: 'visible' }}>
          {banners.data.map((item) => (
            <img key={item.id} className="w-full" src={item.path} />
          ))}
        </ReactSlick>
      </div>

      <div className="section section--index section--00 scrollLoader lazyload loaded">
        <div className="__mainimage">
          <img
            data-mobile="https://www.balmuda.com/jp/cleaner/img/index/mobile/main.jpg?20210429"
            data-desktop="https://www.balmuda.com/jp/cleaner/img/index/desktop/main.jpg?20210429"
            data-retina="/cleaner/img/index/desktop/main@2x.jpg?20210429"
            className="__image adaptiveimage"
            src="https://www.balmuda.com/jp/cleaner/img/index/desktop/main@2x.jpg?20210429"
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
            独自のホバー科技により、
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
            <p className="colores">白色／黑色</p>
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
          data-mobile="https://www.balmuda.com/jp/cleaner/img/index/mobile/section--06.jpg?20210429"
          className="sp section__image adaptiveimage __image"
          alt=""
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <p className="section__label">特点和性能</p>
            <h2 className="section__title">
              バルミューダなら、
              <br />
              掃除がもっと
              <br className="__is_mobile" />
              早く終わる。
            </h2>
            <p className="section__desc">
              悬臂式吸尘器独自の操作性と、優れた集じん性能でこれまでの约半分<sup>*1</sup>
              の时间で、掃除を完了させることができます。
              <br />
              <sup className="text__sup">
                *1：自社調べ。0.88㎡の床に擬似ゴミとしてコルクパウダー11gを散布、同一操作者が擬似ゴミを99%以上取り切るまでの时间を計測。比較機として、ローラーブラシ搭載の幅约210mmのヘッドを持つサイクロン式スティッククリーナーを使用。
              </sup>
            </p>
            <Link href="/cleaner/function">
              <a className="section__btn">详情</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="section section--index section--03 scrollLoader lazyload loaded">
        <img
          data-mobile="https://www.balmuda.com/jp/cleaner/img/index/mobile/section--03.jpg?20210429"
          className="sp section__image adaptiveimage __image"
          alt=""
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <p className="section__label">设计</p>
            <h2 className="section__title">
              立てかけられた
              <br />
              <span>一本のほうきの</span>
              <span>ように。</span>
            </h2>
            <p className="section__desc">
              シンプルで清潔であること。そして一本のほうきのように自然であること。使っていないときも美しく。BALMUDA
              The Cleaner は、現代の掃除機がどんな姿であるべきかを考えて设计されました。
            </p>
            <Link href="/cleaner/design">
              <a className="section__btn">详情</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="section section--index section--02 scrollLoader lazyload loaded">
        <img
          data-mobile="https://www.balmuda.com/jp/cleaner/img/index/mobile/section--02.jpg?20210429"
          className="sp section__image adaptiveimage __image"
          alt=""
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <p className="section__label">不同场景的使用方法</p>
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
              <a className="section__btn">详情</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="section section--index section--01 scrollLoader lazyload loaded">
        <img
          data-mobile="https://www.balmuda.com/jp/cleaner/img/index/mobile/section--01.jpg?20210429"
          className="sp section__image adaptiveimage __image"
          alt=""
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <p className="section__label">ホバー科技</p>
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
              <span>科技。</span>
            </p>
            <Link href="/cleaner/technology">
              <a className="section__btn">详情</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="section section--index section--05 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <p className="section__label">故事</p>
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
          <ReactSlick className="blockquotes" arrows={false} dots>
            {evaluations.data?.map((item) => (
              <div key={item.id} className="blockquote">
                <blockquote>{item.content}</blockquote>
                <p className="__media">{`${new Date(item.publish_at).toLocaleDateString('zh')} ${
                  item.source
                }`}</p>
                <a href={item.source_url} target="_blank" className="__link">
                  {item.source_url}
                </a>
              </div>
            ))}
          </ReactSlick>
        </div>
      </div>

      <div className="section section--index section--gallery">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">画廊</h2>
          </div>

          <div className="gallery__content" data-pswp-uid="1">
            <figure>
              <img
                data-mobile="https://www.balmuda.com/jp/cleaner/img/index/gallery/1@2x.jpg?20210429"
                data-desktop="https://www.balmuda.com/jp/cleaner/img/index/gallery/1.jpg?20210429"
                data-retina="/cleaner/img/index/gallery/1@2x.jpg?20210429"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/cleaner/img/index/gallery/1@2x.jpg?20210429"
              />
            </figure>
            <figure>
              <img
                data-mobile="https://www.balmuda.com/jp/cleaner/img/index/gallery/2@2x.jpg?20210429"
                data-desktop="https://www.balmuda.com/jp/cleaner/img/index/gallery/2.jpg?20210429"
                data-retina="/cleaner/img/index/gallery/2@2x.jpg?20210429"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/cleaner/img/index/gallery/2@2x.jpg?20210429"
              />
            </figure>
            <figure>
              <img
                data-mobile="https://www.balmuda.com/jp/cleaner/img/index/gallery/3@2x.jpg?20210429"
                data-desktop="https://www.balmuda.com/jp/cleaner/img/index/gallery/3.jpg?20210429"
                data-retina="/cleaner/img/index/gallery/3@2x.jpg?20210429"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/cleaner/img/index/gallery/3@2x.jpg?20210429"
              />
            </figure>
            <figure>
              <img
                data-mobile="https://www.balmuda.com/jp/cleaner/img/index/gallery/4@2x.jpg?20210429"
                data-desktop="https://www.balmuda.com/jp/cleaner/img/index/gallery/4.jpg?20210429"
                data-retina="/cleaner/img/index/gallery/4@2x.jpg?20210429"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/cleaner/img/index/gallery/4@2x.jpg?20210429"
              />
            </figure>
            <figure>
              <img
                data-mobile="https://www.balmuda.com/jp/cleaner/img/index/gallery/5@2x.jpg?20210429"
                data-desktop="https://www.balmuda.com/jp/cleaner/img/index/gallery/5.jpg?20210429"
                data-retina="/cleaner/img/index/gallery/5@2x.jpg?20210429"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/cleaner/img/index/gallery/5@2x.jpg?20210429"
              />
            </figure>
            <figure>
              <img
                data-mobile="https://www.balmuda.com/jp/cleaner/img/index/gallery/6@2x.jpg?20210429"
                data-desktop="https://www.balmuda.com/jp/cleaner/img/index/gallery/6.jpg?20210429"
                data-retina="/cleaner/img/index/gallery/6@2x.jpg?20210429"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/cleaner/img/index/gallery/6@2x.jpg?20210429"
              />
            </figure>
            <figure>
              <img
                data-mobile="https://www.balmuda.com/jp/cleaner/img/index/gallery/7@2x.jpg?20210429"
                data-desktop="https://www.balmuda.com/jp/cleaner/img/index/gallery/7.jpg?20210429"
                data-retina="/cleaner/img/index/gallery/7@2x.jpg?20210429"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/cleaner/img/index/gallery/7@2x.jpg?20210429"
              />
            </figure>
            <figure>
              <img
                data-mobile="https://www.balmuda.com/jp/cleaner/img/index/gallery/8@2x.jpg?20210429"
                data-desktop="https://www.balmuda.com/jp/cleaner/img/index/gallery/8.jpg?20210429"
                data-retina="/cleaner/img/index/gallery/8@2x.jpg?20210429"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/cleaner/img/index/gallery/8@2x.jpg?20210429"
              />
            </figure>
            <figure>
              <img
                data-mobile="https://www.balmuda.com/jp/cleaner/img/index/gallery/9@2x.jpg?20210429"
                data-desktop="https://www.balmuda.com/jp/cleaner/img/index/gallery/9.jpg?20210429"
                data-retina="/cleaner/img/index/gallery/9@2x.jpg?20210429"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/cleaner/img/index/gallery/9@2x.jpg?20210429"
              />
            </figure>
          </div>
        </div>
      </div>
    </Layout>
  )
}
