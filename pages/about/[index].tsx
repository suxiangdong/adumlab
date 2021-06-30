import Link from 'next/link'
import ReactSlick from 'react-slick'
import Layout from '../../layouts/default'

export default function About() {
  return (
    <Layout>
      <div className="flex flex-col justify-between h-custom-90 max-w-5xl mx-auto pt-6 pb-3 px-4 text-left">
        <Link href="/">
          <a className="block w-20">
            <img src="//www.balmuda.com/_theme/img/svg/about.min.svgz" alt="About" />
          </a>
        </Link>
        <div className="text-xs">
          <Link href="/">
            <a className="text-green mr-6">概要</a>
          </Link>
          <Link href="/">
            <a className="mr-6">デザイン</a>
          </Link>
          <Link href="/">
            <a className="mr-6">淹れ方</a>
          </Link>
          <Link href="/">
            <a className="mr-6">ストーリー</a>
          </Link>
        </div>
      </div>
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
      <section className="relative">
        <img src="//www.balmuda.com/jp/about/img/index/desktop/section--stories2@2x.jpg" alt="" />
        <img className="opacity-50 h-14 mb-14" src="//www.balmuda.com/jp/about/img/svg/stories.000.min.svgz" alt="" />
        <div className="absolute">
          <h3>対談・寺尾玄 × 木本武宏（TKO）</h3>
          <p>GreenFan C2 の製品発表会。バルミューダにとってゆかりある、TKOの木本さんに登壇いただきました。木本さんが、なぜバルミューダにとってゆかりがある人なのか...</p>
          <Link href="/about/story">
            <a className="rounded-full bg-white w-44 h-11 flex items-center justify-center text-sm">続きを読む</a>
          </Link>
          <Link href="/about/story">
            <a>他の記事を読む</a>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
