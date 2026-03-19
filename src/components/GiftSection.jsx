const ACCOUNTS = [
  {
    icon: '🏦',
    bank: 'BCA',
    holder: 'a.n. Agus Yulianto',
    number: '1234567890',
    display: '1234567890',
  },
  {
    icon: '💚',
    bank: 'GoPay / OVO',
    holder: 'a.n. Romadlona Savitri',
    number: '081234567890',
    display: '0812-3456-7890',
  },
];

function GiftCard({ account, onCopy }) {
  return (
    <div className="gift-card">
      <div className="gift-bank-logo">{account.icon}</div>
      <h3 className="gift-bank-name">{account.bank}</h3>
      <p className="gift-account-holder">{account.holder}</p>
      <div className="gift-account-number">{account.display}</div>
      <button
        className="btn-copy"
        onClick={() => onCopy(account.number)}
      >
        📋 Salin Nomor
      </button>
    </div>
  );
}

export default function GiftSection({ onCopy }) {
  return (
    <section id="gift">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Hadiah Pernikahan</span>
          <h2 className="section-title">Amplop <em>Digital</em></h2>
          <div className="ornament-divider">
            <span className="ornament-icon">✦</span>
          </div>
          <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginTop: '12px' }}>
            Doa dan kehadiran Anda sudah menjadi hadiah terindah. Namun jika
            Anda ingin memberikan hadiah pernikahan, berikut adalah rekening kami.
          </p>
        </div>

        <div className="gift-cards reveal delay-1">
          {ACCOUNTS.map((acc, i) => (
            <GiftCard key={i} account={acc} onCopy={onCopy} />
          ))}
        </div>

        <p className="gift-note reveal">
          ✨ Kirimkan konfirmasi transfer ke WhatsApp kami setelah melakukan
          pengiriman. Jazakallah khairan. ✨
        </p>
      </div>
    </section>
  );
}
