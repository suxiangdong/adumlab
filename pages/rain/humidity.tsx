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
            <li className="pagemap__content__item pagemap__content__item--humidity __current">
              <Link href="/rain/humidity">适宜的湿润度</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
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

      <div className="section section--humidity section--00">
        <img
          data-mobile="https://www.balmuda.com/jp/rain/img/humidity/mobile/section--00.jpg"
          data-desktop="https://www.balmuda.com/jp/rain/img/humidity/desktop/section--00.jpg"
          data-retina="https://www.balmuda.com/jp/rain/img/humidity/desktop/section--00@2x.jpg"
          className="__image adaptiveimage m-auto"
          src="https://www.balmuda.com/jp/rain/img/humidity/desktop/section--00@2x.jpg"
        />
        <div className="viewport">
          <div className="__content">
            <h2 className="page__title">适宜的湿润度</h2>
            <p>
              干燥空气会激发病毒活性。湿度过高霉菌易于繁殖。采用气化式加湿方式的智能加湿器能够有效抑制上述情况的发生，自然地营造出感觉舒适的50%湿润度。50%湿润度也最有益于保持房间和家具的良好状态。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--humidity section--01 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title __wb">
              使用自然原理
              <br />
              气化式加湿
            </h2>

            <div className="mode_column">
              <div>
                <img
                  data-mobile="https://www.balmuda.com/jp/rain/img/humidity/mobile/section--01_icn_01.jpg"
                  data-desktop="https://www.balmuda.com/jp/rain/img/humidity/desktop/section--01_icn_01.jpg"
                  data-retina="https://www.balmuda.com/jp/rain/img/humidity/desktop/section--01_icn_01@2x.jpg"
                  className="adaptiveimage"
                  src="https://www.balmuda.com/jp/rain/img/humidity/desktop/section--01_icn_01@2x.jpg"
                />
                <h3>超声波方式</h3>
                <p>
                  加湿方式主要包括三种。超声波方式是通过水的振动，直接将气体分解为细小的水颗粒排放到室内的方法。如果原来的水中含有杂菌等也会同时被排放到室内。
                </p>
              </div>
              <div>
                <img
                  data-mobile="https://www.balmuda.com/jp/rain/img/humidity/mobile/section--01_icn_02.jpg"
                  data-desktop="https://www.balmuda.com/jp/rain/img/humidity/desktop/section--01_icn_02.jpg"
                  data-retina="https://www.balmuda.com/jp/rain/img/humidity/desktop/section--01_icn_02@2x.jpg"
                  className=" adaptiveimage"
                  src="https://www.balmuda.com/jp/rain/img/humidity/desktop/section--01_icn_02@2x.jpg"
                />
                <h3>加热方式</h3>
                <p>
                  加热方式是通过加热器将水加热为蒸汽，并排放到空间的方法。如果蒸汽温度过高，加湿程度过重，会导致水蒸汽在室内结露。因为使用了加热器，与其他方式相比耗电量大。
                </p>
              </div>
              <div>
                <img
                  data-mobile="https://www.balmuda.com/jp/rain/img/humidity/mobile/section--01_icn_03.jpg"
                  data-desktop="https://www.balmuda.com/jp/rain/img/humidity/desktop/section--01_icn_03.jpg"
                  data-retina="https://www.balmuda.com/jp/rain/img/humidity/desktop/section--01_icn_03@2x.jpg"
                  className=" adaptiveimage"
                  src="https://www.balmuda.com/jp/rain/img/humidity/desktop/section--01_icn_03@2x.jpg"
                />
                <h3>气化式</h3>
                <p>
                  智能加湿器的加湿方法为气化式。气化式加湿方法利用干燥季节时杯子中的水会自然减少的自然原理，通过风力提高加湿能力。既不会排放出杂菌，也不会造成湿度过大。另外，还具有耗电量低的特点。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--humidity section--02 scrollLoader lazyload">
        <div className="__image __is_mobile"></div>

        <div className="fadeout_image scrollin">
          <img
            data-desktop="https://www.balmuda.com/jp/rain/img/humidity/desktop/section--02_fadeout_image.png"
            data-retina="https://www.balmuda.com/jp/rain/img/humidity/desktop/section--02_fadeout_image@2x.png"
            className="adaptiveimage"
            src="https://www.balmuda.com/jp/rain/img/humidity/desktop/section--02_fadeout_image@2x.png"
          />
        </div>

        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title __wb">洗空气的装置</h2>
            <p>
              智能加湿器吸入的干燥空气首先通过溶菌酶滤网过滤。通过溶菌酶滤网去除灰尘的同时分解细菌。之后，洁净的空气通过富含水分的加湿滤网，变成含有湿度的清洁空气后排放出去。
            </p>
          </div>
        </div>
      </div>
      <div className="section section--humidity section--03 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title __wb">30分钟内清除病毒</h2>

            <img
              data-mobile="https://www.balmuda.com/jp/rain/img/humidity/mobile/section--03.jpg"
              data-desktop="https://www.balmuda.com/jp/rain/img/humidity/desktop/section--03.jpg"
              data-retina="https://www.balmuda.com/jp/rain/img/humidity/desktop/section--03@2x.jpg"
              className="section--03_img adaptiveimage __is_desktop"
              src="https://www.balmuda.com/jp/rain/img/humidity/desktop/section--03@2x.jpg"
            />

            <p>
              与AirEngine相同的溶菌酶滤网在滤除灰尘的同时，还能够灭杀空气中的病毒和细菌，保持空气清洁。通过在25m³房间内进行的试验证明，30分钟内可去除85%的病毒和细菌；90分钟内可去除91%的病毒和细菌。
            </p>
            <p className="note">* 日本食品分析中心试验结果</p>
            <a
              href="#"
              onClick={handleOpenModal}
              className="button modal-action"
              data-modal-for="section--03_modal">
              关于溶菌酶
            </a>
          </div>
        </div>
        <div
          className={`modal modal--buynow ${isOpen ? 'modal--active' : ''}`}
          id="section--03_modal">
          <div className="modal__close icon__circle__close" onClick={() => setIsOpen(false)}></div>
          <div className="modal__content">
            <div className="wrapper">
              <h2 className="section__title __wb">关于溶菌酶</h2>
              <img
                data-mobile="https://www.balmuda.com/jp/rain/img/humidity/mobile/section--03_modal.png"
                data-desktop="https://www.balmuda.com/jp/rain/img/humidity/desktop/section--03_modal.png"
                data-retina="https://www.balmuda.com/jp/rain/img/humidity/desktop/section--03_modal@2x.png"
                className="section--03_img adaptiveimage"
                src="https://www.balmuda.com/jp/rain/img/humidity/desktop/section--03_modal@2x.png"
              />
              <p>
                酶在人体内和自然界中存在着很多种类，分解和再生等，各自具有各种各样的能力。Rain的预滤膜上覆盖的是具有溶菌作用的酶。有分解接触过的细菌的作用。因为是自然界的物质，所以对人没有不良影响，也被试验证明是无害的。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section section--humidity section--04 scrollLoader lazyload">
        <div className="__image"></div>

        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title __wb">可全洗的供水盆</h2>
            <p>
              智能加湿器不同于传统加湿器，没有设置缸体。从上方注入的清水被存储在内部的供水盆中。供水盆可以利用清洁剂进行整体清洗，可以始终清洁地使用。可防止像加热式加湿器一样，凝结矿物质及石灰等白色物质。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--humidity section--05 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title __wb">防止吸入空气中的灰尘及杂菌流入。</h2>
            <p>
              利用溶菌酶除菌吸取供水盆中的水分，空气通过时，只将气化后的水分传递给空气。不会将其他物质排放到室内。
              传统加湿器的水箱存在卫生隐患。即便使用氯气杀菌的自来水，如果吸入的空气中包括杂菌及灰尘，也会产生气味及粘液。智能加湿器在吸入空气时进行除菌，可以有效防止供水盆中的水变质。
            </p>

            <div className="back_img">
              <img
                data-mobile="https://www.balmuda.com/jp/rain/img/humidity/mobile/section--05.png"
                data-desktop="https://www.balmuda.com/jp/rain/img/humidity/mobile/section--05.png"
                data-retina="https://www.balmuda.com/jp/rain/img/humidity/desktop/section--05@2x.jpg"
                className="section--05_img adaptiveimage"
                src="https://www.balmuda.com/jp/rain/img/humidity/desktop/section--05@2x.jpg"
              />

              <div className="desc_1">
                <h3>加湿过滤器</h3>
                <p>
                  把碗内的水吸上来，在空气流通的时候只把气化的水分传递出去。没有其他物质被释放到空间。
                </p>
              </div>

              <div className="desc_2">
                <h3>酶过滤器</h3>
                <p>防止从外部吸入的空气中含有的灰尘和杂菌的流入。用酶来除菌。</p>
              </div>

              <div className="desc_3">
                <h3>供水盆</h3>
                <p>可以全洗。</p>
              </div>

              <div className="desc_4">
                <h3>银离子盒</h3>
                <p>银离子可以抑制碗内的水的产生。</p>
              </div>
            </div>

            <div className="comments">
              <p>为了让智能加湿器更清洁的使用，过滤器组推荐1年更换一次。</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
