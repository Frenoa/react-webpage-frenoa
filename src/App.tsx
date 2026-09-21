import BrandLogo from './BrandLogo'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">본문으로 바로가기</a>
      <header className="site-header">
        <BrandLogo />
        <nav aria-label="주요 메뉴"><a href="#story">브랜드 이야기</a><a href="#values">우리의 철학</a><a href="#promise">프레노아의 약속 ↗</a></nav>
      </header>
      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="sun-dot" aria-hidden="true" /> FRESH BY NATURE, FRENOA</p>
            <h1 id="hero-title">자연에서 시작한,<br />바르게 키운 <em>신선함.</em></h1>
            <p className="hero-description">자연에서 시작해, 바른 농업으로 완성하는 신선함.<br />프레노아는 자연의 본질을 지키는 스마트팜 농업 브랜드입니다.</p>
            <a className="text-link" href="#story">우리의 이야기 만나보기 <span aria-hidden="true">↗</span></a>
            <div className="hero-bottom"><span>Naturally Grown.<br />Honestly Fresh.</span><small>SCROLL TO DISCOVER ↓</small></div>
          </div>
          <div className="hero-image"><img src="/images/harvest.png" alt="따뜻한 햇살 아래 나무 상자에 담긴 싱그러운 잎채소와 토마토" fetchPriority="high" width="1536" height="1024" /><div className="image-label"><small>GROWN WITH CARE</small><span>자연을 담고, 진심을 기릅니다.</span></div><div className="round-seal" aria-hidden="true">FRESH &<i>honest</i>FRENOA</div></div>
        </section>
        <div className="brand-line" aria-hidden="true"><span>ROOTED IN NATURE</span><b>✳</b><span>GROWN WITH HONESTY</span><b>✳</b><span>FRESH FOR YOUR EVERYDAY</span></div>
        <section className="story section-wrap" id="story" aria-labelledby="story-title">
          <div><p className="eyebrow">01 — OUR STORY</p><h2 id="story-title">신선함의 근원을<br />자연에서 찾습니다.</h2><p className="serif-note">Freshness, rooted in nature.</p></div>
          <div className="story-copy"><p className="story-lead">신선함의 근원은<br />자연과 바른 농업에 있습니다.</p><p>FRENOA는 Fresh, Nature, Origin, Agriculture를 담은 이름입니다. 신선함, 자연, 본질, 농업. 네 가지 의미가 프레노아의 방향을 만듭니다.</p><p>우리는 스마트팜 기술로 작물이 필요로 하는 빛과 물, 영양과 시간을 세심하게 살핍니다. 자연의 원리를 이해하고 바르게 재배하며, 작물이 가진 본래의 맛과 신선함을 지켜갑니다.</p><p className="story-signature">자연에서 시작해, 바른 농업으로 완성하는 신선함.<br />그것이 <strong>FRENOA</strong>입니다.</p></div>
        </section>
        <section className="table-story section-wrap" aria-labelledby="table-title">
          <figure className="table-photo"><img src="/images/natural-table.png" alt="아침 햇살이 드는 크림색 리넨 식탁 위, 도자기 그릇에 담긴 신선한 잎채소와 토마토" width="1536" height="1024" loading="lazy" /><figcaption>FRESHNESS, AT YOUR TABLE</figcaption></figure>
          <div className="table-copy"><p className="eyebrow">FROM NATURE TO YOUR EVERYDAY</p><h2 id="table-title">자연에서 시작해,<br />당신의 식탁으로.</h2><p>싱그러운 잎의 빛깔, 한 입에 전해지는 본래의 맛.<br />좋은 것을 고르는 마음에<br />프레노아의 정직한 신선함으로 답합니다.</p><a className="text-link" href="#promise">식탁에 전하는 우리의 약속 <span aria-hidden="true">↗</span></a></div>
        </section>
        <section className="values section-wrap" id="values" aria-labelledby="values-title">
          <div className="section-heading"><div><p className="eyebrow">02 — OUR PHILOSOPHY</p><h2 id="values-title">이름에 담은 네 가지 약속.</h2></div><p>Fresh + Nature + Origin + Agriculture<br />프레노아가 신선함을 만드는 방식</p></div>
          <div className="value-grid">{[
            ['FRE', 'Fresh', '신선함', '자연이 가진 맛과 싱그러움을 당신의 일상에 전합니다. 작물의 작은 변화까지 세심하게 살피며 본래의 신선함을 지켜갑니다.'],
            ['N', 'Nature', '자연', '모든 신선함의 시작은 자연입니다. 빛과 물, 생명의 리듬을 이해하고 작물이 건강하게 자랄 환경을 만들어갑니다.'],
            ['O', 'Origin', '본질', '좋은 먹거리의 근원을 생각합니다. 작물 본연의 맛과 가치를 중심에 두고, 재배의 모든 과정에서 기본을 지킵니다.'],
            ['A', 'Agriculture', '농업', '바른 농업으로 신선함을 완성합니다. 농부의 정직한 마음에 스마트팜 기술을 더해, 더 세심하고 책임 있게 키웁니다.'],
          ].map(([letters, name, title, description]) => <article className="value" key={name}><div className="value-top"><span>{letters} — {name}</span><span aria-hidden="true">↗</span></div><h3>{letters}<span>.</span></h3><h4>{name} <span>· {title}</span></h4><p>{description}</p></article>)}</div>
        </section>
        <section className="promise" id="promise" aria-labelledby="promise-title"><p className="eyebrow">03 — OUR PROMISE</p><img className="promise-symbol" src="/brand-symbol.svg" width="64" height="76" alt="씨앗에서 새싹으로, 햇빛을 향해 자라는 프레노아 심볼" /><h2 id="promise-title">새로운 기술 위에,<br />변하지 않는 농부의 마음.</h2><p>더 세심하게 살피고, 더 정직하게 키우겠습니다.<br />당신의 식탁에 자연의 좋은 맛이 닿도록.</p><span className="promise-english">Naturally Grown. Honestly Fresh.</span></section>
      </main>
      <footer className="site-footer"><BrandLogo /><p>자연에서 시작해, 바른 농업으로 완성하는 신선함.</p><span>© {new Date().getFullYear()} FRENOA</span><a href="#home">맨 위로 ↑</a></footer>
    </>
  )
}
