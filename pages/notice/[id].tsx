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
      <section className="max-w-4xl m-auto py-24 px-1" style={{ minHeight: 400 }}>
        <h2 className="mb-8 text-4xl">{n.title}</h2>
        <p>{n.content}</p>
      </section>
    </Layout>
  )
}
