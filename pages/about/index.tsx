import Link from 'next/link'
import Head from 'next/head'
import ReactSlick from 'react-slick'
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
            <li className={`pagemap__content__item __current`}>
              <Link href="/about">关于巴慕达</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/about/story">历史故事</Link>
            </li>
            <li className={`pagemap__content__item`}>
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
      <ReactSlick arrows={false} dots>
        <div>
          <img className="w-full" src="/about/img/index/desktop/billboard/0@2x.jpg?20200221" />
        </div>
        <div>
          <img className="w-full" src="/about/img/index/desktop/billboard/1@2x.jpg?20200221" />
        </div>
        <div>
          <img className="w-full" src="/about/img/index/desktop/billboard/2@2x.jpg?20200221" />
        </div>
        <div>
          <img className="w-full" src="/about/img/index/desktop/billboard/3@2x.jpg?20200221" />
        </div>
        <div>
          <img className="w-full" src="/about/img/index/desktop/billboard/4@2x.jpg?20200221" />
        </div>
      </ReactSlick>
      <section className="pt-24 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl mb-16 pb-2">美好的体验</h2>
        <p className="text-xl mb-6">
          BALMUDA，2003年成立于东京。为了给客户提供高性能和富有创意的产品，我们奉行的理念是以简求臻。即以精简的零部件构成产品、以简约的设计呈现优美、以简省的能耗实现理想效果。然而，这些都不是凭借灵光一现就能做到的。我们需要经年累月地不断求索。
        </p>
        <p className="text-xl mb-6">
          我们的产品开发常常始于天马行空的创意。但是看似不可能的事情并非真的不可能。
          因为一定还有方法未被尝试。
        </p>
        <p className="text-xl">
          我们深信，让人耳目一新的独特创意，充分发挥零部件效率的工业设计，我们的产品一定是前所未有的杰出创作。
          以简求臻，让更多用户受益于技术进步。如果通过我们的产品可以感受到美好的未来，这将是我们无上的荣幸。
        </p>
        <div className="pt-12 text-right">
          <img
            className="inline-block"
            src="//www.balmuda.com/_theme/img/svg/gen_terao.min.svgz"
            width="231"
            height="37"
          />
          <p className="text-sm">BALMUDA株式会社社长　寺尾 玄</p>
        </div>
      </section>
      <section className="relative">
        <img src="/about/img/index/desktop/section--profile@2x.jpg" alt="" />
        <div className="flex flex-col justify-center absolute inset-0 m-auto transform translate-x-1/2 max-w-md">
          <h3 className="text-lg mb-4">寺尾玄　简介</h3>
          <p className="leading-8">
            1973年出生，17岁时，从高中退学，开始了欧洲游学生活，回国后组建了自己的乐队。2001年乐队解散后自学设计、制造等，2003年创办了BALMUDA，2011年成立了巴慕达株式会社。
            <a className="" href="//www.shinchosha.co.jp/book/350941/" target="_blank">
              出版著作「行こう、どこにもなかった方法で」（新潮社）
            </a>
          </p>
        </div>
      </section>
      <section className="max-w-5xl p-5 mx-auto">
        <img className="opacity-50 h-14 mb-14" src="/about/img/svg/company.000.min.svgz" />
        <div className="flex">
          <div className="w-1/2 pr-8 border-r border-999">
            <h3 className="text-2xl mb-6">公司简介</h3>
            <span className="text-sm text-999">公司名称</span>
            <p className="text-sm mb-3">BALMUDA Inc.</p>
            <span className="text-sm text-999">地址</span>
            <p className="text-sm mb-3">日本国东京都武藏野市境南町5-1-21 180-0023</p>
            <span className="text-sm text-999">法人代表</span>
            <p className="text-sm mb-3">董事长兼总经理　寺尾 玄</p>
            <span className="text-sm text-999">成立时间</span>
            <p className="text-sm mb-3">2003年3月</p>
            <span className="text-sm text-999">中国公司名称</span>
            <p className="text-sm mb-3">星龙达科贸（北京）有限公司</p>
            <span className="text-sm text-999">地址</span>
            <p className="text-sm mb-3">北京市经济技术开发区大族广场T1-1103</p>
            <span className="text-sm text-999">法人代表</span>
            <p className="text-sm mb-3">于艾灵</p>
            <span className="text-sm text-999">成立时间</span>
            <p className="text-sm mb-3">2013年11月</p>
          </div>
          <div className="w-1/2 pl-8">
            <h3 className="text-2xl">历史进程</h3>
            <span className="text-sm text-999">2003</span>
            <p className="text-sm mb-3">balmuda巴慕达成立「X-Base」开始销售</p>
            <span className="text-sm text-999">2010</span>
            <p className="text-sm mb-3">GreenFan开始销售</p>
            <span className="text-sm text-999">2011</span>
            <p className="text-sm mb-3">BALMUDA巴慕达株式会社成立</p>
            <span className="text-sm text-999">2012</span>
            <p className="text-sm mb-3">韩国开始销售</p>
            <span className="text-sm text-999">2013</span>
            <p className="text-sm mb-3">BALMUDA Europe GmbH成立，德国开始销售</p>
            <span className="text-sm text-999">2014</span>
            <p className="text-sm mb-3">中国市场开始销售</p>
            <span className="text-sm text-999">2015</span>
            <p className="text-sm mb-3">BALMUDA The Toaster发布、正式进入厨电市场</p>
            <span className="text-sm text-999">2017</span>
            <p className="text-sm mb-3">中国台湾市场开始销售</p>
            <span className="text-sm text-999">2020</span>
            <p className="text-sm mb-3">美国开始销售</p>
          </div>
        </div>
      </section>
			<div className="section section--index section--history scrollLoader lazyload">
			<ReactSlick className="history" dots>
        <div>
          <img className="w-full" src="/about/img/index/desktop/history--00@2x.jpg" />
        </div>
        <div>
          <img className="w-full" src="/about/img/index/desktop/history--01.jpg" />
        </div>
        <div>
          <img className="w-full" src="/about/img/index/desktop/history--02.jpg" />
        </div>
        <div>
          <img className="w-full" src="/about/img/index/desktop/history--03.jpg" />
        </div>
        <div>
          <img className="w-full" src="/about/img/index/desktop/history--04.jpg" />
        </div>
      </ReactSlick>
			</div>

      <div className="section section--index section--awards-banner scrollLoader lazyload">
        <div className="viewport">
          <div className="__content">
            <h3 className="section__title">获奖经历</h3>
            <p>巴慕达的产品曾荣获good设计奖(日本)、iF设计奖(德国)等世界权威设计奖。</p>
            <a href="/about/awards" className="button">
              查看获奖经历
            </a>
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
                BALMUDA的历史
                <li>
                  <a href="/about/story/001">1. 从制作产品的现场开始</a>
                </li>
                <li>
                  <a href="/about/story/002">2. 用心开发的台灯</a>
                </li>
                <li>
                  <a href="/about/story/003">3. 「GreenFan」的开发背景</a>
                </li>
                <li>
                  <a href="/about/story/004">4. 充满创意的团队</a>
                </li>
                <li>
                  <a href="/about/story/006">5. 体验大于产品「Hello Kitchen！」</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
