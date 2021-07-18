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
            <li className="pagemap__content__item pagemap__content__item--technology">
              <Link href="/speaker/technology">科技</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story">
              <Link href="/speaker/story">故事</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--setting">
              <Link href="/speaker/setting">设置</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec __current">
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
      <div className="section section--spec section--00 scrollLoader lazyload loaded">
        <div className="__image_outer __is_desktop">
          <div className="__image_inner">
            <img
              data-desktop="https://www.balmuda.com/jp/speaker/img/spec/desktop/section--00.jpg?20200326"
              data-retina="https://www.balmuda.com/jp/speaker/img/spec/desktop/section--00@2x.jpg?20200326"
              src="https://www.balmuda.com/jp/speaker/img/spec/desktop/section--00@2x.jpg?20200326"
              className="adaptiveimage __image"
              data-model="black"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="section section--spec section--01">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">产品规格</h2>
            <table className="__basic">
              <tbody>
                <tr>
                  <th>产品名称</th>
                  <td>BALMUDA The Speaker</td>
                </tr>
                <tr>
                  <th>机身尺寸</th>
                  <td>直径105mm×高188mm</td>
                </tr>
                <tr>
                  <th>机身重量</th>
                  <td>约1.0kg</td>
                </tr>
                <tr>
                  <th>耗电量</th>
                  <td>最大15W、待机時0.15W</td>
                </tr>
                <tr>
                  <th>内置电池</th>
                  <td>
                    锂离子
                    <br />
                    聚合物电池
                  </td>
                </tr>
                <tr>
                  <th>
                    电池
                    <br />
                    充电时间
                  </th>
                  <td>约2.5小时</td>
                </tr>
                <tr>
                  <th>电池充放电</th>
                  <td>约500回</td>
                </tr>
                <tr>
                  <th>
                    电池
                    <br />
                    连续使用时间
                  </th>
                  <td>约7小时</td>
                </tr>
                <tr>
                  <th>扬声器部分</th>
                  <td>直径77mm(完整范围)</td>
                </tr>
                <tr>
                  <th>包围系统</th>
                  <td>密闭型</td>
                </tr>
                <tr>
                  <th>最大输出放大器</th>
                  <td>8W</td>
                </tr>
                <tr>
                  <th>外部入力端子（AUX）</th>
                  <td>
                    3.5mm 立体声
                    <br />
                    迷你杰克
                  </td>
                </tr>
                <tr>
                  <th>工作温度</th>
                  <td>0〜40℃</td>
                </tr>
                <tr>
                  <th>素材</th>
                  <td>底座部分:ABS，扬声器部分:ABS·铁，透明管部分:亚克力，金属管部分:SUS·黄铜</td>
                </tr>
                <tr>
                  <th>保证期限</th>
                  <td>自购买日起1年内</td>
                </tr>
                <tr>
                  <th>包装内容</th>
                  <td>主机，AC适配器(1.0m)，使用说明书(包含保证书)，开始指南</td>
                </tr>
                <tr>
                  <th>颜色</th>
                  <td>黑色(型号:M01A-BK, JAN代码:4560330118234)</td>
                </tr>
                <tr>
                  <th>产地</th>
                  <td>中国</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>本产品是日本国内专用的。请注意在海外的使用不属于保修及修理受理的对象。</td>
                </tr>
              </tbody>
            </table>
            <h2 className="section__title section__title_sub">
              Bluetooth<sup>®</sup>规格
            </h2>
            <table className="__basic">
              <tbody>
                <tr>
                  <th>通信方式</th>
                  <td>蓝牙标准 ver.5.0</td>
                </tr>
                <tr>
                  <th>出力</th>
                  <td>蓝牙标准 Power Class2</td>
                </tr>
                <tr>
                  <th>最大通信距离</th>
                  <td>约10 m</td>
                </tr>
                <tr>
                  <th>使用频段</th>
                  <td>2.4 GHz频段</td>
                </tr>
                <tr>
                  <th>对应配置文件</th>
                  <td>A2DP、AVRCP</td>
                </tr>
                <tr>
                  <th>兼容编译码器</th>
                  <td>SBC</td>
                </tr>
                <tr>
                  <th>内容保护</th>
                  <td>支持(SCMS-T)</td>
                </tr>
                <tr>
                  <th>传输频段(A2DP)</th>
                  <td>20 ~ 20,000 Hz (44.1 kHz采样时)</td>
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
            <img
              data-mobile="https://www.balmuda.com/jp/speaker/img/spec/mobile/section--02.png?20200326"
              data-desktop="https://www.balmuda.com/jp/speaker/img/spec/desktop/section--02.png?20200326"
              data-retina="https://www.balmuda.com/jp/speaker/img/spec/desktop/section--02@2x.png?20200326"
              className="__image adaptiveimage"
              alt="本体（×１）、ACアダプター（×１）、電源ケーブル（×１）、取扱説明書（保証証含む）（×１）"
              src="https://www.balmuda.com/jp/speaker/img/spec/desktop/section--02@2x.png?20200326"
            />
          </div>
        </div>
      </div>

      <div className="section section--spec section--03 scrollLoader lazyload loaded">
        <div className="viewport scrollLoader fadeInUp loaded">
          <div className="__content">
            <h2 className="section__title">获奖经历</h2>
            <p>BALMUDA The Speaker获得了2020年度最佳设计奖。</p>

            <div className="columns cf">
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
