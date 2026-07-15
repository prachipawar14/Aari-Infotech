import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

interface ContactProps {
  selectedServiceId?: string | null;
  onClearSelectedService?: () => void;
}

export default function Contact({ selectedServiceId, onClearSelectedService }: ContactProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (selectedServiceId) {
      let serviceName = "Next-Gen Web & App Development";
      if (selectedServiceId === "ai-auto") serviceName = "Intelligent AI Automation";
      if (selectedServiceId === "bus-auto") serviceName = "Business Process Automation";
      
      setForm(prev => ({
        ...prev,
        message: `Hi, I would like to inquire about your "${serviceName}" service. I'd love to learn more about how this can optimize our workflow.`
      }));
      
      if (onClearSelectedService) {
        onClearSelectedService();
      }
    }
  }, [selectedServiceId, onClearSelectedService]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) {
      setSubmitStatus("error");
      setErrorMessage("All fields are required to submit your message.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Server responded with an error. Please try again.");
      }
    } catch (err: any) {
      setSubmitStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please check your network connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-[#262626] px-4" id="contact">
      <div className="max-w-7xl mx-auto relative text-left">
        {/* Dynamic glow backdrops */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-indigo-900/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-950/5 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-[10px] font-mono tracking-[0.2em] text-[#737373] uppercase mb-3">GET IN TOUCH</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EDEDED] mb-4">
            Contact Us
          </h2>
          <p className="text-[#A1A1A1] text-base leading-relaxed">
            Have a project in mind or need tailored operations engineering? Drop us a line and let's craft an elite, custom solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start relative z-10">
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#141414] border border-[#262626] rounded-sm p-8 space-y-6">
              <h3 className="text-lg font-bold text-white tracking-tight border-b border-[#262626] pb-4">
                Office Information
              </h3>
              
              <div className="space-y-4 font-mono text-xs text-[#A1A1A1]">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#0A0A0A] border border-[#262626] text-indigo-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-[#525252] font-bold mb-1">Email</p>
                    <a href="mailto:info@aariinfotech.com" className="text-white hover:text-indigo-400 transition-colors">
                      info@aariinfotech.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#0A0A0A] border border-[#262626] text-indigo-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-[#525252] font-bold mb-1">Phone</p>
                    <a href="tel:+1234567890" className="text-white hover:text-indigo-400 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#0A0A0A] border border-[#262626] text-indigo-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-[#525252] font-bold mb-1">HQ Location</p>
                    <p className="text-white">Silicon Valley, California</p>
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="pt-4 border-t border-[#262626] flex items-center justify-between text-[10px] font-mono text-[#525252]">
                <span>Response Time: <span className="text-indigo-400">&lt; 24h</span></span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#141414] border border-[#262626] rounded-sm p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg font-bold text-white tracking-tight border-b border-[#262626] pb-4 mb-6">
                Inquiry Form
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {submitStatus === "success" && (
                  <div className="bg-emerald-950/20 border border-emerald-900/50 p-4 rounded-sm flex items-start gap-3 text-emerald-400 text-xs">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-bold mb-1">Message Sent Successfully</p>
                      <p className="text-[#A1A1A1]">Thank you for reaching out. An operations engineer will contact you shortly.</p>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-950/20 border border-red-900/50 p-4 rounded-sm flex items-start gap-3 text-red-400 text-xs">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-bold mb-1">Submission Failed</p>
                      <p className="text-[#A1A1A1]">{errorMessage}</p>
                    </div>
                  </div>
                )}

                {/* Name & Email (Dual Row) */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#737373] mb-1.5 font-bold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full bg-[#0A0A0A] border border-[#262626] focus:border-indigo-500 rounded-sm py-2.5 px-3.5 text-xs text-white outline-none transition-colors"
                      id="contact-name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#737373] mb-1.5 font-bold">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. john@enterprise.com"
                      className="w-full bg-[#0A0A0A] border border-[#262626] focus:border-indigo-500 rounded-sm py-2.5 px-3.5 text-xs text-white outline-none transition-colors"
                      id="contact-email"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[#737373] mb-1.5 font-bold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="e.g. +1 (555) 123-4567"
                    className="w-full bg-[#0A0A0A] border border-[#262626] focus:border-indigo-500 rounded-sm py-2.5 px-3.5 text-xs text-white outline-none transition-colors"
                    id="contact-phone"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[#737373] mb-1.5 font-bold">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your system requirements, timeline, or operational hurdles..."
                    className="w-full bg-[#0A0A0A] border border-[#262626] focus:border-indigo-500 rounded-sm py-2.5 px-3.5 text-xs text-white outline-none transition-colors resize-none leading-relaxed"
                    id="contact-message"
                  />
                </div>

                {/* Action button */}
                <div className="pt-4 border-t border-[#262626]">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-indigo-600 hover:text-white disabled:bg-indigo-950/40 disabled:text-[#737373] py-4 px-8 font-bold uppercase text-xs tracking-widest transition-all cursor-pointer"
                    id="contact-submit"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 shrink-0" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
