import Link from 'next/link'
import Head from 'next/head'
import ReactSlick from 'react-slick'
import Layout from '../../layouts/default'
import API from '../../effects/api'

export async function getServerSideProps() {
  try {
    const [banners, evaluations] = await Promise.all([
      API.getBannersByCategory(1),
      API.getEvaluationsByCategory(1)
    ])
    return { props: { banners, evaluations } }
  } catch (error) {
    return { props: { banners: {}, evaluations: {} } }
  }
}

export default function ({ banners, evaluations }) {
  if (!banners || !Array.isArray(banners.data) || banners.data.length === 0) {
    banners.data = [0, 1, 2, 3].map((i) => ({
      id: i,
      path: `https://www.balmuda.com/jp/toaster/img/index/desktop/billboard--0${i}@2x.jpg?20210505`
    }))
  }
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/toaster/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/toaster/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <a href="/toaster/" className="pagemap__content--logo">
            <img
              className="w-full"
              src="/_theme/img/svg/balmuda-the-toaster.min.svgz"
              alt="BALMUDA The Toaster"
            />
          </a>
          <ul className="pagemap__main" id="greedynav-links">
            <li className={`pagemap__content__item __current`}>
              <Link href="/toaster/index">概要</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/taste">特别的美味</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/technology">科学与设计</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/howto">使用方法</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/story">故事</Link>
            </li>
            <li className={`pagemap__content__item`}>
              <Link href="/toaster/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__dropdown hidden" id="greedynav--btn">
            <span className="pagemap__dropdown__btn"></span>
            <ul className="pagemap__dropdown__content"></ul>
          </div>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=K05A"
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
          <div className="__inner">
            <img
              data-mobile="https://www.balmuda.com/jp/toaster/img/index/mobile/main.jpg?20210617"
              data-desktop="https://www.balmuda.com/jp/toaster/img/index/desktop/main.jpg?20210617"
              data-retina="https://www.balmuda.com/jp/toaster/img/index/desktop/main@2x.jpg?20210617"
              className="__image adaptiveimage"
              src="https://www.balmuda.com/jp/toaster/img/index/desktop/main@2x.jpg?20210617"
            />
            <img
              src="https://www.balmuda.com/jp/toaster/img/index/svg/main_text.svg?20210617"
              className="__image adaptiveimage_copy"
            />
          </div>
        </div>
        <div className="viewport">
          <h2 className="page__title">令人感动的电烤箱</h2>
          <span className="label__block">蒸汽烤面包机</span>
          <p className="overview_text __wb">
            BALMUDA电烤箱是可以将口感与香气以绝佳状态呈现的感动电烤箱。
            蒸气技术与完美的温度控制，再现刚出炉般的美味。更有经典模式，让各种料理更加简单，充满乐趣。
          </p>

          <div className="the-price">
            <p className="price price--excl_tax" id="price2">
              25,850
            </p>
            <p className="colores">黑色/白色/米色/灰色</p>
          </div>

          <div className="__is_mobile">
            <video
              controls={false}
              poster="https://www.balmuda.com/img/index/mobile/v7b.jpg"
              width="100%"
              height="100%">
              <source src="//s3.balmuda.com/www/jp/toaster/movie/v7b.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="book-info">
          <div className="book-photo">
            <img
              data-mobile="https://www.balmuda.com/jp/toaster/img/index/mobile/book_icon.jpg?20210617"
              data-desktop="https://www.balmuda.com/jp/toaster/img/index/desktop/book_icon.jpg?20210617"
              data-retina="https://www.balmuda.com/jp/toaster/img/index/desktop/book_icon@2x.jpg?20210617"
              className="__image adaptiveimage"
              src="https://www.balmuda.com/jp/toaster/img/index/desktop/book_icon@2x.jpg?20210617"
            />
          </div>

          <div className="book-info-text">
            <p className="info-bold">
              给在线商店购买的顾客礼物
              <br />
              原创书籍
            </p>
            <p>
              <span>
                这是一本非常讲究的书，用约100页的篇幅介绍了迄今为止在网站上公开的烤面包机菜谱。
                <span>* 1台赠送1册。</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <Link href="/toaster/taste">
        <div className="section section--index section--01 scrollLoader lazyload cursor-pointer">
          <div className="viewport scrollLoader fadeInUp lazyload">
            <div className="__content">
              <h2 className="section__title">特别的美味</h2>
              <p>
                BALMUDA电烤箱为了实现理想的美味，配备了吐司、芝士吐司、法式面包、牛角面包、经典模式5种模式。为您介绍每种模式可以带来的美味。
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/toaster/technology">
        <div className="section section--index section--02 scrollLoader lazyload cursor-pointer">
          <div className="viewport scrollLoader fadeInUp lazyload">
            <div className="__content">
              <h2 className="section__title">科学与设计</h2>
              <p>
                BALMUDA电烤箱可以让使用者简单的烤出惊艳美味的切片吐司、亦能将牛角包再现刚出炉的状态。下面为您介绍将这一切变为可能的两大技术：巴慕达独有的蒸汽技术、及完美的温度控制。
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/toaster/howto">
        <div className="section section--index section--03 scrollLoader lazyload">
          <div className="viewport scrollLoader fadeInUp lazyload">
            <div className="__content">
              <h2 className="section__title">使用方法</h2>
              <p>
                BALMUDA电烤箱可以针对不同种类的面包进行烘烤，再现各自的绝佳风味。亦可如其他烤箱般制作各类烤箱料理。
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/tosater/technology#temperature-control">
        <div className="section section--index section--04 scrollLoader lazyload">
          <div className="viewport scrollLoader fadeInUp lazyload">
            <div className="__content">
              <h2 className="section__title">进化的温度控制</h2>
              <p>
                全新 BALMUDA The Toaster 的温度控制更加精确。
                上下加热器的强度和烘烤时间为每种模式重新设置。 带出各种面包的美味。
              </p>
            </div>
          </div>
        </div>
      </Link>
      <div className="section section--index section--gray scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">
              <span>限定颜色的</span>
              <br className="sp" />
              <span>“灰色”登场</span>
            </h2>
            <p>
              在垫子上有沉着的质感，酷酷的印象的灰色。
              <br className="pc" />
              被洗练的设计，和室内装饰的投缘也出众。
              <br className="pc" />
              颜色为黑色、白色、米色共4种颜色。可以根据自己的喜好来选择。
            </p>
            <a href="#gallery" className="btn section__btn">
              查看颜色变化
            </a>
          </div>
        </div>
      </div>
      <Link href="/toaster/design">
        <a>
          <section className="relative text-center">
            <img
              src="https://www.balmuda.com/jp/toaster/img/index/desktop/section--evolve@2x.jpg?20200901"
              alt=""
            />
            <div className="flex flex-col justify-center absolute inset-0 m-auto transform -translate-y-28 max-w-4xl">
              <h2 className="text-4xl mb-8">全新的设计和颜色</h2>
              <p className="text-lg text-black mb-4 leading-8">
                继承至今的设计的同时，窗框的形状和转盘·取手的尺寸重新设计。
                <br />
                由于电源按钮的追加使用方法也提高了。
                <br />
                在黑色、白色的基础上，增加了与各种风味厨房相适应的新颜色米色。
              </p>
            </div>
          </section>
        </a>
      </Link>
      <section className="bg-recipe text-center py-24">
        <img
          className="h-20 mb-9 mx-auto"
          src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipes-logo@2x.png?"
          alt=""
        />
        <p className="max-w-4xl px-3 mb-9 mx-auto text-center">
          BALMUDA电烤箱可以制作的餐单拥有无限可能，
          <br />
          我们精选了其中独具魅力的吐司和三明治等料理食谱为您介绍。
        </p>
        <ReactSlick slidesToShow={3} centerMode infinite dots={false}>
          <div className="block px-5">
            <img
              className="mb-5"
              src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_010@2x.jpg?20200901"
              alt=""
            />
            <p className="text-lg text-center">牛角面包三明治</p>
          </div>

          <div className="block px-5">
            <img
              className="mb-5"
              src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_041@2x.jpg?20200901"
              alt=""
            />
            <p className="text-lg text-center">熏鲑鱼加酸奶油的百吉果三明治</p>
          </div>

          <div className="block px-5">
            <img
              className="mb-5"
              src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_006@2x.jpg?20200901"
              alt=""
            />
            <p className="text-lg text-center">脆脆的培根煎蛋吐司</p>
          </div>

          <div className="block px-5">
            <img
              className="mb-5"
              src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_008@2x.jpg?20200901"
              alt=""
            />
            <p className="text-lg text-center">巧克力香蕉吐司</p>
          </div>

          <div className="block px-5">
            <img
              className="mb-5"
              src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_042@2x.jpg?20200901"
              alt=""
            />
            <p className="text-lg text-center">卡曼贝尔水果吐司</p>
          </div>

          <div className="block px-5">
            <img
              className="mb-5"
              src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_035@2x.jpg?20200901"
              alt=""
            />
            <p className="text-lg text-center">黑胡椒配柠檬牛肉三明治</p>
          </div>

          <div className="block px-5">
            <img
              className="mb-5"
              src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_053@2x.jpg?20200901"
              alt=""
            />
            <p className="text-lg text-center">蛋饼</p>
          </div>

          <div className="block px-5">
            <img
              className="mb-5"
              src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_044@2x.jpg?20200901"
              alt=""
            />
            <p className="text-lg text-center">芫荽汤</p>
          </div>

          <div className="block px-5">
            <img
              className="mb-5"
              src="https://www.balmuda.com/jp/toaster/img/index/desktop/recipe_054@2x.jpg?20200901"
              alt=""
            />
            <p className="text-lg text-center">球场上的热狗</p>
          </div>
        </ReactSlick>
      </section>
      <Link href="/toaster/story">
        <div className="section section--index section--story2 scrollLoader lazyload">
          <div className="viewport scrollLoader fadeInUp lazyload">
            <div className="__content">
              <h2 className="section__title">故事</h2>
              <p>
                BALMUDA电烤箱的开发故事，是从1991年西班牙南部的龙达小镇开始的。
                为您介绍充满惊奇与发现的BALMUDA电烤箱由开发至完成的旅途。
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/toaster/spec">
        <div className="section section--index section--acce scrollLoader lazyload">
          <div className="viewport scrollLoader fadeInUp lazyload">
            <div className="__content">
              <h2 className="section__title">配件</h2>
              <p>
                面包机烹饪的范围扩大的BALMUDA The
                Toaster的配件。为您准备了原创食谱和野田珐琅出品的白球棒。
              </p>
            </div>
          </div>
        </div>
      </Link>
      <div className="section section--index section--blockquote">
        <div className="viewport">
          <ReactSlick className="blockquotes" arrows={false} dots>
            {evaluations.data?.map((item) => (
              <div key={item.id} className="blockquote">
                <blockquote>{item.content}</blockquote>
                <p className="__media">{`${new Date(item.publish_at).toLocaleDateString('zh')} ${
                  item.source
                }`}</p>
                <a href={item.source_url} target="_blank" className="__link">
                  {item.source_url}
                </a>
              </div>
            ))}
          </ReactSlick>
        </div>
      </div>

      <section className="py-24 max-w-4xl mx-auto" id="gallery">
        <h2 className="text-4xl mb-8">画廊</h2>
        <div className="grid grid-cols-3 grid-rows-2 gap-5">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <img
              key={item}
              className="rounded"
              src={`https://www.balmuda.com/jp/toaster/img/index/gallery/${item}@2x.jpg?20210505`}
              alt=""
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}
