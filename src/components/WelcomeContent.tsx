import React from 'react';
import { ShieldCheck, Award, Zap, HardDrive, Target } from 'lucide-react';

export default function WelcomeContent() {
  return (
    <section id="welcome" className="py-24 relative overflow-hidden bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider bg-sky-950/30 px-3 py-1 rounded-full border border-sky-900/30">
              Corporate Credentials
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Welcome to Random Script Technologies
              <span className="block text-sky-400 text-2xl sm:text-3xl font-medium mt-2">
                Building Intelligent Digital Solutions for the AI Era
              </span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Random Script Technologies is a leading AI-powered software development company specializing in designing, developing, and scaling innovative digital products. We combine Artificial Intelligence, Machine Learning, Software Engineering, Cloud Technologies, and Internet of Things (IoT) solutions to help organizations improve efficiency, reduce costs, and unlock new growth opportunities.
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Our team of experienced developers, AI engineers, solution architects, UI/UX designers, and business consultants works closely with clients to transform ideas into scalable, secure digital products.
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Whether you are a startup building your first MVP, a mid-sized company seeking automation, or an enterprise modernizing legacy platforms, we deliver customized, high-ROI engineering campaigns that produce measurable business outcomes.
            </p>

            {/* Core Badges matching requested capabilities block */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-gray-850/60 flex flex-col items-center justify-center text-center">
                <ShieldCheck className="w-6 h-6 text-emerald-400 mb-2" />
                <span className="text-[10.5px] font-bold text-gray-200">100% Secure</span>
              </div>
              <div className="bg-slate-900/40 p-4 rounded-xl border border-gray-850/60 flex flex-col items-center justify-center text-center">
                <Award className="w-6 h-6 text-amber-400 mb-2" />
                <span className="text-[10.5px] font-bold text-gray-200">Agile Quality</span>
              </div>
              <div className="bg-slate-900/40 p-4 rounded-xl border border-gray-850/60 flex flex-col items-center justify-center text-center">
                <Zap className="w-6 h-6 text-sky-400 mb-2" />
                <span className="text-[10.5px] font-bold text-gray-200">Low Latency AI</span>
              </div>
              <div className="bg-slate-900/40 p-4 rounded-xl border border-gray-850/60 flex flex-col items-center justify-center text-center">
                <HardDrive className="w-6 h-6 text-purple-400 mb-2" />
                <span className="text-[10.5px] font-bold text-gray-200">Full IP Ownership</span>
              </div>
            </div>
          </div>

          {/* Right Bento Statistics card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#0c1222] to-[#121c33] border border-gray-850 rounded-3xl p-8 text-left relative overflow-hidden shadow-2xl">
              
              {/* Abs grid bg */}
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-sky-400" />
                  <span className="text-xs font-mono text-sky-400 uppercase tracking-widest font-bold">Performance Track Record</span>
                </div>

                <div className="space-y-4">
                  <div className="border-b border-gray-800 pb-4">
                    <span className="text-[10.5px] text-gray-450 uppercase block font-mono">Completed Projects</span>
                    <div className="text-3xl font-extrabold text-white mt-1">100% Real Solutions</div>
                  </div>
                  <div className="border-b border-gray-800 pb-4">
                    <span className="text-[10.5px] text-gray-455 uppercase block font-mono">Expert Consulting Architects</span>
                    <div className="text-3xl font-extrabold text-white mt-1">Sovereign Engineers</div>
                  </div>
                  <div>
                    <span className="text-[10.5px] text-gray-455 uppercase block font-mono">Infrastructure Uptime guarantee</span>
                    <div className="text-3xl font-extrabold text-emerald-400 mt-1 font-mono">99.98% SLA</div>
                  </div>
                </div>

                <div className="p-4 bg-sky-950/20 border border-sky-950 rounded-xl text-xs text-sky-305 leading-relaxed">
                  "Our engineering process relies on robust code repositories, strict unit testing, and full cloud automation parameters to eliminate human deployment errors."
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
