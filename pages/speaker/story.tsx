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
          href="/speaker/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/speaker/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <Link href="/speaker/">
            <a className="pagemap__content--logo">
              <img src="/_theme/img/svg/balmuda-the-speaker.svgz" alt="BALMUDA The Speaker" />
            </a>
          </Link>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/speaker/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology">
              <Link href="/speaker/technology">科技</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story __current">
              <Link href="/speaker/story">故事</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--setting">
              <Link href="/speaker/setting">设置</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/speaker/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=M01A"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>
      <div className="section section--story section--00 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h1>
              <span>BALMUDA The Speaker</span>
              <span>開発ストーリー</span>
            </h1>
            <p>
              <span>バルミューダを始めてからこの時まで。</span>
              <span>私は、オーディオ機器だけは作らないと決めていました。</span>
              <span>ステレオ音源をどんなに上質に再生しても、</span>
              <span>実際の演奏が持つ真の高揚感や臨場感、</span>
              <span>音楽的な感動は再現されないと</span>
              <span>思っていたからです。</span>
              <span>そんな思いを覆すことになったのは、</span>
              <span>ある日のデザイナーの提案がきっかけでした。</span>
              <br />
              BALMUDA The Speakerの開発ストーリーをご紹介します。
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
          data-mobile="https://www.balmuda.com/jp/speaker/img/story/mobile/section--01.jpg?20200325"
          data-desktop="https://www.balmuda.com/jp/speaker/img/story/desktop/section--01.jpg?20200325"
          data-retina="https://www.balmuda.com/jp/speaker/img/story/desktop/section--01@2x.jpg?20200325"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/speaker/img/story/desktop/section--01@2x.jpg?20200325"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">スピーカーは作らない</h2>
            <p className="section__txt--large">バ</p>
            <p className="section__txt">
              ルミューダを創業する前、私はミュージシャンとして活動していました。未熟で反抗的で、甘くも苦くもあったあの時代。やっと押さえたコードで初めてアコースティックギターが鳴った瞬間。バンド4人の演奏で、それまでなかったグルーヴが生み出されたとき。会場の外にまでメッセージが届くかと思うくらいに声が走ったとき。言いようのない、それこそ、音楽的としか言いようのない感動を何度も味わいました。自ら演奏していたからこそ、の思いですが、録音された音源は生の素晴らしい演奏には、絶対にかないません。だから私は、オーディオ機器だけは作らないと決めていました。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--02 scrollLoader lazyload loaded">
        <img
          data-mobile="https://www.balmuda.com/jp/speaker/img/story/mobile/section--02.jpg?20200325"
          data-desktop="https://www.balmuda.com/jp/speaker/img/story/desktop/section--02.jpg?20200325"
          data-retina="https://www.balmuda.com/jp/speaker/img/story/desktop/section--02@2x.jpg?20200325"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/speaker/img/story/desktop/section--02@2x.jpg?20200325"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">最高位の科学技術</h2>
            <p className="section__txt--large">個</p>
            <p className="section__txt">
              人的な見解ですが、音楽ほど高度な科学技術はないと思っています。私たちが慣れ親しんでいる音階。下の「ド」と上の「ド」の2つの音は、ちょうど周波数が倍になります。精密な計測機器もない時代に、この2つの音の間を７つに分け、音階は作られました。一体、どのように作ったのでしょう。数字的にとても整合性の取れた音階を組み合わせて和音が作られ、その上にメロディーと、時間とともに進行するリズムがあり、ボーカル曲の場合、ここに詩が乗せられます。さらにこれを演奏する上では、各楽器が織りなす音色、そして生の人間の声までが構成要素として並びます。ちなみに、あらゆる楽器の中で人間が最も感動するのは、人の声だそうです。人間の持つ科学力と芸術力がここまで結集された素晴らしい技術です。理路整然としているのに人間的。正しいのに、親しみ深い。例えば。３分で誰かの心を暖かくしたり、奮い立たせるものが、他にあるでしょうか？そして最も重大な場合、３分で誰かの人生を変えてしまうようなものが。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--03 scrollLoader lazyload loaded">
        <img
          data-mobile="https://www.balmuda.com/jp/speaker/img/story/mobile/section--03.jpg?20200325"
          data-desktop="https://www.balmuda.com/jp/speaker/img/story/desktop/section--03.jpg?20200325"
          data-retina="https://www.balmuda.com/jp/speaker/img/story/desktop/section--03@2x.jpg?20200325"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/speaker/img/story/desktop/section--03@2x.jpg?20200325"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">いくつかの発明</h2>
            <p className="section__txt--large">オ</p>
            <p className="section__txt">
              ーディオ機器を作らないという私の決心を覆したのは、あるデザイナーたちが作ってきた、ラジカセのような形をしたコンセプトモデルでした。左右のスピーカーの真ん中が空洞になっていて、この空洞は彼ら曰く、ステージとのこと。とにかく聴いてください、と言われて様子を見ていると。曲に合わせてステージのライティングが変化し、サビではなんと、小さなミラーボールが回り始めました。それは素晴らしい体験で、曲のエンディングでは、私はすでにスピーカーを作ろうと決めていました。そして違う曲をかけてくれと頼むと…デザイナーたちは困った顔をしています。なぜならば、ライトは曲を解析して光っていたわけではなく、この曲専用にプログラムされたもので、さらには、曲とライティングは別々のスイッチを持ったそれぞれの担当が同時にスイッチをオンしないとタイミングが合わないとのこと。まあ、最初のデモ機はいつもこんなものです。私たちは曲を解析するためのAIの開発に取り掛かりましたが、サビや間奏を認識する難しさといったらありません。何しろ、ギターソロなのかボーカルなのか、波形からは読み取ることができないのですから。計画が頓挫しかかった時、今度は別のデザイナーがデモ機を持ってきて、見てくださいと言います。彼のデモ機は、音のエネルギーにLEDの明るさが完璧に追従するというもの。とてもシンプル。そして、その光は驚くほど音楽的でした。BALMUDA
              The Speaker は、幾人ものデザイナーのあくなき提案から生まれました。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--04 scrollLoader lazyload loaded">
        <img
          data-mobile="https://www.balmuda.com/jp/speaker/img/story/mobile/section--04.jpg?20200325"
          data-desktop="https://www.balmuda.com/jp/speaker/img/story/desktop/section--04.jpg?20200325"
          data-retina="https://www.balmuda.com/jp/speaker/img/story/desktop/section--04@2x.jpg?20200325"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/speaker/img/story/desktop/section--04@2x.jpg?20200325"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title __wb">设计と光</h2>
            <p className="section__txt--large">B</p>
            <p className="section__txt">
              ALMUDA The Speaker
              の外見上の最も大きな特徴は、もちろんその光。目指したのはあたかもライブステージを見ているかのような、臨場感を感じられること。音に合わせて光るだけではなく、音楽が持つ複雑さを表現しようと試行錯誤しました。どのような工夫をしたのかは企業秘密ですが、とても音楽的な光になったと思っています。同時に考えられていたのは、それらの光が明滅する場所。メインの光源は真空管風のチューブの中に閉じ込め、周囲には支柱、それらを覆う外郭の透明部品。このように、縦方向のオブジェクトを重層的に配置することで、複雑な反射光も作り出しています。そしてもう一つ。個人的に音楽時代から慣れ親しんできたヴィンテージの音楽機材の雰囲気を持たせようと思っていました。ラジオ放送の始まりとともに生まれ、一歩ずつ進歩してきたそれらの機材は、サウンドはもちろん、外見にも言葉にできない温かみを持っています。私はこれらの昔の機材を会社に持ち込み、デザイナーたちと特徴を解析しました。无线扬声器という現代の道具だからこそ。古き善きものから引用し、温かみのある道具に仕上げたいと考えました。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--05 scrollLoader lazyload loaded">
        <img
          data-mobile="https://www.balmuda.com/jp/speaker/img/story/mobile/section--05.jpg?20200325"
          data-desktop="https://www.balmuda.com/jp/speaker/img/story/desktop/section--05.jpg?20200325"
          data-retina="https://www.balmuda.com/jp/speaker/img/story/desktop/section--05@2x.jpg?20200325"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/speaker/img/story/desktop/section--05@2x.jpg?20200325"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">
              ノー リリック、
              <br />
              ノー ライフ
            </h2>
            <p className="section__txt--large">ス</p>
            <p className="section__txt">
              ピーカーは音が命です。ん？本当にそうなのでしょうか。通常のスピーカーは、周波数特性がなるべくフラット、加えて多くの場合、あ、いい音だな、と感じてもらうために、低音と高音を少しだけメイクアップした音作りをしています。しかし、そもそも私たちは、スピーカーから鳴る「音」を聴いているのでしょうか？　それとも「音楽」を聴いているのでしょうか？　現代音楽の中核はボーカルです。BALMUDA
              The
              Speakerの音づくりで目指したのは、シンガーの声が感動的に聴こえること。楽曲、そして歌へのリスペクトから音のチューニングがなされました。機会があれば、ぜひ、私たちのスピーカーを試してみてください。ボーカルがとても近くに聴こえるはずです。そしてこれは半ば偶然なのですが…直径77ミリという大きなスピーカーユニットを上向きに配置した構造と、ボーカル中心の音作りのミックスによって、その他の楽器の輪郭もはっきり聴こえ、かつ抜けが良いというマジックも生まれました。ま、偶然だったのですが。運も実力のうちと言いますし。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--06 scrollLoader lazyload loaded">
        <img
          data-mobile="https://www.balmuda.com/jp/speaker/img/story/mobile/section--06.jpg?20200325"
          data-desktop="https://www.balmuda.com/jp/speaker/img/story/desktop/section--06.jpg?20200325"
          data-retina="https://www.balmuda.com/jp/speaker/img/story/desktop/section--06@2x.jpg?20200325"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/speaker/img/story/desktop/section--06@2x.jpg?20200325"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">クリスタルな夜</h2>
            <p className="section__txt--large">私</p>
            <p className="section__txt">
              は人生最後に聴く曲を決めています。それはこの世界で最も好きな曲。ザ・ポリスの「Every
              Breath You
              Take」です。この名曲との出会いは、17歳の夏のこと。私は高校を中退して一人、南ヨーロッパへ旅に出かけようとしていました。出発が数日後に迫ったある夜、クラスメイトが私の家に集まってくれました。壮行会だったのか送別会だったのか覚えていませんが、そんな風にして集まってくれたのもなんだかくすぐったい思い出です。私は、数日後から始まる完全に自由な日々への憧れと、同時になんでも自分で決めていかなければならないという自由の怖さも身体で感じていて、なんとなく上の空だったように思います。そんな時、大村くんというあまり親しくなかった友人がプレゼントしてくれたのが、ザ・ポリスの「シンクロニシティ」というCDでした。7曲目だけ聴いて。と言われ再生ボタンを押してかかったのが「Every
              Breath You
              Take」でした。イントロが鳴り渡った瞬間、私は息をのみました。そこにはラジカセしかないはずなのに、私の目の前には楽曲が持つ広大な世界が広がっていました。それは透明度が高く、適度な湿度があり、切なくもスイートな世界。そのあと、一人で表に出て見上げた夜空と、吹かれた風はいまだに忘れることができません。そう。音楽って、本当にいいものですよね。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
