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
            <li className={`pagemap__content__item __current`}>
              <Link href="/cleaner/design">创新设计</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/feature">不同场景的使用方法</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/technology">科技</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/story">故事</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/cleaner/spec">规格</Link>
            </li>
          </ul>

          <div className="pagemap__btns">
            <a
              href="//store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=C01A"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>
      <div className="section section--design section--00">
        <img
          data-mobile="https://www.balmuda.com/jp/cleaner/img/design/mobile/section--00-00.jpg?202010161530"
          data-desktop="https://www.balmuda.com/jp/cleaner/img/design/desktop/section--00-00.jpg?202010161530"
          data-retina="https://www.balmuda.com/jp/cleaner/img/design/desktop/section--00-00@2x.jpg?202010161530"
          className="adaptiveimage __image __image__00"
          data-model="black"
          alt=""
          src="https://www.balmuda.com/jp/cleaner/img/design/desktop/section--00-00@2x.jpg?202010161530"
        />
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">
              <span>立てかけられた、</span>
              <br className="sp" />
              <span>一本のほうき</span>
              <span>のように。</span>
            </h2>
            <p>
              <span>シンプルで清潔であること。</span>
              <span>そして一本のほうきのように自然であること。</span>
              <br className="__is_desktop" />
              <span>使っていないときも美しく。</span>
              <span>BALMUDA The Cleaner は、</span>
              <br className="__is_desktop" />
              <span>現代の掃除機が</span>
              <span>どんな姿であるべきかを</span>
              <span>考えて设计されました。</span>
            </p>
            <div className="__box">
              <img
                data-desktop="https://www.balmuda.com/jp/cleaner/img/design/desktop/section--00-01.jpg?202010161530"
                data-retina="https://www.balmuda.com/jp/cleaner/img/design/desktop/section--00-01@2x.jpg?202010161530"
                src="https://www.balmuda.com/jp/cleaner/img/design/desktop/section--00-01@2x.jpg?202010161530"
                className="adaptiveimage __image __image__01"
                data-model="black"
                alt=""
              />
              <img
                data-desktop="https://www.balmuda.com/jp/cleaner/img/design/desktop/section--00-02.jpg?202010161530"
                data-retina="https://www.balmuda.com/jp/cleaner/img/design/desktop/section--00-02@2x.jpg?202010161530"
                src="https://www.balmuda.com/jp/cleaner/img/design/desktop/section--00-02@2x.jpg?202010161530"
                className="adaptiveimage __image __image__02"
                data-model="black"
                alt=""
              />
              <img
                data-desktop="https://www.balmuda.com/jp/cleaner/img/design/desktop/section--00-03.jpg?202010161530"
                data-retina="https://www.balmuda.com/jp/cleaner/img/design/desktop/section--00-03@2x.jpg?202010161530"
                src="https://www.balmuda.com/jp/cleaner/img/design/desktop/section--00-03@2x.jpg?202010161530"
                className="adaptiveimage __image __image__03"
                data-model="black"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section section--design section--01">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content __first">
            <h2 className="section__title">
              気持ちよく使うための
              <br />
              低重心設計
            </h2>
            <p className="section__desc">
              ホバー科技の自在さを
              <br className="pc" />
              思いどおりに操るために。
              <br className="pc" />
              BALMUDA The Cleanerでは徹底した
              <br className="pc" />
              低重心設計がなされています。
              <br className="pc" />
              気持ちのよい掃除を、
              <br className="pc" />
              どうぞお楽しみください。
            </p>
          </div>
          <img
            data-desktop="https://www.balmuda.com/jp/cleaner/img/design/desktop/section--01-00.jpg?202010161530"
            data-retina="https://www.balmuda.com/jp/cleaner/img/design/desktop/section--01-00@2x.jpg?202010161530"
            src="https://www.balmuda.com/jp/cleaner/img/design/desktop/section--01-00@2x.jpg?202010161530"
            className="adaptiveimage __image __image__00"
            data-model="black"
            alt=""
          />
        </div>
        <div className="viewport scrollLoader fadeInUp __reverse loaded">
          <div className="__content __second">
            <h2 className="section__title">
              持ち方を選ばない
              <br />
              スティック型ハンドル
            </h2>
            <p className="section__desc">
              <span>ハンドルは、</span>
              <span>握りやすい</span>
              <span>スティック型。</span>
              <br className="pc" />
              <span>両手でも</span>
              <span>片手でも、</span>
              <span>身長や姿勢に</span>
              <span>かかわらず、</span>
              <span>誰でも</span>
              <span>無理のない</span>
              <span>動きで</span>
              <span>操作が</span>
              <span>可能です。</span>
            </p>
          </div>
          <img
            data-desktop="https://www.balmuda.com/jp/cleaner/img/design/desktop/section--01-01.jpg?202010161530"
            data-retina="https://www.balmuda.com/jp/cleaner/img/design/desktop/section--01-01@2x.jpg?202010161530"
            src="https://www.balmuda.com/jp/cleaner/img/design/desktop/section--01-01@2x.jpg?202010161530"
            className="adaptiveimage __image __image__00"
            data-model="black"
            alt=""
          />
        </div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content __third">
            <h2 className="section__title">
              たったひとつの
              <br />
              操作ボタン
            </h2>
            <p className="section__desc">
              私たちは家電の操作はできるかぎり
              <br className="pc" />
              シンプルであるべきだと考えます。
              <br className="pc" />
              スイッチのON・OFFは、スティック上面の
              <br className="pc" />
              ボタンを押すだけ。運転時の長押しで
              <br className="pc" />
              強モードに切り替わります。
            </p>
          </div>
          <img
            data-desktop="https://www.balmuda.com/jp/cleaner/img/design/desktop/section--01-02.jpg?202010161530"
            data-retina="https://www.balmuda.com/jp/cleaner/img/design/desktop/section--01-02@2x.jpg?202010161530"
            src="https://www.balmuda.com/jp/cleaner/img/design/desktop/section--01-02@2x.jpg?202010161530"
            className="adaptiveimage __image __image__00"
            data-model="black"
            alt=""
          />
        </div>
        <div className="viewport scrollLoader fadeInUp __reverse loaded">
          <div className="__content __fourth">
            <h2 className="section__title">
              立ち姿が美しい
              <br />
              充電スタンド
            </h2>
            <p className="section__desc">
              付属のスタンドに本体を載せれば充電開始。
              <br className="pc" />
              最も美しい角度で立てかけられるように
              <br className="pc" />
              設計されています。
            </p>
          </div>
          <img
            data-desktop="https://www.balmuda.com/jp/cleaner/img/design/desktop/section--01-03.jpg?202010161530"
            data-retina="https://www.balmuda.com/jp/cleaner/img/design/desktop/section--01-03@2x.jpg?202010161530"
            src="https://www.balmuda.com/jp/cleaner/img/design/desktop/section--01-03@2x.jpg?202010161530"
            className="adaptiveimage __image __image__00"
            data-model="black"
            alt=""
          />
        </div>
      </div>
    </Layout>
  )
}
