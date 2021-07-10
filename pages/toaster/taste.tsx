import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'

export default function ProductDetail() {

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
            <li className={`pagemap__content__item __current`}>
              <Link href="/toaster/taste">特別なおいしさ</Link>
            </li>
            <li className={`pagemap__content__item`}>
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
            <a href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=K05A" className="btn btn--pagemap">
              購入
            </a>
          </div>
        </div>
      </div>
			<div className="section section--taste section--00 scrollLoader lazyload loaded">
        <div className="viewport">
            <div className="__content">
                <h2 className="page__title">味、香り、そして食感</h2>
                <p>おいしさは味と香り、そして食感から生み出されます。BALMUDA The Toasterはスチームテクノロジーと細やかな温度制御で、さまざまなパンのおいしさを引き出します。温度が選べるクラシックモードでは、パン以外の食材もすばやく美味しく仕上げます。</p>
            </div>
        </div>
    </div>

		<div className="section section--taste section--01 scrollLoader lazyload loaded">
        <div className="__image __is_mobile">
        </div>
        <div className="viewport scrollLoader fadeInUp loaded">
            <div className="__content">
                <img src="https://www.balmuda.com/jp/toaster/img/svg/mode-toast.min.svgz?20200915" className="__svg" alt="トーストモード" />
                <h2 className="section__title">感動のトースト</h2>
                <p>BALMUDA The Toasterで焼いたトーストは、表面がサックリとしたきつね色、中は水分と香りが十分に残ったまま熱々の仕上がり。鮮烈で、香ばしい小麦の匂いが印象的です。新鮮なバターや季節のジャム、ハチミツをたっぷりとかけてお召し上がりください。</p>
            </div>
        </div>
    </div>

		<div className="section section--taste section--02 scrollLoader lazyload loaded">
        <div className="__image __is_mobile">
        </div>
        <div className="viewport scrollLoader fadeInUp loaded">
            <div className="__content">
                <img src="https://www.balmuda.com/jp/toaster/img/svg/mode-cheese.min.svgz?20200915" className="__svg" alt="トーストモード" />
                <h2 className="section__title">究極のチーズトースト</h2>
                <p>とけて、少しだけ焦げたチーズの素晴らしさに異論をとなえる人はいないでしょう。BALMUDA The Toasterはスチームの力でチーズの水分と風味をたっぷりと残したまま、細やかな温度制御で絶妙な焦げ目をつけます。シンプルなチーズトーストからピザトーストまで、感動の仕上がりをお約束します。</p>
            </div>
        </div>
    </div>
    <div className="section section--taste section--03 scrollLoader lazyload loaded">
        <div className="__image __is_mobile">
        </div>
        <div className="viewport scrollLoader fadeInUp loaded">
            <div className="__content">
                <img src="https://www.balmuda.com/jp/toaster/img/svg/mode-croissant.min.svgz?20200915" className="__svg" alt="トーストモード" />
                <h2 className="section__title">幸せのクロワッサン</h2>
                <p>トースターで温めると黒く焦げてしまいやすいクロワッサン。BALMUDA The Toasterでは、焦がさず表面はサクッと焼き上げ、窯から出したばかりの焼きたてのクロワッサンを再現します。香りたつバターと積層されたパイ生地。クロワッサン本来のおいしさを自宅でも楽しむことができます。</p>
            </div>
        </div>
    </div>
    <div className="section section--taste section--04 scrollLoader lazyload loaded">
        <div className="__image __is_mobile">
        </div>
        <div className="viewport scrollLoader fadeInUp loaded">
            <div className="__content">
                <img src="https://www.balmuda.com/jp/toaster/img/svg/mode-baguette.min.svgz?20200915" className="__svg" alt="トーストモード" />
                <h2 className="section__title">三ツ星のバゲット</h2>
                <p>バゲットをトーストすると水分は飛び、表面も中身も硬くなってしまっていました。BALMUDA The Toasterは、スチームテクノロジーと細やかな温度制御で、パリッとした表面の歯ごたえと、中の柔らかさを同時に実現します。その香ばしさと食感はまさにレストランのバゲットです。</p>
            </div>
        </div>
    </div>
    <div className="section section--taste section--06 scrollLoader lazyload loaded">
        <div className="__image __is_mobile">
        </div>
        <div className="viewport scrollLoader fadeInUp loaded">
            <div className="__content">
                <h2 className="section__title __wb"><span>冷凍したパンも</span><span>おいしく</span></h2>
                <p>BALMUDA The Toasterは、スチームテクノロジーと細やかな温度制御で、冷凍されたパンも簡単に、おいしく焼きあげます。いつもの焼き方に1分追加。たったそれだけで香ばしく、熱々に仕上がります。</p>
            </div>
        </div>
    </div>
    <div className="section section--taste section--05 scrollLoader lazyload loaded">
        <div className="__image __is_mobile">
        </div>
        <div className="viewport scrollLoader fadeInUp loaded">
            <div className="__content">
                <h2 className="section__title">パンだけでなく料理にも</h2>
                <p>スチームを使用せず、上下のヒーターだけをシンプルにつけるクラシックモード。170、200、230℃の3つの温度から選べます。お餅の焼き上げやグラタンなどはもちろん、庫内を一定の温度に保って焼き続けるので、クッキーなどの簡単なお菓子作りにも。BALMUDA The Toaster1台でお料理の幅がみるみる広がります。</p>
            </div>
        </div>
    </div>
    </Layout>
  )
}
