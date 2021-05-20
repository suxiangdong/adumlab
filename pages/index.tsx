import ReactSlick from 'react-slick'
import Layout from '../layouts/default'

export default function Home() {
  var settings = {
    dots: true,
		arrow: false
  }
  return (
    <Layout>
      <ReactSlick arrows={false} dots>
        <div>
          <img className="w-full" src="https://www.balmuda.com/jp/index/img/desktop/billboard/0.jpg?20210420" />
        </div>
        <div>
          <img className="w-full" src="https://www.balmuda.com/jp/index/img/desktop/billboard/1.jpg?20210420" />
        </div>
        <div>
          <img className="w-full" src="https://www.balmuda.com/jp/index/img/desktop/billboard/2.jpg?20210420" />
        </div>
        <div>
          <img className="w-full" src="https://www.balmuda.com/jp/index/img/desktop/billboard/3.jpg?20210420" />
        </div>
      </ReactSlick>
      <section className="py-16 px-8 border-b border-fuchsia-600">
        <h2 className="text-4xl text-center mb-4">人气爆品</h2>
        <div className="flex max-w-7xl mx-auto">
          <a className="w-1/5" href="">
            <img
              className="hover:opacity-80"
              src="https://www.balmuda.com/jp/index/img/desktop/popular/0.jpg?20210429"
            />
            <p className="">BALMUDA THE Cleaner</p>
            <p className="">DCモーター扇風機</p>
          </a>
          <a className="w-1/5" href="">
            <img
              className="hover:opacity-80"
              src="https://www.balmuda.com/jp/index/img/desktop/popular/9.jpg?20210429"
            />
            <p className="">BALMUDA THE Cleaner</p>
            <p className="">DCモーター扇風機</p>
          </a>
          <a className="w-1/5" href="">
            <img
              className="hover:opacity-80"
              src="https://www.balmuda.com/jp/index/img/desktop/popular/7.jpg?20210429"
            />
            <p className="">BALMUDA THE Cleaner</p>
            <p className="">DCモーター扇風機</p>
          </a>
          <a className="w-1/5" href="">
            <img
              className="hover:opacity-80"
              src="https://www.balmuda.com/jp/index/img/desktop/popular/10.jpg?20210429"
            />
            <p className="">BALMUDA THE Cleaner</p>
            <p className="">DCモーター扇風機</p>
          </a>
          <a className="w-1/5" href="">
            <img
              className="hover:opacity-80"
              src="https://www.balmuda.com/jp/index/img/desktop/popular/13.jpg?20210429"
            />
            <p className="">BALMUDA THE Cleaner</p>
            <p className="">DCモーター扇風機</p>
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-16 text-left grid grid-cols-3 grid-rows-3 gap-4">
        <a href="">
          <img
            className="mb-6 hover:opacity-80"
            src="https://www.balmuda.com/jp/index/img/desktop/post/5.jpg?20210429"
            alt=""
          />
          <h4 className="mb-2">バルミューダについて</h4>
          <p className="text-sm text-gray-200">
            バルミューダは2003年に東京で設立されたクリエイティブとテクノロジーの会社です。
          </p>
        </a>
        <a href="">
          <img
            className="mb-6 hover:opacity-80"
            src="https://www.balmuda.com/jp/index/img/desktop/post/5.jpg?20210429"
            alt=""
          />
          <h4 className="mb-2">バルミューダについて</h4>
          <p className="text-sm text-gray-200">
            バルミューダは2003年に東京で設立されたクリエイティブとテクノロジーの会社です。
          </p>
        </a>
        <a href="">
          <img
            className="mb-6 hover:opacity-80"
            src="https://www.balmuda.com/jp/index/img/desktop/post/5.jpg?20210429"
            alt=""
          />
          <h4 className="mb-2">バルミューダについて</h4>
          <p className="text-sm text-gray-200">
            バルミューダは2003年に東京で設立されたクリエイティブとテクノロジーの会社です。
          </p>
        </a>
        <a href="">
          <img
            className="mb-6 hover:opacity-80"
            src="https://www.balmuda.com/jp/index/img/desktop/post/5.jpg?20210429"
            alt=""
          />
          <h4 className="mb-2">バルミューダについて</h4>
          <p className="text-sm text-gray-200">
            バルミューダは2003年に東京で設立されたクリエイティブとテクノロジーの会社です。
          </p>
        </a>
        <a href="">
          <img
            className="mb-6 hover:opacity-80"
            src="https://www.balmuda.com/jp/index/img/desktop/post/5.jpg?20210429"
            alt=""
          />
          <h4 className="mb-2">バルミューダについて</h4>
          <p className="text-sm text-gray-200">
            バルミューダは2003年に東京で設立されたクリエイティブとテクノロジーの会社です。
          </p>
        </a>
        <a href="">
          <img
            className="mb-6 hover:opacity-80"
            src="https://www.balmuda.com/jp/index/img/desktop/post/5.jpg?20210429"
            alt=""
          />
          <h4 className="mb-2">バルミューダについて</h4>
          <p className="text-sm text-gray-200">
            バルミューダは2003年に東京で設立されたクリエイティブとテクノロジーの会社です。
          </p>
        </a>
        <a href="">
          <img
            className="mb-6 hover:opacity-80"
            src="https://www.balmuda.com/jp/index/img/desktop/post/5.jpg?20210429"
            alt=""
          />
          <h4 className="mb-2">バルミューダについて</h4>
          <p className="text-sm text-gray-200">
            バルミューダは2003年に東京で設立されたクリエイティブとテクノロジーの会社です。
          </p>
        </a>
        <a href="">
          <img
            className="mb-6 hover:opacity-80"
            src="https://www.balmuda.com/jp/index/img/desktop/post/5.jpg?20210429"
            alt=""
          />
          <h4 className="mb-2">バルミューダについて</h4>
          <p className="text-sm text-gray-200">
            バルミューダは2003年に東京で設立されたクリエイティブとテクノロジーの会社です。
          </p>
        </a>
        <a href="">
          <img
            className="mb-6 hover:opacity-80"
            src="https://www.balmuda.com/jp/index/img/desktop/post/5.jpg?20210429"
            alt=""
          />
          <h4 className="mb-2">バルミューダについて</h4>
          <p className="text-sm text-gray-200">
            バルミューダは2003年に東京で設立されたクリエイティブとテクノロジーの会社です。
          </p>
        </a>
      </section>
      <section className="py-16">
        <h2 className="text-4xl text-center mb-4">つながる</h2>
        <div className="flex"></div>
      </section>
    </Layout>
  )
}
