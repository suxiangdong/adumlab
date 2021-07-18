import { useState } from 'react'
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
          href="/greenfan/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/greenfan/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <a href="/greenfan/" className="pagemap__content--logo">
            <img
              className="w-full"
              src="/_theme/img/svg/the-greenfan.000.min.svgz"
              alt="The GreenFan"
            />
          </a>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/greenfan/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--feature ">
              <Link href="/greenfan/feature">先进性</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design ">
              <Link href="/greenfan/design">使用方法</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story __current">
              <Link href="/greenfan/story">故事</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/greenfan/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=EGF-1700"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="section section--story section--00">
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">あの風を求めて</h2>
            <p>
              次の時代の扇風機を作ろう！そんな想いから開発が始まったGreenFan。現実のものとして生まれるまでには、意外なヒントや偶然の発見がありました。
            </p>
            <div className="__sign">
              <img src="/_theme/img/svg/gen_terao.min.svgz" className="__gen_terao" />
              <span className="__note">巴慕达代表　寺尾 玄</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--story section--01 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">あの夏に浴びた風</h2>
            <p>
              あれは小学三年生のこと。友達の家に初めてのエアコンが導入され、仲の良かった私たち数人が招待されたことがありました。最初はその涼しさに驚きながらも、そこは田舎の子どもたち。すぐにつまらなくなって、外に飛び出して行きました。なぜって、涼しい部屋の中ではカブトムシもザリガニも採れないからです。私たちは小川で魚を追いかけたり、町外れにある廃墟を冒険したり、汗だくになって遊びました。虫を採ろうとして、そおっと木に近づくときに吹いた一陣の風。自転車で坂を下るときに全身で浴びた気持ちのいい風。あの夏休みを吹き抜けた風は今でも忘れられません。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--02 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">自然の風には渦がない</h2>
            <p>
              あの時の風が部屋中を吹きぬけたら、どんなに気持ち良いだろう。それを実現させる扇風機を作れないだろうか、と考えたのは2009年のことでした。自然の風と扇風機の風の違いを突き止めようと計測を繰り返し、やがて気づいたのは、扇風機の風には独特の「渦成分」があるということ。自然界の風が面で進むのに対して、扇風機の風は回転しながら進んでいたのです。扇風機の風から渦成分をなくすことはできないか。そうすれば、窓から吹きぬける気持ちのいい風ができるはずだ、と試行錯誤が始まります。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--03 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">壁に風を当てる</h2>
            <p>
              扇風機の風を変えるヒントは、町工場の職人さんたちの扇風機の使用方法にありました。彼らは扇風機の風を壁にあて、跳ね返った風にあたっていたのです。「なぜ？」「こうすると風が優しくなるんだよ」
              試してみると、確かに優しくなります。扇風機の風が壁にぶつかることで渦成分が壊れ、面で進む風に生まれ変わっていたのです。
            </p>
            <p>この風を目指そう。</p>
            <p>目標は定まりましたが、風の渦成分を壊す方法はなかなか見つかりません。</p>
          </div>
        </div>
      </div>

      <div className="section section--story section--04 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">ヒントは子ども達の競走</h2>
            <p>
              渦成分が壊れると自然界の風に近くなる事は分かりました。しかし、羽根から送り出される風を何にぶつけたらいいのでしょうか。そう考えながら、ぼんやりと見ていたテレビには、30人の子ども達が足を紐で結んで競争する、長い2人3脚が映し出されていました。一直線でスタートする子ども達。でも、足の速い子はいつものように前に進めません。となりの子どもと足が紐で結ばれているからです。やがて脚の遅い子に向かって列が引き込まれ、一生懸命走っていた彼らは倒れてしまいました。もしかしたら同じ事が、風でも起きるかもしれない。ヒントは意外なところにあったのです。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--05 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title __wb">
              いままでにない
              <br />
              二重構造の羽根
            </h2>
            <p>
              こうして思いついたのが、同時に速度の違う風を送り出す二重構造の羽根でした。内側の遅い風が外側の速い風を引き込み、やがて一点でぶつかり、渦成分が壊れるのではないだろうか。すぐに試作品で実験すると、渦成分は消え、面で広がる風が吹いてきました。つまり、風と風をぶつける事で、面で移動する自然界の風が再現されたのです。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--06 scrollLoader lazyload loaded">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">グリーンファンの誕生</h2>
            <p>
              柔らかい風を実現したのですが、いままで扇風機に使われてきたACモーターでは、風速が速すぎました。独自の羽根を、ごくゆっくりと回転させるために、今まで扇風機に使われてこなかったDCモーターを世界で初めて採用。こうして生まれたのがGreenFanでした。
            </p>
            <p>
              個人的な見解ですが。GreenFanの風が一番気持ち良く感じられるのは、何と言っても昼寝の時でしょう。ソファーと薄いタオルケット、そしてGreenFanさえあれば。あの時、素晴らしい夏を吹き抜けた風を今でも感じることができます。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
