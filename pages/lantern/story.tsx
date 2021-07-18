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
          href="/lantern/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/lantern/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <Link href="/lantern/">
            <a className="pagemap__content--logo">
              <img src="/_theme/img/svg/balmuda-the-lantern.min.svgz" alt="BALMUDA The Lantern" />
            </a>
          </Link>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/lantern/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story __current">
              <Link href="/lantern/story">故事</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/lantern/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=L02A"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="section section--story section--00 scrollLoader lazyload loaded">
        <img
          data-mobile="https://www.balmuda.com/jp/lantern/img/story/mobile/section--00.jpg?20190909"
          data-desktop="https://www.balmuda.com/jp/lantern/img/story/desktop/section--00.jpg?20190909"
          data-retina="https://www.balmuda.com/jp/lantern/img/story/desktop/section--00@2x.jpg?20190909"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/lantern/img/story/desktop/section--00@2x.jpg?20190909"
        />

        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <p>
              使う人に、味わい深いよい時間を過ごしてほしい、そんな思いから生まれた BALMUDA The
              Lantern。その開発ストーリーを紹介します。
            </p>
            <div className="__sign">
              <img
                src="/_theme/img/svg/gen_terao.min.svgz"
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
        <img
          data-mobile="https://www.balmuda.com/jp/lantern/img/story/mobile/section--01.jpg?20190909"
          data-desktop="https://www.balmuda.com/jp/lantern/img/story/desktop/section--01.jpg?20190909"
          data-retina="https://www.balmuda.com/jp/lantern/img/story/desktop/section--01@2x.jpg?20190909"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/lantern/img/story/desktop/section--01@2x.jpg?20190909"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">スキーのあとで</h2>
            <p>
              小さい頃から親しんできたスキー。今は年に数回、長野県の戸隠エリアに通っています。行きつけのロッジの雰囲気は家庭的で、夕食ができると、奥さんが食堂の入り口についている大きな鈴を鳴らして私たち宿泊客に教えてくれます。前日の夜中から明け方にかけてに雪が降った後のゲレンデ頂上からの滑り心地は最高。新鮮なパウダースノーの上を、まさに滑るように降りていくことができます。一日中滑って疲れた身体でおいしい料理を食べ、少し多めのアルコールを飲み、ラウンジでくつろぎながら山の本を読んでいると、幸せしか感じません。
              <br />
              それにしても、なぜこのラウンジは、こんなに居心地がいいんだろう？　観察してみると、灯りが違うことに気が付きました。大きな照明はなく、一つ一つは少し暗めの灯りがたくさん置かれていることで、本を読める明るさと、心を落ち着ける暗さが両立されていました。落ち着く夜には、いつもそばに、ほのかな灯りがありました。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--02 scrollLoader lazyload loaded">
        <img
          data-mobile="https://www.balmuda.com/jp/lantern/img/story/mobile/section--02.jpg?20190909"
          data-desktop="https://www.balmuda.com/jp/lantern/img/story/desktop/section--02.jpg?20190909"
          data-retina="https://www.balmuda.com/jp/lantern/img/story/desktop/section--02@2x.jpg?20190909"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/lantern/img/story/desktop/section--02@2x.jpg?20190909"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">夜をもう少し暗くするために</h2>
            <p>
              2007年。製品が私の自宅で組み立てられていた頃、Silenceというフロアライトを発売しました。夜、天井照明をつけない自分のために作った製品で、今でも私の部屋の片隅で灯っています。戸隠のロッジでくつろぎながら、ふとあの懐かしい製品を思い出し、今のバルミューダがテイスティな灯りを作るとしたら、どんなものになるのだろうと思いを馳せました。午後から次の日の明け方まで使える灯りがいい。目の前で音を立てる暖炉の炎のように、見飽きることのない複雑な光の動きが欲しい。それはただのゆらぎではなく、たまに瞬くように明滅して欲しい。ソファでもベッドでも、テーブルでも使えるように、持ち運びたい。戸隠で素晴らしい週末を過ごした私は、東京への帰り道も考え続け、そして月曜日には開発チームを招集したのです。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--03 scrollLoader lazyload loaded">
        <img
          data-mobile="https://www.balmuda.com/jp/lantern/img/story/mobile/section--03.jpg?20190909"
          data-desktop="https://www.balmuda.com/jp/lantern/img/story/desktop/section--03.jpg?20190909"
          data-retina="https://www.balmuda.com/jp/lantern/img/story/desktop/section--03@2x.jpg?20190909"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/lantern/img/story/desktop/section--03@2x.jpg?20190909"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">设计の変遷</h2>
            <p>
              どんな製品も、その设计を探る旅は、いつも長くて辛い道のりです。今回のBALMUDA The
              Lanternも。この製品が持つルックスの中で最も重要なのは、言うまでもなく光そのものでした。上部に配置されたLEDの光は、中心の筒に導光され、最初から間接照明として発光しています。またろうそく色の光は、焚き火やろうそくの炎の揺らめきを再現するために複雑に明るさが変化します。そして何よりも難しかったのは、外観の设计でした。ロッジや暖炉、古い街灯などモチーフに始まった设计は、終盤まで四角柱で進みました。しかし、この形状には致命的な欠点があったのです。それはご馳走を並べたテーブルに似合わないこと。こうして決定寸前だった设计案は覆され、昔ながらのランタンから引用したものに再設計されました。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--04 scrollLoader lazyload loaded">
        <img
          data-mobile="https://www.balmuda.com/jp/lantern/img/story/mobile/section--04.jpg?20190909"
          data-desktop="https://www.balmuda.com/jp/lantern/img/story/desktop/section--04.jpg?20190909"
          data-retina="https://www.balmuda.com/jp/lantern/img/story/desktop/section--04@2x.jpg?20190909"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/lantern/img/story/desktop/section--04@2x.jpg?20190909"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title __wb">テイスティな時間</h2>
            <p>
              私たちがBALMUDA The
              Lanternを通じてお届けしたいのは、テイスティな時間。本を読むときや、音楽を聴くとき。二人の慎ましい食事がテーブルに並べられるときも、大人数の食事が供されるときも。夕暮れの森や星空の散歩でも。その傍らに、ほのかな灯りがあることで、同じ時間を少しだけ味わい深くしたいと考えていました。私たち開発者は、今自分が取り組んでいるものが当初の想定通りの働きをするかどうか、確かめる必要があります。あるとき、デザイナーから奇妙な申請書が上がってきました。社内のクリエイティブスタジオで10名程度のパーティーを開きたいと言う申請です。目的は、BALMUDA
              The
              Lanternの性能確認のためと書かれていました。承認しましたが、あのとき、アルコールは振る舞われたのかどうか、いまだに私は知りません。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--05 scrollLoader lazyload loaded">
        <img
          data-mobile="https://www.balmuda.com/jp/lantern/img/story/mobile/section--05.jpg?20190909"
          data-desktop="https://www.balmuda.com/jp/lantern/img/story/desktop/section--05.jpg?20190909"
          data-retina="https://www.balmuda.com/jp/lantern/img/story/desktop/section--05@2x.jpg?20190909"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/lantern/img/story/desktop/section--05@2x.jpg?20190909"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">深い落ち着き</h2>
            <p>
              『インターステラー』という素晴らしい映画があります。人類を救うために選ばれたクルーが、彷徨うように浮かぶ宇宙船の中で不安にかられ、録音されたコオロギの鳴き声を聞いて深く落ち着くシーンが印象的です。そのシーンに感化された私たち開発チームは、ランタン本体からコオロギの鳴き声を鳴らすという、後から考えると馬鹿げたアイデアを試します。これを実現するために、あるデザイナーは秋の間中、自宅でコオロギを飼って夜な夜なその鳴き声を録音しました。しかしこの案を実現するためには、音声を記録するメモリやマイコン、スピーカーなども必要になり、コストが上がってしまいます。結局、不採用になったこのアイデア。その理由はコストではありませんでした。音声があまりにもリアルすぎて、あたかも部屋のどこかにコオロギがいる気がするのです。つまり、落ち着くというよりむしろ、心配になるという作用が確認されたための不採用でした。
            </p>
            <p>
              ハードな人生です。たまには落ち着きましょう。そんなとき、皆さんの傍らに、BALMUDA The
              Lanternが灯っていたら、開発チームとしてはこれほど嬉しいことはありません。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
