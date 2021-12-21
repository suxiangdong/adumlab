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
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/greenfan-cirq/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--features">
              <Link href="/greenfan-cirq/features">改变室温</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology ">
              <Link href="/greenfan-cirq/technology">远达15米的送风距离</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design ">
              <Link href="/greenfan-cirq/design">设计</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--specs __current">
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

      <div className="section section--specs section--00">
        <img
          data-mobile="https://www.balmuda.com/jp/greenfan-cirq/img/specs/mobile/section--00.jpg"
          data-desktop="https://www.balmuda.com/jp/greenfan-cirq/img/specs/desktop/section--00.jpg"
          data-retina="https://www.balmuda.com/jp/greenfan-cirq/img/specs/desktop/section--00@2x.jpg"
          className="adaptiveimage"
          src="https://www.balmuda.com/jp/greenfan-cirq/img/specs/desktop/section--00@2x.jpg"
        />
      </div>
      <div className="section section--specs section--01">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">产品规格</h2>
            <table className="__basic">
              <tbody>
                <tr>
                  <th>产品名称</th>
                  <td>GreenFan Cirq（绿色循环）</td>
                </tr>
                <tr>
                  <th>产品尺寸</th>
                  <td>340mm（宽）× 256mm（长）× 360mm（高）</td>
                </tr>
                <tr>
                  <th>产品重量</th>
                  <td>约2.3kg</td>
                </tr>
                <tr>
                  <th>运行功率</th>
                  <td>AC220V 50/60Hz</td>
                </tr>
                <tr>
                  <th>电线长度</th>
                  <td>约1.8m（交流适配器的电线长度）</td>
                </tr>
                <tr>
                  <th>颜色</th>
                  <td>白色×黑色（型号：EGF-3390-WK）</td>
                </tr>
                <tr>
                  <th>
                    包装
                    <br />
                    内容
                  </th>
                  <td>
                    GreenFan Cirq本体使用说明书（附带保修单）、快速入门指南、交流适配器、遥控器
                  </td>
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
      <div className="section section--specs section--02">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">性能／运转模式</h2>
            <table className="__basic">
              <tbody>
                <tr>
                  <th>耗电量</th>
                  <td>3W 〜 20W</td>
                </tr>
                <tr>
                  <th>最大转速</th>
                  <td>850 rpm</td>
                </tr>
                <tr>
                  <th>最大风速</th>
                  <td>230 m/min</td>
                </tr>
                <tr>
                  <th>风到达的距离</th>
                  <td>15m</td>
                </tr>
                <tr>
                  <th>风量调节</th>
                  <td>1档、2档、3档、4档</td>
                </tr>
                <tr>
                  <th>手动角度调节</th>
                  <td>水平（0°）〜 垂直上向（90°）</td>
                </tr>
                <tr>
                  <th>主机操作</th>
                  <td>开关电源、切换风量</td>
                </tr>
                <tr>
                  <th>遥控器操作</th>
                  <td>开关电源、切换风量</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="section section--specs section--03 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title __wb">获奖经历</h2>
            <p>
              GreenFan
              Cirq荣获2012年度红点设计大奖（德国）等国际权威性设计大奖、是获得了世界性认可的产品。
            </p>

            <div className="columns cf">
              <div className="column __award__rd">
                <p>
                  由德国的Design Zentrum Nordrhein
                  Westfalen主办。是全球最大规模的设计大奖，按照创新、性能、人体工学耐久性等9项标准，选出卓越超群的设计产品。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
