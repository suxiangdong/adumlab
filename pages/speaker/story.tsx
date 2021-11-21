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
              href="/support?PRODUCT_SERIES=M01A"
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
              从最初创立BALMUDA、直到现在。 我都决定绝不开发音响类的产品。 不管是多么优质的音源，
              都无法再现临场演奏带来的那种真实的内心感动和临场感 音乐带来的感动是无法再现的
              这是我一直以来的想法 颠覆我这个想法的 是某一天一个公司的设计带来的提案 下面介绍BALMUDA
              The Speaker的开发故事
            </p>
            <div className="__sign">
              <img
                src="/_theme/img/svg/gen_terao.min.svgz"
                className="__gen_terao"
                width="231"
                height="37"
              />
              <span className="__note">BALMUDA代表　寺尾 玄</span>
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
            <h2 className="section__title">不开发音响产品</h2>
            <p className="section__txt">
              在创立BALMUDA之前，我是一个音乐人。那个时期，我不成熟又叛逆，甘苦参半。第一次用原声吉他弹出和旋的时刻，4人乐团第一次演奏出前所未有的节奏的一刻，仿佛场外观众都能听见般的放声高歌的瞬间…我体验过许许多多无法言喻的，只有音乐才能带来的感动。正是因为这样，我认为录音后的音源，绝对无法在线如此美妙的演奏。所以，我一直决定，绝不生产音响类产品。
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
            <h2 className="section__title">顶级科技</h2>
            <p className="section__txt--large">个</p>
            <p className="section__txt">
              虽然只是我自己的见解，我觉得没有比音乐更高级的科学技术了。比如我们熟悉的音阶，低音do和高音do的周波数，刚好是一倍之差。
              在没有精密测量仪器的时代，将这样的声音分成7个，发明了音阶。到底是如何实现的呢？用这种数字上被高度统合的音阶组成和旋，在形成旋律，随着时间的进程形成节奏，有演唱的时候，还有诗歌被加入进去。再通过演奏，交织各类乐器的音色，与此同时人类的声线也作为重要的构成要素。不得不说，在各种乐器当中，最动人的还是人的声音。音乐就是这样将人类的科学力与艺术性完美结合的技术。既井然有序又充满人性。精确却感怀深厚。还有什么东西能3分钟就能温暖和振奋人心，或是在重要的场合，3分钟就改变一个人的人生么？
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
            <h2 className="section__title">几个发明</h2>
            <p className="section__txt">
              颠覆了我不制作音响设备决心的，是设计师们制作的，像随身听一样形状的概念模型。
              左右扬声器的中间是空的，他们称为舞台。在一再要求下试听了一下。随着曲子的变化舞台的灯光也发生了变化，副歌部分居然开始出现了小小的镜面球。那是一次很棒的体验，在歌曲的结尾，我已经决定制作音箱了。于是我拜托他们播放不同的曲子……设计师们露出为难的表情。之所以这样说，是因为灯光并不是通过分析曲子而发出的光芒，而是专门针对这首曲子的编程，而且，曲子和灯光是各自由拥有不同开关的负责人同持有，不同时打开开关的话，节奏就对不准。不过，最初的演示机总是这样的。我们为了分析曲子而着手开发AI，但是没有比识别副歌和间奏更难的了。毕竟无法通过波形来读取并认知是吉他独奏还是主唱人声。计划受挫的时候，别的设计师又拿来了新的演示机，他的演示机让LED的亮度完美地跟随了声音的能量。非常简单，而且，那光有着惊人的音乐性。BALMUDA
              The Speaker是在好几位设计师的不懈努力提案中产生的
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
            <h2 className="section__title __wb">设计与光</h2>
            <p className="section__txt">
              BALMUDA The
              Speaker外观上最大的特征，当然是他的光。仿佛在看演唱会舞台一样，能感受到临场感，是我们的目标。
              不仅仅是配合声音发光，为了表现音乐所具有的复杂度，我们进行了反复的尝试。虽然花了什么样的工夫是企业机密，但是确实成为了非常具有音乐性的光芒。同时考虑的是，那些光闪烁的地方。主光源被封闭在真空管中，周围是支柱，然后是覆盖其外围的透明部件。如上所述，将立式物体多层放置，产生复杂的反射光。还有一点，想要让它具有我个人过去的音乐时代就十分喜欢的复古音乐器材的氛围。出生在广播诞生的年代的我，一步一步的看着这些器材的进步，不仅是声音，外形也有着无法言喻的温暖。我把以前的器材带到了公司，让设计师们分析了特征。正因为是蓝牙音箱这种现代道具，更想从古老的经典中引用，制作出温暖的道具。
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
              生命不息、
              <br />
              抒情不止
            </h2>
            <p className="section__txt">
              扬声器的声音是生命。嗯？真的是这样吗？通常的扬声器频率特性应该是平缓的，大多数情况下，为了让人感觉到好的音质。
              我们做出的声音，稍微修饰了低音和高音。但是，我们真的是在听从扩音器发出的“声音”吗？还是在听“音乐”呢？现代音乐的核心是主唱。BALMUDA
              The
              Speaker想要达到的，是让歌手的声音听起来令人感动。带着对乐曲和歌曲的尊重对声音进行调试。有机会的话，请一定要试试我们的扬声器。应该能感到主唱的声音近在眼前。而且非常意外的……将直径77毫米的大尺寸扬声器向上配置的构造，结合和以主唱为中心的声音表现，让其他乐器的轮廓也能清晰地被展现，产生了更加美妙的化学反应。虽说是偶然，但运气也是实力的一部分。
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
            <h2 className="section__title">水晶般的夜</h2>

            <p className="section__txt">
              我早就决定了人生的最后要听的曲子。那是这个世界上我最喜欢的曲子。是扎波利斯的《Every
              Breath You Take》。与这首名曲的相遇，是在17岁的夏天。
              我高中中退，想一个人去南欧旅行。出发前的某个晚上，同学们聚集在了我家。虽然不记得是践行会还是送别会，但是像这样聚集在一起也是很难忘的回忆。我对即将开始的自由日子充满了憧憬，同时身体也感受到了凡事都必须自己决定的自由的恐怖，总觉得心不在焉。那个时候，一个关系一般的叫大村的朋友送给我的礼物，就是扎・波利斯的一张名为《同步城》的CD，告诉我只听第7首歌就好。按下播放按钮就是这首“Every
              Breath You
              Take”。前奏响起的瞬间，我屏住了呼吸。明明那里的只是一台随身听，但是在我的眼前却展开了乐曲所拥有的广阔世界。那是一个透明的、湿度适中、悲伤而又甜蜜的世界。在那之后，一个人到外面仰望的夜空和吹过的风，至今都无法忘记。是的，音乐真的是很好的东西呢。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
