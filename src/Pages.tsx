import type { ReactNode } from 'react'

function PageIntro({ label, title, children }: { label: string; title: string; children: ReactNode }) {
  return <section className="page-intro"><p className="eyebrow">FRENOA · {label}</p><h1>{title}</h1><p className="page-description">{children}</p></section>
}

export function BrandPage() {
  return <>
    <PageIntro label="브랜드 이야기" title="신선함의 근원은 자연과 바른 농업에 있습니다.">자연에서 시작해, 바른 농업으로 완성하는 신선함.<br />프레노아의 이름에 담긴 생각을 소개합니다.</PageIntro>
    <section className="story section-wrap" aria-labelledby="origin-title">
      <div><p className="eyebrow">우리의 시작</p><h2 id="origin-title">자연의 본질을 지키는<br />농업을 생각합니다.</h2><p className="serif-note">Freshness, rooted in nature.</p></div>
      <div className="story-copy"><p className="story-lead">좋은 먹거리는<br />바르게 키우는 마음에서 시작됩니다.</p><p>프레노아는 자연의 원리를 이해하고, 작물이 가진 본래의 맛과 신선함을 지켜가는 스마트팜 농업 브랜드입니다.</p><p>빛과 물, 영양과 시간을 세심하게 살피는 기술에 농부의 정직한 마음을 더합니다. 우리가 추구하는 것은 일상에서 만나는 좋은 먹거리의 가치입니다.</p></div>
    </section>
    <section className="section-wrap" aria-labelledby="name-title"><div className="section-heading"><div><p className="eyebrow">이름에 담은 철학</p><h2 id="name-title">네 가지 의미, 하나의 약속.</h2></div><p>Fresh + Nature + Origin + Agriculture</p></div><div className="value-grid">{[
      ['FRE', 'Fresh · 신선함', '작물 본연의 맛과 싱그러움이 일상에 닿도록, 신선함을 중심에 둡니다.'],
      ['N', 'Nature · 자연', '자연은 모든 신선함의 시작입니다. 생명의 리듬과 자라는 환경을 이해합니다.'],
      ['O', 'Origin · 본질', '좋은 먹거리의 근원을 생각하며, 재배의 모든 과정에서 기본을 지킵니다.'],
      ['A', 'Agriculture · 농업', '농부의 마음과 스마트팜 기술을 더해, 바른 농업으로 신선함을 완성합니다.'],
    ].map(([letters, title, description]) => <article className="value" key={letters}><h3>{letters}<span>.</span></h3><h4>{title}</h4><p>{description}</p></article>)}</div></section>
    <section className="page-cta"><h2>우리의 생각이 재배의 기준이 됩니다.</h2><a className="text-link" href="/services">프레노아의 서비스 알아보기 <span aria-hidden="true">↗</span></a></section>
  </>
}

export function ServicesPage() {
  return <>
    <PageIntro label="서비스" title="자연을 이해하는 기술, 바르게 키우는 마음.">프레노아는 스마트팜 농업을 바탕으로<br />재배에서 식탁까지 이어지는 신선함을 생각합니다.</PageIntro>
    <section className="section-wrap service-section" aria-labelledby="service-title"><div className="section-heading"><div><p className="eyebrow">우리가 하는 일</p><h2 id="service-title">신선함을 만드는 세 가지 과정.</h2></div></div><div className="service-grid">{[
      ['01', '스마트팜 재배', '작물이 자라기 좋은 환경', '빛과 물, 영양을 세심하게 살피며 작물의 생장에 맞는 환경을 만들어갑니다. 자연의 원리를 이해하는 것이 재배의 출발점입니다.'],
      ['02', '생육 관리', '작은 변화까지 세심하게', '자라는 과정에 꾸준히 관심을 기울이고, 작물이 가진 본래의 맛과 가치를 지키기 위해 재배의 기본을 살핍니다.'],
      ['03', '먹거리의 가치 전달', '일상의 식탁을 생각하며', '바르게 키운 작물의 신선함이 일상에 이어지도록 생각합니다. 좋은 먹거리의 기준과 그 안에 담긴 농업의 이야기를 전합니다.'],
    ].map(([number, title, subtitle, description]) => <article className="service-card" key={number}><span className="eyebrow">{number}</span><h3>{title}</h3><h4>{subtitle}</h4><p>{description}</p></article>)}</div></section>
    <section className="table-story section-wrap"><figure className="table-photo"><img src="/images/natural-table.png" alt="잎채소와 토마토가 놓인 따뜻한 식탁" width="1536" height="1024" loading="lazy" /></figure><div className="table-copy"><p className="eyebrow">우리의 기준</p><h2>기술의 중심에는<br />언제나 자연이 있습니다.</h2><p>더 세심하게 살피고, 더 정직하게 키우는 일.<br />프레노아가 지켜가는 농업의 방식입니다.</p><a className="text-link" href="/products">우리의 제품 살펴보기 <span aria-hidden="true">↗</span></a></div></section>
  </>
}

export function ProductsPage() {
  return <>
    <PageIntro label="우리의 제품" title="바르게 키운 신선함을 당신의 식탁으로.">프레노아가 지향하는 제품의 기준은 단순합니다.<br />자연 본연의 맛, 정직한 재배, 일상에 닿는 신선함.</PageIntro>
    <section className="product-feature section-wrap" aria-labelledby="product-title"><img src="/images/harvest.png" alt="프레노아가 지향하는 신선한 먹거리를 표현한 잎채소와 토마토 이미지" width="1536" height="1024" /><div className="product-copy"><p className="eyebrow">제품 안내</p><h2 id="product-title">좋은 먹거리의 시작을<br />준비하고 있습니다.</h2><p>구체적인 제품과 품종, 판매 일정은 준비되는 대로 이 페이지에서 안내하겠습니다.</p><p className="product-note">사진은 브랜드의 신선함을 표현한 이미지입니다. 실제 판매 제품과 구성은 추후 공개됩니다.</p></div></section>
    <section className="section-wrap" aria-labelledby="standard-title"><div className="section-heading"><div><p className="eyebrow">제품에 담을 약속</p><h2 id="standard-title">본래의 맛을 지키는 세 가지 기준.</h2></div></div><div className="service-grid">{[
      ['본연의 맛', '작물이 가진 고유한 맛과 싱그러움을 소중히 생각합니다.'],
      ['바른 재배', '자연의 원리를 이해하고, 재배 과정의 기본을 지켜갑니다.'],
      ['일상의 신선함', '매일의 식탁에서 좋은 먹거리의 가치를 느낄 수 있도록 준비합니다.'],
    ].map(([title, description]) => <article className="service-card" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    <section className="page-cta"><h2>신선함에 담긴 이야기를 만나보세요.</h2><a className="text-link" href="/about">브랜드 이야기 <span aria-hidden="true">↗</span></a></section>
  </>
}
