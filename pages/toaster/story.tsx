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
          href="/toaster/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/toaster/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <a href="/toaster/" className="pagemap__content--logo">
            <img
              className="w-full"
              src="/_theme/img/svg/balmuda-the-toaster.min.svgz"
              alt="BALMUDA The Toaster"
            />
          </a>
          <ul className="pagemap__main" id="greedynav-links">
            <li className={`pagemap__content__item `}>
              <Link href="/toaster/index">概要</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/taste">特别的美味</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/technology">科学与设计</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/howto">使用方法</Link>
            </li>
            <li className={`pagemap__content__item __current`}>
              <Link href="/toaster/story">故事</Link>
            </li>
            <li className={`pagemap__content__item `}>
              <Link href="/toaster/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__dropdown hidden" id="greedynav--btn">
            <span className="pagemap__dropdown__btn"></span>
            <ul className="pagemap__dropdown__content"></ul>
          </div>
          <div className="pagemap__btns">
            <a
              href="//store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=K05A"
              className="btn btn--pagemap">
              購入
            </a>
          </div>
        </div>
      </div>

      <div className="section section--story section--00">
        <div className="__image"></div>
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">故事</h2>
            <p>
              BALMUDA The Toaster
              が完成するまでの道のりは、発想の原点となった体験から数えると約20年にも及びます。ある思いから製品つくりがはじまり、途中で意外な発見もありました。その工程を間近で見てきた私が直接、ご紹介します。
            </p>
            <div className="__sign">
              <img
                src="//www.balmuda.com/_theme/img/svg/gen_terao.min.svgz"
                className="__gen_terao"
                width="231"
                height="37"
              />
              <span className="__note">バルミューダ代表　寺尾 玄</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--story section--01 scrollLoader lazyload loaded">
        <img src="//www.balmuda.com/jp/toaster/img/story/mobile/section--01.jpg" className="__section_image __is_mobile" />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">1991年、スペイン、ロンダの町</h2>
            <p>
              私が高校を中退して放浪の旅に出たのは、17歳のときでした。スペインやイタリア、モロッコなど、地中海沿岸を約一年間、一人でまわりました。とても楽しく、寂しく、刺激的だった忘れられない旅です。その初日のこと。日本から飛行機や列車、バスを乗り継ぎ最後は徒歩で、目的地のロンダにたどり着きました。私は緊張からかあまり眠っておらず、疲れきっていて、かつ空腹でした。街角では香ばしい香りがしていて、探してみると一軒の地元のベーカリーが。話せないスペイン語で焼きたてのパンを分けてもらい、一口かじった時、涙が溢れるように出てきました。緊張や疲労、そして希望と不安。香ばしいパンを食べた時、これらの感情が堰を切ったように体の外に出て行ったのです。あの時の小さなパン。その香りと味は、今でも忘れられません。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--02 scrollLoader lazyload loaded">
        <img src="//www.balmuda.com/jp/toaster/img/story/mobile/section--02.jpg" className="__section_image __is_mobile" />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">どしゃ降りのバーベキュー</h2>
            <p>
              2014年の5月の事。私たちは、社に程近い小金井公園でバーベキュー大会を開きました。その日は朝からありえないくらいのどしゃ降り。中止も考えましたが、思い出になるからという理由から決行。全員でびしょ濡れになりながら肉を食べ、本当に思い出になりました。その時、研究心に富んだ開発チームは食パンを持ってきて、肉のかたわらで炭火で焼き始めたのです。そのトーストのおいしさはほぼ完璧。表面がパリッとして中に水分が十分に残っていました。この味を再現できればバルミューダトースターができる!
              <br />
              <br />
              と次の日から再現実験を始めました。しかし、いっこうに再現できません。炭が違うのか、火の距離が違うのか、グリラーが違うのか。試行錯誤を続けていた時、誰かが言いました。「あの時、すごい雨が降ってましたよね?」そう、答えは水分だったのです。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--03 scrollLoader lazyload loaded">
        <img src="//www.balmuda.com/jp/toaster/img/story/mobile/section--03.jpg" className="__section_image __is_mobile" />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">ダンディゾン</h2>
            <p>
              今回、BALMUDA The
              Toasterの研究開発に協力してもらったのは、吉祥寺のパン屋「ダンディゾン」連日の行列で有名です。開発チームは開店前のお店に行き、まず焼きたてのパンを食べ、そのおいしさに驚き、次に厨房を見学させてもらいました。そこにあったのはガス火ではなく細かい制御が可能なスチーム機能付きの電気の窯。電気と水の力を使って、本当においしいパンが作り出される姿は、私たちにとっては驚きでした。同時に、自分たちのアイディアに自信をもった瞬間でした。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--04 scrollLoader lazyload loaded">
        <img src="//www.balmuda.com/jp/toaster/img/story/mobile/section--04.jpg" className="__section_image __is_mobile" />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">2000種類の设计</h2>
            <p>
              技術チームが原理的な試作品を作り始めるころ、设计チームも製品化に向けた设计の検討を始めます。最初に行われるのは、自由な発想でのアイディアの展開です。
              <br />
              <br />
              今回私たちが取り組んだのは、「とてもおいしいものは、どのようなところから出てくるべきか?」という命題でした。それはおそらく新しいだけではダメで、どこかなつかしさを感じるべきであり、かつ、バルミューダならではのスパイスも必要です。多数のアイディアの中からテーマにあった数案をピックアップし、それらの周辺アイディアを探っていきます。やがてベース案が選ばれ、技術チームと歩調を合わせながら一本のネジの大きさや位置まで検討していきます。
              <br />
              <br />
              今回、设计チームは、BALMUDA The
              Toasterのために、スケッチ、レンダリングを含めて約2000の案を出しました。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--05 scrollLoader lazyload loaded">
        <img src="//www.balmuda.com/jp/toaster/img/story/mobile/section--05.jpg" className="__section_image __is_mobile" />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">終わらない実験</h2>
            <p>
              设计のベース案を反映した試作機が出来上がると、始まるのがソフトウェアの作り込みです。今回は庫内の大きさや反射板の角度、ヒーター管の位置など少しでも変更があると焼き上がりが変わってしまいました。さらにトースト、チーズトースト、フランスパン、クロワッサンに向けた各モードがあり、これらを最適化し最高の焼き上がりを実現するために、合計1000時間の焼き上げ実験を行ってきました。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
