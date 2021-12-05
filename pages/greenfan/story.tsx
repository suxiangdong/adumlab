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
              alt="GreenFan Japan"
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
              href="/support"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="section section--story section--00">
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">寻求不一样的风</h2>
            <p>
              设计一个跨时代的风扇吧带着这个想法开始了GreenFan的开发在开发过程中有必然的结果也有偶然的发现。
            </p>
            <div className="__sign">
              <img src="/_theme/img/svg/gen_terao.min.svgz" className="__gen_terao" />
              <span className="__note">BALMUDA, Inc. CEO 兼 首席设计师　寺尾 玄</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--story section--01 scrollLoader lazyload">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">沐浴在夏季的和风</h2>
            <p>
              那是在小学三年级的时候,朋友家里安装了空调,邀请我们去做客,刚刚开始的时候很惊讶那种凉爽的感觉,那个时候的孩子们很少见到空调,但很快就淡忘了,跑到外面去玩.因为在房间里没有有趣的事情,我们在小河里摸鱼,在街道的空房中冒险,汗流浃背,为了捉虫子,在靠近树的时候吹来的一阵风,骑车下坡时吹过身体的风,到现在也无法忘记。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--02 scrollLoader lazyload">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">自然风应该是没有漩涡的</h2>
            <p>
              那时候风自然的从房间吹过,心情非常愉悦,在2009年的时候,为了能够解决自然风和风扇风的差异,我们经过了反复的试验,发现风扇的风有独特的漩涡状结构.自然界的风是以一个面向墙推进,而风扇的风是边旋转边前进,那么能不能消除风扇风中的漩涡结构呢,这样的话,就可以享受从床子吹进来的风所带来的愉悦感了。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--03 scrollLoader lazyload">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">把风吹在墙上</h2>
            <p>
              改变风的灵感首先来源于工厂的工匠们，他们把风扇向墙吹，使风反射回来，为什么这么做？因为这样的风会变得柔和，也确实会变得柔和，风撞到墙上，漩涡就被打散了，成为了一个面的风
            </p>
            <p>终于有了目标。</p>
            <p>目标确定了，但是找到方法是一个很难的过程。</p>
          </div>
        </div>
      </div>

      <div className="section section--story section--04 scrollLoader lazyload">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">来自孩子们多人协同游戏游戏的提示</h2>
            <p>
              我们明白了漩涡成分被打开就能实现接近自然风的效果，但是风扇的风该撞到什么地方呢？偶然间在看电视的时候有30名孩子参加的2人3足游戏-30人组成的长长的一条直线，脚步快的孩子们不能像往常一样的速度；因为和旁边的孩子绑在了一起，很快就被脚步慢的孩子带乱了节奏，拼命前进的他们倒下了。
              --说不定风也可以这样，灵感总在意外的地方。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--05 scrollLoader lazyload">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title __wb">双层结构的扇叶</h2>
            <p>
              这样我们需要能够同时送出不同速度风的扇叶，内部速度慢的风吸引外部快速的风，很快撞到一起，漩涡成分还会存在吗？我们用试制品进行了试验，漩涡消失了，形成了一个面的自然风。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--06 scrollLoader lazyload">
        <div className="__image __is_mobile"></div>
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">GreenFan的诞生</h2>
            <p>
              实现了柔和的风，但是当时大都使用直流电机，转速太快了；为了实现风扇慢慢旋转我们使用了直流电机，这样就诞生了GreenFan。
            </p>
            <p>
              我觉得GreenFan的风非常舒服，午睡的时候，沙发、单子、还有GreenFan，又感受到了夏天舒适的风。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
