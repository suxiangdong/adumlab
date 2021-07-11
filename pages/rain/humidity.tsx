import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'
import { useState } from 'react'

export default function ProductDetail() {
  const [isOpen, setIsOpen] = useState(false)

	const handleOpenModal = (e) => {
		e.preventDefault()
		setIsOpen(true)
	}

  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/rain/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/rain/style/desktop.css?20210701173839"></link>
      </Head>

      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <Link href="/rain/">
            <a className="pagemap__content--logo">
              <img src="/_theme/img/svg/balmuda-rain.min.svgz" alt="Rain" />
            </a>
          </Link>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/rain/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--classic">
              <Link href="/rain/classic">クラシックで先進的</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--humidity __current">
              <Link href="/rain/humidity">適切な湿度</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/rain/spec">スペック</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=ERN-1100SD-WK"
              className="btn btn--pagemap">
              購入
            </a>
          </div>
        </div>
      </div>

      <div className="section section--humidity section--00">
        <img
          data-mobile="//www.balmuda.com/jp/rain/img/humidity/mobile/section--00.jpg"
          data-desktop="//www.balmuda.com/jp/rain/img/humidity/desktop/section--00.jpg"
          data-retina="//www.balmuda.com/jp/rain/img/humidity/desktop/section--00@2x.jpg"
          className="__image adaptiveimage"
          src="//www.balmuda.com/jp/rain/img/humidity/desktop/section--00@2x.jpg"
        />
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">清潔で適切な湿度</h2>
            <p>
              空気が乾燥しているとウイルスが活性化します。多湿状態ではカビなどが繁殖しやすくなります。気化式で加湿するRainはそのどちらも抑え、人が快適だと感じられる約50％の湿度を自然に作り出します。約50％の湿度は、部屋や家具の良好な状態維持にも適した湿度です。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--humidity section--01 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title __wb">
              自然の原理を使う
              <br />
              気化式加湿
            </h2>

            <div className="mode_column">
              <div>
                <img
                  data-mobile="//www.balmuda.com/jp/rain/img/humidity/mobile/section--01_icn_01.jpg"
                  data-desktop="//www.balmuda.com/jp/rain/img/humidity/desktop/section--01_icn_01.jpg"
                  data-retina="//www.balmuda.com/jp/rain/img/humidity/desktop/section--01_icn_01@2x.jpg"
                  className="adaptiveimage"
                  src="//www.balmuda.com/jp/rain/img/humidity/desktop/section--01_icn_01@2x.jpg"
                />
                <h3>超音波式</h3>
                <p>
                  加湿の方法は主に3種類あります。超音波式は、水を振動させ、液体のまま微細な粒子にして空間に放出させる方法です。元の水に雑菌などが含まれる場合、同時に空間に放出してしまうことがあります。
                </p>
              </div>
              <div>
                <img
                  data-mobile="//www.balmuda.com/jp/rain/img/humidity/mobile/section--01_icn_02.jpg"
                  data-desktop="//www.balmuda.com/jp/rain/img/humidity/desktop/section--01_icn_02.jpg"
                  data-retina="//www.balmuda.com/jp/rain/img/humidity/desktop/section--01_icn_02@2x.jpg"
                  className=" adaptiveimage"
                  src="//www.balmuda.com/jp/rain/img/humidity/desktop/section--01_icn_02@2x.jpg"
                />
                <h3>加熱式</h3>
                <p>
                  加熱式は、水をヒーターで加熱し、蒸気にして空間に放出する方法です。蒸気が高温になったり、加湿しすぎて室内が結露してしまうことがありました。ヒーターを使うので、他の方式に比べて消費電力が大きくなります。
                </p>
              </div>
              <div>
                <img
                  data-mobile="//www.balmuda.com/jp/rain/img/humidity/mobile/section--01_icn_03.jpg"
                  data-desktop="//www.balmuda.com/jp/rain/img/humidity/desktop/section--01_icn_03.jpg"
                  data-retina="//www.balmuda.com/jp/rain/img/humidity/desktop/section--01_icn_03@2x.jpg"
                  className=" adaptiveimage"
                  src="//www.balmuda.com/jp/rain/img/humidity/desktop/section--01_icn_03@2x.jpg"
                />
                <h3>気化式</h3>
                <p>
                  Rainの加湿方法は気化式。乾燥する季節にコップの水が自然に少なくなっていく自然の原理を利用し、風の力で加湿能力を上げています。雑菌の放出もなく、加湿しすぎることもありません。消費電力が小さいことも特徴です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--humidity section--02 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>

        <div className="fadeout_image scrollin">
          <img
            data-desktop="//www.balmuda.com/jp/rain/img/humidity/desktop/section--02_fadeout_image.png"
            data-retina="//www.balmuda.com/jp/rain/img/humidity/desktop/section--02_fadeout_image@2x.png"
            className="adaptiveimage"
            src="//www.balmuda.com/jp/rain/img/humidity/desktop/section--02_fadeout_image@2x.png"
          />
        </div>

        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title __wb">空気を洗うしくみ</h2>
            <p>
              Rainに取り込まれた乾燥した空気は酵素フィルターによって除菌された後、たっぷり水を含んだ加湿フィルターを通り、湿度を含んだ清潔な空気となって送り出されます。
            </p>
          </div>
        </div>
      </div>
      <div className="section section--humidity section--03 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title __wb">30分でウイルスを除去</h2>

            <img
              data-mobile="//www.balmuda.com/jp/rain/img/humidity/mobile/section--03.jpg"
              data-desktop="//www.balmuda.com/jp/rain/img/humidity/desktop/section--03.jpg"
              data-retina="//www.balmuda.com/jp/rain/img/humidity/desktop/section--03@2x.jpg"
              className="section--03_img adaptiveimage __is_desktop"
              src="//www.balmuda.com/jp/rain/img/humidity/desktop/section--03@2x.jpg"
            />

            <p>
              空気を取り込むプレフィルターは溶菌酵素をコーティングしています。酵素プレフィルターはホコリを取り除くと同時に空気中のウイルスや細菌も除去し、空気を清潔に保ちます。25m³の部屋で実施した試験では30分で85%、90分で91%除去することが実証されています。
            </p>
            <p className="note">* 日本食品分析センターによる実験結果</p>
            <a href="#" onClick={handleOpenModal} className="button modal-action" data-modal-for="section--03_modal">
              溶菌酵素について
            </a>
          </div>
        </div>
        <div className={`modal modal--buynow ${isOpen ? 'modal--active': ''}`}  id="section--03_modal">
          <div className="modal__close icon__circle__close" onClick={() => setIsOpen(false)}></div>
          <div className="modal__content">
            <div className="wrapper">
              <h2 className="section__title __wb">溶菌酵素について</h2>
              <img
                data-mobile="//www.balmuda.com/jp/rain/img/humidity/mobile/section--03_modal.png"
                data-desktop="//www.balmuda.com/jp/rain/img/humidity/desktop/section--03_modal.png"
                data-retina="//www.balmuda.com/jp/rain/img/humidity/desktop/section--03_modal@2x.png"
                className="section--03_img adaptiveimage"
                src="//www.balmuda.com/jp/rain/img/humidity/desktop/section--03_modal@2x.png"
              />
              <p>
                酵素は人の体内や自然界に数多くの種類が存在し、分解や再生など、それぞれが様々な能力を持っています。Rainのプレフィルターにコーティングされているのは、溶菌作用をもつ酵素。接触した細菌を分解する作用があります。自然界の物質なので人に悪影響はなく、無害であることも試験で証明されています。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section section--humidity section--04 scrollLoader lazyload loaded">
        <div className="__image"></div>

        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title __wb">丸洗いできる給水ボウル</h2>
            <p>
              Rainには従来の加湿器のようなタンクがありません。上から注いだ水は内部の給水ボウルにためられます。この給水ボウルは洗剤などで丸洗いすることが可能なので、いつも清潔に使うことができます。加熱式加湿器のようにミネラルやカルキが白く固まってしまうことを防ぎます。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--humidity section--05 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title __wb">清潔な水まわり</h2>
            <p>
              従来の加湿器は水まわりの衛生面でも問題をかかえていました。塩素などで殺菌されている水道の水を使っても、取り込む空気に雑菌やホコリが含まれていると、やがてニオイやヌメリが発生します。Rainは空気の流入時に除菌を行い、ボウルの中の水の劣化も抑制します。
            </p>

            <div className="back_img">
              <img
                data-mobile="//www.balmuda.com/jp/rain/img/humidity/mobile/section--05.png"
                data-desktop="//www.balmuda.com/jp/rain/img/humidity/mobile/section--05.png"
                data-retina="//www.balmuda.com/jp/rain/img/humidity/desktop/section--05@2x.jpg"
                className="section--05_img adaptiveimage"
                src="//www.balmuda.com/jp/rain/img/humidity/desktop/section--05@2x.jpg"
              />

              <div className="desc_1">
                <h3>加湿フィルター</h3>
                <p>
                  ボウル内の水を吸い上げ、空気が通る時に気化した水分だけを渡します。他の物質の空間への放出はありません
                </p>
              </div>

              <div className="desc_2">
                <h3>酵素プレフィルター</h3>
                <p>
                  外部から取り込んだ空気に含まれているホコリや雑菌の流入を防止します。酵素の力で除菌します
                </p>
              </div>

              <div className="desc_3">
                <h3>給水ボウル</h3>
                <p>丸洗いが可能です</p>
              </div>

              <div className="desc_4">
                <h3>銀イオンカートリッジ</h3>
                <p>銀イオンがボウル内部の水のヌメリ発生などを抑制します</p>
              </div>
            </div>

            <div className="comments">
              <p>
                Rainをより清潔にお使いいただくために、フィルターセットは1年に一回の交換を推奨しています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
