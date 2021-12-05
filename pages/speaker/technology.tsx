import Link from 'next/link'
import Head from 'next/head'
import ReactSlick from 'react-slick'
import Layout from '../../layouts/default'

export default function ProductDetail() {
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/speaker/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/speaker/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <Link href="/speaker/">
            <a className="pagemap__content--logo">
              <img src="/_theme/img/svg/balmuda-the-speaker.svgz" alt="BALMUDA The Speaker" />
            </a>
          </Link>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/speaker/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology __current">
              <Link href="/speaker/technology">科技</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story">
              <Link href="/speaker/story">故事</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--setting">
              <Link href="/speaker/setting">设定</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/speaker/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a href="/support?PRODUCT_SERIES=M01A" className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>
      <div className="section section--technology section--00">
        <img
          data-desktop="https://www.balmuda.com/jp/speaker/img/technology/desktop/section--00.jpg?20200421b"
          data-retina="https://www.balmuda.com/jp/speaker/img/technology/desktop/section--00@2x.jpg?20200421b"
          src="https://www.balmuda.com/jp/speaker/img/technology/desktop/section--00@2x.jpg?20200421b"
          className="adaptiveimage __image"
          data-model="black"
          alt=""
        />
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">释放音乐能量的技术</h2>
            <p>
              独特的结构可以实现立体且清晰的声音曲线
              <br />
              此外，还伴随着与歌曲同步的精确光效。
              <br />
              将音乐拥有的能量，透过听觉、视觉传递，创造崭新的音乐体验。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--technology section--01 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <img
            src="https://www.balmuda.com/jp/speaker//img/technology/mobile/section--01.jpg"
            className="__image__sp"
            alt=""
          />
          <div className="__content">
            <p className="section__label">向上发声的构造</p>
            <h2 className="section__title">360°随时随地</h2>
            <p className="section__desc">
              享受相同的音乐体验 扬声器向上的独特结构
              声音全方位向上传递，无论身在何处、任何人皆可尽情享受立体声效
            </p>
          </div>
          <div className="__box">
            <div className="__item __item__01">
              <p className="__title">一般单向音响</p>
              <img
                data-desktop="https://www.balmuda.com/jp/speaker/img/technology/desktop/section--01--00.png?20200421b"
                data-retina="https://www.balmuda.com/jp/speaker/img/technology/desktop/section--01--00@2x.png?20200421b"
                src="https://www.balmuda.com/jp/speaker/img/technology/desktop/section--01--00@2x.png?20200421b"
                className="adaptiveimage __image __image__01"
                data-model="black"
                alt=""
              />
              <p className="__txt text-center">由于声音为水平传递，因此聆听位置较小且局限。</p>
            </div>
            <div className="__item __item__02">
              <p className="__title">BALMUDA The Speaker</p>
              <img
                data-desktop="https://www.balmuda.com/jp/speaker/img/technology/desktop/section--01--01.png?20200421b"
                data-retina="https://www.balmuda.com/jp/speaker/img/technology/desktop/section--01--01@2x.png?20200421b"
                src="https://www.balmuda.com/jp/speaker/img/technology/desktop/section--01--01@2x.png?20200421b"
                className="adaptiveimage __image __image__02"
                data-model="black"
                alt=""
              />
              <p className="__txt text-center">
                声音向上传递，无需选择聆听位置，在任何地方皆能聆听同样的音乐。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--technology section--02 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <p className="section__label">77mm扬声器</p>
            <h2 className="section__title">重现音源本质</h2>
            <p className="section__desc">
              77mm全音域扬声器，无论乐器和人声都可以真实地重现
              不会感到不自然的失真或违和感，将真实的声音传递给聆听者
            </p>
          </div>
        </div>
      </div>

      <div className="section section--technology section--03 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <img
            src="https://www.balmuda.com/jp/speaker//img/technology/mobile/section--03.jpg"
            className="__image__sp"
            alt=""
          />
          <div className="__content">
            <p className="section__label">独特的驱动单元</p>
            <h2 className="section__title">立体声的表现</h2>
            <p className="section__desc">
              搭载特殊的驱动单元，使低音从下方共鸣，让高音在顶部发声，而人声的表现犹如在现场演唱一般，实现具有深度的立体表现
            </p>
          </div>
        </div>
      </div>

      <div className="section section--technology section--04 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <img
            src="https://www.balmuda.com/jp/speaker//img/technology/mobile/section--04.jpg"
            className="__image__sp"
            alt=""
          />
          <div className="__content">
            <p className="section__label">密闭型音箱</p>
            <h2 className="section__title">轮廓清晰的声音</h2>
            <p className="section__desc">
              复古真空管造型的美丽灯管是由强度与硬度兼具的有机玻璃所制成，透明的箱体采用了密闭式结构，内部密实的空气如弹簧般共鸣，发出清晰明亮的声音
            </p>
          </div>
        </div>
      </div>

      <div id="LED" className="section section--technology section--05 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <p className="section__label">LED 灯光</p>
            <h2 className="section__title">光线明暗 层次分明</h2>
            <p className="section__desc">
              根据歌曲律动闪耀的 LED
              灯光，让人宛如亲临演出现场一般，精确而复杂的光效由光线细微差距的颜色、亮度及闪烁速度的快慢组成，更近一步增强了一首歌曲的律动感
            </p>
            <Link href="/speaker/setting#live_light">
              <a className="section__btn">关于 LIGHT 功能</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="section section--technology section--06 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <p className="section__label">演算法</p>
            <h2 className="section__title">
              以0.004秒的速度
              <br />
              同步声音和光
            </h2>
            <p className="section__desc">
              根据独特的演算法，可在 0.004
              秒内将声音转换为光效。从快捷做的歌曲到安静的曲风，声音和美妙的光完美的融合在一起。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
