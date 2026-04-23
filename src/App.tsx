import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './Hero';
import Compare from './Compare';
import ProductSlider from './ProductSlider';
import Sandbox from './Sandbox';
import Pricing from './Pricing';
import Manifesto from './Manifesto';
import Footer from './Footer';
import Auth from './Auth';
import Dashboard from './Dashboard';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  
  const kendrickRef = useRef<HTMLVideoElement>(null);
  const partyRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVids = async () => {
      if (kendrickRef.current) {
        kendrickRef.current.muted = isMuted;
        try { await kendrickRef.current.play(); } catch(e) {}
      }
      if (partyRef.current) {
        partyRef.current.muted = isMuted;
        try { await partyRef.current.play(); } catch(e) {}
      }
    };
    playVids();
  }, [isLoggedIn, isMuted]);

  useEffect(() => {
    if (!isLoggedIn) {
      gsap.to(kendrickRef.current, { opacity: 0.4, duration: 1.5 });
      gsap.to(partyRef.current, { opacity: 0, duration: 1.5 });
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#business-model-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
        }
      });
      tl.to(kendrickRef.current, { opacity: 0 }).to(partyRef.current, { opacity: 0.5 }, 0);
    } else {
      gsap.to(partyRef.current, { opacity: 0.3, duration: 1.5 });
      gsap.to(kendrickRef.current, { opacity: 0, duration: 1.5 });
    }
  }, [isLoggedIn]);

  return (
    <main className="relative min-h-screen selection:bg-white/30 selection:text-white bg-transparent">
      {/* GLOBAL VIDEO HUD BACKGROUND */}
      <div className="fixed inset-0 -z-[100] w-full h-screen overflow-hidden bg-black">
        <video ref={kendrickRef} className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          autoPlay loop muted playsInline src="/kendrick.mp4" />
        <video ref={partyRef} className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          autoPlay loop muted playsInline src="/party.mp4" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 z-[1] pointer-events-none"></div>
      </div>

      {isLoggedIn ? (
        <Dashboard onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <div className="relative z-10 bg-transparent">
          <Hero onOpenAuth={() => setIsAuthOpen(true)} isMuted={isMuted} onToggleMute={() => setIsMuted(!isMuted)} />
          <Compare />
          <Manifesto />
          <section id="business-model-section"><ProductSlider /></section>
          <div className="bg-black/40 backdrop-blur-md relative z-20">
            <Sandbox /><Pricing /><Footer />
          </div>
        </div>
      )}

      {isAuthOpen && (
        <Auth onClose={() => setIsAuthOpen(false)} onLoginSuccess={() => { setIsAuthOpen(false); setIsLoggedIn(true); }} />
      )}
    </main>
  );
}