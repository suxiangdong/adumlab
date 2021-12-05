import Link from 'next/link'
import Head from 'next/head'
import ReactSlick from 'react-slick'
import Layout from '../layouts/default'
import API from '../effects/api'

export async function getServerSideProps() {
  try {
    const [banners, hots, topics, notifications] = await Promise.all([
      API.getBannersByCategory(0),
      API.getHotProducts(),
      API.getHomeTopics(),
      API.getNotifications(),
    ])
    return { props: { banners, hots, topics, notifications } }
  } catch (error) {
    return {
      props: { banners: {}, hots: {}, topics: {}, notifications: {} }
    }
  }
}

export default function Home({ banners, hots, topics, notifications }) {
  if (!banners || !Array.isArray(banners.data) || banners.data.length === 0) {
    banners.data = [0, 1, 2, 3].map((i) => ({
      id: i,
      path: `https://www.balmuda.com/jp/index/img/desktop/billboard/${i}.jpg`
    }))
  }

  if (!hots || !Array.isArray(hots.data) || hots.data.length === 0) {
    hots.data = [
      {
        id: 1,
        title: 'BALMUDA The Toaster',
        description: '幸福的电烤箱',
        path: 'https://www.balmuda.com/jp/index/img/desktop/popular/0.jpg?20210602',
        url: '/toaster'
      },
      {
        id: 2,
        title: 'BALMUDA The Pot ',
        description: '小而美的电水壶',
        path: 'https://www.balmuda.com/jp/index/img/desktop/popular/2.jpg?20210530',
        url: '/pot'
      },
      {
        id: 3,
        title: '智能加湿器',
        description: '清洗空气的加湿器',
        path: 'https://www.balmuda.com/jp/index/img/desktop/popular/5.jpg?20210530',
        url: '/rain'
      },
      {
        id: 4,
        title: 'GreenFan Japan',
        description: '自然风果岭风扇',
        path: 'https://www.balmuda.com/jp/index/img/desktop/popular/1.jpg?20210530',
        url: '/greenfan'
      }
    ]
  }

  if (!topics || !Array.isArray(topics.data) || topics.data.length === 0) {
    topics.data = [
      {
        id: 1,
        title: '关于BALMUDA',
        description: 'BALMUDA是一家2003年在东京成立的创意和科技公司。',
        path: 'https://www.balmuda.com/jp/index/img/desktop/post/5@2x.jpg?20210530',
        url: '/about'
      },
      {
        id: 2,
        title: '极容易使用的吸尘器',
        description: '凭借独特的悬浮科技，卓越的操作性能和卓越的吸尘性能，大幅缩短清扫时间。',
        path: 'https://www.balmuda.com/jp/index/img/desktop/post/6@2x.jpg?20210530',
        url: '/cleaner'
      },
      {
        id: 3,
        title: '再现自然界风的电风扇',
        description: 'The GreenFan是再现自然界的风的电风扇。在房间里营造出吹过夏日午后的舒适的风。',
        path: 'https://www.balmuda.com/jp/index/img/desktop/post/16@2x.jpg?20210530',
        url: '/greenfan'
      }
    ]
  }

  return (
    <Layout>
      <Head>
        <link rel="stylesheet" media="(max-width: 640px)" href="/index/style/mobile.css" />
        <link rel="stylesheet" media="(min-width: 641px)" href="/index/style/desktop.css" />
      </Head>
      <div className="billboard__wrapper">
        <ReactSlick arrows={false} dots className="billboard">
          {banners.data?.map((banner) => (
            <img key={banner.id} className="w-full" src={banner.path} />
          ))}
        </ReactSlick>
      </div>
      <div className="populars_wrapper">
        <div className="__wrap">
          <h2 className="column_title">人气产品</h2>

          <div className="inner">
            <div className="populars">
              {hots.data.map((item) => (
                <Link key={item.id} href={item.url}>
                  <a className="popular">
                    <img className="w-full" src={item.path} alt="" />
                    <p className="__description">
                      <span className="w-full">{item.title}</span>
                      {item.description}
                    </p>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="topics_wrapper">
        <div className="viewport scrollLoader lazyload">
          <div className="topics">
            {topics.data.map((t) => (
              <a key={t.id} href={t.url} className="topic">
                <img className="w-full mb-6" src={t.path} alt="" />
                <h4 className="__title">{t.title}</h4>
                <p className="__description">{t.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
      {notifications?.data?.data?.length > 0 && <div className="notice">
        <div className="viewport">
          <span className="__title">重要通知</span>
          {notifications.data.data.map((n) => (
            <p key={n.id} className="__item">
              <a href={`/notice/${n.id}`} className="__link">
                {n.title}
              </a>
            </p>
          ))}
        </div>
      </div>}
    </Layout>
  )
}
