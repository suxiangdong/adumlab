import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layouts/default'

export default function ProductDetail() {
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/speaker/style/mobile.css?20210701173839"></link>
        <link
          rel="stylesheet"
          media="(min-width: 641px)"
          href="/speaker/style/desktop.css?20210701173839"></link>
      </Head>
      <div className="pagemap--desktop __header __is_desktop" id="greedynav">
        <div className="pagemap__content">
          <Link href="/speaker/">
            <a className="pagemap__content--logo">
              <img src="/_theme/img/svg/balmuda-the-speaker.svgz" alt="BALMUDA The Speaker" />
            </a>
          </Link>
          <ul className="pagemap__main" id="greedynav-links">
            <li className="pagemap__content__item pagemap__content__item--index ">
              <Link href="/speaker/">概要</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--technology">
              <Link href="/speaker/technology">科技</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--story __current">
              <Link href="/speaker/story">故事</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--setting">
              <Link href="/speaker/setting">设置</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/speaker/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a
              href="https://store.balmuda.com/disp/CBlSfSelectGoodsPage.jsp?PRODUCT_SERIES=M01A"
              className="btn btn--pagemap">
              购买
            </a>
          </div>
        </div>
      </div>
      <div className="section section--story section--00 scrollLoader lazyload">
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h1>
              <span>BALMUDA The Speaker</span>
              <span>开发故事</span>
            </h1>
            <p>
              <span>从开始到现在。</span>
              <span>我决定不做音频设备。</span>
              <span>不管立体声源播放得多好，</span>
              <span>真正的兴奋感和临场感，</span>
              <span>音乐的感动必须重现</span>
              <span>因为我一直在想。</span>
              <span>推翻这种想法的是:</span>
              <span>有一天设计师的提案成为了契机。</span>
              <br />
              下面介绍 BALMUDA The Speaker 的开发故事。
            </p>
            <div className="__sign">
              <img
                src="/_theme/img/svg/gen_terao.min.svgz"
                className="__gen_terao"
                width="231"
                height="37"
              />
              <span className="__note">巴慕达代表　寺尾 玄</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--story section--01 scrollLoader lazyload">
        <img
          data-mobile="https://www.balmuda.com/jp/speaker/img/story/mobile/section--01.jpg?20200325"
          data-desktop="https://www.balmuda.com/jp/speaker/img/story/desktop/section--01.jpg?20200325"
          data-retina="https://www.balmuda.com/jp/speaker/img/story/desktop/section--01@2x.jpg?20200325"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/speaker/img/story/desktop/section--01@2x.jpg?20200325"
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">不制造扬声器</h2>
            <p className="section__txt--large">バ</p>
            <p className="section__txt">
              在创立巴慕达之前，我是一名音乐人。那个时代既幼稚又叛逆，既甜又苦。好不容易按下的代码第一次响起原声吉他的瞬间。通过乐队4人的演奏，产生了之前没有的grove的时候。声音跑得快到会场外都能听到的时候。无数次体味着无法言喻的、只能用音乐来形容的感动。正因为是自己演奏的，所以才会有这样的想法，但是，被录音的音源绝对比不上现场的精彩演奏。所以我决定不做音频设备。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--02 scrollLoader lazyload">
        <img
          data-mobile="https://www.balmuda.com/jp/speaker/img/story/mobile/section--02.jpg?20200325"
          data-desktop="https://www.balmuda.com/jp/speaker/img/story/desktop/section--02.jpg?20200325"
          data-retina="https://www.balmuda.com/jp/speaker/img/story/desktop/section--02@2x.jpg?20200325"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/speaker/img/story/desktop/section--02@2x.jpg?20200325"
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">最高的科学技术</h2>
            <p className="section__txt--large">个</p>
            <p className="section__txt">
              我个人认为，没有比音乐更先进的科学技术了。我们熟悉的音阶。下面的“抖”和上面的“抖”这两个音，频率正好加倍。在没有精密测量仪器的时代，人们将这两个音之间分成7个音阶。到底是怎么做的呢?将数字上非常具有整合性的音阶组合成和音，在此基础上有旋律和随着时间进行的节奏，主唱曲的情况下，这里会有诗。而且在演奏这个的基础上，各乐器交织的音色，甚至是活生生的人的声音作为构成要素排列。顺便说一下，所有乐器中最能打动人的是人的声音。是人类拥有的科学力和艺术力汇集到此的了不起的技术。明明条理清晰，却很有人情味。明明是正确的，却很亲切。例如。还有什么能在3分钟内让别人感到温暖、振奋的呢?在最严重的情况下，3分钟就能改变某人的人生。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--03 scrollLoader lazyload">
        <img
          data-mobile="https://www.balmuda.com/jp/speaker/img/story/mobile/section--03.jpg?20200325"
          data-desktop="https://www.balmuda.com/jp/speaker/img/story/desktop/section--03.jpg?20200325"
          data-retina="https://www.balmuda.com/jp/speaker/img/story/desktop/section--03@2x.jpg?20200325"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/speaker/img/story/desktop/section--03@2x.jpg?20200325"
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">一些发明</h2>
            <p className="section__txt--large">オ</p>
            <p className="section__txt">
              推翻了我不做迪奥机器的决心的，是某设计师们制作的一款外形像收录机的概念机型。左右扬声器的中间是空洞，这个空洞被他们称为舞台。总之请听我说，我观察着情况。配合着曲子舞台的书写发生了变化，在副歌的时候，小小的镜面球开始转动了。那是很棒的体验，在歌曲的结尾，我已经决定要做扬声器了。然后，当我请求他们放一首不同的歌…设计师们露出困惑的表情。为什么如果右派是曲,解析了闪闪发光的,而是被这首歌曲专用程序,甚至,歌曲和写分别拥有不同的开关的不负责的同时开关杆上果岭和时机不符合。嗯，最初的样机都是这样的。我们为了分析曲子而开发了AI，但是识别副歌和间奏的难度是没有的。毕竟，从波形上看不出是吉他独奏还是主唱。在计划即将受挫的时候，另一位设计师拿着样机过来，让我看看。他的演示机是LED的亮度完美地追随声音的能量。非常简单。而且，那光芒是惊人的音乐性。BALMUDA
              The Speaker 是由多位设计师精心策划而成的。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--04 scrollLoader lazyload">
        <img
          data-mobile="https://www.balmuda.com/jp/speaker/img/story/mobile/section--04.jpg?20200325"
          data-desktop="https://www.balmuda.com/jp/speaker/img/story/desktop/section--04.jpg?20200325"
          data-retina="https://www.balmuda.com/jp/speaker/img/story/desktop/section--04@2x.jpg?20200325"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/speaker/img/story/desktop/section--04@2x.jpg?20200325"
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title __wb">设计和光</h2>
            <p className="section__txt--large">B</p>
            <p className="section__txt">
              BALMUDA The Speaker
              外观上最大的特征当然是它的光。目标是让人感觉就像在看现场演出一样，身临其境。不仅仅是配合着声音发光，为了表现音乐所具有的复杂性而不断尝试。做了怎样的努力虽然是企业机密，但是我觉得成为了非常音乐的光。同时想到的是那些光明灭的地方。主光源关在真空管式的管里，周围有支架，覆盖这些外围的透明部件。像这样，通过多层次地排列纵向对象，也能制造出复杂的反射光。还有一点。我想让它拥有从音乐时代开始就熟悉的复古音乐器材的氛围。随着广播的开始而诞生，并一步步进步的这些器材，声音自不必说，外表上也有着无法用语言表达的温暖。我把这些旧器材拿到公司，和设计师们一起分析它们的特点。正因为是无线扬声器这种现代的工具。我想从古老的好东西中引用，制作出温暖的道具。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--05 scrollLoader lazyload">
        <img
          data-mobile="https://www.balmuda.com/jp/speaker/img/story/mobile/section--05.jpg?20200325"
          data-desktop="https://www.balmuda.com/jp/speaker/img/story/desktop/section--05.jpg?20200325"
          data-retina="https://www.balmuda.com/jp/speaker/img/story/desktop/section--05@2x.jpg?20200325"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/speaker/img/story/desktop/section--05@2x.jpg?20200325"
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">
              无情趣，
              <br />
              无生活
            </h2>
            <p className="section__txt--large">ス</p>
            <p className="section__txt">
              皮克的生命是声音。真的是这样吗?通常的扬声器，频率特性尽可能的平坦，加上很多的情况，啊，好的声音，为了让人感觉，低音和高音稍微化妆的声音制作。但是，我们真的是在听扬声器发出的“声音”吗?还是在听“音乐”?现代音乐的核心是主唱。BALMUDA
              The
              Speaker的声音制作目标是，让歌手的声音听起来令人感动。从乐曲，以及对歌曲的尊重进行了声音的调谐。如果有机会的话，请一定要试试我们的扬声器。主唱应该听起来很近。这有一半是巧合，直径为77毫米的大喇叭单元向上配置的构造和以主唱为中心的声音制作的混音，其他的乐器的轮廓也能清楚地听，并且遗漏好的魔术也产生了。不过，只是偶然。运气也是实力的一部分。
            </p>
          </div>
        </div>
      </div>

      <div className="section section--story section--06 scrollLoader lazyload">
        <img
          data-mobile="https://www.balmuda.com/jp/speaker/img/story/mobile/section--06.jpg?20200325"
          data-desktop="https://www.balmuda.com/jp/speaker/img/story/desktop/section--06.jpg?20200325"
          data-retina="https://www.balmuda.com/jp/speaker/img/story/desktop/section--06@2x.jpg?20200325"
          className="__image adaptiveimage"
          src="https://www.balmuda.com/jp/speaker/img/story/desktop/section--06@2x.jpg?20200325"
        />
        <div className="viewport scrollLoader fadeInUp lazyload">
          <div className="__content">
            <h2 className="section__title">水晶般的夜晚</h2>
            <p className="section__txt--large">私</p>
            <p className="section__txt">
              决定了人生最后要听的曲子。那是这个世界上最喜欢的曲子。警察乐队的「Every Breath You
              Take」。与这首名曲的相遇，是在17岁的夏天。我高中辍学，一个人打算去南欧旅行。离出发还有几天的一天晚上，同学们聚集在了我家。我不记得是壮行会还是欢送会，但像这样聚在一起，总觉得有些难为情。我对几天后开始的完全自由的日子充满了憧憬，同时也亲身感受到了凡事都必须由自己决定的自由的可怕，所以不知为何有些心不在焉。那时，一个叫大村君的不太熟的朋友送给我的礼物，是the
              police的“同步城市”CD。只听第七首歌。按下播放键的是「Every Breath You
              Take」。前奏响起的瞬间，我屏住了呼吸。那里明明只有收录机，在我的眼前却是乐曲所拥有的广阔的世界。那是一个透明度高，湿度适中，既悲伤又温馨的世界。那之后，一个人走到外面仰望的夜空和吹过的风，至今仍无法忘记。没错。音乐真是个好东西啊。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
