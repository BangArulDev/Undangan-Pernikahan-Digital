const ATTENDANCE_EMOJI = {
  Hadir: '✅',
  'Tidak Hadir': '❌',
  'Masih Ragu': '🤔',
};

export default function UcapanSection({ messages }) {
  return (
    <section id="ucapan">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Doa &amp; Ucapan</span>
          <h2 className="section-title">Ucapan <em>Tamu</em></h2>
          <div className="ornament-divider">
            <span className="ornament-icon">✦</span>
          </div>
        </div>

        <div className="ucapan-list reveal" id="ucapan-list">
          {messages.length === 0 ? (
            <p className="ucapan-empty">
              Belum ada ucapan. Jadilah yang pertama mengucapkan doa! 🌸
            </p>
          ) : (
            [...messages].reverse().map((item, i) => {
              const initial = item.name ? item.name.charAt(0).toUpperCase() : '?';
              const emoji = ATTENDANCE_EMOJI[item.attendance] || '💌';
              return (
                <div key={i} className="ucapan-item">
                  <div className="ucapan-header">
                    <div className="ucapan-avatar">{initial}</div>
                    <div>
                      <div className="ucapan-name">{item.name}</div>
                      <div className="ucapan-attendance">{emoji} {item.attendance}</div>
                    </div>
                  </div>
                  <p className="ucapan-message">
                    &ldquo;{item.message || 'Semoga bahagia selalu.'}&rdquo;
                  </p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
