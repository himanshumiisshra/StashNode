import React from 'react';

export default function Analytics() {
  const shows = [
    { name: "Rolling Loud", city: "LA", theme: "Dystopian Colosseum", hype: "98%" },
    { name: "Coachella", city: "Indio", theme: "Digital Mirage", hype: "92%" },
    { name: "Governors Ball", city: "NYC", theme: "Concrete Jungle", hype: "85%" }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="space-y-4">
        <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-8 font-bold">global_tour_itinerary</h4>
        {shows.map((s, i) => (
          <div key={i} className="p-7 border border-white/5 rounded-[2rem] hover:bg-white/10 transition-all cursor-pointer group">
            <div className="flex justify-between items-start mb-2">
              <span className="text-2xl font-bold text-white lowercase group-hover:text-[#00ff9d] transition-colors">{s.name}</span>
              <span className="text-white/40 font-mono text-sm tracking-tighter italic">{s.hype} HYPE</span>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-white/20">loc: {s.city} // stadium_theme: {s.theme}</p>
          </div>
        ))}
      </div>
      <div className="aspect-video border border-white/10 rounded-[3rem] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-2 h-2 bg-[#00ff9d] rounded-full animate-ping mb-4"></div>
          <span className="text-white/20 text-[9px] uppercase tracking-[0.5em] font-bold italic">rendering_global_heat...</span>
        </div>
      </div>
    </div>
  );
}