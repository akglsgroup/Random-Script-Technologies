import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WelcomeContent from './components/WelcomeContent';
import ServiceExplorer from './components/ServiceExplorer';
import FeaturedSolutions from './components/FeaturedSolutions';
import IndustriesSection from './components/IndustriesSection';
import ProcessSection from './components/ProcessSection';
import WhyChooseSection from './components/WhyChooseSection';
import ResourcesSection from './components/ResourcesSection';
import ContactSection from './components/ContactSection';

// Overlays
import LeadPortal from './components/LeadPortal';
import AIChatExpert from './components/AIChatExpert';
import ProposalBuilder from './components/ProposalBuilder';

// Icons
import { MessageSquare, Sparkles, Terminal, Database, HelpCircle } from 'lucide-react';
import { Lead } from './types';

export default function App() {
  const [leadCount, setLeadCount] = useState<number>(0);
  
  // Overlay visibility states
  const [isPortalOpen, setPortalOpen] = useState<boolean>(false);
  const [isChatOpen, setChatOpen] = useState<boolean>(false);
  const [isProposalOpen, setProposalOpen] = useState<boolean>(false);

  // Load and count existing leads from user's local storage session
  useEffect(() => {
    updateLeadCount();
  }, []);

  const updateLeadCount = () => {
    const raw = localStorage.getItem('rst_leads');
    if (raw) {
      try {
        const parsed: Lead[] = JSON.parse(raw);
        setLeadCount(parsed.length);
      } catch (e) {
        console.error('Error parsing leads for badge count', e);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#070a13] text-gray-100 overflow-x-hidden font-sans relative">
      
      {/* Decorative vertical grid rails on margins */}
      <div className="absolute inset-y-0 left-6 sm:left-12 lg:left-24 w-px bg-slate-900/40 pointer-events-none hidden md:block" />
      <div className="absolute inset-y-0 right-6 sm:right-12 lg:right-24 w-px bg-slate-900/40 pointer-events-none hidden md:block" />

      {/* Navigation Systems bar */}
      <Navbar 
        onOpenPortal={() => setPortalOpen(true)} 
        onOpenConsultation={() => setChatOpen(true)}
        leadCount={leadCount} 
      />

      {/* Hero Header area */}
      <Hero 
        onOpenChat={() => setChatOpen(true)} 
        onOpenProposal={() => setProposalOpen(true)} 
      />

      {/* Main content sections */}
      <main className="relative">
        
        {/* Welcome block */}
        <WelcomeContent />

        {/* Bento core capabilities section */}
        <ServiceExplorer />

        {/* Live operational dashboard cockpit */}
        <FeaturedSolutions />

        {/* Target industries served */}
        <IndustriesSection />

        {/* Agile chronological process framework */}
        <ProcessSection />

        {/* Why choose values points */}
        <WhyChooseSection />

        {/* Resources topic search centers */}
        <ResourcesSection />

        {/* Bottom consultation forms & checkboxes capture */}
        <ContactSection onLeadCaptured={updateLeadCount} />

      </main>

      {/* Corporate footer */}
      <footer className="bg-[#05080f] py-12 border-t border-gray-900 text-center relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex justify-center items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-linear-to-tr from-sky-500 to-indigo-600 block animate-pulse"></span>
            <span className="text-sm font-bold text-white tracking-widest font-mono">
              RANDOM SCRIPT TECHNOLOGIES
            </span>
          </div>
          <p className="text-xs text-gray-500 max-w-xl mx-auto leading-relaxed">
            © 2026 Random Script Technologies. All rights reserved. • Empowering startups, mid-sized businesses, and enterprises with premium software engineering, autonomous AI workflows, and resilient digital architectures.
          </p>
          <div className="pt-2 flex justify-center space-x-4 text-[10px] text-gray-600 font-mono">
            <a href="#welcome" className="hover:text-sky-400">Back to Top</a>
            <span>•</span>
            <button onClick={() => setPortalOpen(true)} className="hover:text-emerald-400">Leads Tracking Console</button>
            <span>•</span>
            <a href="#services-head" className="hover:text-sky-400">Solutions spec</a>
          </div>
        </div>
      </footer>

      {/* Floating interactive Ada Chat Specialist icon bottom right */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2">
        <button
          onClick={() => setChatOpen(true)}
          className="p-4 bg-gradient-to-r from-sky-500 to-indigo-650 hover:from-sky-600 hover:to-indigo-700 text-white rounded-full shadow-2xl transition duration-150 relative cursor-pointer group flex items-center space-x-2.5 pr-5"
        >
          <div className="relative shrink-0">
            <MessageSquare className="w-5.5 h-5.5" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </div>
          <span className="text-xs font-bold font-mono tracking-tight text-white block">
            Chat with ADA (AI Specialist)
          </span>
        </button>
      </div>

      {/* Interactive overlay dialogs */}
      <LeadPortal 
        isOpen={isPortalOpen} 
        onClose={() => setPortalOpen(false)} 
        onLeadUpdate={updateLeadCount} 
      />

      <AIChatExpert 
        isOpen={isChatOpen} 
        onClose={() => setChatOpen(false)} 
        onLeadCaptured={updateLeadCount} 
      />

      <ProposalBuilder 
        isOpen={isProposalOpen} 
        onClose={() => setProposalOpen(false)} 
        onLeadCaptured={updateLeadCount} 
      />

    </div>
  );
}
