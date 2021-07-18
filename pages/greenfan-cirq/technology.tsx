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
          href="/greenfan-cirq/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/greenfan-cirq/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <a href="/greenfan-cirq/" className="pagemap__content--logo">
            <img
              className="w-full"
              src="/_theme/img/svg/balmuda-greenfan-cirq.min.svgz"
              alt="GreenFan Cirq"
            />
          </a>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/greenfan-cirq/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--features">
              <Link href="/greenfan-cirq/features">改变室温</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology __current">
              <Link href="/greenfan-cirq/technology">远达15米的送风距离</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design">
              <Link href="/greenfan-cirq/design">设计</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--specs">
              <Link href="/greenfan-cirq/specs">规格</Link>
            </li>
          </ul>

          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=EGF-3300-WK"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="section section--technology section--00">
        <div className="__image">
          <img
            data-mobile="https://www.balmuda.com/jp/greenfan-cirq/img/technology/mobile/section--00.jpg"
            data-desktop="https://www.balmuda.com/jp/greenfan-cirq/img/technology/desktop/section--00.jpg"
            data-retina="https://www.balmuda.com/jp/greenfan-cirq/img/technology/desktop/section--00@2x.jpg"
            className="__image adaptiveimage"
            src="https://www.balmuda.com/jp/greenfan-cirq/img/technology/desktop/section--00@2x.jpg"
          />
        </div>
        <div className="__content">
          <h2 className="page__title __wb">远达15米的送风距离届く送風能力</h2>
          <p>
            GreenFan
            Cirqは独自の二重構造の羽根と直進性を高めるファンガードにより远达15米的送风距离届く力強い風を送り出します。6畳の部屋であればわずか1分で不快な温度差を解消し、室温を均一にします。
          </p>
        </div>
      </div>

      <div className="section_wrap">
        <div className="section section--technology section--01 scrollLoader lazyload loaded">
          <div className="__image __is_mobile"></div>
          <div className="viewport scrollLoader fadeInUp loaded">
            <div className="__content">
              <h2 className="section__title">省エネルギー</h2>
              <img
                data-mobile="https://www.balmuda.com/jp/greenfan-cirq/img/technology/mobile/section--01.jpg"
                data-desktop="https://www.balmuda.com/jp/greenfan-cirq/img/technology/desktop/section--01.jpg"
                data-retina="https://www.balmuda.com/jp/greenfan-cirq/img/technology/desktop/section--01@2x.jpg"
                className="__image adaptiveimage"
                src="https://www.balmuda.com/jp/greenfan-cirq/img/technology/desktop/section--01@2x.jpg"
              />
              <p>
                GreenFan
                Cirqは、DCブラシレスモーターを採用。優れた省エネ性能で最弱運転時はわずか3Wの耗电量。１日8时间運転した時の電気代は0.6円と、とても経済的です。
              </p>
              <p className="note">* 電気料金は1kWhあたり27円で計算</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section_wrap">
        <div className="section section--technology section--02 scrollLoader lazyload loaded">
          <div className="__image __is_mobile"></div>
          <div className="viewport scrollLoader fadeInUp loaded">
            <div className="__content">
              <h2 className="section__title __wb">
                <span>エアコンの電気代</span>
                <span>20％削減</span>
              </h2>
              <img
                data-mobile="https://www.balmuda.com/jp/greenfan-cirq/img/technology/mobile/section--02.png"
                data-desktop="https://www.balmuda.com/jp/greenfan-cirq/img/technology/desktop/section--02.png"
                data-retina="https://www.balmuda.com/jp/greenfan-cirq/img/technology/desktop/section--02@2x.png"
                className="__image adaptiveimage"
                src="https://www.balmuda.com/jp/greenfan-cirq/img/technology/desktop/section--02@2x.png"
              />
              <p>
                GreenFan
                Cirqの優れた空気循環能力で、エアコンの効率を高めます。設定温度を夏は2〜3°C高く、冬は2〜3°C低くでき、電気代を最大20%下げることができます。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--technology section--03 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title __wb">
              <span>グリーンファン</span>
              <span>科技</span>
            </h2>
            <img
              data-mobile="https://www.balmuda.com/jp/greenfan-cirq/img/technology/mobile/section--03.png"
              data-desktop="https://www.balmuda.com/jp/greenfan-cirq/img/technology/desktop/section--03.png"
              data-retina="https://www.balmuda.com/jp/greenfan-cirq/img/technology/desktop/section--03@2x.png"
              className="__image adaptiveimage"
              src="https://www.balmuda.com/jp/greenfan-cirq/img/technology/desktop/section--03@2x.png"
            />
            <p>
              バルミューダ独自のグリーンファン科技は、1枚のファンから
              2種類の速度の風を送り出すことによって 風の方向性と運動を変える技術。GreenFan
              Cirqの場合、この技術を多くの風を送り出す事、そして、その風を遠くまで届ける事のために活用しています。少ない回転数で大きく動く風。グリーンファンだけの、特別な風です。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
