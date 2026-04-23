import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tiers = [
  { id: "01", name: "indie", price: "$0", features: ["1 track", "ai sync", "50/50 splits"] },
  { id: "02", name: "major", price: "$49", featured: true, features: ["unlimited", "priority sync", "tour maps", "0% fees"] },
  { id: "03", name: "label", price: "custom", features: ["multi-artist", "api infrastructure", "concierge"] }
];

export default function Pricing() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.fromTo(cardsRef.current, { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power4.out",
      scrollTrigger: { trigger: "#pricing-section", start: "top 80%" }
    });
  }, []);

  return (
    <section id="pricing-section" className="py-40 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-6xl md:text-8xl font-bold tracking-tighter lowercase mb-24 text-center">pick_your_tier.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div key={tier.id} ref={el => cardsRef.current[i] = el!}
              className={`relative p-10 rounded-[3rem] border transition-all duration-500 h-[550px] flex flex-col justify-between overflow-hidden ${
                tier.featured ? 'bg-white border-white text-black scale-105 z-10 shadow-2xl' : 'bg-transparent border-white/10 text-white backdrop-blur-xl'
              }`}>
              
              {/* FIXED OUTLINED GHOST NUMBERS */}
              <span className={`absolute -right-8 -bottom-12 text-[20vw] font-bold select-none pointer-events-none opacity-5`}
                    style={{ WebkitTextStroke: tier.featured ? '2px black' : '2px white', color: 'transparent' }}>
                {tier.id}
              </span>

              <div className="relative z-10">
                <span className={`text-[10px] uppercase tracking-widest ${tier.featured ? 'text-black/30' : 'text-white/20'}`}>{tier.name}_tier</span>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-6xl font-bold tracking-tighter">{tier.price}</span>
                  {tier.price !== 'custom' && <span className="text-xs opacity-40">/mo</span>}
                </div>
                <ul className="mt-10 space-y-3">
                  {tier.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs lowercase opacity-70">
                      <div className={`w-1 h-1 rounded-full ${tier.featured ? 'bg-black' : 'bg-white'}`}></div> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`relative z-10 w-full py-4 rounded-full font-bold lowercase transition-all ${tier.featured ? 'bg-black text-white' : 'bg-white text-black'}`}>
                select_{tier.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}