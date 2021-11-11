import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'
import { useState } from 'react'

export default function ProductDetail() {
  const [current, setCurrent] = useState(0)

  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/pure/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/pure/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <Link href="/pure/">
            <a className="pagemap__content--logo">
              <img
                className="w-full"
                src="/_theme/img/svg/balmuda-the-pure.min.svgz"
                alt="BALMUDA The Pure"
              />
            </a>
          </Link>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/pure/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology">
              <Link href="/pure/technology">科技</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--design ">
              <Link href="/pure/design">设计</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--howto">
              <Link href="/pure/howto">使用方法</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec __current">
              <Link href="/pure/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="/support?PRODUCT_SERIES=A01A"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>

      <div className="section section--spec section--00 scrollLoader lazyload">
        <div className="__image_outer __is_desktop">
          <div className="__image_inner">
            <img
              data-desktop="https://www.balmuda.com/jp/pure/img/spec/desktop/section--00.jpg?20181023"
              data-retina="https://www.balmuda.com/jp/pure/img/spec/desktop/section--00@2x.jpg?20181023"
              src="https://www.balmuda.com/jp/pure/img/spec/desktop/section--00.jpg?20181023"
              className={`adaptiveimage __image ${current === 0 ? '__current' : ''}`}
              data-model="white"
              alt=""
            />
            <img
              data-desktop="https://www.balmuda.com/jp/pure/img/spec/desktop/section--01.jpg?20181023"
              data-retina="https://www.balmuda.com/jp/pure/img/spec/desktop/section--01@2x.jpg?20181023"
              src="https://www.balmuda.com/jp/pure/img/spec/desktop/section--01.jpg?20181023"
              className={`adaptiveimage __image ${current === 1 ? '__current' : ''}`}
              data-model="darkgray"
              alt=""
            />
          </div>
        </div>
        <div className="__image_outer __is_mobile">
          <div className="__image_inner" id="pure--spec--mobile">
            <div className="__image_item">
              <img
                src="https://www.balmuda.com/jp/pure/img/spec/mobile/spec--00.jpg?20181023"
                className="__image adaptiveimage slick--lazy __current"
                data-model="white"
                alt=""
              />
              <img
                src="https://www.balmuda.com/jp/pure/img/spec/mobile/spec--04.jpg?20181023"
                className="__image adaptiveimage slick--lazy"
                data-model="darkgray"
                alt=""
              />
            </div>
            <div className="__image_item">
              <img
                src="https://www.balmuda.com/jp/pure/img/spec/mobile/spec--01.jpg?20181023"
                className="__image adaptiveimage slick--lazy __current"
                data-model="white"
                alt=""
              />
              <img
                src="https://www.balmuda.com/jp/pure/img/spec/mobile/spec--05.jpg?20181023"
                className="__image adaptiveimage slick--lazy"
                data-model="darkgray"
                alt=""
              />
            </div>
            <div className="__image_item">
              <img
                src="https://www.balmuda.com/jp/pure/img/spec/mobile/spec--02.jpg?20181023"
                className="__image adaptiveimage slick--lazy __current"
                data-model="white"
                alt=""
              />
              <img
                src="https://www.balmuda.com/jp/pure/img/spec/mobile/spec--06.jpg?20181023"
                className="__image adaptiveimage slick--lazy"
                data-model="darkgray"
                alt=""
              />
            </div>
            <div className="__image_item">
              <img
                src="https://www.balmuda.com/jp/pure/img/spec/mobile/spec--03.jpg?20181023"
                className="__image adaptiveimage slick--lazy __current"
                data-model="white"
                alt=""
              />
              <img
                src="https://www.balmuda.com/jp/pure/img/spec/mobile/spec--07.jpg?20181023"
                className="__image adaptiveimage slick--lazy"
                data-model="darkgray"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="__selector_wrap">
          <span
            className={`__selector ${current === 0 ? '__current' : ''}`}
            data-model="white"
            onClick={() => setCurrent(0)}>
            白色
          </span>
          <span
            className={`__selector ${current === 1 ? '__current' : ''}`}
            data-model="darkgray"
            onClick={() => setCurrent(1)}>
            深灰色
          </span>
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
                  <td>BALMUDA The Pure</td>
                </tr>
                <tr>
                  <th>产品尺寸</th>
                  <td>250mm（宽）× 250mm（长）× 700mm（高）</td>
                </tr>
                <tr>
                  <th>产品重量（包括过滤器）</th>
                  <td>约7.4kg</td>
                </tr>
                <tr>
                  <th>电源</th>
                  <td>AC220V 50/60Hz</td>
                </tr>
                <tr>
                  <th>耗电量</th>
                  <td>2〜72W</td>
                </tr>
                <tr>
                  <th>电线长度</th>
                  <td>交流电源线：1米／直流电源线1.8米（交流电源适配器 电源线长度）</td>
                </tr>
                <tr>
                  <th>颜色</th>
                  <td>白色(型号：A01A-WH，JAN代码：4560330119958）</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>深灰色(型号：A01A-GR，JAN代码：4560330119460）</td>
                </tr>
                <tr>
                  <th>包装内容</th>
                  <td>主机、使用说明书（保证书）、电源适配器、360°溶菌酶滤网</td>
                </tr>
                <tr>
                  <th>保修期限</th>
                  <td>自购买日起1年内</td>
                </tr>
                <tr>
                  <th>更换用滤网</th>
                  <td>
                    集尘、除臭过滤器套装(A01A-P100)
                    <br />
                    除尘过滤器(A01A-S100)、除臭过滤器(A01A-D100)
                  </td>
                </tr>
                <tr>
                  <th>产地</th>
                  <td>中国</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>本产品是日本国内专用的。请注意在海外的使用不属于保修及修理受理的对象。 </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="section section--spec section--02">
        <div className="viewport">
          <div className="__content">
            <h2 className="section__title">性能／运转模式</h2>
            <table className="__basic">
              <tbody>
                <tr>
                  <th>标准适用面积</th>
                  <td>41m²以下（*1）</td>
                </tr>
                <tr>
                  <th>空气净化时间</th>
                  <td>10m²/6分钟（*1）</td>
                </tr>
                <tr>
                  <th>运转模式 / 清洁风量</th>
                  <td>
                    风量1 / 0.3㎥/min
                    <br />
                    风量2 / 1.5㎥/min
                    <br />
                    风量3 / 4.8㎥/min
                    <br />
                    喷气清洗 / 7.3㎥/min
                  </td>
                </tr>
                <tr>
                  <th>运行分贝</th>
                  <td>60dB 50dB 40dB 30dB 15dB 7dB以下</td>
                </tr>
              </tbody>
            </table>
            <p className="note">
              *1 适用面积以及清洁时间的数值是按照日本JEM1467标准检测的数值（使用喷射清洁模式）。
            </p>
          </div>
        </div>
      </div>

      <div id="maintenance" className="section section--spec section--03">
        <div className="viewport">
          <h2 className="section__title __wb">
            <span>维护</span>
          </h2>
          <div className="__column __01 scrollLoader fadeInUp lazyload">
            <div className="__content">
              <h3 className="column__title">可以水洗</h3>
              <p>
                BALMUDA The Pure 保养简单
                <br />
                可以取下容易积灰尘的零件进行水洗。可以经常保持清洁。
              </p>
            </div>
            <div className="__img">
              <img
                data-mobile="https://www.balmuda.com/jp/pure/img/spec/mobile/spec-img1.jpg"
                data-desktop="https://www.balmuda.com/jp/pure/img/spec/desktop/spec-img1.jpg"
                data-retina="https://www.balmuda.com/jp/pure/img/spec/desktop/spec-img1@2x.jpg"
                className="__image adaptiveimage"
                alt=""
                src="https://www.balmuda.com/jp/pure/img/spec/desktop/spec-img1@2x.jpg"
              />
            </div>
          </div>
          <div className="__column __02 scrollLoader fadeInUp lazyload">
            <div className="__content">
              <h3 className="column__title">滤网的保养</h3>
              <p>
                打开主机背板，就可以看到滤网。在运转了500小时后，滤网清洁指示灯会点亮，此时请对滤网表面进行清洁。
              </p>
            </div>
            <div className="__img">
              <img
                data-mobile="https://www.balmuda.com/jp/pure/img/spec/mobile/spec-img2.jpg"
                data-desktop="https://www.balmuda.com/jp/pure/img/spec/desktop/spec-img2.jpg"
                data-retina="https://www.balmuda.com/jp/pure/img/spec/desktop/spec-img2@2x.jpg"
                className="__image adaptiveimage"
                alt=""
                src="https://www.balmuda.com/jp/pure/img/spec/desktop/spec-img2@2x.jpg"
              />
            </div>
          </div>
          <div className="__column __03 scrollLoader fadeInUp lazyload">
            <div className="__content">
              <h3 className="column__title">一年更换一次滤网</h3>
              <p>
                BALMUDA The Pure的滤网会吸入大量的漂浮物和灰尘。为了保持本来的性能，建议1年更换1次。
              </p>
            </div>
            <div className="__img">
              <img
                data-mobile="https://www.balmuda.com/jp/pure/img/spec/mobile/spec-img3.jpg"
                data-desktop="https://www.balmuda.com/jp/pure/img/spec/desktop/spec-img3.jpg"
                data-retina="https://www.balmuda.com/jp/pure/img/spec/desktop/spec-img3@2x.jpg"
                className="__image adaptiveimage"
                alt=""
                src="https://www.balmuda.com/jp/pure/img/spec/desktop/spec-img3@2x.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section section--spec section--04 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">获奖经历</h2>
            <p>
              BALMUDA The
              Pure获得2019年度优秀设计奖、2020年度儿童设计奖优秀奖、获得了经济产业大臣奖。
            </p>

            <div className="columns cf">
              <div className="column __award__if">
                <p>
                  德国“iF International Forum design
                  Gmbh”举办的iF设计大奖。有超过半个世纪的历史,是最具世界权威的设计大奖,以全世界的工业产品为评选对象,评审出卓越拔群的工业设计产品。
                </p>
              </div>
              <div className="column __award__gd">
                <p>
                  该奖项由公益财团法人日本设计振兴会主办，创立于1957年，是日本唯一的综合性设计奖，吸引了国内外众多企业和设计师参加。
                </p>
              </div>
              <div className="column __award__kids">
                <p>荣获优秀奖经济产业大臣奖</p>
                <p>
                  儿童设计奖从“为孩子们的安全·安心做贡献的设计”“开拓孩子们的创造性和未来的设计”“容易生养孩子们的设计”这3个视点选出优秀的产品。
                  <br />
                  <br />
                  优秀奖
                  经济产业大臣奖作为理由,“最新的科技,因此大容量的空气的循环,实现了天空气净化器。另外上部的球迷被卷入不受伤,没有被套牢不能周转和球迷结构。正在旋转的时候,外盖和进展的那一刻,也有球迷停止功能。实现非常高的安全性和卫生空间正在被分,成熟的曲线同时高度评价了。”收到了这样的评论。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
