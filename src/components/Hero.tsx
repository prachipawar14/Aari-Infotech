import React from "react";
import { ArrowRight, Cpu, Layers, Sparkles, Zap } from "lucide-react";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 px-4 bg-[#0A0A0A]" id="hero">
      {/* Background gradients aligned with Elegant Dark */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-950/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      {/* Visual Digital Grid Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:40px_40px] -z-10" 
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center w-full relative z-10 py-12">
        {/* Content Side shifted slightly left on larger viewports */}
        <div className="md:col-span-7 flex flex-col text-left lg:-translate-x-10 xl:-translate-x-16 transition-transform duration-500">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-[#141414] border border-[#262626] text-indigo-400 text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-sm w-fit mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            <span>INTELLIGENT SOLUTIONS ENGINE</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter text-[#EDEDED] mb-6">
            Intelligent <br className="hidden lg:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Infrastructures
            </span> <br />
            for Tomorrow.
          </h1>

          {/* Paragraph */}
          <p className="text-lg text-[#A1A1A1] max-w-xl leading-relaxed mb-8">
            Aari Infotech blends cutting-edge web development with sophisticated AI automation to streamline your business operations and remove friction.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <button
              onClick={() => onNavigate("services")}
              className="flex items-center justify-center gap-2 bg-white text-black hover:bg-indigo-600 hover:text-white font-bold uppercase text-xs tracking-widest py-4 px-8 transition-all cursor-pointer hover:scale-[1.02]"
              id="hero-cta-services"
            >
              <span>Explore Services</span>
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="flex items-center justify-center gap-2 border border-[#262626] bg-[#141414] text-[#EDEDED] hover:text-white hover:border-indigo-500/50 font-bold uppercase text-xs tracking-widest py-4 px-8 transition-all cursor-pointer"
              id="hero-cta-contact"
            >
              <span>Contact Us</span>
            </button>
          </div>

          {/* Tech badges in monospace / minimal look */}
          <div className="mt-12 pt-8 border-t border-[#262626] grid grid-cols-3 gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#525252] mb-1 font-mono">CLIENT SATISFACTION</p>
              <p className="text-2xl font-bold font-mono text-white">100%</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#525252] mb-1 font-mono">EFFICIENCY BOOST</p>
              <p className="text-2xl font-bold font-mono text-indigo-400">20x</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#525252] mb-1 font-mono">SYSTEM SLA</p>
              <p className="text-2xl font-bold font-mono text-cyan-400">99.9%</p>
            </div>
          </div>
        </div>

        {/* Animated 3D-effect Website & Automation Robot Interface */}
        <div className="md:col-span-5 relative mt-6 md:mt-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl opacity-60 pointer-events-none" />
          
          <div className="relative w-full max-w-[420px] bg-[#141414] border border-[#262626] rounded-sm p-6 overflow-hidden shadow-2xl">
            {/* Header / Console controls */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between border-b border-[#262626] pb-3 z-20 bg-[#141414]">
              <div className="flex items-center space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-500/40 animate-pulse" />
                <span className="text-[9px] font-mono text-[#737373] uppercase tracking-widest">Automation Central v4.0</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>
            </div>

            {/* Core Interactive Robotic & Website Canvas (Height is 340px) */}
            <div className="relative h-[340px] w-full flex items-center justify-center mt-6">
              
              {/* Backing Web Automation Flow Connections (SVG Lines) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                {/* Connection lines to Website Nodes */}
                <path d="M 200,170 Q 110,130 90,105" fill="none" stroke="#4f46e5" strokeWidth="1.5" strokeOpacity="0.4" />
                <path d="M 200,170 Q 110,130 90,105" fill="none" stroke="#06b6d4" strokeWidth="1.5" className="animate-data-flow" />
                
                <path d="M 200,170 Q 290,210 310,235" fill="none" stroke="#4f46e5" strokeWidth="1.5" strokeOpacity="0.4" />
                <path d="M 200,170 Q 290,210 310,235" fill="none" stroke="#4f46e5" strokeWidth="1.5" className="animate-data-flow" />

                <path d="M 200,170 H 310" fill="none" stroke="#262626" strokeWidth="1" strokeDasharray="3" />
                <path d="M 200,170 H 90" fill="none" stroke="#262626" strokeWidth="1" strokeDasharray="3" />
              </svg>

              {/* Floating Website Panel (Top Left) */}
              <div className="absolute top-[35px] left-[15px] z-10 w-[140px] bg-[#0A0A0A]/90 border border-indigo-500/20 rounded-sm p-2.5 shadow-lg animate-float-slow backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-[#262626] pb-1.5 mb-2">
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 rounded-full bg-red-500/60" />
                    <div className="w-1 h-1 rounded-full bg-yellow-500/60" />
                    <div className="w-1 h-1 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-[8px] font-mono text-[#737373]">index.html</span>
                </div>
                <div className="space-y-1 text-left">
                  <div className="h-1 bg-indigo-500/40 rounded-full w-4/5" />
                  <div className="h-1 bg-[#262626] rounded-full w-full" />
                  <div className="h-1 bg-cyan-400/30 rounded-full w-3/5" />
                  <div className="grid grid-cols-3 gap-1 pt-1.5">
                    <div className="h-2 bg-[#141414] border border-[#262626] rounded-sm" />
                    <div className="h-2 bg-[#141414] border border-[#262626] rounded-sm" />
                    <div className="h-2 bg-[#141414] border border-[#262626] rounded-sm" />
                  </div>
                </div>
              </div>

              {/* Floating CRM/Database Module (Bottom Right) */}
              <div className="absolute bottom-[40px] right-[15px] z-10 w-[130px] bg-[#0A0A0A]/90 border border-cyan-500/20 rounded-sm p-2.5 shadow-lg animate-float-medium backdrop-blur-sm">
                <div className="flex items-center gap-1.5 border-b border-[#262626] pb-1.5 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-[8px] font-mono text-[#EDEDED] uppercase tracking-wider">Lead Database</span>
                </div>
                <div className="space-y-1.5 text-left font-mono text-[7px] text-[#A1A1A1]">
                  <p className="text-cyan-400 leading-none">✓ NEW CLIENT INBOUND</p>
                  <p className="text-[#737373] leading-none">SYNCING TO CRM...</p>
                  <p className="text-indigo-400 leading-none">DISPATCHING SMS API</p>
                </div>
              </div>

              {/* Central Robotic/AI Automation Core (In the Center) */}
              <div className="relative z-20 w-[160px] h-[160px] flex items-center justify-center">
                {/* Outer Glowing Ring */}
                <div className="absolute inset-0 border border-dashed border-indigo-500/30 rounded-full animate-spin-slow" />
                {/* Mid Counter-rotating Gear Circle */}
                <div className="absolute inset-2 border border-cyan-500/20 rounded-full animate-spin-reverse-slow flex items-center justify-center">
                  <div className="w-full h-full relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-500 rounded-full" />
                  </div>
                </div>

                {/* Robotic AI Eye Core / Orb with high-contrast glass styling */}
                <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-br from-[#1c1c1c] to-[#0A0A0A] border border-[#262626] flex items-center justify-center shadow-inner relative overflow-hidden group">
                  {/* Subtle inner animated radar overlay */}
                  <div className="absolute inset-0 bg-radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_75%) animate-pulse-glow" />

                  {/* Inner Robot Lens */}
                  <div className="w-[50px] h-[50px] rounded-full bg-[#050505] border-2 border-indigo-500/80 flex items-center justify-center relative">
                    <div className="w-5 h-5 rounded-full bg-indigo-500/10 border border-cyan-400 flex items-center justify-center">
                      {/* Laser pointer reflection */}
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    </div>
                    {/* Sweeping radar effect */}
                    <div className="absolute inset-0 border-r border-indigo-400 rounded-full animate-spin" style={{ animationDuration: "2s" }} />
                  </div>
                </div>
              </div>

              {/* Automation Gear Asset 1 */}
              <div className="absolute bottom-[20px] left-[70px] z-10 w-9 h-9 border border-[#262626] rounded-full flex items-center justify-center animate-spin-slow bg-[#141414]">
                <svg className="w-6 h-6 text-[#525252]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.35 19.43,11.03L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.47,5.34 14.86,5.08L14.48,2.42C14.44,2.18 14.24,2 14,2H10C9.76,2 9.56,2.18 9.52,2.42L9.14,5.08C8.53,5.34 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11.03C4.53,11.35 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.04 4.95,18.95L7.44,17.95C7.96,18.34 8.53,18.66 9.14,18.92L9.14,21.58C9.56,21.82 9.76,22 10,22H14C14.24,22 14.44,21.82 14.48,21.58L14.86,18.92C15.47,18.66 16.04,18.34 16.56,17.95L19.05,18.95C19.27,19.04 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                </svg>
              </div>

              {/* Automation Gear Asset 2 */}
              <div className="absolute top-[15px] right-[90px] z-10 w-7 h-7 border border-[#262626] rounded-full flex items-center justify-center animate-spin-reverse-slow bg-[#141414]">
                <svg className="w-4 h-4 text-[#525252]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.35 19.43,11.03L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.47,5.34 14.86,5.08L14.48,2.42C14.44,2.18 14.24,2 14,2H10C9.76,2 9.56,2.18 9.52,2.42L9.14,5.08C8.53,5.34 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11.03C4.53,11.35 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.04 4.95,18.95L7.44,17.95C7.96,18.34 8.53,18.66 9.14,18.92L9.14,21.58C9.56,21.82 9.76,22 10,22H14C14.24,22 14.44,21.82 14.48,21.58L14.86,18.92C15.47,18.66 16.04,18.34 16.56,17.95L19.05,18.95C19.27,19.04 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                </svg>
              </div>

            </div>

            {/* Sub-label showing stats of background automations */}
            <div className="mt-4 pt-3 border-t border-[#262626] text-center">
              <p className="text-[10px] text-[#525252] font-mono uppercase tracking-wider">
                System state: <span className="text-emerald-400">ACTIVE</span> | Active Routines: <span className="text-white">124/sec</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
