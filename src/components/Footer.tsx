import React from "react";
import { Terminal, Shield, ArrowUp, Mail, MapPin } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#262626] py-16 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-5 text-left">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-1.5 rounded-none bg-white text-black font-bold flex items-center justify-center">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-sans font-bold text-white tracking-tight">Aari Infotech</span>
            </div>
            <p className="text-[#A1A1A1] text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              Engineering high-performance React architectures, intelligent Gemini AI pipelines, and seamless cloud business automations for modern enterprises.
            </p>
            <div className="flex flex-col gap-2 text-xs text-[#737373] font-mono">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>solutions@aariinfotech.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>Asia Pacific Tech Center</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#737373] mb-4">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate("hero")} 
                  className="text-[#A1A1A1] hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
                >
                  Home Console
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("services")} 
                  className="text-[#A1A1A1] hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
                >
                  Architectural Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("contact")} 
                  className="text-[#A1A1A1] hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Technical Scope */}
          <div className="md:col-span-4 text-left">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#737373] mb-4">Operational Architecture</h4>
            <p className="text-[#A1A1A1] text-xs leading-relaxed mb-4">
              All automation pipelines are built utilizing standard secure APIs, containerized on Cloud Run, and monitored with end-to-end telemetry constraints.
            </p>
            <div className="flex items-center gap-2 bg-[#141414] border border-[#262626] p-2.5 rounded-sm w-fit">
              <Shield className="w-4 h-4 text-indigo-400" />
              <span className="text-[10px] font-mono text-slate-300">ISO/IEC 27001 Prepared Pipelines</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-mono text-[#737373]">
            © {new Date().getFullYear()} Aari Infotech. All rights reserved. Designed with elite custom specs.
          </p>

          <button
            onClick={handleScrollTop}
            className="flex items-center gap-1.5 bg-[#141414] hover:bg-[#141414]/80 border border-[#262626] py-1.5 px-3 rounded-none text-[10px] font-mono text-[#A1A1A1] hover:text-white transition-all cursor-pointer"
          >
            <span>Return to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
