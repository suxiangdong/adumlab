import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const handleEnter = () => {
    setIsOpen(true)
  }
  const handleLeave = () => {
    setIsOpen(false)
  }
  const router = useRouter()

  return (
    <>
      <div className="header" id="header">
        <div className="brand relative">
          <span className="brand__icon icon__menu drawer-toggle"></span>

          <Link href="/">
            <a className="brand__balmuda flex items-center">
              <img
                src="https://www.balmuda.com/_theme/img/svg/balmuda_fff.min.svgz"
                style={{ width: 122 }}
              />
            </a>
          </Link>
        </div>
        <div className="pagemap--mobile" id="pagemap--mobile">
          <div className="__wrapper">
            <ul className="pagemap__content">
              <li
                className={`pagemap__content__item pagemap__content__item--index ${
                  router.asPath === '/greenfan' ? '__current' : ''
                }`}>
                <Link href="/greenfan">概要</Link>
              </li>
              <li className={`pagemap__content__item pagemap__content__item--feature ${
                  router.asPath === '/greenfan/feature' ? '__current' : ''
                }`}>
                <Link href="/greenfan/feature">风吹得好舒服</Link>
              </li>
              <li className={`pagemap__content__item pagemap__content__item--design ${
                  router.asPath === '/greenfan/design' ? '__current' : ''
                }`}>
                <Link href="/greenfan/design">易用性</Link>
              </li>
              <li className={`pagemap__content__item pagemap__content__item--story ${
                  router.asPath === '/greenfan/story' ? '__current' : ''
                }`}>
                <Link href="/greenfan/story">故事</Link>
              </li>
              <li className={`pagemap__content__item pagemap__content__item--spec ${
                  router.asPath === '/greenfan/spec' ? '__current' : ''
                }`}>
                <Link href="/greenfan/spec">规格</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navigation drawer-nav">
        <ul
          className="flex justify-center navigation__content"
          style={{
            transitionTimingFunction: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
            transitionDuration: '0s',
            transform: 'translate(0px, 0px) translateZ(0px)'
          }}>
          <li className="navigation__item">
            <Link href="/">
              <a className="__item home">
                <em>Home</em>
              </a>
            </Link>
          </li>
          <li
            className={`navigation__item dropdown__trigger ${isOpen ? '__active' : ''}`}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}>
            <span className="__item products">
              <em>Products</em>
            </span>
            <div className="__wrap __wrap--products __accordion">
              <div className="__dropdown">
                <div className="__view">
                  <div className="__group accordion__trigger __group--kitchen">
                    <span className="__title __kitchen">
                      <em>Kitchen</em>
                    </span>
                    <div className="__category__wrap __accordion">
                      <Link href="/toaster">
                        <a className="__item __item--toaster">
                          <span className="__name">
                            <em>BALMUDA The Toaster</em>
                          </span>
                        </a>
                      </Link>
                      <Link href="/pot">
                        <a className="__item __item--pot">
                          <span className="__name">
                            <em>BALMUDA The Pot</em>
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="__group accordion__trigger __group--air">
                    <span className="__title __air">
                      <em>Air</em>
                    </span>
                    <div className="__category__wrap __accordion">
                      <Link href="/greenfan">
                        <a className="__item __item--greenfan">
                          <span className="__name">
                            <em>GreenFan Japan</em>
                          </span>
                        </a>
                      </Link>

                      <Link href="/greenfan-cirq">
                        <a className="__item __item--cirq">
                          <span className="__name">
                            <em>GreenFan Cirq</em>
                          </span>
                        </a>
                      </Link>

                      <Link href="/pure">
                        <a className="__item __item--pure">
                          <span className="__name">
                            <em>BALMUDA The Pure</em>
                          </span>
                        </a>
                      </Link>
                      <Link href="/rain">
                        <a className="__item __item--rain">
                          <span className="__name">
                            <em>Rain</em>
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="__group __group--right">
                    <div className="__group accordion__trigger __group--lighting">
                      <span className="__title __lighting">
                        <em>Lighting</em>
                      </span>
                      <div className="__category__wrap __accordion">
                        {/* <Link href="/lantern">
                          <a className="__item __item--lantern">
                            <span className="__name">
                              <em>BALMUDA The Lantern</em>
                            </span>
                          </a>
                        </Link> */}
                        <Link href="/light">
                          <a className="__item __item--light">
                            <span className="__name">
                              <em>BALMUDA The Light</em>
                            </span>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="__group--wrap">
                      {/* <div className="__group accordion__trigger __group--audio __onlyPC">
                        <span className="__title __audio">
                          <em>Audio</em>
                        </span>
                        <div className="__category__wrap __accordion">
                          <Link href="/speaker">
                            <a className="__item __item--speaker">
                              <span className="__name">
                                <em>BALMUDA The Speaker</em>
                              </span>
                            </a>
                          </Link>
                        </div>
                      </div> */}
                      {/* <div className="__group accordion__trigger __group--cleaner">
                        <span className="__title __cleaner">
                          <em>Cleaner</em>
                        </span>
                        <div className="__category__wrap __accordion">
                          <Link href="/cleaner">
                            <a className="__item __item--cleaner">
                              <span className="__name">
                                <em>BALMUDA The Cleaner</em>
                              </span>
                            </a>
                          </Link>
                        </div>
                      </div> */}
                    </div>
                  </div>

                  <div className="__group accordion__trigger __group--audio __onlyTab">
                    <span className="__title __audio">
                      <em>Audio</em>
                    </span>
                    <div className="__category__wrap __accordion">
                      <Link href="/speaker">
                        <a className="__item __item--speaker">
                          <span className="__name">
                            <em>BALMUDA The Speaker</em>
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="__group accordion__trigger __group--parts __onlyTabSmall">
                    <div className="__group accordion__trigger __group--audio">
                      <span className="__title __audio">
                        <em>Audio</em>
                      </span>
                      <div className="__category__wrap __accordion">
                        <a href="/speaker/" className="__item __item--speaker">
                          <span className="__name">
                            <em>BALMUDA The Speaker</em>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="navigation__item">
            <Link href="/about">
              <a className="__item about">
                <em>About</em>
              </a>
            </Link>
          </li>

          <li className="navigation__item dropdown__trigger navigation__item--cart">
            <Link href="/support">
              <a className="__item support text">
                <em className="text-lg">Support</em>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
