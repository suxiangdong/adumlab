import Head from 'next/head'
import Layout from '../../layouts/default'
import API from '../../effects/api'

export async function getServerSideProps({ query }) {
  try {
    const detail = await API.getNewsOrNotificationDetailById(query.id)
    return { props: { detail } }
  } catch (error) {
    return { props: { detail: {} } }
  }
}

export default function News({ detail }) {
  const n = detail.data

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
              <li>
                <a href="https://www.balmuda.com/jp/news/1009">
                  BALMUDA The Toasterに限定颜色「灰色」が新登場
                </a>
              </li>
              <li>
                <a href="https://www.balmuda.com/jp/news/997">
                  携帯端末事業（５Gスマートフォン開発及び販売）参入のお知らせ
                </a>
              </li>
              <li>
                <a href="https://www.balmuda.com/jp/news/992">
                  GW期間の休業と「母の日」のギフトラッピングについて
                </a>
              </li>
              <li>
                <a href="https://www.balmuda.com/jp/news/977">
                  BALMUDA The Lanternに限定颜色2色が新登場
                </a>
              </li>
              <li>
                <a href="https://www.balmuda.com/jp/news/964">
                  自然界の风を再現する「The GreenFan」本日より販売開始
                </a>
              </li>
              <li>
                <a href="https://www.balmuda.com/jp/news/950">
                  あらゆるシーンで便利な「BALMUDA The Cleaner専用ノズルセット」が登場
                </a>
              </li>
              <li>
                <a href="https://www.balmuda.com/jp/news/945">
                  BALMUDA The Cleaner キャッシュバックキャンペーン開始のお知らせ
                </a>
              </li>
              <li>
                <a href="https://www.balmuda.com/jp/news/940">Rain Wi-Fiモデルの販売終了について</a>
              </li>
              <li>
                <a href="https://www.balmuda.com/jp/news/934">積雪による集荷・配達遅延について</a>
              </li>
              <li>
                <a href="https://www.balmuda.com/jp/news/931">冬季休業のお知らせ</a>
              </li>
            </ul>

            <h5>過去の記事</h5>
            <ul>
              <li>
                <a href="https://www.balmuda.com/jp/news/date/2021">2021</a>
              </li>
              <li>
                <a href="https://www.balmuda.com/jp/news/date/2020">2020</a>
              </li>
              <li>
                <a href="https://www.balmuda.com/jp/news/date/2019">2019</a>
              </li>
              <li>
                <a href="https://www.balmuda.com/jp/news/date/2018">2018</a>
              </li>
              <li>
                <a href="https://www.balmuda.com/jp/news/date/2017">2017</a>
              </li>
              <li>
                <a href="https://www.balmuda.com/jp/news/date/2016">2016</a>
              </li>
              <li>
                <a href="https://www.balmuda.com/jp/news/date/2015">2015</a>
              </li>
              <li>
                <a href="https://www.balmuda.com/jp/news/date/2014">2014</a>
              </li>
              <li>
                <a href="https://www.balmuda.com/jp/news/date/2013">2013</a>
              </li>
              <li>
                <a href="https://www.balmuda.com/jp/news/date/2012">2012</a>
              </li>
              <li>
                <a href="https://www.balmuda.com/jp/news/date/2011">2011</a>
              </li>
              <li>
                <a href="https://www.balmuda.com/jp/news/date/2010">2010</a>
              </li>
              <li>
                <a href="https://www.balmuda.com/jp/news/date/2009">2009</a>
              </li>
              <li>
                <a href="https://www.balmuda.com/jp/news/date/2008">2008</a>
              </li>
              <li>
                <a href="https://www.balmuda.com/jp/news/date/2007">2007</a>
              </li>
              <li>
                <a href="https://www.balmuda.com/jp/news/date/2006">2006</a>
              </li>
            </ul>
          </div>

          <hr className="Hyde0" />
        </div>
      </div>
    </Layout>
  )
}
