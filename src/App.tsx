import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Scroll into view helper
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    setSelectedServiceId(null); // Reset when navigating manually
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Callback when user selects "Inquire About This Service" from the Services card list
  const handleSelectServiceAndConsult = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setActiveSection("contact");
    
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Automatically monitor page scroll to update active navbar items
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "services", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-slate-100 font-sans selection:bg-indigo-500 selection:text-slate-950 overflow-x-hidden antialiased">
      {/* Absolute top glowing background anchor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.07)_0%,transparent_60%)] pointer-events-none" />

      {/* Global Navbar */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Single-Screen Sections */}
      <main className="relative">
        {/* Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* Services Section */}
        <Services onSelectServiceAndConsult={handleSelectServiceAndConsult} />

        {/* Contact Section */}
        <Contact 
          selectedServiceId={selectedServiceId}
          onClearSelectedService={() => setSelectedServiceId(null)}
        />
      </main>

      {/* Corporate Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
