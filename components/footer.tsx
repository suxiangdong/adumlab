import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="text-xs bg-333 pb-2 text-gray-400 leading-relaxed">
      <div className="footer__products">
        <div className="viewport">
          <div className="__group __group--kitchen">
            <h4 className="__title">Kitchen</h4>
            <a href="/toaster/" className="__item __item--toaster">
              BALMUDA The Toaster<span className="__caption">スチームトースター</span>
            </a>
            <a href="/pot/" className="__item __item--pot">
              BALMUDA The Pot<span className="__caption">電気ケトル</span>
            </a>
          </div>
          <div className="__group __group--air">
            <h4 className="__title">Air</h4>
            <div className="__wrap">
              <a href="/greenfan/" className="__item __item--greenfan">
                The GreenFan<span className="__caption">扇風機</span>
              </a>
              <a href="/greenfan-cirq/" className="__item __item--greenfan-cirq">
                GreenFan Cirq<span className="__caption">サーキュレーター</span>
              </a>
              <a href="/pure/" className="__item __item--pure">
                BALMUDA The Pure<span className="__caption">空気清浄機</span>
              </a>
              <a href="/rain/" className="__item __item--rain">
                Rain<span className="__caption">加湿器</span>
              </a>
            </div>
          </div>
          <div className="__group __group--right">
            <div className="__group __group--lighting">
              <h4 className="__title">Lighting</h4>
              <a href="/lantern/" className="__item __item--lantern">
                BALMUDA The Lantern<span className="__caption">ポータブルLEDランタン</span>
              </a>
              <a href="/light/" className="__item __item--light">
                BALMUDA The Light<span className="__caption">太陽光LEDデスクライト</span>
              </a>
            </div>
            <div className="__group--wrap">
              <div className="__group __group--audio __onlyPC">
                <h4 className="__title">Audio</h4>
                <a href="/speaker/" className="__item __item--speaker">
                  BALMUDA The Speaker<span className="__caption">ワイヤレススピーカー</span>
                </a>
              </div>
              <div className="__group __group--cleaner">
                <h4 className="__title">Cleaner</h4>
                <a href="/cleaner/" className="__item __item--cleaner">
                  BALMUDA The Cleaner<span className="__caption">ホバー式クリーナー</span>
                </a>
              </div>
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
                <li className="feed__item">
                  <a href="https://www.balmuda.com/jp/news/1009">BALMUDA The Toasterに限定カラー「グレー」が新登場</a>
                </li>
                <li className="feed__item">
                  <a href="https://www.balmuda.com/jp/news/997">携帯端末事業（５Gスマートフォン開発及び販売）参入のお知らせ</a>
                </li>
                <li className="feed__item">
                  <a href="https://www.balmuda.com/jp/news/992">GW期間の休業と「母の日」のギフトラッピングについて</a>
                </li>
                <li className="feed__item">
                  <a href="https://www.balmuda.com/jp/news/977">BALMUDA The Lanternに限定カラー2色が新登場</a>
                </li>
                <li className="feed__item">
                  <a href="https://www.balmuda.com/jp/news/964">自然界の風を再現する「The GreenFan」本日より販売開始</a>
                </li>
                <li className="feed__item">
                  <a href="https://www.balmuda.com/jp/news/950">あらゆるシーンで便利な「BALMUDA The Cleaner専用ノズルセット」が登場</a>
                </li>{' '}
              </ul>
            </div>
          </div>

          <div className="footer__item footer__item--sitemap">
            <div className="sitemap">
              <div className="sitemap__group">
                <h5 className="sitemap__group__header">About</h5>
                <ul>
                  <li>
                    <a href="/jp/about/">バルミューダについて</a>
                  </li>
                  <li>
                    <a href="/jp/about/story">ストーリーズ</a>
                  </li>
                  <li>
                    <a href="/jp/about/awards">受賞歴</a>
                  </li>
                </ul>
                <h5 className="sitemap__group__header">Support</h5>
                <ul>
                  <li>
                    <a href="/jp/support/">电话、小程序码</a>
                  </li>
                </ul>
                <h5 className="sitemap__group__header">Brand Shop</h5>
                <ul>
                  <li>
                    <a href="/jp/shops/">时代店铺</a>
                  </li>
									<li>
                    <a href="/jp/shops/">线下店铺列表</a>
                  </li>
									<li>
                    <a href="/jp/shops/">线上旗舰店</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="widget">
          <div className="viewport">
            <div className="widget__item social">
              <a href="//twitter.com/balmuda" target="_blank">
                <span className="icon__social__twitter"></span>
              </a>
              <a href="//facebook.com/balmuda" target="_blank">
                <span className="icon__social__facebook"></span>
              </a>
              <a href="//instagram.com/balmuda" target="_blank">
                <span className="icon__social__instagram"></span>
              </a>
            </div>

            <div className="widget__item">
              <div className="copyright">
                <img src="/_theme/img/svg/balmuda_fff.min.svgz" className="inline-block copyright__balmuda" width="134" height="19" data-no-retina="" />
                <p className="copyright__text">Copyright © BALMUDA Inc. All rights reserved</p>
              </div>
              <div className="region">
                <div className="region__wrap">
                  <p className="text-xs mt-2">中国代理商：星龙达（科贸）北京有限公司</p>
                </div>
              </div>
              <div className="legal">
                <a href="https://corp.balmuda.com" className="legal__link" target="_blank">
                  企業/IR情報
                </a>
                <a href="/jp/legal/privacy" className="legal__link">
                  プライバシーポリシー
                </a>
                <a href="/jp/legal/announcement" className="legal__link">
                  個人情報に関する公表事項
                </a>
                <a href="/jp/legal/terms" className="legal__link">
                  利用規約
                </a>
                <a href="/jp/legal/deal" className="legal__link">
                  特定商取引法に基づく表示
                </a>
                <a href="/jp/30-days/" className="legal__link">
                  30日間返金保証
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
