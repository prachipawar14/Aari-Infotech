import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

// Load environment variables
dotenv.config();

// Temporary server-side in-memory store for client inquiries
interface Inquiry {
  id: string;
  businessName: string;
  industry: string;
  bottlenecks: string;
  scale: string;
  selectedServices: string[];
  contactName: string;
  contactEmail: string;
  aiRecommendation?: any;
  createdAt: string;
}

const inquiries: Inquiry[] = [];

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}

const contacts: ContactSubmission[] = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON parsing middleware
  app.use(express.json());

  // API endpoints
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", time: new Date().toISOString() });
  });

  // Handle Contact submissions
  app.post("/api/contact", (req, res) => {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "Name, email, phone, and message are required fields." });
    }

    const newContact: ContactSubmission = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      email,
      phone,
      message,
      createdAt: new Date().toISOString()
    };

    contacts.push(newContact);
    console.log(`[Contact Submission] Received contact from ${name} (${email})`);
    res.status(201).json({ success: true, contact: newContact });
  });

  app.get("/api/contacts", (req, res) => {
    res.json(contacts);
  });

  // Get all submitted inquiries
  app.get("/api/inquiries", (req, res) => {
    res.json(inquiries);
  });

  // Create an inquiry
  app.post("/api/inquiries", (req, res) => {
    const { businessName, industry, bottlenecks, scale, selectedServices, contactName, contactEmail, aiRecommendation } = req.body;
    
    if (!contactName || !contactEmail) {
      return res.status(400).json({ error: "Name and Email are required to submit an inquiry." });
    }

    const newInquiry: Inquiry = {
      id: Math.random().toString(36).substring(2, 9),
      businessName: businessName || "Generic Business",
      industry: industry || "Not Specified",
      bottlenecks: bottlenecks || "Not Specified",
      scale: scale || "Not Specified",
      selectedServices: selectedServices || [],
      contactName,
      contactEmail,
      aiRecommendation,
      createdAt: new Date().toISOString(),
    };

    inquiries.push(newInquiry);
    res.status(201).json(newInquiry);
  });

  // Core business analyzer endpoint powered by Gemini
  app.post("/api/analyze-business", async (req, res) => {
    const { businessName, industry, bottlenecks, scale, selectedServices } = req.body;

    if (!businessName || !industry || !bottlenecks) {
      return res.status(400).json({ error: "Missing required business parameters." });
    }

    const servicesStr = selectedServices && selectedServices.length > 0 
      ? selectedServices.join(", ") 
      : "Website Development, AI Automation, Business Automation";

    const apiKey = process.env.GEMINI_API_KEY;
    const isMock = !apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "";

    if (isMock) {
      // Return high-quality, simulated business analysis when API key is not configured
      console.log("Gemini API key not configured. Returning simulated robust consulting response.");
      const hoursSaved = Math.floor(Math.random() * 12) + 10; // 10 to 22 hours
      const mockResult = {
        summary: `Aari Infotech's strategy for ${businessName} in the ${industry} sector focuses on streamlining operations by removing manual workflows, replacing legacy processes with automated pipelines, and crafting a modern, high-converting digital portal.`,
        hoursSavedWeekly: hoursSaved,
        savingsCalculation: `Based on saving ${hoursSaved} hours weekly across administrative tasks, scheduling, lead management, and duplicate data entry. At an estimated loaded rate of $45/hour, this equates to over $3,500 in monthly operational savings.`,
        roadmap: [
          {
            phase: "Phase 1: Web Presence & Client Funnel",
            title: "High-Performance Next-Gen Website & Portal",
            description: `We will design and develop a high-speed, interactive web portal for ${businessName}. This features dynamic booking/lead intake interfaces, clean pricing estimations, and a client dashboard to capture organic traffic and minimize front-end customer interaction.`,
            impact: "Establishes institutional credibility and captures 2.5x more qualified leads automatically.",
            timeline: "3-4 Weeks"
          },
          {
            phase: "Phase 2: Intelligent Workflow & Lead Nurturing",
            title: "AI-Powered Customer Assistant & Smart Routing",
            description: `Integrating a Gemini-powered service agent that reads incoming leads, queries, and common bottlenecks (${bottlenecks.substring(0, 50)}...). It automates primary triaging, draft email generation, and routes complex cases directly to your staff's inbox with pre-written summaries.`,
            impact: "Reduces response latency from hours to under 30 seconds, improving client acquisition rates.",
            timeline: "2 Weeks"
          },
          {
            phase: "Phase 3: Full Operational Integration",
            title: "Business Process Automation & API Consolidation",
            description: `We will build continuous automation bridges (using Make/Zapier or serverless functions) to sync web entries, client invoices, internal calendar schedules, and accounting ledgers automatically. No more manual transcription of info.`,
            impact: `Saves an additional 8-10 hours per week while eliminating data entry human errors.`,
            timeline: "1-2 Weeks"
          }
        ],
        estimatedTimeline: "6-8 Weeks Total",
        estimatedCostTier: "Competitive Standard",
        roiScore: 89,
        isSandbox: true
      };
      return res.json(mockResult);
    }

    try {
      // Real Gemini API interaction
      const ai = new GoogleGenAI({ apiKey });
      
      const prompt = `You are the lead Technology Consultant & Enterprise Architect at "Aari Infotech", an elite agency specializing in high-performance Website Development, intelligent AI Automation, and deep Business Process Automation.
      
Analyze this business profile and generate a comprehensive automation roadmap:
- Business Name: ${businessName}
- Industry/Sector: ${industry}
- Key Bottlenecks: ${bottlenecks}
- Organization Scale: ${scale}
- Requested Services: ${servicesStr}

You must respond in strictly valid JSON format. Do not write any markdown wrappers (like \`\`\`json) or additional text outside the JSON object. The JSON object must match this TypeScript interface exactly:

interface AnalysisResponse {
  summary: string; // Dynamic overview of the business's current state and how Aari Infotech can solve its exact bottlenecks
  hoursSavedWeekly: number; // A realistic estimated number of hours saved weekly (e.g. between 8 and 30)
  savingsCalculation: string; // Explaining how we calculated the weekly/monthly savings based on manual labor reduction
  roadmap: Array<{
    phase: string; // e.g. "Phase 1: Web & Lead Funnel"
    title: string; // Specific project title
    description: string; // Custom, detailed description of what we will build to solve their bottlenecks
    impact: string; // Key measurable business outcome (e.g. "90% faster lead triaging")
    timeline: string; // Project duration (e.g. "3 Weeks")
  }>;
  estimatedTimeline: string; // Combined schedule (e.g. "6-8 weeks")
  estimatedCostTier: "Investment" | "Competitive Standard" | "Enterprise Custom";
  roiScore: number; // A number between 75 and 99 reflecting automation ROI potential
}

Make sure the proposal sounds highly technical, professional, custom-crafted, and compelling. Ensure the JSON is completely standard, correct, and parseable.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      const responseText = response.text || "";
      // Clean up markdown wrapping if Gemini includes it despite instructions
      let cleanJson = responseText.trim();
      if (cleanJson.startsWith("```json")) {
        cleanJson = cleanJson.substring(7);
      }
      if (cleanJson.startsWith("```")) {
        cleanJson = cleanJson.substring(3);
      }
      if (cleanJson.endsWith("```")) {
        cleanJson = cleanJson.substring(0, cleanJson.length - 3);
      }
      cleanJson = cleanJson.trim();

      const parsedData = JSON.parse(cleanJson);
      res.json({ ...parsedData, isSandbox: false });
    } catch (error: any) {
      console.error("Gemini compilation / query error:", error);
      res.status(500).json({ 
        error: "Failed to generate AI consultation report due to an internal API error.",
        details: error.message 
      });
    }
  });

  // Serve static files / Vite middleware
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Aari Infotech Server] Running on http://localhost:${PORT}`);
  });
}

startServer();
