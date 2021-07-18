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
              <Link href="/toaster/taste">特别的美味</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/technology">科学与设计</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/howto">使用方法</Link>
            </li>
            <li className={`pagemap__content__item __current`}>
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
              href="//store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=K05A"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="section section--story section--00">
        <div className="__image"></div>
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">故事</h2>
            <p>
              BALMUDA The Toaster
              从成为创意原点的体验算起，完成这一过程大约长达20年。从某个想法开始制作产品，途中有了意外的发现。我亲眼目睹了这一过程，现在直接介绍一下。
            </p>
            <div className="__sign">
              <img
                src="//www.balmuda.com/_theme/img/svg/gen_terao.min.svgz"
                className="__gen_terao"
                width="231"
                height="37"
              />
              <span className="__note">巴慕达代表　寺尾 玄</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--story section--01 scrollLoader lazyload loaded">
        <img
          src="https://www.balmuda.com/jp/toaster/img/story/mobile/section--01.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">1991年，西班牙隆达镇</h2>
            <p>
              17岁那年，我高中辍学，开始了流浪之旅。我独自在西班牙、意大利和摩洛哥等地中海沿岸旅行了大约一年。这是一次非常愉快、孤独、刺激和难忘的旅行。那第一天。从日本转机、火车和巴士后，我终于步行到达了目的地龙达。因为紧张，我没睡多久，又累又饿。街角有一股香喷喷的香味，找的时候就找到了当地的一家面包店。我让他们用西班牙语把刚出炉的面包分开，我不会说，当我咬了一口时，眼泪就出来了。紧张、疲劳、希望和焦虑。当我吃到香喷喷的面包时，这些情绪就像切了一个堰一样从我的身体里消失了。那个时候的小面包。它的香气和味道仍然令人难忘。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--02 scrollLoader lazyload loaded">
        <img
          src="https://www.balmuda.com/jp/toaster/img/story/mobile/section--02.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">倾盆大雨烧烤</h2>
            <p>
              2014 年 5 月。 我们在公司附近的小金井公园举办了烧烤比赛。
              那天早上的倾盆大雨是不可能的。 我想取消它，但我决定这样做，因为它会成为回忆。
              我们都泡着吃肉，真的成了回忆。
              当时，具有研究意识的开发团队带来了面包，并开始将其与肉一起在木炭上烧烤。
              吐司的味道几乎是完美的。 表面很脆，里面还有很多水。
              如果你能重现这种味道，你就可以做出一个巴慕达烤面包机！
              <br />
              <br />
              我从第二天开始进行繁殖实验。 但是，它根本无法重现。
              是木炭不同，火的距离不同，还是烤架不同？ 有人一边说一边继续试错。
              “当时雨下得很大，对吧？”是的，答案是水。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--03 scrollLoader lazyload loaded">
        <img
          src="https://www.balmuda.com/jp/toaster/img/story/mobile/section--03.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">丹斯迪克斯</h2>
            <p>
              这次，在BALMUDA The
              Toaster的研究开发中得到协助的，是吉祥寺的面包店“dundezon”，因为连日的排队而出名。开发团队去了开店前的店里，首先吃了刚烤好的面包，对其美味感到惊讶，接着参观了厨房。那里的不是煤气火，而是可以进行细微控制的带有蒸汽功能的电窑。使用电和水的力量，做出真正美味的面包的样子，对我们来说是非常惊讶的。同时，也是对自己的创意充满自信的瞬间。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--04 scrollLoader lazyload loaded">
        <img
          src="https://www.balmuda.com/jp/toaster/img/story/mobile/section--04.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">2000种类型的设计</h2>
            <p>
              当技术团队开始创建一个原理原型时，设计团队还开始考虑生产生产的建立。首先是与自由想法部署想法。
              <br />
              <br />
              我们这次工作是什么，“非常美味的事情应该从这个地方出来？”的命题是主张。这可能只是只有新的，它应该是某个地方，你也需要一个对Balmuda独有的香料。从许多想法中拿起一些主题的想法，并探索那些外围想法。基于基础提案的基础，我们将在组合技术团队的同时考虑单螺丝的尺寸和位置。
              <br />
              <br />
              这一次，设计团队为 BALMUDA The Toaster 提出了大约 2000 个创意，包括草图和渲染。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--05 scrollLoader lazyload loaded">
        <img
          src="https://www.balmuda.com/jp/toaster/img/story/mobile/section--05.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">无休止的实验</h2>
            <p>
              当反映设计基础的原型完成后，软件创建就开始了。
              这一次，如果冰箱的大小、反射器的角度、加热管的位置等有任何变化，烘烤就会发生变化。
              此外，还有吐司、奶酪吐司、法式面包、羊角面包的模式，为了优化这些模式，达到最佳烘焙效果，我们进行了总计1000小时的烘焙实验。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
