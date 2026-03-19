export default function CoupleSection() {
  return (
    <section id="couple">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Yang Berbahagia</span>
          <h2 className="section-title">Mempelai <em>Kami</em></h2>
          <div className="ornament-divider">
            <span className="ornament-icon">✦</span>
          </div>
        </div>

        <div className="couple-grid">
          {/* Mempelai Pria */}
          <div className="couple-card reveal-left delay-1">
            <img src="/mempelai_pria.jpeg" alt="Agus Yulianto" className="couple-photo" />
            <h3 className="couple-name">Agus Yulianto</h3>
            <p className="couple-role">Mempelai Pria</p>
            <p className="couple-info">
              Putra kedua dari <strong>Bapak Tasmian</strong><br />
              &amp; <strong>Ibu Rusmini</strong><br />
              Dsn Manggihan RT 02 RW 03 Ds Sambung Kec. Godong Kab. Grobogan
            </p>
          </div>

          {/* Ampersand */}
          <div className="couple-ampersand reveal">&amp;</div>

          {/* Mempelai Wanita */}
          <div className="couple-card reveal-right delay-1">
            <img src="/mempelai_wanita.jpeg" alt="Romadlona Savitri" className="couple-photo" />
            <h3 className="couple-name">Romadlona Savitri</h3>
            <p className="couple-role">Mempelai Wanita</p>
            <p className="couple-info">
              Putri ketiga dari <strong>Bapak Gamin</strong><br />
              &amp; <strong>Almh Ibu Darwati</strong><br />
              Dsn Manggihan RT 09 RW 03 Ds Sambung Kec. Godong Kab. Grobogan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
