import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const slides = [
  { id: "01", title: "split management.", content: "automate royalty splits instantly. secure the bag for the whole team." },
  { id: "02", title: "ai-sync tagging.", content: "generate metadata music supervisors actually search for. get discovered." },
  { id: "03", title: "white-label vip.", content: "build your own gated community. sell stems and merch with zero fees." },
  { id: "04", title: "tour analytics.", content: "map your streaming heat globally. book tours where the noise is loud." }
];

export default function ProductSlider() {
  const containerRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.product-slide');
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + (sliderRef.current?.offsetWidth || 3000)
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-transparent overflow-hidden">
      <div ref={sliderRef} className="flex h-screen w-[400vw] flex-nowrap">
        {slides.map((slide) => (
          <div 
            key={slide.id} 
            className="product-slide w-screen h-screen flex-shrink-0 relative flex items-center justify-center overflow-hidden"
          >
            {/* OUTLINED BACKGROUND NUMBER */}
            <span className="absolute font-bold select-none text-[45vw] leading-none opacity-10 pointer-events-none"
                  style={{ WebkitTextStroke: '2px rgba(255,255,255,0.5)', color: 'transparent' }}>
              {slide.id}
            </span>

            <div className="max-w-4xl text-center z-10 px-10">
              <h2 className="text-6xl md:text-8xl font-semibold tracking-tighter lowercase mb-8 drop-shadow-2xl">
                {slide.title}
              </h2>
              <p className="text-white/70 text-xl md:text-3xl lowercase max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                {slide.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}