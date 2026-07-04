import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import MenuSection from './components/MenuSection';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Visit from './components/Visit';
import Footer from './components/Footer';
import FullMenu from './components/FullMenu';

export default function App() {
  const [view, setView] = useState<'home' | 'menu'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  if (view === 'menu') {
    return <FullMenu onBack={() => setView('home')} />;
  }

  return (
    <div className="min-h-screen bg-ink-900">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <MenuSection onViewFull={() => setView('menu')} />
        <Reviews />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
