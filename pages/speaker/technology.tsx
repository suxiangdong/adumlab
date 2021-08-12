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
              <Link href="/speaker/setting">设置</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/speaker/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=M01A"
              className="btn btn--pagemap">
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
            <h2 className="page__title">释放音乐热能的技术</h2>
            <p>
              独特构造实现立体且清晰的音响效果。更搭配了与乐曲呼应的细致闪耀，
              <br />
              将音乐所饱含的能量传递到耳朵、眼睛
              <br />
              带来全新的音乐体验
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
            <p className="section__label">向上的构造</p>
            <h2 className="section__title">360°环绕，同样的音乐体验</h2>
            <p className="section__desc">
              独特的设计，向上设置的喇叭，声音向上方扩散，无论多少听众都无需在意倾听的位置，从各个角度乐享声音的乐趣。
            </p>
          </div>
          <div className="__box">
            <div className="__item __item__01">
              <p className="__title">一般横向的音箱</p>
              <img
                data-desktop="https://www.balmuda.com/jp/speaker/img/technology/desktop/section--01--00.png?20200421b"
                data-retina="https://www.balmuda.com/jp/speaker/img/technology/desktop/section--01--00@2x.png?20200421b"
                src="https://www.balmuda.com/jp/speaker/img/technology/desktop/section--01--00@2x.png?20200421b"
                className="adaptiveimage __image __image__01"
                data-model="black"
                alt=""
              />
              <p className="__txt">声音水平向前、最佳倾听区域有限。</p>
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
              <p className="__txt">上方扩散、各个方向都能同样聆听。</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--technology section--02 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <p className="section__label">77mm扬声器</p>
            <h2 className="section__title">优秀的表现力</h2>
            <p className="section__desc">
              77mm全音域喇叭，无缝再现完整音域，带来如同临场般的乐器与歌手声音。不被不自然的变调所扰，带来最真实的声音。
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
            <p className="section__label">独特的驱动模块</p>
            <h2 className="section__title">立体的音效</h2>
            <p className="section__desc">
              低音在下，高音在头顶，歌手的声音彷如眼前，搭载独特的驱动模块，带来立体且有深度的音效。
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
            <p className="section__label">密闭型包围</p>
            <h2 className="section__title">清晰有轮廓的声音</h2>
            <p className="section__desc">
              真空管般美丽的圆筒、由强度硬度兼备的有机玻璃制成。加之密闭型的结构设计，将空气封闭其中并产生共振，带来明亮且干净的声音。
            </p>
          </div>
        </div>
      </div>

      <div id="LED" className="section section--technology section--05 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <p className="section__label">LED模块组</p>
            <h2 className="section__title">让节奏感倍增的闪耀</h2>
            <p className="section__desc">
              结合乐曲节奏，向舞台上表演一般闪耀的LED模块组。微妙变化的光的颜色与亮度，缓急速度的变化，带来细致且复杂的闪耀演出，让乐曲的节奏感更加突出。
            </p>
            <Link href="/speaker/setting#live_light">
              <a className="section__btn">关于livelight功能</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="section section--technology section--06 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <p className="section__label">芯片算法</p>
            <h2 className="section__title">
              0.004秒的速度
              <br />
              让声音与光相呼应
            </h2>
            <p className="section__desc">
              独特的芯片算法，让光结合音乐，以在0.004秒的速度变换。不管是快歌或慢歌，都能完美融合。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
