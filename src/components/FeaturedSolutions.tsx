import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  Terminal, 
  Cpu, 
  MessageSquare, 
  DollarSign, 
  Percent, 
  Gauge, 
  ShieldAlert, 
  CheckCircle,
  TrendingUp,
  MapPin,
  Play,
  RotateCcw,
  Zap
} from 'lucide-react';

interface SystemStats {
  id: string;
  name: string;
  metric1Label: string;
  metric1Val: string;
  metric2Label: string;
  metric2Val: string;
  metric3Label: string;
  metric3Val: string;
  narrative: string;
}

export default function FeaturedSolutions() {
  const [activeSolution, setActiveSolution] = useState<string>('support');
  const [telemetry, setTelemetry] = useState<string[]>([]);
  const [telemetryCounter, setTelemetryCounter] = useState(0);

  const solutions = [
    { id: 'support', label: 'AI Customer Support Platform', icon: MessageSquare },
    { id: 'sales', label: 'AI Sales Automation Suite', icon: TrendingUp },
    { id: 'knowledge', label: 'AI Knowledge Assistant Engine', icon: Bot },
    { id: 'manufacturing', label: 'Smart Manufacturing Platform', icon: Cpu },
    { id: 'asset', label: 'Asset Tracking & Telemetries', icon: MapPin },
    { id: 'automation', label: 'Enterprise Workflow Automator', icon: Zap },
  ];

  const systemAttributes: Record<string, SystemStats> = {
    support: {
      id: 'support',
      name: 'AI Customer Support Platform',
      metric1Label: 'Average Support Cost Trimmed',
      metric1Val: '58.3%',
      metric2Label: 'Average Resolution Speed',
      metric2Val: '14 Seconds',
      metric3Label: 'CSAT (Customer Satisfaction)',
      metric3Val: '4.88 / 5.0',
      narrative: 'A heavy-duty conversational platform capable of multi-layered semantic matching across enterprise products, handling multi-lingual customer tickets and auto-escalating edge cases to CRM operators.'
    },
    sales: {
      id: 'sales',
      name: 'AI Sales Automation Suite',
      metric1Label: 'Qualified Lead Yield',
      metric1Val: '+ 42.1%',
      metric2Label: 'Meetings Booked Weekly',
      metric2Val: '168 Sessions',
      metric3Label: 'SDR Time Saved',
      metric3Val: '28 Hrs / Agent',
      narrative: 'Monitors inbound leads 24/7, responds with personalized proposals, answers deep product specification questions, qualifies intents, and books calendar openings automatically.'
    },
    knowledge: {
      id: 'knowledge',
      name: 'AI Knowledge Assistant Engine',
      metric1Label: 'Documents Indexed',
      metric1Val: '14,208 PDFs',
      metric2Label: 'Response Match Index',
      metric2Val: '0.94 cosine',
      metric3Label: 'Search Speed Metric',
      metric3Val: '124 Milliseconds',
      narrative: 'Performs semantic searches across scattered enterprise spreadsheets, drive archives, Notion databases, and corporate rule books, returning single-sentence citations and reference sources.'
    },
    manufacturing: {
      id: 'manufacturing',
      name: 'Smart Manufacturing Platform',
      metric1Label: 'Overall Equipment OEE',
      metric1Val: '92.4%',
      metric2Label: 'Predictive Fault Alerts',
      metric2Val: '3.5 Hrs Pre-Fault',
      metric3Label: 'Sensor Telemetry Ingestion',
      metric3Val: '2.5M Events/Sec',
      narrative: 'Connects ESP32 nodes and gateway modems with predictive models to model assembly heat logs, detect sub-optimal rotation speeds, and automate maintenance scheduling processes.'
    },
    asset: {
      id: 'asset',
      name: 'Asset Tracking & Telemetries',
      metric1Label: 'Active Fleet Devices',
      metric1Val: '1,450 Units',
      metric2Label: 'Route Cost Drop Weighted',
      metric2Val: '12.8%',
      metric3Label: 'Geofence Breach Latency',
      metric3Val: '0.8 Seconds',
      narrative: 'Utilizes global high-rate GPS modules and connected SIM networks to monitor cargo temperatures, coordinate routing speeds, and alert central hubs of unapproved geo-spatial breaches.'
    },
    automation: {
      id: 'automation',
      name: 'Enterprise Workflow Automator',
      metric1Label: 'Automated Operations',
      metric1Val: '850K Runs/Mo',
      metric2Label: 'Manual Scribe Hours Trimmed',
      metric2Val: '180 Hrs/Mo',
      metric3Label: 'Error Delivery Rate',
      metric3Val: '< 0.001%',
      narrative: 'Coordinates complex trigger-action events across Salesforce, Stripe, Slack, and legacy databases. Enables secure automation sequences without taxing administrative hours.'
    }
  };

  const selectedSys = systemAttributes[activeSolution] || systemAttributes.support;

  // Simulate updating live log stream of selected systems
  useEffect(() => {
    const generateLog = () => {
      const now = new Date().toLocaleTimeString();
      let logStr = '';
      if (activeSolution === 'support') {
        const issues = ['Reset subscription request resolved', 'API key rotation documented', 'Inbound WhatsApp webhook routed', 'Multilingual query translated to German'];
        const randomIssue = issues[Math.floor(Math.random() * issues.length)];
        logStr = `[${now}] OK: Ticket #${Math.floor(Math.random() * 90000 + 10000)} -> ${randomIssue}`;
      } else if (activeSolution === 'sales') {
        const items = ['Lead corporate score computed: 92/100', 'Inbound RFP qualified as hot-tier', 'Consultation meeting booked via Cal.com', 'Outbound proposal drafted and mailed'];
        const randomItem = items[Math.floor(Math.random() * items.length)];
        logStr = `[${now}] DISPATCH: CRM Node -> ${randomItem}`;
      } else if (activeSolution === 'knowledge') {
        const docs = ['employeeHandbook_2026.pdf parsed', 'financialAudit_Q2_RST.csv indexed', 'apiSpecifications.md vectors cached'];
        const randomDoc = docs[Math.floor(Math.random() * docs.length)];
        logStr = `[${now}] VECTOR ENGINE: ${randomDoc} -> Chunks: ${Math.floor(Math.random() * 50 + 10)}`;
      } else if (activeSolution === 'manufacturing') {
        const nodes = ['Assembly Belt A: Temp 42.1°C', 'Packaging Node B: Motor Load 84%', 'Hydraulic line pressure: 120 PSI'];
        const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
        logStr = `[${now}] TELEMETRY INGESTION: ESP32_Node_${Math.floor(Math.random()*20)} -> ${randomNode}`;
      } else if (activeSolution === 'asset') {
        const points = ['Truck #104 matched geofencing', 'Reefer Container #48 Temp Locked 2.1°C', 'Asset #99 coordinates captured'];
        const randomPoint = points[Math.floor(Math.random() * points.length)];
        logStr = `[${now}] GEO-LOC: GPS Stream -> ${randomPoint}`;
      } else {
        const actions = ['On Contract Signing -> Invoice Created', 'CRM Lead Won -> Slack Announcement', 'Inventory Under limits -> Purchase requisition generated'];
        const randomAction = actions[Math.floor(Math.random() * actions.length)];
        logStr = `[${now}] AUTOMATION RUN: ${randomAction}`;
      }
      setTelemetry(prev => [logStr, ...prev.slice(0, 7)]);
    };

    // Prepopulate
    setTelemetry([
      `[${new Date().toLocaleTimeString()}] System initializing diagnostics...`,
      `[${new Date().toLocaleTimeString()}] Loading telemetry components...`,
      `[${new Date().toLocaleTimeString()}] Secure node SSL handshake verified.`
    ]);

    const timer = setInterval(() => {
      generateLog();
      setTelemetryCounter(c => c + 1);
    }, 2500);

    return () => clearInterval(timer);
  }, [activeSolution]);

  return (
    <section id="solutions-show" className="py-24 relative overflow-hidden bg-slate-950/20 border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider bg-sky-950/30 px-3 py-1 rounded-full border border-sky-900/30">
            Simulate Systems
          </span>
          <h2 id="featured-solutions-head" className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Featured Solutions & Platform Cockpit
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
            Select a solution model below to launch its real-time telemetry diagnostics compiler. Observe operational metrics and active streams.
          </p>
        </div>

        {/* Dashboard layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Selector List */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full bg-slate-900/10 border border-gray-850/60 p-4 rounded-3xl gap-2">
            <div className="space-y-2 text-left">
              <span className="text-[10px] font-mono text-gray-500 uppercase font-bold pl-2 tracking-widest block mb-2">
                Launch System Driver
              </span>
              {solutions.map((sol) => {
                const Icon = sol.icon;
                const isSelected = sol.id === activeSolution;
                return (
                  <button
                    key={sol.id}
                    onClick={() => setActiveSolution(sol.id)}
                    className={`w-full p-4 rounded-2xl border text-left flex items-center space-x-3.5 transition duration-150 cursor-pointer ${
                      isSelected
                        ? 'bg-sky-950/20 border-sky-500 text-sky-400 shadow-md shadow-sky-500/5'
                        : 'bg-slate-900/35 border-gray-850 text-gray-400 hover:bg-slate-900/60 hover:text-white'
                    }`}
                  >
                    <div className={`p-2 rounded-xl shrink-0 border ${
                      isSelected ? 'bg-sky-500/15 border-sky-550' : 'bg-slate-950/50 border-gray-800'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold leading-normal truncate">{sol.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Core Interactive Cockpit Screen */}
          <div className="lg:col-span-8 bg-[#070a13] border-2 border-gray-850 rounded-3xl overflow-hidden shadow-2xl relative flex flex-col justify-between">
            
            {/* Simulation Header */}
            <div className="px-6 py-4 bg-slate-950/60 border-b border-gray-850 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-mono text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                  Live Terminal • {selectedSys.name}
                </span>
              </div>
              <span className="px-2 py-0.5 bg-sky-950/45 text-sky-400 border border-sky-900/50 text-[10px] rounded-sm font-mono uppercase">
                Active Nodes: {Math.floor(Math.random() * 4 + 8)}
              </span>
            </div>

            {/* Metrics block */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-gray-850 bg-slate-950/20">
              <div className="bg-slate-900/60 p-4 rounded-2xl border border-gray-850/40 text-left">
                <span className="text-[9.5px] font-mono text-gray-500 uppercase tracking-widest block leading-none">
                  {selectedSys.metric1Label}
                </span>
                <span className="text-2xl font-black text-white block mt-2 font-mono tracking-tight">
                  {selectedSys.metric1Val}
                </span>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-2xl border border-gray-850/40 text-left">
                <span className="text-[9.5px] font-mono text-gray-400 uppercase tracking-widest block leading-none">
                  {selectedSys.metric2Label}
                </span>
                <span className="text-2xl font-black text-sky-400 block mt-2 font-mono tracking-tight">
                  {selectedSys.metric2Val}
                </span>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-2xl border border-gray-850/40 text-left">
                <span className="text-[9.5px] font-mono text-gray-400 uppercase tracking-widest block leading-none">
                  {selectedSys.metric3Label}
                </span>
                <span className="text-2xl font-black text-emerald-400 block mt-2 font-mono tracking-tight">
                  {selectedSys.metric3Val}
                </span>
              </div>
            </div>

            {/* Terminal logs display */}
            <div className="p-6 flex-1 text-left bg-slate-950/60">
              <span className="text-[10px] font-mono text-gray-600 uppercase block tracking-wider font-bold mb-3">
                Ingested Security Webhook Terminal
              </span>
              <div className="bg-[#02050c] p-4 rounded-xl border border-gray-850 max-h-[190px] overflow-y-auto font-mono text-xs text-slate-300 space-y-1.5 shadow-inner">
                {telemetry.map((log, idx) => (
                  <div key={idx} className="flex items-start gap-1">
                    <span className="text-sky-504 text-cyan-500 shrink-0 select-none">❯</span>
                    <span className={`${idx === 0 ? 'text-emerald-400 font-semibold' : 'text-slate-400'}`}>
                      {log}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Overview / Narrative info */}
            <div className="px-6 py-5 border-t border-gray-850 bg-slate-950/40 flex flex-col md:flex-row md:items-center justify-between text-left gap-4">
              <div className="max-w-xl">
                <span className="text-[10px] font-mono text-gray-500 uppercase font-bold tracking-wider block">Scope Architecture</span>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                  {selectedSys.narrative}
                </p>
              </div>
              <a 
                href="#consultation-panel"
                className="shrink-0 text-center py-2 px-4 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-sky-500/5 h-fit"
              >
                Inquire system build <Zap className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
