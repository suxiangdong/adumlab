import Link from 'next/link'
import Layout from '../../layouts/default'

export default function ProductDetail() {
  const data = [
    {
      icon: 'https://www.balmuda.com/jp/toaster/img/svg/mode-toast.min.svgz?20200903',
      backgroundImage: 'https://www.balmuda.com/jp/toaster/img/taste/desktop/section--01@2x.jpg?20200901',
      title: '感動のトースト',
      description: 'BALMUDA The Toasterで焼いたトーストは、表面がサックリとしたきつね色、中は水分と香りが十分に残ったまま熱々の仕上がり。鮮烈で、香ばしい小麦の匂いが印象的です。新鮮なバターや季節のジャム、ハチミツをたっぷりとかけてお召し上がりください。'
    },
    {
      icon: 'https://www.balmuda.com/jp/toaster/img/svg/mode-cheese.min.svgz?20200903',
      backgroundImage: 'https://www.balmuda.com/jp/toaster/img/taste/desktop/section--02@2x.jpg?20200901',
      title: '究極のチーズトースト',
      description: 'とけて、少しだけ焦げたチーズの素晴らしさに異論をとなえる人はいないでしょう。BALMUDA The Toasterはスチームの力でチーズの水分と風味をたっぷりと残したまま、細やかな温度制御で絶妙な焦げ目をつけます。シンプルなチーズトーストからピザトーストまで、感動の仕上がりをお約束します。',
      align: 'right'
    },
    {
      icon: 'https://www.balmuda.com/jp/toaster/img/svg/mode-croissant.min.svgz?20200903',
      backgroundImage: 'https://www.balmuda.com/jp/toaster/img/taste/desktop/section--03@2x.jpg?20200901',
      title: '幸せのクロワッサン',
      description: 'トースターで温めると黒く焦げてしまいやすいクロワッサン。BALMUDA The Toasterでは、焦がさず表面はサクッと焼き上げ、窯から出したばかりの焼きたてのクロワッサンを再現します。香りたつバターと積層されたパイ生地。クロワッサン本来のおいしさを自宅でも楽しむことができます。'
    },
    {
      icon: 'https://www.balmuda.com/jp/toaster/img/svg/mode-baguette.min.svgz?20200903',
      backgroundImage: 'https://www.balmuda.com/jp/toaster/img/taste/desktop/section--04@2x.jpg?20200901',
      title: '三ツ星のバゲット',
      description: 'バゲットをトーストすると水分は飛び、表面も中身も硬くなってしまっていました。BALMUDA The Toasterは、スチームテクノロジーと細やかな温度制御で、パリッとした表面の歯ごたえと、中の柔らかさを同時に実現します。その香ばしさと食感はまさにレストランのバゲットです。',
      align: 'right'
    },
    {
      backgroundImage: 'https://www.balmuda.com/jp/toaster/img/taste/desktop/section--06@2x.jpg?20200901',
      title: '冷凍したパンもおいしく',
      description: 'BALMUDA The Toasterは、スチームテクノロジーと細やかな温度制御で、冷凍されたパンも簡単に、おいしく焼きあげます。いつもの焼き方に1分追加。たったそれだけで香ばしく、熱々に仕上がります。'
    },
    {
      backgroundImage: 'https://www.balmuda.com/jp/toaster/img/taste/desktop/section--05@2x.jpg?20200901',
      title: 'パンだけでなく料理にも',
      description: 'スチームを使用せず、上下のヒーターだけをシンプルにつけるクラシックモード。170、200、230℃の3つの温度から選べます。お餅の焼き上げやグラタンなどはもちろん、庫内を一定の温度に保って焼き続けるので、クッキーなどの簡単なお菓子作りにも。BALMUDA The Toaster1台でお料理の幅がみるみる広がります。'
    }
  ]
  return (
    <Layout>
      <div className="shadow-lg">
        <div className="flex flex-col justify-between h-custom-90 max-w-5xl mx-auto pt-6 pb-3 px-3 text-left">
          <Link href="/">
            <a className="block w-72">
              <img src="https://www.balmuda.com/_theme/img/svg/balmuda-the-toaster.min.svgz" alt="BALMUDA The Toaster" />
            </a>
          </Link>
          <div className="text-xs">
            <Link href="/toaster/index">
              <a className="text-green mr-6">概要</a>
            </Link>
            <Link href="/toaster/taste">
              <a className="mr-6">特別なおいしさ</a>
            </Link>
            <Link href="/toaster/technology">
              <a className="mr-6">トーストを科学する</a>
            </Link>
            <Link href="/toaster/howto">
              <a className="mr-6">使い方</a>
            </Link>
            <Link href="/toaster/story">
              <a className="mr-6">ストーリー</a>
            </Link>
            <Link href="/toaster/spec">
              <a className="mr-6">スペック</a>
            </Link>
          </div>
        </div>
      </div>

      <section className="py-24 text-center">
        <h2 className="text-4xl mb-8">味、香り、そして食感</h2>
        <p className="text-lg mb-12 max-w-3xl px-3 leading-7 tracking-wide mx-auto">おいしさは味と香り、そして食感から生み出されます。BALMUDA The Toasterはスチームテクノロジーと細やかな温度制御で、さまざまなパンのおいしさを引き出します。温度が選べるクラシックモードでは、パン以外の食材もすばやく美味しく仕上げます。</p>
      </section>
      {data.map((item, index) => (
        <section key={index} className="text-white relative">
          <img src={item.backgroundImage} alt="" />
          <div className={`flex flex-col justify-center absolute inset-0 m-auto transform ${item.align === 'right' ? '' : '-'}translate-x-2/4 max-w-md`}>
            {item.icon && <img className="w-28 mb-7" src={item.icon} alt="" />}
            <h2 className="text-4xl mb-8">{item.title}</h2>
            <p className="text-lg mb-4 leading-8">{item.description}</p>
          </div>
        </section>
      ))}
    </Layout>
  )
}
