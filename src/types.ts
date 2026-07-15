export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  points: string[];
  category: "website" | "ai" | "business";
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "website" | "ai" | "business" | "all";
  client: string;
  summary: string;
  features: string[];
  metrics: string;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  description: string;
  impact: string;
  timeline: string;
}

export interface AnalysisResult {
  summary: string;
  hoursSavedWeekly: number;
  savingsCalculation: string;
  roadmap: RoadmapPhase[];
  estimatedTimeline: string;
  estimatedCostTier: string;
  roiScore: number;
  isSandbox?: boolean;
}

export interface Inquiry {
  id: string;
  businessName: string;
  industry: string;
  bottlenecks: string;
  scale: string;
  selectedServices: string[];
  contactName: string;
  contactEmail: string;
  aiRecommendation?: AnalysisResult;
  createdAt: string;
}
