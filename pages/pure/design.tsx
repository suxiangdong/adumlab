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
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/pure/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology">
              <Link href="/pure/technology">科技</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design __current">
              <Link href="/pure/design">设计</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--howto">
              <Link href="/pure/howto">使用方法</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/pure/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a href="/support?PRODUCT_SERIES=A01A" className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="section section--design section--00">
        <div className="billboard__wrapper">
          <img
            data-mobile="https://www.balmuda.com/jp/pure/img/design/movie/design_head_mobile.jpg"
            data-desktop="https://www.balmuda.com/jp/pure/img/design/movie/design_head_desktop.jpg"
            data-retina="https://www.balmuda.com/jp/pure/img/design/movie/design_head_desktop@2x.jpg"
            className="__image adaptiveimage"
            src="https://www.balmuda.com/jp/pure/img/design/movie/design_head_desktop@2x.jpg"
            alt=""
          />
        </div>

        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">
            光的明亮度

            </h2>
            <p>
              BALMUDA The Pure 光的明亮度会随着空气清净风量的强弱进行变化，
              <br />
              主体采极简的风格，导入光成为设计的一部分，
              <br />
              透过光柱，让室内空气持续清净，
              <br />
              光柱的明亮度，会随着室内光线变暗而变暗。
            </p>
          </div>
        </div>
      </div>

      {/* <div className="section section--design section--01 scrollLoader lazyload">
        <div className="__image __is_mobile">
          <img
            data-mobile="https://www.balmuda.com/jp/pure/img/design/mobile/section--01.jpg"
            className="__image adaptiveimage"
            src="https://www.balmuda.com/jp/pure/img/design/mobile/section--01.jpg"
            alt=""
          />
        </div>
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">はっきりとわかる作用感</h2>
            <p>
              たとえば他の灯りが消えた夜中のリビングで。BALMUDA The Pure
              が動作中の場合、薄暗く流路が光っています。それは空气が清浄されつづけているサイン。寝室などでお使いの場合、光を消灯させることもできます。
            </p>
          </div>
        </div>
      </div> */}

      <div className="design--image__wrapper scrollLoader lazyload">
        <ReactSlick dots className="design--image" id="pure--design">
          <div className="design--00">
            <img
              data-mobile="https://www.balmuda.com/jp/pure/img/design/mobile/design--00.jpg"
              data-desktop="https://www.balmuda.com/jp/pure/img/design/desktop/design--00.jpg"
              data-retina="https://www.balmuda.com/jp/pure/img/design/desktop/design--00@2x.jpg"
              src="https://www.balmuda.com/jp/pure/img/design/desktop/design--00@2x.jpg"
              className="__image adaptiveimage slick--lazy"
              alt=""
            />
          </div>
          <div className="design--01">
            <img
              data-mobile="https://www.balmuda.com/jp/pure/img/design/mobile/design--01.jpg"
              data-desktop="https://www.balmuda.com/jp/pure/img/design/desktop/design--01.jpg"
              data-retina="https://www.balmuda.com/jp/pure/img/design/desktop/design--01@2x.jpg"
              src="https://www.balmuda.com/jp/pure/img/design/desktop/design--01@2x.jpg"
              className="__image adaptiveimage slick--lazy"
              alt=""
            />
          </div>
        </ReactSlick>
        <div className="__text">
          <div className="viewport">
            <div className="__content">
              <h2 className="section__title">简洁的存在感</h2>
              <p>
                客厅或房间的主角，理所当然是人。并且会放置着日常使用的家具或床。我们想在相同空间放置的家电，尽量不要让它感受到存在感比较好吧。因此追求极简的简洁感。另外，放置面积亦只需要约A4纸张的大小，和其他家具一起摆放时，也不会感到多余
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--design section--02 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">操作简单</h2>
            <p>
              所有的操作，只需利用上方的3个按键，即可完成。
              <br />
              令人愉悦的操作音，亦提供使用的舒适感。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--design section--03 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <div className="control">
              <div className="power">
                <span>电源</span>
              </div>
              <div className="operation">
                <span>
                  运转模式
                  <br />
                  指示灯
                </span>
              </div>
              <div className="modechange">
                <span>自动、手动模式切换</span>
              </div>
              <div className="jetcleaning">
                <span>喷射清洁模式</span>
              </div>
            </div>
            <div className="desc desc_1">
              <div className="desc__icon">
                <img
                  src="https://www.balmuda.com/jp/pure/img/design/svg/autoormanual.svg"
                  alt="自动、手动模式"
                />
              </div>
              <div className="text">
                <p>
                  <span className="title">自动模式：</span>
                  搭载内建传感器，可以自动控制风量
                </p>
                <p>
                  <span className="title">手动模式：</span>可以设定3档风量大小
                </p>
              </div>
            </div>
            <div className="desc desc_2">
              <div className="desc__icon">
                <img
                  src="https://www.balmuda.com/jp/pure/img/design/svg/jetcleaning.svg"
                  alt="喷射清洁模式"
                />
              </div>
              <div className="text">
                <p>
                  <span className="title">喷射清洁模式：</span>
                  最大风量模式，提供强力循环气流，可以有效净化室内空气。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="section section--design section--04 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title __wb">
              お手入れ簡単、
              <br className="sp" />
              水洗いOK
            </h2>
            <img
              data-mobile="https://www.balmuda.com/jp/pure/img/design/mobile/section--04.png"
              data-desktop="https://www.balmuda.com/jp/pure/img/design/desktop/section--04.png"
              data-retina="https://www.balmuda.com/jp/pure/img/design/desktop/section--04@2x.png"
              className="__image adaptiveimage"
              src="https://www.balmuda.com/jp/pure/img/design/desktop/section--04@2x.png"
              alt=""
            />
            <p>
              BALMUDA The Pureは、お手入れも簡単。ホコリが溜まりやすいパーツを取り外して
              <br />
              水洗いすることが可能。いつも清潔に保つことができます。
            </p>
            <Link href="/pure/spec">
              <a className="button section__btn">详情</a>
            </Link>
          </div>
        </div>
      </div> */}
    </Layout>
  )
}
