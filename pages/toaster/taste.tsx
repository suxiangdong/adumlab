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
              購入
            </a>
          </div>
        </div>
      </div>
      <div className="section section--taste section--00 scrollLoader lazyload loaded">
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">味道、香味和口感</h2>
            <p>
              美味是由味道、香味和口感产生的。BALMUDA The
              Toaster通过蒸汽科技和细致的温度控制，引出各种面包的美味。在温度可选的经典模式下，面包以外的食材也能迅速美味完成。
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
              用BALMUDA The
              Toaster烤出来的吐司，表面是脆脆的金黄色，里面水分和香味充分地保留着，热腾腾的成品。浓郁、香喷喷的小麦味让人印象深刻。新鲜的黄油、当季的果酱和蜂蜜，请充分享用。
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
            <h2 className="section__title">终极芝士吐司</h2>
            <p>
              融化后稍微烧焦的芝士的美妙之处，应该没有人会有异议吧。BALMUDA The
              Toaster用蒸汽的力量充分保留芝士的水分和风味，通过细致的温度控制做出绝妙的焦味。从简单的芝士吐司到披萨吐司，保证能做出令人感动的成品。
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
            <h2 className="section__title">幸福的羊角面包</h2>
            <p>
              用烤面包机加热的话容易烤黑的羊角面包。在BALMUDA The
              Toaster中，没有烤焦，表面是脆脆的，再现刚从窑中出炉的羊角面包。散发香气的黄油和层层叠叠的派皮。在家里也能享受到羊角面包原本的美味。
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
            <h2 className="section__title">三颗星的面包</h2>
            <p>
              烤面包的时候，水分会飞掉，表面和内部都变硬了。BALMUDA The
              Toaster，蒸汽科技和细致的温度控制，同时实现脆脆的表面的嚼劲和里面的柔软。其香味和口感简直就是餐厅里的面包。
            </p>
          </div>
        </div>
      </div>
      <div className="section section--taste section--06 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title __wb">
              <span>冷冻面包</span>
              <span>好吃</span>
            </h2>
            <p>
              BALMUDA The Toaster
              通过蒸汽科技和细致的温度控制，冷冻的面包也能简单、美味地烤出来。在平时的烤法上追加1分钟。仅仅如此就能香喷喷、热腾腾地完成。
            </p>
          </div>
        </div>
      </div>
      <div className="section section--taste section--05 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">不仅是面包，还有烹饪</h2>
            <p>
              不使用蒸汽，只简单打开上下的加热器的古典模式。有170℃、200℃、230℃三种温度可供选择。年糕的烤制和焗饭等自不必说，在冰箱内保持一定的温度持续烤制，也可以用来做曲奇等简单的点心。BALMUDA
              The Toaster1台料理的范围眼看着扩大。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
