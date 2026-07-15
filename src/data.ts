import { ServiceItem, ProjectItem } from "./types";

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Next-Gen Web & App Development",
    category: "website",
    shortDesc: "High-performance, beautifully designed, and responsive web systems optimized for customer engagement.",
    longDesc: "We craft fast, custom frontends and robust full-stack applications. From admin dashboards and SaaS portals to beautiful interactive landing pages, we build web systems that serve as your digital flagship.",
    points: [
      "Custom React, Vue, & Next.js architectures",
      "Dynamic lead generation funnels & forms",
      "Responsive, pixel-perfect, and highly interactive user interfaces",
      "Robust API development and database integrations"
    ]
  },
  {
    id: "ai-auto",
    title: "Intelligent AI Automation",
    category: "ai",
    shortDesc: "Integrate Large Language Models and AI agents directly into your customer support and content workflows.",
    longDesc: "Supercharge your business with custom AI assistants, automated email triaging, intelligent semantic search engines, and automated summary generators that read and action incoming files.",
    points: [
      "Custom LLM & Gemini API integrations",
      "Semantic knowledge bases (RAG systems) for internal files",
      "Automated lead triaging & pre-drafted customer emails",
      "AI chatbots trained on your company's product docs"
    ]
  },
  {
    id: "bus-auto",
    title: "Business Process Automation",
    category: "business",
    shortDesc: "Eliminate repetitive manual data entry by connecting your tools into unified, automated pipelines.",
    longDesc: "Connect your CRM, accounting software, email campaigns, calendar tools, and internal communication rails so your data moves seamlessly without human effort.",
    points: [
      "End-to-end API integration & tool synchronization",
      "Automated invoice generation & financial workflows",
      "CRM pipeline triggers & Slack/Teams instant notifications",
      "Scheduled reporting & operational dashboards"
    ]
  }
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Enterprise SaaS Customer Onboarding Flow",
    category: "website",
    client: "TalentGrid Inc.",
    summary: "Built a fully reactive, high-speed custom customer dashboard and multi-step onboarding portal with integrated user tracking and dynamic document generation.",
    features: [
      "React/Vite single-page application structure",
      "Dynamic interactive dashboard with PDF generator",
      "Comprehensive onboarding progress tracking"
    ],
    metrics: "+340% Onboarding Velocity & 4.8x Conversion Rate"
  },
  {
    id: "proj-2",
    title: "Autonomous Customer Support AI Agent",
    category: "ai",
    client: "Apex Retail Solutions",
    summary: "Created an intelligent agent integrating the Gemini API, answering over 80% of routine client questions instantly by searching internal product knowledge bases.",
    features: [
      "Secure server-side LLM triaging system",
      "Under 3-second average response time",
      "Seamless live-agent fallback routing trigger"
    ],
    metrics: "84% Reduction in Support Overhead & Sub-Minute Resolution"
  },
  {
    id: "proj-3",
    title: "Automated Invoicing & CRM Sync Engine",
    category: "business",
    client: "Global Logistics Group",
    summary: "Constructed a headless synchronization pipeline that links client CRM updates instantly to custom invoicing and warehouse delivery systems.",
    features: [
      "Real-time CRM event webhook processing",
      "Automated PDF billing statements & email dispatches",
      "Unified accounting dashboard with alert triggers"
    ],
    metrics: "16+ Hours Saved per Week & Zero Human Billing Errors"
  }
];
