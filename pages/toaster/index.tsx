import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ReactSlick from 'react-slick'
import Layout from '../../layouts/default'

export default function ProductDetail() {
  const router = useRouter()
  const { item } = router.query

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
            <li className={`pagemap__content__item __current`}>
              <Link href="/toaster/index">概要</Link>
            </li>
            <li className={`pagemap__content__item`}>
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
            <li className={`pagemap__content__item`}>
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

        <div className="modal__cashless">
          <div className="modal__cashless__box">
            <p className="modal__cashless__txt">オンラインストア、正規販売店で30日間返金保証。ぜひお試しください。</p>
            <a href="https://www.balmuda.com/jp/toaster/30-days" className="modal__cashless__link">
              詳しくはこちら
            </a>
            <div className="modal__cashless__btn"></div>
          </div>
        </div>
      </div>
<ReactSlick arrows={false} dots>
        {[0, 1, 2, 3, 4, 5].map((item, index) => (
          <div key={index}>
            <img className="w-full" src={`//www.balmuda.com/jp/toaster/img/index/desktop/billboard--0${index}@2x.jpg?20210505`} />
          </div>
        ))}
      </ReactSlick>
      <div className="section section--index section--00">
        <div className="__mainimage">
          <div className="__inner">
            <img data-mobile="https://www.balmuda.com/jp/toaster/img/index/mobile/main.jpg?20210617" data-desktop="https://www.balmuda.com/jp/toaster/img/index/desktop/main.jpg?20210617" data-retina="https://www.balmuda.com/jp/toaster/img/index/desktop/main@2x.jpg?20210617" className="__image adaptiveimage" src="https://www.balmuda.com/jp/toaster/img/index/desktop/main@2x.jpg?20210617" />
            <img src="https://www.balmuda.com/jp/toaster/img/index/svg/main_text.svg?20210617" className="__image adaptiveimage_copy" alt="オンラインストア限定" />
          </div>
        </div>
        <div className="viewport">
          <h2 className="page__title">感動のトースター</h2>
          <span className="label__block">スチームトースター</span>
          <p className="overview_text __wb">
            <span>BALMUDA The Toasterは、</span>
            <span>感動の香りと食感を実現する</span>
            <span>トースター。</span>
            <br className="pc" />
            <span>スチームテクノロジーと</span>
            <span>温度制御により、</span>
            <span>窯から出したばかりの</span>
            <span>焼きたての味を再現します。</span>
            <br className="pc" />
            <span>温度制御を進化させ、</span>
            <span>上質なデザインに</span>
            <span>リニューアルしました。</span>
            <br className="pc" />
            <span>多くの方に愛されてきた、</span>
            <span>特別なおいしさを</span>
            <span>お楽しみください。</span>
          </p>

          <div className="the-price">
            <p className="price price--excl_tax" id="price2">
              25,850
            </p>
            <p className="colores">ブラック／ホワイト／ベージュ／グレー</p>
          </div>

          <div className="__is_mobile">
            <video controls={false} poster="https://www.balmuda.com/img/index/mobile/v7b.jpg" width="100%" height="100%">
              <source src="//s3.balmuda.com/www/jp/toaster/movie/v7b.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="book-info">
          <div className="book-photo">
            <img data-mobile="https://www.balmuda.com/jp/toaster/img/index/mobile/book_icon.jpg?20210617" data-desktop="https://www.balmuda.com/jp/toaster/img/index/desktop/book_icon.jpg?20210617" data-retina="https://www.balmuda.com/jp/toaster/img/index/desktop/book_icon@2x.jpg?20210617" className="__image adaptiveimage" src="https://www.balmuda.com/jp/toaster/img/index/desktop/book_icon@2x.jpg?20210617" />
          </div>

          <div className="book-info-text">
            <p className="info-bold">
              オンラインストアにて
              <br className="spbr" />
              ご購入のお客様にプレゼント
              <br />
              オリジナルレシピブック
            </p>
            <p>
              <span>
                これまでウェブサイトで公開してきたトースターのレシピを約100ページのボリュームでご紹介するこだわりの一冊です。<span>＊1台につき1冊ずつプレゼントいたします。</span>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="section section--index section--01 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
            <div className="__content">
                <h2 className="section__title">特別なおいしさ</h2>
                <p>BALMUDA The Toasterには、特別なおいしさを実現するためにトースト、チーズトースト、フランスパン、クロワッサン、クラシックの5つのモードが用意されています。それぞれのモードで実現できるおいしさについてご紹介します。</p>
               <Link href="/toaster/taste">
							 <a className="btn section__btn">続きを読む</a>
							 </Link>
            </div>
        </div>
    </div>

		<div className="section section--index section--02 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
            <div className="__content">
                <h2 className="section__title">トーストを科学する</h2>
                <p>BALMUDA The Toasterを使えば誰でも簡単に感動のトーストが焼け、クロワッサンなら焼きたての状態を再現できます。これらを実現する、独自のスチームテクノロジーと細やかな温度制御を解説します。</p>
                <Link href="/toaster/technology">
								<a  className="btn section__btn">続きを読む</a></Link>
            </div>
        </div>
    </div>

		<div className="section section--index section--03 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
            <div className="__content">
                <h2 className="section__title">使い方</h2>
                <p>BALMUDA The Toasterならパンの種類に合わせて焼くことができるので、パン本来のおいしさを楽しめます。また、一般的なオーブントースターのようにお餅やグラタンなどの調理も可能です。</p>
               <Link href="/toaster/howto">
							  <a  className="btn section__btn">続きを読む</a>
							 </Link>
            </div>
        </div>
    </div>

		<div className="section section--index section--04 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
            <div className="__content">
                <h2 className="section__title">進化した温度制御</h2>
                <p>リニューアルしたBALMUDA  The  Toasterの温度制御は、より緻密に進化しています。上下のヒーターの強さや、焼き上げ時間をモードごとに再設定。さまざまなパンのおいしさを引き出します。</p>
              <Link href="/tosater/technology#temperature-control">
							<a className="btn section__btn">進化した温度制御について</a>
							</Link>
            </div>
        </div>
    </div>

		<div className="section section--index section--gray scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
            <div className="__content">
                <h2 className="section__title"><span>限定カラーの</span><br className="sp" /><span>「グレー」が登場</span></h2>
                    <p>マットで落ち着いた質感を持ち、クールな印象のグレー。<br className="pc" />洗練されたデザインで、インテリアとの相性も抜群です。<br className="pc" />カラーはブラック、ホワイト、ベージュと合わせて4色に。好みに合わせてお選びいただけます。</p>
                <a href="#gallery" className="btn section__btn">カラーバリエーションを見る</a>
            </div>
        </div>
    </div>


      <section className="relative text-center">
        <img src="https://www.balmuda.com/jp/toaster/img/index/desktop/section--evolve@2x.jpg?20200901" alt="" />
        <div className="flex flex-col justify-center absolute inset-0 m-auto transform -translate-y-28 max-w-4xl">
          <h2 className="text-4xl mb-8">新しくなったデザインとカラー</h2>
          <p className="text-lg text-black mb-4 leading-8">
            これまでのデザインを継承しながら、窓枠の形状やダイヤル・取手のサイズを再設計。
            <br />
            電源ボタンを追加することで使いやすさも向上しています。
            <br />
            カラーはブラック、ホワイトに加え、様々なテイストのキッチンに馴染む新色ベージュを追加しました。
          </p>
          <Link href="/design">
            <a className="text-xs text-black">ギャラリーを見る</a>
          </Link>
        </div>
      </section>
      <section className="bg-recipe py-24">
        <img className="h-20 mb-9 mx-auto" src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipes-logo@2x.png?" alt="" />
        <p className="max-w-4xl px-3 mb-9 mx-auto text-center">
          毎朝のトーストから週末のごちそうまで、BALMUDA The Toasterで作れるメニューは無限大。
          <br />
          バルミューダのキッチンチームやプロの方々からのレシピをご紹介します。
        </p>
        <ReactSlick slidesToShow={3} centerMode infinite dots={false}>
          <Link href="/">
            <a className="block px-5">
              <img className="mb-5" src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_010@2x.jpg?20200901" alt="" />
              <p className="text-lg text-center">クロワッサンサンド</p>
            </a>
          </Link>
          <Link href="/">
            <a className="block px-5">
              <img className="mb-5" src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_041@2x.jpg?20200901" alt="" />
              <p className="text-lg text-center">スモークサーモンとサワークリームのベーグルサンド</p>
            </a>
          </Link>
          <Link href="/">
            <a className="block px-5">
              <img className="mb-5" src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_006@2x.jpg?20200901" alt="" />
              <p className="text-lg text-center">カリカリのベーコンエッグトースト</p>
            </a>
          </Link>
          <Link href="/">
            <a className="block px-5">
              <img className="mb-5" src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_008@2x.jpg?20200901" alt="" />
              <p className="text-lg text-center">チョコバナナトースト</p>
            </a>
          </Link>
          <Link href="/">
            <a className="block px-5">
              <img className="mb-5" src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_042@2x.jpg?20200901" alt="" />
              <p className="text-lg text-center">カマンベールフルーツトースト</p>
            </a>
          </Link>
          <Link href="/">
            <a className="block px-5">
              <img className="mb-5" src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_035@2x.jpg?20200901" alt="" />
              <p className="text-lg text-center">黒胡椒とコンビーフサンドのレモン添え</p>
            </a>
          </Link>
          <Link href="/">
            <a className="block px-5">
              <img className="mb-5" src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_053@2x.jpg?20200901" alt="" />
              <p className="text-lg text-center">エッグ「バル」マフィン</p>
            </a>
          </Link>
          <Link href="/">
            <a className="block px-5">
              <img className="mb-5" src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_044@2x.jpg?20200901" alt="" />
              <p className="text-lg text-center">オニオングラタンスープ</p>
            </a>
          </Link>
          <Link href="/">
            <a className="block px-5">
              <img className="mb-5" src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_054@2x.jpg?20200901" alt="" />
              <p className="text-lg text-center">球場のホットドッグ</p>
            </a>
          </Link>
        </ReactSlick>
        <Link href="/">
          <a className="bg-black bg-opacity-50 text-white text-center text-xs block rounded-full w-72 h-11 py-1 leading-9 mt-16 mx-auto">トースターレシピの一覧</a>
        </Link>
      </section>

			<div className="section section--index section--story2 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
            <div className="__content">
                <h2 className="section__title">ストーリー</h2>
                <p>BALMUDA The Toasterの開発ストーリーは、1991年のスペイン南部の町ロンダから始まりました。<span>驚きや発見に満ちたBALMUDA The Toaster完成までの道のりをご紹介します。</span></p>
               <Link href="/toaster/story" >
							 <a className="btn section__btn btn">続きを読む</a></Link>
            </div>
        </div>
    </div>

		<div className="section section--index section--acce scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
            <div className="__content">
                <h2 className="section__title">アクセサリ</h2>
                <p><span>トースター調理の幅が広がるBALMUDA The Toasterのアクセサリ。</span>オリジナルレシピブックや野田琺瑯のホワイトバットをご用意しています。</p>
               <Link href="/toaster/accessory" >
							 <a className="btn section__btn btn">詳しく</a></Link>
            </div>
        </div>
    </div>
      <ReactSlick className="py-24" arrows={false} centerMode dots>
        <div className="p-24">
          <blockquote className="tracking-widest mb-3 text-3xl text-center max-w-3xl mx-auto">
            誰でも簡単に、毎日食べるパンをもっとおいしく。
            <br />
            魔法のようなこのトースターがあれば、毎日の
            <br />
            パンライフがきっと変わるはず！
          </blockquote>
          <p className="text-ccc text-xs text-right max-w-3xl mx-auto">2019.09.20　Hanako.tokyo</p>
          <a className="block text-ccc text-xs text-right max-w-3xl mx-auto" href="https://hanako.tokyo/news/food/106907/" target="_blank">
            https://hanako.tokyo/news/food/106907/
          </a>
        </div>
        <div className="p-24">
          <blockquote className="tracking-widest mb-3 text-3xl text-center max-w-3xl mx-auto">
            「世界一のトースター」ではなく、
            <br />
            「世界一のトーストが焼けるトースター」という
            <br />
            開発コンセプトはまさにお見事。
          </blockquote>
          <p className="text-ccc text-xs text-right max-w-3xl mx-auto">2018.10.17　360.life</p>
          <a className="block text-ccc text-xs text-right max-w-3xl mx-auto" href="https://the360.life/U1301.doit?id=5157" target="_blank">
            https://the360.life/U1301.doit?id=5157
          </a>
        </div>
        <div className="p-24">
          <blockquote className="tracking-widest mb-3 text-3xl text-center max-w-3xl mx-auto">
            ただパンを焼くだけでここまでおいしく
            <br />
            仕上がるのは、ほかのトースターではなかなか
            <br />
            できない経験です。
          </blockquote>
          <p className="text-ccc text-xs text-right max-w-3xl mx-auto">2018.08.03　食楽web</p>
          <a className="block text-ccc text-xs text-right max-w-3xl mx-auto" href="https://www.syokuraku-web.com/column/20856/4/" target="_blank">
            https://www.syokuraku-web.com/column/20856/4/
          </a>
        </div>
        <div className="p-24">
          <blockquote className="tracking-widest mb-3 text-3xl text-center max-w-3xl mx-auto">トースターに対する価値観を根底から覆すレベル</blockquote>
          <p className="text-ccc text-xs text-right max-w-3xl mx-auto">2015.07.10　Gigazine</p>
          <a className="block text-ccc text-xs text-right max-w-3xl mx-auto" href="http://gigazine.net/news/20150710-balmuda-the-toaster/" target="_blank">
            http://gigazine.net/news/20150710-balmuda-the-toaster/
          </a>
        </div>
        <div className="p-24">
          <blockquote className="tracking-widest mb-3 text-3xl text-center max-w-3xl mx-auto">ひと口食べてみれば宣言してしまうはずだ「買います！」</blockquote>
          <p className="text-ccc text-xs text-right max-w-3xl mx-auto">2015.07.02　モノ・マガジン　741号</p>
          <a className="block text-ccc text-xs text-right max-w-3xl mx-auto" href="http://www.monoshop.co.jp/products/detail.php?product_id=4377" target="_blank">
            http://www.monoshop.co.jp/products/detail.php?product_id=4377
          </a>
        </div>
        <div className="p-24">
          <blockquote className="tracking-widest mb-3 text-3xl text-center max-w-3xl mx-auto">めちゃうめええええ！パン焼きたての味 すげーぞ</blockquote>
          <p className="text-ccc text-xs text-right max-w-3xl mx-auto">2015.05.27　週刊アスキー</p>
          <a className="block text-ccc text-xs text-right max-w-3xl mx-auto" href="http://weekly.ascii.jp/elem/000/000/340/340110/" target="_blank">
            http://weekly.ascii.jp/elem/000/000/340/340110/
          </a>
        </div>
        <div className="p-24">
          <blockquote className="tracking-widest mb-3 text-3xl text-center max-w-3xl mx-auto">パンを食べるために早起きしたくなる。そんな魅力に満ちたトースターだ。</blockquote>
          <p className="text-ccc text-xs text-right max-w-3xl mx-auto">2015.08.15　Pen　386号</p>
          <a className="block text-ccc text-xs text-right max-w-3xl mx-auto" href="https://www.pen-online.jp/magazine/pen/pen-386-hawaii/" target="_blank">
            https://www.pen-online.jp/magazine/pen/pen-386-hawaii/
          </a>
        </div>
      </ReactSlick>
      <section className="py-24 max-w-4xl mx-auto">
        <h2 className="text-4xl mb-8">ギャラリー</h2>
        <div className="grid grid-cols-3 grid-rows-2 gap-5">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <img key={item} className="rounded" src={`https://www.balmuda.com/jp/toaster/img/index/gallery/${item}@2x.jpg?20210505`} alt="" />
          ))}
        </div>
      </section>
    </Layout>
  )
}
