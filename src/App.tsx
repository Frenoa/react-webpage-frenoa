export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">본문으로 바로가기</a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="프레노아 홈">frenoa<sup>®</sup></a>
        <nav aria-label="주요 메뉴"><a href="#story">브랜드 이야기</a><a href="#values">우리의 철학</a><a href="#promise">프레노아의 약속 ↗</a></nav>
      </header>
      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">✳ &nbsp; FRESH BY NATURE, FRENOA</p>
            <h1 id="hero-title">바르게 키운,<br />새로운 <em>신선함.</em></h1>
            <p className="hero-description">자연의 본래 맛에, 정직한 마음을 더합니다.<br />당신의 일상에 전하는 프레노아의 신선함.</p>
            <a className="text-link" href="#story">우리의 이야기 만나보기 <span aria-hidden="true">↗</span></a>
            <div className="hero-bottom"><span>Naturally Grown.<br />Honestly Fresh.</span><small>SCROLL TO DISCOVER ↓</small></div>
          </div>
          <div className="hero-image"><img src="/images/harvest.png" alt="따뜻한 햇살 아래 나무 상자에 담긴 싱그러운 잎채소와 토마토" fetchPriority="high" width="1536" height="1024" /><div className="image-label"><small>GROWN WITH CARE</small><span>자연을 담고, 진심을 기릅니다.</span></div><div className="round-seal" aria-hidden="true">FRESH &<i>honest</i>FRENOA</div></div>
        </section>
        <div className="brand-line" aria-hidden="true"><span>ROOTED IN NATURE</span><b>✳</b><span>GROWN WITH HONESTY</span><b>✳</b><span>FRESH FOR YOUR EVERYDAY</span></div>
        <section className="story section-wrap" id="story" aria-labelledby="story-title">
          <div><p className="eyebrow">01 — OUR STORY</p><h2 id="story-title">새롭게 키운<br />자연의 신선함.</h2><p className="serif-note">A little closer to nature.</p></div>
          <div className="story-copy"><p className="story-lead">좋은 농산물은 좋은 환경과<br />정직한 재배에서 시작됩니다.</p><p>프레노아는 작물이 필요로 하는 빛과 물, 영양과 시간을 세심하게 살피며 자연이 가진 본래의 맛과 신선함을 지켜냅니다.</p><p>새로운 농업기술을 사용하지만 가장 중요한 것은 변하지 않습니다. 좋은 작물을 바르게 키우는 농부의 마음.</p><p className="story-signature">그것이 <strong>FRENOA</strong>입니다.</p></div>
        </section>
        <section className="values section-wrap" id="values" aria-labelledby="values-title">
          <div className="section-heading"><div><p className="eyebrow">02 — OUR PHILOSOPHY</p><h2 id="values-title">이름에 담은 세 가지 마음.</h2></div><p>Fresh + New + Nature<br />프레노아가 신선함을 만드는 방식</p></div>
          <div className="value-grid">{[
            ['Fresh', '본래의 신선함', '자연이 가진 맛과 싱그러움이 일상에 닿을 수 있도록, 작물의 작은 변화까지 세심하게 살핍니다.'],
            ['New', '더 나은 내일의 재배', '새로운 농업기술로 빛과 물, 영양과 시간을 살피며 작물에게 더 좋은 환경을 만들어갑니다.'],
            ['Nature', '자연을 향한 진심', '기술이 발전해도 우리의 중심은 자연입니다. 좋은 작물을 바르게 키우는 마음을 지켜갑니다.'],
          ].map(([name, title, description], index) => <article className="value" key={name}><div className="value-top"><span>0{index + 1}</span><span aria-hidden="true">↗</span></div><h3>{name}<span>.</span></h3><h4>{title}</h4><p>{description}</p></article>)}</div>
        </section>
        <section className="promise" id="promise" aria-labelledby="promise-title"><p className="eyebrow">03 — OUR PROMISE</p><span className="promise-flower" aria-hidden="true">✳</span><h2 id="promise-title">새로운 기술 위에,<br />변하지 않는 농부의 마음.</h2><p>더 세심하게 살피고, 더 정직하게 키우겠습니다.<br />당신의 식탁에 자연의 좋은 맛이 닿도록.</p><span className="promise-english">Naturally Grown. Honestly Fresh.</span></section>
      </main>
      <footer className="site-footer"><a className="wordmark" href="#home" aria-label="프레노아 홈">frenoa<sup>®</sup></a><p>바르게 키운, 새로운 신선함.</p><span>© {new Date().getFullYear()} FRENOA</span><a href="#home">맨 위로 ↑</a></footer>
    </>
  )
}
