import { useCountdown } from '../hooks/useCountdown';

export default function CountdownSection() {
  const { days, hours, minutes, seconds, isDone } = useCountdown();

  return (
    <section id="countdown">
      <div className="container">
        <h2 className="countdown-title reveal">Menuju Hari Bahagia</h2>
        <p className="countdown-subtitle reveal delay-1">8 April 2026</p>

        {isDone ? (
          <p className="countdown-done-msg">
            Alhamdulillah, kami telah menikah! 🎉
          </p>
        ) : (
          <div className="countdown-grid reveal delay-2">
            <div className="countdown-item">
              <div className="countdown-num">{days}</div>
              <div className="countdown-label">Hari</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-num">{hours}</div>
              <div className="countdown-label">Jam</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-num">{minutes}</div>
              <div className="countdown-label">Menit</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-num">{seconds}</div>
              <div className="countdown-label">Detik</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
