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
          href="/light/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/light/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <Link href="/light/">
            <a className="pagemap__content--logo">
              <img src="/_theme/img/svg/balmuda-the-light.min.svgz" alt="BALMUDA The Light" />
            </a>
          </Link>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index __current">
              <Link href="/light/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology">
              <Link href="/light/technology">テクノロジー</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--howto">
              <Link href="/light/howto">使い方</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/light/spec">スペック</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=L01A"
              className="btn btn--pagemap">
              購入
            </a>
          </div>
        </div>
      </div>

      <div className="billboard__wrapper">
        <ReactSlick dots className="billboard" id="billboard">
          <div className="billboard--02">
            <img
              data-mobile="//www.balmuda.com/jp/light/img/index/mobile/billboard--02.jpg?20201006"
              data-desktop="//www.balmuda.com/jp/light/img/index/desktop/billboard--02.jpg?20201006"
              data-retina="//www.balmuda.com/jp/light/img/index/desktop/billboard--02@2x.jpg?20201006"
              src="//www.balmuda.com/jp/light/img/index/desktop/billboard--02@2x.jpg?20201006"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="billboard--08">
            <img
              data-mobile="//www.balmuda.com/jp/light/img/index/mobile/billboard--08.jpg?20201006"
              data-desktop="//www.balmuda.com/jp/light/img/index/desktop/billboard--08.jpg?20201006"
              data-retina="//www.balmuda.com/jp/light/img/index/desktop/billboard--08@2x.jpg?20201006"
              src="//www.balmuda.com/jp/light/img/index/desktop/billboard--08@2x.jpg?20201006"
              className="__image adaptiveimage slick--lazy"
            />
            <Link href="/light/review/002">
              <div className="__overlay">イラスト　窪之内英策</div>
            </Link>
          </div>
          <div className="billboard--04">
            <img
              data-mobile="//www.balmuda.com/jp/light/img/index/mobile/billboard--04.jpg?20201006"
              data-desktop="//www.balmuda.com/jp/light/img/index/desktop/billboard--04.jpg?20201006"
              data-retina="//www.balmuda.com/jp/light/img/index/desktop/billboard--04@2x.jpg?20201006"
              src="//www.balmuda.com/jp/light/img/index/desktop/billboard--04@2x.jpg?20201006"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="billboard--07">
            <img
              data-mobile="//www.balmuda.com/jp/light/img/index/mobile/billboard--07.jpg?20201006"
              data-desktop="//www.balmuda.com/jp/light/img/index/desktop/billboard--07.jpg?20201006"
              data-retina="//www.balmuda.com/jp/light/img/index/desktop/billboard--07@2x.jpg?20201006"
              src="//www.balmuda.com/jp/light/img/index/desktop/billboard--07@2x.jpg?20201006"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="billboard--00">
            <img
              data-mobile="//www.balmuda.com/jp/light/img/index/mobile/billboard--00.jpg?20201006"
              data-desktop="//www.balmuda.com/jp/light/img/index/desktop/billboard--00.jpg?20201006"
              data-retina="//www.balmuda.com/jp/light/img/index/desktop/billboard--00@2x.jpg?20201006"
              src="//www.balmuda.com/jp/light/img/index/desktop/billboard--00@2x.jpg?20201006"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="billboard--01">
            <img
              data-mobile="//www.balmuda.com/jp/light/img/index/mobile/billboard--01.jpg?20201006"
              data-desktop="//www.balmuda.com/jp/light/img/index/desktop/billboard--01.jpg?20201006"
              data-retina="//www.balmuda.com/jp/light/img/index/desktop/billboard--01@2x.jpg?20201006"
              src="//www.balmuda.com/jp/light/img/index/desktop/billboard--01@2x.jpg?20201006"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
        </ReactSlick>
      </div>

      <div className="section section--index section--00">
        <div className="__mainimage">
          <div className="__inner">
            <img
              data-mobile="//www.balmuda.com/jp/light/img/index/mobile/main.jpg?20201006"
              data-desktop="//www.balmuda.com/jp/light/img/index/desktop/main.jpg?20201006"
              data-retina="//www.balmuda.com/jp/light/img/index/desktop/main@2x.jpg?20201006"
              className="__image adaptiveimage"
              src="//www.balmuda.com/jp/light/img/index/desktop/main@2x.jpg?20201006"
            />
          </div>
        </div>
        <div className="viewport">
          <h2 className="page__title __wb __is_desktop">
            <span>子どもたちの</span>
            <span>目を守る光</span>
          </h2>
          <h2 className="page__title __wb __is_mobile">
            <span>子どもたちの</span>
            <span>目を守る光</span>
          </h2>
          <span className="label__block">太陽光LEDデスクライト</span>
          <p className="overview_text __wb">
            <span>BALMUDA The Lightは</span>
            <span>独自の光拡散技術により、</span>
            <span>目線の先に影を作らないデスクライト。</span>
            <br />
            <span>また、医療現場や美術館で使用される</span>
            <span>演色性の高い太陽光LEDを採用。</span>
            <br />
            <span>真剣な眼差しをやさしく守り、</span>
            <span>集中力を後押しします。</span>
          </p>
          <div className="the-price">
            <p className="price price--excl_tax" id="price2">
              40,700
            </p>
            <p className="colores">ブラック／ホワイト／ベージュ</p>
          </div>
        </div>
      </div>

      <div className="section section--index section--01 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h3 className="section__subtitle __wb">
              <span>目線の先に</span>
              <span>影ができない光</span>
            </h3>
            <h4 className="section__h __wb">
              <span>フォワードビーム</span>
              <span>テクノロジー</span>
              <span>
                <em>（特許登録済）</em>
              </span>
            </h4>
            <p className="section__desc">
              医療用の手術灯をヒントに開発した独自の構造で、離れた場所から広く手元を照らします。
            </p>
            <a href="./technology" className="section__btn">
              さらに詳しく
            </a>
          </div>
        </div>
      </div>

      <div className="section section--index section--02 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h3 className="section__subtitle __wb">
              <span>色鮮やか</span>
            </h3>
            <h4 className="section__h">太陽光LED</h4>
            <p className="section__desc">
              美術館などの色にシビアな環境で使用される太陽光LEDは自然光に近い光。目にやさしく、集中力を妨げません。
            </p>
            <a href="./technology#led" className="section__btn">
              さらに詳しく
            </a>
          </div>
        </div>
      </div>

      <div className="section section--index section--03 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h3 className="section__subtitle __wb">
              <span>ツールボックス&amp;</span>
              <span>ステッカー</span>
            </h3>
            <p className="section__desc">
              鉛筆やハサミや定規。ツールボックスにはお気に入りの道具を入れて、ライトアップすることができます。
            </p>
            <p className="section__desc">
              また、本体に貼る事ができる専用ステッカーが付属します。組み合わせて貼れば、自分だけのデスクライトになります。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--index section--05 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h3 className="section__subtitle">開発ストーリー</h3>
            <p className="section__desc">
              子どもたちの目を守りたい。そんな思いから始まったBALMUDA The
              Lightの開発にまつわるストーリーをご紹介します。
            </p>
            <a href="./story" className="section__btn">
              さらに詳しく
            </a>
          </div>
        </div>
      </div>

      <div className="section section--blockquote">
        <div className="viewport">
          <h2 className="section__title">
            <img
              src="//www.balmuda.com/jp/light/img/index/svg/media.svgz?20201006"
              className="__title"
              alt="MEDIA"
            />
            <span className="__caption">様々なメディアに取り上げられています</span>
          </h2>
          <ReactSlick dots className="blockquotes" id="blockquotes">
            <div className="blockquote">
              <blockquote className="__wb">
                <span>頭が影を作ることもなく、</span>
                <span>眩しくもなく、</span>
                <span>手元を明るく照らせる</span>
              </blockquote>
              <p className="__media">家電Watch</p>
              <a
                href="//kaden.watch.impress.co.jp/docs/news/1142021.html"
                target="_blank"
                className="__link">
                https://kaden.watch.impress.co.jp/docs/news/1142021.html
              </a>
            </div>
            <div className="blockquote">
              <blockquote className="__wb">
                <span>気がつくと、姿勢わるく、</span>
                <span>机に近づいて</span>
                <span>作業している。</span>
                <span>これに切り込むプロダクト</span>
              </blockquote>
              <p className="__media">ROOMIE</p>
              <a href="//www.roomie.jp/2018/09/452500/" target="_blank" className="__link">
                https://www.roomie.jp/2018/09/452500/
              </a>
            </div>
            <div className="blockquote">
              <blockquote className="__wb">
                <span>ライトの光が</span>
                <span>目に入ることがなく、</span>
                <span>手元にだけスルッと入り込む</span>
              </blockquote>
              <p className="__media">デジモノステーション（d.365）</p>
              <a href="//www.digimonostation.jp/0000156554/" target="_blank" className="__link">
                https://www.digimonostation.jp/0000156554/
              </a>
            </div>
            <div className="blockquote">
              <blockquote className="__wb">
                <span>普及が進んだLEDが</span>
                <span>光の質を競う時代に入った。</span>
              </blockquote>
              <p className="__media">日本経済新聞</p>
              <a
                href="//www.nikkei.com/article/DGXMZO35065450W8A900C1TJ2000/"
                target="_blank"
                className="__link">
                https://www.nikkei.com/article/DGXMZO35065450W8A900C1TJ2000/
              </a>
            </div>
            <div className="blockquote">
              <blockquote className="__wb">
                <span>子どもの想像力の創出と、</span>
                <span>未来の目を</span>
                <span>守るためのライト。</span>
              </blockquote>
              <p className="__media">家電批評（2018年11月号）</p>
              <a href="//www.shinyusha.co.jp/media/kh1811/" target="_blank" className="__link">
                http://www.shinyusha.co.jp/media/kh1811/
              </a>
            </div>
            <div className="blockquote">
              <blockquote className="__wb">
                <span>子どもの将来のためにも、</span>
                <span>ぜひ買ってあげたい家電</span>
              </blockquote>
              <p className="__media">VERY</p>
              <a href="//veryweb.jp/kids/26965/" target="_blank" className="__link">
                https://veryweb.jp/kids/26965/
              </a>
            </div>
          </ReactSlick>
        </div>
      </div>

      <div className="gallery scrollLoader lazyload loaded">
        <div className="viewport">
          <div className="__content">
            <h2 className="gallery__h">ギャラリー</h2>
          </div>

          <div className="gallery__content" data-pswp-uid="1">
            <figure>
              <img
                data-mobile="//www.balmuda.com/jp/light/img/index/gallery/1@2x.jpg?20201006"
                data-desktop="//www.balmuda.com/jp/light/img/index/gallery/1.jpg?20201006"
                data-retina="//www.balmuda.com/jp/light/img/index/gallery/1@2x.jpg?20201006"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/light/img/index/gallery/1@2x.jpg?20201006"
              />
            </figure>
            <figure>
              <img
                data-mobile="//www.balmuda.com/jp/light/img/index/gallery/2@2x.jpg?20201006"
                data-desktop="//www.balmuda.com/jp/light/img/index/gallery/2.jpg?20201006"
                data-retina="//www.balmuda.com/jp/light/img/index/gallery/2@2x.jpg?20201006"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/light/img/index/gallery/2@2x.jpg?20201006"
              />
            </figure>
            <figure>
              <img
                data-mobile="//www.balmuda.com/jp/light/img/index/gallery/3@2x.jpg?20201006"
                data-desktop="//www.balmuda.com/jp/light/img/index/gallery/3.jpg?20201006"
                data-retina="//www.balmuda.com/jp/light/img/index/gallery/3@2x.jpg?20201006"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/light/img/index/gallery/3@2x.jpg?20201006"
              />
            </figure>
            <figure>
              <img
                data-mobile="//www.balmuda.com/jp/light/img/index/gallery/4@2x.jpg?20201006"
                data-desktop="//www.balmuda.com/jp/light/img/index/gallery/4.jpg?20201006"
                data-retina="//www.balmuda.com/jp/light/img/index/gallery/4@2x.jpg?20201006"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/light/img/index/gallery/4@2x.jpg?20201006"
              />
            </figure>
            <figure>
              <img
                data-mobile="//www.balmuda.com/jp/light/img/index/gallery/5@2x.jpg?20201006"
                data-desktop="//www.balmuda.com/jp/light/img/index/gallery/5.jpg?20201006"
                data-retina="//www.balmuda.com/jp/light/img/index/gallery/5@2x.jpg?20201006"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/light/img/index/gallery/5@2x.jpg?20201006"
              />
            </figure>
            <figure>
              <img
                data-mobile="//www.balmuda.com/jp/light/img/index/gallery/6@2x.jpg?20201006"
                data-desktop="//www.balmuda.com/jp/light/img/index/gallery/6.jpg?20201006"
                data-retina="//www.balmuda.com/jp/light/img/index/gallery/6@2x.jpg?20201006"
                className="__clip adaptiveimage"
                src="//www.balmuda.com/jp/light/img/index/gallery/6@2x.jpg?20201006"
              />
            </figure>
          </div>
        </div>
      </div>
    </Layout>
  )
}
