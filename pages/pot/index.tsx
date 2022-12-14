import Link from 'next/link'
import Head from 'next/head'
import ReactSlick from 'react-slick'
import Layout from '../../layouts/default'
import API from '../../effects/api'
import { useEffect } from 'react'

export async function getServerSideProps() {
  try {
    const [banners] = await Promise.all([API.getBannersByCategory(2)])
    return { props: { banners } }
  } catch (error) {
    return { props: { banners: {} } }
  }
}

export default function ProductDetail({ banners }) {
  if (!banners || !Array.isArray(banners.data) || banners.data.length === 0) {
    banners.data = [0, 1, 2, 3].map((i) => ({
      id: i,
      image_url: `https://www.balmuda.com/jp/pot/img/index/desktop/billboard--0${i}@2x.jpg?20201006`
    }))
  }

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
          href="/pot/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/pot/style/desktop.css?20210701173839"></link>
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
          <a href="/pot/" className="pagemap__content--logo">
            <img src="/_theme/img/svg/balmuda-the-pot.min.svgz" alt="BALMUDA The Pot " />
          </a>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index __current">
              <Link href="/pot/">??????</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design">
              <Link href="/pot/design">??????</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story">
              <Link href="/pot/story">??????</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/pot/spec">??????</Link>
            </li>
          </ul>
          <div className="pagemap__dropdown hidden" id="greedynav--btn">
            <span className="pagemap__dropdown__btn"></span>
            <ul className="pagemap__dropdown__content"></ul>
          </div>
          <div className="pagemap__btns">
            <a
              href="/support?PRODUCT_SERIES=K02A"
              className="btn btn--pagemap">
              ??????
            </a>
          </div>
        </div>
      </div>
      <div className="billboard__wrapper">
        <ReactSlick className="billboard" dots>
          {banners.data.map((item, index) =>
            index === 0 ? (
              <div key={item.id} className="billboard--00">
                <img className="w-full" src={item.image_url} />
              </div>
            ) : (
              <img key={item.id} className="w-full" src={item.image_url} />
            )
          )}
        </ReactSlick>
      </div>

      <div className="section section--index section--00">
        <div className="__mainimage">
          <div className="__inner">
            <img
              data-mobile="https://www.balmuda.com/jp/pot/img/index/mobile/main.jpg?20201006"
              data-desktop="https://www.balmuda.com/jp/pot/img/index/desktop/main.jpg?20201006"
              data-retina="https://www.balmuda.com/jp/pot/img/index/desktop/main@2x.jpg?20201006"
              className="__image adaptiveimage"
              src="https://www.balmuda.com/jp/pot/img/index/desktop/main@2x.jpg?20201006"
            />
          </div>
        </div>
        <div className="viewport">
          <h2 className="page__title __wb">
            <span>?????????????????????</span>
          </h2>
          <span className="label__block">600ml 1200w??????????????????</span>
          <p className="overview_text">
            BALMUDA The Pot ???
            <br />
            ?????????????????????????????????????????????????????????
          </p>
          {/* <div className="the-price">
            <p className="price price--excl_tax" id="price2">
              12,100
            </p>
            <p className="colores">??????/??????</p>
          </div> */}
        </div>
      </div>

      <div className="section section--index section--01 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h3 className="section__subtitle">??????</h3>
            <h2 className="section__title __wb">
              <span>??????????????????????????????</span>
              <span>?????????????????????</span>
              <span>????????????</span>
            </h2>
            <p>
              600ml???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
            </p>
            <Link href="/pot/design">
              <a className="btn btn--page btn--page--white">??????</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="section section--index section--02 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h3 className="section__subtitle">????????????</h3>
            <p>??????????????????????????????????????????????????????????????????????????????????????????????????????</p>
          </div>
        </div>
      </div>

      <div className="section section--index section--03 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h3 className="section__subtitle">??????</h3>
            <h2 className="section__title __wb">
              <span>BALMUDA The Pot ???</span>
              <span>??????????????????</span>
            </h2>
            <p>
              ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????BALMUDA The Pot ????????????????????????????????????
            </p>
            <Link href="/pot/story">
              <a className="btn btn--page">??????</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="section section--index section--gallery">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">??????</h2>
          </div>

          <div className="gallery__content" data-pswp-uid="1">
            <figure>
              <a
                href="https://www.balmuda.com/jp/pot/img/index/gallery/1@2x.jpg?20201006"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/pot/img/index/gallery/1@2x.jpg?20201006"
                  data-desktop="https://www.balmuda.com/jp/pot/img/index/gallery/1.jpg?20201006"
                  data-retina="https://www.balmuda.com/jp/pot/img/index/gallery/1@2x.jpg?20201006"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/pot/img/index/gallery/1@2x.jpg?20201006"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://www.balmuda.com/jp/pot/img/index/gallery/2@2x.jpg?20201006"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/pot/img/index/gallery/2@2x.jpg?20201006"
                  data-desktop="https://www.balmuda.com/jp/pot/img/index/gallery/2.jpg?20201006"
                  data-retina="https://www.balmuda.com/jp/pot/img/index/gallery/2@2x.jpg?20201006"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/pot/img/index/gallery/2@2x.jpg?20201006"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://www.balmuda.com/jp/pot/img/index/gallery/3@2x.jpg?20201006"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/pot/img/index/gallery/3@2x.jpg?20201006"
                  data-desktop="https://www.balmuda.com/jp/pot/img/index/gallery/3.jpg?20201006"
                  data-retina="https://www.balmuda.com/jp/pot/img/index/gallery/3@2x.jpg?20201006"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/pot/img/index/gallery/3@2x.jpg?20201006"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://www.balmuda.com/jp/pot/img/index/gallery/4@2x.jpg?20201006"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/pot/img/index/gallery/4@2x.jpg?20201006"
                  data-desktop="https://www.balmuda.com/jp/pot/img/index/gallery/4.jpg?20201006"
                  data-retina="https://www.balmuda.com/jp/pot/img/index/gallery/4@2x.jpg?20201006"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/pot/img/index/gallery/4@2x.jpg?20201006"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://www.balmuda.com/jp/pot/img/index/gallery/5@2x.jpg?20201006"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/pot/img/index/gallery/5@2x.jpg?20201006"
                  data-desktop="https://www.balmuda.com/jp/pot/img/index/gallery/5.jpg?20201006"
                  data-retina="https://www.balmuda.com/jp/pot/img/index/gallery/5@2x.jpg?20201006"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/pot/img/index/gallery/5@2x.jpg?20201006"
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://www.balmuda.com/jp/pot/img/index/gallery/6@2x.jpg?20201006"
                data-size="800x800">
                <img
                  data-mobile="https://www.balmuda.com/jp/pot/img/index/gallery/6@2x.jpg?20201006"
                  data-desktop="https://www.balmuda.com/jp/pot/img/index/gallery/6.jpg?20201006"
                  data-retina="https://www.balmuda.com/jp/pot/img/index/gallery/6@2x.jpg?20201006"
                  className="__clip adaptiveimage"
                  src="https://www.balmuda.com/jp/pot/img/index/gallery/6@2x.jpg?20201006"
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
