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
              <Link href="/light/technology">科技与设计</Link>
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
                  <td>191mm(宽）x 264mm(深）x 463mm(高）</td>
                </tr>
                <tr>
                  <th>机身重量</th>
                  <td>约3.2kg</td>
                </tr>
                <tr>
                  <th>光源</th>
                  <td>3个灯珠</td>
                </tr>
                <tr>
                  <th>色温度</th>
                  <td>5700K</td>
                </tr>
                <tr>
                  <th>演色性</th>
                  <td>平均显色指数 Ra97</td>
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
                  <th>装饰功能</th>
                  <td>有(笔筒) 有 ON/OFF 按鍵</td>
                </tr>
                <tr>
                  <th>电源</th>
                  <td>220V</td>
                </tr>
                <tr>
                  <th>功率</th>
                  <td>14W</td>
                </tr>
                <tr>
                  <th>电源线长度</th>
                  <td>1.8m(AC适配器)</td>
                </tr>
                <tr>
                  <th>保修期限</th>
                  <td>自购买之日起 1 年</td>
                </tr>
                <tr>
                  <th>包装清单</th>
                  <td>主机、AC适配器、说明书、质保卡、贴纸</td>
                </tr>
                <tr>
                  <th>颜色</th>
                  <td>黑色（L01D-BK）</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>白色（L01D-WH）</td>
                </tr>
                <tr>
                  <th>产地</th>
                  <td>中国</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>本产品是中国大陆专用的。请注意在海外的使用不属于保修及修理受理的对象。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="section section--spec section--02">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">包装清单</h2>
            <div className="spec__item">
              <div className="spec__item--block">
                <figure className="spec__item--elm">
                  <img
                    data-mobile="/light/img/img1.png"
                    data-desktop="/light/img/img1.png"
                    data-retina="/light/img/img1.png"
                    className="__image adaptiveimage"
                    src="/light/img/img1.png"
                  />
                </figure>
              </div>
              <div className="spec__item--block">
                <figure className="spec__item--elm">
                  <img
                    data-mobile="/light/img/img2.png"
                    data-desktop="/light/img/img2.png"
                    data-retina="/light/img/img2.png"
                    className="__image adaptiveimage"
                    src="/light/img/img2.png"
                  />
                </figure>
                <figure className="spec__item--elm">
                  <img
                    data-mobile="/light/img/img3.png"
                    data-desktop="/light/img/img3.png"
                    data-retina="/light/img/img3.png"
                    className="__image adaptiveimage"
                    src="/light/img/img3.png"
                  />
                </figure>
              </div>
              <div className="spec__item--block">
                <figure className="spec__item--elm">
                  <img
                    data-mobile="/light/img/img4.png"
                    data-desktop="/light/img/img4.png"
                    data-retina="/light/img/img4.png"
                    className="__image adaptiveimage"
                    src="/light/img/img4.png"
                  />
                </figure>
                <figure className="spec__item--elm">
                  <img
                    data-mobile="/light/img/img5.png"
                    data-desktop="/light/img/img5.png"
                    data-retina="/light/img/img5.png"
                    className="__image adaptiveimage"
                    src="/light/img/img5.png"
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
