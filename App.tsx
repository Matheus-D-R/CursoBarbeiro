

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    if (typeof window.fbq === 'function') {
      window.fbq("track", "PageView");
    }
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 font-inter antialiased">
      {/* seus componentes */}
    </main>
  );
}

export default App;




import { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Curriculum } from './components/Curriculum';
import { HowItWorks } from './components/HowItWorks';
import { Certificates } from './components/Certificates';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { StudentResults } from './components/StudentResults';
import { Bonuses } from './components/Bonuses';
import { Offer } from './components/Offer';
import { FAQ } from './components/FAQ';
import { Guarantee } from './components/Guarantee';
import { Footer } from './components/Footer';

function App() {

  useEffect(() => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 font-inter antialiased">
      <Hero />
      <Curriculum />
      <HowItWorks />
      <Certificates />
      <Testimonials />
      <Gallery />
      <StudentResults />
      <Bonuses />
      <Offer />
      <FAQ />
      <Guarantee />
      <Footer />
    </main>
  );
}

export default App;
