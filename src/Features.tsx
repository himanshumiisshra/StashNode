import React from 'react';

export default function Features() {
  const features = [
    { title: 'zero-knowledge', desc: 'your keys, your data. we cannot see, share, or sell your information even if we wanted to.' },
    { title: 'real-time threat detection', desc: 'ai-driven monitoring that blocks unauthorized access attempts before they reach your network.' },
    { title: 'seamless integration', desc: 'deploy across your entire stack in minutes with our developer-friendly sdks and apis.' },
  ];

  return (
    <section id="platform" className="w-full bg-black py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-4xl md:text-5xl font-medium tracking-tight mb-4 lowercase">build on a fortress.</h2>
        <p className="text-white/50 max-w-xl text-sm md:text-base leading-relaxed mb-20 lowercase">enterprise-grade security without the enterprise-level friction. designed for modern stacks.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-8 border border-white/5">
                  <div className="h-3 w-3 bg-white rounded-full shadow-[0_0_10px_white]"></div>
                </div>
                <h3 className="text-white text-xl font-medium mb-3 lowercase tracking-tight">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed lowercase">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}