import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Lightbulb, 
  ShieldCheck, 
  Award, 
  Zap, 
  TrendingUp, 
  Cpu, 
  Bot, 
  MessageSquare,
  Binary, 
  Database, 
  Cloud,
  Layers,
  ChevronRight,
  ChevronDown,
  LineChart,
  Network,
  Users,
  Target,
  FileCheck,
  Stethoscope,
  Factory,
  ShoppingBag,
  Truck,
  DollarSign,
  Undo2
} from 'lucide-react';

interface AIDevelopmentCompanyProps {
  onBackToHome: () => void;
  onOpenConsultation: () => void;
  onOpenProposal: () => void;
}

export default function AIDevelopmentCompany({ 
  onBackToHome, 
  onOpenConsultation, 
  onOpenProposal 
}: AIDevelopmentCompanyProps) {
  
  // FAQs list
  const faqs = [
    {
      q: 'What is AI development?',
      a: 'AI development involves creating software systems capable of learning, reasoning, automating tasks, and making intelligent decisions using Artificial Intelligence technologies, such as Large Language Models, deep learning neural networks, and semantic vector indexes.'
    },
    {
      q: 'How much does AI development cost?',
      a: 'Costs vary depending on complexity, integrations, data requirements, and project scope. Small AI helper projects may start from $5,000, while custom multi-agent enterprise solutions and custom model training can exceed $100,000. We offer flexible packages tailored strictly to your ROI goals.'
    },
    {
      q: 'How long does AI development take?',
      a: 'Most software proof-of-concept AI engines take between 4 weeks and 6 months depending on required feature sets, database constraints, and API telemetry specifications.'
    },
    {
      q: 'Which industries benefit most from AI?',
      a: 'Healthcare, Manufacturing, Retail, Logistics, Fintech, Education, Real Estate, and Customer Service industries see immediate significant benefits of 30-65% operational efficiency improvements from early AI adoption.'
    }
  ];

  // AI Development stack categories
  const techStack = [
    {
      category: 'Foundation Models',
      items: ['OpenAI GPT-4o', 'Google Gemini 1.5 Pro', 'Anthropic Claude 3.5 Sonnet', 'Meta Llama 3', 'Mistral Large']
    },
    {
      category: 'AI Agent Frameworks',
      items: ['LangChain', 'LangGraph', 'CrewAI', 'AutoGen', 'Haystack']
    },
    {
      category: 'Development Stack',
      items: ['Python', 'FastAPI', 'Node.js', 'React', 'Next.js', 'TypeScript']
    },
    {
      category: 'Cloud & Vector Platforms',
      items: ['AWS Cloud', 'Microsoft Azure', 'Google Cloud Platform', 'Pinecone DB', 'Supabase Vector']
    }
  ];

  // State to manage FAQ toggle
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#070a13] text-gray-100 min-h-screen pt-24 pb-16 relative">
      
      {/* Absolute top glowing line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 z-50" />
      
      {/* Return button floating at top of screen */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-left">
        <button 
          onClick={onBackToHome}
          className="inline-flex items-center space-x-2 text-xs font-mono text-sky-400 hover:text-sky-300 transition bg-sky-950/20 border border-sky-900/30 px-3.5 py-2 rounded-xl cursor-pointer"
        >
          <Undo2 className="w-3.5 h-3.5" />
          <span>← BACK TO MAIN DIGITAL SUITE</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* ====================================
            1. HERO CORNERSTONE HEADER 
           ==================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-sky-950/40 border border-sky-800/40 rounded-full">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span className="text-[10px] text-sky-400 font-mono tracking-wider uppercase font-semibold">
                PILLAR SERVICE PAGE • SECURE WORKFLOWS
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
              AI Development Company
            </h1>
            
            <h2 className="text-xl sm:text-2xl font-bold text-sky-400 leading-snug">
              Build Custom AI Solutions to Automate, Scale, and Transform Your Business
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Random Script Technologies is a leading AI development company helping startups, enterprises, and organizations leverage Artificial Intelligence, Generative AI, Machine Learning, AI Agents, and Intelligent Automation to improve productivity, reduce operational costs, and accelerate business growth.
            </p>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Whether you need an AI chatbot, enterprise AI assistant, workflow automation platform, predictive analytics solution, or custom AI application, our team delivers scalable and business-focused AI solutions tailored to your objectives.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <button 
                onClick={onOpenConsultation}
                className="px-6 py-3.5 bg-gradient-to-r from-sky-550 to-blue-600 hover:from-sky-650 hover:to-blue-700 text-white font-extrabold rounded-xl text-xs sm:text-sm text-center transition flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-sky-500/10"
              >
                🚀 Get Free AI Consultation
              </button>

              <button 
                onClick={onOpenProposal}
                className="px-6 py-3.5 bg-slate-900 border border-gray-800 hover:bg-slate-850 hover:border-gray-750 text-gray-250 hover:text-white font-extrabold rounded-xl text-xs sm:text-sm text-center transition flex items-center justify-center gap-2 cursor-pointer"
              >
                📧 Request AI Development Proposal
              </button>

              <a 
                href="#consultation-panel"
                className="px-6 py-3.5 bg-slate-950 border border-gray-850/60 text-sky-400 hover:text-sky-300 font-bold rounded-xl text-xs sm:text-sm text-center transition flex items-center justify-center gap-2"
              >
                📞 Schedule Discovery Call
              </a>
            </div>

          </div>

          <div className="lg:col-span-5 relative">
            <div className="bg-[#0b1021] border-2 border-slate-850 p-6 rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" 
                alt="AI Neural Network Flow Concept" 
                className="w-full h-56 object-cover rounded-2xl mb-6 border border-gray-800"
                referrerPolicy="no-referrer"
              />

              <div className="space-y-3.5 text-left">
                <span className="text-[10px] uppercase font-mono text-sky-400 tracking-wider font-semibold">
                  Sovereign AI Integration Lab
                </span>
                <p className="text-xs text-gray-300 leading-relaxed font-sans mt-1">
                  We specialize in building fully compliant, zero-leak enterprise applications that operate seamlessly across local clouds.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded-lg text-[9px] font-mono text-gray-400">LLM Fine-Tuning</span>
                  <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded-lg text-[9px] font-mono text-gray-400">RAG Architectures</span>
                  <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded-lg text-[9px] font-mono text-gray-400">Multi-Agent Swarms</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================
            2. WHY INVEST IN AI DEVELOPMENT
           ==================================== */}
        <section className="text-left space-y-10">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider bg-sky-950/30 px-3 py-1 rounded-full border border-sky-900/30">
              ROI & Advantages
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mt-3">
              Why Invest in AI Development?
            </h2>
            <p className="text-gray-400 mt-3 text-sm sm:text-base leading-relaxed">
              Artificial Intelligence is reshaping how modern businesses operate, make intelligent decisions, and interact with global customers. Our high-fidelity AI integrations help organizations scale seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Automate Repetitive Tasks', desc: 'Free up valuable creative human capital by shifting volume work to auto-triggering AI logic.' },
              { title: 'Improve Customer Support', desc: 'Handle thousands of complex multi-channel inquiries instantaneously with constant 24/7 accuracy.' },
              { title: 'Generate Business Insights', desc: 'Mine massive structured and unstructured text databases to find immediate business vectors.' },
              { title: 'Increase Operational Efficiency', desc: 'Orchestrate parallel system tasks simultaneously while minimizing manual database overhead.' },
              { title: 'Reduce Human Errors', desc: 'Deploy fine-tuned semantic validators that check schema structures, logs, and billing files.' },
              { title: 'Enhance Decision-Making', desc: 'Query predictive trend dashboards that draw statistics from live streaming pipeline parameters.' },
              { title: 'Create New Revenue Streams', desc: 'Integrate premium customized automated SaaS tools and proprietary subscription assets.' },
              { title: 'Improve Customer Experience', desc: 'Deliver fluid custom recommendations and localized product selections to users.' }
            ].map((p, idx) => (
              <div key={idx} className="bg-[#0b101c] border border-slate-850 p-5 rounded-2xl flex flex-col justify-between hover:border-sky-500/30 transition duration-150">
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-950 flex items-center justify-center border border-sky-900">
                    <span className="text-xs font-mono text-sky-400 font-bold">0{idx + 1}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight">{p.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ====================================
            3. SPECIALIST AI SERVICES SECTORS
           ==================================== */}
        <section className="text-left space-y-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider bg-sky-950/30 px-3 py-1 rounded-full border border-sky-900/30">
              Our Capabilities
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mt-3">
              Elite AI Development Services
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              We leverage modern technology stacks to deliver enterprise-class intelligent pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-[#090d16] border border-slate-850 p-7 rounded-3xl space-y-5 relative">
              <div className="absolute top-4 right-4 p-2 bg-sky-950/40 rounded-xl text-sky-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight pr-6">Generative AI Development</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Build intelligent systems powered by leading large language models customized to ingest your secure business databases.
              </p>
              <div className="border-t border-slate-850 pt-4 space-y-2">
                <span className="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-widest block">Featured Solutions</span>
                <ul className="grid grid-cols-2 gap-1.5 text-xs text-gray-300">
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-sky-400 shrink-0" /> AI Content Generation</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-sky-400 shrink-0" /> AI Writing Assistants</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-sky-400 shrink-0" /> AI Research Assistants</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-sky-400 shrink-0" /> AI Copilots</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-sky-400 shrink-0" /> AI Knowledge Bases</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-sky-400 shrink-0" /> AI Search Engines</li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-[#090d16] border border-slate-850 p-7 rounded-3xl space-y-5 relative">
              <div className="absolute top-4 right-4 p-2 bg-emerald-950/40 rounded-xl text-emerald-400">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight pr-6">AI Agent Development</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Develop autonomous agentic systems capable of orchestrating multi-step API tools, resolving client tickets, and operating workflows.
              </p>
              <div className="border-t border-slate-850 pt-4 space-y-2">
                <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest block">AI Agents We Build</span>
                <ul className="grid grid-cols-2 gap-1.5 text-xs text-gray-300">
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" /> Customer Support Agents</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" /> Sales AI Agents</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" /> HR AI Agents</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" /> Recruitment Agents</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" /> Knowledge Management Agents</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" /> Operations Agents</li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-[#090d16] border border-slate-850 p-7 rounded-3xl space-y-5 relative">
              <div className="absolute top-4 right-4 p-2 bg-purple-950/40 rounded-xl text-purple-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight pr-6">Enterprise AI Development</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Unlock high scalability for heavy multi-division corporate ecosystems with localized, highly secured private network processing.
              </p>
              <div className="border-t border-slate-850 pt-4 space-y-2">
                <span className="text-[10px] font-mono text-purple-400 font-bold uppercase tracking-widest block">Features & Architecture</span>
                <ul className="grid grid-cols-2 gap-1.5 text-xs text-gray-300">
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-purple-400 shrink-0" /> Internal AI Assistants</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-purple-400 shrink-0" /> Enterprise Search</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-purple-400 shrink-0" /> Knowledge Management</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-purple-400 shrink-0" /> Document Intelligence</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-purple-400 shrink-0" /> Workflow Automation</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-purple-400 shrink-0" /> Predictive Analytics</li>
                </ul>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-[#090d16] border border-slate-850 p-7 rounded-3xl space-y-5 relative">
              <div className="absolute top-4 right-4 p-2 bg-blue-950/40 rounded-xl text-blue-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight pr-6">AI Chatbot Development</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Deploy human-like conversational interfaces across your consumer touchpoints with dynamic message memory stores.
              </p>
              <div className="border-t border-slate-850 pt-4 space-y-2">
                <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-widest block">Available Platforms</span>
                <ul className="grid grid-cols-2 gap-1.5 text-xs text-gray-300">
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" /> Website Chatbots</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" /> WhatsApp AI Chatbots</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" /> Mobile App Chatbots</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" /> FB Messenger Bots</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" /> Customer Service Reps</li>
                </ul>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-[#090d16] border border-slate-850 p-7 rounded-3xl space-y-5 relative">
              <div className="absolute top-4 right-4 p-2 bg-pink-950/40 rounded-xl text-pink-400">
                <Binary className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight pr-6">Machine Learning Development</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Transform historical database inputs into predictive regression matrices that compute resource and market needs for you.
              </p>
              <div className="border-t border-slate-850 pt-4 space-y-2">
                <span className="text-[10px] font-mono text-pink-400 font-bold uppercase tracking-widest block">Advanced Solutions</span>
                <ul className="grid grid-cols-2 gap-1.5 text-xs text-gray-300">
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-pink-400 shrink-0" /> Predictive Analytics</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-pink-400 shrink-0" /> Recommendation Engines</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-pink-400 shrink-0" /> User Behavior Analysis</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-pink-400 shrink-0" /> Demand Forecasting</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-pink-400 shrink-0" /> Fraud Detection Systems</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-pink-400 shrink-0" /> Risk Analysis Models</li>
                </ul>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-[#090d16] border border-slate-850 p-7 rounded-3xl space-y-5 relative">
              <div className="absolute top-4 right-4 p-2 bg-amber-950/40 rounded-xl text-amber-400">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight pr-6">Computer Vision Development</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Enable edge hardware cameras and web uploaders to run localized diagnostic, safety, or quality inspections for you.
              </p>
              <div className="border-t border-slate-850 pt-4 space-y-2">
                <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-widest block">Applications & Stack</span>
                <ul className="grid grid-cols-2 gap-1.5 text-xs text-gray-300">
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-amber-400 shrink-0" /> Object Detection</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-amber-400 shrink-0" /> Face Recognition</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-amber-400 shrink-0" /> Quality inspection</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-amber-400 shrink-0" /> Real-time Video Analysis</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-amber-400 shrink-0" /> Medical Imaging RAG</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-amber-400 shrink-0" /> Retail Analytics</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* ====================================
            4. INDUSTRIES WE SERVE
           ==================================== */}
        <section className="text-left space-y-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider bg-sky-950/30 px-3 py-1 rounded-full border border-sky-900/30">
              Target Verticals
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mt-3">
              Industries We Serve
            </h2>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
              We specialize in engineering robust solutions across diverse industrial domains with absolute regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Ind 1 */}
            <div className="bg-[#0b101c] border border-slate-850 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-red-950/30 border border-red-900/30 text-red-400 flex items-center justify-center">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Healthcare</h3>
              <ul className="space-y-1.5 text-[11px] text-gray-400">
                <li className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-red-400" /> Medical Data Analysis</li>
                <li className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-red-400" /> Patient Engagement</li>
                <li className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-red-400" /> Healthcare Automation</li>
                <li className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-red-400" /> Clinical Intelligence</li>
              </ul>
            </div>

            {/* Ind 2 */}
            <div className="bg-[#0b101c] border border-slate-850 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-950/30 border border-emerald-900/30 text-emerald-400 flex items-center justify-center">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Manufacturing</h3>
              <ul className="space-y-1.5 text-[11px] text-gray-400">
                <li className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-emerald-400" /> Predictive Maintenance</li>
                <li className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-emerald-400" /> Quality Control</li>
                <li className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-emerald-400" /> Smart Factories</li>
                <li className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-emerald-400" /> Industrial Analytics</li>
              </ul>
            </div>

            {/* Ind 3 */}
            <div className="bg-[#0b101c] border border-slate-850 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sky-950/30 border border-sky-900/30 text-sky-400 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Retail</h3>
              <ul className="space-y-1.5 text-[11px] text-gray-400">
                <li className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-sky-400" /> Recommendations</li>
                <li className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-sky-400" /> Inventory Optimization</li>
                <li className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-sky-400" /> Customer Analytics</li>
                <li className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-sky-400" /> Retail Automation</li>
              </ul>
            </div>

            {/* Ind 4 */}
            <div className="bg-[#0b101c] border border-slate-850 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-950/30 border border-purple-900/30 text-purple-400 flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Logistics</h3>
              <ul className="space-y-1.5 text-[11px] text-gray-400">
                <li className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-purple-400" /> Route Optimization</li>
                <li className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-purple-400" /> Fleet Monitoring</li>
                <li className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-purple-400" /> Demand Forecasting</li>
                <li className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-purple-400" /> Warehouse Automation</li>
              </ul>
            </div>

            {/* Ind 5 */}
            <div className="bg-[#0b101c] border border-slate-850 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-950/30 border border-amber-900/30 text-amber-400 flex items-center justify-center">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Fintech</h3>
              <ul className="space-y-1.5 text-[11px] text-gray-400">
                <li className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-amber-400" /> Fraud Detection</li>
                <li className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-amber-400" /> Credit Scoring</li>
                <li className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-amber-400" /> Risk Management</li>
                <li className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-amber-400" /> Financial Forecasting</li>
              </ul>
            </div>

          </div>
        </section>

        {/* ====================================
            5. TECHNOLOGIES COCKPIT GRID
           ==================================== */}
        <section className="text-left space-y-10 bg-[#090d19]/40 border border-slate-850 p-8 sm:p-12 rounded-3xl relative">
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
          
          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider bg-sky-950/30 px-3 py-1 rounded-full border border-sky-900/30">
              Modern Stack
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-4 tracking-tight">
              AI Technologies We Work With
            </h2>
            <p className="text-gray-400 my-3 text-xs sm:text-sm leading-relaxed">
              We leverage production-grade platforms and open-source models to ensure extreme execution and avoid vendor lock-ins.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 pt-4">
            {techStack.map((stack, sIdx) => (
              <div key={sIdx} className="bg-[#05080f] border border-slate-850/80 p-5 rounded-2xl">
                <h3 className="text-xs font-mono text-sky-400 font-black uppercase tracking-widest border-b border-slate-850 pb-2 mb-3">
                  {stack.category}
                </h3>
                <ul className="space-y-2">
                  {stack.items.map((item, iIdx) => (
                    <li key={iIdx} className="text-xs font-medium text-gray-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-sky-400 rounded-full shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ====================================
            6. OUR DEVELOPMENT METHODOLOGY PROCESS
           ==================================== */}
        <section className="text-left space-y-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider bg-sky-950/30 px-3 py-1 rounded-full border border-sky-900/30">
              Implementation Timeline
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-3 tracking-tight">
              Our AI Development Process
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mt-1">
              Rigorous blueprint sprints that translate raw models and data requirements into deployed business frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {[
              { id: '1', name: 'Discovery', desc: 'Understanding your business goals and locating automation/AI integration targets.' },
              { id: '2', name: 'Strategy', desc: 'Selecting appropriate AI technologies, training workflows, and cluster architecture.' },
              { id: '3', name: 'Development', desc: 'Building secure custom AI models, custom pipelines, responsive controls, and secure backends.' },
              { id: '4', name: 'Integration', desc: 'Connecting your custom intelligence endpoints directly with pre-existing ERP and API vectors.' },
              { id: '5', name: 'Testing', desc: 'Running strict schema accuracy audits, token leak reviews, load limits, and validation steps.' },
              { id: '6', name: 'Deployment', desc: 'Launching operational service links, setting auto-scale clouds, and providing post-launch support.' }
            ].map((step, idx) => (
              <div key={idx} className="bg-[#0b101c]/50 border border-slate-850 p-5 rounded-2xl relative">
                <div className="absolute top-4 right-4 text-xs font-mono text-slate-700 font-bold">0{step.id}</div>
                <h3 className="text-sm font-extrabold text-white mt-4">{step.name}</h3>
                <p className="text-[11px] text-gray-400 mt-2 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ====================================
            7. WHY CHOOSE RANDOM SCRIPT TECHNOLOGIES
           ==================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
          <div className="space-y-6">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider bg-sky-950/30 px-3 py-1 rounded-full border border-sky-900/30">
              The Engineering Edge
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
              Why Choose Random Script Technologies?
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              We do not larp with fake metrics or deliver low-quality generic templates. Our engineering division operates with elite precision, providing transparent access credentials and robust technical frameworks.
            </p>
            
            <div className="space-y-4">
              {[
                { label: 'AI-Focused Engineering Team', desc: 'Dedicated AI developers, data scientists, and solution architects with production backgrounds.' },
                { label: 'Custom AI Solutions', desc: 'Tailored systems designed from the ground up to solve your precise operational bottlenecks.' },
                { label: 'End-to-End Development', desc: 'We take ownership of every stage: from initial strategy blueprints to long-term post-launch SLA.' },
                { label: 'Security & Compliance', desc: 'Enterprise-grade encryption, zero data retention pipelines, and sandboxed internal clusters.' },
                { label: 'Scalable Architecture', desc: 'Kubernetes-orchestrated backplanes ready to auto-scale dynamically for massive concurrent traffic.' }
              ].map((val, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-950 border border-sky-900 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[9px] font-mono">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-white">{val.label}</h4>
                    <p className="text-xs text-gray-400 leading-normal mt-0.5">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0b101c] border border-slate-850 p-6 sm:p-8 rounded-3xl space-y-6">
            <h3 className="text-base font-bold text-white tracking-tight">Active Client Integration Metrics</h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-900">
                <span className="text-[10px] font-mono text-gray-500 uppercase">Mean Answer Latency</span>
                <div className="text-2xl font-black text-emerald-400 mt-1 font-mono">~320ms</div>
              </div>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-900">
                <span className="text-[10px] font-mono text-gray-500 uppercase">Context Precision Accuracy</span>
                <div className="text-2xl font-black text-sky-400 mt-1 font-mono">98.4%</div>
              </div>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-900">
                <span className="text-[10px] font-mono text-gray-500 uppercase">Client Cloud Computing Savings</span>
                <div className="text-2xl font-black text-purple-400 mt-1 font-mono">42% average</div>
              </div>
            </div>
            <p className="text-[10px] text-gray-500 font-mono text-center">NDA ACCESS CONTROL CERTIFIED • VERIFIED REPOSITORIES</p>
          </div>
        </section>

        {/* ====================================
            8. RELATED SERVICES (INTERNAL LINKING)
           ==================================== */}
        <section className="bg-slate-950/40 border border-slate-850 p-6 sm:p-9 rounded-3xl text-left space-y-5">
          <h3 className="text-xs font-mono text-sky-400 font-extrabold uppercase tracking-widest">
            Related AI & Engineering Services
          </h3>
          <p className="text-xs text-gray-400">
            Explore our complementary engineering frameworks to align your full system stack:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5">
            {[
              'Generative AI Development Company',
              'AI Agent Development Company',
              'AI Chatbot Development Company',
              'Machine Learning Development Company',
              'Computer Vision Development Company',
              'Custom Software Development Company',
              'SaaS Development Company',
              'IoT Development Company',
              'Cloud Consulting Services',
              'Digital Transformation Services'
            ].map((rel, idx) => (
              <button 
                key={idx}
                onClick={onBackToHome}
                className="p-3 bg-[#0b101c]/60 border border-slate-850 hover:border-sky-500 text-left rounded-xl transition cursor-pointer"
              >
                <div className="text-[11px] font-semibold text-gray-300 hover:text-white leading-tight">
                  {rel}
                </div>
                <span className="text-[9px] text-sky-400 font-mono flex items-center gap-0.5 mt-2">
                  View Service <ChevronRight className="w-2.5 h-2.5" />
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* ====================================
            9. FAQ ACCORDION SECTION
           ==================================== */}
        <section className="text-left space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider bg-sky-950/30 px-3 py-1 rounded-full border border-sky-900/30">
              Intelligence Brief
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm">
              Answers to technical queries regarding implementation budgets and software structures.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-[#0b101c] border border-slate-850 rounded-2xl overflow-hidden transition duration-150"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between text-sm font-extrabold text-white focus:outline-none cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronDown className="w-4 h-4 text-sky-400" /> : <ChevronRight className="w-4 h-4 text-gray-500" />}
                  </button>
                  
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-gray-400 leading-relaxed border-t border-slate-850 pt-3 animate-in fade-in duration-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}
