import { useState, useEffect } from 'react';

const WEDDING_DATE = new Date('2026-04-08T08:00:00+07:00');

function pad(n) {
  return String(n).padStart(2, '0');
}

export function useCountdown() {
  const [time, setTime] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00', isDone: false });

  useEffect(() => {
    function tick() {
      const now = new Date();
      const diff = WEDDING_DATE - now;

      if (diff <= 0) {
        setTime({ days: '00', hours: '00', minutes: '00', seconds: '00', isDone: true });
        return;
      }

      setTime({
        days: pad(Math.floor(diff / 86400000)),
        hours: pad(Math.floor((diff % 86400000) / 3600000)),
        minutes: pad(Math.floor((diff % 3600000) / 60000)),
        seconds: pad(Math.floor((diff % 60000) / 1000)),
        isDone: false,
      });
    }

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}
