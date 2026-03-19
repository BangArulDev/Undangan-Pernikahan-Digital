import { useState } from 'react';

export default function RSVPSection({ onSubmit }) {
  const [form, setForm] = useState({ name: '', attendance: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) { onSubmit(null, 'Mohon isi nama Anda terlebih dahulu.'); return; }
    if (!form.attendance) { onSubmit(null, 'Mohon pilih konfirmasi kehadiran.'); return; }

    const entry = { ...form, timestamp: Date.now() };
    onSubmit(entry, 'Ucapan berhasil dikirim! 🌸');
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({ name: '', attendance: '', message: '' });
    setSubmitted(false);
  };

  return (
    <section id="rsvp">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Konfirmasi Kehadiran</span>
          <h2 className="section-title">RSVP &amp; <em>Ucapan</em></h2>
          <div className="ornament-divider">
            <span className="ornament-icon">✦</span>
          </div>
          <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginTop: '12px' }}>
            Kehadiran Anda adalah kebahagiaan kami. Mohon konfirmasi kehadiran
            sebelum <strong>5 April 2025</strong>.
          </p>
        </div>

        <div className="rsvp-wrapper reveal delay-1">
          <h3>Kirim Ucapan &amp; Doa 💌</h3>

          {!submitted ? (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="rsvp-name">Nama Lengkap</label>
                <input
                  type="text"
                  id="rsvp-name"
                  name="name"
                  placeholder="Masukkan nama Anda..."
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="rsvp-attendance">Konfirmasi Kehadiran</label>
                <select
                  id="rsvp-attendance"
                  name="attendance"
                  value={form.attendance}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>— Pilih konfirmasi kehadiran —</option>
                  <option value="Hadir">✅ Insya Allah Hadir</option>
                  <option value="Tidak Hadir">❌ Maaf, Tidak Bisa Hadir</option>
                  <option value="Masih Ragu">🤔 Masih Belum Pasti</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="rsvp-message">Ucapan &amp; Doa</label>
                <textarea
                  id="rsvp-message"
                  name="message"
                  placeholder="Tulis ucapan dan doa untuk kedua mempelai..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn-rsvp">
                Kirim Ucapan 💌
              </button>
            </form>
          ) : (
            <div className="rsvp-success visible">
              <h4>Jazakallah Khairan! 🌸</h4>
              <p>Terima kasih atas ucapan dan doa yang indah. Kehadiran Anda sangat kami nantikan.</p>
              <button
                onClick={handleReset}
                style={{
                  marginTop: '16px',
                  background: 'none',
                  border: '1px solid var(--gold)',
                  padding: '8px 24px',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  color: 'var(--gold)',
                  fontSize: '0.85rem',
                }}
              >
                Kirim lagi
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
