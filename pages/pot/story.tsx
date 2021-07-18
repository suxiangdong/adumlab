import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'
import { useState } from 'react'

export default function ProductDetail() {
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/pot/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/pot/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <a href="/pot/" className="pagemap__content--logo">
            <img src="/_theme/img/svg/balmuda-the-pot.min.svgz" alt="BALMUDA The Pot" />
          </a>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/pot/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design ">
              <Link href="/pot/design">设计</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story __current">
              <Link href="/pot/story">故事</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/pot/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__dropdown hidden" id="greedynav--btn">
            <span className="pagemap__dropdown__btn"></span>
            <ul className="pagemap__dropdown__content"></ul>
          </div>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=K02A"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="section section--story section--00">
        <img
          src="https://www.balmuda.com/jp/pot/img/story/mobile/section--00.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">BALMUDA The Potが生まれるまで</h2>
            <p>
              キッチンでの体験をもっと楽しくしたい。
              <br />
              BALMUDA The Potが生み出されるまで、さまざまな思いがありました。
            </p>
            <div className="__sign">
              <img
                src="/_theme/img/svg/gen_terao.min.svgz"
                className="__gen_terao"
                width="231"
                height="37"
              />
              <span className="__note">バルミューダ代表　寺尾 玄</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--story section--01 scrollLoader lazyload loaded">
        <img
          src="https://www.balmuda.com/jp/pot/img/story/mobile/section--01.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">ものより体験</h2>
            <p>
              2年前。私は一冊の本と出会いました。浅草の洋食店「レストラン大宮」のシェフが記したレシピブックです。その料理が食べたいだけならレストランに行ったほうが早いのに、一冊の本を私が買い求めた理由。それは週末に洋食屋さんのハンバーグを自分がつくり、それを食べた子ども達が大喜びしている姿が目に浮かんだからです。あの時私が買ったのは、一冊の本ではなくて、思い描いた週末の体験の方だったのではないかと考え始めました。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--03 scrollLoader lazyload loaded">
        <img
          src="https://www.balmuda.com/jp/pot/img/story/mobile/section--03.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">素晴らしい朝食</h2>
            <p>
              そんな経験がもとになって、ものより体験を提供しようと作ったのがバルミューダのトースターでした。このトースターは我が家でも大活躍中。パンがとてもおいしくなったので、これに合わせて鋳鉄製のフライパンでベーコンエッグを作るようになりました。すると、朝食が以前より断然楽しい体験に。そしてせっかくこんなにおいしい食べ物があるなら。丁寧に淹れたコーヒーを楽しみたいと思うようになったのは自然の流れだったと思います。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--04 scrollLoader lazyload loaded">
        <img
          src="https://www.balmuda.com/jp/pot/img/story/mobile/section--04.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">コーヒー、お茶、スープ</h2>
            <p>
              ハンドドリップでコーヒーを淹れてみたいと思い、練習してみて感じたのは世の中のやかんや電気ケトルの使いにくさでした。注ぎやすさと湯切れを実現するノズルやハンドルとは、どんな形なのか。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--05 scrollLoader lazyload loaded">
        <img
          src="https://www.balmuda.com/jp/pot/img/story/mobile/section--05.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">夜明けのカップヌードル</h2>
            <p>
              そういえば。カップヌードルで思い出しました。若いころ、バイクばかり乗っていた頃の話です。市街地や街道や森の中の道を走り回って、家に帰るのはいつも明け方。当時、家の近くの県道にカップヌードルの自動販売機があり、帰り道に私はいつもそこに寄りました。寒い中、誰もいない夜明けの道で食べる熱いカップヌードルは最高です。BALMUDA
              The Pot
              は、最高の注ぎ心地を実現しながら、お湯を出す速度にもこだわりました。カップヌードル。なるべくはやく食べたいですから。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
