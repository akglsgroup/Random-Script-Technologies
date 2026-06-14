import React, { useState, useEffect } from 'react';
import { Lead } from '../types';
import { 
  Users, 
  MessageSquare, 
  Calculator, 
  CheckCircle, 
  Trash2, 
  Search, 
  Briefcase, 
  DollarSign, 
  Clock, 
  X,
  FileSpreadsheet
} from 'lucide-react';

interface LeadPortalProps {
  isOpen: boolean;
  onClose: () => void;
  onLeadUpdate?: () => void;
}

export default function LeadPortal({ isOpen, onClose, onLeadUpdate }: LeadPortalProps) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  useEffect(() => {
    if (isOpen) {
      loadLeads();
    }
  }, [isOpen]);

  const loadLeads = () => {
    const stored = localStorage.getItem('rst_leads');
    if (stored) {
      try {
        setLeads(JSON.parse(stored));
      } catch (e) {
        console.error('Error loading leads', e);
      }
    }
  };

  const updateLeadStatus = (leadId: string, newStatus: 'new' | 'contacted' | 'proposal_sent') => {
    const updated = leads.map(l => l.id === leadId ? { ...l, status: newStatus } : l);
    localStorage.setItem('rst_leads', JSON.stringify(updated));
    setLeads(updated);
    if (selectedLead && selectedLead.id === leadId) {
      setSelectedLead({ ...selectedLead, status: newStatus });
    }
    if (onLeadUpdate) onLeadUpdate();
  };

  const deleteLead = (leadId: string) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      const updated = leads.filter(l => l.id !== leadId);
      localStorage.setItem('rst_leads', JSON.stringify(updated));
      setLeads(updated);
      setSelectedLead(null);
      if (onLeadUpdate) onLeadUpdate();
    }
  };

  const clearAllLeads = () => {
    if (window.confirm('Careful: This will reset the system and clear all submitted leads. Proceed?')) {
      localStorage.removeItem('rst_leads');
      setLeads([]);
      setSelectedLead(null);
      if (onLeadUpdate) onLeadUpdate();
    }
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (lead.projectType || '').toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = filterType === 'all' || lead.source === filterType;

    return matchesSearch && matchesType;
  });

  if (!isOpen) return null;

  // Analysis variables
  const countDirect = leads.filter(l => l.source === 'direct_form').length;
  const countChat = leads.filter(l => l.source === 'chatbot').length;
  const countProposal = leads.filter(l => l.source === 'proposal_builder').length;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0f172a] border border-gray-800 rounded-2xl w-full max-w-6xl h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-250">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-800 flex items-center justify-between bg-slate-950/40">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <h2 className="text-xl font-bold text-white font-mono tracking-tight flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-emerald-500" />
                CONVERSION CONTROL CENTRE & LEAD PORTAL
              </h2>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Verify conversion paths and lead captures. All mock submissions persist locally on this browser.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-800 bg-slate-900/60 p-4 gap-4">
          <div className="bg-slate-950/50 p-4 rounded-xl border border-gray-800/60">
            <div className="text-xs text-gray-400 font-mono flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-sky-400" /> TOTAL SUBMISSIONS
            </div>
            <div className="text-2xl font-extrabold text-white mt-1">{leads.length}</div>
          </div>
          <div className="bg-slate-950/50 p-4 rounded-xl border border-gray-800/60">
            <div className="text-xs text-gray-400 font-mono flex items-center gap-1">
              <Briefcase className="w-3.5 h-3.5 text-purple-400" /> DIRECT FORM SUBMISSIONS
            </div>
            <div className="text-2xl font-extrabold text-white mt-1">{countDirect}</div>
          </div>
          <div className="bg-slate-950/50 p-4 rounded-xl border border-gray-800/60">
            <div className="text-xs text-gray-400 font-mono flex items-center gap-1">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" /> AI EXPERT CHATBOT
            </div>
            <div className="text-2xl font-extrabold text-white mt-1">{countChat}</div>
          </div>
          <div className="bg-slate-950/50 p-4 rounded-xl border border-gray-800/60">
            <div className="text-xs text-gray-400 font-mono flex items-center gap-1">
              <Calculator className="w-3.5 h-3.5 text-amber-400" /> PROPOSAL ESTIMATORS
            </div>
            <div className="text-2xl font-extrabold text-white mt-1">{countProposal}</div>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Column: Leads List */}
          <div className="w-full md:w-1/2 border-r border-gray-800 flex flex-col bg-slate-950/20 overflow-y-auto">
            {/* Filter toolbar */}
            <div className="p-4 bg-slate-950/30 border-b border-gray-850 flex flex-col sm:flex-row gap-2 sticky top-0 z-10 backdrop-blur">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search lead, company or topic..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-1.5 bg-slate-900 border border-gray-800 rounded-lg text-sm text-white focus:outline-none focus:border-sky-500 transition"
                />
              </div>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="bg-slate-900 border border-gray-800 rounded-lg text-sm text-gray-300 py-1.5 px-3 focus:outline-none focus:border-sky-500"
              >
                <option value="all">All Sources</option>
                <option value="direct_form">Direct Form</option>
                <option value="chatbot">AI Expert Chatbot</option>
                <option value="proposal_builder">Proposal Builder</option>
              </select>
              {leads.length > 0 && (
                <button
                  onClick={clearAllLeads}
                  className="px-2 py-1 bg-red-950/30 text-red-400 border border-red-900/30 rounded-lg hover:bg-red-950/60 text-xs font-mono transition"
                >
                  Reset
                </button>
              )}
            </div>

            {/* List */}
            <div className="flex-1 p-4 space-y-3">
              {filteredLeads.length === 0 ? (
                <div className="text-center py-12">
                  <Briefcase className="w-12 h-12 text-gray-600 mx-auto opacity-40 mb-3" />
                  <p className="text-gray-400 font-medium">No conversion submissions found</p>
                  <p className="text-xs text-gray-600 mt-1 max-w-xs mx-auto">
                    Try submitting a project proposal or chatting with the AI expert on the page first!
                  </p>
                </div>
              ) : (
                filteredLeads.map((lead) => (
                  <div
                    key={lead.id}
                    onClick={() => setSelectedLead(lead)}
                    className={`p-4 rounded-xl border transition cursor-pointer text-left ${
                      selectedLead?.id === lead.id
                        ? 'bg-[#1e293b]/50 border-sky-500/80 shadow-md shadow-sky-500/5'
                        : 'bg-slate-900/40 border-gray-850 hover:bg-slate-900/80 hover:border-gray-700'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-white text-sm">{lead.name}</h4>
                          <span className={`px-2 py-0.5 text-[10px] font-mono rounded-full border ${
                            lead.source === 'direct_form'
                              ? 'bg-purple-950/40 text-purple-400 border-purple-900/40'
                              : lead.source === 'chatbot'
                              ? 'bg-emerald-950/40 text-emerald-400 border-emerald-900/40'
                              : 'bg-amber-950/40 text-amber-300 border-amber-900/40'
                          }`}>
                            {lead.source.replace('_', ' ')}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">{lead.companyName}</p>
                      </div>
                      <span className={`px-2 py-0.5 text-[10px] font-mono rounded ${
                        lead.status === 'new'
                          ? 'bg-rose-950/30 text-rose-400 border border-rose-900/30'
                          : lead.status === 'contacted'
                          ? 'bg-sky-950/30 text-sky-400 border border-sky-900/30'
                          : 'bg-emerald-950/30 text-emerald-400 border border-emerald-900/30'
                      }`}>
                        {lead.status.toUpperCase()}
                      </span>
                    </div>

                    <div className="mt-3 pt-3 border-t border-gray-800/50 flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center gap-1 text-[11px] font-mono">
                        <DollarSign className="w-3.5 h-3.5 text-emerald-500" />
                        Budget: <strong className="text-gray-300">{lead.budget}</strong>
                      </span>
                      <span className="flex items-center gap-1 font-mono text-[10px]">
                        <Clock className="w-3 h-3 text-gray-400" />
                        {new Date(lead.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right Column: Lead Detail View */}
          <div className="w-full md:w-1/2 bg-slate-900/20 p-6 overflow-y-auto flex flex-col justify-between">
            {selectedLead ? (
              <div className="space-y-6 text-left">
                {/* Header */}
                <div className="flex justify-between items-start border-b border-gray-800 pb-5">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider block uppercase mb-1">
                      Lead Case Information
                    </span>
                    <h3 className="text-xl font-bold text-white">{selectedLead.name}</h3>
                    <p className="text-sm text-gray-400 mt-1">{selectedLead.companyName}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => deleteLead(selectedLead.id)}
                      className="p-2 bg-red-950/30 text-red-400 border border-red-900/40 rounded-lg hover:bg-red-950/65 hover:text-red-300 transition"
                      title="Delete Lead"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Details Section */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-950/40 p-3.5 rounded-xl border border-gray-850">
                    <span className="text-[10px] text-gray-500 font-mono uppercase block">Email Address</span>
                    <a href={`mailto:${selectedLead.email}`} className="text-sm text-white font-medium hover:underline block mt-0.5 break-all">
                      {selectedLead.email}
                    </a>
                  </div>
                  <div className="bg-slate-950/40 p-3.5 rounded-xl border border-gray-850">
                    <span className="text-[10px] text-gray-500 font-mono uppercase block">Phone Number</span>
                    <span className="text-sm text-white font-medium block mt-0.5">
                      {selectedLead.phone || 'Not Provided'}
                    </span>
                  </div>
                  <div className="bg-slate-950/40 p-3.5 rounded-xl border border-gray-850">
                    <span className="text-[10px] text-gray-500 font-mono uppercase block">Budget Segment</span>
                    <span className="text-sm text-emerald-400 font-bold block mt-0.5">
                      {selectedLead.budget}
                    </span>
                  </div>
                  <div className="bg-slate-950/40 p-3.5 rounded-xl border border-gray-850">
                    <span className="text-[10px] text-gray-500 font-mono uppercase block">Execution Timeframe</span>
                    <span className="text-sm text-amber-400 font-medium block mt-0.5">
                      {selectedLead.timeframe}
                    </span>
                  </div>
                </div>

                <div className="bg-slate-950/40 p-4 rounded-xl border border-gray-850">
                  <span className="text-[10px] text-gray-500 font-mono uppercase block mb-1">Target Project Type / services</span>
                  <span className="text-sm text-white font-semibold flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-sky-400" /> {selectedLead.projectType || 'Custom Consulting'}
                  </span>
                </div>

                {selectedLead.customNeeds && selectedLead.customNeeds.length > 0 && (
                  <div className="bg-slate-950/40 p-4 rounded-xl border border-gray-850">
                    <span className="text-[10px] text-gray-500 font-mono uppercase block mb-2">Requested Capabilities</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedLead.customNeeds.map((need, idx) => (
                        <span key={idx} className="bg-sky-950/20 text-sky-400 border border-sky-900/30 rounded-lg px-2 py-0.5 text-xs font-medium">
                          {need}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedLead.message && (
                  <div className="bg-slate-950/40 p-4 rounded-xl border border-gray-850">
                    <span className="text-[10px] text-gray-500 font-mono uppercase block mb-1">Client Consultation Notes</span>
                    <p className="text-sm text-gray-300 leading-relaxed font-sans italic whitespace-pre-wrap">
                      "{selectedLead.message}"
                    </p>
                  </div>
                )}

                <div className="border-t border-gray-850 pt-5">
                  <span className="text-[10px] text-gray-500 font-mono uppercase block mb-3">Update Client Status</span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => updateLeadStatus(selectedLead.id, 'new')}
                      className={`flex-1 min-w-[100px] py-1.5 rounded-lg border text-xs font-semibold font-mono transition ${
                        selectedLead.status === 'new'
                          ? 'bg-rose-950/40 text-rose-400 border-rose-500/60'
                          : 'bg-slate-900 border-gray-800 text-gray-400 hover:text-white'
                      }`}
                    >
                      New Lead
                    </button>
                    <button
                      onClick={() => updateLeadStatus(selectedLead.id, 'contacted')}
                      className={`flex-1 min-w-[100px] py-1.5 rounded-lg border text-xs font-semibold font-mono transition ${
                        selectedLead.status === 'contacted'
                          ? 'bg-sky-950/40 text-sky-400 border-sky-500/60'
                          : 'bg-slate-900 border-gray-800 text-gray-400 hover:text-white'
                      }`}
                    >
                      In Contact
                    </button>
                    <button
                      onClick={() => updateLeadStatus(selectedLead.id, 'proposal_sent')}
                      className={`flex-1 min-w-[100px] py-1.5 rounded-lg border text-xs font-semibold font-mono transition ${
                        selectedLead.status === 'proposal_sent'
                          ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/60'
                          : 'bg-slate-900 border-gray-800 text-gray-400 hover:text-white'
                      }`}
                    >
                      Proposal Sent
                    </button>
                  </div>
                </div>

                <div className="text-[10px] text-gray-500 pt-2 border-t border-gray-850 flex justify-between font-mono">
                  <span>Record ID: {selectedLead.id.substring(0, 12)}</span>
                  <span>Submitted: {new Date(selectedLead.createdAt).toLocaleString()}</span>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center py-16 text-center text-gray-500">
                <CheckCircle className="w-16 h-16 text-gray-700 mb-3 animate-pulse" />
                <p className="font-semibold text-gray-400">Select a submission from the list</p>
                <p className="text-xs text-gray-655 max-w-sm mt-1">
                  You can inspect full details, send test responses, delete, or shift statuses of the leads generated inside the application!
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
