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
          href="/pot/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/pot/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <a href="/pot/" className="pagemap__content--logo">
            <img src="/_theme/img/svg/balmuda-the-pot.min.svgz" alt="BALMUDA The Pot" />
          </a>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/pot/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design ">
              <Link href="/pot/design">设计</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story ">
              <Link href="/pot/story">故事</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec __current">
              <Link href="/pot/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__dropdown hidden" id="greedynav--btn">
            <span className="pagemap__dropdown__btn"></span>
            <ul className="pagemap__dropdown__content"></ul>
          </div>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=K02A"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="section section--spec section--00">
        <ReactSlick
          infinite={true}
					arrows={false}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          dots={true}
          dotsClass={'slick_selector_wrapper flex-imp justify-center'}
          customPaging={(i) => (
            <span className="slick_selector __black inline-block mx-1 box-content" data-slick-option="0">
              {i === 0 ? '黑色' : '白色'}
            </span>
          )}
          className="spec_model_image slick-initialized">
          <div className="bk">
            <img
              data-mobile="https://www.balmuda.com/jp/pot/img/spec/mobile/bk.jpg?20200929"
              data-desktop="https://www.balmuda.com/jp/pot/img/spec/desktop/bk.jpg?20200929"
              data-retina="https://www.balmuda.com/jp/pot/img/spec/desktop/bk@2x.jpg?20200929"
              className="__image adaptiveimage"
              src="https://www.balmuda.com/jp/pot/img/spec/desktop/bk@2x.jpg?20200929"
            />
          </div>
          <div className="wh">
            <img
              data-mobile="https://www.balmuda.com/jp/pot/img/spec/mobile/wh.jpg?20200929"
              data-desktop="https://www.balmuda.com/jp/pot/img/spec/desktop/wh.jpg?20200929"
              data-retina="https://www.balmuda.com/jp/pot/img/spec/desktop/wh@2x.jpg?20200929"
              className="__image adaptiveimage"
              src="https://www.balmuda.com/jp/pot/img/spec/desktop/wh@2x.jpg?20200929"
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
                  <td>机身 : 宽 269mm × 长 128mm × 高 170mm</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>电源底座 : 宽 269mm × 长 142mm × 高 194mm</td>
                </tr>
                <tr>
                  <th>机身重量</th>
                  <td>本体 : 约0.6kg</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>电源底座 : 约0.3kg</td>
                </tr>
                <tr>
                  <th>容量</th>
                  <td>0.6L（升）</td>
                </tr>
                <tr>
                  <th>电源</th>
                  <td>AC100V　50Hz/60Hz</td>
                </tr>
                <tr>
                  <th>定格耗电量</th>
                  <td>1200W</td>
                </tr>
                <tr>
                  <th>电源线长度</th>
                  <td>1.3m</td>
                </tr>
                <tr>
                  <th>素材</th>
                  <td>机身:不锈钢盖子，手柄:聚丙烯</td>
                </tr>
                <tr>
                  <th>安全功能</th>
                  <td>防空功能、自动电源关闭功能</td>
                </tr>
                <tr>
                  <th>煮沸时间的标准</th>
                  <td>
                    200ml 约1分半 / 600ml (满水时) 约3分钟
                    <br />
                    *水温25度时的标准。根据使用环境的不同而前后不同。
                  </td>
                </tr>
                <tr>
                  <th>保修期限</th>
                  <td>自购买日起1年内</td>
                </tr>
                <tr>
                  <th>包装内容</th>
                  <td>主机，盖子，电源底座，使用说明书(附保证书)</td>
                </tr>
                <tr>
                  <th>颜色</th>
                  <td>黑色 (型号 : K02A-BK, JAN代码: 4560330117718）</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>白色(型号 : K02A-WH, JAN代码: 4560330117725)</td>
                </tr>
                <tr>
                  <th>产地</th>
                  <td>台湾、中国</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>本产品是日本国内专用的。请注意在海外的使用不属于保修及修理受理的对象。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="section section--spec section--02 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">各部的名字</h2>
            <div className="__imagewrap">
              <img
                data-mobile="https://www.balmuda.com/jp/pot/img/spec/mobile/wire.png"
                data-desktop="https://www.balmuda.com/jp/pot/img/spec/desktop/wire.png"
                data-retina="https://www.balmuda.com/jp/pot/img/spec/desktop/wire@2x.png"
                className="__image adaptiveimage"
                src="https://www.balmuda.com/jp/pot/img/spec/desktop/wire@2x.png"
              />
            </div>
            <p>电源线可以收纳在电源底部的电源线夹里。设置的时候请调节到适当的长度使用。</p>
          </div>
        </div>
      </div>

      <div className="section section--spec section--03 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">关于保养</h2>
            <div className="__imagewrap">
              <img
                data-mobile="https://www.balmuda.com/jp/pot/img/spec/mobile/maintenance.png"
                data-desktop="https://www.balmuda.com/jp/pot/img/spec/desktop/maintenance.png"
                data-retina="https://www.balmuda.com/jp/pot/img/spec/desktop/maintenance@2x.png"
                className="__image adaptiveimage"
                src="https://www.balmuda.com/jp/pot/img/spec/desktop/maintenance@2x.png"
              />
            </div>
            <p>
              本体(内侧)请用水漂洗。主体(外侧)、电源基本部、盖子，请用柔软的布等浸透水，拧干后擦拭。
            </p>
            <p className="note">
              *
              如果担心身体内部的污垢的话，可以用市面上卖的颗粒类型的柠檬酸涂抹后清洗。详细信息请看说明书。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--spec section--04 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">获奖经历</h2>
            <p>
              BALMUDA The
              Pot曾荣获2017年度优秀设计奖、2017年度iF设计奖(德国)、2017年度红点设计奖(德国)等国际权威设计奖，得到世界各国的认可。
            </p>
            <p></p>
            <div className="columns cf">
              <div className="column __award__gd">
                <p>
                  该奖项由公益财团法人日本设计振兴会主办，创立于1957年，是日本唯一的综合性设计奖，吸引了国内外众多企业和设计师参加。
                </p>
              </div>
              <div className="column __award__if">
                <p>
                  德国「iF International Forum Design
                  GmbH」主办的具有半个多世纪历史的世界权威设计奖，以全世界的工业产品为对象评选优秀的工业设计。
                </p>
              </div>
              <div className="column __award__rd">
                <p>
                  由德国的「Design Zentrum Nordrhein
                  Westfalen」主办的世界最大级别的设计奖，根据创新性、功能性、人体工学、耐久性等9个审查标准，选出卓越的设计。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
