import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 'royalty',
    title: 'automated split engine',
    desc: 'Tracking 6 producers and 4 writers shouldn’t be a math problem. Register your track, set your percentages, and let our smart-contracts route royalty payments directly to every bank account—instantly.',
    tag: 'fintech',
    visual: 'split'
  },
  {
    id: 'sync',
    title: 'ai-sync intelligence',
    desc: 'Don’t lose a FIFA soundtrack placement because of bad tagging. Our AI analyzes your 808s and atmosphere to auto-generate industry-standard metadata that music supervisors actually search for.',
    tag: 'generative ai',
    visual: 'ai'
  },
  {
    id: 'direct',
    title: 'white-label fan clubs',
    desc: 'Stop giving 20% to platforms. Launch your own digital VIP space to sell exclusive tracks, private streams, and merchandise directly to your core fanbase. Your brand, your data, your revenue.',
    tag: 'saas',
    visual: 'store'
  },
  {
    id: 'analytics',
    title: 'global tour mapper',
    desc: 'Stop guessing where to book. We aggregate Spotify, TikTok, and IG trends to show you exactly where the noise is. If you’re viral in Berlin, we tell you which venue to call before the hype cools.',
    tag: 'data',
    visual: 'map'
  }
];

export default function Solutions() {
  const containerRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        gsap.fromTo(card, 
          { y: 100, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
  };

  return (
    <section ref={containerRef} id="solutions" className="w-full bg-black py-40 px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <h2 className="text-white text-5xl md:text-7xl font-semibold tracking-tighter lowercase mb-6">
            the industry <span className="text-white/40">operating system.</span>
          </h2>
          <p className="text-white/60 max-w-2xl text-lg lowercase leading-relaxed">
            we didn't just build a security tool. we built a fortress for the hip-hop economy. automate your money, amplify your data, and own your audience.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              ref={addToRefs}
              className="group relative bg-[#080808] border border-white/10 rounded-[2.5rem] p-10 hover:border-white/30 transition-all duration-700 flex flex-col justify-between min-h-[450px] overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute -inset-px bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10">
                <span className="inline-block px-4 py-1 rounded-full border border-white/10 text-[10px] uppercase tracking-[0.2em] text-white/40 mb-10 group-hover:text-white transition-colors">
                  {product.tag}
                </span>
                <h3 className="text-white text-3xl md:text-4xl font-medium tracking-tight lowercase mb-6">
                  {product.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-base md:text-lg lowercase">
                  {product.desc}
                </p>
              </div>

              {/* Interactive Visual Element (Placeholders for now) */}
              <div className="relative z-10 mt-10 h-32 w-full bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all">
                {product.id === 'royalty' && <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 animate-pulse"></div>
                  <div className="w-24 h-2 bg-white/20 rounded-full mt-3"></div>
                </div>}
                {product.id === 'sync' && <div className="font-mono text-[10px] text-white/30">
                  {`> ANALYZING_BPM... 142`} <br/>
                  {`> MOOD: GRITTY_DARK_TRAP`}
                </div>}
                {product.id === 'direct' && <div className="text-white text-xl font-bold">0% FEES</div>}
                {product.id === 'analytics' && <div className="flex items-end gap-1 h-12">
                   {[40, 70, 45, 90, 65].map((h, i) => <div key={i} className="w-2 bg-white/20 rounded-t-sm" style={{height: `${h}%`}}></div>)}
                </div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}