import React from 'react';

export default function ComingSoon() {
  return (
    <div className="relative min-h-[600px] flex flex-col items-center justify-center bg-transparent border border-white/5 rounded-[4rem]">
      {/* INTEGRATED GHOST TEXT */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
        <h2 className="text-[25vw] font-bold text-white tracking-tighter"
            style={{ WebkitTextStroke: '2px white', color: 'transparent' }}>
          LOCKED
        </h2>
      </div>

      <div className="text-center relative z-10 px-10">
        <span className="text-[#00ff9d] text-[10px] uppercase tracking-[0.6em] font-bold block mb-6">system_initialization_pending</span>
        <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter lowercase mb-6">access_denied.</h3>
        <p className="text-white/30 text-sm lowercase max-w-lg mx-auto mb-12 leading-relaxed">
          we are preparing the next phase of the securify infrastructure. decentralized publishing and p2p tour routing nodes are coming.
        </p>
        
        <div className="flex gap-4 justify-center">
          <button className="px-10 py-4 border border-white/20 text-white/20 rounded-full font-bold lowercase cursor-not-allowed">
            initiate_request
          </button>
          <button className="px-10 py-4 bg-white/5 text-white/10 rounded-full font-bold lowercase cursor-not-allowed">
            unlock_early_access
          </button>
        </div>
      </div>
    </div>
  );
}