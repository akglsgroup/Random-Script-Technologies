import React, { useState } from 'react';
import { 
  Compass, 
  Map, 
  Layers, 
  Terminal, 
  Fingerprint, 
  TrendingUp,
  FileCheck,
  Rocket,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

interface ProcessStep {
  idx: number;
  title: string;
  icon: any;
  leadRole: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps: ProcessStep[] = [
    {
      idx: 1,
      title: 'Discovery & Consultation',
      icon: Compass,
      leadRole: 'Principal Architect & Business Specialist',
      duration: '3 to 5 Days',
      description: 'Understanding unique business challenges, evaluating existing workflows, and quantifying automation opportunity targets.',
      deliverables: ['AI Readiness Audit Score', 'Functional Requirements Matrix', 'High-level Scope outline', 'Technical Feasibility summary']
    },
    {
      idx: 2,
      title: 'Strategy & Planning',
      icon: Map,
      leadRole: 'Systems Solution Architect',
      duration: '1 Week',
      description: 'Engineering detailed roadmaps, modeling database schemas, designing AI system swarms, and configuring secure cloud scopes.',
      deliverables: ['Database Schema blueprints', 'API Integration specifications', 'System Architecture maps', 'Milestone Gantt diagrams']
    },
    {
      idx: 3,
      title: 'Design & Prototyping',
      icon: Layers,
      leadRole: 'Senior Lead UI/UX Engineer',
      duration: '1 to 2 Weeks',
      description: 'Building intuitive interface wiring flows, styling high-fidelity color guides, and demonstrating interactions via mock canvas dashboards.',
      deliverables: ['Interactive Figma prototypes', 'Responsive Design design guides', 'Key UI Interaction guides', 'Lighthouse mock render audits']
    },
    {
      idx: 4,
      title: 'Agile Development',
      icon: Terminal,
      leadRole: 'Principal Technical Lead',
      duration: 'Sprints (2-Week cycles)',
      description: 'Writing semantic TypeScript code, initializing custom AI workflows, compiling embedded controller drivers, and deploying microservices.',
      deliverables: ['Sovereign clean Git repositories', 'REST/GraphQL API endpoints', 'Dynamic core models', 'Incremental bi-weekly sprint reviews']
    },
    {
      idx: 5,
      title: 'Testing & Quality Assurance',
      icon: FileCheck,
      leadRole: 'Senior QA Analyst & Security Specialist',
      duration: 'Continuous Integration',
      description: 'Automating unit code tests, checking database boundary behaviors, testing load peaks under simulated traffic, and auditing API keys security.',
      deliverables: ['End-to-end telemetry reports', 'Vulnerability scanning reports', 'Load balance speed benchmarks', 'QA Sign-off audits']
    },
    {
      idx: 6,
      title: 'Deployment & Support',
      icon: Rocket,
      leadRole: 'Lead Cloud DevOps Engineer',
      duration: 'Continuous Delivery (SLA)',
      description: 'Configuring load balancers on AWS/GCP, establishing secure hot backups, launching system drivers, and providing 24/7 incident tracking systems.',
      deliverables: ['Deployed live environment links', 'Infrastructure-as-Code scripts', '24/7 SLA Response monitoring', 'IP & Repository lock transfers']
    }
  ];

  const currentStep = steps.find(s => s.idx === activeStep) || steps[0];

  return (
    <section id="process-head" className="py-24 relative overflow-hidden bg-slate-950/20 border-t border-b border-gray-901">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider bg-sky-950/30 px-3 py-1 rounded-full border border-sky-900/30">
            Methodology Framework
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            A Proven Agile Process for Successful Digital Transformation
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
            From initial brainstorms to scalable SLA operations, we apply rigorous structures to guarantee deployment stability.
          </p>
        </div>

        {/* Process Roadmap layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Timeline Selector left side */}
          <div className="lg:col-span-5 text-left space-y-3 relative">
            <span className="text-[10px] font-mono text-gray-500 uppercase font-bold pl-2 tracking-widest block mb-4">
              Agile Roadmap Phases
            </span>
            
            {/* Simple timeline line helper */}
            <div className="absolute left-6 top-12 bottom-6 w-0.5 bg-gray-800 pointer-events-none hidden sm:block" />

            <div className="space-y-3 relative z-10">
              {steps.map((st) => {
                const Icon = st.icon;
                const isSelected = st.idx === activeStep;
                return (
                  <button
                    key={st.idx}
                    onClick={() => setActiveStep(st.idx)}
                    className={`w-full p-3.5 pl-5 sm:pl-12 rounded-2xl border text-left flex items-center justify-between transition duration-150 cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-slate-900 to-[#121c33]/50 border-sky-550 text-white shadow-md'
                        : 'bg-slate-900/10 border-gray-850 text-gray-400 hover:bg-slate-900/40'
                    }`}
                  >
                    <div className="flex items-center space-x-3.5">
                      {/* Round step icon */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-xs border shrink-0 ${
                        isSelected 
                          ? 'bg-sky-950/50 border-sky-500 text-sky-400' 
                          : 'bg-slate-950 border-gray-800 text-gray-500'
                      }`}>
                        {st.idx}
                      </div>
                      <span className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                        {st.title}
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-sky-400 translate-x-1' : 'text-gray-650'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Expanded Step Spotlight Card right side */}
          <div className="lg:col-span-7">
            <div className="bg-[#0b101c] border border-gray-850 rounded-3xl p-6 sm:p-9 text-left relative overflow-hidden flex flex-col justify-between min-h-[464px] shadow-2xl animate-in fade-in duration-200">
              
              {/* Highlight Gradient Left edge */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-linear-to-b from-sky-450 to-indigo-600" />
              
              <div className="space-y-6">
                
                {/* Header spotlight */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-sky-950/30 border border-sky-900/30 rounded-2xl text-sky-400">
                      <currentStep.icon className="w-6 h-6 animate-pulse" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                        Phase 0{currentStep.idx} Spotlight
                      </span>
                      <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">
                        {currentStep.title}
                      </h3>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-slate-900 border border-gray-800 text-gray-400 font-mono text-xs rounded-full">
                    {currentStep.duration}
                  </span>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed pt-2 border-t border-gray-850">
                  {currentStep.description}
                </p>

                {/* Subdetails layout */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 pt-2">
                  
                  {/* Lead Role Column */}
                  <div className="sm:col-span-5 space-y-1">
                    <span className="text-[10px] font-mono text-gray-500 uppercase font-bold tracking-widest block">
                      Lead Coordinator role
                    </span>
                    <span className="text-xs text-white font-bold block leading-relaxed">
                      {currentStep.leadRole}
                    </span>
                  </div>

                  {/* High Quality Deliverables */}
                  <div className="sm:col-span-7 space-y-2">
                    <span className="text-[10px] font-mono text-gray-500 uppercase font-bold tracking-widest block">
                      Guaranteed Deliverable Outputs
                    </span>
                    <div className="grid grid-cols-1 gap-1.5_">
                      {currentStep.deliverables.map((out, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-300">
                          <span className="w-1 h-1 rounded-full bg-sky-400 shrink-0" />
                          <span>{out}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

              {/* Action trigger footer inside the process */}
              <div className="mt-8 pt-6 border-t border-gray-850 flex flex-col sm:flex-row items-center justify-between text-left gap-4">
                <div className="text-xs text-gray-400 leading-normal">
                  Want to learn more about our <strong>{currentStep.title}</strong> frameworks?
                </div>
                <a 
                  href="#consultation-panel"
                  className="w-full sm:w-auto py-2 px-4 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-sky-500/5 h-fit"
                >
                  Book Discovery Meeting <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
