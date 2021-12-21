import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'

export default function About() {
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/about/style/mobile.css?20210707092635"
        />
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/about/style/desktop.css?20210707092635"
        />
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <a href="/about" className="pagemap__content--logo">
            <img src="/_theme/img/svg/about.min.svgz" alt="About" />
          </a>
          <ul className="pagemap__main" id="greedynav-links">
            <li className={`pagemap__content__item `}>
              <Link href="/about">关于BALMUDA</Link>
            </li>
            <li className={`pagemap__content__item __current`}>
              <Link href="/about/story">历史故事</Link>
            </li>
            <li className={`pagemap__content__item `}>
              <Link href="/about/awards">获奖经历</Link>
            </li>
          </ul>
          <div className="pagemap__dropdown hidden" id="greedynav--btn">
            <span className="pagemap__dropdown__btn"></span>
            <ul className="pagemap__dropdown__content"></ul>
          </div>
          <div className="pagemap__btns"></div>
        </div>
      </div>

      <div className="section section--story-index section--01 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">产品开发的故事</h2>
            <p>
              虽然BALMUDA的产品总是从异想天开的想法开始，但是为了实现这个想法，总是一个劲儿地反复尝试和实验。我来介绍一下到产品完成之前的故事。
            </p>
          </div>

          <div className="posts">
            <div className="post">
              <a href="/about/story" className="__inner">
                <div className="__image __0 scrollLoader lazyload"></div>
                <div className="__caption">
                  <h5 className="__title">
                    BALMUDA 历史 <span className="article_num">1</span>
                  </h5>
                  <p className="__text">
                    从制造工厂说起：BALMUDA 创始者寺尾玄的进入产品制造领域，可追朔于2001年前...
                  </p>
                </div>
              </a>
            </div>
            <div className="post">
              <a href="/about/story" className="__inner">
                <div className="__image __1 scrollLoader lazyload"></div>
                <div className="__caption">
                  <h5 className="__title">
                    BALMUDA 历史 <span className="article_num">2</span>
                  </h5>
                  <p className="__text">
                    开发完美执着的桌灯：2003年发表电脑冷却台「X-Base」，并在Mac官网新闻里报导，此时不到一小时接到了第一笔订单...
                  </p>
                </div>
              </a>
            </div>
            <div className="post">
              <a href="/about/story" className="__inner">
                <div className="__image __2 scrollLoader lazyload"></div>
                <div className="__caption">
                  <h5 className="__title">
                    BALMUDA 历史 <span className="article_num">3</span>
                  </h5>
                  <p className="__text">
                    「GreenFan」开发的背景：BALMUDA自创立以来，五年来不断地以坚持开发的理念为目标，之后深刻地领悟...
                  </p>
                </div>
              </a>
            </div>

            <div className="post">
              <a href="/about/story" className="__inner">
                <div className="__image  __3 scrollLoader lazyload"></div>
                <div className="__caption">
                  <h5 className="__title">
                    BALMUDA 历史 <span className="article_num">4</span>
                  </h5>
                  <p className="__text">
                    支援创作的团队：熟思「必须的道具」的想法得到的答案为「GreenFan」，日后BALMUDA就持续专精研究「舒适的凉感」...
                  </p>
                </div>
              </a>
            </div>
            <div className="post">
              <a href="/about/story" className="__inner">
                <div className="__image  __4 scrollLoader lazyload"></div>
                <div className="__caption">
                  <h5 className="__title">
                    BALMUDA 历史 <span className="article_num">5</span>
                  </h5>
                  <p className="__text">
                    「GreenFan Japan」的设计：「边思考边持续描绘未来」。 BALMUDA的设计团队与...
                  </p>
                </div>
              </a>
            </div>
            <div className="post">
              <a href="/about/story" className="__inner">
                <div className="__image  __5 scrollLoader lazyload"></div>
                <div className="__caption">
                  <h5 className="__title">
                    BALMUDA 历史 <span className="article_num">6</span>
                  </h5>
                  <p className="__text">
                    比物品使用体验更重要「Hello Kitchen!」：「GreenFan
                    Japan」发表后，BALMUDA以寺尾玄为首，设计、技师团队有了更进一步的想法...
                  </p>
                </div>
              </a>
            </div>
            {/* <div className="post">
              <a href="/about/story" className="__inner">
                <div className="__image  __6 scrollLoader lazyload"></div>
                <div className="__caption">
                  <h5 className="__title">
                    和田智 × 寺尾玄 对谈 <span className="article_num">1</span>
                  </h5>
                  <p className="__text">和田 智 × 百慕达：汽车设计师 和田 智之前参与百慕达</p>
                </div>
              </a>
            </div>
            <div className="post">
              <a href="/about/story" className="__inner">
                <div className="__image  __7 scrollLoader lazyload"></div>
                <div className="__caption">
                  <h5 className="__title">
                    和田智 × 寺尾玄 对谈 <span className="article_num">2</span>
                  </h5>
                  <p className="__text">不以表象思维：重要的是，重量、质感、原始的要素</p>
                </div>
              </a>
            </div>
            <div className="post">
              <a href="/about/story" className="__inner">
                <div className="__image  __8 scrollLoader lazyload"></div>
                <div className="__caption">
                  <h5 className="__title">
                    和田智 × 寺尾玄 对谈 <span className="article_num">3</span>
                  </h5>
                  <p className="__text">GreenFan Japan想传达：为了传达想法的交流</p>
                </div>
              </a>
            </div>
            <div className="post">
              <a href="/about/story" className="__inner">
                <div className="__image  __11 scrollLoader lazyload"></div>
                <div className="__caption">
                  <h5 className="__title">
                    和田智 × 寺尾玄 对谈 <span className="article_num">4</span>
                  </h5>
                  <p className="__text">日本制造的产品：加入Made in Japan思考</p>
                </div>
              </a>
            </div>
            <div className="post">
              <a href="/about/story" className="__inner">
                <div className="__image  __9 scrollLoader lazyload"></div>
                <div className="__caption">
                  <h5 className="__title">
                  方序中解锁 AirEngine <span className="article_num">1</span>
                  </h5>
                  <p className="__text">「我觉得它是谦虚，有这么多强大的功能，但全部藏在R角白色的设计里。它不跟你说我有多厉害、又很低调，使用之后，你才发现它非常有存在感，不跟你说大话！」</p>
                </div>
              </a>
            </div>
            <div className="post">
              <a href="/about/story" className="__inner">
                <div className="__image  __10 scrollLoader lazyload"></div>
                <div className="__caption">
                  <h5 className="__title">
                  方序中解锁 AirEngine <span className="article_num">2</span>
                  </h5>
                  <p className="__text">「一定要有个梦想在前面，不去计较走到哪里才算停，不管直走或转弯，只要方向对了，就会朝着那个方向走，你会获得意想不到的事情。」</p>
                </div>
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <div className="contentsmap">
        <div className="viewport">
          <h4 className="__title">About</h4>
          <div className="__content">
            <div className="__list">
              <ul>
                公司介绍
                <li>
                  <a href="/about">关于BALMUDA</a>
                </li>
              </ul>
            </div>
            <div className="__list">
              <ul>
                产品开发故事
                <li>
                  <a href="/greenfan/story" target="_blank">
                    The GreenFan
                  </a>
                </li>
                <li>
                  <a href="/toaster/story" target="_blank">
                    BALMUDA The Toaster
                  </a>
                </li>
                <li>
                  <a href="/pot/story" target="_blank">
                    BALMUDA The Pot
                  </a>
                </li>
                {/* <li>
                  <a href="/lantern/story" target="_blank">
                    BALMUDA The Lantern
                  </a>
                </li>
                <li>
                  <a href="/speaker/story" target="_blank">
                    BALMUDA The Speaker
                  </a>
                </li>
                <li>
                  <a href="/cleaner/story" target="_blank">
                    BALMUDA The Cleaner
                  </a>
                </li> */}
              </ul>
            </div>

            <div className="__list">
              <ul>
                获奖经历
                <li>
                  <a href="/about/awards#gooddesign">GoodDesign优良设计奖</a>
                </li>
                <li>
                  <a href="/about/awards#reddot">Red Dot红点奖</a>
                </li>
                <li>
                  <a href="/about/awards#ifdesign">iF设计奖</a>
                </li>
                <li>
                  <a href="/about/awards#kidsdesign">儿童设计奖</a>
                </li>
              </ul>
            </div>
            <div className="__list">
              <ul>
                <a href="/about/story">BALMUDA的历史</a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
