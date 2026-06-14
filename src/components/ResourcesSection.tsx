import React, { useState } from 'react';
import { BookOpen, Calendar, ArrowUpRight, Search, FileText } from 'lucide-react';

interface Article {
  title: string;
  category: string;
  date: string;
  readTime: string;
  abstract: string;
}

export default function ResourcesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Artificial Intelligence',
    'Generative AI',
    'AI Agents',
    'Digital Transformation',
    'SaaS Development',
    'Cloud Technologies',
    'IoT Solutions',
    'Software Engineering',
    'Cybersecurity',
    'Business Automation'
  ];

  const articles: Article[] = [
    {
      title: 'Architecting Scalable Multi-Agent AI Swarms for Enterprise Action',
      category: 'AI Agents',
      date: 'June 10, 2026',
      readTime: '8 min read',
      abstract: 'An in-depth specification on using orchestrators to model task delegation, execute parallel tools, and handle multi-agent feedback.'
    },
    {
      title: 'Harnessing Gemini Pro Models for Secure Localized Semantics Search',
      category: 'Generative AI',
      date: 'May 28, 2026',
      readTime: '6 min read',
      abstract: 'How to combine low-latency embeddings grids with cosine similarity math to query sensitive corporate PDF manuals securely.'
    },
    {
      title: 'PCI-DSS Compliance Strategies in Subscription SaaS Payments',
      category: 'SaaS Development',
      date: 'May 14, 2026',
      readTime: '11 min read',
      abstract: 'Best practices for using webhook listeners and Stripe metadata structures to isolate database tiers in high-volume multi-tenant clouds.'
    },
    {
      title: 'Predictive Machinery Maintenances Using Connected ESP32 Meshes',
      category: 'IoT Solutions',
      date: 'April 30, 2026',
      readTime: '9 min read',
      abstract: 'Implementing edge telemetry filters on micro-controller units to dispatch temperature spikes to predictive model arrays.'
    },
    {
      title: 'Migrating Legacy Monoliths to Autonomous Kubernetes Micro-Clusters',
      category: 'Cloud Technologies',
      date: 'April 15, 2026',
      readTime: '12 min read',
      abstract: 'A step-by-step transition checklist for operations leaders aiming to configure Terraform scripts with zero migration downtime.'
    },
    {
      title: 'Developing Enterprise CRM Backplanes with Semantic SEO Hierarchies',
      category: 'Software Engineering',
      date: 'March 28, 2026',
      readTime: '7 min read',
      abstract: 'How to structure single-page applications so that search bots can read core product lists without running heavy JavaScript loops.'
    }
  ];

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(art => art.category === selectedCategory || art.abstract.includes(selectedCategory));

  return (
    <section id="resources-insights-panel" className="py-24 relative overflow-hidden bg-slate-950/20 border-t border-[#121c33]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider bg-sky-950/30 px-3 py-1 rounded-full border border-sky-900/30">
            Insights Lab
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Resources & Insights Hub
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
            Learn, innovate, and grow. Explore our latest documentation and architectures on translating operations into intelligent code.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 max-w-4xl mx-auto">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-tight transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-sky-500/20 border border-sky-400 text-sky-300'
                  : 'bg-slate-900/40 border border-gray-850 text-gray-450 hover:text-white hover:border-gray-750'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredArticles.length === 0 ? (
            <div className="col-span-full py-12 text-center text-gray-500">
              <FileText className="w-12 h-12 mx-auto stroke-1 mb-3 opacity-40 animate-pulse" />
              <p className="font-semibold text-gray-400">Section matches are empty</p>
              <p className="text-xs text-gray-600 mt-1 max-w-md mx-auto">
                No articles are written under the "{selectedCategory}" tag yet. However, we have general coverage available under "All" articles!
              </p>
            </div>
          ) : (
            filteredArticles.map((art, idx) => (
              <div 
                key={idx}
                className="bg-[#0b101c] border border-gray-850 rounded-3xl p-6 hover:border-sky-550 transition duration-150 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 bg-sky-950/40 text-sky-400 border border-sky-900/40 rounded-full text-[10px] font-mono uppercase">
                      {art.category}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">{art.readTime}</span>
                  </div>

                  <h3 className="text-sm font-extrabold text-white tracking-tight leading-snug hover:text-sky-450 transition cursor-pointer">
                    {art.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                    {art.abstract}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-850 flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {art.date}
                  </span>
                  <a href="#consultation-panel" className="text-sky-400 font-bold flex items-center gap-0.5 hover:underline">
                    Read Report <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
}
