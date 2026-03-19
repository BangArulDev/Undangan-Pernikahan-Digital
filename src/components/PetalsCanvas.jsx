import { useEffect, useRef } from 'react';

const PETAL_COUNT = 18;
const colors = [
  'rgba(212, 160, 160, 0.6)',
  'rgba(201, 169, 110, 0.4)',
  'rgba(245, 230, 230, 0.7)',
  'rgba(255, 255, 255, 0.5)',
];

export default function PetalsCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Petal {
      constructor() { this.reset(true); }
      reset(init = false) {
        this.x = Math.random() * canvas.width;
        this.y = init ? Math.random() * canvas.height * 2 - canvas.height : -20;
        this.r = Math.random() * 8 + 4;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = Math.random() * 0.8 + 0.4;
        this.rot = Math.random() * Math.PI * 2;
        this.vrot = (Math.random() - 0.5) * 0.04;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.5 + 0.3;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rot += this.vrot;
        if (this.y > canvas.height + 20) this.reset();
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rot);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, this.r, this.r * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const petals = Array.from({ length: PETAL_COUNT }, () => new Petal());
    let animId;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petals.forEach((p) => { p.update(); p.draw(); });
      animId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas id="petals-canvas" ref={canvasRef}></canvas>;
}
