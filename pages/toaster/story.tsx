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
              <Link href="/toaster">概要</Link>
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
               BALMUDA The Toaster 从灵感原点的那次体验到开发完成，经历了近20年的时间。由一个想法开始开发产品，途中也经历了各种意外的发现。在第一线见证了这一切的我，来为您介绍。
            </p>
            <div className="__sign">
              <img
                src="//www.balmuda.com/_theme/img/svg/gen_terao.min.svgz"
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
          src="https://www.balmuda.com/jp/toaster/img/story/mobile/section--01.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">1991年、西班牙、龙达小镇</h2>
            <p>
              我从高中退学开始游学之旅的那一年，我17岁。一个人在西班牙、意大利和摩洛哥等地中海沿线的城市间流转。非常快乐、寂寞、充满刺激又难忘旅程。旅程开始的那一天，我从日本乘坐飞机，换乘火车与巴士，最后辗转徒步到达了目的地龙达。循着街边传来扑鼻的香气，我到了一间当地的面包房，用生疏的西班牙语要了一个刚出炉的面包，一口咬下去，几乎流泪。紧张、疲劳、以及希望和不安，这些情绪，都随着这一口喷香的面包涌了出来。这个小小面包的美味，我至今也无法忘怀。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--02 scrollLoader lazyload">
        <img
          src="https://www.balmuda.com/jp/toaster/img/story/mobile/section--02.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">大雨中的烧烤大会</h2>
            <p>
              2014年5月，我们在公司附近的小金井公园举行了烧烤大会。结果当天早上下起了不可置信的大雨。想过延期，但考虑到这也是一个回忆，所以还是决定如期举办。全体员工都被淋得像落汤鸡一样的吃着肉，真的成为了难忘的回忆。
              那时候，研究心旺盛的开发团队带来了面包，放在肉旁边烤。那个吐司的美味堪称完美，表面酥脆内部水分没有流失。如果能实现这个效果，就是 BALMUDA The Toaster 的成功了！
              于是第二天我们再次进行了试验，但是再也没有实现同样的效果，不管是更换木炭，还是调整火的距离，或者更换烤架。在一次次的试验失败时，不知道是谁突然说了一句，“那个时候，好像下了好大的雨吧？”
              是的，答案就是，水分。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--03 scrollLoader lazyload">
        <img
          src="https://www.balmuda.com/jp/toaster/img/story/mobile/section--03.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title"></h2>
            <p>
              这一次，协助 BALMUDA The Toaster 研究开发的，是吉祥寺一间每天大排长队的面包屋。开发团队在开店前拜访，尝试了刚出炉面包的惊艳美味，并在厨房进行了学习。在那里我们见到了与以往的煤气窑炉不同的，带有蒸汽，并可以细致控制火力的电力窑炉。我们被店家烤出真正美味面包的努力所震惊，同时，也对我们自己的创意有了自信。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--04 scrollLoader lazyload">
        <img
          src="https://www.balmuda.com/jp/toaster/img/story/mobile/section--04.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">2000稿的设计</h2>
            <p>
              技术团队开始制作原型机的时候，设计团队也开始为了商品化研究外观设计。最开始进行的，就是自由的展开创意。
              这一次我们研究的课题是，“非常美味的东西，应该从怎么样的地方孕育出来呢？”恐怕不仅仅是需要新颖，还需要有一些隐约的怀旧感，再加上一些BALMUDA独有的特色。
              从诸多创意中选择了几个符合主题的，再围绕它们去延展创意。终于选定了基础方案，结合技术团队的步调，细致到每一个螺丝的大小和位置都要一一研究确定。
              这一次，设计团队为了 BALMUDA The Toaster 制作的草稿与模型，共计大约2000稿。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--05 scrollLoader lazyload">
        <img
          src="https://www.balmuda.com/jp/toaster/img/story/mobile/section--05.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">无止境的试验</h2>
            <p>
              结合了设计基础方案的试验机型完成后，开始进入软件的开发的阶段。内仓的尺寸，反射板的角度，加热管的位置等等细微的变化，都会影响烘烤的结果。再加上吐司、芝士吐司、法式面包、牛角包等各个模式，为了将每一个模式调整到最佳的烘烤效果，一共进行了超过1000个小时的试验。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
