import React, { useState } from "react";
import { Laptop, Cpu, Layers, CheckCircle2, ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { SERVICES } from "../data";
import { ServiceItem } from "../types";

interface ServicesProps {
  onSelectServiceAndConsult: (serviceId: string) => void;
}

export default function Services({ onSelectServiceAndConsult }: ServicesProps) {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const getIcon = (category: string) => {
    switch (category) {
      case "website":
        return <Laptop className="w-5 h-5 text-indigo-400" />;
      case "ai":
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case "business":
        return <Layers className="w-5 h-5 text-indigo-400" />;
      default:
        return <Laptop className="w-5 h-5 text-[#A1A1A1]" />;
    }
  };

  const getBorderColor = (category: string) => {
    switch (category) {
      case "website": return "hover:border-indigo-500/50 border-[#262626]";
      case "ai": return "hover:border-indigo-500/50 border-[#262626]";
      case "business": return "hover:border-indigo-500/50 border-[#262626]";
      default: return "border-[#262626]";
    }
  };

  const getBadgeColor = (category: string) => {
    switch (category) {
      case "website": return "bg-[#0A0A0A] border-[#262626] text-indigo-400";
      case "ai": return "bg-[#0A0A0A] border-[#262626] text-indigo-400";
      case "business": return "bg-[#0A0A0A] border-[#262626] text-indigo-400";
      default: return "bg-[#0A0A0A] border-[#262626] text-[#A1A1A1]";
    }
  };

  // Stagger variants for entry animation
  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section className="py-24 bg-[#0A0A0A] relative border-t border-[#262626] px-4" id="services">
      {/* Dynamic glow backdrops */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-indigo-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-950/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-left">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-[10px] font-mono tracking-[0.2em] text-[#737373] uppercase mb-3">CORE SERVICE STACK</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EDEDED] mb-4">
            WE PROVIDE
          </h2>
        </div>

        {/* Services Grid with Framer Motion entry animations */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((service, idx) => {
            const isExpanded = expandedService === service.id;
            return (
              <motion.div
                key={service.id}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                onClick={() => setExpandedService(isExpanded ? null : service.id)}
                className={`group bg-[#141414] border ${getBorderColor(service.category)} rounded-sm p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isExpanded ? "border-indigo-500/80 ring-1 ring-indigo-500/30" : ""
                }`}
                id={`service-card-${service.id}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 border border-[#262626] bg-[#0A0A0A] flex items-center justify-center rounded-sm transition-transform group-hover:scale-105">
                      {getIcon(service.category)}
                    </div>
                    <span className={`text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-sm border ${getBadgeColor(service.category)}`}>
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#EDEDED] tracking-tight mb-3 group-hover:text-indigo-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#A1A1A1] text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                  <span className="text-xs font-mono text-[#737373] font-medium">
                    {isExpanded ? "Click to collapse" : "Learn more & features"}
                  </span>
                  <div className="text-[#A1A1A1] group-hover:text-indigo-400 transition-colors">
                    {isExpanded ? <ArrowDown className="w-4 h-4 animate-bounce" /> : <ArrowRight className="w-4 h-4" />}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Expanded Drawer Section */}
        {expandedService && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#141414] border border-indigo-500/30 rounded-sm p-8 shadow-xl text-left"
          >
            {SERVICES.filter(s => s.id === expandedService).map((service) => (
              <div key={service.id} className="grid md:grid-cols-2 gap-8 items-center">
                {/* Text Side */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0A0A0A] border border-[#262626] text-indigo-400 rounded-sm font-mono text-[9px] uppercase tracking-wider mb-4">
                    <span>EXPLORING ARCHITECTURE</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#EDEDED] mb-4">{service.title}</h3>
                  <p className="text-[#A1A1A1] text-sm leading-relaxed mb-6">
                    {service.longDesc}
                  </p>
                  
                  {/* Action */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectServiceAndConsult(service.id);
                    }}
                    className="inline-flex items-center gap-2 bg-white text-black hover:bg-indigo-600 hover:text-white font-bold uppercase text-xs tracking-widest py-3 px-6 rounded-none cursor-pointer transition-all"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Bullets List Side */}
                <div className="bg-[#0A0A0A] border border-[#262626] p-6 rounded-sm">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#737373] mb-4">Project Capabilities:</h4>
                  <div className="flex flex-col gap-3.5">
                    {service.points.map((point, index) => (
                      <div key={index} className="flex items-start gap-3 text-sm text-[#A1A1A1]">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
