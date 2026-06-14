import React, { useState } from 'react';
import { Lead } from '../types';
import { 
  Send, 
  MapPin, 
  Mail, 
  PhoneCall, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
  Award
} from 'lucide-react';

interface ContactSectionProps {
  onLeadCaptured: () => void;
}

export default function ContactSection({ onLeadCaptured }: ContactSectionProps) {
  // Form parameters state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [projectType, setProjectType] = useState('AI Software Consulting');
  
  // Custom checklist requested
  const [selectedServices, setSelectedServices] = useState<string[]>(['Free Consultation']);
  const [submitted, setSubmitted] = useState(false);

  const checklistOptions = [
    'Free Consultation',
    'Project Discovery Session',
    'AI Readiness Assessment',
    'Software Audit',
    'Custom Proposal'
  ];

  const toggleChecklist = (option: string) => {
    if (selectedServices.includes(option)) {
      setSelectedServices(selectedServices.filter(s => s !== option));
    } else {
      setSelectedServices([...selectedServices, option]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !company) return;

    const newLead: Lead = {
      id: `lead-direct-${Date.now()}`,
      name: name,
      email: email,
      phone: phone || 'No Phone provided',
      companyName: company,
      projectType: projectType,
      budget: 'Undisclosed / Custom Proposal',
      timeframe: 'Standard Agile Delivery',
      customNeeds: selectedServices,
      message: message,
      source: 'direct_form',
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

    // Reset fields
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setMessage('');
    
    setTimeout(() => {
      setSubmitted(false);
    }, 4500);
  };

  return (
    <section id="consultation-panel" className="py-24 relative overflow-hidden bg-slate-900/10 border-t border-gray-900">
      
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Info and credentials */}
          <div className="lg:col-span-5 text-left space-y-6">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider bg-sky-950/30 px-3 py-1 rounded-full border border-sky-900/30 w-fit block">
              Contact Enterprise Desk
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Build the Future?
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed">
              Whether you are looking to train custom AI, develop scalable enterprise software, launch an innovative mobile app, or modernize your business operations, Random Script Technologies is here to help.
            </p>

            <div className="p-5 bg-[#090d19] border border-gray-850 rounded-2xl space-y-4">
              <h3 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider block">
                Corporate Headquarters & Access
              </h3>
              
              <div className="space-y-3.5">
                <div className="flex items-center space-x-3 text-xs text-gray-300">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>100 Innovation Way, Suite 400, Silicon Valley, CA</span>
                </div>
                <div className="flex items-center space-x-3 text-xs text-gray-300">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <a href="mailto:info@randomscripttech.com" className="hover:underline">info@randomscripttech.com</a>
                </div>
                <div className="flex items-center space-x-3 text-xs text-gray-300">
                  <PhoneCall className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>+1-800-555-0199</span>
                </div>
              </div>
            </div>

            {/* Quality seals */}
            <div className="flex items-center gap-4 text-xs text-gray-450 font-mono">
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>NDA Protected</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Certified Developers</span>
              </div>
            </div>
          </div>

          {/* Right Block: Lead captures coordinates form & checklist */}
          <div className="lg:col-span-7 bg-[#0b101c] border border-gray-850 rounded-3xl p-6 sm:p-9 text-left relative overflow-hidden shadow-2xl">
            
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-indigo-600" />

            <div className="space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Start Your Digital Transformation Journey Today
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Check appropriate parameters below and log your interest instantly.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-emerald-950/20 border border-emerald-900/50 rounded-2xl text-center space-y-3 animate-in zoom-in duration-250">
                  <span className="inline-flex w-12 h-12 bg-emerald-950/40 text-emerald-400 rounded-full items-center justify-center border border-emerald-850">
                    <CheckCircle2 className="w-6 h-6 stroke-[3]" />
                  </span>
                  <h4 className="text-base font-bold text-white font-mono">SUBMISSION RECEIVED SUCCESSFULLY</h4>
                  <p className="text-xs text-gray-350 max-w-sm mx-auto leading-relaxed">
                    Thank you. We have dispatched your files directly to our principal solutions engineer. You can see your submissions logged under the "Lead Portal" top-menu button.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  
                  {/* Checklist toggles */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-gray-500 uppercase font-black block tracking-widest">
                      Select campaign milestones:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {checklistOptions.map((opt, idx) => {
                        const active = selectedServices.includes(opt);
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => toggleChecklist(opt)}
                            className={`px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-tight transition ${
                              active
                                ? 'bg-sky-950/40 border-sky-500 text-sky-400'
                                : 'bg-slate-900/40 border-gray-850 text-gray-400 hover:text-white'
                            }`}
                          >
                            {opt} {active ? '✓' : '+'}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Form fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono text-gray-500 uppercase font-bold block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Doe"
                        className="w-full bg-slate-950/50 border border-gray-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-sky-500 transition"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-gray-500 uppercase font-bold block mb-1">
                        Organization Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Enterprise Corp"
                        className="w-full bg-slate-950/50 border border-gray-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-sky-500 transition"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-gray-500 uppercase font-bold block mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane@organization.com"
                        className="w-full bg-slate-950/50 border border-gray-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-sky-500 transition"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-gray-500 uppercase font-bold block mb-1">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1-555-0155"
                        className="w-full bg-slate-950/50 border border-gray-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-sky-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-gray-500 uppercase font-bold block mb-1">
                      Focus Area Focus
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full bg-slate-950/50 border border-gray-800 rounded-xl px-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-sky-500 transition"
                    >
                      <option value="AI Software Consulting">AI Strategy & Development</option>
                      <option value="Custom AI Agent Systems">Autonomous AI Agents Systems</option>
                      <option value="Enterprise Systems CRM/ERP">Custom Enterprise ERP / Softwares</option>
                      <option value="SaaS Platform Engineering">SaaS Products & Subscriptions</option>
                      <option value="Mobile/Web Applications">Scalable mobile app or web portal</option>
                      <option value="Embedded IoT Integration">Telemetry & Smart Hardware</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-gray-500 uppercase font-bold block mb-1">
                      Briefly describe scope parameters
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Specify your software specifications, database systems, or desired timelines..."
                      className="w-full bg-slate-950/50 border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold rounded-xl text-sm transition flex items-center justify-center gap-1.5 shadow-md shadow-sky-500/10 cursor-pointer"
                  >
                    Send Information Request <Send className="w-3.5 h-3.5" />
                  </button>

                  <p className="text-[10.5px] text-gray-500 text-center uppercase tracking-tight font-mono leading-none_">
                    Book Your Free Consultation Today • 2-Hour SLA Review Guarantee
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
