import Head from 'next/head'
import Layout from '../../layouts/default'
import API from '../../effects/api'

export async function getServerSideProps() {
  try {
    const news = await API.getNews()
    return { props: { news } }
  } catch (error) {
    return { props: { news: {} } }
  }
}

export default function News({ news }) {
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
            {news.data.data.map((n) => (
              <div key={n.id} className="ThePost">
                <h3>
                  <a href={n.redirect_url} rel="bookmark" title={n.title}>
                    {n.title}
                  </a>
                </h3>
                <span className="PostDate">{new Date(n.publish_at).toLocaleDateString('zh')}</span>
                <div className="ColumnPostMain" dangerouslySetInnerHTML={{ __html: n.content }} />
                <hr className="Hyde0" />
              </div>
            ))}

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
