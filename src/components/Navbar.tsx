import React from "react";
import { Sparkles, Terminal } from "lucide-react";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const navItems = [
    { id: "hero", label: "Home" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#262626] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            onClick={() => onNavigate("hero")} 
            className="flex items-center gap-3 cursor-pointer group"
            id="nav-logo"
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-sm flex items-center justify-center font-bold text-white transition-transform group-hover:scale-105">
              <span>A</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-sans font-bold text-lg tracking-tight text-white">
                AARI <span className="text-indigo-500 font-light">INFOTECH</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#A1A1A1] uppercase leading-none">
                Web &amp; AI Automation
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors cursor-pointer relative py-1.5 px-1 ${
                  activeSection === item.id 
                    ? "text-indigo-400 font-semibold" 
                    : "text-[#A1A1A1] hover:text-white"
                }`}
                id={`nav-item-${item.id}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Call to Action */}
          <div>
            <button
              onClick={() => onNavigate("contact")}
              className="flex items-center gap-2 bg-white text-black hover:bg-indigo-600 hover:text-white font-bold uppercase text-xs tracking-wider py-3 px-5 transition-all cursor-pointer hover:scale-[1.02]"
              id="nav-cta"
            >
              <Sparkles className="w-3.5 h-3.5 fill-current shrink-0 animate-pulse" />
              <span>Inquire Now</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
