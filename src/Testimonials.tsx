import React from 'react';

export default function Testimonials() {
  const quotes = [
    { quote: "securify dropped our latency by 40% while upgrading our encryption standards. the sdk integration took less than a day.", author: "sarah jenkins", role: "cto at finpay" },
    { quote: "finally, a data security platform built for developers. we ripped out our legacy vendor and haven't looked back.", author: "david chen", role: "lead engineer at healthsync" },
    { quote: "the zero-knowledge architecture gave us the compliance checkboxes we needed to close our enterprise deals.", author: "marcus wright", role: "founder at vaultio" }
  ];

  return (
    <section className="w-full bg-black py-32 px-6 md:px-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-4xl md:text-5xl font-medium tracking-tight mb-4 lowercase">trusted by engineers.</h2>
        <p className="text-white/50 max-w-xl text-sm md:text-base leading-relaxed mb-20 lowercase">don't just take our word for it. see what teams are building with securify.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((item, index) => (
            <div key={index} className="bg-[#050505] border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:bg-[#0a0a0a] transition-colors">
              <svg className="w-8 h-8 text-white/20 mb-8" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-white/80 text-lg leading-snug lowercase mb-10">"{item.quote}"</p>
              <div>
                <p className="text-white text-sm font-medium lowercase tracking-tight">{item.author}</p>
                <p className="text-white/40 text-xs lowercase mt-1">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}