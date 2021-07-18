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
            <li className={`pagemap__content__item __current`}>
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
              href="//store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=K05A"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="section section--howto section--00">
        <img
          data-mobile="https://www.balmuda.com/jp/toaster/img/howto/mobile/section--00.jpg?20200915"
          data-desktop="https://www.balmuda.com/jp/toaster/img/howto/desktop/section--00.jpg?20200915"
          data-retina="https://www.balmuda.com/jp/toaster/img/howto/desktop/section--00@2x.jpg?20200915"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/toaster/img/howto/desktop/section--00@2x.jpg?20200915"
        />
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">使用方法</h2>
            <p>
              BALMUDA The
              Toaster的话，可以根据面包的种类来烘烤，能激发出特别的美味。另外，还可以像一般的烤面包机一样，制作年糕、焗饭等。
              <br className="pc" />
              下面介绍一下各模式的使用方法和保养方法。
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
                  和一般的烤面包机一样，打开门，放入面包。如果是一张的话请排列在中间，如果是多张的话请均匀排列。
                </p>
                <div className="step__img">
                  <img
                    data-mobile="https://www.balmuda.com/jp/toaster/img/howto/mobile/img_step_01.png"
                    data-desktop="https://www.balmuda.com/jp/toaster/img/howto/desktop/img_step_01.png"
                    data-retina="https://www.balmuda.com/jp/toaster/img/howto/desktop/img_step_01@2x.png"
                    className="adaptiveimage"
                    src="https://www.balmuda.com/jp/toaster/img/howto/desktop/img_step_01@2x.png"
                  />
                </div>
                <div className="qa">
                  <dl>
                    <dt>
                      <span className="asked">烤好的秘诀是什么?</span>
                    </dt>
                    <dd>
                      <span>
                        面包有“头”和“底”。如果是山型面包，山就是头，而角型面包装在袋子里的状态下变成顶部的就是头。把这个“头”放在前面烤的话，就可以烤得不均匀。
                      </span>
                      <span>
                        法式面包如果是可以放进冰箱里的大小，就应该整块加热，烤好后再切片，这样里面的面包才会松软。
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      <span className="asked">能进到多少厘米高?</span>
                    </dt>
                    <dd>
                      <span>
                        烤虾和加热器的距离大概是7cm。离加热器越近越容易烤焦，所以面包的高度在5.5cm以内可以放心烤。顶部有砂糖和油分的面包容易烤焦，需要注意。
                      </span>
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="step__img">
                <img
                  data-mobile="https://www.balmuda.com/jp/toaster/img/howto/mobile/img_step_01.png"
                  data-desktop="https://www.balmuda.com/jp/toaster/img/howto/desktop/img_step_01.png"
                  data-retina="https://www.balmuda.com/jp/toaster/img/howto/desktop/img_step_01@2x.png"
                  className="adaptiveimage"
                  src="https://www.balmuda.com/jp/toaster/img/howto/desktop/img_step_01@2x.png"
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
                  <b>装水</b>
                </h2>
                <p className="section__desc">
                  请每次用专用的5cc杯子往烤面包机上部的供水口里倒一杯水。经典模式不加水使用。
                </p>
                <div className="step__img">
                  <img
                    data-mobile="https://www.balmuda.com/jp/toaster/img/howto/mobile/img_step_02.jpg"
                    className="adaptiveimage"
                  />
                </div>
                <div className="qa">
                  <dl>
                    <dt>
                      <span className="asked">根据张数和种类的不同水的量也会变化吗?</span>
                    </dt>
                    <dd>
                      <span>
                        即使面包的厚度、大小、张数不同，5cc的分量也不会改变。即使不神经质地计算，也请以5cc杯1杯的心情愉快地放入。
                      </span>
                    </dd>
                  </dl>
                </div>
                <div className="tips_warning">
                  <h3>请不要在经典模式下加水。</h3>
                  <p>因为在经典模式下不出蒸汽，锅炉积水成为故障的原因。</p>
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
                <b>按下电源开启/关闭按钮，选择模式</b>
              </h2>
              <p className="section__desc">
                因为模式不同，烤出来的东西也不同，所以根据“希望变成这样”的烤出来的东西来使用不同的模式，吃起来会更美味。
              </p>
            </div>
            <div className="mode">
              <h3 className="mode__h">吐司</h3>
              <p className="mode__desc">吐司、芝士吐司这两种模式的特点是在表面烙上焦黄的颜色。</p>
              <div className="mode__conts">
                <div className="mode__pnl mode__pnl--toast">
                  <h4 className="mode__pnl__h">
                    吐司
                    <br />
                    模式
                  </h4>
                  <p className="mode__pnl__comment">＼ 烤得焦黄 ／</p>
                  <p className="mode__pnl__desc">
                    烤至焦黄。除了烤面包以外，还可以用来制作横切的百吉果或英式麦芬。
                  </p>
                  <img
                    data-mobile="https://www.balmuda.com/jp/toaster/img/svg/mode-toast.mobile.icons.svgz?20200915"
                    data-desktop="https://www.balmuda.com/jp/toaster/img/svg/mode-toast.icons.svgz?20200915"
                    data-retina="https://www.balmuda.com/jp/toaster/img/svg/mode-toast.icons.svgz?20200915"
                    className="adaptiveimage"
                    src="https://www.balmuda.com/jp/toaster/img/svg/mode-toast.icons.svgz?20200915"
                  />
                </div>
                <div className="mode__pnl mode__pnl--cheese">
                  <h4 className="mode__pnl__h">
                    芝士吐司
                    <br />
                    模式
                  </h4>
                  <p className="mode__pnl__comment">＼ 加强上火 ／</p>
                  <p className="mode__pnl__desc">
                    因为上火很大，所以除了芝士吐司以外，还可以配上烹饪前的食材。也可以是披萨吐司、蔬菜和水果放在上面烤熟的菜单上。
                  </p>
                  <img
                    data-mobile="https://www.balmuda.com/jp/toaster/img/svg/mode-cheese.mobile.icons.svgz?20200915"
                    data-desktop="https://www.balmuda.com/jp/toaster/img/svg/mode-cheese.icons.svgz?20200915"
                    data-retina="https://www.balmuda.com/jp/toaster/img/svg/mode-cheese.icons.svgz?20200915"
                    className="adaptiveimage"
                    src="https://www.balmuda.com/jp/toaster/img/svg/mode-cheese.icons.svgz?20200915"
                  />
                </div>
              </div>
            </div>
            <div className="mode">
              <h3 className="mode__h">利伯益(加热)</h3>
              <p className="mode__desc">连里面都热乎乎的是利伯益。根据表面的完成有2种模式。</p>
              <div className="mode__conts">
                <div className="mode__pnl mode__pnl--baguette">
                  <h4 className="mode__pnl__h">
                    法式面包
                    <br />
                    模式
                  </h4>
                  <p className="mode__pnl__comment">＼ 不上焦 ／</p>
                  <p className="mode__pnl__desc">
                    表面不上色，到里面充分加热。
                    加热法式面包、卷面包、胡椒面包和松饼，就像刚烤好的一样松软。
                  </p>
                  <img
                    data-mobile="https://www.balmuda.com/jp/toaster/img/svg/mode-baguette.mobile.icons.svgz?20200915"
                    data-desktop="https://www.balmuda.com/jp/toaster/img/svg/mode-baguette.icons.svgz?20200915"
                    data-retina="https://www.balmuda.com/jp/toaster/img/svg/mode-baguette.icons.svgz?20200915"
                    className="adaptiveimage"
                    src="https://www.balmuda.com/jp/toaster/img/svg/mode-baguette.icons.svgz?20200915"
                  />
                </div>
                <div className="mode__pnl mode__pnl--croissant">
                  <h4 className="mode__pnl__h">
                    牛角面包
                    <br />
                    模式
                  </h4>
                  <p className="mode__pnl__comment">＼ 表面脆脆的 ／</p>
                  <p className="mode__pnl__desc">
                    充分加热到里面，使表面松脆。很适合丹麦系或想要脆脆的烤饼，或是甜瓜面包等。
                  </p>
                  <img
                    data-mobile="https://www.balmuda.com/jp/toaster/img/svg/mode-croissant.mobile.icons.svgz?20200915"
                    data-desktop="https://www.balmuda.com/jp/toaster/img/svg/mode-croissant.icons.svgz?20200915"
                    data-retina="https://www.balmuda.com/jp/toaster/img/svg/mode-croissant.icons.svgz?20200915"
                    className="adaptiveimage"
                    src="https://www.balmuda.com/jp/toaster/img/svg/mode-croissant.icons.svgz?20200915"
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
              <h3 className="mode__h">烤面包机</h3>
              <p className="mode__desc">
                如果使用不使用蒸汽的“经典模式”，
                <br />
                面包以外的料理也很活跃。
              </p>
              <div className="mode__classic">
                <p className="lead">
                  经典模式可以设定170度、200度、230度的上限温度，可以享受焗饭、曲奇、年糕等各种各样的烤面包机料理。
                </p>
                <img
                  data-mobile="https://www.balmuda.com/jp/toaster/img/svg/mode-classic.mobile.icons.svgz?20200915"
                  data-desktop="https://www.balmuda.com/jp/toaster/img/svg/mode-classic.icons.svgz?20200915"
                  data-retina="https://www.balmuda.com/jp/toaster/img/svg/mode-classic.icons.svgz?20200915"
                  className="adaptiveimage"
                  src="https://www.balmuda.com/jp/toaster/img/svg/mode-classic.icons.svgz?20200915"
                />
                <div className="mode__classic__horo">
                  <div className="horo__img">
                    <img
                      data-mobile="https://www.balmuda.com/jp/toaster/img/howto/mobile/img_mode_classic_horo.png?20200915"
                      data-desktop="https://www.balmuda.com/jp/toaster/img/howto/desktop/img_mode_classic_horo.png?20200915"
                      data-retina="https://www.balmuda.com/jp/toaster/img/howto/desktop/img_mode_classic_horo@2x.png?20200915"
                      className="adaptiveimage"
                      src="https://www.balmuda.com/jp/toaster/img/howto/desktop/img_mode_classic_horo@2x.png?20200915"
                    />
                  </div>
                  <div className="horo__text">
                    <h3>珐琅能让料理的范围更广。</h3>
                    <p>
                      如果使用与烤箱对应的容器的话，在制作点心和使用油的料理上大显身手。别卖饰品野田珐琅所产的白球棒(取21枚)，尺寸正好可以放在BALMUDA
                      The Toaster的冰箱里。
                    </p>
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
                  STEP<span>4</span>设定时间
                </h2>
                <p className="section__desc">
                  顺时针转动右侧的刻度盘，LED就会亮起来。转动到想设定的时间停止的话，动作开始。
                </p>
                <div className="step__img">
                  <img src="https://www.balmuda.com/jp/toaster/img/howto/mobile/img_step_04_new.gif?20200915" />
                </div>
                <div className="qa">
                  <dl>
                    <dt>
                      <span className="asked">根据张数和厚度来改变时间比较好吗?</span>
                    </dt>
                    <dd>
                      <span>
                        不需要改变。因为详细地测量了库内的温度，知道烤2片厚片温度不容易上升，烤1片薄片温度容易上升，一边考虑一边调整。每次都有相同的计时器设定，可以做到“平时的烧烤状态”。
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      <span className="asked">冷冻面包怎么烤?</span>
                    </dt>
                    <dd>
                      <span>
                        把冷冻的面包放进烤面包机，根据面包的种类设定好模式后，请比常温面包烤长1 ~
                        2分钟。比起冷藏面包，冷冻面包更好吃。建议把当天不吃的部分冷冻起来。
                      </span>
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="step__img">
                <img src="https://www.balmuda.com/jp/toaster/img/howto/desktop/img_step_04_new.gif?20200915" />
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
                  <b>用完之后</b>
                </h2>
                <p className="section__desc">
                  面包屑托盘每次使用时，如果其他地方有明显的污渍，请及时清理。
                  <br />
                  烤虾、锅炉罩、给水管道可拆卸。
                </p>
              </div>
              <div className="step__img">
                <img
                  data-mobile="https://www.balmuda.com/jp/toaster/img/howto/mobile/img_step_05.jpg"
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
