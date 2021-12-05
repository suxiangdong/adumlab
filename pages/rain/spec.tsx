import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'
import { useState } from 'react'

export default function ProductDetail() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = (e) => {
    e.preventDefault()
    setIsOpen(true)
  }

  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/rain/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/rain/style/desktop.css?20210701173839"></link>
					<script src="/createjs-2015.11.26.min.js"></script>
					<script src="/adapter.js?20210729145441"></script>
      </Head>

      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <Link href="/rain/">
            <a className="pagemap__content--logo text-2xl text-left">智能加湿器</a>
          </Link>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/rain/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--classic">
              <Link href="/rain/classic">经典先端</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--humidity ">
              <Link href="/rain/humidity">适宜的湿润度</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec __current">
              <Link href="/rain/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="/support?PRODUCT_SERIES=ERN-1100SD-WK"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="section section--spec section--00">
        <img
          data-mobile="https://www.balmuda.com/jp/rain/img/spec/mobile/section--00.jpg"
          data-desktop="https://www.balmuda.com/jp/rain/img/spec/desktop/section--00.jpg"
          data-retina="https://www.balmuda.com/jp/rain/img/spec/desktop/section--00@2x.jpg"
          className="adaptiveimage"
          src="https://www.balmuda.com/jp/rain/img/spec/desktop/section--00@2x.jpg"
        />
      </div>

      <div className="section section--spec section--01">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">产品规格</h2>
            <table className="__basic">
              <tbody>
                <tr>
                  <th>产品名称</th>
                  <td>智能加湿器</td>
                </tr>
                <tr>
                  <th>产品尺寸</th>
                  <td>宽 350mm × 长 350mm × 高 374mm</td>
                </tr>
                <tr>
                  <th>产品重量</th>
                  <td>约5.7kg（装满水时 约10kg）</td>
                </tr>
                <tr>
                  <th>运行功率</th>
                  <td>AC220V 50/60Hz</td>
                </tr>
                <tr>
                  <th>电线长度</th>
                  <td>1.8m（交流适配器的电线长度）</td>
                </tr>
                <tr>
                  <th>颜色</th>
                  <td>白色 (型号:1180）</td>
                </tr>
                <tr>
                  <th>
                    包装
                    <br />
                    内容
                  </th>
                  <td>
                    智能加湿器主机、使用说明书（附带保修单）、多功能插头适配器、加湿滤网、溶菌酶滤网
                  </td>
                </tr>
                <tr>
                  <th>产地</th>
                  <td>中国</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="section section--spec section--02 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title __wb">
              多功能插头
              <br />
              适配器
            </h2>
            <p>
              智能加湿器附带的多功能插头适配器可以将插头拔下，任意旋转90°。可以根据插座的位置及状况，方便地使用。
            </p>
            <div id="animation_container">
              <canvas
                id="canvas"
                width="219"
                height="424"
                style={{position: 'absolute', display: 'block'}}></canvas>
              <div
                id="dom_overlay_container"
                ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--spec section--03">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">性能／运转模式</h2>
            <table className="__basic mode">
              <tbody>
                <tr>
                  <th>加湿方式</th>
                  <td>气化式</td>
                </tr>
                <tr>
                  <th>运转模式</th>
                  <td className="mode_list">
                    <div>风量1</div>
                    <div>风量2</div>
                    <div>风量3</div>
                    <div>风量4</div>
                    <div>风量5</div>
                  </td>
                </tr>
                <tr>
                  <th>加湿能力 (*1)</th>
                  <td className="mode_list standard">
                    <div>150ml/h</div>
                    <div>250ml/h</div>
                    <div>400ml/h</div>
                    <div>500ml/h</div>
                    <div>600ml/h</div>
                  </td>
                </tr>
                <tr>
                  <th>耗电量</th>
                  <td>2W〜23W (*2)</td>
                </tr>
                <tr>
                  <th>运行声音</th>
                  <td>6db〜42db</td>
                </tr>
                <tr>
                  <th>适用房间面积</th>
                  <td>约28M² (*3)</td>
                </tr>
                <tr>
                  <th>供水盆容量</th>
                  <td>4.2L</td>
                </tr>
                <tr>
                  <th>连续加湿时间标准</th>
                  <td>6〜25小时</td>
                </tr>
              </tbody>
            </table>
            <p className="note">
              <span>*1 室温20°C，湿度30%时，加湿能力最大。</span>
              <span>*2 指显器亮度减半状态下，耗电量最小（2W）</span>
              <span>
                *3 适用面积根据（社）日本电机工业会标准（JEM
                1426）规定的预制式房间。加湿能力根据使用环境及剩余水量的不同而有所差别，适用面积为基准数据。
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="section section--spec section--04 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title __wb">
              获得各国
              <br />
              设计奖
            </h2>
            <p>
              智能加湿器荣获2014年度红点设计大奖（德国）、2014年度最佳设计大奖（日本）等国际权威性设计大奖、是获得了世界性认可的产品。
            </p>

            <div className="columns cf">
              <div className="column __award__gd">
                <p>
                  该奖项由公益财团法人日本设计振兴会主办，创立于1957年，是日本唯一的综合性设计奖，吸引了国内外众多企业和设计师参加。
                </p>
              </div>
              <div className="column __award__rd">
                <p>
                  德国「Design Zentrum Nordrhein
                  Westfalen」主办的世界最大规模的设计奖，根据创新性、功能性、人体工学、耐久性等9个审查标准，选出卓越的设计。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
