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
          href="/light/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/light/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <Link href="/light/">
            <a className="pagemap__content--logo">
              <img src="/_theme/img/svg/balmuda-the-light.min.svgz" alt="BALMUDA The Light" />
            </a>
          </Link>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/light/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology ">
              <Link href="/light/technology">科技</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--howto ">
              <Link href="/light/howto">使用方法</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec __current">
              <Link href="/light/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a href="/support?PRODUCT_SERIES=L01A" className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>
      <div className="section section--spec section--00">
        <ReactSlick
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          dots={true}
          dotsClass={'slick-dots'}
          customPaging={(i) => (
            <button
              type="button"
              role="tab"
              id={`slick-slide-control0${i}`}
              aria-controls="slick-slide00"
              aria-label="1 of 3"
              aria-selected="true">
              {i}
            </button>
          )}
          className="spec--image"
          id="spec--image">
          <div className="spec--00">
            <img
              data-mobile="https://www.balmuda.com/jp/light/img/spec/mobile/spec--00.jpg?20190222"
              data-desktop="https://www.balmuda.com/jp/light/img/spec/desktop/spec--00.jpg?20190222"
              data-retina="https://www.balmuda.com/jp/light/img/spec/desktop/spec--00@2x.jpg?20190222"
              src="https://www.balmuda.com/jp/light/img/spec/desktop/spec--00@2x.jpg?20190222"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--01">
            <img
              data-mobile="https://www.balmuda.com/jp/light/img/spec/mobile/spec--01.jpg?20190222"
              data-desktop="https://www.balmuda.com/jp/light/img/spec/desktop/spec--01.jpg?20190222"
              data-retina="https://www.balmuda.com/jp/light/img/spec/desktop/spec--01@2x.jpg?20190222"
              src="https://www.balmuda.com/jp/light/img/spec/desktop/spec--01@2x.jpg?20190222"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--02">
            <img
              data-mobile="https://www.balmuda.com/jp/light/img/spec/mobile/spec--02.jpg?20190222"
              data-desktop="https://www.balmuda.com/jp/light/img/spec/desktop/spec--02.jpg?20190222"
              data-retina="https://www.balmuda.com/jp/light/img/spec/desktop/spec--02@2x.jpg?20190222"
              src="https://www.balmuda.com/jp/light/img/spec/desktop/spec--02@2x.jpg?20190222"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
        </ReactSlick>
      </div>
      <div className="section section--spec section--01">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">产品规格</h2>
            <table className="__basic">
              <tbody>
                <tr>
                  <th>产品尺寸</th>
                  <td>宽 191 毫米，深 264 毫米，高 463 毫米（标准姿势）</td>
                </tr>
                <tr>
                  <th>机身重量</th>
                  <td>约3.2kg</td>
                </tr>
                <tr>
                  <th>光源</th>
                  <td>LED 3灯</td>
                </tr>
                <tr>
                  <th>色温度</th>
                  <td>5700K</td>
                </tr>
                <tr>
                  <th>演色性</th>
                  <td>平均显色指数 Ra97 或更高</td>
                </tr>
                <tr>
                  <th>光源寿命</th>
                  <td>40,000个小时</td>
                </tr>
                <tr>
                  <th>器具光束</th>
                  <td>430lm</td>
                </tr>
                <tr>
                  <th>调光功能</th>
                  <td>6段（15〜100％）</td>
                </tr>
                <tr>
                  <th>照明功能</th>
                  <td>是（工具箱）带开/关开关</td>
                </tr>
                <tr>
                  <th>电源</th>
                  <td>AC100V 50 / 60Hz 共享（交流适配器）</td>
                </tr>
                <tr>
                  <th>耗电量</th>
                  <td>全灯时最大14W、消灯时0.1W以下</td>
                </tr>
                <tr>
                  <th>电源线长度</th>
                  <td>1.8m（交流适配器）</td>
                </tr>
                <tr>
                  <th>保修期限</th>
                  <td>自购买之日起 1 年</td>
                </tr>
                <tr>
                  <th>包装内容</th>
                  <td>主机、电源适配器、使用说明书、保修卡、贴纸</td>
                </tr>
                <tr>
                  <th>颜色</th>
                  <td>黑色（型号:L01A-BK，JAN 代码: 4560330119828）</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>白色（型号:L01A-WH、JAN 代码: 4560330119835）</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>米色（型号:L01A-BG、JAN 代码: 4560330119859）</td>
                </tr>
                <tr>
                  <th>用途</th>
                  <td>家庭用　屋内用　学习・阅读用</td>
                </tr>
                <tr>
                  <th>产地</th>
                  <td>日本</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="section section--spec section--02">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">随货内容一览表</h2>
            <div className="spec__item">
              <div className="spec__item--block">
                <figure className="spec__item--elm">
                  <img
                    data-mobile="https://www.balmuda.com/jp/light/img/spec/mobile/img1.png"
                    data-desktop="https://www.balmuda.com/jp/light/img/spec/desktop/img1.png"
                    data-retina="https://www.balmuda.com/jp/light/img/spec/desktop/img1@2x.png"
                    className="__image adaptiveimage"
                    src="https://www.balmuda.com/jp/light/img/spec/desktop/img1@2x.png"
                  />
                </figure>
              </div>
              <div className="spec__item--block">
                <figure className="spec__item--elm">
                  <img
                    data-mobile="https://www.balmuda.com/jp/light/img/spec/mobile/img2.png"
                    data-desktop="https://www.balmuda.com/jp/light/img/spec/desktop/img2.png"
                    data-retina="https://www.balmuda.com/jp/light/img/spec/desktop/img2@2x.png"
                    className="__image adaptiveimage"
                    src="https://www.balmuda.com/jp/light/img/spec/desktop/img2@2x.png"
                  />
                </figure>
                <figure className="spec__item--elm">
                  <img
                    data-mobile="https://www.balmuda.com/jp/light/img/spec/mobile/img3.png"
                    data-desktop="https://www.balmuda.com/jp/light/img/spec/desktop/img3.png"
                    data-retina="https://www.balmuda.com/jp/light/img/spec/desktop/img3@2x.png"
                    className="__image adaptiveimage"
                    src="https://www.balmuda.com/jp/light/img/spec/desktop/img3@2x.png"
                  />
                </figure>
              </div>
              <div className="spec__item--block">
                <figure className="spec__item--elm">
                  <img
                    data-mobile="https://www.balmuda.com/jp/light/img/spec/mobile/img4.png"
                    data-desktop="https://www.balmuda.com/jp/light/img/spec/desktop/img4.png"
                    data-retina="https://www.balmuda.com/jp/light/img/spec/desktop/img4@2x.png"
                    className="__image adaptiveimage"
                    src="https://www.balmuda.com/jp/light/img/spec/desktop/img4@2x.png"
                  />
                </figure>
                <figure className="spec__item--elm">
                  <img
                    data-mobile="https://www.balmuda.com/jp/light/img/spec/mobile/img5.png"
                    data-desktop="https://www.balmuda.com/jp/light/img/spec/desktop/img5.png"
                    data-retina="https://www.balmuda.com/jp/light/img/spec/desktop/img5@2x.png"
                    className="__image adaptiveimage"
                    src="https://www.balmuda.com/jp/light/img/spec/desktop/img5@2x.png"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--spec section--03">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">倾斜角度和照射范围</h2>
            <div className="specimages">
              <div className="specimage __1">
                <img
                  data-mobile="https://www.balmuda.com/jp/light/img/spec/mobile/img6-1.png?20190222"
                  data-desktop="https://www.balmuda.com/jp/light/img/spec/desktop/img6-1.png?20190222"
                  data-retina="https://www.balmuda.com/jp/light/img/spec/desktop/img6-1@2x.png?20190222"
                  className="__image adaptiveimage"
                  src="https://www.balmuda.com/jp/light/img/spec/desktop/img6-1@2x.png?20190222"
                />
              </div>
              <div className="specimage __2">
                <img
                  data-mobile="https://www.balmuda.com/jp/light/img/spec/mobile/img6-2.png?20190222"
                  data-desktop="https://www.balmuda.com/jp/light/img/spec/desktop/img6-2.png?20190222"
                  data-retina="https://www.balmuda.com/jp/light/img/spec/desktop/img6-2@2x.png?20190222"
                  className="__image adaptiveimage"
                  src="https://www.balmuda.com/jp/light/img/spec/desktop/img6-2@2x.png?20190222"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--spec section--04 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">获奖经历</h2>
            <p>BALMUDA The Light 荣获 2019 Good Design Award 和 2019 Kids Design Award。</p>

            <div className="columns cf">
              <div className="column __award__kids--2019">
                <p>
                  儿童设计奖从“有助于儿童安全和保障的设计”、“开启儿童创造力和未来的设计”和“易于生育和抚养的设计”三个角度评选优秀产品孩子们。”{' '}
                </p>
              </div>
              <div className="column __award__gd">
                <p>
                  该奖项由公益财团法人日本设计振兴会主办，创立于1957年，是日本唯一的综合性设计奖，吸引了国内外众多企业和设计师参加。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
