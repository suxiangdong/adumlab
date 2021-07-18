import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'
import { useState, SyntheticEvent } from 'react'

export default function CleanerDetail() {
  const [playing, setPlaying] = useState('')
  const handlePlay = (e: SyntheticEvent) => {
    const targetId = (e.currentTarget as HTMLVideoElement).getAttribute('data-video-target')

    setPlaying(targetId)
    const video = document.getElementById(targetId) as HTMLVideoElement
    video.style.opacity = '1'
    video.play()
  }

  const handleEnded = (e: SyntheticEvent) => {
    const target = e.currentTarget as HTMLVideoElement
    let targetId = target.getAttribute('data-video-target')
    if (!targetId) {
      targetId = target.getAttribute('id')
    }

    setPlaying('')
    const video = document.getElementById(targetId) as HTMLVideoElement
    video.style.opacity = '0'
    video.pause()
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
            <li className={`pagemap__content__item `}>
              <Link href="/cleaner/">概要</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/function">特点和性能</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/design">创新设计</Link>
            </li>
            <li className={`pagemap__content__item __current`}>
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
      <div className="section section--feature section--00">
        <img
          data-mobile="https://www.balmuda.com/jp/cleaner/img/feature/mobile/section--00.jpg?20201224"
          data-desktop="https://www.balmuda.com/jp/cleaner/img/feature/desktop/section--00.jpg?20201224"
          data-retina="https://www.balmuda.com/jp/cleaner/img/feature/desktop/section--00@2x.jpg?20201224"
          className="adaptiveimage __image __image__01"
          data-model="black"
          alt=""
          src="https://www.balmuda.com/jp/cleaner/img/feature/desktop/section--00@2x.jpg?20201224"
        />
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">
              すみからすみまで。
              <br />
              届かせたかった
              <br className="sp" />
              あの場所まで。
            </h2>
            <p>
              <span>広いフローリングや畳の上も。</span>
              <span>椅子や机の下も、せまいすき間も壁ぎわも。</span>
              <br className="__is_desktop" />
              <span>BALMUDA The Cleaner なら、</span>
              <span>思いどおりに、気持ちよく</span>
              <span>掃除をすることができます。</span>
            </p>
            <div className="box">
              <a href="#section--01" className="section__btn">
                広い場所
              </a>
              <a href="#section--02" className="section__btn">
                家具まわり・せまい場所
              </a>
              <a href="#section--03" className="section__btn">
                壁ぎわ
              </a>
              <a href="#section--04" className="section__btn">
                細いすき間
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--feature section--01" id="section--01">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <p className="section__label">広い場所</p>
            <h2 className="section__title">
              広い床を<span className="pc">、</span>
              <br className="sp" />
              すばやくきれいに
            </h2>
            <p className="section__desc">
              ほうきのように両手で持ち、
              <br className="__is_mobile" />
              左右に大きく動かすことで、
              <br />
              広い床面をすばやく
              <br className="__is_mobile" />
              きれいにすることができます。
            </p>
          </div>
          <div
            className="video_play __imagebtn __is_desktop"
            onClick={handlePlay}
            data-video-target="feature_v1"
            style={{ height: 515.25 }}>
            <span></span>
          </div>
          <div
            className="video_play __imagebtn __is_mobile"
            data-video-target="feature_v1"
            style={{ height: 515.25 }}>
            <span></span>
            <video
              id="feature_v1_mobile"
              width="100%"
              data-log="cleaner_feature_v1_mobile"
              onEnded={handleEnded}>
              <source
                src="//s3.balmuda.com/www/jp/cleaner/movie/widefloor.mp4?20201224"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="__content">
            <h2 className="section__catch">さまざまな床に対応</h2>
            <p className="section__desc">
              フローリングはもちろん、
              <br className="__is_desktop" />
              フロアカーペットや畳にも。
            </p>
            <div className="__box">
              <img
                data-desktop="https://www.balmuda.com/jp/cleaner/img/feature/desktop/section--01-01.jpg?20201224"
                data-retina="https://www.balmuda.com/jp/cleaner/img/feature/desktop/section--01-01@2x.jpg?20201224"
                src="https://www.balmuda.com/jp/cleaner/img/feature/desktop/section--01-01@2x.jpg?20201224"
                className="adaptiveimage __image"
                data-model="black"
                alt=""
              />
              <img
                data-desktop="https://www.balmuda.com/jp/cleaner/img/feature/desktop/section--01-02.jpg?20201224"
                data-retina="https://www.balmuda.com/jp/cleaner/img/feature/desktop/section--01-02@2x.jpg?20201224"
                src="https://www.balmuda.com/jp/cleaner/img/feature/desktop/section--01-02@2x.jpg?20201224"
                className="adaptiveimage __image"
                data-model="black"
                alt=""
              />
              <img
                data-desktop="https://www.balmuda.com/jp/cleaner/img/feature/desktop/section--01-03.jpg?20201224"
                data-retina="https://www.balmuda.com/jp/cleaner/img/feature/desktop/section--01-03@2x.jpg?20201224"
                src="https://www.balmuda.com/jp/cleaner/img/feature/desktop/section--01-03@2x.jpg?20201224"
                className="adaptiveimage __image"
                data-model="black"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          className={`section_overlay section_overlay--v1 ${
            playing === 'feature_v1' ? 'visible' : ''
          }`}
          id="overlay--feature_v1"
          data-video-target="feature_v1">
          <div className="section_overlay_inner section_overlay_inner_01">
            <video id="feature_v1" width="100%" data-log="cleaner_feature_v1" onEnded={handleEnded}>
              <source
                src="//s3.balmuda.com/www/jp/cleaner/movie/widefloor.mp4?20201224"
                type="video/mp4"
              />
            </video>
            <div className="video_stop" data-video-target="feature_v1" onClick={handleEnded}></div>
          </div>
        </div>
      </div>

      <div className="section section--feature section--02" id="section--02">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <p className="section__label">家具まわり・せまい場所</p>
            <h2 className="section__title">
              せまいすき間も
              <br className="sp" />
              スムーズ
            </h2>
            <p className="section__desc">
              ヘッドを回転させることで、
              <br className="__is_mobile" />
              縦方向に操作が可能。
              <br />
              テーブル下や家具の脚まわりなども、
              <br className="__is_mobile" />
              スムーズにもれなく
              <br className="__is_desktop" />
              きれいに
              <br className="__is_mobile" />
              することができます。
            </p>
          </div>
          <div
            className="video_play __imagebtn __is_desktop"
            onClick={handlePlay}
            data-video-target="feature_v2"
            style={{ height: 515.25 }}>
            <span></span>
          </div>
          <div
            className="video_play __imagebtn __is_mobile"
            data-video-target="feature_v2"
            style={{ height: 515.25 }}>
            <span></span>
            <video
              id="feature_v2_mobile"
              width="100%"
              data-log="cleaner_feature_v2_mobile"
              onEnded={handleEnded}>
              <source
                src="//s3.balmuda.com/www/jp/cleaner/movie/aroundfurniture.mp4?20201224"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div
          className={`section_overlay section_overlay--v2 ${
            playing === 'feature_v2' ? 'visible' : ''
          }`}
          id="overlay--feature_v2"
          data-video-target="feature_v2">
          <div className="section_overlay_inner section_overlay_inner_01">
            <video id="feature_v2" width="100%" data-log="cleaner_feature_v2" onEnded={handleEnded}>
              <source
                src="//s3.balmuda.com/www/jp/cleaner/movie/aroundfurniture.mp4?20201224"
                type="video/mp4"
              />
            </video>
            <div className="video_stop" data-video-target="feature_v2" onClick={handleEnded}></div>
          </div>
        </div>
      </div>

      <div className="section section--feature section--03" id="section--03">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <p className="section__label">壁ぎわ</p>
            <h2 className="section__title">
              スライド動作で<span className="pc">、</span>
              <br className="sp" />
              すみずみまできれいに
            </h2>
            <p className="section__desc">
              壁にぴったりとヘッドを沿わせ、
              <br className="__is_mobile" />
              そのままスライドするだけで
              <br />
              壁ぎわやコーナーの掃除も簡単に
              <br className="__is_mobile" />
              完了できます。
            </p>
          </div>
          <div
            className="video_play __imagebtn __is_desktop"
            onClick={handlePlay}
            data-video-target="feature_v3"
            style={{ height: 515.25 }}>
            <span></span>
          </div>
          <div
            className="video_play __imagebtn __is_mobile"
            data-video-target="feature_v3"
            style={{ height: 515.25 }}>
            <span></span>
            <video
              id="feature_v3_mobile"
              width="100%"
              data-log="cleaner_feature_v3_mobile"
              onEnded={handleEnded}>
              <source
                src="//s3.balmuda.com/www/jp/cleaner/movie/bythe_wall.mp4?20201224"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="__content">
            <h2 className="section__catch">階段の掃除にも</h2>
            <p className="section__desc">
              簡単にヘッドを左右にスライド
              <br className="__is_mobile" />
              できるので、
              <br className="__is_desktop" />
              階段の掃除も
              <br className="__is_mobile" />
              楽に行うことができます。
            </p>
            <div className="__box">
              <img
                data-desktop="https://www.balmuda.com/jp/cleaner/img/feature/desktop/section--03-01.jpg?20201224"
                data-retina="https://www.balmuda.com/jp/cleaner/img/feature/desktop/section--03-01@2x.jpg?20201224"
                src="https://www.balmuda.com/jp/cleaner/img/feature/desktop/section--03-01@2x.jpg?20201224"
                className="adaptiveimage __image __image__01"
                data-model="black"
                alt=""
              />
              <img
                data-desktop="https://www.balmuda.com/jp/cleaner/img/feature/desktop/section--03-02.jpg?20201224"
                data-retina="https://www.balmuda.com/jp/cleaner/img/feature/desktop/section--03-02@2x.jpg?20201224"
                src="https://www.balmuda.com/jp/cleaner/img/feature/desktop/section--03-02@2x.jpg?20201224"
                className="adaptiveimage __image __image__01"
                data-model="black"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          className={`section_overlay section_overlay--v3 ${
            playing === 'feature_v3' ? 'visible' : ''
          }`}
          id="overlay--feature_v3"
          data-video-target="feature_v3">
          <div className="section_overlay_inner section_overlay_inner_01">
            <video id="feature_v3" width="100%" data-log="cleaner_feature_v3" onEnded={handleEnded}>
              <source
                src="//s3.balmuda.com/www/jp/cleaner/movie/bythe_wall.mp4?20201224"
                type="video/mp4"
              />
            </video>
            <div className="video_stop" data-video-target="feature_v3" onClick={handleEnded}></div>
          </div>
        </div>
      </div>

      <div className="section section--feature section--04" id="section--04">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <p className="section__label">細いすき間</p>
            <h2 className="section__title">
              すき間ノズルで、<span className="pc"></span>
              <br className="sp" />
              ハンディタイプに。
            </h2>
            <p className="section__desc">
              付属のアタッチメントを付け替えれば、ハンディタイプに早変わり。
              <br className="__is_desktop" />
              すき間ノズルで、家具のすき間、窓のサッシやソファ、車の中の手の届かない場所まで。
              <br className="__is_desktop" />
              すっきりと、便利にお使いいただくことができます。
            </p>
          </div>
          <div
            className="video_play __imagebtn __is_desktop"
            onClick={handlePlay}
            data-video-target="feature_v4"
            style={{ height: 515.25 }}>
            <span></span>
          </div>
          <div
            className="video_play __imagebtn __is_mobile"
            data-video-target="feature_v4"
            style={{ height: 515.25 }}>
            <span></span>
            <video
              id="feature_v4_mobile"
              width="100%"
              data-log="cleaner_feature_v4_mobile"
              onEnded={handleEnded}>
              <source
                src="//s3.balmuda.com/www/jp/cleaner/movie/compact.mp4?20201224"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div
          className={`section_overlay section_overlay--v4 ${
            playing === 'feature_v4' ? 'visible' : ''
          }`}
          id="overlay--feature_v4"
          data-video-target="feature_v4">
          <div className="section_overlay_inner section_overlay_inner_01">
            <video id="feature_v4" width="100%" data-log="cleaner_feature_v4" onEnded={handleEnded}>
              <source
                src="//s3.balmuda.com/www/jp/cleaner/movie/compact.mp4?20201224"
                type="video/mp4"
              />
            </video>
            <div className="video_stop" data-video-target="feature_v4" onClick={handleEnded}></div>
          </div>
        </div>
      </div>

      <div
        className={`modal-bg ${!!playing ? '__visible' : ''}`}
        id="modalBg"
        data-video-target={playing}></div>
    </Layout>
  )
}
