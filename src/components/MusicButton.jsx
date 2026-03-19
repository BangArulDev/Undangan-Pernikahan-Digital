import { useState, useRef, useCallback } from 'react';

function createAmbientMusic() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [261.63, 329.63, 392.0, 493.88];
    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 2);
    gainNode.connect(ctx.destination);

    const oscillators = notes.map((freq) => {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;
      osc.connect(gainNode);
      return osc;
    });

    let playing = false;
    return {
      start() {
        if (!playing) { oscillators.forEach((o) => o.start()); playing = true; }
        gainNode.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.5);
      },
      pause() { gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5); },
      resume() { gainNode.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.5); },
    };
  } catch {
    return null;
  }
}

export default function MusicButton({ autoStart }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const startedRef = useRef(false);

  const startMusic = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = createAmbientMusic();
    }
    if (audioRef.current && !startedRef.current) {
      audioRef.current.start();
      startedRef.current = true;
      setIsPlaying(true);
    }
  }, []);

  // Auto start music when splash closes
  if (autoStart && !startedRef.current) {
    startMusic();
  }

  const handleClick = () => {
    if (!audioRef.current) { startMusic(); return; }
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.resume();
      setIsPlaying(true);
    }
  };

  return (
    <button
      id="music-btn"
      className={isPlaying ? '' : 'paused'}
      aria-label="Toggle musik"
      onClick={handleClick}
    >
      <svg className="play" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
      <svg className="pause" viewBox="0 0 24 24">
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
      </svg>
    </button>
  );
}
