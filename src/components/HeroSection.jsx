export default function HeroSection() {
  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-bismillah">Bismillahirrahmanirrahim</p>
        <p className="hero-the-wedding">The Wedding of</p>
        <h1 className="hero-names">
          Agus Yulianto
          <span className="ampersand">&amp;</span>
          Romadlona Savitri
        </h1>
        <div className="hero-date-badge">
          <p className="hero-date-text">Rabu, 8 April 2026</p>
        </div>
        <p className="hero-quote">
          &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri.&rdquo;
          <br />
          <em style={{ fontSize: '0.8em', opacity: 0.8 }}>— QS. Ar-Rum: 21</em>
        </p>
      </div>
      <div className="hero-scroll">
        <div className="hero-scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
