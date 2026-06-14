import React, { useState } from 'react';
import { 
  HeartPulse, 
  Warehouse, 
  ShoppingBag, 
  Truck, 
  Banknote, 
  Building2, 
  GraduationCap, 
  PlaneTakeoff,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface Industry {
  id: string;
  name: string;
  icon: any;
  title: string;
  description: string;
  features: string[];
  color: string;
}

export default function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('healthcare');

  const industries: Industry[] = [
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: HeartPulse,
      title: 'Digital Health Solutions & Telemedicine',
      description: 'We develop compliant digital healthcare portals, patient tracking frameworks, remote monitoring networks, and medical document summarization tools.',
      features: ['Patient & Doctor Portals', 'Telemedicine video pipelines', 'EHR/EMR custom integrators', 'Predictive health analytics'],
      color: 'from-sky-502 to-blue-600'
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: Warehouse,
      title: 'Industry 4.0 & Smart Assembly Fields',
      description: 'Connected operations, IoT hardware interfaces predictive maintenance alerts, and overall equipment efficiency (OEE) tracking modules.',
      features: ['Industrial IoT (IIoT) sensors', 'Predictive machine failure alerts', 'Supply chain backplane tracking', 'Warehouse automated logistics'],
      color: 'from-amber-500 to-orange-600'
    },
    {
      id: 'retail',
      name: 'Retail & Ecommerce',
      icon: ShoppingBag,
      title: 'AI Omnichannel Selling Frameworks',
      description: 'Smart buyer checkout pipelines, automated AI recommandation loops, personalized coupons, and full omnichannel stock sync systems.',
      features: ['AI personalization assistants', 'Live inventory trackers', 'Seamless fast cart checkouts', 'Multichannel CRM workflows'],
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'logistics',
      name: 'Logistics',
      icon: Truck,
      title: 'Predictive Global Fleet Coordination',
      description: 'Global routing engines, automated warehouse shelves trackers, driver hours checkers, and GPS temperature controls.',
      features: ['Real-time fleet tracking maps', 'Algorithmic route speed controls', 'Warehouse stock status alerts', 'Automated freight invoicing'],
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'fintech',
      name: 'Fintech',
      icon: Banknote,
      title: 'Frictionless Digital Paying Systems',
      description: 'Secure, PCI-compliant payment integrations, micro-lending platforms, automated compliance risk checkers, and audit ledger logs.',
      features: ['Digital paying gateways', 'Smart compliance screening', 'Lending analytics trackers', 'Automated financial ledgers'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'realestate',
      name: 'Real Estate',
      icon: Building2,
      title: 'PropTech & Intelligent CRM Portals',
      description: 'Automated tenant rental trackers, digital agreements signoffs, property metrics grids, and connected building telemetry.',
      features: ['Tenant payment portals', 'Automated leasing calendars', 'Proptech IoT utility trackers', 'Intelligent broker CRM lists'],
      color: 'from-rose-500 to-pink-650'
    },
    {
      id: 'education',
      name: 'Education',
      icon: GraduationCap,
      title: 'Connected Virtual Classrooms & LMS',
      description: 'Scalable lesson planners, video classrooms, automated grading score cards, and student engagement telemetry.',
      features: ['Interactive LMS panels', 'eLearning video players', 'Automated quiz examiners', 'Parent-student progress report cards'],
      color: 'from-violet-500 to-purple-600'
    },
    {
      id: 'travel',
      name: 'Travel & Hospitality',
      icon: PlaneTakeoff,
      title: 'Scalable Booking & Operating Automation',
      description: 'Custom reservation calendars, channel manager APIs, automated traveler check-ins, and local trip itinerary generators.',
      features: ['Multi-channel reservation APIs', 'Dynamic pricing estimators', 'Inbound traveler checkers', 'Operational chore schedules'],
      color: 'from-sky-500 to-indigo-600'
    }
  ];

  const currentSelection = industries.find(ind => ind.id === selectedIndustry) || industries[0];

  return (
    <section id="industries-head" className="py-24 relative overflow-hidden bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider bg-sky-950/30 px-3 py-1 rounded-full border border-sky-900/30">
            Sectors & Scale
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Technology Solutions Built for Every Industry
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
            We adapt cutting-edge AI architectures and highly robust software libraries to fit the strict regulatory and practical goals of specific sectors.
          </p>
        </div>

        {/* Industry Grid + Spotlight details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Grid buttons to select Industry */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((ind) => {
              const Icon = ind.icon;
              const isSelected = ind.id === selectedIndustry;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind.id)}
                  className={`p-5 rounded-2xl border text-center flex flex-col items-center justify-center transition cursor-pointer select-none h-36 ${
                    isSelected
                      ? 'bg-slate-900/80 border-sky-500 text-sky-400 shadow-lg shadow-sky-500/5'
                      : 'bg-slate-900/20 border-gray-850 text-gray-400 hover:bg-slate-900/55 hover:border-gray-800'
                  }`}
                >
                  <Icon className={`w-7 h-7 mb-3 ${isSelected ? 'text-sky-400' : 'text-gray-500'}`} />
                  <span className={`text-xs font-bold leading-none ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                    {ind.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Expanded Spotlight Cards */}
          <div className="lg:col-span-4 h-full">
            <div className="bg-[#0b101c] border border-gray-850 rounded-3xl p-6 text-left relative overflow-hidden flex flex-col justify-between min-h-[304px] shadow-xl animate-in fade-in duration-200">
              
              {/* Highlight Gradient Top */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-indigo-600" />
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <currentSelection.icon className="w-5 h-5 text-sky-400" />
                  <span className="text-[10px] font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                    Industry In Focus: {currentSelection.name}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">
                  {currentSelection.title}
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {currentSelection.description}
                </p>

                {/* Bullets */}
                <div className="space-y-2 pt-2 border-t border-gray-850">
                  <span className="text-[10px] font-mono text-gray-550 uppercase tracking-widest block font-bold mb-1">
                    Custom Components We Build
                  </span>
                  <div className="grid grid-cols-1 gap-1.5">
                    {currentSelection.features.map((feat, idx) => (
                      <span key={idx} className="text-xs text-gray-305 flex items-center gap-1.5 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <a 
                href="#consultation-panel"
                className="mt-6 w-full py-2 bg-slate-900 border border-gray-800 hover:bg-slate-800 text-center text-xs text-white rounded-xl font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Inquire about {currentSelection.name} Solutions <ArrowRight className="w-3.5 h-3.5" />
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
