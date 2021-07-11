import Link from 'next/link'
import ReactSlick from 'react-slick'
import Head from 'next/head'
import Layout from '../../layouts/default'
import { useState, SyntheticEvent } from 'react'

export default function CleanerDetail() {
  const [playing, setPlaying] = useState('')

  const handlePlay = (e: SyntheticEvent) => {
    const targetId = (e.currentTarget as HTMLVideoElement).getAttribute('data-video-target')
		debugger
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
            <li className={`pagemap__content__item __current`}>
              <Link href="/cleaner/function">特徴と性能</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/design">デザイン</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/feature">シーン別の使い方</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/technology">テクノロジー</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/story">ストーリー</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/spec">スペック</Link>
            </li>
          </ul>

          <div className="pagemap__btns">
            <a
              href="//store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=C01A"
              className="btn btn--pagemap">
              購入
            </a>
          </div>
        </div>
      </div>
      <div className="section section--function section--00">
        <div className="billboard_function">
          <img
            data-mobile="//www.balmuda.com/jp/cleaner/img/function/mobile/section--00-00.jpg?20201225"
            data-desktop="//www.balmuda.com/jp/cleaner/img/function/desktop/section--00-00.jpg?20201225"
            data-retina="//www.balmuda.com/jp/cleaner/img/function/desktop/section--00-00@2x.jpg?20201225"
            className="adaptiveimage __image __image__00"
            data-model="black"
            alt=""
            src="//www.balmuda.com/jp/cleaner/img/function/desktop/section--00-00@2x.jpg?20201225"
          />
          <img
            src="//www.balmuda.com/jp/cleaner/img/function/desktop/section--00-copy.svg?20201225"
            className="mp__list_copy __00 pc"
            data-index="0"
          />
          <img
            src="//www.balmuda.com/jp/cleaner/img/function/mobile/section--00-copy.svg?20201225"
            className="mp__list_copy __00 sp"
            data-index="0"
          />
        </div>
        <div className="viewport">
          <div className="__content">
            <p>
              ホバー式クリーナー独自の操作性と、優れた集じん性能で
              <br />
              これまでの約半分<sup>*1</sup>の時間で、掃除が完了。
              <br />
              BALMUDA The Cleanerが、手早く、広く、行き届いた掃除を実現します。
            </p>
          </div>
        </div>
      </div>
      <div className="section section--function section--01" id="section--02">
        <div className="video_wrap scrollLoader fadeInUp loaded">
          <div
            className="video_play __imagebtn __is_desktop"
            data-video-target="function_v2"
            onClick={handlePlay}>
            <span></span>
          </div>
          <div className="video_play __imagebtn __is_mobile" data-video-target="function_v2">
            <span></span>
            <div className="object" data-video-target="function_v2">
              <video
                playsInline
                id="function_v2_mobile"
                width="100%"
                data-log="cleaner_function_v2_mobile">
                <source
                  src="//s3.balmuda.com/www/jp/cleaner/movie/comparison.mp4?20201225"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
        <div
          className={`section_overlay section_overlay--v2 ${
            playing === 'function_v2' ? 'visible' : ''
          }`}
          id="overlay--function_v2"
          data-video-target="function_v2">
          <div className="section_overlay_inner section_overlay_inner_02">
            <video
              id="function_v2"
              width="100%"
              data-log="cleaner_function_v2"
              onEnded={handleEnded}>
              <source
                src="//s3.balmuda.com/www/jp/cleaner/movie/comparison.mp4?20201225"
                type="video/mp4"
              />
            </video>
            <div className="video_stop" data-video-target="function_v2" onClick={handleEnded}></div>
          </div>
        </div>
      </div>

      <div className="section section--function section--02">
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">
              手早く、無駄なく。
              <br />
              ホバー式クリーナーで、
              <br className="__is_mobile" />
              掃除時間を46％短縮<sup>*1</sup>。
            </h2>
            <p className="page__desc">
              <span>
                BALMUDA The Cleanerは、独自の技術で、360°自在な操作を実現。
                <br className="__is_desktop" />
                ヘッドを前後に動かす直線的な操作が主流だったスティッククリーナーに対し、
                <br className="__is_desktop" />
                前後・左右・斜めなど、無駄のない動きで掃除時間を大幅に短縮できます。
              </span>
            </p>
            <p className="section__desc">
              <span>
                *1：自社調べ。0.88㎡の床に擬似ゴミとしてコルクパウダー11gを散布、同一操作者が擬似ゴミを99%以上取り切るまでの時間を計測。
                <br className="__is_desktop" />
                比較機として、ローラーブラシ搭載の幅約210mmのヘッドを持つサイクロン式スティッククリーナーを使用。
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="section section--function section--03">
        <h2 className="page__title">
          ホバー式クリーナーが、
          <br className="__is_mobile" />
          掃除をはやく
          <br className="__is_mobile" />
          完了できる理由。
        </h2>

        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content __first">
            <h2 className="section__title">
              <span>
                <img src="//www.balmuda.com/jp/cleaner/img/function/desktop/no01.svg" />
              </span>
              360°回転するヘッドで
              <br />
              自在に移動。同時に吸引。
            </h2>
            <p className="section__desc">
              従来の掃除機にはなかったスムーズさで、どんな方向にも操作が可能です。ヘッドを左右にスライドさせるなど、ホバー式独自の無駄のない動きが、掃除時間の短縮を可能にしました。
            </p>
          </div>
          <img
            data-desktop="//www.balmuda.com/jp/cleaner/img/function/desktop/section--01-00.jpg?20201225"
            data-retina="//www.balmuda.com/jp/cleaner/img/function/desktop/section--01-00@2x.jpg?20201225"
            src="//www.balmuda.com/jp/cleaner/img/function/desktop/section--01-00@2x.jpg?20201225"
            className="adaptiveimage __image __image__00"
            data-model="black"
            alt=""
          />
        </div>

        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content __second">
            <h2 className="section__title">
              <span>
                <img src="//www.balmuda.com/jp/cleaner/img/function/desktop/no02.svg" />
              </span>
              広い部屋も
              <br className="__is_desktop" />
              あっという間。
              <br />
              ワイドなヘッド。
            </h2>
            <p className="section__desc">
              BALMUDA The
              Cleanerのヘッドは300mm。一度の動作で、広い範囲をきれいにできるので、あっという間に掃除が完了。せまい場所には、ヘッドを縦使いすれば、165mmのすき間まで入り込みます。
            </p>
          </div>
          <img
            data-desktop="//www.balmuda.com/jp/cleaner/img/function/desktop/section--01-01.jpg?20201225"
            data-retina="//www.balmuda.com/jp/cleaner/img/function/desktop/section--01-01@2x.jpg?20201225"
            src="//www.balmuda.com/jp/cleaner/img/function/desktop/section--01-01@2x.jpg?20201225"
            className="adaptiveimage __image __image__00"
            data-model="black"
            alt=""
          />
        </div>

        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content __third">
            <h2 className="section__title">
              <span>
                <img src="//www.balmuda.com/jp/cleaner/img/function/desktop/no03.svg" />
              </span>
              1つより2つ。
              <br />
              デュアルブラシが、
              <br />
              確実にゴミをかき出します。
            </h2>
            <p className="section__desc">
              ヘッドには2つのブラシを搭載し、細かなゴミまで確実にキャッチ。ダストピックアップ率99%
              <sup>*2</sup>の高い集じん性能で、あらゆる種類のゴミを逃しません。
              <br />
              <span>*2：ハードフロア上の6号ケイ砂24ｇを強モード1往復で集じんした割合</span>
            </p>
          </div>

          <div
            className="video_play __third __is_desktop"
            data-video-target="function_v4"
            onClick={handlePlay}>
            <img
              data-desktop="//www.balmuda.com/jp/cleaner/img/function/desktop/section--01-02.jpg?20201225"
              data-retina="//www.balmuda.com/jp/cleaner/img/function/desktop/section--01-02@2x.jpg?20201225"
              src="//www.balmuda.com/jp/cleaner/img/function/desktop/section--01-02@2x.jpg?20201225"
              className="adaptiveimage __image __image__00"
              data-model="black"
              alt=""
            />
            <span></span>
          </div>
          <div className="video_wrap __third">
            <div className="__is_mobile">
              <div className="video_play __imagebtn __is_mobile" data-video-target="function_v4">
                <span></span>
                <div className="object" data-video-target="function_v4">
                  <video
                    playsInline
                    id="function_v4_mobile"
                    width="100%"
                    data-log="cleaner_function_v4_mobile">
                    <source
                      src="//s3.balmuda.com/www/jp/cleaner/movie/dust_collection.mp4?20201225"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`section_overlay section_overlay--v4 ${
            playing === 'function_v4' ? 'visible' : ''
          }`}
          id="overlay--function_v4"
          data-video-target="function_v4">
          <div className="section_overlay_inner section_overlay_inner_04">
            <video
              id="function_v4"
              width="100%"
              data-log="cleaner_function_v4"
              onEnded={handleEnded}>
              <source
                src="//s3.balmuda.com/www/jp/cleaner/movie/dust_collection.mp4?20201225"
                type="video/mp4"
              />
            </video>
            <div className="video_stop" data-video-target="function_v4" onClick={handleEnded}></div>
          </div>
        </div>

        <div className="viewport scrollLoader fadeInUp loaded border-none">
          <div className="__content __fourth">
            <h2 className="section__title">
              <span>
                <img src="//www.balmuda.com/jp/cleaner/img/function/desktop/no04.svg" />
              </span>
              パワフルな吸引が可能な
              <br />
              サイクロン方式。
            </h2>
            <p className="section__desc">
              毎分400リットルの空気を処理<sup>*3</sup>
              する集じんユニットが、大小のゴミはサイクロンの遠心力で取り除き、宙に浮くホコリなどはフィルターでキャッチ。ゴミのかき出し力が強いヘッドと組み合わせることにより、優れた掃除性能を発揮します。
              <br className="__is_mobile" />
              <span>*3：強モード使用時</span>
            </p>
          </div>
          <img
            data-desktop="//www.balmuda.com/jp/cleaner/img/function/desktop/section--01-03.jpg?20201225"
            data-retina="//www.balmuda.com/jp/cleaner/img/function/desktop/section--01-03@2x.jpg?20201225"
            src="//www.balmuda.com/jp/cleaner/img/function/desktop/section--01-03@2x.jpg?20201225"
            className="adaptiveimage __image __image__00"
            data-model="black"
            alt=""
          />
        </div>
      </div>

      <div className="section section--function section--01 scrollLoader lazyload loaded section--04">
        <div className="block">
          <div className="viewport scrollLoader fadeInUp loaded">
            <h2 className="page__title">
              <p>
                <span>掃除がもっと楽になる。</span>
              </p>
              <p className="logo--block">
                <img
                  data-desktop="//www.balmuda.com/jp/cleaner/img/function/desktop/logo.svg?20201225"
                  data-retina="//www.balmuda.com/jp/cleaner/img/function/desktop/logo.svg?20201225"
                  src="//www.balmuda.com/jp/cleaner/img/function/desktop/logo.svg?20201225"
                  className="adaptiveimage __image __image__00"
                  data-model="black"
                  alt=""
                />
                の<br className="__is_mobile" />
                <span>使いやすさ。</span>
              </p>
            </h2>
            <div className="__content">
              <div className="__box">
                <div className="__box_inner _box1">
                  <img
                    data-desktop="//www.balmuda.com/jp/cleaner/img/function/desktop/section--04-01.jpg?20201225"
                    data-retina="//www.balmuda.com/jp/cleaner/img/function/desktop/section--04-01@2x.jpg?20201225"
                    src="//www.balmuda.com/jp/cleaner/img/function/desktop/section--04-01@2x.jpg?20201225"
                    className="adaptiveimage __image"
                    data-model="black"
                    alt=""
                  />
                  <p>
                    操作時の力を最小限にする
                    <br className="br" />
                    低重心設計
                  </p>
                </div>

                <div className="__box_inner _box2">
                  <img
                    data-desktop="//www.balmuda.com/jp/cleaner/img/function/desktop/section--04-02.jpg?20201225"
                    data-retina="//www.balmuda.com/jp/cleaner/img/function/desktop/section--04-02@2x.jpg?20201225"
                    src="//www.balmuda.com/jp/cleaner/img/function/desktop/section--04-02@2x.jpg?20201225"
                    className="adaptiveimage __image"
                    data-model="black"
                    alt=""
                  />
                  <p>
                    押し続ける必要のない
                    <br className="br" />
                    ワンタッチボタン
                  </p>
                </div>

                <div className="__box_inner _box3">
                  <img
                    data-desktop="//www.balmuda.com/jp/cleaner/img/function/desktop/section--04-03.jpg?20201225"
                    data-retina="//www.balmuda.com/jp/cleaner/img/function/desktop/section--04-03@2x.jpg?20201225"
                    src="//www.balmuda.com/jp/cleaner/img/function/desktop/section--04-03@2x.jpg?20201225"
                    className="adaptiveimage __image"
                    data-model="black"
                    alt=""
                  />
                  <p>
                    すぐに掃除が始められる
                    <br className="br" />
                    充電機能付きスタンド
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--function section--05 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="page__title">
              簡単、便利。
              <br className="__is_mobile" />
              お手入れまで。
            </h2>
            <p className="page__desc">
              <span>
                コードレスで30分連続使用可能なバッテリー、付属アタッチメントでハンディタイプにも早変わり。
                <br className="__is_desktop" />
                想像どおりに、想像以上に便利にお使いいただけます。
              </span>
            </p>

            <div className="colum2">
              <div className="colum2--inner">
                <img
                  data-desktop="//www.balmuda.com/jp/cleaner/img/function/desktop/section--05-00.jpg?20201225"
                  data-retina="//www.balmuda.com/jp/cleaner/img/function/desktop/section--05-00@2x.jpg?20201225"
                  src="//www.balmuda.com/jp/cleaner/img/function/desktop/section--05-00@2x.jpg?20201225"
                  className="adaptiveimage __image"
                  data-model="black"
                  alt=""
                />
                <div>
                  <h2 className="section__title">
                    コードレスで30分<sup>*4</sup>の運転時間
                  </h2>
                  <p className="section__desc">
                    リチウムイオンバッテリー内蔵で、連続30分の使用が可能。コードレスで、十分な掃除時間を提供します。
                    <br className="__is_mobile" />
                    <sup>*4：標準モード使用時</sup>{' '}
                  </p>
                </div>
              </div>

              <div className="colum2--inner">
                <img
                  data-desktop="//www.balmuda.com/jp/cleaner/img/function/desktop/section--05-01.jpg?20201225"
                  data-retina="//www.balmuda.com/jp/cleaner/img/function/desktop/section--05-01@2x.jpg?20201225"
                  src="//www.balmuda.com/jp/cleaner/img/function/desktop/section--05-01@2x.jpg?20201225"
                  className="adaptiveimage __image"
                  data-model="black"
                  alt=""
                />
                <div>
                  <h2 className="section__title">簡単で衛生的なゴミ捨て</h2>
                  <p className="section__desc">
                    ダストカップの取り出しも容易です。カップのゴミを捨てる際には、ゴミが手に触れることなく衛生的。{' '}
                  </p>
                </div>
              </div>
            </div>

            <div className="colum2">
              <div className="colum2--inner">
                <div
                  className="video_play __is_desktop"
                  data-video-target="function_v3"
                  onClick={handlePlay}>
                  <img
                    data-desktop="//www.balmuda.com/jp/cleaner/img/function/desktop/section--05-02.jpg?20201225"
                    data-retina="//www.balmuda.com/jp/cleaner/img/function/desktop/section--05-02@2x.jpg?20201225"
                    src="//www.balmuda.com/jp/cleaner/img/function/desktop/section--05-02@2x.jpg?20201225"
                    className="adaptiveimage __image"
                    data-model="black"
                    alt=""
                  />
                  <span></span>
                </div>
                <div className="__is_mobile">
                  <div
                    className="video_play __imagebtn __is_mobile"
                    data-video-target="function_v3">
                    <span></span>
                    <video
                      playsInline
                      poster="//www.balmuda.com/jp/cleaner/img/function/mobile/section--07.jpg?20201225"
                      id="function_v3_mobile"
                      width="100%"
                      data-log="cleaner_function_v3_mobile">
                      <source
                        src="//s3.balmuda.com/www/jp/cleaner/movie/compact.mp4?20201225"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>

                <div>
                  <h2 className="section__title">ハンディタイプに早変わり</h2>
                  <p className="section__desc">
                    付属のアタッチメントを付け替えれば、ハンディタイプに。家具のすき間など様々な場所でお使いいただけます。
                  </p>
                </div>
              </div>

              <div className="colum2--inner">
                <img
                  data-desktop="//www.balmuda.com/jp/cleaner/img/function/desktop/section--05-03.jpg?20201225"
                  data-retina="//www.balmuda.com/jp/cleaner/img/function/desktop/section--05-03@2x.jpg?20201225"
                  src="//www.balmuda.com/jp/cleaner/img/function/desktop/section--05-03@2x.jpg?20201225"
                  className="adaptiveimage __image"
                  data-model="black"
                  alt=""
                />
                <div>
                  <h2 className="section__title">水洗い可能、高いメンテナンス性</h2>
                  <p className="section__desc">
                    ダストカップとブラシ、フィルターも簡単に取り外しを行うことができ、丸洗いが可能です。{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`section_overlay section_overlay--v3 ${
            playing === 'function_v3' ? 'visible' : ''
          }`}
          id="overlay--function_v3"
          data-video-target="function_v3">
          <div className="section_overlay_inner section_overlay_inner_03">
            <video
              id="function_v3"
              width="100%"
              data-log="cleaner_function_v3"
              onEnded={handleEnded}>
              <source
                src="//s3.balmuda.com/www/jp/cleaner/movie/compact.mp4?20201225"
                type="video/mp4"
              />
            </video>
            <div className="video_stop" data-video-target="function_v3" onClick={handleEnded}></div>
          </div>
        </div>
      </div>

      <div className="section section--function section--06 scrollLoader lazyload loaded">
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">
              <img
                data-desktop="//www.balmuda.com/jp/cleaner//img/logo/balmuda-the-cleaner.svgz?20201225"
                data-retina="//www.balmuda.com/jp/cleaner//img/logo/balmuda-the-cleaner.svgz?20201225"
                src="//www.balmuda.com/jp/cleaner//img/logo/balmuda-the-cleaner.svgz?20201225"
                className="adaptiveimage __image __image__00"
                data-model="black"
                alt=""
              />
              の<br className="__is_mobile" />
              <span className="mt">性能をお試しください。</span>
            </h2>

            <div className="colum2">
              <div className="colum2--inner">
                <div>
                  <h2 className="section__title">ご自宅で試す</h2>
                  <p className="section__desc">
                    オンラインストアでご購入いただくと、
                    <br />
                    <a href="/jp/30-days/">30日間の返金保証付き。</a>
                    <br />
                    ぜひご自宅でお試しください。{' '}
                  </p>
                  <a
                    href="//store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=C01A"
                    className="section__btn">
                    オンラインストアで購入
                  </a>
                </div>
              </div>
              <div className="colum2--inner">
                <div>
                  <h2 className="section__title">お店で試す</h2>
                  <p className="section__desc">
                    家電量販店など全国約650店舗で、
                    <br />
                    お取り扱いしております。
                    <br />
                    お近くの販売店でお試しください。
                  </p>
                  <a href="//www.balmuda.com/jp/cleaner/shops" className="section__btn">
                    お近くの販売店を探す
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
