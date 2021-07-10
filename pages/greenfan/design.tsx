import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'

export default function ProductDetail() {

  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/greenfan/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/greenfan/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <a href="/greenfan/" className="pagemap__content--logo">
            <img
              className="w-full"
              src="/_theme/img/svg/the-greenfan.000.min.svgz"
              alt="The GreenFan"
            />
          </a>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/greenfan/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--feature ">
              <Link href="/greenfan/feature">風の気持ちよさ</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design __current">
              <Link href="/greenfan/design">使いやすさ</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story">
              <Link href="/greenfan/story">ストーリー</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/greenfan/spec">スペック</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=EGF-1700"
              className="btn btn--pagemap">
              購入
            </a>
          </div>
        </div>
      </div>

      <div className="section section--design section--00">
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title __wb">使いやすさ</h2>
            <p>
              暑い夏を過ごしやすくするグリーンファンは、
              <br />
              暮らしの中のさまざまなシーンで活躍する使いやすさを備えています。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--design section--00a">
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title __wb">
              エアコンとの併用で
              <br />
              健康的に涼しく
            </h2>
            <p>
              The
              GreenFanをエアコンの対角線上に配置し、エアコンの方へ向け下に滞留する冷気を循環させると部屋全体が涼しくなります。
            </p>
          </div>
          <img
            src="//www.balmuda.com/jp/greenfan/img/design/svg/section--00a.svgz?20210406"
            className="__title"
            alt="The GreenFanとエアコンの併用"
          />
        </div>
      </div>

      <div className="section section--design section--01 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">風を持ち運ぶ</h2>
            <p>
              オプションのバッテリー&amp;ドックを使うことでサッと様々な場所で使用することができます。夏の暑いキッチンに、お風呂あがりの脱衣所に。気持ちのよい自然界の風を家中どこでも持ち運べます。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--design section--03 scrollLoader lazyload loaded" id="quiet">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">眠りも妨げない静音性</h2>
            <p>
              圧倒的な静音性を実現したグリーンファン。風量1の音量はたった13dB、それは蝶2羽の羽ばたきと同じ。気持ちよく静かな風は夏の寝室に最適です。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--design section--04 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">洗濯物もあっという間</h2>
            <p>
              送風効率のよいグリーンファンは広い面積の風が15メートル先まで届き、首振り角度を自由に設定できるので、部屋干しの洗濯物を効率的に乾かすことができます。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}