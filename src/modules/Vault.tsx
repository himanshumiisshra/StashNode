import React from 'react';

export default function Vault() {
  const fanComments = ["energy at the stadium was 10/10.", "truth between the screens.", "securing the bag."];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 bg-transparent">
      <div className="lg:col-span-2 space-y-6">
        {/* TRANSPARENT LYRICS */}
        <div className="p-10 border border-white/10 rounded-[3rem] bg-transparent backdrop-blur-[1px]">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#00ff9d] font-bold block mb-6">lyrics_of_the_week</span>
          <h3 className="text-3xl font-bold text-white lowercase leading-tight italic">
            "i'm the ghost in the machine / pay the producer, feed the team / secure the ledger, keep it clean / truth between the screens."
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {['unreleased_stems', 'concert_stream', 'digital_vinyl', 'bts_footage'].map(item => (
             <div key={item} className="p-10 border border-white/5 rounded-[2.5rem] bg-transparent hover:border-white/30 transition-all cursor-pointer">
                <p className="text-lg font-bold text-white lowercase">{item}</p>
             </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-6 font-bold">fan_feed</h4>
        {fanComments.map((c, i) => (
          <div key={i} className="p-6 border-l-2 border-white/10 bg-transparent rounded-r-2xl italic text-sm text-white/40">
            "{c}"
          </div>
        ))}
      </div>
    </div>
  );
}