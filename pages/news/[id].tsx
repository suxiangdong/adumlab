import Head from 'next/head'
import Layout from '../../layouts/default'
import API from '../../effects/api'

export async function getServerSideProps({ query }) {
  try {
    const detail = await API.getNewsOrNotificationDetailById(query.id)
    const news = await API.getNews()
    return { props: { detail, news } }
  } catch (error) {
    return { props: { detail: {}, news: {} } }
  }
}

export default function News({ detail, news }) {
  const n = detail.data
  
  if (!news || !news.data || !Array.isArray(news.data.data) || news.data.data.length === 0) {
    news.data.data = []
  }
  
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="/news/style/index.css" />
      </Head>
      <div id="Container">
        <div id="ContainerLayer">
          <div id="Nav">
            <div id="PageTitle">
              <a href="/news/">
                <span>News</span>
              </a>
            </div>
          </div>

          <div id="Contents">
            <div className="ThePost">
              <h3>
                <a href="https://www.balmuda.com/jp/news/1009" rel="bookmark" title={n.title}>
                  {n.title}
                </a>
              </h3>
              <span className="PostDate">{new Date(n.publish_at).toLocaleDateString('zh')}</span>
              <div className="ColumnPostMain">{n.content}</div>
              <hr className="Hyde0" />
            </div>
          </div>

          <div id="SideBar">
            <h5>最近の記事</h5>
            <ul className="CategoryList">
              {news.data.data.map(n => <li key={n.id}>
                <a href={`/news/${n.id}`}>
                  {n.title}
                </a>
              </li>)}
            </ul>
          </div>

          <hr className="Hyde0" />
        </div>
      </div>
    </Layout>
  )
}
