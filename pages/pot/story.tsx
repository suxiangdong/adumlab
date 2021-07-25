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
            <h2 className="page__title">BALMUDA电水壶的诞生</h2>
            <p>
              想要让厨房的体验更加快乐。
              <br />
              BALMUDA电水壶诞生，蕴含了许许多多的心思。
            </p>
            <div className="__sign">
              <img
                src="/_theme/img/svg/gen_terao.min.svgz"
                className="__gen_terao"
                width="231"
                height="37"
              />
              <span className="__note">巴慕达代表　寺尾 玄</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--story section--01 scrollLoader lazyload">
        <img
          src="https://www.balmuda.com/jp/pot/img/story/mobile/section--01.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">比起产品，更重要的是体验</h2>
            <p>
              2年前，我购买了一本书。这是一本位于浅草地区的西餐店“大宫餐厅”的主厨所撰写的食谱。其实只是为了吃的话，不如直接去店里，但是我却买了这本书。为什么呢？因为我脑海里浮现出的，是在周末自己制作这家西餐厅的汉堡饼时，孩子们品尝后开心雀跃的样子。那个时候我突然觉得，我买下的并不是一本书，而是脑海中描绘的周末体验。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--03 scrollLoader lazyload">
        <img
          src="https://www.balmuda.com/jp/pot/img/story/mobile/section--03.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">美好的早餐</h2>
            <p>
              以这次经历为契机，我们开发了重视提供体验的巴慕达电烤箱。这个电烤箱在我家也大派用场，面包更加美味，用铸铁的平底锅煎蛋和培根来搭配，早餐变成了比以前更加快乐的体验。如此美食当前，自然而然的就想要来一杯精心冲泡的咖啡。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--04 scrollLoader lazyload">
        <img
          src="https://www.balmuda.com/jp/pot/img/story/mobile/section--04.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">咖啡、红茶、汤</h2>
            <p>
              为了冲泡手冲咖啡，我进行了反复的练习，觉得现在市面上的手冲壶和电水壶，都不是十分顺手。于是我开始思考，能够实现最佳倾注的壶嘴和把手，应该是什么形状呢？制作了许多的试验品，也倾听了专业咖啡师的意见，BALMUDA电水壶渐渐成型。可以满足咖啡、红茶和汤、泡面等各个用图，让厨房和餐桌的体验更加快乐的设计。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--05 scrollLoader lazyload">
        <img
          src="https://www.balmuda.com/jp/pot/img/story/mobile/section--05.jpg"
          className="__section_image __is_mobile"
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">凌晨的杯面</h2>
            <p>
              突然想起一个关于杯面的回忆。年轻的时候，每天都骑着摩托车，在街道和森林里徘徊，回到家的时候都是凌晨了。那个时候，家附近的省道边设置了杯面的自动贩卖机，回家路上我经常会去买。在寒冷无人的凌晨街边吃到的热杯面，十分的美味。巴慕达电水壶不止可以实现细腻精准的倾注，出水的速度也经过了推敲。因为泡面，还是讲究速度。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
