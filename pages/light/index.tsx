import Link from 'next/link'
import Head from 'next/head'
import ReactSlick from 'react-slick'
import Layout from '../../layouts/default'
import API from '../../effects/api'
import { useEffect, useState } from 'react'

export async function getServerSideProps() {
  try {
    const [banners, evaluations] = await Promise.all([
      API.getBannersByCategory(8),
      API.getEvaluationsByCategory(8)
    ])
    return { props: { banners, evaluations } }
  } catch (error) {
    return { props: { banners: {}, evaluations: {} } }
  }
}

export default function ProductDetail({ banners, evaluations }) {
  if (!banners || !Array.isArray(banners.data) || banners.data.length === 0) {
    banners.data = [2, 8, 4, 7, 0, 1].map((i) => ({
      id: i,
      path: `https://www.balmuda.com/jp/light/img/index/desktop/billboard--0${i}@2x.jpg?20210505`
    }))
  }

  const [slickIndex, setSlickIndex] = useState(0)
  useEffect(() => {
    if ((window as any).initPhotoSwipeFromDOM) {
      ;(window as any).initPhotoSwipeFromDOM('.gallery__content')
    }
  }, [])
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
        <link rel="stylesheet" href="https://photoswipe.com/dist/photoswipe.css?v=4.1.3-1.0.4" />
        <link
          rel="stylesheet"
          href="https://photoswipe.com/dist/default-skin/default-skin.css?v=4.1.3-1.0.4"
        />
        <script src="https://www.balmuda.com/_theme/vendor/photoswipe/js/photoswipe.min.js"></script>
        <script src="https://www.balmuda.com/_theme/vendor/photoswipe/js/photoswipe-init-custom-opacity.js"></script>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <Link href="/light/">
            <a className="pagemap__content--logo">
              <img src="/_theme/img/svg/balmuda-the-light.min.svgz" alt="BALMUDA The Light" />
            </a>
          </Link>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index __current">
              <Link href="/light/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology">
              <Link href="/light/technology">科技</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--howto">
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

      <div className="billboard__wrapper">
        <ReactSlick
          dots
          className={`billboard slick-track--${slickIndex}`}
          style={{ opacity: 1, visibility: 'visible' }}
          afterChange={(index) => {
            setSlickIndex(index)
          }}>
          {banners.data.map((item) => (
            <img key={item.id} className="w-full" src={item.path} />
          ))}
        </ReactSlick>
      </div>

      <div className="section section--index section--00">
        <div className="__mainimage">
          <div className="__inner">
            <img
              data-mobile="https://www.balmuda.com/jp/light/img/index/mobile/main.jpg?20201006"
              data-desktop="https://www.balmuda.com/jp/light/img/index/desktop/main.jpg?20201006"
              data-retina="https://www.balmuda.com/jp/light/img/index/desktop/main@2x.jpg?20201006"
              className="__image adaptiveimage"
              src="https://www.balmuda.com/jp/light/img/index/desktop/main@2x.jpg?20201006"
            />
          </div>
        </div>
        <div className="viewport">
          <h2 className="page__title __wb __is_desktop">
            <span>子どもたちの</span>
            <span>目を守る光</span>
          </h2>
          <h2 className="page__title __wb __is_mobile">
            <span>子どもたちの</span>
            <span>目を守る光</span>
          </h2>
          <span className="label__block">太阳能LED台灯</span>
          <p className="overview_text __wb">
            <span>BALMUDA The Lightは</span>
            <span>独自の光拡散技術により、</span>
            <span>目線の先に影を作らないデスクライト。</span>
            <br />
            <span>また、医療現場や美術館で使用される</span>
            <span>演色性の高い太陽光LEDを採用。</span>
            <br />
            <span>真剣な眼差しをやさしく守り、</span>
            <span>集中力を後押しします。</span>
          </p>
          <div className="the-price">
            <p className="price price--excl_tax" id="price2">
              40,700
            </p>
            <p className="colores">黑色/白色／米色</p>
          </div>
        </div>
      </div>

      <Link href="/light/technology">
        <a>
          <div className="section section--index section--01 scrollLoader lazyload">
            <div className="viewport scrollLoader fadeInUp lazyload">
              <div className="__content">
                <h3 className="section__subtitle __wb">
                  <span>目線の先に</span>
                  <span>影ができない光</span>
                </h3>
                <h4 className="section__h __wb">
                  <span>フォワードビーム</span>
                  <span>科技</span>
                  <span>
                    <em>（特許登録済）</em>
                  </span>
                </h4>
                <p className="section__desc">
                  医療用の手術灯をヒントに開発した独自の構造で、離れた場所から広く手元を照らします。
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>

      <Link href="/light/technology#led">
        <a>
          <div className="section section--index section--02 scrollLoader lazyload">
            <div className="viewport scrollLoader fadeInUp lazyload">
              <div className="__content">
                <h3 className="section__subtitle __wb">
                  <span>色鮮やか</span>
                </h3>
                <h4 className="section__h">太陽光LED</h4>
                <p className="section__desc">
                  美術館などの色にシビアな環境で使用される太陽光LEDは自然光に近い光。目にやさしく、集中力を妨げません。
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
      <div className="section section--index section--03 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h3 className="section__subtitle __wb">
              <span>ツールボックス&amp;</span>
              <span>ステッカー</span>
            </h3>
            <p className="section__desc">
              鉛筆やハサミや定規。ツールボックスにはお气に入りの道具を入れて、ライトアップすることができます。
            </p>
            <p className="section__desc">
              また、本体に貼る事ができる専用ステッカーが付属します。組み合わせて貼れば、自分だけのデスクライトになります。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--index section--05 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h3 className="section__subtitle">開発开发故事</h3>
            <p className="section__desc">
              子どもたちの目を守りたい。そんな思いから始まったBALMUDA The
              Lightの開発にまつわる开发故事をご紹介します。
            </p>
          </div>
        </div>
      </div>
      <div className="section section--blockquote">
        <div className="viewport">
          <h2 className="section__title">
            <img
              src="https://www.balmuda.com/jp/light/img/index/svg/media.svgz?20201006"
              className="__title"
              alt="MEDIA"
            />
            <span className="__caption">様々なメディアに取り上げられています</span>
          </h2>
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

      <div className="gallery scrollLoader lazyload">
        <div className="viewport">
          <div className="__content">
            <h2 className="gallery__h">画廊</h2>
          </div>

          <div className="gallery__content" data-pswp-uid="1">
            <figure>
              <a
                href="https://www.balmuda.com/jp/light/img/index/gallery/1@2x.jpg?20201006"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/light/img/index/gallery/1@2x.jpg?20201006"
                  data-desktop="https://www.balmuda.com/jp/light/img/index/gallery/1.jpg?20201006"
                  data-retina="https://www.balmuda.com/jp/light/img/index/gallery/1@2x.jpg?20201006"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/light/img/index/gallery/1@2x.jpg?20201006"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://www.balmuda.com/jp/light/img/index/gallery/2@2x.jpg?20201006"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/light/img/index/gallery/2@2x.jpg?20201006"
                  data-desktop="https://www.balmuda.com/jp/light/img/index/gallery/2.jpg?20201006"
                  data-retina="https://www.balmuda.com/jp/light/img/index/gallery/2@2x.jpg?20201006"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/light/img/index/gallery/2@2x.jpg?20201006"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://www.balmuda.com/jp/light/img/index/gallery/3@2x.jpg?20201006"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/light/img/index/gallery/3@2x.jpg?20201006"
                  data-desktop="https://www.balmuda.com/jp/light/img/index/gallery/3.jpg?20201006"
                  data-retina="https://www.balmuda.com/jp/light/img/index/gallery/3@2x.jpg?20201006"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/light/img/index/gallery/3@2x.jpg?20201006"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://www.balmuda.com/jp/light/img/index/gallery/4@2x.jpg?20201006"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/light/img/index/gallery/4@2x.jpg?20201006"
                  data-desktop="https://www.balmuda.com/jp/light/img/index/gallery/4.jpg?20201006"
                  data-retina="https://www.balmuda.com/jp/light/img/index/gallery/4@2x.jpg?20201006"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/light/img/index/gallery/4@2x.jpg?20201006"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://www.balmuda.com/jp/light/img/index/gallery/5@2x.jpg?20201006"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/light/img/index/gallery/5@2x.jpg?20201006"
                  data-desktop="https://www.balmuda.com/jp/light/img/index/gallery/5.jpg?20201006"
                  data-retina="https://www.balmuda.com/jp/light/img/index/gallery/5@2x.jpg?20201006"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/light/img/index/gallery/5@2x.jpg?20201006"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://www.balmuda.com/jp/light/img/index/gallery/6@2x.jpg?20201006"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/light/img/index/gallery/6@2x.jpg?20201006"
                  data-desktop="https://www.balmuda.com/jp/light/img/index/gallery/6.jpg?20201006"
                  data-retina="https://www.balmuda.com/jp/light/img/index/gallery/6@2x.jpg?20201006"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/light/img/index/gallery/6@2x.jpg?20201006"
                />
              </a>
            </figure>
          </div>
        </div>
      </div>
      <div className="pswp" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="pswp__bg"></div>

        <div className="pswp__scroll-wrap">
          <div className="pswp__container">
            <div className="pswp__item"></div>
            <div className="pswp__item"></div>
            <div className="pswp__item"></div>
          </div>

          <div className="pswp__ui pswp__ui--hidden">
            <div className="pswp__top-bar">
              <div className="pswp__counter"></div>

              <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>

              <button className="pswp__button pswp__button--share" title="Share"></button>

              <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

              <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

              <div className="pswp__preloader">
                <div className="pswp__preloader__icn">
                  <div className="pswp__preloader__cut">
                    <div className="pswp__preloader__donut"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div className="pswp__share-tooltip"></div>
            </div>

            <button
              className="pswp__button pswp__button--arrow--left"
              title="Previous (arrow left)"></button>
            <button
              className="pswp__button pswp__button--arrow--right"
              title="Next (arrow right)"></button>
            <div className="pswp__caption">
              <div className="pswp__caption__center"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
