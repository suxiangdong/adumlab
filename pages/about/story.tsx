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
              <Link href="/about">バルミューダについて</Link>
            </li>
            <li className={`pagemap__content__item __current`}>
              <Link href="/about/story">历史故事</Link>
            </li>
            <li className={`pagemap__content__item `}>
              <Link href="/about/awards">获得奖项</Link>
            </li>
          </ul>
          <div className="pagemap__dropdown hidden" id="greedynav--btn">
            <span className="pagemap__dropdown__btn"></span>
            <ul className="pagemap__dropdown__content"></ul>
          </div>
          <div className="pagemap__btns"></div>
        </div>
      </div>

      <div className="section section--story-index section--01 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">製品開発ストーリー</h2>
            <p>
              バルミューダの製品は、いつもわくわくするようなアイデアから始まりますが、そのアイデアを現実にするためには、いつもひたすら試行錯誤と実験を繰り返しています。製品ができあがるまでの苦難のストーリーをご紹介します。
            </p>
          </div>

          <div className="posts">
            <div className="post">
              <a href="/greenfan/story" className="__inner">
                <div className="__image __0 scrollLoader lazyload loaded"></div>
                <div className="__caption">
                  <h5 className="__title">The GreenFan</h5>
                  <p className="__text">
                    次の時代の扇風機を作ろう！こんな想いから開発が始まったGreenFan。現実のものとして生まれるまでには、意外...
                  </p>
                </div>
              </a>
            </div>
            <div className="post">
              <a href="/toaster/story" className="__inner">
                <div className="__image __1 scrollLoader lazyload loaded"></div>
                <div className="__caption">
                  <h5 className="__title">BALMUDA The Toaster</h5>
                  <p className="__text">
                    BALMUDA The
                    Toasterの開発ストーリーは、1991年のスペイン南部の町ロンダから始まりました。
                  </p>
                </div>
              </a>
            </div>
            <div className="post">
              <a href="/pot/story" className="__inner">
                <div className="__image __2 scrollLoader lazyload loaded"></div>
                <div className="__caption">
                  <h5 className="__title">BALMUDA The Pot</h5>
                  <p className="__text">
                    キッチンでの体験をもっと楽しくしたい。BALMUDA The
                    Potはそんな思いから開発が始まりました。
                  </p>
                </div>
              </a>
            </div>
            <div className="post">
              <a href="/gohan/story" className="__inner">
                <div className="__image  __3 scrollLoader lazyload loaded"></div>
                <div className="__caption">
                  <h5 className="__title">BALMUDA The Gohan</h5>
                  <p className="__text">
                    米粒がごはんに変わる理由、ガスと電気のエネルギーの違い、そして途中の寄り道など。開発チームがたどった...
                  </p>
                </div>
              </a>
            </div>
            <div className="post">
              <a href="/lantern/story" className="__inner">
                <div className="__image  __5 scrollLoader lazyload loaded"></div>
                <div className="__caption">
                  <h5 className="__title">BALMUDA The Lantern</h5>
                  <p className="__text">
                    使う人に、味わい深いよい時間を過ごしてほしい、そんな思いから生まれた BALMUDA The
                    Lantern...
                  </p>
                </div>
              </a>
            </div>
            <div className="post">
              <a href="/speaker/story" className="__inner">
                <div className="__image  __6 scrollLoader lazyload loaded"></div>
                <div className="__caption">
                  <h5 className="__title">BALMUDA The Speaker</h5>
                  <p className="__text">
                    バルミューダを始めてからこの時まで。私は、オーディオ機器だけは作らないと決めていました...
                  </p>
                </div>
              </a>
            </div>
            <div className="post">
              <a href="/cleaner/story" className="__inner">
                <div className="__image  __7 scrollLoader lazyload loaded"></div>
                <div className="__caption">
                  <h5 className="__title">BALMUDA The Cleaner</h5>
                  <p className="__text">
                    空調、キッチンに続く、次の製品ジャンルの候補として気乗りしなかった掃除機...
                  </p>
                </div>
              </a>
            </div>
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
                获得奖项
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