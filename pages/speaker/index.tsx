import Link from 'next/link'
import Head from 'next/head'
import ReactSlick from 'react-slick'
import Layout from '../../layouts/default'
import API from '../../effects/api'

export async function getServerSideProps() {
  try {
    const [banners, evaluations] = await Promise.all([
      API.getBannersByCategory(9),
      API.getEvaluationsByCategory(9)
    ])
    return { props: { banners, evaluations } }
  } catch (error) {
    return { props: { banners: {}, evaluations: {} } }
  }
}

export default function ProductDetail({ banners, evaluations }) {
  if (!banners || !Array.isArray(banners.data) || banners.data.length === 0) {
    banners.data = [0, 1, 2, 3, 4, 5].map((i) => ({
      id: i,
      path: `https://www.balmuda.com/jp/speaker/img/index/desktop/billboard--0${i}@2x.jpg?20210425`
    }))
  }
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
            data-mobile="https://www.balmuda.com/jp/speaker/img/index/mobile/main.jpg?20201225"
            data-desktop="https://www.balmuda.com/jp/speaker/img/index/desktop/main.jpg?20201225"
            data-retina="https://www.balmuda.com/jp/speaker/img/index/desktop/main@2x.jpg?20201225"
            className="__image adaptiveimage"
            src="https://www.balmuda.com/jp/speaker/img/index/desktop/main@2x.jpg?20201225"
            alt=""
          />
        </div>
        <div className="viewport">
          <h2 className="page__title __wb">
            <span>前所未有的音乐体验</span>
          </h2>
          <span className="label__block">无线扬声器</span>
          <p className="overview_text">
            全新的扬声器登场。
            <br />
            以360°的立体的穿过般的心情好的声音，和放大格布的光辉
            <br />
            BALMUDA The Speaker营造出现场演出般的临场感。
            <br />
            充电式便携式蓝牙<sup>®</sup>·支持AUX输入
            <br />
            以自由的风格享受新的音乐体验。
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
              poster="https://www.balmuda.com/jp/speaker/img/index/mobile/trailer_low.jpg"
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
          data-mobile="https://www.balmuda.com/jp/speaker/img/index/mobile/section--01.jpg?20201225"
          className="sp section__image adaptiveimage __image"
          alt=""
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">
              是立体的
              <br />
              鲜明的声音
            </h2>
            <p className="section__desc">
              曲子本来的平衡原封不动，声音的轮廓清晰且立体地再生。该音响设计与以主唱为中心的音乐相得益彰。令人惊讶的是，主唱就在附近。
            </p>
            <a href="./technology" className="section__btn">
              详情
            </a>
          </div>
        </div>
      </div>
      <div className="section section--index section--02 scrollLoader lazyload loaded">
        <img
          data-mobile="https://www.balmuda.com/jp/speaker/img/index/mobile/section--02.jpg?20201225"
          className="sp section__image adaptiveimage __image"
          alt=""
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">
              扩大视野
              <br />
              临场感
            </h2>
            <p className="section__desc">
              给曲子的组合印象的是3个LED单元。追随声音的能量，光以0.004秒的速度精密同步。音乐性的光传递像实况录音舞台一样的高扬感。
            </p>
            <Link href="/speaker/technology#LED">
              <a className="section__btn">详情</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="section section--index section--03 scrollLoader lazyload loaded">
        <img
          data-mobile="https://www.balmuda.com/jp/speaker/img/index/mobile/section--03.jpg?20201225"
          className="sp section__image adaptiveimage __image"
          alt=""
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">开发故事</h2>
            <p className="section__desc">
              音乐上的感动只能在现场演奏中得到。改变这种想法的，是设计师带来的奇妙的收录机。BALMUDA
              The Speaker的故事。
            </p>
            <Link href="/speaker/story">
              <a className="section__btn">详情</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="section section--index section--04 scrollLoader lazyload loaded">
        <img
          data-mobile="https://www.balmuda.com/jp/speaker/img/index/mobile/section--04.jpg?20201225"
          className="sp section__image adaptiveimage __image"
          alt=""
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">
              所有的
              <br />
              给音乐听众
            </h2>
            <p className="section__desc">
              来听音乐吧。因为是充电式的便携式的，所以不用选择放置的地方，把这个音乐体验带到任何地方都可以。360度全方位的声音，在那个地方的任何人都能享受音乐。
            </p>
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
                data-mobile="https://www.balmuda.com/jp/speaker/img/index/gallery/1@2x.jpg?20201225"
                data-desktop="https://www.balmuda.com/jp/speaker/img/index/gallery/1.jpg?20201225"
                data-retina="https://www.balmuda.com/jp/speaker/img/index/gallery/1@2x.jpg?20201225"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/speaker/img/index/gallery/1@2x.jpg?20201225"
              />
            </figure>
            <figure>
              <img
                data-mobile="https://www.balmuda.com/jp/speaker/img/index/gallery/2@2x.jpg?20201225"
                data-desktop="https://www.balmuda.com/jp/speaker/img/index/gallery/2.jpg?20201225"
                data-retina="https://www.balmuda.com/jp/speaker/img/index/gallery/2@2x.jpg?20201225"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/speaker/img/index/gallery/2@2x.jpg?20201225"
              />
            </figure>
            <figure>
              <img
                data-mobile="https://www.balmuda.com/jp/speaker/img/index/gallery/3@2x.jpg?20201225"
                data-desktop="https://www.balmuda.com/jp/speaker/img/index/gallery/3.jpg?20201225"
                data-retina="https://www.balmuda.com/jp/speaker/img/index/gallery/3@2x.jpg?20201225"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/speaker/img/index/gallery/3@2x.jpg?20201225"
              />
            </figure>
            <figure>
              <img
                data-mobile="https://www.balmuda.com/jp/speaker/img/index/gallery/4@2x.jpg?20201225"
                data-desktop="https://www.balmuda.com/jp/speaker/img/index/gallery/4.jpg?20201225"
                data-retina="https://www.balmuda.com/jp/speaker/img/index/gallery/4@2x.jpg?20201225"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/speaker/img/index/gallery/4@2x.jpg?20201225"
              />
            </figure>
            <figure>
              <img
                data-mobile="https://www.balmuda.com/jp/speaker/img/index/gallery/5@2x.jpg?20201225"
                data-desktop="https://www.balmuda.com/jp/speaker/img/index/gallery/5.jpg?20201225"
                data-retina="https://www.balmuda.com/jp/speaker/img/index/gallery/5@2x.jpg?20201225"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/speaker/img/index/gallery/5@2x.jpg?20201225"
              />
            </figure>
            <figure>
              <img
                data-mobile="https://www.balmuda.com/jp/speaker/img/index/gallery/6@2x.jpg?20201225"
                data-desktop="https://www.balmuda.com/jp/speaker/img/index/gallery/6.jpg?20201225"
                data-retina="https://www.balmuda.com/jp/speaker/img/index/gallery/6@2x.jpg?20201225"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/speaker/img/index/gallery/6@2x.jpg?20201225"
              />
            </figure>
          </div>
        </div>
      </div>
    </Layout>
  )
}
