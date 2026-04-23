import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Sandbox() {
  const [input, setInput] = useState('{\n  "user_id": "89324",\n  "payment_method": "visa_4242",\n  "status": "active"\n}');
  const [encrypted, setEncrypted] = useState('');
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  // Fake encryption effect for the demo
  useEffect(() => {
    if (!input) {
      setEncrypted('');
      return;
    }
    const hash = btoa(input).split('').reverse().join('');
    const mockIv = crypto.randomUUID().split('-')[0];
    setEncrypted(`securify_enc_v1.${mockIv}.${hash}==`);
  }, [input]);

  // Entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.sandbox-element',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(encrypted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section ref={containerRef} className="w-full bg-black py-32 px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Side: Copy/Magnet */}
        <div className="w-full md:w-1/3 sandbox-element">
          <div className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white/80 lowercase tracking-widest mb-6">
            free developer tool
          </div>
          <h2 className="text-white text-4xl md:text-5xl font-medium tracking-tight mb-4 lowercase">
            test the vault.
          </h2>
          <p className="text-white/50 text-sm md:text-base leading-relaxed lowercase mb-8">
            don't trust us. verify it yourself. paste your sensitive payloads below and watch our client-side zero-knowledge engine encrypt it before it ever leaves your browser. bookmark this page for your daily hashing needs.
          </p>
        </div>

        {/* Right Side: The Interactive Terminal */}
        <div className="w-full md:w-2/3 bg-[#050505] border border-white/10 rounded-2xl overflow-hidden sandbox-element shadow-[0_0_40px_rgba(255,255,255,0.05)]">
          
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
            </div>
            <span className="text-white/40 text-xs font-mono lowercase">securify_sandbox_v1.0</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Input Window */}
            <div className="p-4 border-b md:border-b-0 md:border-r border-white/10">
              <span className="block text-white/30 text-xs uppercase tracking-widest mb-3">raw json</span>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full h-48 bg-transparent text-white/80 font-mono text-sm resize-none focus:outline-none"
                spellCheck="false"
              />
            </div>

            {/* Output Window */}
            <div className="p-4 relative">
              <span className="block text-[#00ff9d] text-xs uppercase tracking-widest mb-3">encrypted payload</span>
              <div className="w-full h-48 overflow-y-auto text-[#00ff9d]/80 font-mono text-sm break-all">
                {encrypted}
              </div>
              
              <button 
                onClick={handleCopy}
                className="absolute bottom-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white text-xs px-4 py-2 rounded-full transition-colors lowercase"
              >
                {copied ? 'copied!' : 'copy payload'}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}