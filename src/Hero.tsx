import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero({ onOpenAuth, isMuted, onToggleMute }: any) {
  const titleRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(titleRefs.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power4.out', delay: 0.5 }
    );
  }, []);

  return (
    <section className="relative h-screen w-full bg-transparent overflow-hidden flex flex-col justify-between">
      <nav className="z-50 px-6 md:px-10 pt-8 flex items-center justify-between">
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3">
          <span className="text-white text-sm font-medium tracking-tighter lowercase">securify.</span>
        </div>
        <button onClick={onOpenAuth} className="bg-white text-black text-sm font-bold rounded-full px-8 py-3 hover:scale-105 transition-transform">
          get_started
        </button>
      </nav>

      <div className="text-center">
        <h1 className="text-white font-bold text-[18vw] md:text-[12vw] leading-[0.8] tracking-tighter flex flex-col items-center">
          <span ref={el => titleRefs.current[0] = el}>protect.</span>
          <span ref={el => titleRefs.current[1] = el} className="text-white/40">your.</span>
          <span ref={el => titleRefs.current[2] = el}>data.</span>
        </h1>
      </div>

      <div className="p-10 flex justify-between items-end border-b border-white/5">
        <div className="flex flex-col">
          <span className="text-4xl font-bold tracking-tighter">1.5B+</span>
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-30">secured</p>
        </div>
        <button onClick={onToggleMute} className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-6 py-2 text-[10px] uppercase tracking-widest">
          {isMuted ? 'audio_off' : 'audio_on'}
        </button>
        <div className="flex flex-col items-end">
          <span className="text-4xl font-bold tracking-tighter">GNX</span>
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-30">standard</p>
        </div>
      </div>
    </section>
  );
}