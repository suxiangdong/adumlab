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
            <li className={`pagemap__content__item __current`}>
              <Link href="/toaster/taste">特别的美味</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/technology">科学与设计</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/howto">使用方法</Link>
            </li>
            <li className={`pagemap__content__item`}>
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
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=K05A"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>
      <div className="section section--taste section--00 scrollLoader lazyload loaded">
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">味道、香气、及口感</h2>
            <p>
              美味是通过味道和香气，以及口感产生的。
              BALMUDA电烤箱的蒸汽技术及完美的温度控制，可以将各类面包的美味最大限度的展现出来。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--taste section--01 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <img
              src="https://www.balmuda.com/jp/toaster/img/svg/mode-toast.min.svgz?20200915"
              className="__svg"
              alt="トーストモード"
            />
            <h2 className="section__title">令人感动的吐司</h2>
            <p>
              BALMUDA电烤箱烤制的吐司，表面酥脆金黄，内部的水分和香气被充分
              保留，且热气腾腾。鲜明的小麦香气令人印象深刻。请涂抹厚厚的新鲜黄油或应季的果酱、蜂蜜品尝吧。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--taste section--02 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <img
              src="https://www.balmuda.com/jp/toaster/img/svg/mode-cheese.min.svgz?20200915"
              className="__svg"
              alt="トーストモード"
            />
            <h2 className="section__title">至高无上的芝士吐司</h2>
            <p>
              融化且些许焦黄的芝士，令人难以抗拒。BALMUDA电烤箱用蒸汽的力量牢牢锁住芝士的水分与风味，用完美的温度控制烤出绝妙的焦香。不管是简单的芝士吐司还是披萨吐司，都保证带给您绝佳的美味享受。
            </p>
          </div>
        </div>
      </div>
      <div className="section section--taste section--03 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <img
              src="https://www.balmuda.com/jp/toaster/img/svg/mode-croissant.min.svgz?20200915"
              className="__svg"
              alt="トーストモード"
            />
            <h2 className="section__title">幸福的牛角面包</h2>
            <p>
              顶部总是会被烤箱烤成焦黑的牛角面包，使用BALMUDA电烤箱，也可以再现其刚出炉般的味道。喷香的黄油和层层派皮，让您可以品尝到牛角面包制作时每一细节的美味。
            </p>
          </div>
        </div>
      </div>
      <div className="section section--taste section--04 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <img
              src="https://www.balmuda.com/jp/toaster/img/svg/mode-baguette.min.svgz?20200915"
              className="__svg"
              alt="トーストモード"
            />
            <h2 className="section__title">三星法式长棍</h2>
            <p>
              用烤箱加热法式长棍时，水分会被蒸发，由里到外都会变得坚硬。BALMUDA电烤箱利用水分和精准的温度控制，同时实现表皮的酥脆与内里的松软。扑鼻的香气与口感，媲美高级西餐厅的法式长棍。
            </p>
          </div>
        </div>
      </div>
      <div className="section section--taste section--06 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title __wb">
              <span>冷冻面包也可以很好吃</span>
            </h2>
            <p>
              BALMUDA电烤箱的蒸汽技术与完美温度控制，冷冻的面包也可以简单地烤出好滋味。
              只需要将烘烤时间延长1分钟，就可以吃到香喷喷热烘烘的面包。
            </p>
          </div>
        </div>
      </div>
      <div className="section section--taste section--05 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">其他更多可能</h2>
            <p>
              不使用蒸汽与温度控制，像传统烤箱一样使用上下加热管的经典模式，
              有170、200、250℃三档温度可以选择。
              不管是点心烘焙、冷冻食品加工或者烤箱料理，传统烤箱的功能全部可以实现。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
