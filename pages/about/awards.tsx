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
            <li className={`pagemap__content__item`}>
              <Link href="/about">关于BALMUDA</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/about/story">历史故事</Link>
            </li>
            <li className={`pagemap__content__item __current`}>
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

      <div className="section section--awards section--00">
        <div className="viewport">
          <h2 className="page__title">获奖经历</h2>
          <p className="overview_text">BALMUDA 的产品获得了众多的设计奖。</p>
        </div>
      </div>

      <div className="section section--awards section--01" id="gooddesign">
        <div className="viewport">
          <div className="__content scrollLoader fadeInUp lazyload">
            <h3 className="section__title">优良设计奖</h3>
            <span className="__caption">日本</span>
            <p className="__overview">
              日本公益团体设计振兴会主办，1957年创立，是日本的综合设计奖，吸引众多国内外的企业和设计师参加。
            </p>
          </div>

          <div className="__wrap">
            <div className="__card scrollLoader fadeInUp __gooddesign_gold lazyload">
              <h4 className="__subtitle">优良设计奖金奖</h4>
              <p className="__subcaption">被授予评价为优良设计奖审查委员会优秀的设计。</p>
              <h4 className="__subtitle">获奖产品</h4>
              <ul className="__awards_list">
                <li>
                  <a href="/toaster/">BALMUDA The Toaster (2015)</a>
                </li>
              </ul>
            </div>

            <div className="__card scrollLoader fadeInUp __best100 lazyload">
              <h4 className="__subtitle">优良设计奖TOP100</h4>
              <p className="__subcaption">优良设计奖中100件推荐产品。</p>
              <h4 className="__subtitle">获奖产品</h4>
              <ul className="__awards_list">
                <li>
                  <a href="/gohan/">BALMUDA The Gohan (2017)</a>
                </li>
                <li>
                  <a href="/toaster/">BALMUDA The Toaster (2015)</a>
                </li>
                <li>SmartHeater (2014)</li>
                <li>AirEngine (2013)</li>
              </ul>
            </div>

            <div className="__card scrollLoader fadeInUp __gooddesign lazyload">
              <h4 className="__subtitle">获奖产品</h4>
              <ul className="__awards_list">
                <li>
                  <a href="/speaker/">BALMUDA The Speaker (2020)</a>
                </li>
                <li>
                  <a href="/lantern/">BALMUDA The Lantern (2020)</a>
                </li>
                <li>
                  <a href="/light/">BALMUDA The Light (2019)</a>
                </li>
                <li>
                  <a href="/pure/">BALMUDA The Pure (2019)</a>
                </li>
                <li>
                  <a href="/pot/">BALMUDA The Pot  (2017)</a>
                </li>
                <li>
                  <a href="/toaster/">BALMUDA The Toaster (2015)</a>
                </li>
                <li>
                  <a href="/greenfan/">GreenFan Japan (2014)</a>
                </li>
                <li>
                  <a href="/rain/">智能加湿器 (2014)</a>
                </li>
                <li>AirEngine (2013)</li>
                <li>GreenFan (2010)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--awards section--02 scrollLoader lazyload" id="reddot">
        <div className="viewport">
          <div className="__content scrollLoader fadeInUp lazyload">
            <h3 className="section__title">红点奖</h3>
            <span className="__caption">德国</span>
            <p className="__overview">
              德国的“Design ZentrumNordrhinin
              Westfalen”主办的的设计奖，根据创新性、功能性、人工程学、耐久性等9个审查标准，选定卓越的设计。
            </p>

            <h4 className="__subtitle">获奖产品</h4>
            <ul className="__awards_list">
              <li>
                <a href="/pot/">BALMUDA The Pot  (2017)</a>
              </li>
              <li>
                <a href="/rain/">智能加湿器 (2014)</a>
              </li>
              <li>AirEngine (2013)</li>
              <li>
                <a href="/greenfan-cirq/">GreenFan Cirq (2012)</a>
              </li>
              <li>GreenFan2 (2012)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section section--awards section--03 scrollLoader lazyload" id="ifdesign">
        <div className="viewport">
          <div className="__content scrollLoader fadeInUp lazyload">
            <h3 className="section__title">iF设计奖</h3>
            <span className="__caption">德国</span>
            <p className="__overview">
              德国“iF International Forum Design
              GmbH”所主办的有半个世纪的历史，以全世界的工业产品为对象，选定优秀的工业设计。
            </p>
          </div>
          <div className="__wrap">
            <div className="__card scrollLoader fadeInUp lazyload __if">
              <h4 className="__subtitle">获奖产品</h4>
              <ul className="__awards_list">
                <li>
                  <a href="/pure/">BALMUDA The Pure (2020)</a>
                </li>
                <li>
                  <a href="/pot/">BALMUDA The Pot  (2017)</a>
                </li>
                <li>
                  <a href="/toaster/">BALMUDA The Toaster (2016)</a>
                </li>
                <li>SmartHeater2 (2014)</li>
                <li>AirEngine (2014)</li>
                <li>GreenFan mini (2013)</li>
                <li>GreenFan2 (2013)</li>
              </ul>
            </div>

            <div className="__card scrollLoader fadeInUp lazyload __if_gold">
              <h4 className="__subtitle">Gold Award</h4>
              <p className="__subcaption">
                iF金奖，从获得iF设计亚字的产品中被授予“优秀设计”。Airengine和StrtHeater
                2获得了2014年度iF金奖。
              </p>
              <h4 className="__subtitle">获奖产品</h4>
              <ul className="__awards_list">
                <li>SmartHeater2 (2014)</li>
                <li>AirEngine (2014)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="section section--awards section--04 scrollLoader lazyload" id="kidsdesign">
        <div className="viewport">
          <div className="__content scrollLoader fadeInUp lazyload">
            <h3 className="section__title">儿童设计奖（日本）</h3>
            <span className="__caption">日本</span>
            <p className="__overview">
              儿童设计奖是“对孩子们的安全、安心做出贡献的设计”、“创造孩子们的创造性和未来的设计”、“孩子们容易生产的设计”的三个视点中优秀的产品。
            </p>

            <h4 className="__subtitle">获奖产品</h4>
            <ul className="__awards_list">
              <li>
                <a href="/lantern/">BALMUDA The Lantern (2020)</a>
              </li>
              <li>
                <a href="/light/">BALMUDA The Light (2019)</a>
              </li>
              <li>
                <a href="/greenfan/">GreenFan Japan (2014)</a>
              </li>
            </ul>
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
                <li>
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
                </li>
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
