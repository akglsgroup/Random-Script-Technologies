import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage, Lead } from '../types';
import { Bot, User, Send, X, Check, Laptop, Sparkles, AlertCircle } from 'lucide-react';

interface AIChatExpertProps {
  isOpen: boolean;
  onClose: () => void;
  onLeadCaptured: () => void;
}

interface UserFlowState {
  step: 'intro' | 'project_type' | 'custom_needs' | 'name_company' | 'email_phone' | 'budget_time' | 'complete';
  projectType: string;
  customNeeds: string[];
  clientName: string;
  companyName: string;
  email: string;
  phone: string;
  budget: string;
  timeframe: string;
}

export default function AIChatExpert({ isOpen, onClose, onLeadCaptured }: AIChatExpertProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [flowState, setFlowState] = useState<UserFlowState>({
    step: 'intro',
    projectType: '',
    customNeeds: [],
    clientName: '',
    companyName: '',
    email: '',
    phone: '',
    budget: '',
    timeframe: '',
  });

  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initialize with welcoming message
      setMessages([
        {
          id: 'msg-1',
          sender: 'ai',
          text: 'Hello there! I am Ada, your AI Enterprise Advisor at Random Script Technologies. How can I help translate your business vision into intelligent code today? Let us find the perfect match for your needs.',
          createdAt: new Date().toISOString(),
        }
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    // Scroll chat to bottom on new message
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addMessage = (sender: 'ai' | 'user', text: string) => {
    const newMessage: ChatMessage = {
      id: `msg-${Date.now()}-${Math.random()}`,
      sender,
      text,
      createdAt: new Date().toISOString()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleOptionSelect = (option: string, value: string, nextStepAction?: () => void) => {
    // Add user response visually
    addMessage('user', option);

    // Update state based on current step
    if (flowState.step === 'intro') {
      const updatedState = {
        ...flowState,
        step: 'project_type' as const,
        projectType: value,
      };
      setFlowState(updatedState);
      
      setTimeout(() => {
        addMessage('ai', `Superb choice! Automating and engineering ${value} systems is one of our primary core competencies. What key capabilities are we aiming to bring in? (You can select multiple, then write 'Done')`);
      }, 700);
    }
  };

  const handleMultipleSelect = (need: string) => {
    const exists = flowState.customNeeds.includes(need);
    let updated: string[];
    if (exists) {
      updated = flowState.customNeeds.filter(n => n !== need);
    } else {
      updated = [...flowState.customNeeds, need];
    }
    setFlowState(prev => ({
      ...prev,
      customNeeds: updated
    }));
  };

  const submitCustomNeeds = () => {
    if (flowState.customNeeds.length === 0) {
      addMessage('ai', 'Please select at least one capability to proceed, or let us know what you want to build!');
      return;
    }

    addMessage('user', `Capabilities: ${flowState.customNeeds.join(', ')}`);
    setFlowState(prev => ({
      ...prev,
      step: 'name_company' as const
    }));

    setTimeout(() => {
      addMessage('ai', 'Perfect! May I have your name and the company or organization you represent? E.g., \"Jane Doe - Enterprise AI Corp\"');
    }, 700);
  };

  const handleSubmitInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    addMessage('user', userText);
    setInputValue('');

    if (flowState.step === 'intro') {
      // User typed instead of clicking
      setFlowState(prev => ({
        ...prev,
        step: 'project_type' as const,
        projectType: userText
      }));
      setTimeout(() => {
        addMessage('ai', `I appreciate that overview. To help narrow down, what specific features are key to this project?`);
      }, 700);
    } 
    else if (flowState.step === 'name_company') {
      const parts = userText.split(/[\\-|–]/);
      const clientName = parts[0]?.trim() || userText;
      const companyName = parts[1]?.trim() || 'Undisclosed Ventures';
      
      setFlowState(prev => ({
        ...prev,
        step: 'email_phone' as const,
        clientName,
        companyName
      }));

      setTimeout(() => {
        addMessage('ai', `Nice to connect, ${clientName}! What is your corporate email address (and optionally a contact phone) so our architects can draft your blueprint?`);
      }, 700);
    } 
    else if (flowState.step === 'email_phone') {
      // Basic extraction
      const emailRegex = /[\w.-]+@[\w-]+\.[\w.]+/;
      const foundEmail = userText.match(emailRegex);
      const email = foundEmail ? foundEmail[0] : userText;
      // Phone is remainder
      const phone = userText.replace(email, '').replace(/[^0-9+()-\s]/g, '').trim();

      setFlowState(prev => ({
        ...prev,
        step: 'budget_time' as const,
        email,
        phone: phone || 'Web Chat submission'
      }));

      setTimeout(() => {
        addMessage('ai', `Excellent. Lastly, what budget scale and speed are we aiming for? Select an approximate budget bracket below to schedule our lead engineer.`);
      }, 700);
    }
    else {
      // General chatting fallback
      setTimeout(() => {
        addMessage('ai', "I have recorded our full exchange. Select an option below to proceed with your discovery process.");
      }, 700);
    }
  };

  const handleBudgetSelect = (budget: string, timeline: string) => {
    addMessage('user', `Budget: ${budget} | Timeline: ${timeline}`);
    
    // Complete and save lead
    const finalState = {
      ...flowState,
      step: 'complete' as const,
      budget,
      timeframe: timeline
    };
    setFlowState(finalState);

    const newLead: Lead = {
      id: `lead-${Date.now()}`,
      name: finalState.clientName || 'AI Chat Guest',
      email: finalState.email || 'pending@chat.com',
      phone: finalState.phone,
      companyName: finalState.companyName || 'Interactive Consult Web',
      projectType: finalState.projectType || 'AI Software Discovery',
      budget: budget,
      timeframe: timeline,
      customNeeds: finalState.customNeeds,
      source: 'chatbot',
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

    setTimeout(() => {
      addMessage('ai', `Success! I have securely recorded all parameters and queued your inquiry in our central engineering workspace. \n\n🚀 Next Steps: Our Principal Architect will review your files and email you at ${finalState.email} with an initial concept. Thank you for choosing Random Script Technologies!`);
      // Trigger update
      onLeadCaptured();
    }, 700);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] bg-[#0b0f19] border-l border-gray-800 flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
      
      {/* Bot Header */}
      <div className="p-5 border-b border-gray-850 bg-slate-950/80 flex items-center justify-between">
        <div className="flex items-center space-x-3.5">
          <div className="w-10 h-10 rounded-full bg-linear-to-tr from-sky-500 to-indigo-600 flex items-center justify-center relative">
            <Bot className="w-5.5 h-5.5 text-white animate-bounce-short" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#090d16]" />
          </div>
          <div>
            <h3 className="font-semibold text-white text-sm tracking-tight flex items-center gap-1.5 font-mono">
              ADA <Sparkles className="w-3.5 h-3.5 text-sky-400 mt-0.5" />
            </h3>
            <span className="text-[10px] text-emerald-400 font-medium tracking-wide block">
              AI SOLUTIONS ARCHITECT (ONLINE)
            </span>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
              msg.sender === 'user' 
                ? 'bg-sky-950/60 border border-sky-800 text-sky-400' 
                : 'bg-slate-900 border border-gray-800 text-slate-300'
            }`}>
              {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>
            
            <div className={`p-4 rounded-2xl max-w-[80%] text-sm leading-relaxed ${
              msg.sender === 'user'
                ? 'bg-sky-600/90 text-white font-medium rounded-tr-none'
                : 'bg-slate-900/60 text-gray-200 border border-gray-850 rounded-tl-none whitespace-pre-wrap'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        
        {/* Dynamic Context Buttons depending on user's current dialogue flow */}
        {flowState.step === 'intro' && (
          <div className="pl-11 pr-4 space-y-2 pt-2 text-left">
            <span className="text-[10px] uppercase font-mono text-gray-500 font-bold block mb-1">
              Select target project type
            </span>
            <div className="grid grid-cols-1 gap-2">
              <button 
                onClick={() => handleOptionSelect('Autonomous AI Agent Development', 'AI Agent Systems')}
                className="w-full text-left py-2 px-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-gray-800 text-gray-300 hover:text-white text-xs font-semibold transition"
              >
                🤖 Autonomous AI Agent Systems
              </button>
              <button 
                onClick={() => handleOptionSelect('Generative AI & LLM integration', 'Generative AI')}
                className="w-full text-left py-2 px-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-gray-800 text-gray-300 hover:text-white text-xs font-semibold transition"
              >
                🧠 Generative AI & Model Finetuning
              </button>
              <button 
                onClick={() => handleOptionSelect('Enterprise Software Solutions', 'Corporate custom systems')}
                className="w-full text-left py-2 px-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-gray-800 text-gray-300 hover:text-white text-xs font-semibold transition"
              >
                🏢 Custom Enterprise ERP / CRM Platforms
              </button>
              <button 
                onClick={() => handleOptionSelect('SaaS Web/Mobile Product engineering', 'SaaS applications')}
                className="w-full text-left py-2 px-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-gray-800 text-gray-300 hover:text-white text-xs font-semibold transition"
              >
                🚀 Scalable Web, Mobile or SaaS Product
              </button>
            </div>
          </div>
        )}

        {flowState.step === 'project_type' && (
          <div className="pl-11 pr-4 space-y-3 pt-2 text-left animate-in fade-in slide-in-from-bottom-2 duration-200">
            <span className="text-[10px] uppercase font-mono text-gray-550 font-bold block mb-1">
              Check key capabilities:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                'Enterprise Dashboard', 'WhatsApp Integration', 'Predictive Intelligence', 
                'API Gateways', 'Stripe Subscriptions', 'Autonomous Action Workflows', 
                'Embedded IoT firmware', 'Cloud High Availability', 'Legacy DB Migration'
              ].map((need, idx) => {
                const selected = flowState.customNeeds.includes(need);
                return (
                  <button
                    key={idx}
                    onClick={() => handleMultipleSelect(need)}
                    className={`px-3 py-1.5 text-xs rounded-lg transition border ${
                      selected 
                        ? 'bg-sky-950/50 border-sky-500 text-sky-400 font-semibold' 
                        : 'bg-slate-900 border-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    {need} {selected && <Check className="w-3 h-3 inline-block ml-0.5" />}
                  </button>
                );
              })}
            </div>
            <button
              onClick={submitCustomNeeds}
              className="w-full py-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 mt-3 shadow-md"
            >
              Confirm and Continue <Check className="w-4 h-4" />
            </button>
          </div>
        )}

        {flowState.step === 'budget_time' && (
          <div className="pl-11 pr-4 space-y-2 pt-2 text-left animate-in fade-in slide-in-from-bottom-2 duration-200">
            <span className="text-[10px] uppercase font-mono text-gray-500 font-bold block mb-1">
              Select budget & timeline:
            </span>
            <div className="grid grid-cols-1 gap-2">
              <button 
                onClick={() => handleBudgetSelect('$10,000 - $25,000', '1-2 Months (MVP Speed)')}
                className="w-full text-left p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-gray-800 hover:border-gray-700 transition"
              >
                <div className="text-xs font-bold text-white">$10K - $25K</div>
                <div className="text-[10px] text-gray-400 font-mono mt-0.5">Rapid MVP Delivery within 4-6 weeks</div>
              </button>
              <button 
                onClick={() => handleBudgetSelect('$25,000 - $75,000', '2-4 Months (Strategic Grow)')}
                className="w-full text-left p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-gray-800 hover:border-gray-700 transition"
              >
                <div className="text-xs font-bold text-sky-400">$25K - $75K</div>
                <div className="text-[10px] text-gray-400 font-mono mt-0.5">Comprehensive solution layout & integrations</div>
              </button>
              <button 
                onClick={() => handleBudgetSelect('$75,000+', '4-6 Months (Enterprise Scale)')}
                className="w-full text-left p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-gray-800 hover:border-gray-700 transition"
              >
                <div className="text-xs font-bold text-emerald-400">$75K+ Enterprise Tier</div>
                <div className="text-[10px] text-gray-400 font-mono mt-0.5">Custom model training, continuous dev & devops</div>
              </button>
            </div>
          </div>
        )}

        {flowState.step === 'complete' && (
          <div className="p-4 bg-emerald-950/20 border border-emerald-900/30 rounded-2xl flex items-start gap-3 mx-4">
            <Laptop className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-left text-xs text-gray-300">
              <strong className="text-white block font-mono">INQUIRY SAVED</strong>
              We have scheduled your AI Readiness Consultation. View submitted details anytime under the "Lead Portal" in the top navbar.
            </div>
          </div>
        )}

        <div ref={chatBottomRef} />
      </div>

      {/* Input box for writing values (e.g. name, email, etc.) */}
      <form 
        onSubmit={handleSubmitInput} 
        className="p-4 border-t border-gray-850 bg-slate-950/80 flex items-center gap-2"
      >
        <input
          type="text"
          placeholder={
            flowState.step === 'name_company' 
              ? "Write: Your Name - Your Company"
              : flowState.step === 'email_phone'
              ? "Provide corporate email & phone..."
              : "Ask a question about our operations..."
          }
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={flowState.step === 'intro' || flowState.step === 'project_type' || flowState.step === 'budget_time' || flowState.step === 'complete'}
          className="flex-1 bg-slate-900 border border-gray-800 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-sky-500 placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
        />
        <button
          type="submit"
          disabled={!inputValue.trim() || flowState.step === 'intro' || flowState.step === 'project_type' || flowState.step === 'budget_time' || flowState.step === 'complete'}
          className="p-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
