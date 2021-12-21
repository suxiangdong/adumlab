import Link from 'next/link'
import { useEffect, useState } from 'react'
import API from '../effects/api'

export default function Footer() {
  const [news, setNews] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const handleEnter = () => {
    setIsOpen(true)
  }
  const handleLeave = () => {
    setIsOpen(false)
  }

  const handleEnter2 = () => {
    setIsOpen2(true)
  }
  const handleLeave2 = () => {
    setIsOpen2(false)
  }

  useEffect(() => {
    API.getNews().then((res) => {
      if (res && Array.isArray(res.data?.data) && res.data?.data.length > 0) {
        setNews(res.data.data)
      }
    })
  }, [])

  return (
    <footer className="text-xs text-left bg-333 pb-2 text-gray-400 leading-relaxed">
      <div className="footer__products">
        <div className="viewport">
          <div className="__group __group--kitchen">
            <h4 className="__title">Kitchen</h4>
            <a href="/toaster/" className="__item __item--toaster">
              BALMUDA The Toaster
              <span className="__caption">蒸汽烤面包机</span>
            </a>
            <a href="/pot/" className="__item __item--pot">
              BALMUDA The Pot<span className="__caption">手冲咖啡壶</span>
            </a>
          </div>
          <div className="__group __group--air">
            <h4 className="__title">Air</h4>
            <div className="__wrap">
              <a href="/greenfan/" className="__item __item--greenfan">
              GreenFan Japan<span className="__caption">果岭风扇</span>
              </a>
              <a href="/greenfan-cirq/" className="__item __item--greenfan-cirq">
                GreenFan Cirq<span className="__caption">空气循环扇</span>
              </a>
              <a href="/pure/" className="__item __item--pure">
                BALMUDA The Pure<span className="__caption">空气净化器</span>
              </a>
              <a href="/rain/" className="__item __item--rain">
                Rain<span className="__caption">智能加湿器</span>
              </a>
            </div>
          </div>
          <div className="__group __group--right">
            <div className="__group __group--lighting">
              <h4 className="__title">Lighting</h4>
              {/* <a href="/lantern/" className="__item __item--lantern">
                BALMUDA The Lantern<span className="__caption">便携式LED灯</span>
              </a> */}
              <a href="/light/" className="__item __item--light">
                BALMUDA The Light<span className="__caption">太阳能LED台灯</span>
              </a>
            </div>
            <div className="__group--wrap">
              {/* <div className="__group __group--audio __onlyPC">
                <h4 className="__title">Audio</h4>
                <a href="/speaker/" className="__item __item--speaker">
                  BALMUDA The Speaker<span className="__caption">无线扬声器</span>
                </a>
              </div>
              <div className="__group __group--cleaner">
                <h4 className="__title">Cleaner</h4>
                <a href="/cleaner/" className="__item __item--cleaner">
                  BALMUDA The Cleaner<span className="__caption">悬臂式吸尘器</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer__content viewport">
          <div className="footer__item feed">
            <div className="__layout">
              <h4 className="footer__title footer__title--news">News</h4>
              <ul>
                {news.map((n) => (
                  <li key={n.id} className="feed__item">
                    <Link href={`/news/${n.id}`}>{n.redirect_text || n.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer__item footer__item--sitemap">
            <div className="sitemap">
              <div className="sitemap__group">
                <h5 className="sitemap__group__header">About</h5>
                <ul>
                  <li>
                    <Link href="/about/">关于BALMUDA</Link>
                  </li>
                  <li>
                    <Link href="/about/story">历史故事</Link>
                  </li>
                  <li>
                    <Link href="/about/awards">获奖经历</Link>
                  </li>
                </ul>
                <h5 className="sitemap__group__header">Support</h5>
                <ul>
                  <a href="/support/">
                    <li className="inline-block">电话、小程序码</li>
                  </a>
                </ul>
                <h5 className="sitemap__group__header">Brand Shop</h5>
                <ul>
                  <li>
                    <a href="/shops/">线下店铺列表</a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="widget">
          <div className="viewport">
            <div className="widget__item social flex items-center z-10">
              <a className="flex" href="//weibo.com/p/1006063925815979/home" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="weibo"
                  width="32"
                  height="32"
                  className="inline-block"
                  role="img"
                  viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M407 177.6c7.6-24-13.4-46.8-37.4-41.7-22 4.8-28.8-28.1-7.1-32.8 50.1-10.9 92.3 37.1 76.5 84.8-6.8 21.2-38.8 10.8-32-10.3zM214.8 446.7C108.5 446.7 0 395.3 0 310.4c0-44.3 28-95.4 76.3-143.7C176 67 279.5 65.8 249.9 161c-4 13.1 12.3 5.7 12.3 6 79.5-33.6 140.5-16.8 114 51.4-3.7 9.4 1.1 10.9 8.3 13.1 135.7 42.3 34.8 215.2-169.7 215.2zm143.7-146.3c-5.4-55.7-78.5-94-163.4-85.7-84.8 8.6-148.8 60.3-143.4 116s78.5 94 163.4 85.7c84.8-8.6 148.8-60.3 143.4-116zM347.9 35.1c-25.9 5.6-16.8 43.7 8.3 38.3 72.3-15.2 134.8 52.8 111.7 124-7.4 24.2 29.1 37 37.4 12 31.9-99.8-55.1-195.9-157.4-174.3zm-78.5 311c-17.1 38.8-66.8 60-109.1 46.3-40.8-13.1-58-53.4-40.3-89.7 17.7-35.4 63.1-55.4 103.4-45.1 42 10.8 63.1 50.2 46 88.5zm-86.3-30c-12.9-5.4-30 .3-38 12.9-8.3 12.9-4.3 28 8.6 34 13.1 6 30.8.3 39.1-12.9 8-13.1 3.7-28.3-9.7-34zm32.6-13.4c-5.1-1.7-11.4.6-14.3 5.4-2.9 5.1-1.4 10.6 3.7 12.9 5.1 2 11.7-.3 14.6-5.4 2.8-5.2 1.1-10.9-4-12.9z"
                  />
                </svg>
              </a>
              <span
                className="flex relative mx-1"
                onMouseEnter={handleEnter2}
                onMouseLeave={handleLeave2}>
                <img src="/index/img/desktop/qrcode_gh_ec13acfc1226_1.jpg" className="w-8 -h-8" alt="" />

                <div className={`absolute bottom-10 left-0 ${isOpen2 ? 'visible' : 'hidden'}`}>
                  <img src="/index/img/desktop/qrcode_gh_ec13acfc1226_1.jpg" style={{ maxWidth: '8rem' }} alt="" />
                </div>
              </span>
              <span
                className="flex relative mx-1"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}>
                <img src="/_theme/img/mini-prog.png" className="w-8 -h-8" alt="" />

                <div className={`absolute bottom-10 left-0 ${isOpen ? 'visible' : 'hidden'}`}>
                  <img src="/_theme/img/mini-prog.png" style={{ maxWidth: '8rem' }} alt="" />
                </div>
              </span>
            </div>

            <div className="widget__item">
              <div className="copyright">
                <img
                  src="/_theme/img/svg/balmuda_fff.min.svgz"
                  className="inline-block copyright__balmuda"
                  width="134"
                  height="19"
                  data-no-retina=""
                />
                <p className="copyright__text">Copyright © BALMUDA Inc. All rights reserved</p>
              </div>
              <div className="region">
                <div className="region__wrap">
                  <p className="text-xs mt-2">中国总代理：星龙达（科贸）北京有限公司</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
