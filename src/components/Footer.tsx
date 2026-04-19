import React from 'react';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 mt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-end gap-6">
      <div className="flex flex-col gap-4">
        <div className="text-[12px] text-[#00FF41] flex items-center gap-3">
          <div className="w-2 h-2 bg-[#00FF41] rounded-full shadow-[0_0_10px_#00FF41]"></div> 
          AVAILABLE FOR ENQUIRY
        </div>
        <div className="text-[14px] text-[#666]">
          © {new Date().getFullYear()} Saravana Kumar M.
        </div>
      </div>
      
      <button 
        onClick={scrollToTop}
        className="bg-white text-[#0A0A0B] px-8 py-3 font-[700] uppercase text-[14px] outline-none hover:bg-[#00E5FF] transition-colors cursor-pointer border-none rounded-none"
      >
        Scroll to Top
      </button>
    </footer>
  );
}
