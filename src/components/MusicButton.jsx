import { useState, useEffect, useRef } from 'react';

export default function MusicButton({ autoStart }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Inisialisasi audio hanya sekali
  useEffect(() => {
    const audio = new Audio('/lagu.mp3'); // Mencari file lagu.mp3 di folder public
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  // Handle autoStart
  useEffect(() => {
    if (autoStart && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.log('Autoplay dicegah oleh browser. Pengguna harus menekan tombol play.', err);
        });
    }
  }, [autoStart]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log('Playback error:', err));
    }
  };

  return (
    <button
      id="music-btn"
      className={isPlaying ? 'playing' : ''}
      onClick={toggleMusic}
      aria-label="Toggle Music"
    >
      <div className="music-icon-wrapper">
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isPlaying ? (
            // Pause Icon
            <>
              <line x1="8" y1="5" x2="8" y2="19"></line>
              <line x1="16" y1="5" x2="16" y2="19"></line>
            </>
          ) : (
            // Play Icon
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          )}
        </svg>
      </div>
    </button>
  );
}
