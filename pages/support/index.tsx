import Head from 'next/head'
import Layout from '../../layouts/default'

export default function Shops() {

  return (
    <Layout>
      <Head>

        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/support/style/desktop.css?20210701173839"></link>

      </Head>
      <div className="section section--index section--00">
      <div className="viewport">
        <div className="__content">
            <img src="https://www.balmuda.com/jp/support/img/balmuda-support.min.svg" className="__image" />
            <p>专业工作人员一年365天为您解答。 请在购买之前或之后随时与我们联系。</p>
        </div>


<div className="__cta">
    <a href="#" className="__cta_item __phone modal-action" data-modal-for="buynow">
        <h3 className="__title">电话咨询</h3>
        <span className="__subtitle">400-668-6726</span>
    </a>

</div>
    </div>
      </div>
    </Layout>
  )
}
