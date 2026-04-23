import React, { useState, useRef } from 'react';

export default function Sync() {
  const [isListening, setIsListening] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-transparent">
      <input type="file" ref={fileRef} className="hidden" />
      <div className="flex flex-col items-center justify-center py-24 border border-white/10 rounded-[4rem] bg-transparent backdrop-blur-md">
        <div className="relative mb-16">
          <div className={`absolute -inset-16 border border-white/5 rounded-full transition-all duration-1000 ${isListening ? 'scale-150 animate-ping opacity-100' : 'scale-0'}`}></div>
          <div className={`w-36 h-36 rounded-full border border-white/10 flex items-center justify-center transition-all ${isListening ? 'bg-white text-black' : 'text-white/10'}`}>
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
          </div>
        </div>
        <div className="flex gap-4">
          <button onClick={() => setIsListening(!isListening)} className="px-10 py-4 border border-white/20 text-white rounded-full font-bold lowercase tracking-tight">
            {isListening ? 'listening...' : 'initiate_listening'}
          </button>
          <button onClick={() => fileRef.current?.click()} className="px-10 py-4 bg-white text-black rounded-full font-bold lowercase hover:scale-105 transition-transform">
            upload_master
          </button>
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-8 font-bold italic">sonic_history</h4>
        {[{f: "gnx_v2.wav", m: "dark"}, {f: "bounce_v1.mp3", m: "gritty"}].map((item, i) => (
          <div key={i} className="p-6 border border-white/5 rounded-2xl flex justify-between items-center bg-transparent group hover:border-white/20 transition-all">
            <div className="flex flex-col"><span className="text-white text-sm lowercase">{item.f}</span><span className="text-[9px] text-[#00ff9d] uppercase font-bold tracking-tighter">{item.m}</span></div>
            <button className="text-[10px] text-white/20 border border-white/10 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all">save</button>
          </div>
        ))}
      </div>
    </div>
  );
}