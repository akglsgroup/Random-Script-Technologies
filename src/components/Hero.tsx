import React from 'react';
import { 
  ArrowRight, 
  Bot, 
  Calculator, 
  Calendar, 
  Check, 
  MessageSquare, 
  Sparkles, 
  TrendingUp, 
  CheckCircle,
  Zap,
  Cpu
} from 'lucide-react';

interface HeroProps {
  onOpenChat: () => void;
  onOpenProposal: () => void;
}

export default function Hero({ onOpenChat, onOpenProposal }: HeroProps) {
  const highlightServices = [
    'AI Development & Consulting',
    'AI Agent Development',
    'Enterprise Software Solutions',
    'Custom Web Applications',
    'Mobile App Development',
    'IoT Development Services',
    'Cloud & DevOps Solutions',
    'Business Process Automation'
  ];

  return (
    <header className="relative pt-32 pb-20 overflow-hidden bg-radial-to-b from-[#0e1628] to-[#080b13] text-left border-b border-gray-900">
      
      {/* Decorative cyber grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
      
      {/* Decorative top ambient flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-linear-to-r from-sky-500/10 to-indigo-650/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text Left */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-6">
            
            {/* Launching tag */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-sky-950/40 border border-sky-800/40 rounded-full">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-502 bg-sky-500"></span>
              </span>
              <span className="text-[10.5px] text-sky-400 font-mono tracking-wider uppercase font-semibold">
                TRUSTED TECHNOLOGY PARTNER FOR FUTURE-READY BUSINESSES
              </span>
            </div>

            {/* Main title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Transform Your Business with <br />
              <span className="bg-gradient-to-r from-[#0ea5e9] to-[#3b82f6] bg-clip-text text-transparent">
                AI, Software & Intelligent Automation
              </span>
            </h1>

            {/* Subtitle description */}
            <p className="text-gray-350 text-sm sm:text-base leading-relaxed max-w-3xl">
              Build smarter products, automate business operations, and accelerate growth with cutting-edge AI, custom software development, cloud solutions, mobile apps, and IoT technologies.
            </p>

            {/* Quick narrative */}
            <p className="text-xs text-gray-400 leading-relaxed max-w-2xl font-sans">
              <strong>Random Script Technologies</strong> helps startups, enterprise conglomerates, and growing businesses leverage Artificial Intelligence, Generative AI, Agentic AI, Cloud Computing, IoT, and Digital Engineering to stay ahead in a rapidly evolving digital world.
            </p>

            {/* Interactive Grid bullet lists requested */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlightServices.map((srv, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 text-xs text-slate-300">
                  <div className="w-5 h-5 bg-sky-950/20 border border-sky-900/30 rounded-md flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-sky-400 stroke-[3]" />
                  </div>
                  <span className="font-semibold">{srv}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons CTAs exactly as requested */}
            <div className="pt-6 flex flex-col sm:flex-row flex-wrap gap-4 items-stretch sm:items-center">
              
              <a 
                href="#consultation-panel"
                className="px-6 py-3.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-extrabold rounded-xl text-xs sm:text-sm text-center transition flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-sky-500/10"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                🚀 Schedule Free Consultation
              </a>

              <button 
                onClick={onOpenChat}
                className="px-6 py-3.5 bg-slate-900 border border-gray-800 hover:bg-slate-850 hover:border-gray-700 text-gray-250 hover:text-white font-extrabold rounded-xl text-xs sm:text-sm text-center transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                📞 Talk to an AI Expert
              </button>

              <button 
                onClick={onOpenProposal}
                className="px-6 py-3.5 bg-slate-900/60 border border-gray-850 hover:bg-slate-850/60 hover:text-white text-gray-300 font-extrabold rounded-xl text-xs sm:text-sm text-center transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-amber-400 shrink-0" />
                📧 Request Project Proposal
              </button>

            </div>

          </div>

          {/* Right column: Interactive tech visualization */}
          <div className="hidden xl:block xl:col-span-5 relative">
            <div className="bg-[#090e1d] border-2 border-gray-850 rounded-3xl p-8 text-left shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <Cpu className="w-5 h-5 text-sky-500 animate-pulse" />
              </div>
              
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-mono text-cyan-400 tracking-wider font-bold">
                  Enterprise Integration Dashboard
                </span>
                
                <h3 className="text-base font-bold text-white tracking-tight">
                  Intelligent Agent Systems in Action
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed">
                  Random Script Technologies engineers autonomous workforces capable of reading internal knowledge bases, qualifying customer budgets, and executing REST API pipelines.
                </p>

                {/* Simulated visual flow */}
                <div className="bg-[#02050c] p-4 rounded-xl border border-gray-850 space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-gray-500">Autonomous Workflow:</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" /> OPERATIONAL
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="p-2 bg-slate-950/60 border border-gray-900 rounded text-[10.5px] font-mono text-slate-300 flex justify-between">
                      <span>Inbound query parsed</span>
                      <span className="text-sky-400 font-bold">14ms SLA</span>
                    </div>
                    <div className="p-2 bg-slate-950/60 border border-gray-900 rounded text-[10.5px] font-mono text-slate-300 flex justify-between">
                      <span>Vector RAG context query</span>
                      <span className="text-sky-400 font-bold">94% match</span>
                    </div>
                    <div className="p-2 bg-slate-950/60 border border-gray-900 rounded text-[10.5px] font-mono text-slate-300 flex justify-between">
                      <span>Model decision dispatch</span>
                      <span className="text-emerald-400 font-bold">Validated</span>
                    </div>
                  </div>
                </div>

                <div className="text-[10px] text-gray-500 font-mono flex justify-between items-center bg-slate-950/30 p-2.5 rounded-lg border border-gray-850/40">
                  <span>SSL HANDSHAKE VERIFIED</span>
                  <span>LOAD INDEX: low-tier</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
