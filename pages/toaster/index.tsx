import Link from 'next/link'
import ReactSlick from 'react-slick'
import Layout from '../../layouts/default'

export default function ProductDetail() {
  return (
    <Layout>
			<div className="shadow-lg">
			<div className="flex flex-col justify-between h-custom-90 max-w-5xl mx-auto pt-6 pb-3 px-3 text-left">
        <Link href="/">
          <a className="block w-72">
            <img src="https://www.balmuda.com/_theme/img/svg/balmuda-the-toaster.min.svgz" alt="BALMUDA The Toaster" />
          </a>
        </Link>
        <div className="text-xs">
          <Link href="/">
            <a className="text-green mr-6">概要</a>
          </Link>
          <Link href="/">
            <a className="mr-6">特別なおいしさ</a>
          </Link>
          <Link href="/">
            <a className="mr-6">トーストを科学する</a>
          </Link>
          <Link href="/">
            <a className="mr-6">使い方</a>
          </Link>
          <Link href="/">
            <a className="mr-6">レシピ</a>
          </Link>
          <Link href="/">
            <a className="mr-6">ストーリー</a>
          </Link>
          <Link href="/">
            <a className="mr-6">スペック</a>
          </Link>
          <Link href="/">
            <a className="mr-6">アクセサリ</a>
          </Link>
          <Link href="/">
            <a className="mr-6">販売店</a>
          </Link>
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
      <section className="py-24 text-center">
        <img className="max-w-5xl mx-auto" src="//www.balmuda.com/jp/toaster/img/index/desktop/main@2x.jpg?20210505" alt="main image" />
        <h2 className="text-4xl mb-8">感動のトースター</h2>
        <span className="block text-999 text-xs border border-999 h-8 leading-8 w-44 mx-auto mb-8">スチームトースター</span>
        <p className="text-xl mb-12 max-w-5xl px-6 mx-auto leading-7">BALMUDA The Toasterは、感動の香りと食感を実現するトースター。<br />スチームテクノロジーと温度制御により、窯から出したばかりの焼きたての味を再現します。<br />温度制御を進化させ、上質なデザインにリニューアルしました。 <br />多くの方に愛されてきた、特別なおいしさをお楽しみください。</p>
        <p className="price text-4xl">25,850</p>
        <p className="text-999 text-sm">ブラック／ホワイト／ベージュ</p>
      </section>
      <section className="text-white relative">
        <img src="https://www.balmuda.com/jp/toaster/img/index/desktop/section--01@2x.jpg?20200901" alt="" />
        <div className="flex flex-col justify-center absolute inset-0 m-auto transform -translate-x-2/4 max-w-md">
          <h2 className="text-4xl mb-8">特別なおいしさ</h2>
          <p className="text-lg mb-4 leading-8">BALMUDA The Toasterには、特別なおいしさを実現するためにトースト、チーズトースト、フランスパン、クロワッサン、クラシックの5つのモードが用意されています。それぞれのモードで実現できるおいしさについてご紹介します。</p>
          <Link href="/design">
            <a className="text-lg">続きを読む</a>
          </Link>
        </div>
      </section>
      <section className="text-white relative">
        <img src="https://www.balmuda.com/jp/toaster/img/index/desktop/section--02@2x.jpg?20200901" alt="" />
        <div className="flex flex-col justify-center absolute inset-0 m-auto transform -translate-x-2/4 translate-y-28 max-w-md">
          <h2 className="text-4xl mb-8">トーストを科学する</h2>
          <p className="text-lg mb-4 leading-8">BALMUDA The Toasterを使えば誰でも簡単に感動のトーストが焼け、クロワッサンなら焼きたての状態を再現できます。これらを実現する、独自のスチームテクノロジーと細やかな温度制御を解説します。</p>
          <Link href="/design">
            <a className="text-lg">続きを読む</a>
          </Link>
        </div>
      </section>
      <section className="text-white relative">
        <img src="https://www.balmuda.com/jp/toaster/img/index/desktop/section--03@2x.jpg?20200901" alt="" />
        <div className="flex flex-col justify-center absolute inset-0 m-auto transform -translate-x-2/4 translate-y-28 max-w-md">
          <h2 className="text-4xl mb-8">使い方</h2>
          <p className="text-lg mb-4 leading-8">BALMUDA The Toasterならパンの種類に合わせて焼くことができるので、パン本来のおいしさを楽しめます。また、一般的なオーブントースターのようにお餅やグラタンなどの調理も可能です。</p>
          <Link href="/design">
            <a className="text-lg">続きを読む</a>
          </Link>
        </div>
      </section>
      <section className="text-white relative">
        <img src="https://www.balmuda.com/jp/toaster/img/index/desktop/section--04@2x.jpg?20200901" alt="" />
        <div className="flex flex-col justify-center absolute inset-0 m-auto transform -translate-x-2/4 translate-y-28 max-w-md">
          <h2 className="text-4xl mb-8">進化した温度制御</h2>
          <p className="text-lg mb-4 leading-8">BALMUDA The リニューアルしたBALMUDA The Toasterの温度制御は、より緻密に進化しています。上下のヒーターの強さや、焼き上げ時間をモードごとに再設定。さまざまなパンのおいしさを引き出します。</p>
          <Link href="/design">
            <a className="text-lg">進化した温度制御について</a>
          </Link>
        </div>
      </section>
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
      <section className="text-white relative">
        <img src="https://www.balmuda.com/jp/toaster/img/index/desktop/section--story2@2x.jpg?20200901" alt="" />
        <div className="flex flex-col justify-center absolute inset-0 m-auto transform -translate-x-2/4 max-w-md">
          <h2 className="text-4xl mb-8">ストーリー</h2>
          <p className="text-lg mb-4 leading-8">BALMUDA The Toasterの開発ストーリーは、1991年のスペイン南部の町ロンダから始まりました。驚きや発見に満ちたBALMUDA The Toaster完成までの道のりをご紹介します。</p>
          <Link href="/design">
            <a className="rounded-full border-white border w-44 h-11 flex items-center justify-center text-xs">続きを読む</a>
          </Link>
        </div>
      </section>
      <section className="text-white relative">
        <img src="https://www.balmuda.com/jp/toaster/img/index/desktop/section--acce@2x.jpg?20200901" alt="" />
        <div className="flex flex-col justify-center absolute inset-0 m-auto transform -translate-x-2/4 max-w-md">
          <h2 className="text-4xl mb-8">アクセサリ</h2>
          <p className="text-lg mb-4 leading-8">トースター調理の幅が広がるBALMUDA The Toasterのアクセサリ。オリジナルレシピブックや野田琺瑯のホワイトバットをご用意しています。</p>
          <Link href="/design">
            <a className="rounded-full border-white border w-44 h-11 flex items-center justify-center text-xs">詳しく</a>
          </Link>
        </div>
      </section>
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
