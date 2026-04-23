import React, { useEffect } from 'react';
import gsap from 'gsap';

export default function Manifesto() {
  useEffect(() => {
    gsap.fromTo(".manifesto-line", { y: 30, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, stagger: 0.3, ease: "power4.out",
      scrollTrigger: { trigger: "#manifesto", start: "top 80%" }
    });
  }, []);

  return (
    <section id="manifesto" className="min-h-screen py-40 px-6 md:px-20 relative flex flex-col justify-center bg-transparent overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[28vw] font-bold text-white select-none tracking-tighter leading-none -z-10 mix-blend-overlay opacity-20"
           style={{ WebkitTextStroke: '2px rgba(255,255,255,0.5)', color: 'transparent' }}>
        TRUTH
      </div>

      <div className="max-w-5xl relative z-10">
        <span className="text-white/30 text-[10px] uppercase tracking-[0.5em] block mb-10 font-bold italic">the_creed // gnx_certified</span>
        <div className="space-y-12">
          <h2 className="manifesto-line text-5xl md:text-8xl font-bold text-white tracking-tighter lowercase leading-[0.85]">
            the industry is a fortress.<br/><span className="text-white/30">the gates are built on lies.</span>
          </h2>
          <h2 className="manifesto-line text-5xl md:text-8xl font-bold text-white tracking-tighter lowercase leading-[0.85]">
            we built the ghost in the machine.<br/><span className="text-white/30">to give the creator the bag.</span>
          </h2>
        </div>
      </div>
    </section>
  );
}