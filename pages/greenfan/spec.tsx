import { useState } from 'react'
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
            <li className="pagemap__content__item pagemap__content__item--story ">
              <Link href="/greenfan/story">故事</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec __current">
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

      <div className="section section--spec section--00">
        <img
          src="https://www.balmuda.com/jp/greenfan/img/spec/mobile/section--00.jpg"
          className="__image __is_mobile"
        />
      </div>

      <div className="section section--spec section--01">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">产品规格</h2>
            <table className="__basic">
              <tbody>
                <tr>
                  <th>产品尺寸</th>
                  <td>宽 330mm × 深 320mm × 高 871mm（落地）／ 497mm（台式）</td>
                </tr>
                <tr>
                  <th>机身重量</th>
                  <td>约4.1kg</td>
                </tr>
                <tr>
                  <th>电源</th>
                  <td>220V</td>
                </tr>
                <tr>
                  <th>耗电量</th>
                  <td>1.5W 〜 20W（电池未充电状态下）</td>
                </tr>
                <tr>
                  <th>电源线长度</th>
                  <td>约1.8m（交流适配器的电线长度）</td>
                </tr>
                <tr>
                  <th>保修期限</th>
                  <td>购买之日起1年</td>
                </tr>
                <tr>
                  <th>包装清单</th>
                  <td>主机，遥控器，多插件适配器，使用说明书（附保证书）</td>
                </tr>
                <tr>
                  <th>颜色</th>
                  <td>白色×黑色（型号:EGF-1700-WK, JAN代码:4560330110207）</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>白色×灰色（型号:EGF-1700-WG, JAN代码:4560330110214）</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>暗灰色×黑色（型号:EGF-1700-DK, JAN代码:4560330110238）</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>白色×香槟金（型号:EGF-1700-WC, JAN代码:4560330110221）</td>
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
        <ReactSlick dots className="spec--image" id="spec--image">
          <div className="spec--00">
            <img
              data-mobile="/greenfan/img/spec/01.jpg"
              data-desktop="/greenfan/img/spec/01.jpg"
              data-retina="/greenfan/img/spec/01.jpg"
              src="/greenfan/img/spec/01.jpg"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--01">
            <img
              data-mobile="/greenfan/img/spec/02.jpg"
              data-desktop="/greenfan/img/spec/02.jpg"
              data-retina="/greenfan/img/spec/02.jpg"
              src="/greenfan/img/spec/02.jpg"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--02">
            <img
              data-mobile="/greenfan/img/spec/03.jpg"
              data-desktop="/greenfan/img/spec/03.jpg"
              data-retina="/greenfan/img/spec/03.jpg"
              src="/greenfan/img/spec/03.jpg"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--03">
            <img
              data-mobile="/greenfan/img/spec/04.jpg"
              data-desktop="/greenfan/img/spec/04.jpg"
              data-retina="/greenfan/img/spec/04.jpg"
              src="/greenfan/img/spec/04.jpg"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--07">
            <img
              data-mobile="https://www.balmuda.com/jp/greenfan/img/spec/mobile/spec--07.jpg?20210408"
              data-desktop="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--07.jpg?20210408"
              data-retina="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--07@2x.jpg?20210408"
              src="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--07@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--09">
            <img
              data-mobile="https://www.balmuda.com/jp/greenfan/img/spec/mobile/spec--09.jpg?20210408"
              data-desktop="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--09.jpg?20210408"
              data-retina="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--09@2x.jpg?20210408"
              src="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--09@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--10">
            <img
              data-mobile="https://www.balmuda.com/jp/greenfan/img/spec/mobile/spec--10.jpg?20210408"
              data-desktop="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--10.jpg?20210408"
              data-retina="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--10@2x.jpg?20210408"
              src="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--10@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--04">
            <img
              data-mobile="https://www.balmuda.com/jp/greenfan/img/spec/mobile/spec--04.jpg?20210408"
              data-desktop="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--04.jpg?20210408"
              data-retina="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--04@2x.jpg?20210408"
              src="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--04@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--05">
            <img
              data-mobile="https://www.balmuda.com/jp/greenfan/img/spec/mobile/spec--05.jpg?20210408"
              data-desktop="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--05.jpg?20210408"
              data-retina="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--05@2x.jpg?20210408"
              src="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--05@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--06">
            <img
              data-mobile="https://www.balmuda.com/jp/greenfan/img/spec/mobile/spec--06.jpg?20210408"
              data-desktop="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--06.jpg?20210408"
              data-retina="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--06@2x.jpg?20210408"
              src="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--06@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
          <div className="spec--11">
            <img
              data-mobile="https://www.balmuda.com/jp/greenfan/img/spec/mobile/spec--11.jpg?20210408"
              data-desktop="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--11.jpg?20210408"
              data-retina="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--11@2x.jpg?20210408"
              src="https://www.balmuda.com/jp/greenfan/img/spec/desktop/spec--11@2x.jpg?20210408"
              className="__image adaptiveimage slick--lazy"
            />
          </div>
        </ReactSlick>
      </div>
      <div className="section section--spec section--03">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">性能／运转模式</h2>
            <div className="__wrapper">
              <table className="__basic">
                <tbody>
                  <tr>
                    <th>一天的电费标准</th>
                    <td>0.4日元(*1)</td>
                  </tr>
                  <tr>
                    <th>最小噪音</th>
                    <td>13dB (*2)</td>
                  </tr>
                  <tr>
                    <th>风到达的距离</th>
                    <td>15m</td>
                  </tr>
                  <tr>
                    <th>风量调节</th>
                    <td>4阶段</td>
                  </tr>
                  <tr>
                    <th>计时器</th>
                    <td>1・2・3・4时间</td>
                  </tr>
                  <tr>
                    <th>自动摇头</th>
                    <td>左右各最大75°</td>
                  </tr>
                  <tr>
                    <th>手动角度调节</th>
                    <td>左右各75° ／向上19° ／向下11°</td>
                  </tr>
                  {/* <tr>
                    <th>安全功能</th>
                    <td>
										电动机异常检测，电池异常检测，异常电压检测，自动断电(18小时无操作时)
                      (*3)
                    </td>
                  </tr> */}
                </tbody>
              </table>

              <p className="note">
                *1
                电气费是最弱运转1天运转8小时时的标准。电费以每千瓦时27日元计算。
                <br />
                *2 最小噪音是在无响室距离产品1米处测量的值。
                <br />
                *3 型号 :
                从EGF-1700开始自动关闭电源的无操作时间，从12小时延长到了18小时。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
