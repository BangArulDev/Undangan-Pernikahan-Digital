import { useEffect } from 'react';

export default function Lightbox({ src, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!src) return null;

  return (
    <div
      className="lightbox-overlay active"
      role="dialog"
      aria-modal="true"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <button className="lightbox-close" aria-label="Tutup" onClick={onClose}>
        &times;
      </button>
      <img src={src} alt="Gallery" />
    </div>
  );
}
