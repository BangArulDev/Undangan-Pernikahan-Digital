import { useState, useEffect, useCallback, useRef } from 'react';
import PetalsCanvas from './components/PetalsCanvas';
import SplashScreen from './components/SplashScreen';
import MusicButton from './components/MusicButton';
import Toast from './components/Toast';
import HeroSection from './components/HeroSection';
import CoupleSection from './components/CoupleSection';
import CountdownSection from './components/CountdownSection';
import EventsSection from './components/EventsSection';
import GallerySection from './components/GallerySection';
import RSVPSection from './components/RSVPSection';
import UcapanSection from './components/UcapanSection';
import GiftSection from './components/GiftSection';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

const STORAGE_KEY = 'wedding_rsvp_messages';

function getStoredMessages() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

export default function App() {
  const [splashHidden, setSplashHidden] = useState(false);
  const [splashGone, setSplashGone] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);
  const [messages, setMessages] = useState(getStoredMessages);
  const [toast, setToast] = useState({ message: '', show: false });
  const toastTimerRef = useRef(null);

  useScrollReveal();

  const showToast = useCallback((msg, duration = 3000) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToast({ message: msg, show: true });
    toastTimerRef.current = setTimeout(() => setToast((t) => ({ ...t, show: false })), duration);
  }, []);

  const handleSplashOpen = () => {
    setSplashHidden(true);
    setMusicStarted(true);
    document.body.style.overflow = '';
    setTimeout(() => setSplashGone(true), 900);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleRSVPSubmit = useCallback((entry, toastMsg) => {
    if (!entry) { showToast(toastMsg); return; }
    const updated = [...messages, entry];
    setMessages(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    showToast(toastMsg);
    setTimeout(() => {
      document.getElementById('ucapan')?.scrollIntoView({ behavior: 'smooth' });
    }, 800);
  }, [messages, showToast]);

  return (
    <>
      <PetalsCanvas />
      <Toast message={toast.message} show={toast.show} />
      <MusicButton autoStart={musicStarted} />

      {!splashGone && (
        <SplashScreen onOpen={handleSplashOpen} hidden={splashHidden} />
      )}

      <main id="main-content">
        <HeroSection />
        <CoupleSection />
        <CountdownSection />
        <EventsSection />
        <GallerySection />
        <GiftSection onCopy={(num) => { navigator.clipboard.writeText(num); showToast('Nomor disalin! 📋'); }} />
        <RSVPSection onSubmit={handleRSVPSubmit} />
        <UcapanSection messages={messages} />
      </main>

      <Footer />
    </>
  );
}
