import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ReactSlick from 'react-slick'
import Layout from '../../layouts/default'

export default function About() {
  const router = useRouter()
  const { item } = router.query
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" media="(max-width: 640px)" href="/about/style/mobile.css?20210707092635" />
        <link rel="stylesheet" media="(min-width: 641px)" href="/about/style/desktop.css?20210707092635" />
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <a href="/about/index" className="pagemap__content--logo">
            <img src="/_theme/img/svg/about.min.svgz" alt="About" />
          </a>
          <ul className="pagemap__main" id="greedynav-links">
            <li className={`pagemap__content__item ${item == 'index' ? '__current' : ''}`}>
              <Link href="/about/index">バルミューダについて</Link>
            </li>
            <li className={`pagemap__content__item ${item == 'story' ? '__current' : ''}`}>
              <Link href="/about/story">ストーリーズ</Link>
            </li>
            <li className={`pagemap__content__item ${item == 'awards' ? '__current' : ''}`}>
              <Link href="/about/awards">受賞歴</Link>
            </li>
          </ul>
          <div className="pagemap__dropdown hidden" id="greedynav--btn">
            <span className="pagemap__dropdown__btn"></span>
            <ul className="pagemap__dropdown__content"></ul>
          </div>
          <div className="pagemap__btns"></div>
        </div>
      </div>
      {item == 'index' && (
        <>
          <ReactSlick arrows={false} dots>
            <div>
              <img className="w-full" src="//www.balmuda.com/jp/about/img/index/desktop/billboard/0@2x.jpg?20200221" />
            </div>
            <div>
              <img className="w-full" src="//www.balmuda.com/jp/about/img/index/desktop/billboard/1@2x.jpg?20200221" />
            </div>
            <div>
              <img className="w-full" src="//www.balmuda.com/jp/about/img/index/desktop/billboard/2@2x.jpg?20200221" />
            </div>
            <div>
              <img className="w-full" src="//www.balmuda.com/jp/about/img/index/desktop/billboard/3@2x.jpg?20200221" />
            </div>
            <div>
              <img className="w-full" src="//www.balmuda.com/jp/about/img/index/desktop/billboard/4@2x.jpg?20200221" />
            </div>
          </ReactSlick>
          <section className="pt-24 max-w-4xl mx-auto text-center">
            <h2 className="text-5xl mb-16 pb-2">素晴らしい体験を</h2>
            <p className="text-xl mb-6">バルミューダは、2003年に東京で設立されたクリエイティブとテクノロジーの会社です。自由な心で夢見た未来を、技術の力で実現して人々の役に立つ。これが私たちのミッション。新しい考え方で、これまでになかった価値を持つ家電を作っています。</p>
            <p className="text-xl mb-6">かつて家電は不便さを解消することで人々の役に立ってきました。しかし今、私たちの生活は十分に便利になりつつあります。そして家電に求められているものも、変わってきているのだと感じます。</p>
            <p className="text-xl">現代を生きる私たちが道具やサービスに求めているのは、驚きや感動、うれしくなるような体験なのだと思います。バルミューダは家電という道具を通して、心躍るような、素晴らしい体験を皆様にお届けしたいと考えている企業です。</p>
            <div className="pt-12 text-right">
              <img className="inline-block" src="//www.balmuda.com/_theme/img/svg/gen_terao.min.svgz" width="231" height="37" />
              <p className="text-sm">バルミューダ代表　寺尾 玄</p>
            </div>
          </section>
          <section className="relative">
            <img src="//www.balmuda.com/jp/about/img/index/desktop/section--profile@2x.jpg" alt="" />
            <div className="flex flex-col justify-center absolute inset-0 m-auto transform translate-x-1/2 max-w-md">
              <h3 className="text-lg mb-4">寺尾玄　プロフィール</h3>
              <p className="leading-8">
                1973年生まれ。17歳の時、高校を中退。スペイン、イタリア、モロッコなど、地中海沿いを放浪の旅をする。帰国後、音楽活動を開始。大手レーベルとの契約、またその破棄などの経験を経て、バンド活動に専念。2001年、バンド解散後、もの作りの道を志す。独学と工場への飛び込みにより、設計、製造を習得。2003年、有限会社バルミューダデザイン設立（2011年3月、バルミューダ株式会社へ社名変更）。同社代表取締役。
                <a className="" href="//www.shinchosha.co.jp/book/350941/" target="_blank">
                  著書「行こう、どこにもなかった方法で」（新潮社）
                </a>
              </p>
            </div>
          </section>
          <section className="max-w-5xl p-5 mx-auto">
            <img className="opacity-50 h-14 mb-14" src="//www.balmuda.com/jp/about/img/svg/company.000.min.svgz" />
            <div className="flex">
              <div className="w-1/2 pr-8 border-r border-999">
                <h3 className="text-2xl mb-6">会社概要</h3>
                <span className="text-sm text-999">社名</span>
                <p className="text-sm mb-3">バルミューダ株式会社</p>
                <span className="text-sm text-999">本社</span>
                <p className="text-sm mb-3">〒180-0023　東京都武蔵野市境南町5-1-21</p>
                <span className="text-sm text-999">代表者</span>
                <p className="text-sm mb-3">代表取締役社長　寺尾 玄</p>
                <span className="text-sm text-999">設立</span>
                <p className="text-sm mb-3">2003年3月</p>
                <span className="text-sm text-999">資本金</span>
                <p className="text-sm mb-3">1,149百万円（2020年12月31日現在）</p>
                <span className="text-sm text-999">売上高</span>
                <p className="text-sm mb-3">[連結] 12,587百万円（2020年12月期実績）</p>
                <span className="text-sm text-999">決算期</span>
                <p className="text-sm mb-3">12月</p>
                <span className="text-sm text-999">従業員数</span>
                <p className="text-sm mb-3">109（3）名（2020年10月31日現在、臨時雇用者数は（）に外数で記載）</p>
              </div>
              <div className="w-1/2 pl-8">
                <h3 className="text-2xl">沿革</h3>
                <span className="text-sm text-999">2003</span>
                <p className="text-sm mb-3">有限会社バルミューダデザイン設立。最初の製品「X-Base」発売</p>
                <span className="text-sm text-999">2010</span>
                <p className="text-sm mb-3">GreenFanを発売</p>
                <span className="text-sm text-999">2011</span>
                <p className="text-sm mb-3">バルミューダ株式会社に社名変更</p>
                <span className="text-sm text-999">2012</span>
                <p className="text-sm mb-3">韓国にて販売開始</p>
                <span className="text-sm text-999">2013</span>
                <p className="text-sm mb-3">ドイツ法人「BALMUDA Europe GmbH」設立。ドイツにて販売開始</p>
                <span className="text-sm text-999">2014</span>
                <p className="text-sm mb-3">中国にて販売開始</p>
                <span className="text-sm text-999">2015</span>
                <p className="text-sm mb-3">BALMUDA The Toasterを発売、キッチン家電に参入</p>
                <span className="text-sm text-999">2017</span>
                <p className="text-sm mb-3">台湾にて販売開始</p>
                <span className="text-sm text-999">2020</span>
                <p className="text-sm mb-3">米国にて販売開始</p>
              </div>
            </div>
          </section>
          <ReactSlick arrows={false} dots>
            <div>
              <img className="w-full" src="//www.balmuda.com/jp/about/img/index/desktop/history--00@2x.jpg" />
            </div>
            <div>
              <img className="w-full" src="//www.balmuda.com/jp/about/img/index/desktop/history--01.jpg" />
            </div>
            <div>
              <img className="w-full" src="//www.balmuda.com/jp/about/img/index/desktop/history--02.jpg" />
            </div>
            <div>
              <img className="w-full" src="//www.balmuda.com/jp/about/img/index/desktop/history--03.jpg" />
            </div>
            <div>
              <img className="w-full" src="//www.balmuda.com/jp/about/img/index/desktop/history--04.jpg" />
            </div>
          </ReactSlick>
          <div className="section section--index section--awards-banner scrollLoader lazyload loaded">
            <div className="viewport">
              <div className="__content">
                <h3 className="section__title">受賞歴</h3>
                <p>バルミューダの製品は、グッドデザイン賞（日本）やiFデザイン賞（ドイツ）など、世界的に権威あるデザイン賞を数多く受賞しています。</p>
                <a href="/about/awards" className="button">
                  受賞歴を見る
                </a>
              </div>
            </div>
          </div>
        </>
      )}
      {item === 'story' && (
        <>
          <div className="section section--story-index section--01 scrollLoader lazyload loaded">
            <div className="viewport scrollLoader fadeInUp loaded">
              <div className="__content">
                <h2 className="section__title">製品開発ストーリー</h2>
                <p>バルミューダの製品は、いつもわくわくするようなアイデアから始まりますが、そのアイデアを現実にするためには、いつもひたすら試行錯誤と実験を繰り返しています。製品ができあがるまでの苦難のストーリーをご紹介します。</p>
              </div>

              <div className="posts">
                <div className="post">
                  <a href="/greenfan/story" className="__inner">
                    <div className="__image __0 scrollLoader lazyload loaded"></div>
                    <div className="__caption">
                      <h5 className="__title">The GreenFan</h5>
                      <p className="__text">次の時代の扇風機を作ろう！こんな想いから開発が始まったGreenFan。現実のものとして生まれるまでには、意外...</p>
                    </div>
                  </a>
                </div>
                <div className="post">
                  <a href="/toaster/story" className="__inner">
                    <div className="__image __1 scrollLoader lazyload loaded"></div>
                    <div className="__caption">
                      <h5 className="__title">BALMUDA The Toaster</h5>
                      <p className="__text">BALMUDA The Toasterの開発ストーリーは、1991年のスペイン南部の町ロンダから始まりました。</p>
                    </div>
                  </a>
                </div>
                <div className="post">
                  <a href="/pot/story" className="__inner">
                    <div className="__image __2 scrollLoader lazyload loaded"></div>
                    <div className="__caption">
                      <h5 className="__title">BALMUDA The Pot</h5>
                      <p className="__text">キッチンでの体験をもっと楽しくしたい。BALMUDA The Potはそんな思いから開発が始まりました。</p>
                    </div>
                  </a>
                </div>
                <div className="post">
                  <a href="/gohan/story" className="__inner">
                    <div className="__image  __3 scrollLoader lazyload loaded"></div>
                    <div className="__caption">
                      <h5 className="__title">BALMUDA The Gohan</h5>
                      <p className="__text">米粒がごはんに変わる理由、ガスと電気のエネルギーの違い、そして途中の寄り道など。開発チームがたどった...</p>
                    </div>
                  </a>
                </div>
                <div className="post">
                  <a href="/lantern/story" className="__inner">
                    <div className="__image  __5 scrollLoader lazyload loaded"></div>
                    <div className="__caption">
                      <h5 className="__title">BALMUDA The Lantern</h5>
                      <p className="__text">使う人に、味わい深いよい時間を過ごしてほしい、そんな思いから生まれた BALMUDA The Lantern...</p>
                    </div>
                  </a>
                </div>
                <div className="post">
                  <a href="/speaker/story" className="__inner">
                    <div className="__image  __6 scrollLoader lazyload loaded"></div>
                    <div className="__caption">
                      <h5 className="__title">BALMUDA The Speaker</h5>
                      <p className="__text">バルミューダを始めてからこの時まで。私は、オーディオ機器だけは作らないと決めていました...</p>
                    </div>
                  </a>
                </div>
                <div className="post">
                  <a href="/cleaner/story" className="__inner">
                    <div className="__image  __7 scrollLoader lazyload loaded"></div>
                    <div className="__caption">
                      <h5 className="__title">BALMUDA The Cleaner</h5>
                      <p className="__text">空調、キッチンに続く、次の製品ジャンルの候補として気乗りしなかった掃除機...</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {item === 'awards' && (
        <>
          <div className="section section--awards section--00">
            <div className="viewport">
              <h2 className="page__title">受賞歴</h2>
              <p className="overview_text">バルミューダの製品は、世界的に権威あるデザイン賞を数多く受賞しています。</p>
            </div>
          </div>

          <div className="section section--awards section--01" id="gooddesign">
            <div className="viewport">
              <div className="__content scrollLoader fadeInUp loaded">
                <h3 className="section__title">グッドデザイン賞</h3>
                <span className="__caption">日本</span>
                <p className="__overview">公益財団法人日本デザイン振興会が主催する、1957年に創設された日本で唯一の総合的なデザイン賞で、国内外の多くの企業やデザイナーが参加しています。</p>
              </div>

              <div className="__wrap">
                <div className="__card scrollLoader fadeInUp __gooddesign_gold loaded">
                  <h4 className="__subtitle">グッドデザイン賞金賞</h4>
                  <p className="__subcaption">グッドデザイン賞審査委員会がもっとも優れていると評価したデザインに贈られます。</p>
                  <h4 className="__subtitle">受賞製品</h4>
                  <ul className="__awards_list">
                    <li>
                      <a href="/toaster/">BALMUDA The Toaster (2015)</a>
                    </li>
                  </ul>
                </div>

                <div className="__card scrollLoader fadeInUp __best100 loaded">
                  <h4 className="__subtitle">グッドデザイン ベスト100</h4>
                  <p className="__subcaption">グッドデザイン賞を受賞した製品の中から特に高い評価を得た100件に贈られます。</p>
                  <h4 className="__subtitle">受賞製品</h4>
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

                <div className="__card scrollLoader fadeInUp __gooddesign loaded">
                  <h4 className="__subtitle">受賞製品</h4>
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
                      <a href="/greenfan-c2/">GreenFan C2 (2019)</a>
                    </li>
                    <li>
                      <a href="/range/">BALMUDA The Range (2018)</a>
                    </li>
                    <li>
                      <a href="/gohan/">BALMUDA The Gohan (2017)</a>
                    </li>
                    <li>
                      <a href="/pot/">BALMUDA The Pot (2017)</a>
                    </li>
                    <li>
                      <a href="/toaster/">BALMUDA The Toaster (2015)</a>
                    </li>
                    <li>
                      <a href="/greenfan/">GreenFan Japan (2014)</a>
                    </li>
                    <li>
                      <a href="/rain/">Rain (2014)</a>
                    </li>
                    <li>SmartHeater (2014)</li>
                    <li>AirEngine (2013)</li>
                    <li>GreenFan mini (2012)</li>
                    <li>GreenFan (2010)</li>
                    <li>
                      <a href="/airline/">Airline (2008)</a>
                    </li>
                    <li>Highwire (2005)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section section--awards section--02 scrollLoader lazyload loaded" id="reddot">
            <div className="viewport">
              <div className="__content scrollLoader fadeInUp loaded">
                <h3 className="section__title">Red Dot デザイン・アワード</h3>
                <span className="__caption">ドイツ</span>
                <p className="__overview">ドイツの「Design Zentrum Nordrhein Westfalen」が主催する世界最大級のデザイン賞で、革新性、機能性、人間工学、耐久性など9つの審査基準に基づき、卓越したデザインが選定されます。</p>

                <h4 className="__subtitle">受賞製品</h4>
                <ul className="__awards_list">
                  <li>
                    <a href="/gohan/">BALMUDA The Gohan (2017)</a>
                  </li>
                  <li>
                    <a href="/pot/">BALMUDA The Pot (2017)</a>
                  </li>
                  <li>
                    <a href="/rain/">Rain (2014)</a>
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

          <div className="section section--awards section--03 scrollLoader lazyload loaded" id="ifdesign">
            <div className="viewport">
              <div className="__content scrollLoader fadeInUp loaded">
                <h3 className="section__title">iFデザイン・アワード</h3>
                <span className="__caption">ドイツ</span>
                <p className="__overview">ドイツ「iF International Forum Design GmbH」が主催する半世紀以上の歴史がある世界的に権威あるデザイン賞で、全世界の工業製品を対象に優れた工業デザインを選定しています。</p>
              </div>
              <div className="__wrap">
                <div className="__card scrollLoader fadeInUp __if loaded">
                  <h4 className="__subtitle">受賞製品</h4>
                  <ul className="__awards_list">
                    <li>
                      <a href="/pure/">BALMUDA The Pure (2020)</a>
                    </li>
                    <li>
                      <a href="/gohan/">BALMUDA The Gohan (2018)</a>
                    </li>
                    <li>
                      <a href="/pot/">BALMUDA The Pot (2017)</a>
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

                <div className="__card scrollLoader fadeInUp __if_gold loaded">
                  <h4 className="__subtitle">Gold Award</h4>
                  <p className="__subcaption">iFゴールドアワードは、iFデザインアワードを受賞した製品の中から「最優秀デザイン」に授与されます。AirEngineおよびSmartHeater2は2014年度iFゴールドアワードを受賞しました。</p>
                  <h4 className="__subtitle">受賞製品</h4>
                  <ul className="__awards_list">
                    <li>SmartHeater2 (2014)</li>
                    <li>AirEngine (2014)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="section section--awards section--04 scrollLoader lazyload loaded" id="kidsdesign">
            <div className="viewport">
              <div className="__content scrollLoader fadeInUp loaded">
                <h3 className="section__title">キッズデザイン賞</h3>
                <span className="__caption">日本</span>
                <p className="__overview">キッズデザイン賞は「子どもたちの安全・安心に貢献するデザイン」「子どもたちの創造性と未来を拓くデザイン」「子どもたちを産み育てやすいデザイン」の3つの視点において優れた製品が選ばれます。</p>

                <h4 className="__subtitle">優秀賞 経済産業大臣賞 受賞製品</h4>
                <ul className="__awards_list">
                  <li>
                    <a href="/pure/">BALMUDA The Pure (2020)</a>
                  </li>
                </ul>
                <h4 className="__subtitle">キッズデザイン賞 受賞製品</h4>
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
        </>
      )}
      <div className="contentsmap">
        <div className="viewport">
          <h4 className="__title">About</h4>
          <div className="__content">
            <div className="__list">
              <ul>
                会社概要
                <li>
                  <a href="/about/index">バルミューダについて</a>
                </li>
              </ul>
            </div>
            <div className="__list">
              <ul>
                製品開発ストーリー
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
                受賞歴
                <li>
                  <a href="/about/awards#gooddesign">グッドデザイン賞</a>
                </li>
                <li>
                  <a href="/about/awards#reddot">Red Dotデザイン賞</a>
                </li>
                <li>
                  <a href="/about/awards#ifdesign">iFデザイン賞</a>
                </li>
                <li>
                  <a href="/about/awards#kidsdesign">キッズデザイン賞</a>
                </li>
              </ul>
            </div>
            <div className="__list">
              <ul>
                バルミューダの歴史
                <li>
                  <a href="/about/story/001">1. もの作りの現場から始まる</a>
                </li>
                <li>
                  <a href="/about/story/002">2. こだわりのデスクライトを開発</a>
                </li>
                <li>
                  <a href="/about/story/003">3. 「GreenFan」開発の背景</a>
                </li>
                <li>
                  <a href="/about/story/004">4. クリエイティブを支えるチーム</a>
                </li>
                <li>
                  <a href="/about/story/006">5. 物より体験「Hello Kitchen!」</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
