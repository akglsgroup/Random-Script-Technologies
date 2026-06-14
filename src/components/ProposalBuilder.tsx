import React, { useState } from 'react';
import { Lead } from '../types';
import { 
  Calculator, 
  Layers, 
  Database, 
  Cpu, 
  Calendar, 
  Flame, 
  Send, 
  Check, 
  Sparkles, 
  TrendingUp,
  X
} from 'lucide-react';

interface ProposalBuilderProps {
  isOpen: boolean;
  onClose: () => void;
  onLeadCaptured: () => void;
}

export default function ProposalBuilder({ isOpen, onClose, onLeadCaptured }: ProposalBuilderProps) {
  // Wizard state
  const [selectedServices, setSelectedServices] = useState<string[]>(['AI Agent Systems']);
  const [complexity, setComplexity] = useState<'standard' | 'high' | 'enterprise'>('standard');
  const [timeline, setTimeline] = useState<'express' | 'balanced' | 'comprehensive'>('balanced');
  const [contactName, setContactName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const serviceOptions = [
    { id: 'ai_agent', label: '🤖 Autonomous AI Agents', rate: 12000, desc: 'Self-governing knowledge and automated workflows' },
    { id: 'gen_ai', label: '🧠 Generative AI & Fine-Tuning', rate: 15000, desc: 'Custom LLM models, embed indices, and RAG search' },
    { id: 'enterprise_software', label: '🏢 Enterprise ERP & Systems', rate: 18000, desc: 'CRM, analytics dashboards, booking backplanes' },
    { id: 'mobile_dev', label: '📱 Cross-Platform Mobile Apps', rate: 10000, desc: 'Responsive Flutter/React Native engagement models' },
    { id: 'web_dev', label: '🌐 High-Scale PWAs & Web Portals', rate: 8000, desc: 'Interactive SPA systems built for indexing' },
    { id: 'iot_embedded', label: '🔌 IoT & Firmware Systems', rate: 14000, desc: 'Smart telemetry integration and physical boards' },
    { id: 'cloud_devops', label: '☁️ Cloud Automations & K8s', rate: 9000, desc: 'DevOps CI/CD pipelines, clusters, and migration' },
  ];

  const toggleService = (label: string) => {
    if (selectedServices.includes(label)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== label));
      }
    } else {
      setSelectedServices([...selectedServices, label]);
    }
  };

  // Base calculation logic
  const calculateEstimate = () => {
    let baseSum = 0;
    serviceOptions.forEach(opt => {
      if (selectedServices.includes(opt.label)) {
        baseSum += opt.rate;
      }
    });

    // Complexity multiplier
    let mult = 1.0;
    if (complexity === 'high') mult = 1.35;
    if (complexity === 'enterprise') mult = 1.75;

    // Timeline adjustments
    let speedFee = 0;
    if (timeline === 'express') speedFee = 5000; // Extra speed surcharge

    return Math.round(baseSum * mult + speedFee);
  };

  const getEstimatedTimelineWeeks = () => {
    let weeks = selectedServices.length * 3 + 4;
    if (timeline === 'express') weeks = Math.max(4, Math.round(weeks * 0.65));
    if (timeline === 'comprehensive') weeks = Math.round(weeks * 1.3);
    return weeks;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !companyName) return;

    const estimatedBudget = calculateEstimate();
    const timeframeText = `${getEstimatedTimelineWeeks()} Weeks (${timeline.toUpperCase()})`;

    const newLead: Lead = {
      id: `lead-prop-${Date.now()}`,
      name: contactName,
      email: contactEmail,
      companyName: companyName,
      projectType: 'Interactive Custom Proposal Request',
      budget: `$${estimatedBudget.toLocaleString()}`,
      timeframe: timeframeText,
      customNeeds: selectedServices,
      message: `Self-engineered parameters. \nComplexity tier selected: ${complexity.toUpperCase()}. \nTimeline Speed: ${timeline.toUpperCase()}.`,
      source: 'proposal_builder',
      createdAt: new Date().toISOString(),
      status: 'new'
    };

    // Save to local storage
    const existing = localStorage.getItem('rst_leads');
    let leadsArray: Lead[] = [];
    if (existing) {
      try {
        leadsArray = JSON.parse(existing);
      } catch (e) {
        console.error(e);
      }
    }
    leadsArray.unshift(newLead);
    localStorage.setItem('rst_leads', JSON.stringify(leadsArray));

    setSubmitted(true);
    onLeadCaptured();
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  const totalEstimate = calculateEstimate();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0f172a] border border-gray-800 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-250">
        
        {/* Header toolbar */}
        <div className="p-6 border-b border-gray-800 flex items-center justify-between bg-slate-950/40">
          <div className="flex items-center space-x-3 text-left">
            <div className="p-2.5 bg-sky-950/60 border border-sky-800 text-sky-400 rounded-xl">
              <Calculator className="w-5.5 h-5.5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-1.5 font-mono">
                INTERACTIVE COST & WORKFLOW BUILDER <Sparkles className="w-4 h-4 text-sky-400" />
              </h2>
              <p className="text-xs text-gray-400">Configure core parameters to evaluate scopes and budgets in real-time.</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wizard Main Panel */}
        <div className="grid grid-cols-1 md:grid-cols-12 overflow-hidden bg-slate-950/10">
          
          {/* Left Block: Config Controls (Step inputs) */}
          <div className="md:col-span-7 p-6 border-r border-gray-850 space-y-6 overflow-y-auto max-h-[70vh]">
            
            {/* Step 1: Services selection */}
            <div className="text-left space-y-3">
              <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" /> Step 01: Core Systems Select
              </span>
              <p className="text-xs text-gray-400">Select any module you represent in your desired roadmap architecture.</p>
              
              <div className="space-y-2.5">
                {serviceOptions.map((opt, idx) => {
                  const selected = selectedServices.includes(opt.label);
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleService(opt.label)}
                      className={`p-3 rounded-xl border transition cursor-pointer select-none text-left flex items-start gap-3 ${
                        selected
                          ? 'bg-sky-950/20 border-sky-500/80 shadow-md shadow-sky-500/5'
                          : 'bg-slate-900/40 border-gray-850 hover:bg-slate-900/80 hover:border-gray-850'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center mt-0.5 shrink-0 transition ${
                        selected ? 'bg-sky-500 border-sky-400 text-white' : 'border-gray-700 bg-slate-950/50'
                      }`}>
                        {selected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <div className={`text-xs font-bold leading-none ${selected ? 'text-sky-400' : 'text-gray-200'}`}>
                          {opt.label}
                        </div>
                        <p className="text-[11px] text-gray-400 mt-1">{opt.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Complexity */}
            <div className="text-left space-y-3 pt-2 border-t border-gray-850">
              <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5" /> Step 02: Systems Integrations & Complexity
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'standard', title: 'Standard MVP', desc: 'Core frameworks, standard APIs' },
                  { id: 'high', title: 'Deep Integrations', desc: 'Multi-agent workflows, legacy sync' },
                  { id: 'enterprise', title: 'Enterprise Core', desc: 'Continuous model fine-tunes, H/A' },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setComplexity(item.id as any)}
                    className={`p-3 rounded-xl border text-left flex flex-col justify-between transition ${
                      complexity === item.id
                        ? 'bg-sky-950/30 border-sky-500 text-sky-400'
                        : 'bg-slate-900/40 border-gray-850 text-gray-400 hover:text-white'
                    }`}
                  >
                    <span className="text-xs font-bold">{item.title}</span>
                    <span className="text-[9px] text-gray-500 mt-1 leading-normal">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Timeline speed */}
            <div className="text-left space-y-3 pt-2 border-t border-gray-850">
              <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> Step 03: Delivery Speed & Precision
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'express', title: 'Express Speed', desc: 'Urgent sprint delivery (+ $5,000)' },
                  { id: 'balanced', title: 'Balanced Pace', desc: 'Standard agile sprints & milestone QA' },
                  { id: 'comprehensive', title: 'Extended Core', desc: 'Deep planning & system simulation, test cycles' },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setTimeline(item.id as any)}
                    className={`p-3 rounded-xl border text-left flex flex-col justify-between transition ${
                      timeline === item.id
                        ? 'bg-sky-950/30 border-sky-500 text-sky-400'
                        : 'bg-slate-900/40 border-gray-850 text-gray-400 hover:text-white'
                    }`}
                  >
                    <span className="text-xs font-bold">{item.title}</span>
                    <span className="text-[9px] text-gray-500 mt-1 leading-normal">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Block: live estimation & lead capture */}
          <div className="md:col-span-5 p-6 bg-slate-900/40 flex flex-col justify-between">
            <div className="space-y-6 text-left">
              
              {/* Live Calculator Card */}
              <div className="bg-slate-900 border border-gray-800 rounded-2xl p-5 relative overflow-hidden shadow-inner shadow-slate-950/20">
                <div className="absolute top-0 right-0 p-3">
                  <Flame className="w-4 h-4 text-amber-500 animate-pulse" />
                </div>
                
                <span className="text-[10px] uppercase font-mono text-gray-500 tracking-wider font-bold">Estimated Infrastructure Cost</span>
                <div className="text-3xl font-extrabold text-white mt-1 font-mono tracking-tight flex items-baseline">
                  ${totalEstimate.toLocaleString()}
                  <span className="text-xs text-sky-400 font-sans font-semibold ml-1 block-inline">USD Base</span>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-800/80 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400 font-mono">Modules Selected:</span>
                    <span className="text-white font-bold">{selectedServices.length} Components</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400 font-mono">Development Duration:</span>
                    <span className="text-white font-bold font-mono text-amber-400">~{getEstimatedTimelineWeeks()} Weeks</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400 font-mono">Complexity Weight:</span>
                    <span className="text-white font-bold font-mono">
                      {complexity === 'standard' ? '1.0x (Core)' : complexity === 'high' ? '1.35x (Intelligent)' : '1.75x (Enterprise)'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Form panel or feedback */}
              {submitted ? (
                <div className="bg-emerald-950/20 border border-emerald-900/50 p-5 rounded-2xl text-center space-y-2 animate-in zoom-in duration-200">
                  <span className="inline-flex w-10 h-10 rounded-full bg-emerald-950/40 text-emerald-400 items-center justify-center border border-emerald-800">
                    <Check className="w-5 h-5 stroke-[3]" />
                  </span>
                  <div className="text-sm font-bold text-white font-mono">ENGINEERING ESTIMATE LOCKED IN</div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Inquiry dispatch successful! Ada has registered your parameter preferences. We will connect shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <h3 className="text-xs font-bold font-mono text-gray-300 uppercase tracking-wider flex items-center gap-1.5 pt-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-500" /> Dispatch Blueprint to Architect
                  </h3>
                  
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Contact Name"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      required
                      className="w-full bg-slate-950/50 border border-gray-800 rounded-xl px-3.5 py-1.5 text-xs text-white focus:outline-none focus:border-sky-500 placeholder-gray-500 transition"
                    />
                    <input
                      type="text"
                      placeholder="Organization Name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                      className="w-full bg-slate-950/50 border border-gray-800 rounded-xl px-3.5 py-1.5 text-xs text-white focus:outline-none focus:border-sky-500 placeholder-gray-500 transition"
                    />
                    <input
                      type="email"
                      placeholder="Corporate Email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      required
                      className="w-full bg-slate-950/50 border border-gray-800 rounded-xl px-3.5 py-1.5 text-xs text-white focus:outline-none focus:border-sky-500 placeholder-gray-500 transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-bold rounded-xl text-xs transition flex items-center justify-center gap-1.5 shadow-md shadow-sky-500/5 cursor-pointer"
                  >
                    Lock Scope & Request Proposal <Send className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] text-gray-500 text-center">
                    Submitting logs this parameters immediately into our test submissions console (top menu).
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
