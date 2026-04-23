import React from 'react';

export default function Footer() {
  return (
    <footer id="company" className="w-full bg-black pt-20 pb-10 px-6 md:px-10 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 256 256" className="h-5 w-5">
              <path d="M 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 128 L 64 128 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z M 128 64 L 128 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 Z M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 128 0 L 192 0 Z" fill="#ffffff" />
            </svg>
            <span className="text-white text-sm font-normal tracking-tight">securify</span>
          </div>
          <p className="text-white/50 text-xs lowercase max-w-[200px]">guarding your data with utmost care, everywhere.</p>
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-3 lowercase text-sm">
            <span className="text-white font-medium mb-1">solutions</span>
            <a href="#" className="text-white/60 hover:text-white transition-colors">enterprise</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">startups</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">pricing</a>
          </div>
          <div className="flex flex-col gap-3 lowercase text-sm" id="support">
            <span className="text-white font-medium mb-1">support</span>
            <a href="#" className="text-white/60 hover:text-white transition-colors">documentation</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">api reference</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">contact sales</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 lowercase">
        <p>© 2026 securify inc. all rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">privacy policy</a>
          <a href="#" className="hover:text-white transition-colors">terms of service</a>
        </div>
      </div>
    </footer>
  );
}