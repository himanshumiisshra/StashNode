import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import Splits from './modules/Splits';
import Sync from './modules/Sync';
import Vault from './modules/Vault';
import Analytics from './modules/Analytics';
import ComingSoon from './ComingSoon';

export default function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState('royalties');

  useEffect(() => {
    gsap.fromTo(".dashboard-view", { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.6, ease: "expo.out" });
  }, [activeTab]);

  const navItems = [
    { id: 'royalties', label: 'royalties' },
    { id: 'ai sync', label: 'ai sync' },
    { id: 'fan vault', label: 'fan vault' },
    { id: 'data heat', label: 'data heat' },
    { id: 'future_node', label: 'future_node' } // Correctly routes to Coming Soon
  ];

  return (
    <div className="relative z-10 flex h-screen w-full overflow-hidden bg-transparent">
      <aside className="w-24 md:w-64 border-r border-white/10 bg-transparent backdrop-blur-[2px] p-8 flex flex-col justify-between">
        <div>
          <button onClick={onLogout} className="group mb-12 flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-full hover:bg-white hover:text-black transition-all">
             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
             <span className="hidden md:block text-[10px] uppercase tracking-widest font-bold">exit_fortress</span>
          </button>
          <nav className="space-y-4">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => setActiveTab(item.id)} 
                className={`w-full text-left px-5 py-3 rounded-2xl transition-all lowercase text-sm font-medium ${activeTab === item.id ? 'text-white border border-white/20 bg-white/5' : 'text-white/20 hover:text-white/40'}`}>
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="hidden md:block text-[10px] text-white/10 uppercase tracking-widest font-bold">session_0423 // gnx</div>
      </aside>

      <main className="flex-1 p-8 md:p-16 overflow-y-auto bg-transparent">
        <header className="mb-16">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter lowercase text-white">{activeTab}.</h1>
        </header>
        <div className="dashboard-view bg-transparent">
          {activeTab === 'royalties' && <Splits />}
          {activeTab === 'ai sync' && <Sync />}
          {activeTab === 'fan vault' && <Vault />}
          {activeTab === 'data heat' && <Analytics />}
          {activeTab === 'future_node' && <ComingSoon />}
        </div>
      </main>
    </div>
  );
}