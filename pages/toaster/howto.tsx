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
              BALMUDA The Toaster 可以结合面包的种类进行烘烤，展现最佳的美味。也可以像一般的烤箱一样制作各类烤箱料理。
              <br className="pc" />
              下面介绍一下各模式的使用方法和保养方法。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--howto section--01 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <div className="step">
              <div className="step__text">
                <h2 className="section__title">
                  STEP<span>1</span>放入面包
                </h2>
                <p className="section__desc">
                  和一般的小型烤箱相同，打开仓门，放入面包。单片放中央，复数请等距摆放。
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
                      <span className="asked">美味的烘烤窍门</span>
                    </dt>
                    <dd>
                      <span>
                        切片吐司有“头”与“尾”之分，拱形切片凸起的一方是头，方形切片装袋时朝上放的一边为头。烘烤时将头部向外摆放，可以烤的更加均匀。
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      <span className="asked">限高是多少呢？</span>
                    </dt>
                    <dd>
                      <span>
                        烤架与加热管之间的高度约为7cm。越接近上方加热管越容易烤糊，食材的高度在5.5cm以内，都可以安心烘烤。砂糖和油脂成分含量比较高的面包比较容易焦糊，敬请注意。{' '}
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

      <div className="section section--howto section--02 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <div className="step">
              <div className="step__text">
                <h2 className="section__title">
                  STEP<span>2</span>
                  <b>装水</b>
                </h2>
                <p className="section__desc">
                  请每次用专用的5cc杯子往烤箱料理上部的供水口里倒一杯水。经典模式无需加水。
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
                  <p>经典模式不产生蒸汽，积水留在水槽中可能成为机器故障的原因。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--howto section--03 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <div className="section--03__head">
              <h2 className="section__title">
                STEP<span>3</span>
                <br />
                <b>按下电源开/关按钮 选择模式</b>
              </h2>
              <p className="section__desc">
              依模式的选择，完成度也会不同。可以依照个人期望调整模式，让成品更加美味。
              </p>
            </div>
            <div className="mode">
              <h3 className="mode__h">吐司</h3>
              <p className="mode__desc">吐司、芝士吐司两种模式，特点是可以将表面烤出金黄色泽。</p>
              <div className="mode__conts">
                <div className="mode__pnl mode__pnl--toast">
                  <h4 className="mode__pnl__h">
                    吐司
                    <br />
                    模式
                  </h4>
                  <p className="mode__pnl__comment">＼ 烤出金黄色泽 ／</p>
                  <p className="mode__pnl__desc">
                    以将表面烤成金黄色。不仅仅是吐司，也可以用来烘烤横向切成两半的贝果或英式麦芬。
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
              <h3 className="mode__h">二次烘焙</h3>
              <p className="mode__desc">
                将内部加热到热气腾腾的二次烘焙。针对表面的不同需求设置了两种模式。
              </p>
              <div className="mode__conts">
                <div className="mode__pnl mode__pnl--baguette">
                  <h4 className="mode__pnl__h">
                    法式面包
                    <br />
                    模式
                  </h4>
                  <p className="mode__pnl__comment">＼ 不会焦糊 ／</p>
                  <p className="mode__pnl__desc">
                    将内部充分加温，表面却不焦糊。最适合烘烤法式面包，黄油餐包和麦芬等面包。
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
                  <p className="mode__pnl__comment">＼ 表面酥脆/ ／</p>
                  <p className="mode__pnl__desc">
                    将内部充分加温，表面烤至酥脆。适合将酥皮类面包或司康等烤出酥脆的表皮，或者将菠萝包二次加热。
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

      <div className="section section--howto section--03b scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <div className="mode">
              <h3 className="mode__h">烤箱料理</h3>
              <p className="mode__desc">
                如果使用不使用蒸汽的“经典模式”，
                <br />
                面包以外的料理也很活跃。
              </p>
              <div className="mode__classic">
                <p className="lead">
                  经典模式可以设定170度、200度、250度的上限温度，可以享受焗饭、曲奇、年糕等各种各样的烤箱料理料理。
                </p>
                <img
                  data-mobile="https://www.balmuda.com/jp/toaster/img/svg/mode-classic.mobile.icons.svgz?20200915"
                  data-desktop="https://www.balmuda.com/jp/toaster/img/svg/mode-classic.icons.svgz?20200915"
                  data-retina="https://www.balmuda.com/jp/toaster/img/svg/mode-classic.icons.svgz?20200915"
                  className="adaptiveimage"
                  src="https://www.balmuda.com/jp/toaster/img/svg/mode-classic.icons.svgz?20200915"
                />
                {/* <div className="mode__classic__horo">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--howto section--04 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <div className="step">
              <div className="step__text">
                <h2 className="section__title">
                  STEP<span>4</span>设定时间
                </h2>
                <p className="section__desc">
                  顺时针转动右边的旋钮，LED会亮灯。回转到想要设定的时间后停下，烤箱就会开始运作。
                </p>
                <div className="step__img">
                  <img src="https://www.balmuda.com/jp/toaster/img/howto/mobile/img_step_04_new.gif?20200915" />
                </div>
                <div className="qa">
                  <dl>
                    <dt>
                      <span className="asked">需要根据数量和厚度调整时间吗？</span>
                    </dt>
                    <dd>
                      <span>
                        没有必要，仓内的温度是经过精确测量的，连同厚片吐司两片烘烤时比较不容易受热，薄片吐司单片烘烤时比较容易受热的特征也都被考量在内。
                        所以只要知道自己喜欢的烘烤时间，使用同样的时间设定，就可以得到平时的烘烤效果。
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      <span className="asked">如何烘烤冷冻面包</span>
                    </dt>
                    <dd>
                      <span>
                        冷冻的状态下放进烤箱，根据面包的种类选择模式，在常温面包的基础场增加1~2分的烘烤时间。
                        比起冷藏的面包，冷冻的面包会更加美味。推荐将当日无法全部食用的面包冷冻保存。
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

      <div className="section section--howto section--05 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <div className="step">
              <div className="step__text">
                <h2 className="section__title">
                  STEP<span>5</span>
                  <b>使用后</b>
                </h2>
                <p className="section__desc">
                  产品维护请根据使用频度，每日使用的情况下每周一次，不经常使用的情况下，在有明显污迹和食物碎屑时，尽快清理擦拭托盘与内仓。
                  <br />
                  烤架、水槽盖板、送水管都可以拆卸。
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
