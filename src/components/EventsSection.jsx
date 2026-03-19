const EVENTS = [
  {
    icon: '🕌',
    type: 'Acara Pertama',
    name: 'Akad Nikah dan Resepsi',
    date: 'Rabu, 8 April 2026',
    time: '08.00 WIB — Selesai',
    location: 'Kediaman Mempelai Wanita, Jl. Menur RT 09/03 Dsn. Manggihan Ds. Sambung Kec. Godong Kab. Grobogan',
    mapsUrl: 'https://maps.app.goo.gl/XDWkfzHH6jDzGekG7',
    timeIcon: '🕗',
  },
  {
    icon: '💐',
    type: 'Acara Kedua',
    name: 'Ngunduh Mantu',
    date: 'Senin, 13 April 2026',
    time: '10.00 WIB — Selesai',
    location: 'Kediaman Mempelai Pria, Dsn Manggihan RT 02 RW 03 Ds Sambung Kec. Godong Kab. Grobogan',
    mapsUrl: 'https://maps.app.goo.gl/mJD2eHn6xyoMe5DL8',
    timeIcon: '🕙',
  },
];

function EventCard({ event, className }) {
  return (
    <div className={`event-card ${className}`}>
      <div className="event-icon">{event.icon}</div>
      <p className="event-type">{event.type}</p>
      <h3 className="event-name">{event.name}</h3>

      <div className="event-detail">
        <div className="event-detail-icon">📅</div>
        <div className="event-detail-text">
          <strong>Hari &amp; Tanggal</strong>
          {event.date}
        </div>
      </div>
      <div className="event-detail">
        <div className="event-detail-icon">{event.timeIcon}</div>
        <div className="event-detail-text">
          <strong>Waktu</strong>
          {event.time}
        </div>
      </div>
      <div className="event-detail">
        <div className="event-detail-icon">📍</div>
        <div className="event-detail-text">
          <strong>Lokasi</strong>
          {event.location}
        </div>
      </div>

      <a href={event.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-map">
        🗺️ Lihat di Maps
      </a>
    </div>
  );
}

export default function EventsSection() {
  return (
    <section id="events">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Jadwal Acara</span>
          <h2 className="section-title">Rangkaian <em>Acara</em></h2>
          <div className="ornament-divider">
            <span className="ornament-icon">✦</span>
          </div>
        </div>

        <div className="events-grid">
          <EventCard event={EVENTS[0]} className="reveal-left delay-1" />
          <EventCard event={EVENTS[1]} className="reveal-right delay-1" />
        </div>
      </div>
    </section>
  );
}
