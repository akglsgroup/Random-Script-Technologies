import React, { useState } from 'react';
import { 
  Bot, 
  Cpu, 
  Layers, 
  Cloud, 
  PhoneCall, 
  Layout, 
  Wifi, 
  CloudRain, 
  Check, 
  CheckCircle,
  Network
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  bulletKeyword: string;
  description: string;
  capabilities: string[];
  benefits: string[];
  technologies: string[];
  bannerImage: string;
}

export default function ServiceExplorer() {
  const [activeTab, setActiveTab] = useState<string>('ai_gen');

  const services: Service[] = [
    {
      id: 'ai_gen',
      title: 'AI & Generative AI Development',
      subtitle: 'Unlock intelligence to scale corporate capacity.',
      icon: Network,
      bulletKeyword: '✔ AI Development & Consulting',
      description: 'Harness the power of Artificial Intelligence to automate complex workflows, optimize high-stakes business decision processes, and deliver outstanding modern customer touchpoints.',
      capabilities: [
        'Generative AI Development',
        'Multi-Agent Systems & Swarms',
        'Large Language Model Integration',
        'OpenAI Development',
        'Gemini AI Integration',
        'Claude AI Development',
        'Custom AI Model Training & Fine-Tuning',
        'AI-Powered Knowledge Bases & Semantic Search',
        'AI Recommendation Engines'
      ],
      benefits: [
        'Reduce operational overhead by up to 45%',
        'Increase engineer and expert productivity tenfold',
        'Deliver lightning-fast, zero-delay intelligent service',
        'Identify dormant market opportunities instantly'
      ],
      technologies: ['Gemini Pro API', 'OpenAI API', 'PyTorch', 'LangChain', 'LlamaIndex', 'TensorFlow'],
      bannerImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'ai_agents',
      title: 'AI Agent Development',
      subtitle: 'Build autonomous workforce systems operating 24/7.',
      icon: Bot,
      bulletKeyword: '✔ AI Agent Development',
      description: 'We build sovereign AI Agents capable of handling asynchronous multi-layered operations, reasoning through workflows, accessing data securely, and collaborating to complete tasks.',
      capabilities: [
        'Customer Support Automation',
        'Autonomous Sales Qualification',
        'Lead Generation & Scoring Systems',
        'Calendar Booking & Appointment Coordination',
        'Employee Assistance & Internal Knowledge Navigation',
        'HR Sourcing & Onboarding Automation',
        'Autonomous Multi-Agent Workflow Loops'
      ],
      benefits: [
        'Instant answers across websites, WhatsApp, and Slack',
        'Dramatically higher lead capture conversion',
        'Seamless handoff to human managers for complex edge cases',
        'Autonomous execution with zero constant monitoring'
      ],
      technologies: ['Agentic Workflows', 'CrewAI', 'LangGraph', 'Autogen', 'Socket.io', 'Node.js'],
      bannerImage: 'https://images.unsplash.com/photo-1675557009875-436f09780264?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'custom_soft',
      title: 'Custom Enterprise Software',
      subtitle: 'Bespoke, robust enterprise backplanes built for high ROI.',
      icon: Layers,
      bulletKeyword: '✔ Enterprise Software Solutions',
      description: 'We craft durable, high-performance custom enterprise softwares engineered around your custom processes. Get full architecture ownership with absolute scalability.',
      capabilities: [
        'Enterprise Resource Planning (ERP) Systems',
        'Customer Relationship Management (CRM) Software',
        'Human Resource Management (HRMS) Platforms',
        'Inventory & Logistics Management System',
        'Learning Management Systems (LMS)',
        'Hospital Management and EHR/EMR platforms',
        'Supply Chain visibilities maps & portals'
      ],
      benefits: [
        'Zero monthly licensing creep typical of off-the-shelf software',
        '100% aligned with your proprietary business patterns',
        'High-security custom databases & access role models',
        'Seamless growth and modular upgrades'
      ],
      technologies: ['TypeScript', 'Node.js/Express', 'PostgreSQL', 'Docker', 'D3.js', 'React'],
      bannerImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'saas_dev',
      title: 'SaaS Product Development',
      subtitle: 'Accelerate your time-to-market with modular SaaS foundations.',
      icon: Cpu,
      bulletKeyword: '✔ Custom Web Applications',
      description: 'From validation to scaling, we engineer responsive multi-tenant platforms ready for high-volume subscriber traffic, multi-currency processing, and secure isolation.',
      capabilities: [
        'Multi-Tenant Architecture Isolation',
        'Complex Subscription Engines & Tier management',
        'Stripe & Lemon Squeezy payment integrations',
        'Comprehensive Admin Panels & Analytics Dashboards',
        'Secure API Gateway development',
        'Legacy Platform Migrations to Modern SaaS'
      ],
      benefits: [
        'Fast MVP launches within 4 to 8 weeks',
        'Designed around robust, cost-effective resource servers',
        'Highly optimized checkout funnels to limit churn',
        'Enterprise-ready single sign-on (SSO) configurations'
      ],
      technologies: ['Next.js', 'TailwindCSS', 'Stripe API', 'Redis', 'PostgreSQL', 'Auth0'],
      bannerImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'mobile',
      title: 'Mobile App Development',
      subtitle: 'High-performance offline-ready native iOS and Android apps.',
      icon: PhoneCall,
      bulletKeyword: '✔ Mobile App Development',
      description: 'We develop beautiful, intuitive, and responsive mobile packages that provide seamless gestures, instant loaded states, and robust integration with hardware features.',
      capabilities: [
        'Cross-Platform Flutter & React Native setups',
        'Native Kotlin (Android) & Swift (iOS) development',
        'Ecommerce store apps with localized payments',
        'Telemetry tracking apps & IoT controllers',
        'Social networking & Community tools',
        'On-demand booking systems & live map routes'
      ],
      benefits: [
        'Unified codebases to lower engineering overhead costs',
        'Fluid animations running at 60fps/120fps',
        'Full offline synchronization with local state caching',
        'Smooth App Store / Google Play submission operations'
      ],
      technologies: ['Flutter', 'React Native', 'Kotlin', 'Swift', 'Redux Toolkit', 'SQLite'],
      bannerImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'web_portal',
      title: 'Web Application Development',
      subtitle: 'Fast, secure, and SEO-optimized web systems.',
      icon: Layout,
      bulletKeyword: '✔ Custom Web Applications',
      description: 'We design responsive business engines, administrative tools, client portals, and head-turning websites configured for super-high Lighthouse speeds and semantic SEO.',
      capabilities: [
        'Custom Web App Engineering (Vite, Next.js, React)',
        'B2B / Client Portals & Support Hubs',
        'Shopify Custom Apps & Headless E-Commerce development',
        'WordPress high-speed custom theme operations',
        'Progressive Web Apps (PWAs)',
        'Headless CMS Integrations (Strapi, Sanity)'
      ],
      benefits: [
        'Aesthetic typography matched to responsive visual frameworks',
        'Zero bloated modules to optimize speed indexes',
        'Seamless integration with your customer CRMs',
        'Optimized crawl structures for search ranking growth'
      ],
      technologies: ['React', 'Next.js', 'GraphQL', 'Tailwind CSS', 'Shopify Storefront API'],
      bannerImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'iot_embed',
      title: 'IoT Development Services',
      subtitle: 'Bridge physical hardware with enterprise intelligence.',
      icon: Wifi,
      bulletKeyword: '✔ IoT Development Services',
      description: 'We design high-fidelity real-time telemetry pipelines, sensor configurations, and physical controllers to automate facility tracking, logistic grids, and smart warehouses.',
      capabilities: [
        'IoT Architecture Consulting',
        'Embedded Systems & Firmware programming',
        'Environmental Sensor Configurations & Mesh nodes',
        'Real-time industrial asset trackers',
        'Smart Manufacturing systems',
        'Smart Connectivity gateways & Protocols (MQTT, BLE, Modbus)'
      ],
      benefits: [
        'Prevent downtime via automated equipment alerts',
        'Complete end-to-end telemetry dashboard layouts',
        'Extremely low power envelope options for long field life',
        'Enterprise security guarding hardware boundaries'
      ],
      technologies: ['C/C++', 'ESP32', 'Raspberry Pi', 'MQTT', 'InfluxDB', 'FreeRTOS'],
      bannerImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cloud_devops',
      title: 'Cloud & DevOps Services',
      subtitle: 'Infrastructure modernized for high availability.',
      icon: Cloud,
      bulletKeyword: '✔ Cloud & DevOps Solutions',
      description: 'Ensure absolute uptime, minimize compute wastage, and speed up software deployments via enterprise-grade CI/CD automation pipelines and infrastructure as code.',
      capabilities: [
        'AWS, Google Cloud (GCP) and Azure architectures',
        'Durable Cloud Migrations with zero disruption',
        'Kubernetes clusters & Docker container orchestration',
        'Terraform Infrastructure as Code (IaC) templates',
        'CI/CD Pipeline automations (GitHub Actions, GitLab CI)',
        'Continuous performance and server overhead audits'
      ],
      benefits: [
        'Reduce average cloud hosting costs by up to 35%',
        'Automated load balancing capable of scaling instantly',
        'Absolute disaster backup and recovery models',
        '1-click deployments to promote developer friction reduction'
      ],
      technologies: ['AWS', 'Google Cloud', 'Terraform', 'Kubernetes', 'GitHub Actions', 'Prometheus'],
      bannerImage: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const currentService = services.find(s => s.id === activeTab) || services[0];

  return (
    <section id="services-head" className="py-24 relative overflow-hidden bg-slate-950/30 border-t border-b border-gray-900">
      
      {/* Background Flare */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[450px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider bg-sky-950/30 px-3 py-1 rounded-full border border-sky-900/30">
            Enterprise Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Our Core Engineering Services
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
            Delivering high-end technological breakthroughs from initial architecture to stable continuous deployment.
          </p>
        </div>

        {/* Tab Selection + Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Tab list */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest text-left block pl-2 font-bold mb-3">
              Browse capabilities
            </span>
            <div className="grid grid-cols-1 gap-2.5">
              {services.map((item) => {
                const Icon = item.icon;
                const isActive = item.id === activeTab;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full p-4 rounded-2xl border text-left flex items-center space-x-3 transition duration-150 cursor-pointer ${
                      isActive
                        ? 'bg-[#1e293b]/55 border-sky-500 shadow-md shadow-sky-500/5 text-white'
                        : 'bg-slate-900/30 border-gray-850 hover:bg-slate-900/60 hover:border-gray-800 text-gray-400'
                    }`}
                  >
                    <div className={`p-2 rounded-xl shrink-0 border ${
                      isActive ? 'bg-sky-500/10 border-sky-400 text-sky-400' : 'bg-slate-950/50 border-gray-800 text-gray-500'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`text-xs font-bold truncate ${isActive ? 'text-white' : 'text-gray-300'}`}>
                        {item.title}
                      </div>
                      <div className="text-[9.5px] text-gray-500 truncate mt-0.5">{item.subtitle}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Tab Details */}
          <div className="lg:col-span-8 bg-slate-900/20 border border-gray-850 rounded-3xl p-6 sm:p-9 text-left relative overflow-hidden flex flex-col justify-between h-full min-h-[580px] animate-in fade-in duration-200">
            
            {/* Ambient Accent bar */}
            <div className="absolute top-0 left-0 w-2 h-full bg-linear-to-b from-sky-500 to-indigo-600" />
            
            <div className="space-y-6">
              {/* Badge & Title */}
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold">
                  Service Specifications
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 tracking-tight">
                  {currentService.title}
                </h3>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                  {currentService.description}
                </p>
              </div>

              {/* Grid: Capabilities vs measured results */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-gray-850">
                {/* Capabilities */}
                <div>
                  <h4 className="text-xs font-bold font-mono text-gray-300 uppercase tracking-wider mb-3">
                    Project Deliverables:
                  </h4>
                  <ul className="space-y-2">
                    {currentService.capabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-start text-xs text-gray-300 gap-2">
                        <Check className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold font-mono text-gray-300 uppercase tracking-wider mb-3">
                      Commercial Impact & Benefits:
                    </h4>
                    <ul className="space-y-2">
                      {currentService.benefits.map((ben, idx) => (
                        <li key={idx} className="flex items-start text-xs text-gray-300 gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{ben}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold font-mono text-gray-300 uppercase tracking-wider mb-2">
                      Core Stack Deployment:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {currentService.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-slate-900 border border-gray-800 text-[10px] font-mono rounded-md text-gray-400 uppercase">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action helper bottom */}
            <div className="mt-8 pt-6 border-t border-gray-850 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-[10px] uppercase font-mono text-gray-500 block">Pillar Matcher</span>
                <span className="text-xs font-semibold text-gray-300">{currentService.bulletKeyword}</span>
              </div>
              <a 
                href="#consultation-panel"
                className="w-full sm:w-auto px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-gray-800 rounded-xl text-center text-xs text-white font-bold transition cursor-pointer"
              >
                Inquire about {currentService.title.split(' ')[0]}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
