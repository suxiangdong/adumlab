import { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import ReactSlick from 'react-slick'
import Layout from '../../layouts/default'
import API from '../../effects/api'

export async function getServerSideProps() {
  try {
    const [banners, evaluations] = await Promise.all([
      API.getBannersByCategory(1),
      API.getEvaluationsByCategory(1)
    ])
    return { props: { banners, evaluations } }
  } catch (error) {
    return { props: { banners: {}, evaluations: {} } }
  }
}

export default function ({ banners, evaluations }) {
  if (!banners || !Array.isArray(banners.data) || banners.data.length === 0) {
    banners.data = [0, 1, 2, 3].map((i) => ({
      id: i,
      image_url: `https://www.balmuda.com/jp/toaster/img/index/desktop/billboard--0${i}@2x.jpg?20210505`
    }))
  }

  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    setPlaying(true)
    const video = document.getElementById('v7b') as HTMLVideoElement
    video.style.opacity = '1'
    video.play()
  }

  const handleEnded = () => {
    setPlaying(false)
    const video = document.getElementById('v7b') as HTMLVideoElement
    video.style.opacity = '0'
    video.pause()
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
          href="/toaster/style/mobile.css?20210701173839"></link>
        <link rel="stylesheet" href="https://photoswipe.com/dist/photoswipe.css?v=4.1.3-1.0.4" />
        <link
          rel="stylesheet"
          href="https://photoswipe.com/dist/default-skin/default-skin.css?v=4.1.3-1.0.4"
        />
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/toaster/style/desktop.css?20210701173839"></link>
        <script src="https://www.balmuda.com/_theme/vendor/photoswipe/js/photoswipe.min.js"></script>
        <script src="https://www.balmuda.com/_theme/vendor/photoswipe/js/photoswipe-init-custom-opacity.js"></script>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <a href="/toaster/" className="pagemap__content--logo">
            <img
              className="w-full"
              src="/_theme/img/svg/balmuda-the-toaster.min.svgz"
              alt="BALMUDA The Toaster"
            />
          </a>
          <ul className="pagemap__main" id="greedynav-links">
            <li className={`pagemap__content__item __current`}>
              <Link href="/toaster">??????</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/taste">???????????????</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/technology">???????????????</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/howto">????????????</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/story">??????</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/spec">??????</Link>
            </li>
          </ul>
          <div className="pagemap__dropdown hidden" id="greedynav--btn">
            <span className="pagemap__dropdown__btn"></span>
            <ul className="pagemap__dropdown__content"></ul>
          </div>
          <div className="pagemap__btns">
            <a
              href="/support?PRODUCT_SERIES=K05A"
              className="btn btn--pagemap">
              ??????
            </a>
          </div>
        </div>
      </div>
      <div className="billboard__wrapper">
        <ReactSlick dots className="billboard">
          {banners.data.map((item) => (
            <img key={item.id} className="w-full" src={item.image_url} />
          ))}
        </ReactSlick>
        <div
          className={`__is_desktop section_overlay section_overlay--v7b ${
            playing ? 'visible' : ''
          }`}
          id="overlay--v7b">
          <video width="100%" height="100%" id="v7b" muted onEnded={handleEnded}>
            <source src="//s3.balmuda.com/www/jp/toaster/movie/v7b.mp4" type="video/mp4" />
          </video>
          <div className="video_stop" data-video-target="v7b" onClick={handleEnded}></div>
        </div>
        <div className="__is_desktop video_play" data-video-target="v7b" onClick={handlePlay}>
          <span></span>
        </div>
      </div>

      <div className="section section--index section--00">
        <div className="__mainimage">
          <div className="__inner">
            <img
              data-mobile="/toaster/img/index/mobile/main@2x.jpg?20210617"
              data-desktop="/toaster/img/index/desktop/main@2x.jpg?20210617"
              data-retina="/toaster/img/index/desktop/main@2x.jpg?20210617"
              className="__image adaptiveimage"
              src="/toaster/img/index/desktop/main@2x.jpg?20210617"
            />
          </div>
        </div>
        <div className="viewport">
          <h2 className="page__title">BALMUDA The Toaster</h2>
          <span className="label__block">??????????????????</span>
          <p className="overview_text __wb">
            BALMUDA The Toaster ?????????????????????????????????????????????????????????????????????
            ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          </p>

          {/* <div className="the-price">
            <p className="price price--excl_tax" id="price2">
              25,850
            </p>
            <p className="colores">??????/??????/??????/??????</p>
          </div> */}

          <div className="__is_mobile">
            <video
              controls={false}
              poster="https://www.balmuda.com/img/index/mobile/v7b.jpg"
              width="100%"
              height="100%">
              <source src="//s3.balmuda.com/www/jp/toaster/movie/v7b.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* <div className="book-info">
          <div className="book-photo">
            <img
              data-mobile="https://www.balmuda.com/jp/toaster/img/index/mobile/book_icon.jpg?20210617"
              data-desktop="https://www.balmuda.com/jp/toaster/img/index/desktop/book_icon.jpg?20210617"
              data-retina="https://www.balmuda.com/jp/toaster/img/index/desktop/book_icon@2x.jpg?20210617"
              className="__image adaptiveimage"
              src="https://www.balmuda.com/jp/toaster/img/index/desktop/book_icon@2x.jpg?20210617"
            />
          </div>

          <div className="book-info-text">
            <p className="info-bold">
              ????????????????????????????????????
              <br />
              ????????????
            </p>
            <p>
              <span>
                ???????????????????????????????????????100???????????????????????????????????????????????????????????????????????????
                <span>* 1?????????1??????</span>
              </span>
            </p>
          </div>
        </div> */}
      </div>
      <Link href="/toaster/taste">
        <div className="section section--index section--01 scrollLoader lazyload cursor-pointer">
          <div className="viewport scrollLoader fadeInUp lazyload">
            <div className="__content">
              <h2 className="section__title">???????????????</h2>
              <p>
                BALMUDA The Toaster ?????????????????????????????????????????????????????????????????????????????????????????????????????????5????????????????????????????????????????????????????????????
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/toaster/technology">
        <div className="section section--index section--02 scrollLoader lazyload cursor-pointer">
          <div className="viewport scrollLoader fadeInUp lazyload">
            <div className="__content">
              <h2 className="section__title">???????????????</h2>
              <p>
                BALMUDA The Toaster ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????BALMUDA???????????????????????????????????????????????????
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/toaster/howto">
        <div className="section section--index section--03 scrollLoader lazyload">
          <div className="viewport scrollLoader fadeInUp lazyload">
            <div className="__content">
              <h2 className="section__title">????????????</h2>
              <p>
                BALMUDA The Toaster ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/tosater/technology#temperature-control">
        <div className="section section--index section--04 scrollLoader lazyload">
          <div className="viewport scrollLoader fadeInUp lazyload">
            <div className="__content">
              <h2 className="section__title">?????????????????????</h2>
              <p>
                ?????? BALMUDA The Toaster ??????????????????????????????
                ????????????????????????????????????????????????????????????????????? ??????????????????????????????
              </p>
            </div>
          </div>
        </div>
      </Link>
      {/* <div className="section section--index section--gray scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">
              <span>???????????????</span>
              <br className="sp" />
              <span>??????????????????</span>
            </h2>
            <p>
              ????????????????????????????????????????????????????????????
              <br className="pc" />
              ?????????????????????????????????????????????????????????
              <br className="pc" />
              ????????????????????????????????????4???????????????????????????????????????????????????
            </p>
            <a href="#gallery" className="btn section__btn">
              ??????????????????
            </a>
          </div>
        </div>
      </div> */}
      <Link href="/toaster/design">
        <a>
          <section className="relative text-center">
            <img
              src="https://www.balmuda.com/jp/toaster/img/index/desktop/section--evolve@2x.jpg?20200901"
              alt=""
            />
            <div className="flex flex-col justify-center absolute inset-0 m-auto transform -translate-y-28 max-w-4xl">
              <h2 className="text-4xl mb-8">????????????????????????</h2>
              <p className="text-lg text-black mb-4 leading-8">
                ?????????????????????????????????????????????????????????????????????????????????????????
                <br />
                ??????????????????????????????????????????????????????
                <br />
                ?????????????????????????????????????????????????????????????????????????????????????????????
              </p>
            </div>
          </section>
        </a>
      </Link>
      {/* <section className="bg-recipe text-center py-24">
        <img
          className="h-20 mb-9 mx-auto"
          src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipes-logo@2x.png?"
          alt=""
        />
        <p className="max-w-4xl px-3 mb-9 mx-auto text-center">
          BALMUDA The Toaster ??????????????????????????????????????????
          <br />
          ????????????????????????????????????????????????????????????????????????????????????
        </p>
        <ReactSlick slidesToShow={3} centerMode infinite dots={false}>
          <div className="block px-5">
            <img
              className="custom-shadow mb-5"
              src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_010@2x.jpg?20200901"
              alt=""
            />
            <p className="text-lg text-center">?????????????????????</p>
          </div>

          <div className="block px-5">
            <img
              className="custom-shadow mb-5"
              src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_041@2x.jpg?20200901"
              alt=""
            />
            <p className="text-lg text-center">??????????????????????????????????????????</p>
          </div>

          <div className="block px-5">
            <img
              className="custom-shadow mb-5"
              src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_006@2x.jpg?20200901"
              alt=""
            />
            <p className="text-lg text-center">???????????????????????????</p>
          </div>

          <div className="block px-5">
            <img
              className="custom-shadow mb-5"
              src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_008@2x.jpg?20200901"
              alt=""
            />
            <p className="text-lg text-center">?????????????????????</p>
          </div>

          <div className="block px-5">
            <img
              className="custom-shadow mb-5"
              src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_042@2x.jpg?20200901"
              alt=""
            />
            <p className="text-lg text-center">????????????????????????</p>
          </div>

          <div className="block px-5">
            <img
              className="custom-shadow mb-5"
              src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_035@2x.jpg?20200901"
              alt=""
            />
            <p className="text-lg text-center">?????????????????????????????????</p>
          </div>

          <div className="block px-5">
            <img
              className="custom-shadow mb-5"
              src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_053@2x.jpg?20200901"
              alt=""
            />
            <p className="text-lg text-center">??????</p>
          </div>

          <div className="block px-5">
            <img
              className="custom-shadow mb-5"
              src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_044@2x.jpg?20200901"
              alt=""
            />
            <p className="text-lg text-center">?????????</p>
          </div>

          <div className="block px-5">
            <img
              className="custom-shadow mb-5"
              src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_054@2x.jpg?20200901"
              alt=""
            />
            <p className="text-lg text-center">??????????????????</p>
          </div>
        </ReactSlick>
      </section> */}
      <Link href="/toaster/story">
        <div className="section section--index section--story2 scrollLoader lazyload">
          <div className="viewport scrollLoader fadeInUp lazyload">
            <div className="__content">
              <h2 className="section__title">??????</h2>
              <p>
                BALMUDA The Toaster ????????????????????????1991?????????????????????????????????????????????
                ????????????????????????????????????BALMUDA The Toaster ??????????????????????????????
              </p>
            </div>
          </div>
        </div>
      </Link>
      {/* <Link href="/toaster/spec">
        <div className="section section--index section--acce scrollLoader lazyload">
          <div className="viewport scrollLoader fadeInUp lazyload">
            <div className="__content">
              <h2 className="section__title">??????</h2>
              <p>
                ?????????????????????????????????BALMUDA The
                Toaster???????????????????????????????????????????????????????????????????????????
              </p>
            </div>
          </div>
        </div>
      </Link> */}
      {/* <div className="section section--index section--blockquote">
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
      </div> */}

      <section className="gallery py-24 max-w-4xl mx-auto">
        <h2 className="text-4xl mb-8">??????</h2>
        <div className="gallery__content">
          <figure data-category="black" data-disabled="">
            <a
              href="https://www.balmuda.com/jp/toaster/img/index/gallery/1-zoom.jpg?20210617"
              data-size="800x800">
              <img
                data-mobile="./img/index/gallery/1@2x.jpg?20210617"
                data-desktop="./img/index/gallery/1.jpg?20210617"
                data-retina="./img/index/gallery/1@2x.jpg?20210617"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/toaster/img/index/gallery/1@2x.jpg?20210617"
              />
            </a>
          </figure>
          <figure data-category="black" data-disabled="">
            <a
              href="https://www.balmuda.com/jp/toaster/img/index/gallery/2-zoom.jpg?20210617"
              data-size="800x800">
              <img
                data-mobile="https://www.balmuda.com/jp/toaster/img/index/gallery/2@2x.jpg?20210617"
                data-desktop="https://www.balmuda.com/jp/toaster/img/index/gallery/2.jpg?20210617"
                data-retina="https://www.balmuda.com/jp/toaster/img/index/gallery/2@2x.jpg?20210617"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/toaster/img/index/gallery/2@2x.jpg?20210617"
              />
            </a>
          </figure>
          <figure data-category="black" data-disabled="">
            <a
              href="https://www.balmuda.com/jp/toaster/img/index/gallery/3-zoom.jpg?20210617"
              data-size="800x800">
              <img
                data-mobile="https://www.balmuda.com/jp/toaster/img/index/gallery/3@2x.jpg?20210617"
                data-desktop="https://www.balmuda.com/jp/toaster/img/index/gallery/3.jpg?20210617"
                data-retina="https://www.balmuda.com/jp/toaster/img/index/gallery/3@2x.jpg?20210617"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/toaster/img/index/gallery/3@2x.jpg?20210617"
              />
            </a>
          </figure>
          <figure data-category="black" data-disabled="">
            <a
              href="https://www.balmuda.com/jp/toaster/img/index/gallery/4-zoom.jpg?20210617"
              data-size="800x800">
              <img
                data-mobile="https://www.balmuda.com/jp/toaster/img/index/gallery/4@2x.jpg?20210617"
                data-desktop="https://www.balmuda.com/jp/toaster/img/index/gallery/4.jpg?20210617"
                data-retina="https://www.balmuda.com/jp/toaster/img/index/gallery/4@2x.jpg?20210617"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/toaster/img/index/gallery/4@2x.jpg?20210617"
              />
            </a>
          </figure>
          <figure data-category="black" data-disabled="">
            <a
              href="https://www.balmuda.com/jp/toaster/img/index/gallery/5-zoom.jpg?20210617"
              data-size="800x800">
              <img
                data-mobile="https://www.balmuda.com/jp/toaster/img/index/gallery/5@2x.jpg?20210617"
                data-desktop="https://www.balmuda.com/jp/toaster/img/index/gallery/5.jpg?20210617"
                data-retina="https://www.balmuda.com/jp/toaster/img/index/gallery/5@2x.jpg?20210617"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/toaster/img/index/gallery/5@2x.jpg?20210617"
              />
            </a>
          </figure>
          <figure data-category="black" data-disabled="">
            <a
              href="https://www.balmuda.com/jp/toaster/img/index/gallery/6-zoom.jpg?20210617"
              data-size="800x800">
              <img
                data-mobile="https://www.balmuda.com/jp/toaster/img/index/gallery/6@2x.jpg?20210617"
                data-desktop="https://www.balmuda.com/jp/toaster/img/index/gallery/6.jpg?20210617"
                data-retina="https://www.balmuda.com/jp/toaster/img/index/gallery/6@2x.jpg?20210617"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/toaster/img/index/gallery/6@2x.jpg?20210617"
              />
            </a>
          </figure>
          <figure data-category="white" data-disabled="">
            <a
              href="https://www.balmuda.com/jp/toaster/img/index/gallery/7-zoom.jpg?20210617"
              data-size="800x800">
              <img
                data-mobile="https://www.balmuda.com/jp/toaster/img/index/gallery/7@2x.jpg?20210617"
                data-desktop="https://www.balmuda.com/jp/toaster/img/index/gallery/7.jpg?20210617"
                data-retina="https://www.balmuda.com/jp/toaster/img/index/gallery/7@2x.jpg?20210617"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/toaster/img/index/gallery/7@2x.jpg?20210617"
              />
            </a>
          </figure>
          <figure data-category="white" data-disabled="">
            <a
              href="https://www.balmuda.com/jp/toaster/img/index/gallery/8-zoom.jpg?20210617"
              data-size="800x800">
              <img
                data-mobile="https://www.balmuda.com/jp/toaster/img/index/gallery/8@2x.jpg?20210617"
                data-desktop="https://www.balmuda.com/jp/toaster/img/index/gallery/8.jpg?20210617"
                data-retina="https://www.balmuda.com/jp/toaster/img/index/gallery/8@2x.jpg?20210617"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/toaster/img/index/gallery/8@2x.jpg?20210617"
              />
            </a>
          </figure>
          <figure data-category="white" data-disabled="">
            <a
              href="https://www.balmuda.com/jp/toaster/img/index/gallery/9-zoom.jpg?20210617"
              data-size="800x800">
              <img
                data-mobile="https://www.balmuda.com/jp/toaster/img/index/gallery/9@2x.jpg?20210617"
                data-desktop="https://www.balmuda.com/jp/toaster/img/index/gallery/9.jpg?20210617"
                data-retina="https://www.balmuda.com/jp/toaster/img/index/gallery/9@2x.jpg?20210617"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/toaster/img/index/gallery/9@2x.jpg?20210617"
              />
            </a>
          </figure>
          <figure data-category="white" data-disabled="">
            <a
              href="https://www.balmuda.com/jp/toaster/img/index/gallery/10-zoom.jpg?20210617"
              data-size="800x800">
              <img
                data-mobile="https://www.balmuda.com/jp/toaster/img/index/gallery/10@2x.jpg?20210617"
                data-desktop="https://www.balmuda.com/jp/toaster/img/index/gallery/10.jpg?20210617"
                data-retina="https://www.balmuda.com/jp/toaster/img/index/gallery/10@2x.jpg?20210617"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/toaster/img/index/gallery/10@2x.jpg?20210617"
              />
            </a>
          </figure>
          <figure data-category="white" data-disabled="">
            <a
              href="https://www.balmuda.com/jp/toaster/img/index/gallery/11-zoom.jpg?20210617"
              data-size="800x800">
              <img
                data-mobile="https://www.balmuda.com/jp/toaster/img/index/gallery/11@2x.jpg?20210617"
                data-desktop="https://www.balmuda.com/jp/toaster/img/index/gallery/11.jpg?20210617"
                data-retina="https://www.balmuda.com/jp/toaster/img/index/gallery/11@2x.jpg?20210617"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/toaster/img/index/gallery/11@2x.jpg?20210617"
              />
            </a>
          </figure>
          <figure data-category="white" data-disabled="">
            <a
              href="https://www.balmuda.com/jp/toaster/img/index/gallery/12-zoom.jpg?20210617"
              data-size="800x800">
              <img
                data-mobile="https://www.balmuda.com/jp/toaster/img/index/gallery/12@2x.jpg?20210617"
                data-desktop="https://www.balmuda.com/jp/toaster/img/index/gallery/12.jpg?20210617"
                data-retina="https://www.balmuda.com/jp/toaster/img/index/gallery/12@2x.jpg?20210617"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/toaster/img/index/gallery/12@2x.jpg?20210617"
              />
            </a>
          </figure>
          <figure data-category="beige" data-disabled="">
            <a
              href="https://www.balmuda.com/jp/toaster/img/index/gallery/13-zoom.jpg?20210617"
              data-size="800x800">
              <img
                data-mobile="https://www.balmuda.com/jp/toaster/img/index/gallery/13@2x.jpg?20210617"
                data-desktop="https://www.balmuda.com/jp/toaster/img/index/gallery/13.jpg?20210617"
                data-retina="https://www.balmuda.com/jp/toaster/img/index/gallery/13@2x.jpg?20210617"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/toaster/img/index/gallery/13@2x.jpg?20210617"
              />
            </a>
          </figure>
          <figure data-category="beige" data-disabled="">
            <a
              href="https://www.balmuda.com/jp/toaster/img/index/gallery/14-zoom.jpg?20210617"
              data-size="800x800">
              <img
                data-mobile="https://www.balmuda.com/jp/toaster/img/index/gallery/14@2x.jpg?20210617"
                data-desktop="https://www.balmuda.com/jp/toaster/img/index/gallery/14.jpg?20210617"
                data-retina="https://www.balmuda.com/jp/toaster/img/index/gallery/14@2x.jpg?20210617"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/toaster/img/index/gallery/14@2x.jpg?20210617"
              />
            </a>
          </figure>
          <figure data-category="beige" data-disabled="">
            <a
              href="https://www.balmuda.com/jp/toaster/img/index/gallery/15-zoom.jpg?20210617"
              data-size="800x800">
              <img
                data-mobile="https://www.balmuda.com/jp/toaster/img/index/gallery/15@2x.jpg?20210617"
                data-desktop="https://www.balmuda.com/jp/toaster/img/index/gallery/15.jpg?20210617"
                data-retina="https://www.balmuda.com/jp/toaster/img/index/gallery/15@2x.jpg?20210617"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/toaster/img/index/gallery/15@2x.jpg?20210617"
              />
            </a>
          </figure>
          <figure data-category="beige" data-disabled="">
            <a
              href="https://www.balmuda.com/jp/toaster/img/index/gallery/16-zoom.jpg?20210617"
              data-size="800x800">
              <img
                data-mobile="https://www.balmuda.com/jp/toaster/img/index/gallery/16@2x.jpg?20210617"
                data-desktop="https://www.balmuda.com/jp/toaster/img/index/gallery/16.jpg?20210617"
                data-retina="https://www.balmuda.com/jp/toaster/img/index/gallery/16@2x.jpg?20210617"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/toaster/img/index/gallery/16@2x.jpg?20210617"
              />
            </a>
          </figure>
          <figure data-category="beige" data-disabled="">
            <a
              href="https://www.balmuda.com/jp/toaster/img/index/gallery/17-zoom.jpg?20210617"
              data-size="800x800">
              <img
                data-mobile="https://www.balmuda.com/jp/toaster/img/index/gallery/17@2x.jpg?20210617"
                data-desktop="https://www.balmuda.com/jp/toaster/img/index/gallery/17.jpg?20210617"
                data-retina="https://www.balmuda.com/jp/toaster/img/index/gallery/17@2x.jpg?20210617"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/toaster/img/index/gallery/17@2x.jpg?20210617"
              />
            </a>
          </figure>
          <figure data-category="beige" data-disabled="">
            <a
              href="https://www.balmuda.com/jp/toaster/img/index/gallery/18-zoom.jpg?20210617"
              data-size="800x800">
              <img
                data-mobile="https://www.balmuda.com/jp/toaster/img/index/gallery/18@2x.jpg?20210617"
                data-desktop="https://www.balmuda.com/jp/toaster/img/index/gallery/18.jpg?20210617"
                data-retina="https://www.balmuda.com/jp/toaster/img/index/gallery/18@2x.jpg?20210617"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/toaster/img/index/gallery/18@2x.jpg?20210617"
              />
            </a>
          </figure>
          <figure data-category="gray">
            <a
              href="https://www.balmuda.com/jp/toaster/img/index/gallery/19-zoom.jpg?20210617"
              data-size="800x800">
              <img
                data-mobile="https://www.balmuda.com/jp/toaster/img/index/gallery/19@2x.jpg?20210617"
                data-desktop="https://www.balmuda.com/jp/toaster/img/index/gallery/19.jpg?20210617"
                data-retina="https://www.balmuda.com/jp/toaster/img/index/gallery/19@2x.jpg?20210617"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/toaster/img/index/gallery/19@2x.jpg?20210617"
              />
            </a>
          </figure>
          <figure data-category="gray">
            <a
              href="https://www.balmuda.com/jp/toaster/img/index/gallery/20-zoom.jpg?20210617"
              data-size="800x800">
              <img
                data-mobile="https://www.balmuda.com/jp/toaster/img/index/gallery/20@2x.jpg?20210617"
                data-desktop="https://www.balmuda.com/jp/toaster/img/index/gallery/20.jpg?20210617"
                data-retina="https://www.balmuda.com/jp/toaster/img/index/gallery/20@2x.jpg?20210617"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/toaster/img/index/gallery/20@2x.jpg?20210617"
              />
            </a>
          </figure>
          <figure data-category="gray">
            <a
              href="https://www.balmuda.com/jp/toaster/img/index/gallery/21-zoom.jpg?20210617"
              data-size="800x800">
              <img
                data-mobile="https://www.balmuda.com/jp/toaster/img/index/gallery/21@2x.jpg?20210617"
                data-desktop="https://www.balmuda.com/jp/toaster/img/index/gallery/21.jpg?20210617"
                data-retina="https://www.balmuda.com/jp/toaster/img/index/gallery/21@2x.jpg?20210617"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/toaster/img/index/gallery/21@2x.jpg?20210617"
              />
            </a>
          </figure>
          <figure data-category="gray">
            <a
              href="https://www.balmuda.com/jp/toaster/img/index/gallery/22-zoom.jpg?20210617"
              data-size="800x800">
              <img
                data-mobile="https://www.balmuda.com/jp/toaster/img/index/gallery/22@2x.jpg?20210617"
                data-desktop="https://www.balmuda.com/jp/toaster/img/index/gallery/22.jpg?20210617"
                data-retina="https://www.balmuda.com/jp/toaster/img/index/gallery/22@2x.jpg?20210617"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/toaster/img/index/gallery/22@2x.jpg?20210617"
              />
            </a>
          </figure>
          <figure data-category="gray">
            <a
              href="https://www.balmuda.com/jp/toaster/img/index/gallery/23-zoom.jpg?20210617"
              data-size="800x800">
              <img
                data-mobile="https://www.balmuda.com/jp/toaster/img/index/gallery/23@2x.jpg?20210617"
                data-desktop="https://www.balmuda.com/jp/toaster/img/index/gallery/23.jpg?20210617"
                data-retina="https://www.balmuda.com/jp/toaster/img/index/gallery/23@2x.jpg?20210617"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/toaster/img/index/gallery/23@2x.jpg?20210617"
              />
            </a>
          </figure>
          <figure data-category="gray">
            <a
              href="https://www.balmuda.com/jp/toaster/img/index/gallery/24-zoom.jpg?20210617"
              data-size="800x800">
              <img
                data-mobile="https://www.balmuda.com/jp/toaster/img/index/gallery/24@2x.jpg?20210617"
                data-desktop="https://www.balmuda.com/jp/toaster/img/index/gallery/24.jpg?20210617"
                data-retina="https://www.balmuda.com/jp/toaster/img/index/gallery/24@2x.jpg?20210617"
                className="__clip adaptiveimage"
                src="https://www.balmuda.com/jp/toaster/img/index/gallery/24@2x.jpg?20210617"
              />
            </a>
          </figure>
        </div>
      </section>
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
