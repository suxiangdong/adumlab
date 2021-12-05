import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'

export default function CleanerDetail() {

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
              <Link href="/cleaner/design">设计</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/feature">不同场景的使用方法</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/technology">科技</Link>
            </li>
            <li className={`pagemap__content__item __current`}>
              <Link href="/cleaner/story">开发故事</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/spec">规格</Link>
            </li>
          </ul>

          <div className="pagemap__btns">
            <a
              href="/support"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>
      <div className="section section--story section--00 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h1>
              <span>BALMUDA The Cleaner</span>
              <span>開発开发故事</span>
            </h1>
            <p>
              空調、キッチンに続く、次の製品ジャンルの候補として气乗りしなかった掃除機。
              <br />
              自分たちが心から欲しいと思えるものをつくるには
              <br />
              设计と、技術のジャンプが必要でした。
              <br />
              BALMUDA The Cleanerの開発开发故事をご紹介します。
            </p>
            <div className="__sign">
              <img
                src="/_theme/img/svg/gen_terao.min.svgz"
                className="__gen_terao"
                width="231"
                height="37"
              />
              <span className="__note">BALMUDA, Inc. CEO 兼 首席设计师　寺尾 玄</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--story section--01 scrollLoader lazyload">
        <img
          data-mobile="https://www.balmuda.com/jp/cleaner/img/story/mobile/section--01.jpg?202010161530"
          data-desktop="https://www.balmuda.com/jp/cleaner/img/story/desktop/section--01.jpg?202010161530"
          data-retina="https://www.balmuda.com/jp/cleaner/img/story/desktop/section--01@2x.jpg?202010161530"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/cleaner/img/story/desktop/section--01@2x.jpg?202010161530"
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">设计チーム、困る</h2>
            <p className="section__txt">
              2018年の年末、バルミューダの设计チームは困っていました。バルミューダの次の製品ジャンルを確立すべし、という任務に対して具体的なアイディアを出せていなかったからです。私が一人で創業し、自宅の机の上で製品を組み立て始めたのは17年前のこと。あれから様々な出来事が起こりましたが、中でも思い出深いのは2010年に発売した扇风機GreenFanです。バルミューダを家電メーカーへと導いてくれた記念すべき商品でした。
              <br />
              <br />
              そして次に思い出深いのは2015年に発売したBALMUDA The
              Toaster。これら二つの商品はそれぞれ、空調家電、キッチン家電と、私たちにとって重要な二つの製品ジャンルを切りひらきました。そろそろです。経営的に見ると、そろそろ次の製品ジャンルを確立しなければなりません。新ジャンルの、今後数年にわたるラインナップ案と、第一弾商品の具体案を出すこと。他ならぬ社長（私です）の指示が、開発、セールス、マーケティングの各部署に下されました。こんな時、先陣を切るのが设计チームの役目。そして私は兼務する设计チームの長として、困っていました。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--02 scrollLoader lazyload">
        <img
          data-mobile="https://www.balmuda.com/jp/cleaner/img/story/mobile/section--02.jpg?202010161530"
          data-desktop="https://www.balmuda.com/jp/cleaner/img/story/desktop/section--02.jpg?202010161530"
          data-retina="https://www.balmuda.com/jp/cleaner/img/story/desktop/section--02@2x.jpg?202010161530"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/cleaner/img/story/desktop/section--02@2x.jpg?202010161530"
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">あっちの方が便利</h2>
            <p className="section__txt">
              掃除機を作ってくれ。全社的には、そんな声が圧倒的でした。これは以前からバルミューダに期待されていたことの一つです。そんなことは设计チームは分かっています。分かっちゃいるけど、やらなかったのは。私自身が、「クイックルワイパー
              <sup>*1</sup>
              」の方が便利だと思っていたから。掃除って、部屋がキレイになればいいんですよね？さっと使える方が便利じゃないですか？仕上がり品質を比べると掃除機の方が圧倒的に上です。なのに、掃除機をかけるのって、やたら億劫なのです。なぜなのでしょう。
              <br />
              <br />
              「クイックルワイパー<sup>*1</sup>
              」と比べて掃除機は、仕上がり品質、时间の双方で勝っているはず。では、どこで劣っているかというと、掃除機そのものを出してくる手間、それと、操作性ではないでしょうか。なにしろ、掃除機は前後にしか動かせないのですから。この二つが私の億劫さの原因なのだとしたら、それを排除すればいいのかもしれない。つまり、出してくるどころか、最初から置いておける美しさを持ち、思い通りに動かせる操作性があればいいのではないか。あの時期、業務上の責任から、私は初めて掃除機のことを真剣に考えていました。
            </p>
            <p className="section__txt caution">
              *1：クイックルワイパーは、花王株式会社の商標または登録商標です。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--03 scrollLoader lazyload">
        <img
          data-mobile="https://www.balmuda.com/jp/cleaner/img/story/mobile/section--03.jpg?202010161530"
          data-desktop="https://www.balmuda.com/jp/cleaner/img/story/desktop/section--03.jpg?202010161530"
          data-retina="https://www.balmuda.com/jp/cleaner/img/story/desktop/section--03@2x.jpg?202010161530"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/cleaner/img/story/desktop/section--03@2x.jpg?202010161530"
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">三河屋でのたくらみ</h2>
            <p className="section__txt">
              次の日。数名のデザイナーとエンジニアを呼び、ランチをとりながら相談をしました。場所は、三河屋。私がいつも昼食をとっている近所のお蕎麦屋さんです。「掃除機について。掃除を始めるまでの心理的距離と運動エネルギーを最小にし、かつ、自在に操れるクリーナーって、作れないかな？」エンジニアには、このように科学的なオーダーをかけた方が早いのです。そして私は続けて言いました。「つまり、设计と、技術のジャンプが必要なんだけど」バルミューダのエンジニアには、この一言は効きます。私の目論見通り。早速、現在のクリーナーの弱点、それがなぜなのか、どういう解決策が考えられるかなどなど、活発な議論が始まっていました。
              <br />
              <br />
              思えば、BALMUDA The
              Cleanerの规格は、あの時の三河屋で決まっていたのだと思います。デュアルブラシ、ユニバーサルジョイントなどのアイディアは、お蕎麦屋さんの小さなテーブルの上ですでに語られていました。そして同日、私も社長として、新ジャンルは掃除機で行こうと決めていました。なぜって、こんなに面白そうにしている人たちを放っておくことはできないからです。結局、あの日に召集されたメンバーが、期待というプレッシャーの下で、クリーナーのコンセプトメイキングを担うことになりました。それは、頭をひねり、手作りの試作品を作り、様々な実験を行う日々を送るということです。三河屋のあの日、寒かったので、皆に鍋焼きうどんをご馳走しましたが、おそらく、日本で一番高くついた鍋焼きうどんだったと思います。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--04 scrollLoader lazyload">
        <img
          data-mobile="https://www.balmuda.com/jp/cleaner/img/story/mobile/section--04.jpg?202010161530"
          data-desktop="https://www.balmuda.com/jp/cleaner/img/story/desktop/section--04.jpg?202010161530"
          data-retina="https://www.balmuda.com/jp/cleaner/img/story/desktop/section--04@2x.jpg?202010161530"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/cleaner/img/story/desktop/section--04@2x.jpg?202010161530"
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title __wb">フェンシング、タンク、パンツ</h2>
            <p className="section__txt">
              次の週から、続々と面白いプロトタイプがあがってきました。その中でも忘れがたい幾つかのアイディアをご紹介します。まずは、「フェンシング」これはアシスト機能つき掃除機のアイディア。アシストするくらいならロボット掃除機を作った方が早いという結論により、ボツ。次に「タンク」こちらは掃除機2台を合わせて、デュアルブラシにした原理試作品で、とてもよく動き、実質的に今回のクリーナーの原案になりました。
              <br />
              <br />
              そして「パンツ」
              その試作品を作っていたデザイナーの横を通りかかった時、「あまり良くないと思うよ」と私は感想を述べましたが、彼はそれを完成させ、大勢の前でのプレゼンテーションの時を迎えます。写真の右側がそれ。ヘッド上部のホースを、ピンと張った薄いストレッチ素材で隠すというアイディアでしたが、デモの時、引っ張りすぎたのでしょうか、不運にもストレッチ素材が外れてしまいます。「あ！」と叫んだデザイナーは、次の瞬間、とっさにしゃがみこんで、露出したホースを両手で隠します！見えちゃいけないんだ、これは！彼の行動がそう叫んでいました。それを見ていた私たちが思い出したのは、パンツ。それは、不意に脱げてはならないもの。そして、脱げたらあわてて隠さなくてはならないもの。みんな同じ空想をしたのでしょう。私たちは赤面しながら大笑いしていました。商品開発はこんな瞬間があるからやめられません。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--05 scrollLoader lazyload">
        <img
          data-mobile="https://www.balmuda.com/jp/cleaner/img/story/mobile/section--05.jpg?202010161530"
          data-desktop="https://www.balmuda.com/jp/cleaner/img/story/desktop/section--05.jpg?202010161530"
          data-retina="https://www.balmuda.com/jp/cleaner/img/story/desktop/section--05@2x.jpg?202010161530"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/cleaner/img/story/desktop/section--05@2x.jpg?202010161530"
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">昔の人たちの夢</h2>
            <p className="section__txt">
              三河屋で語られたアイディアの中でも、大本命は、二本のローラーブラシをそれぞれ内側に回転させ、クリーナー自体が浮いているかのような状態を作り出すというもの。私の空想では、それは浮いているように、滑るように、自由自在に動くはずでした。思い描いていたのは、子供の頃に憧れたホバークラフトです。水の上も陸の上も、浮きながら進んでゆく姿は勇壮でした。大量の空气を下に送り出すことによって浮くので、その騒音の大きさ、燃費効率の悪さから普及はしませんでしたが、それでも少年の心にとっては、夢の乗り物でした。
              <br />
              <br />
              BALMUDA The
              Cleanerは、実際には浮きません。しかし、反転するデュアルブラシ、独自の接地キャスター、ユニバーサルジョイント、低重心設計など、様々な工夫とその組み合わせによって、私たちのクリーナーは、まるで浮いているかのような操作感を実現しています。その開発中。もしかして、おれたちは今、すごい発明をしているんじゃないだろうか。私を含めた開発チームが浮かれ始めていたころ、法務チームから連絡が。調べてみると数十年前の特許書類にデュアルブラシの記載があったそうです。それはそうですよね。一つのものを二つにするなんて誰でも思いつくアイディアだったのかもしれません。数十年前に特許出願されている技術は、いずれにしても現在では既知の技術とされ、誰でもそれを使うことができます。ま、思った通りのものは作れるので、それで良しとしましょう。それにしても。ホバークラフトといい、デュアルブラシといい、昔の人はいろんなことを思いついていたものです。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--06 scrollLoader lazyload">
        <img
          data-mobile="https://www.balmuda.com/jp/cleaner/img/story/mobile/section--06.jpg?202010161530"
          data-desktop="https://www.balmuda.com/jp/cleaner/img/story/desktop/section--06.jpg?202010161530"
          data-retina="https://www.balmuda.com/jp/cleaner/img/story/desktop/section--06@2x.jpg?202010161530"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/cleaner/img/story/desktop/section--06@2x.jpg?202010161530"
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">使っていない时间の方が長い</h2>
            <p className="section__txt">
              その後もプロトタイプは改良され、最後に追加したのが「ミニ四駆<sup>*2</sup>
              」から着想を得た、ヘッド四隅の小さな壁ローラーでした。BALMUDA The
              Cleanerのホバー性能を活かせば、壁や階段に沿って、ヘッドを横にスライドするように移動させることができます。この特性を、さらにスムーズにするための小さなアイディアでしたが、これが劇的に便利です。BALMUDA
              The Cleanerを試す機会があれば、ぜひ、壁際をスライドさせてみてください。
              <br />
              <br />
              技術構想が進む中、设计チームも並走しました。外観は、シンプル、かつクリーンであることを心がけましたが、最も重要だったのは、サイクロン吸引部を下に配置したことでしょう。重心が高いものは、見るだけで不安定さを感じさせます。逆にいうと、何かを设计する際には、重心を低くとるほうが自然なプロポーションになります。
              <br />
              <br />
              こだわったのは、充電スタンド。本体をそこにセットすると、操作スティックの先端が壁に接触するギリギリの角度で、少しだけ後ろに傾きます。なぜなら、その角度が最も自然で美しいから。何しろクリーナーは、使っている时间より、使っていない时间の方が圧倒的に長いのですから。
            </p>
            <p className="section__txt caution">
              *2：ミニ四駆は、株式会社タミヤの商標または登録商標です。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--07 scrollLoader lazyload">
        <img
          data-mobile="https://www.balmuda.com/jp/cleaner/img/story/mobile/section--07.jpg?202010161530"
          className="__image adaptiveimage __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">もう少し早く欲しかった</h2>
            <p className="section__txt">
              これを書いている時点では。BALMUDA The
              Cleanerが、はたして本当に新ジャンルを確立できるかどうかは不明です。ま、やれることはやったので、あとは時の運かな。でも私たちは、有用で、思い通りに動かせて、美しいものがあったら、それは他の人たちにも受け入れてもらえるのではないだろうかと期待を持っています。
              <br />
              <br />
              新たな製品ジャンルを作るべし、というビジネス要求から始まった今回のプロジェクト。思えば、あの三河屋のたくらみから、2年が過ぎようとしています。本当は、もう少し早く欲しかった、というのが経営者としての本音です。パンツの夢など見ていないで、商品化だけを考えたらもっと早かったのかもしれません。
              <br />
              <br />
              しかし、チーフクリエイターとしては。今回も、バルミューダらしい製品開発ができたと思っています。私たちが何かを作るのは、それを作りたいから。なぜ作りたいのかといえば、それが欲しいから。つまり私たちは、自分たちが本当に欲しいと思うものしか作れないのです。それが身勝手と言われようと。今回は、チーム全員が最後まで、浮いているかのようなホバー感にこだわり続けました。掃除が楽しくなるくらいの、自由自在な操作感にこだわり続けました。だって、一度夢見て、それが欲しくなってしまったのなら、仕方ないのです。
              <br />
              <br />
              こういった信念や、夢のようなものは形がありません。目に見えず、説得力がなく、つまりとても脆いものです。脆いから、誰かが守らなきゃいけないんだよね。
              <br />
              <br />
              でも。もう少し早く欲しかった。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
