import { useState } from 'react';
import Lightbox from './Lightbox';

const GALLERY_ITEMS = [
  { src: '/galeri1.jpeg', alt: 'Foto prewedding 1', className: 'span-2' },
  { src: '/galeri2.jpeg', alt: 'Foto prewedding 2', className: 'tall' },
  { src: '/galeri3.jpeg', alt: 'Foto prewedding 3', className: '' },
  { src: '/galeri4.jpeg', alt: 'Foto prewedding 4', className: '' },
];

export default function GallerySection() {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  return (
    <section id="gallery">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Foto Bersama</span>
          <h2 className="section-title">Galeri <em>Kenangan</em></h2>
          <div className="ornament-divider">
            <span className="ornament-icon">✦</span>
          </div>
        </div>

        <div className="gallery-grid reveal">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`gallery-item ${item.className}`}
              onClick={() => setLightboxSrc(item.src)}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="gallery-item-overlay">🔍</div>
            </div>
          ))}
        </div>
      </div>

      {lightboxSrc && (
        <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      )}
    </section>
  );
}
