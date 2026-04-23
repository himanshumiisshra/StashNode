import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Compare() {
  const containerRef = useRef<HTMLElement>(null);
  const strikeRef = useRef<HTMLDivElement>(null);
  const themTextRef = useRef<HTMLHeadingElement>(null);
  const usTextRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%", // Starts when the section hits 60% of the viewport
          end: "top 20%",
          scrub: 1, // Smooth but aggressive scrubbing
        }
      });

      // The "Kill Shot": Violently strike through the competitor's name
      tl.to(strikeRef.current, {
        width: '100%',
        ease: 'power4.inOut',
      }, 0)
      // Fade out the competitor
      .to(themTextRef.current, {
        opacity: 0.2,
        scale: 0.95,
        ease: 'power2.out'
      }, 0)
      // Violently scale up your platform
      .fromTo(usTextRef.current, 
        { opacity: 0, scale: 1.2, y: 50 },
        { opacity: 1, scale: 1, y: 0, ease: 'back.out(1.7)' }, 
        0.2
      );

      // Stagger the comparison cards like punchlines
      gsap.fromTo(
        cardsRef.current,
        { y: 100, opacity: 0, rotateX: 20 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: usTextRef.current,
            start: "top 70%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const comparisons = [
    { metric: 'deployment time', them: '3-6 months', us: '15 minutes' },
    { metric: 'data visibility', them: 'they see everything', us: 'zero-knowledge' },
    { metric: 'infrastructure', them: 'bloated monoliths', us: 'serverless edge' },
  ];

  return (
    <section ref={containerRef} className="w-full bg-black py-40 px-6 md:px-10 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* The Us vs Them Headers */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-32 mb-24 w-full">
          
          {/* THEM (Legacy Security) */}
          <div className="relative text-center">
            <h2 ref={themTextRef} className="text-white/50 text-5xl md:text-8xl font-medium tracking-tighter lowercase">
              legacy.
            </h2>
            {/* The Strike-through line */}
            <div 
              ref={strikeRef} 
              className="absolute top-1/2 left-0 h-2 bg-white w-0 -translate-y-1/2 rounded-full shadow-[0_0_15px_white]"
            ></div>
          </div>

          <span className="text-white/20 text-2xl font-light italic">vs</span>

          {/* US (Securify) */}
          <div className="text-center">
            <h2 ref={usTextRef} className="text-white text-6xl md:text-9xl font-semibold tracking-tighter lowercase drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              securify.
            </h2>
          </div>
        </div>

        {/* The Punchlines (Comparison Cards) */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4">
          {comparisons.map((item, index) => (
            <div 
              key={index} 
              ref={addToRefs}
              className="flex flex-col bg-[#050505] border border-white/10 rounded-2xl p-6"
            >
              <span className="text-white/40 text-xs lowercase tracking-widest mb-6">{item.metric}</span>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-white/30 text-sm lowercase line-through decoration-white/20">{item.them}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white text-lg font-medium lowercase tracking-tight">{item.us}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}