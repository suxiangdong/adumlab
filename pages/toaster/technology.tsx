import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'

export default function ProductDetail() {
  const [playing, setPlaying] = useState(false)
  const handlePlay = () => {
    setPlaying(true)
    const video = document.getElementById('v1b') as HTMLVideoElement
    video.play()
  }

  const handlePause = () => {
    setPlaying(false)
    const video = document.getElementById('v1b') as HTMLVideoElement
    video.pause()
  }
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" media="(max-width: 640px)" href="/toaster/style/mobile.css?20210701173839"></link>
        <link rel="stylesheet" media="(min-width: 641px)" href="/toaster/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <a href="/toaster/" className="pagemap__content--logo">
            <img className="w-full" src="/_theme/img/svg/balmuda-the-toaster.min.svgz" alt="BALMUDA The Toaster" />
          </a>
          <ul className="pagemap__main" id="greedynav-links">
            <li className={`pagemap__content__item `}>
              <Link href="/toaster/index">概要</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/taste">特別なおいしさ</Link>
            </li>
            <li className={`pagemap__content__item __current`}>
              <Link href="/toaster/technology">トーストを科学する</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/howto">使い方</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/story">ストーリー</Link>
            </li>
            <li className={`pagemap__content__item `}>
              <Link href="/toaster/spec">スペック</Link>
            </li>
          </ul>
          <div className="pagemap__dropdown hidden" id="greedynav--btn">
            <span className="pagemap__dropdown__btn"></span>
            <ul className="pagemap__dropdown__content"></ul>
          </div>
          <div className="pagemap__btns">
            <a href="//store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=K05A" className="btn btn--pagemap">
              購入
            </a>
          </div>
        </div>

        <div className="modal__cashless">
          <div className="modal__cashless__box">
            <p className="modal__cashless__txt">オンラインストア、正規販売店で30日間返金保証。ぜひお試しください。</p>
            <a href="//www.balmuda.com/jp/toaster/30-days" className="modal__cashless__link">
              詳しくはこちら
            </a>
            <div className="modal__cashless__btn"></div>
          </div>
        </div>
      </div>

      <div className="section section--technology section--00">
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">トーストを科学する</h2>
            <p>表面はさっくりと焼けたきつね色、中はたっぷりの水分を含みつつ熱々に温まった感動のトースト。トーストを科学の目線で徹底的に追求したBALMUA The Toasterでは、独自のスチームテクノロジーと細やかな温度制御によって誰でも簡単に、驚くほどおいしいトーストを作ることができます。</p>
          </div>

          <div className="__fig">
            <img data-mobile="//www.balmuda.com/jp/toaster/img/technology/mobile/the-toast.jpg?20200915" data-desktop="//www.balmuda.com/jp/toaster/img/technology/desktop/the-toast.jpg?20200915" data-retina="//www.balmuda.com/jp/toaster/img/technology/desktop/the-toast@2x.jpg?20200915" className="__toast adaptiveimage" src="//www.balmuda.com/jp/toaster/img/technology/desktop/the-toast@2x.jpg?20200915" />
          </div>
        </div>
      </div>

      <div className="section_wrap">
        <div className="section section--technology section--01 scrollLoader lazyload loaded">
          <img src="//www.balmuda.com/jp/toaster/img/technology/mobile/section--01.jpg" className="__image __is_mobile" />
          <div className="viewport scrollLoader fadeInUp loaded">
            <div className="__content">
              <h2 className="section__title __wb">
                <span>水分と香りを閉じ込める</span>
                <span>スチームテクノロジー</span>
              </h2>
              <p>BALMUDA The Toasterで調理をする時は、給水口に5ccの水を入れてください。運転が始まるとスチームが庫内に充満し、パンの表面は薄い水分の膜で覆われます。水分は空気よりもはるかに速く加熱されるため、パンの表面だけが軽く焼けた状態になり、パンの中の水分やバターなどの油脂成分、香りをしっかり閉じ込めたまま、本格的なヒーター制御で焼き上げます。</p>
              <span className="video_play __is_desktop" data-video-target="v1b" onClick={handlePlay}>
                動画で確認
              </span>
            </div>
          </div>
        </div>
        <div className={`section_overlay section_overlay--v1b ${playing ? 'visible' : ''}`} id="overlay--v1b">
          <video controls={true} playsInline={true} poster="./img/technology/mobile/v1b-thumb.jpg" width="100%" height="100%" id="v1b">
            <source src="//s3.balmuda.com/www/jp/toaster/movie/v1b.mp4" type="video/mp4" />
          </video>
          <div className="video_stop __is_desktop" data-video-target="v1b" onClick={handlePause}></div>
        </div>
      </div>

      <div className="section section--technology section--02 scrollLoader lazyload loaded" id="temperature-control">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <div className="head">
              <div className="head__info">
                <h2 className="section__title __wb">
                  <span>進化した1秒単位の</span>
                  <span>細やかな温度制御</span>
                </h2>
                <p>BALMUDA The Toasterは、3つの温度帯を細かく制御します。パンの中のやわらかさと風味がよみがえる（デンプンのα化）60℃前後の温度、表面がきつね色に色づき始める160℃前後の温度、そして焦げつき（炭化）が始まる220℃前後の温度帯です。また、パンの種類によって異なる食感と香りのバランスを考え、各モードごとに上面と下面のヒーターの強さを設定。感動の焼き上がりを実現します。</p>
              </div>
              <div className="head__img">
                <img data-mobile="//www.balmuda.com/jp/toaster/img/technology/mobile/section--02.png?20200915" data-desktop="//www.balmuda.com/jp/toaster/img/technology/desktop/section--02.png?20200915" data-retina="//www.balmuda.com/jp/toaster/img/technology/desktop/section--02@2x.png?20200915" className="__image adaptiveimage" src="//www.balmuda.com/jp/toaster/img/technology/desktop/section--02@2x.png?20200915" />
              </div>
            </div>
            <div className="mode">
              <h3 className="mode__title">
                モードごとに
                <br className="sp" />
                最適な焼き上がり
              </h3>
              <ul className="mode__list">
                <li className="mode__list_item">
                  <p className="mode__list_title">トーストモード</p>
                  <p className="mode__list_point">焼き上げ時は上面のヒーターを強く</p>
                  <img data-mobile="//www.balmuda.com/jp/toaster/img/technology/mobile/mode--01.png?20200915" data-desktop="//www.balmuda.com/jp/toaster/img/technology/desktop/mode--01.png?20200915" data-retina="//www.balmuda.com/jp/toaster/img/technology/desktop/mode--01@2x.png?20200915" className="__image adaptiveimage" src="//www.balmuda.com/jp/toaster/img/technology/desktop/mode--01@2x.png?20200915" />
                </li>
                <li className="mode__list_item">
                  <p className="mode__list_title">チーズトーストモード</p>
                  <p className="mode__list_point">焼き始めから上面のヒーターを強く</p>
                  <img data-mobile="//www.balmuda.com/jp/toaster/img/technology/mobile/mode--02.png?20200915" data-desktop="//www.balmuda.com/jp/toaster/img/technology/desktop/mode--02.png?20200915" data-retina="//www.balmuda.com/jp/toaster/img/technology/desktop/mode--02@2x.png?20200915" className="__image adaptiveimage" src="//www.balmuda.com/jp/toaster/img/technology/desktop/mode--02@2x.png?20200915" />
                </li>
                <li className="mode__list_item">
                  <p className="mode__list_title">フランスパンモード</p>
                  <p className="mode__list_point">
                    上下の強さは変えず
                    <br className="sp" />
                    一定の温度で焼き上げ
                  </p>
                  <img data-mobile="//www.balmuda.com/jp/toaster/img/technology/mobile/mode--03.png?20200915" data-desktop="//www.balmuda.com/jp/toaster/img/technology/desktop/mode--03.png?20200915" data-retina="//www.balmuda.com/jp/toaster/img/technology/desktop/mode--03@2x.png?20200915" className="__image adaptiveimage" src="//www.balmuda.com/jp/toaster/img/technology/desktop/mode--03@2x.png?20200915" />
                </li>
                <li className="mode__list_item">
                  <p className="mode__list_title">クロワッサンモード</p>
                  <p className="mode__list_point">
                    庫内の温度を高く保ちながら、
                    <br className="sp" />
                    上面は弱く
                  </p>
                  <img data-mobile="//www.balmuda.com/jp/toaster/img/technology/mobile/mode--04.png?20200915" data-desktop="//www.balmuda.com/jp/toaster/img/technology/desktop/mode--04.png?20200915" data-retina="//www.balmuda.com/jp/toaster/img/technology/desktop/mode--04@2x.png?20200915" className="__image adaptiveimage" src="//www.balmuda.com/jp/toaster/img/technology/desktop/mode--04@2x.png?20200915" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

			<div className="section section--technology section--03 scrollLoader lazyload loaded">
        <img src="//www.balmuda.com/jp/toaster/img/technology/mobile/section--03.jpg?20200915" className="__image __is_mobile" />
        <div className="viewport scrollLoader fadeInUp loaded">
            <div className="__content">
                <h2 className="section__title __wb"><span>4つのモードと、</span><span>クラシックモード</span></h2>
                <p>BALMUDA The Toasterには、パンの種類に合わせた4つのモードの他に、スチームを使わず一定の温度で焼き上げるクラシックモードを用意しています。予熱いらずで、餅やグラタンなどのトースター調理や、簡単なお菓子作りもできます。</p>
            </div>
        </div>
    </div>
    </Layout>
  )
}
