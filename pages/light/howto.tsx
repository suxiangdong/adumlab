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
          href="/light/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/light/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <Link href="/light/">
            <a className="pagemap__content--logo">
              <img src="/_theme/img/svg/balmuda-the-light.min.svgz" alt="BALMUDA The Light" />
            </a>
          </Link>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/light/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology ">
              <Link href="/light/technology">科技与设计</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--howto __current">
              <Link href="/light/howto">使用方法</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/light/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="/support?PRODUCT_SERIES=L01A"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>
      <div className="section section--howto section--00">
        <div className="viewport">
          <div className="__content">
            <p className="font-bold w-96 text-3xl">BALMUDA The Light 并非由</p>
            <p className="font-bold w-96 text-3xl mt-2">上而下照射的光源，而是将</p>
            <p className="font-bold w-96 text-3xl mt-2">光照中心点设置在距离主体</p>
            <p className="font-bold w-96 text-3xl mt-2">约30公分处，达到较大范围</p>
            <p className="font-bold w-96 text-3xl mt-2">的照明。</p>
            <p className="mt-2">
            利用三个步骤介绍有效的放置和使用方法，将 BALMUDA The Light 的功能发挥到极致。
            </p>
          </div>
          <div className="__img">
            <img
              data-mobile="https://www.balmuda.com/jp/light/img/howto/mobile/section--00.png"
              data-desktop="https://www.balmuda.com/jp/light/img/howto/desktop/section--00.png"
              data-retina="https://www.balmuda.com/jp/light/img/howto/desktop/section--00@2x.png"
              className="__image adaptiveimage"
              src="https://www.balmuda.com/jp/light/img/howto/desktop/section--00@2x.png"
            />
          </div>
        </div>
      </div>

      <div className="section section--howto section--01">
        <div className="viewport">
          <div className="__column __01 scrollLoader fadeInUp lazyload">
            <div className="__content">
              <h2 className="__title __wb">
                <span>将台灯放置在惯用手的相反方向的对角线上。</span>
              </h2>
              <div className="__img">
                <img
                  data-mobile="https://www.balmuda.com/jp/light/img/howto/mobile/column--1--position.png"
                  data-desktop="https://www.balmuda.com/jp/light/img/howto/desktop/column--1--position.png"
                  data-retina="https://www.balmuda.com/jp/light/img/howto/desktop/column--1--position@2x.png"
                  className="__image adaptiveimage"
                  src="https://www.balmuda.com/jp/light/img/howto/desktop/column--1--position@2x.png"
                />
              </div>
            </div>
            <div className="__point">
              <p className="__subtitle">放置在惯用手的对角线，在手边视觉范围内不会造成阴影。</p>
            </div>
          </div>

          <div className="__column __02 scrollLoader fadeInUp lazyload">
            <div className="__content">
              <h2 className="__title __wb">
                <span>光源请勿直接照射眼睛，
水平调整台灯头部</span>
              </h2>
              <p className="pl-28">
              即使水平调整也感受到刺眼的话，请再向内调整台灯头部的角度。
              </p>
              <div className="__img">
                <img
                  data-mobile="https://www.balmuda.com/jp/light/img/howto/mobile/column--2--horizontal.png"
                  data-desktop="https://www.balmuda.com/jp/light/img/howto/desktop/column--2--horizontal.png"
                  data-retina="https://www.balmuda.com/jp/light/img/howto/desktop/column--2--horizontal@2x.png"
                  className="__image adaptiveimage"
                  src="https://www.balmuda.com/jp/light/img/howto/desktop/column--2--horizontal@2x.png"
                />
              </div>
            </div>
            <div className="__point">
              <p className="__subtitle">可根据办公桌大小使用</p>
              <img
                data-mobile="https://www.balmuda.com/jp/light/img/howto/mobile/column--2--point--adjust.png"
                data-desktop="https://www.balmuda.com/jp/light/img/howto/desktop/column--2--point--adjust.png"
                data-retina="https://www.balmuda.com/jp/light/img/howto/desktop/column--2--point--adjust@2x.png"
                className="__image adaptiveimage"
                src="https://www.balmuda.com/jp/light/img/howto/desktop/column--2--point--adjust@2x.png"
              />
            </div>
          </div>

          <div className="__column __03 scrollLoader fadeInUp lazyload">
            <div className="__content">
              <h2 className="__title __wb">
                <span>配合放置作业环境
调整明亮度</span>
                </h2>
              <p>
              在宁静氛围的室内，建议设定1-3档，较明亮的室内或进行细微作业时，建议设定4-6档              </p>
              <div className="__img">
                <img
                  data-mobile="https://www.balmuda.com/jp/light/img/howto/mobile/column--3--dial.png"
                  data-desktop="https://www.balmuda.com/jp/light/img/howto/desktop/column--3--dial.png"
                  data-retina="https://www.balmuda.com/jp/light/img/howto/desktop/column--3--dial@2x.png"
                  className="__image adaptiveimage"
                  src="https://www.balmuda.com/jp/light/img/howto/desktop/column--3--dial@2x.png"
                />
              </div>
            </div>
            <div className="__point">
              <p className="__subtitle">提高集中力的使用方法</p>
              <p className="__caption">
              相比整间房间都是一样的亮度，在有点昏暗的房间，搭配台灯，让房间内有5-10倍左右的亮度差，一般认为何样的明暗落差环境，是可以提高集中力的。           </p>
              <p className="__caption">
              * Lx照度：代表照射到平面明亮度的单位。             </p>
              <div className="__img">
                <img
                  data-mobile="https://www.balmuda.com/jp/light/img/howto/mobile/column--3--point--illuminance.png?20200603"
                  data-desktop="https://www.balmuda.com/jp/light/img/howto/desktop/column--3--point--illuminance.png?20200603"
                  data-retina="https://www.balmuda.com/jp/light/img/howto/desktop/column--3--point--illuminance@2x.png?20200603"
                  className="__image adaptiveimage"
                  src="https://www.balmuda.com/jp/light/img/howto/desktop/column--3--point--illuminance@2x.png?20200603"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--howto section--02 scrollLoader fadeInUp lazyload">
        <div className="viewport">
          <div className="__content">
          <p className="font-bold w-96 text-3xl">BALMUDA The Light 是通过</p>
            <p className="font-bold w-96 text-3xl mt-2">前束光技术，手边的视野范</p>
            <p className="font-bold w-96 text-3xl mt-2">围内不产生阴影，提供舒适</p>
            <p className="font-bold w-96 text-3xl mt-2">的亮度。</p>
            <p className="__wb mt-2">
              <span>将自己喜爱的文具放到工具箱里，享受专属自己的桌面工作乐趣。</span>
            </p>
          </div>
          <div className="__img">
            <img
              data-mobile="https://www.balmuda.com/jp/light/img/howto/mobile/section--02.png?20200603"
              data-desktop="https://www.balmuda.com/jp/light/img/howto/desktop/section--02.png?20200603"
              data-retina="https://www.balmuda.com/jp/light/img/howto/desktop/section--02@2x.png?20200603"
              className="__image adaptiveimage"
              src="https://www.balmuda.com/jp/light/img/howto/desktop/section--02@2x.png?20200603"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
