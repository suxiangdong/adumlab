import Link from 'next/link'
import Head from 'next/head'
import ReactSlick from 'react-slick'
import Layout from '../../layouts/default'
import API from '../../effects/api'

export async function getServerSideProps() {
  try {
    const [banners] = await Promise.all([API.getBannersByCategory(4)])
    return { props: { banners } }
  } catch (error) {
    return { props: { banners: {} } }
  }
}

export default function ProductDetail({ banners }) {
  if (!Array.isArray(banners.data) || banners.data.length === 0) {
    banners.data = [0, 1, 2, 3, 4, 5].map((i) => ({
      id: i,
      path: `https://www.balmuda.com/jp/greenfan-cirq/img/index/desktop/billboard--0${i}@2x.jpg?20210505`
    }))
  }

  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/greenfan-cirq/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/greenfan-cirq/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <a href="/greenfan-cirq/" className="pagemap__content--logo">
            <img
              className="w-full"
              src="/_theme/img/svg/balmuda-greenfan-cirq.min.svgz"
              alt="GreenFan Cirq"
            />
          </a>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index __current">
              <Link href="/greenfan-cirq/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--features">
              <Link href="/greenfan-cirq/features">改变室温</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology">
              <Link href="/greenfan-cirq/technology">远达15米的送风距离</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design">
              <Link href="/greenfan-cirq/design">设计</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--specs">
              <Link href="/greenfan-cirq/specs">规格</Link>
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

      <div className="billboard__wrapper">
        <ReactSlick dots className="billboard">
          {banners.data.map((item) => (
            <img key={item.id} className="w-full" src={item.path} />
          ))}
        </ReactSlick>
      </div>

      <div className="section section--index section--00">
        <div className="__mainimage">
          <img
            data-mobile="https://www.balmuda.com/jp/greenfan-cirq/img/index/mobile/main.jpg"
            data-desktop="https://www.balmuda.com/jp/greenfan-cirq/img/index/desktop/main.jpg"
            data-retina="https://www.balmuda.com/jp/greenfan-cirq/img/index/desktop/main@2x.jpg"
            className="__image adaptiveimage"
            src="https://www.balmuda.com/jp/greenfan-cirq/img/index/desktop/main@2x.jpg"
          />
        </div>
        <div className="viewport">
          <h2 className="page__title __wb">风的使用方法</h2>
          <span className="label__block">空气循环扇</span>
          <p className="overview_text">
            打开冷暖设备时，地面与屋顶的最大温度差有时可达7°C。在有些季节里室内晾晒衣物，会使封闭的房间中产生发霉或异味。GreenFan
            Cirq能够通过前所未有的超大风量将强大的风力送达远端，使房间内空气充分循环。最大可节省20%的空调电费，室内晾晒衣物的时间最大可缩短3倍。
          </p>
          {/* <div className="the-price">
            <p className="price price--excl_tax" id="price2">
              20,160
            </p>
          </div> */}
        </div>
      </div>
      <Link href="/greenfan-cirq/features">
        <a>
          <div className="section section--index section--01 scrollLoader lazyload">
            <div className="viewport scrollLoader fadeInUp lazyload">
              <div className="__content">
                <h2 className="section__title">改变室温</h2>
                <p>
                  暖空气向上冷空气向下这是导致空调效率低的原因。<br />
                  GreenFan Cirq 能够在短短一分钟之内中和空气温度差，使房间温度均衡。
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
      <Link href="/greenfan-cirq/technology">
        <a>
          <div className="section section--index section--02 scrollLoader lazyload">
            <div className="viewport scrollLoader fadeInUp lazyload">
              <div className="__content">
                <h2 className="section__title">远达15米的送风距离届く</h2>
                <p>
                  独特的果岭风科技通过1组扇叶1送出2种风力，改变风力的方向及运动。达到搅动15m范围内室内空气，形成空气流动。最大适用面积约50M²。
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
      <Link href="/greenfan-cirq/design">
        <a>
          <div className="section section--index section--03 scrollLoader lazyload">
            <div className="viewport scrollLoader fadeInUp lazyload">
              <div className="__content">
                <h2 className="section__title">创新设计</h2>
                <p>自由方向调节，开关电源、风量切换一键设置，配备远程遥控，轻松操作。</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </Layout>
  )
}
