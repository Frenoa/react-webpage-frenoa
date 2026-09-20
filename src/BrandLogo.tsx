export default function BrandLogo() {
  return (
    <a className="brand-logo" href="#home" aria-label="FRENOA — Naturally Grown. 홈으로">
      <img className="brand-symbol" src="/brand-symbol.svg" alt="" width="54" height="64" />
      <span className="brand-lockup">
        <span className="brand-name" aria-hidden="true">FREN<span className="brand-o">O<svg viewBox="0 0 20 12"><path d="M2 10C2 2 10 0 18 1C16 8 10 12 2 10Z" /></svg></span>A</span>
        <span className="brand-tagline" aria-hidden="true">Naturally Grown.</span>
      </span>
    </a>
  )
}
