import React from 'react';

export default function Splits() {
  const artists = [
    { name: 'kendrick l.', handle: '@kendricklamar', track: 'Not Like Us', share: 50 },
    { name: 'mustard', handle: '@mustard', track: 'Pure Water', share: 25 },
    { name: 'sounwave', handle: '@sounwave', track: 'Alright', share: 15 },
    { name: 'jay rock', handle: '@jayrock', track: 'Win', share: 10 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-2">
        {artists.map((a, i) => (
          <div key={i} className="flex items-center justify-between py-6 border-b border-white/5 px-4 hover:bg-white/[0.03] transition-all rounded-xl group">
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold lowercase text-white">{a.name}</span>
                <span className="text-[10px] text-[#00ff9d] font-mono italic">{a.handle}</span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-white/20 mt-1">master: {a.track}</span>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-32 md:w-64 h-0.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-white shadow-[0_0_15px_white]" style={{ width: `${a.share}%` }}></div>
              </div>
              <span className="font-mono text-2xl text-white">{a.share}%</span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-8 border border-white/10 rounded-[2.5rem] backdrop-blur-[2px]">
        <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6 font-bold">liner_notes</h4>
        <p className="text-white text-sm lowercase leading-relaxed italic mb-8">"GNX is shifting the frequency. early a&r metrics suggest a clean sweep for best rap album 2027."</p>
        <div className="pt-6 border-t border-white/5 flex justify-between text-[10px] uppercase tracking-widest text-[#00ff9d] font-bold">
           <span>award_prediction</span><span>frontrunner</span>
        </div>
      </div>
    </div>
  );
}