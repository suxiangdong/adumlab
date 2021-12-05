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
              <Link href="/speaker/setting">设定</Link>
            </li>
            <li className="pagemap__content__item pagemap__content__item--spec">
              <Link href="/speaker/spec">规格</Link>
            </li>
          </ul>
          <div className="pagemap__btns">
            <a href="/support?PRODUCT_SERIES=M01A" className="btn btn--pagemap">
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
              从BALMUDA开始到现在，只有音响是我一直决定不要制作的产品。
              我认为，无论立体声音效播放出的音质有多好，都无法完整重现现场演奏的真实振奋感、临场感以及音乐带来的感动。推翻这个想法的契机为某天某位设计师的提案，
              向您介绍BALMUDA The Speaker的开发故事
            </p>
            <div className="__sign">
              <img
                src="/_theme/img/svg/gen_terao.min.svgz"
                className="__gen_terao"
                width="231"
                height="37"
              />
              <span className="__note">BALMUDA, Inc. CEO 兼 首席设计师　寺尾 玄</span>
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
            <h2 className="section__title">不想制作扬声器</h2>
            <p className="section__txt">
              在创立BALMUDA之前，我是一个音乐人，那是一段充满着不成熟、叛逆、甜蜜与苦楚的时期。
              当我终于按下和弦，木吉他第一次响起的那个瞬间；当乐队四个人的演奏创造出一个崭新律动的时刻；当我们的歌声响彻会场，甚至觉得能传递到会场外面的时刻
              都很难用言语形容，我曾感受过多次只有音乐才能带来的无法言喻的感动。正因为自己亲身演奏过，所以更加认为录制的音源是完全无法与现场演出相比拟。这就是为什么我下决心不制作音响设备的原因。
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
            <h2 className="section__title">高科技</h2>
            <p className="section__txt--large">个</p>
            <p className="section__txt">
              以个人见解来说，我认为没有比音乐更先进的科技。就我们熟悉的音阶来说，低音的「Do」和高八度的「Do」这两个音的频率刚好为倍数关系。在没有精密测量设备的时代，将两种声音之间的空间，分成七部分来创建音阶，到底是怎么做到的呢？组合数值上非常一致的音阶来创作和弦，在这个基础上旋律随着时间的进行发展出节奏，以歌曲的情况来说，就是将诗在此承载进去，演奏便是将各个乐器所编织的音色与人声灯构成要素排列组合而成。顺带一提，所有乐器中最能感动人心的，就是人的声音。人类用于的科学能力和艺术能力再次结合成完美的技术。条理分明却富含人情味，合乎常理又带有熟悉感。譬如说，再三分钟内还有其他让人感到温暖或鼓舞的事物吗？进而，甚至可以在三分钟内改变某个人的人生。
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
            <p className="section__txt">
              推翻我不想制作音响设备的决定的是几位设计师拿来的外观如同卡带录音机形状的原型机。在左右扬声器的中间有一个空间，设计师将这个空间城为舞台。
              他们一定要我听听看，当音乐响起，舞台上的灯光随乐曲而闪烁变化，在副歌时，小镜球竟然开始旋转。
              那是一次很棒的体验，在歌曲的结尾，我就已经决定要做扬声器了。当我请他播放另一首歌时，设计师们露出了为难的表情。因为灯光并不是根据解析这首歌曲而创作的，而是为了这首歌曲专门编写的程序。
              此外，歌曲和灯光各自有独立的开关，如果不同时按下开始键，时机就会不合。一开始的原型机大都会是这样的。我们开始开发AI来解析歌曲，但辨识副歌与间奏真的是非常困难的一件事。毕竟，无论是吉他独奏或是人声，都无法从波形中读取辨识。当设计即将宣告失败之际，另一位设计师拿来一个原型机给我看。他的LED亮度能完美的实现跟着声音的能量而变换，非常简约，其灯光也展现出令人惊讶的音乐感。BALMUDA
              The Speaker就是从众多设计师无止境的提案中诞生的。
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
            <p className="section__txt">
              BALMUDA The
              Speaker外观最大的特征当然是灯光。目的是让你感觉仿佛在观看现场演出版的临场感。不仅随着声音发光，为了表现音乐的复杂性更是经过了反复试验。当然，运用了什么样的方法是商业机密。但我认为他成为了非常具有音乐感的光效。同时，也深思熟虑灯光闪烁的位置。主光源被关在真空管状的灯管中，周围为支柱，透明的外毂将其覆盖住。通过这种方式，将垂直的物件以多层次呈现，床照出复杂的反射光，另外还有一个重点，我很想让他有一种我从做音乐时就一直非常熟知经典音乐设备的那种感觉，随着无线电广播的开始和逐步发展，和谐设备不仅在音响方面在外观上也给人一种难以描述的感觉。我将这些设备带到公司，并与设计师一起分析了他们的特征。正因为这是一种被称为无线扬声器的现代工具，所以我想透过引用古典来制作出一个温馨的工具
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
              No Lyric,
              <br />
              No Life
            </h2>
            <p className="section__txt">
              声音是扬声器的关键，嗯……真的是这样吗？普通扬声器具有尽可能平衡的频率特性，并且在许多情况下，为了让人听起来感觉不错，低音和高音会稍微经过微调，但是，我们是在听来自扬声器的「声音吗？还是在听音乐呢，现代音乐的核心为人声。
              BALMUDA The
              Speaker的音乐制作目标是，可以听到令人感动的歌手的声音，生意是根据乐曲和对歌的尊重而调音的。如果有机会的话，请务必尝试一下我们的扬声器。相信一定已赶到歌后就在身边唱歌。人后就像是巧合一般配置向上发生构造的直径77mm大型扬声器单元，以歌手为中心的调音是其他乐器的轮廓也能被清晰的听到，无意间发生的魔法。虽然只是巧合，但运气也是实力的一部分。
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
            <h2 className="section__title">水晶之夜</h2>
            <p className="section__txt">
              我已经决定好了在人生最后一刻想听的歌，「The Police的「Every Breath You
              Take」，这是全世界我最喜欢的歌曲，我和这首名作邂逅于17岁那年的夏天。我从高中辍学，正准备独自去南欧旅行，出发前几天的一个晚上，同学们聚集在我家。我不记得这是一场送别派对还是践行会，但是以这种方式聚集在一起实在是有点难为情的回忆。几天后憧憬的自由生活即将开始，同时也对什么都必须自己决定的这种自由而感到有点害怕，整个人有点心不在焉的样子。那时一位不太熟的朋友「大村」送了The
              Police的专辑「Synchronicity」给我当做礼物。被嘱咐只需要听第七首歌，按下播放键出现的就是「Every
              Breath You
              Take」。前奏响起的瞬间，我屏住了呼吸，明明只有一台卡带录音机，但我眼前却是音乐带来的无限广阔的世界。那是一个高度透明、湿度适中、悲伤又甜蜜的世界。直到现在，我仍然无法忘记听完歌曲后那片独自仰望过的夜空和微风，没错，音乐真的很棒！
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
