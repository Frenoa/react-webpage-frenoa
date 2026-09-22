import { useState } from 'react'
import BrandLogo from './BrandLogo'
import { BrandPage, ServicesPage, ProductsPage } from './Pages'
import './pages.css'


const navigation = [['/', '홈'], ['/about', '브랜드 이야기'], ['/services', '서비스'], ['/products', '우리의 제품']] as const
const slides = [
  { image: 'harvest.png', alt: '햇살 아래 상자에 담긴 잎채소와 토마토', title: <>자연에서 시작하는<br />우리의 신선한 일상.</>, label: 'FRESH FROM NATURE', link: '/about', action: '프레노아 알아보기' },
  { image: 'natural-table.png', alt: '자연광이 드는 식탁 위 신선한 채소', title: <>바르게 키운 마음이<br />당신의 식탁에 닿도록.</>, label: 'FROM FARM TO TABLE', link: '/products', action: '우리의 제품 만나보기' },
]
function Home() {
  const [slide, setSlide] = useState(0)
  const current = slides[slide]
  return <div className="home-page">
    <section className="farm-hero" aria-label="프레노아 소개">
      <img className="farm-hero-photo" src={`/images/${current.image}`} alt={current.alt} fetchPriority="high" width="1536" height="1024" />
      <div className="farm-hero-shade" />
      <div className="farm-hero-copy" aria-live="polite"><p className="eyebrow">{current.label} · FRENOA</p><span className="hello" aria-hidden="true">hello, nature.</span><h1>{current.title}</h1><p>자연을 이해하는 기술, 정직하게 키우는 마음.<br />안녕하세요. 스마트팜 농업 브랜드 프레노아입니다.</p><a className="pill-link" href={current.link}>{current.action}<span aria-hidden="true">↗</span></a></div>
      <div className="hero-caption">NATURALLY GROWN.<br />HONESTLY FRESH.</div>
      <div className="slide-controls"><span>0{slide + 1} / 02</span><button type="button" onClick={() => setSlide((slide + 1) % 2)} aria-label="이전 배너">←</button><button type="button" onClick={() => setSlide((slide + 1) % 2)} aria-label="다음 배너">→</button></div><a className="hero-scroll" href="#discover">SCROLL TO DISCOVER ↓</a>
    </section>
    <section className="intro-strip" id="discover"><p>작은 씨앗에서 시작되는<br /><strong>더 나은 내일의 농업.</strong></p><span>우리는 자연의 속도를 이해하고,<br />기술과 정성으로 신선함을 키웁니다.</span><a href="/about" aria-label="브랜드 이야기 보기">↗</a></section>
    <section className="home-section overview"><div className="home-heading"><p className="eyebrow">MEET FRENOA</p><h2>프레노아를 소개합니다.</h2><p>자연과 농업, 그리고 우리의 일상을 잇는 이야기.</p></div><div className="overview-grid">{[
      ['01', 'Our story', '자연에서 찾은 시작', 'Fresh · Nature · Origin · Agriculture', '/about', '↗'],
      ['02', 'Smart farm', '마음을 담은 기술', '빛과 물, 생육 환경을 세심하게', '/services', '☀'],
      ['03', 'Our products', '일상을 위한 신선함', '본연의 맛을 지키는 먹거리', '/products', '✳'],
      ['04', 'Our promise', '변하지 않는 약속', '바르게 키우고, 정직하게 전합니다', '#promise', '∞'],
    ].map(([number, title, subtitle, text, link, icon]) => <a className="overview-card" href={link} key={number}><div className="overview-top"><span>{number}</span><span aria-hidden="true">↗</span></div><span className="overview-icon" aria-hidden="true">{icon}</span><h3>{title}</h3><h4>{subtitle}</h4><p>{text}</p></a>)}</div></section>
    <section className="home-story home-section"><div className="story-image"><img src="/images/natural-table.png" alt="싱그러운 채소가 놓인 따뜻한 식탁" loading="lazy" width="1536" height="1024" /><span>FROM NATURE,<br />WITH CARE.</span></div><div className="home-story-copy"><p className="eyebrow">ABOUT US</p><h2>좋은 먹거리의 시작,<br />우리는 자연에서<br />답을 찾습니다.</h2><p>프레노아는 자연의 원리를 이해하고, 작물이 가진 본래의 맛과 신선함을 지켜가는 스마트팜 농업 브랜드입니다.</p><p>빛과 물, 영양과 시간을 살피는 기술에 농부의 정직한 마음을 더합니다. 우리가 키우고 싶은 것은 매일의 식탁을 채우는 좋은 먹거리의 가치입니다.</p><a className="text-link" href="/about">우리의 이야기 <span aria-hidden="true">↗</span></a></div></section>
    <section className="home-products home-section"><div className="product-heading"><p className="eyebrow">OUR PRODUCTS</p><h2>Fresh,<br /><em>by nature.</em></h2><p>본연의 맛을 지키고,<br />일상에 신선함을 전합니다.</p><a className="pill-link dark" href="/products">우리의 제품 <span aria-hidden="true">↗</span></a><small>제품과 판매 일정은 준비되는 대로 안내합니다.</small></div><figure><img src="/images/harvest.png" alt="신선한 잎채소와 토마토를 담은 브랜드 이미지" width="1536" height="1024" loading="lazy" /><figcaption>프레노아가 지향하는 신선함을 표현한 이미지입니다.</figcaption></figure></section>
    <section className="home-section home-packaging" id="packaging" aria-labelledby="packaging-title">
      <div className="packaging-heading"><div><p className="eyebrow">THE FRENOA BOX</p><h2 id="packaging-title">바르게 키운,<br />새로운 신선함.</h2></div><p>자연을 존중하고,<br />기술로 세심하게 살피고,<br />농부의 손으로 정직하게 키웠습니다.</p></div>
      <figure className="packaging-figure"><img src="/images/frenoa-premium-tomato-box.png" alt="아이보리 바탕에 짙은 녹색 FRENOA 로고와 바르게 키운, 새로운 신선함. 문구가 인쇄된 프리미엄 토마토 박스. 옆면에는 자연과 기술, 농부의 정직함을 담은 문구가 있습니다." width="1536" height="1024" loading="lazy" /><figcaption><span>FRENOA <span aria-hidden="true"> / </span> PREMIUM TOMATO</span><span>프리미엄 완숙토마토 · 패키지 디자인 시안</span></figcaption></figure>
      <a className="text-link" href="/products">우리의 제품 만나보기 <span aria-hidden="true">↗</span></a>
    </section>
    <section className="home-section home-services"><div className="home-heading service-heading"><div><p className="eyebrow">WHAT WE DO</p><h2>농업의 기본에,<br />세심한 기술을 더합니다.</h2></div><a className="text-link" href="/services">서비스 알아보기 <span aria-hidden="true">↗</span></a></div><div className="home-service-grid">{[
      ['01', 'Smart farming', '스마트팜 재배', '자연의 원리를 이해하며 작물이 자라기 좋은 환경을 만들어갑니다.'],
      ['02', 'Growing with care', '세심한 생육 관리', '작은 변화에도 관심을 기울이며, 재배의 기본을 지켜갑니다.'],
      ['03', 'Everyday freshness', '먹거리의 가치 전달', '바르게 키운 작물의 신선함이 일상의 식탁으로 이어지도록 생각합니다.'],
    ].map(([number, english, title, description]) => <a href="/services" className="home-service-card" key={number}><span className="service-number">{number}</span><p className="eyebrow">{english}</p><h3>{title}<span aria-hidden="true">↗</span></h3><p>{description}</p></a>)}</div></section>
    <section className="home-promise" id="promise"><img src="/brand-symbol.svg" alt="" width="65" height="76" /><p className="eyebrow">OUR PROMISE</p><h2>새로운 기술 위에,<br />변하지 않는 농부의 마음.</h2><p>더 세심하게 살피고, 더 정직하게 키우겠습니다.<br />당신의 식탁에 자연의 좋은 맛이 닿도록.</p><span>Naturally Grown. Honestly Fresh.</span></section>
    <section className="home-contact home-section" id="contact"><div><p className="eyebrow">LET’S GROW TOGETHER</p><h2>반가워요,<br /><em>프레노아입니다.</em></h2></div><div><h3>프레노아가 궁금하신가요?</h3><p>제품 소식과 브랜드의 이야기를 만나보세요.<br />공식 문의 채널은 준비 중입니다.<br />연락처가 확정되면 이곳에서 안내하겠습니다.</p><a className="text-link" href="/about">브랜드 더 알아보기 <span aria-hidden="true">↗</span></a></div></section>
  </div>
}
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  return <><a className="skip-link" href="#main">본문으로 바로가기</a><div className="announcement">자연에서 시작해, 바른 농업으로 완성하는 신선함. <span>FRESH BY NATURE</span></div><header className="site-header" id="top"><BrandLogo /><button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '닫기 ✕' : '메뉴 ☰'}</button><nav id="main-nav" className={menuOpen ? 'is-open' : ''} aria-label="주요 메뉴">{navigation.map(([href, label]) => <a href={href} key={href} aria-current={path === href ? 'page' : undefined}>{label}</a>)}<a className="contact-nav" href="/#contact" onClick={() => setMenuOpen(false)}>Contact us <span aria-hidden="true">↗</span></a></nav></header><main id="main">{path === '/' ? <Home /> : path === '/about' ? <BrandPage /> : path === '/services' ? <ServicesPage /> : path === '/products' ? <ProductsPage /> : <section className="page-intro"><p className="eyebrow">404 · FRENOA</p><h1>페이지를 찾을 수 없습니다.</h1><a className="text-link" href="/">홈으로 돌아가기 ↗</a></section>}</main><footer className="site-footer"><div><BrandLogo /><p>자연에서 시작해, 바른 농업으로 완성하는 신선함.</p></div><div className="footer-links"><a href="/about">브랜드 이야기</a><a href="/services">서비스</a><a href="/products">우리의 제품</a></div><span>© {new Date().getFullYear()} FRENOA<br />Naturally Grown. Honestly Fresh.</span><a href="#top">맨 위로 ↑</a></footer></>
}
