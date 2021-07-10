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
              <Link href="/toaster/taste">特別なおいしさ</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/technology">トーストを科学する</Link>
            </li>
            <li className={`pagemap__content__item __current`}>
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
            <a
              href="//store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=K05A"
              className="btn btn--pagemap">
              購入
            </a>
          </div>
        </div>

        <div className="modal__cashless">
          <div className="modal__cashless__box">
            <p className="modal__cashless__txt">
              オンラインストア、正規販売店で30日間返金保証。ぜひお試しください。
            </p>
            <a href="//www.balmuda.com/jp/toaster/30-days" className="modal__cashless__link">
              詳しくはこちら
            </a>
            <div className="modal__cashless__btn"></div>
          </div>
        </div>
      </div>

      <div className="section section--howto section--00">
        <img
          data-mobile="//www.balmuda.com/jp/toaster/img/howto/mobile/section--00.jpg?20200915"
          data-desktop="//www.balmuda.com/jp/toaster/img/howto/desktop/section--00.jpg?20200915"
          data-retina="//www.balmuda.com/jp/toaster/img/howto/desktop/section--00@2x.jpg?20200915"
          className="__image adaptiveimage"
          src="//www.balmuda.com/jp/toaster/img/howto/desktop/section--00@2x.jpg?20200915"
        />
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">使い方</h2>
            <p>
              BALMUDA The
              Toasterなら、パンの種類に合わせて焼くことができ、特別なおいしさを引き出します。また、一般的なオーブントースターのようにお餅やグラタンなどの調理も可能です。
              <br className="pc" />
              各モードごとの上手な使い方と、お手入れ方法についてご紹介いたします。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--howto section--01 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <div className="step">
              <div className="step__text">
                <h2 className="section__title">
                  STEP<span>1</span>パンを入れる
                </h2>
                <p className="section__desc">
                  一般的なオーブントースターと同じように、扉を開け、パンを入れます。1枚なら中央、複数の場合は均等になるように並べてください。
                </p>
                <div className="step__img">
                  <img
                    data-mobile="//www.balmuda.com/jp/toaster/img/howto/mobile/img_step_01.png"
                    data-desktop="//www.balmuda.com/jp/toaster/img/howto/desktop/img_step_01.png"
                    data-retina="//www.balmuda.com/jp/toaster/img/howto/desktop/img_step_01@2x.png"
                    className="adaptiveimage"
                    src="//www.balmuda.com/jp/toaster/img/howto/desktop/img_step_01@2x.png"
                  />
                </div>
                <div className="qa">
                  <dl>
                    <dt>
                      <span className="asked">上手に焼くコツは？</span>
                    </dt>
                    <dd>
                      <span>
                        食パンには「頭」と「底」があります。山型パンなら山が頭で、角食パンは袋に入った状態で天面になっているほうが頭です。この「頭」を手前にして焼くと、ムラなく焼くことができます。
                      </span>
                      <span>
                        フランスパンは庫内に入る大きさであればまるごと温めて、焼き上がってからスライスすると中身がふんわりとした状態を召し上がることができます。
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      <span className="asked">高さ何センチまで入りますか？</span>
                    </dt>
                    <dd>
                      <span>
                        焼きアミとヒーターまでの距離はおおよそ7cmです。ヒーターに近くなるほど焦げやすくなるため、パンの高さは5.5cm以内が安心して焼けるでしょう。砂糖や油分がてっぺんについているパンは焦げやすいので注意が必要です。
                      </span>
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="step__img">
                <img
                  data-mobile="//www.balmuda.com/jp/toaster/img/howto/mobile/img_step_01.png"
                  data-desktop="//www.balmuda.com/jp/toaster/img/howto/desktop/img_step_01.png"
                  data-retina="//www.balmuda.com/jp/toaster/img/howto/desktop/img_step_01@2x.png"
                  className="adaptiveimage"
                  src="//www.balmuda.com/jp/toaster/img/howto/desktop/img_step_01@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--howto section--02 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <div className="step">
              <div className="step__text">
                <h2 className="section__title">
                  STEP<span>2</span>
                  <b>水を入れる</b>
                </h2>
                <p className="section__desc">
                  トースター上部にある給水口に、専用の5ccカップで毎回1杯の水を入れてください。クラシックモードは水を入れずに使います。
                </p>
                <div className="step__img">
                  <img
                    data-mobile="//www.balmuda.com/jp/toaster/img/howto/mobile/img_step_02.jpg"
                    className="adaptiveimage"
                  />
                </div>
                <div className="qa">
                  <dl>
                    <dt>
                      <span className="asked">枚数や種類によって水の量は変わりますか？</span>
                    </dt>
                    <dd>
                      <span>
                        パンの厚みや大きさ、枚数が違っても5ccの分量は変わりません。きっかりなるまで神経質に計らずとも5ccカップ1杯ぐらいの気持ちで楽しく入れてください。
                      </span>
                    </dd>
                  </dl>
                </div>
                <div className="tips_warning">
                  <h3>クラシックモードでは水を入れないでください</h3>
                  <p>
                    クラシックモードではスチームが出ないため、ボイラーに水が溜まり故障の原因になります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--howto section--03 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <div className="section--03__head">
              <h2 className="section__title">
                STEP<span>3</span>
                <br />
                <b>電源ON/OFFボタンを押して、モードを選択する</b>
              </h2>
              <p className="section__desc">
                モードによって焼き上がりが異なるので、「こうなってほしいな」と思う焼き上がりに合わせてモードを使い分けると、よりおいしく召し上がっていただけます。
              </p>
            </div>
            <div className="mode">
              <h3 className="mode__h">トースト</h3>
              <p className="mode__desc">
                トースト、チーズトーストの2つのモードは、表面にこんがり焼色を付けるのが特徴です。
              </p>
              <div className="mode__conts">
                <div className="mode__pnl mode__pnl--toast">
                  <h4 className="mode__pnl__h">
                    トースト
                    <br />
                    モード
                  </h4>
                  <p className="mode__pnl__comment">＼ こんがり焼き上げ ／</p>
                  <p className="mode__pnl__desc">
                    こんがりと焼き目をつけます。トースト以外にも、横半分にスライスしたベーグルやイングリッシュマフィンをカリッと仕上げるのに使えます。
                  </p>
                  <img
                    data-mobile="//www.balmuda.com/jp/toaster/img/svg/mode-toast.mobile.icons.svgz?20200915"
                    data-desktop="//www.balmuda.com/jp/toaster/img/svg/mode-toast.icons.svgz?20200915"
                    data-retina="//www.balmuda.com/jp/toaster/img/svg/mode-toast.icons.svgz?20200915"
                    className="adaptiveimage"
                    src="//www.balmuda.com/jp/toaster/img/svg/mode-toast.icons.svgz?20200915"
                  />
                </div>
                <div className="mode__pnl mode__pnl--cheese">
                  <h4 className="mode__pnl__h">
                    チーズトースト
                    <br />
                    モード
                  </h4>
                  <p className="mode__pnl__comment">＼ 上火強め ／</p>
                  <p className="mode__pnl__desc">
                    上火が強いので、チーズトーストのほか調理前の具材を乗せたメニューにぴったりです。ピザトーストや野菜や果物を乗せて火を通すメニューにも。
                  </p>
                  <img
                    data-mobile="//www.balmuda.com/jp/toaster/img/svg/mode-cheese.mobile.icons.svgz?20200915"
                    data-desktop="//www.balmuda.com/jp/toaster/img/svg/mode-cheese.icons.svgz?20200915"
                    data-retina="//www.balmuda.com/jp/toaster/img/svg/mode-cheese.icons.svgz?20200915"
                    className="adaptiveimage"
                    src="//www.balmuda.com/jp/toaster/img/svg/mode-cheese.icons.svgz?20200915"
                  />
                </div>
              </div>
            </div>
            <div className="mode">
              <h3 className="mode__h">リベイク（温め）</h3>
              <p className="mode__desc">
                中までアツアツに温めるのがリベイク。表面の仕上がりに応じて2種類のモードがあります。
              </p>
              <div className="mode__conts">
                <div className="mode__pnl mode__pnl--baguette">
                  <h4 className="mode__pnl__h">
                    フランスパン
                    <br />
                    モード
                  </h4>
                  <p className="mode__pnl__comment">＼ 焦げ目をつけない ／</p>
                  <p className="mode__pnl__desc">
                    表面に焼き色をつけずに、中までしっかり温めます。
                    フランスパン、ロールパン、コッペパンやマフィンを焼きたてのようにふっくらと温めます。
                  </p>
                  <img
                    data-mobile="//www.balmuda.com/jp/toaster/img/svg/mode-baguette.mobile.icons.svgz?20200915"
                    data-desktop="//www.balmuda.com/jp/toaster/img/svg/mode-baguette.icons.svgz?20200915"
                    data-retina="//www.balmuda.com/jp/toaster/img/svg/mode-baguette.icons.svgz?20200915"
                    className="adaptiveimage"
                    src="//www.balmuda.com/jp/toaster/img/svg/mode-baguette.icons.svgz?20200915"
                  />
                </div>
                <div className="mode__pnl mode__pnl--croissant">
                  <h4 className="mode__pnl__h">
                    クロワッサン
                    <br />
                    モード
                  </h4>
                  <p className="mode__pnl__comment">＼ 表面サクッと ／</p>
                  <p className="mode__pnl__desc">
                    中までしっかり温め、表面をサクッと仕上げます。デニッシュ系やスコーンをカリッとさせたい時や、メロンパンのリベイクなどによく合います。
                  </p>
                  <img
                    data-mobile="//www.balmuda.com/jp/toaster/img/svg/mode-croissant.mobile.icons.svgz?20200915"
                    data-desktop="//www.balmuda.com/jp/toaster/img/svg/mode-croissant.icons.svgz?20200915"
                    data-retina="//www.balmuda.com/jp/toaster/img/svg/mode-croissant.icons.svgz?20200915"
                    className="adaptiveimage"
                    src="//www.balmuda.com/jp/toaster/img/svg/mode-croissant.icons.svgz?20200915"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--howto section--03b scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <div className="mode">
              <h3 className="mode__h">トースター料理</h3>
              <p className="mode__desc">
                スチームを使わない「クラシックモード」を使えば、
                <br />
                パン以外のお料理にも活躍します。
              </p>
              <div className="mode__classic">
                <p className="lead">
                  クラシックモードは170℃・200℃・230℃と、上限温度を設定できるので、グラタンやクッキー、お餅など、さまざまなトースター料理をお楽しみいただけます。
                </p>
                <img
                  data-mobile="//www.balmuda.com/jp/toaster/img/svg/mode-classic.mobile.icons.svgz?20200915"
                  data-desktop="//www.balmuda.com/jp/toaster/img/svg/mode-classic.icons.svgz?20200915"
                  data-retina="//www.balmuda.com/jp/toaster/img/svg/mode-classic.icons.svgz?20200915"
                  className="adaptiveimage"
                  src="//www.balmuda.com/jp/toaster/img/svg/mode-classic.icons.svgz?20200915"
                />
                <div className="mode__classic__horo">
                  <div className="horo__img">
                    <img
                      data-mobile="//www.balmuda.com/jp/toaster/img/howto/mobile/img_mode_classic_horo.png?20200915"
                      data-desktop="//www.balmuda.com/jp/toaster/img/howto/desktop/img_mode_classic_horo.png?20200915"
                      data-retina="//www.balmuda.com/jp/toaster/img/howto/desktop/img_mode_classic_horo@2x.png?20200915"
                      className="adaptiveimage"
                      src="//www.balmuda.com/jp/toaster/img/howto/desktop/img_mode_classic_horo@2x.png?20200915"
                    />
                  </div>
                  <div className="horo__text">
                    <h3>琺瑯バットで料理の幅が広がります。</h3>
                    <p>
                      オーブン対応の容器を使えばお菓子作りや油を使った料理に大活躍。別売りアクセサリー・野田琺瑯のホワイトバット(21枚取)は、BALMUDA
                      The Toasterの庫内にちょうど収まるサイズです。
                    </p>
                    <a href="./accessory" className="section__btn">
                      野田琺瑯について
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--howto section--04 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <div className="step">
              <div className="step__text">
                <h2 className="section__title">
                  STEP<span>4</span>時間を設定
                </h2>
                <p className="section__desc">
                  右側のダイヤルを時計回りに回すとLEDが点灯します。設定したい時間まで回して止めると、動作が開始します。
                </p>
                <div className="step__img">
                  <img src="//www.balmuda.com/jp/toaster/img/howto/mobile/img_step_04_new.gif?20200915" />
                </div>
                <div className="qa">
                  <dl>
                    <dt>
                      <span className="asked">枚数や厚みで時間を変えたほうがいいですか？</span>
                    </dt>
                    <dd>
                      <span>
                        変える必要はありません。庫内の温度をこまかく計っているので、厚切り2枚を焼いて温度が上がりにくいことも、薄切り1枚で焼いて温度が上がりやすいことも分かっていて、考えながら調整しています。毎回同じタイマー設定で「いつもの焼き具合」が可能です。
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      <span className="asked">冷凍パンはどうやって焼きますか？</span>
                    </dt>
                    <dd>
                      <span>
                        冷凍のままトースターに入れて、パンの種類に合わせてモードを設定したら、常温のパンを焼くよりも1〜2分長めに焼いてください。パンは冷蔵するよりも冷凍したほうがおいしくいただけます。その日のうちに食べない分は冷凍することをおすすめします。
                      </span>
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="step__img">
                <img src="//www.balmuda.com/jp/toaster/img/howto/desktop/img_step_04_new.gif?20200915" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--howto section--05 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <div className="step">
              <div className="step__text">
                <h2 className="section__title">
                  STEP<span>5</span>
                  <b>使い終わった後は</b>
                </h2>
                <p className="section__desc">
                  パンくずトレイは使用の度に、それ以外の場所は汚れが目立ってきたらお手入れしてください。
                  <br />
                  焼きアミ、ボイラーカバー、給水パイプは取り外し可能です。
                </p>
              </div>
              <div className="step__img">
                <img
                  data-mobile="//www.balmuda.com/jp/toaster/img/howto/mobile/img_step_05.jpg"
                  className="adaptiveimage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
