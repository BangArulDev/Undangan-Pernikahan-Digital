import { useState, useEffect } from 'react';

export default function SplashScreen({ onOpen, hidden }) {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setEnvelopeOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="splash-screen" className={hidden ? 'hidden' : ''}>
      <div className="splash-content">
        <p className="splash-bismillah">Bismillahirrahmanirrahim</p>

        <div
          className={`splash-envelope ${envelopeOpen ? 'open' : ''}`}
          onClick={() => setEnvelopeOpen(true)}
        >
          <div className="envelope-body">
            <div className="envelope-flap"></div>
            <div className="envelope-letter">Agus &amp; Savitri</div>
          </div>
        </div>

        <h1 className="splash-title">Wedding Invitation</h1>
        <p className="splash-subtitle">Agus Yulianto &amp; Romadlona Savitri</p>

        <button className="splash-btn" onClick={onOpen}>
          Buka Undangan
        </button>
      </div>
    </div>
  );
}
