import React, { useState, useEffect } from 'react';
import { Terminal, Shield, ListTodo, Activity, Database, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenPortal: () => void;
  onOpenConsultation: () => void;
  leadCount: number;
}

export default function Navbar({ onOpenPortal, onOpenConsultation, leadCount }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-200 ${
      scrolled 
        ? 'bg-[#0b0f19]/90 border-b border-gray-850/80 backdrop-blur-md py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="/" className="flex items-center space-x-2 w-fit cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-sky-500 to-indigo-600 flex items-center justify-center font-mono font-extrabold text-white text-base">
              R
            </div>
            <div className="text-left">
              <span className="font-extrabold text-white leading-none text-sm font-sans tracking-tight block">
                Random Script
              </span>
              <span className="text-[10px] text-sky-400 font-mono tracking-wider uppercase block">
                Technologies
              </span>
            </div>
          </a>

          {/* Links for desktop navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="/" className="text-xs text-gray-400 hover:text-white font-semibold transition">
              Home
            </a>
            <a href="/ai-development-company" className="text-xs text-cyan-400 hover:text-cyan-300 font-bold transition flex items-center gap-1 bg-cyan-950/20 px-2.5 py-1 rounded-lg border border-cyan-900/35">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> AI Pillar Service
            </a>
            <a href="/#services-head" className="text-xs text-gray-400 hover:text-white font-semibold transition">
              Core Capabilities
            </a>
            <a href="/#industries-head" className="text-xs text-gray-400 hover:text-white font-semibold transition">
              Industries Serve
            </a>
            <a href="/#process-head" className="text-xs text-gray-400 hover:text-white font-semibold transition">
              Framework & Process
            </a>
            <a href="/#why-choose-head" className="text-xs text-gray-400 hover:text-white font-semibold transition">
              Why Us
            </a>
            <a href="/#solutions-show" className="text-xs text-gray-400 hover:text-white font-semibold transition">
              Live Platforms
            </a>
          </div>

          {/* Status Badge indicator & leads dashboard launcher */}
          <div className="flex items-center space-x-3.5">
            <div className="hidden md:flex items-center space-x-1.5 px-2.5 py-1 bg-slate-900 border border-gray-800 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[10px] text-emerald-400 font-mono font-bold tracking-wide">
                SYSTEMS ONLINE
              </span>
            </div>
            
            {/* Direct access to submissions desk */}
            <button
              onClick={onOpenPortal}
              className="relative inline-flex items-center justify-center p-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-850 text-gray-300 border border-gray-800 rounded-xl text-xs font-mono font-bold transition hover:text-white cursor-pointer"
            >
              <Database className="w-3.5 h-3.5 mr-1 text-sky-400" />
              LEAD PORTAL
              {leadCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[9px] font-bold text-white shadow-md animate-bounce">
                  {leadCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenConsultation}
              className="px-4 py-1.5 text-xs font-bold text-white bg-linear-to-r from-sky-550 to-blue-600 hover:from-sky-600 hover:to-blue-700 rounded-xl transition cursor-pointer shadow-md shadow-sky-500/5"
            >
              Consult Now
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
