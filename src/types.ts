export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  companyName: string;
  projectType: string;
  budget: string;
  timeframe: string;
  customNeeds?: string[];
  message?: string;
  source: 'direct_form' | 'chatbot' | 'proposal_builder';
  createdAt: string;
  status: 'new' | 'contacted' | 'proposal_sent';
}

export interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  createdAt: string;
}

export interface ServiceDetail {
  title: string;
  description: string;
  capabilities: string[];
  benefits: string[];
  icon: string;
  technologies?: string[];
}

export interface ProposalConfig {
  serviceTypes: string[];
  budgetRange: string;
  timeline: string;
  additionalFeatures: string[];
}
