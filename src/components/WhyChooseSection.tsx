import React from 'react';
import { 
  Users, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Box 
} from 'lucide-react';

export default function WhyChooseSection() {
  const points = [
    {
      title: 'Experienced Team',
      icon: Users,
      desc: 'Our staff consists of elite AI engineers, legacy software architects, certified cloud specialists, and veteran digital consultants.'
    },
    {
      title: 'Business-Focused Approach',
      icon: Target,
      desc: 'We align software modules strictly with measurable business outcomes like lowering operational overhead or raising sales conversions.'
    },
    {
      title: 'Scalable Solutions',
      icon: TrendingUp,
      desc: 'Every engine we configure is future-ready and prepared to handle spikes in search bot crawls or incoming client traffic.'
    },
    {
      title: 'Security First',
      icon: ShieldCheck,
      desc: 'We adopt advanced enterprise-grade security rules, secure database schemas, and encrypt API integrations.'
    },
    {
      title: 'Agile Development',
      icon: Zap,
      desc: 'Enjoy rapid milestone delivery cycles paired with completely transparent bi-weekly workspace communication channels.'
    },
    {
      title: 'End-to-End Services',
      icon: Box,
      desc: 'We support you through every junction: from initial conceptual wireframing to production deployment and long-term SLA.'
    }
  ];

  return (
    <section id="why-choose-head" className="py-24 relative overflow-hidden bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider bg-sky-950/30 px-3 py-1 rounded-full border border-sky-900/30">
            Enterprise Edge
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Why Choose Random Script Technologies
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
            Your long-term technology growth partner, committed to premium specifications and absolute operational durability.
          </p>
        </div>

        {/* Grid value cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx}
                className="bg-[#0b101c] border border-gray-850/70 p-6 rounded-3xl text-left hover:border-sky-500/50 transition duration-150 shadow-md flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-950/40 border border-sky-850 text-sky-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
