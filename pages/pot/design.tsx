import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'
import { useState } from 'react'

export default function ProductDetail() {
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    setPlaying(true)
		const video = document.getElementById('__video_content') as HTMLVideoElement
    video.style.opacity = '1'
    video.play()
  }

  const handleEnded = () => {
    setPlaying(false)
		const video = document.getElementById('__video_content') as HTMLVideoElement
    video.style.opacity = '0'
		video.pause()
  }
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
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <a href="/pot/" className="pagemap__content--logo">
            <img src="/_theme/img/svg/balmuda-the-pot.min.svgz" alt="BALMUDA The Pot" />
          </a>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/pot/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design __current">
              <Link href="/pot/design">设计</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story">
              <Link href="/pot/story">故事</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/pot/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__dropdown hidden" id="greedynav--btn">
            <span className="pagemap__dropdown__btn"></span>
            <ul className="pagemap__dropdown__content"></ul>
          </div>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=K02A"
              className="btn btn--pagemap">
              購入
            </a>
          </div>
        </div>
      </div>

      <div className="section section--design section--00">
        <img
          src="//www.balmuda.com/jp/pot/img/design/mobile/section--00.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">
              毎日つかいたくなる
              <br />
              電気ケトル
            </h2>
            <p>
              小さなサイズだから、湯沸かしがより手軽に。ステンレスに塗装をほどこした美しい質感とほんのりと光る灯台のような電源ランプが、1日に何度もくり返す湯を沸かす時間を楽しくします。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--design section--01 scrollLoader lazyload loaded">
        <img
          src="//www.balmuda.com/jp/pot/img/design/mobile/section--01.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">ちょうどいいサイズ、使いやすい軽さ</h2>
            <p>
              コーヒー3杯、カップヌードル2杯分。よく使う量に合わせたサイズです。取り回しやすく、さっと使える軽さです。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--design section--05 scrollLoader lazyload loaded">
        <img
          src="//www.balmuda.com/jp/pot/img/design/mobile/section--05.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">気持ちいいくらいの注ぎごこち</h2>
            <p>
              研究しつくされたハンドルとノズルが今までにない注ぎ心地を実現しました。ハンドルはすっと手になじみ、ノズルは湯切れよく、ねらったところに的確に注ぎやすいように設計されています。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--design section--06 scrollLoader lazyload loaded">
        <img
          src="//www.balmuda.com/jp/pot/img/design/mobile/section--06.jpg"
          className="__section_image __is_mobile"
        />
        <div className="__is_mobile">
          <div className="__overlay_video">
            <video controls={true} muted={true} width="100%" height="100%" onEnded={handleEnded}>
              <source src="//s3.balmuda.com/www/jp/pot/movie/v2.mp4" type="video/mp4" />
              <source src="//s3.balmuda.com/www/jp/pot/movie/v2.webm" type="video/webm" />
              <source src="//s3.balmuda.com/www/jp/pot/movie/v2.ogv" type="video/ogg" />
            </video>
          </div>
        </div>
        <div className="__is_desktop">
          <div className="__overlay_video">
            <video muted={true} width="100%" height="100%" id="__video_content" onEnded={handleEnded}>
              <source src="//s3.balmuda.com/www/jp/pot/movie/v1.mp4" type="video/mp4" />
              <source src="//s3.balmuda.com/www/jp/pot/movie/v1.webm" type="video/webm" />
              <source src="//s3.balmuda.com/www/jp/pot/movie/v1.ogv" type="video/ogg" />
            </video>
          </div>
          <span
            className={`__video_play ${playing ? '' : '__visible'}`}
            id="__video_play"
            onClick={handlePlay}>
            ビデオを再生
          </span>
        </div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">ゆっくりも、はやくも自由自在</h2>
            <p>
              ドリップコーヒーはゆっくりと、カップ麺はすばやく。ストレスなく流速をコントロールすることができるので、湯を注ぐ時間が今よりもっと楽しくなります。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--design section--03 scrollLoader lazyload loaded">
        <img
          src="//www.balmuda.com/jp/pot/img/design/mobile/section--03.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">どこからでも見やすい灯り</h2>
            <p>
              いろいろな角度から見やすい電源ランプは小さなネオン管を使った独特の優しい灯り。湯を沸かすほんの一瞬も豊かな時間になります。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--design section--04 scrollLoader lazyload loaded">
        <img
          src="//www.balmuda.com/jp/pot/img/design/mobile/section--04.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">素晴らしいひとときを</h2>
            <p>
              ゆっくりとコーヒーを淹れる贅沢な時間や、お客さまの目の前でお茶を淹れるもてなし。BALMUDA
              The Potで、素晴らしいひとときをお楽しみください。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
