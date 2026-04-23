import React from 'react';

export default function Auth({ onClose, onLoginSuccess }: { onClose: () => void, onLoginSuccess: () => void }) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={onClose}></div>
      <div className="relative w-full max-w-md bg-[#0a0a0a]/90 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-2xl">
        <h2 className="text-white text-3xl font-semibold tracking-tighter lowercase text-center mb-10">access_the_vault.</h2>
        <div className="flex flex-col gap-4">
          <button 
            onClick={onLoginSuccess}
            className="w-full bg-[#1DB954] text-black font-bold py-4 rounded-full text-xs uppercase tracking-widest active:scale-95 transition-transform"
          >
            Connect Spotify
          </button>
          <button className="w-full bg-white/10 text-white font-bold py-4 rounded-full text-xs uppercase tracking-widest">Google Account</button>
          
          <div className="h-px bg-white/10 w-full my-6"></div>
          
          <input type="email" placeholder="email address" className="bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm text-white outline-none" />
          <button className="w-full border border-white/20 py-4 rounded-full text-xs uppercase tracking-widest text-white">Enter</button>
        </div>
        <button onClick={onClose} className="mt-10 w-full text-white/20 text-[10px] uppercase tracking-widest hover:text-white transition-colors">terminate_request</button>
      </div>
    </div>
  );
}