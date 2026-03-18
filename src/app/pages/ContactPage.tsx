import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Building2, ShieldCheck, Globe, Zap, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { cn } from "../components/ui/utils";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* PREMIUM INTAKE HERO */}
      <section className="relative pt-[15vh] pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        {/* AMBIENT INTELLIGENCE RADIANCE */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_0%,rgba(2,132,199,0.03)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute top-[30%] right-[-10%] w-[800px] h-[800px] bg-slate-50/50 rounded-full blur-[160px] pointer-events-none animate-pulse" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 px-6 py-2 bg-slate-950 text-white rounded-[0.5rem] mb-12 shadow-2xl border border-slate-800 tracking-[0.1em] relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="mono-tag !text-white opacity-90">Protocol: V7.CONNECT-INT</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl lg:text-7xl font-black text-slate-950 mb-8 leading-[0.8] tracking-[0.1em] uppercase font-heading"
          >
            CLINICAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-500 italic font-medium tracking-tight pr-10">INTAKE.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed mb-16"
          >
            Connect with our medical hygiene architects to integrate ClO₂xide into your facility's safety protocols. Deploying precision biosecurity at institutional scale.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-px h-32 bg-gradient-to-b from-sky-500/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* INTAKE CHANNELS & PORTAL */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* TECHNICAL CHANNELS INFO */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="text-[11px] font-black text-sky-600 uppercase tracking-[0.1em] mb-10">Verification Channels</div>
                <h2 className="text-6xl lg:text-7xl font-black text-slate-950 leading-[0.9] tracking-[0.1em] uppercase mb-16">
                  DIRECT <br />PROTOCOLS
                </h2>
                
                <div className="space-y-16 mb-24">
                  {[
                    { icon: Mail, title: "Technical Support", info: "tech.support@cloxide.com", sub: "Response Nexus < 24 Hours" },
                    { icon: Phone, title: "Clinical Relations", info: "+1 (800) CLOXIDE", sub: "Mon-Fri 0800 - 1800 EST" },
                    { icon: MapPin, title: "Global Nexus Hub", info: "Medical Technology Park, S-400", sub: "Healthcare District, TX 75201" }
                  ].map((item, i) => (
                <div key={i} className="flex items-center gap-8 p-8 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 hud-grid opacity-[0.03]" />
                  <div className="w-12 h-12 bg-slate-950 rounded-lg flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <item.icon className="w-6 h-6 relative z-10" />
                  </div>
                  <div className="relative z-10">
                    <div className="text-[9px] font-black tracking-[0.1em] text-slate-400 mb-1 uppercase">{item.title}</div>
                    <div className="text-xl font-black text-slate-950 mb-1 uppercase tracking-tight leading-none">{item.info}</div>
                    <div className="text-[9px] font-black tracking-[0.1em] text-slate-400 opacity-60 uppercase">{item.sub}</div>
                  </div>
                </div>
                  ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="p-10 rounded-3xl bg-slate-950 text-white relative overflow-hidden shadow-[0_60px_100px_-30px_rgba(0,0,0,0.5)] border border-slate-800"
                >
                  <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(2,132,199,0.15)_0%,transparent_70%)] opacity-50" />
                  <ShieldCheck className="w-12 h-12 mb-8 text-sky-400 relative z-10" />
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tight relative z-10">ENTERPRISE COMPLIANCE</h3>
                  <p className="text-slate-400 font-medium mb-10 leading-relaxed text-base relative z-10">Full documentation for hospital procurement systems and GPO compliance verification.</p>
                  <Button className="w-full h-14 rounded-xl bg-white text-slate-950 font-black uppercase text-[10px] tracking-[0.1em] hover:bg-sky-400 hover:text-white shadow-xl transition-all relative z-10 border-none">
                    Request Credentials Dossier
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* INQUIRY PORTAL FORM */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-[3rem] p-10 lg:p-16 border-8 border-slate-50 ring-1 ring-slate-100 shadow-[0_50px_100px_-25px_rgba(0,0,0,0.1)]"
              >
                <div className="mb-20">
                  <div className="text-[11px] font-black text-sky-600 uppercase tracking-[0.1em] mb-8">Technical Intake Protocol</div>
                  <h2 className="text-5xl lg:text-6xl font-black text-slate-950 mb-8 uppercase leading-tight tracking-tight">INQUIRY <br />PORTAL</h2>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed">Please provide verifiable facility details for precise technical routing and protocol assignment.</p>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.1em] ml-2">Verified Full Name</label>
                    <input name="name" onChange={handleChange} className="w-full h-14 px-6 rounded-xl bg-slate-50 border border-slate-100 focus:border-sky-400 focus:bg-white transition-all outline-none font-black text-[12px] uppercase tracking-[0.1em] placeholder:text-slate-100" placeholder="LEAD MEDICAL CORRESPONDENT" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.1em] ml-2">Medical Institution</label>
                    <input name="organization" onChange={handleChange} className="w-full h-14 px-6 rounded-xl bg-slate-50 border border-slate-100 focus:border-sky-400 focus:bg-white transition-all outline-none font-black text-[12px] uppercase tracking-[0.1em] placeholder:text-slate-100" placeholder="FACILITY DESIGNATION" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.1em] ml-2">Clinical Email Address</label>
                    <input name="email" onChange={handleChange} className="w-full h-14 px-6 rounded-xl bg-slate-50 border border-slate-100 focus:border-sky-400 focus:bg-white transition-all outline-none font-black text-[12px] uppercase tracking-[0.1em] placeholder:text-slate-100" placeholder="VALID DOMAIN REQUIRED" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.1em] ml-2">Inquiry Classification</label>
                    <div className="relative">
                      <select name="inquiryType" onChange={handleChange} className="w-full h-14 px-6 rounded-xl bg-slate-50 border border-slate-100 focus:border-sky-400 focus:bg-white transition-all outline-none font-black text-[12px] uppercase tracking-[0.1em] appearance-none cursor-pointer">
                        <option>Protocol Consultation</option>
                        <option>Procurement / GPO</option>
                        <option>Technical Validation</option>
                        <option>Biological Audit</option>
                      </select>
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-4">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.1em] ml-2">Technical Requirements / Scope</label>
                    <textarea name="message" onChange={handleChange} rows={5} className="w-full p-6 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-400 focus:bg-white transition-all outline-none font-medium text-base resize-none placeholder:text-slate-100" placeholder="Detail clinical environment dynamics and high-touch surface density..."></textarea>
                  </div>
                  <div className="md:col-span-2 pt-6">
                    <Button type="submit" className="w-full h-14 py-4 rounded-xl bg-slate-950 text-white hover:bg-sky-600 text-[10px] font-black uppercase tracking-[0.1em] shadow-xl transition-all hover:scale-[1.02] active:scale-95 border-none group">
                      Initialize Consultation <Send className="w-4 h-4 ml-4 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                    </Button>
                    <div className="mt-12 flex items-center justify-center gap-4 text-slate-400 font-bold uppercase text-[10px] tracking-[0.1em]">
                      <ShieldCheck className="w-5 h-5 text-teal-500" /> SECURE BARKER-ENCRYPTED TRANSMISSION
                    </div>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL INFRASTRUCTURE - OPERATIONAL NEXUS */}
      <section className="py-24 lg:py-48 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(2,132,199,0.1)_0%,transparent_70%)] opacity-30" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-32">
            {[
              { title: "North America", city: "DALLAS NEXUS", stats: "Operational Distrib. v2" },
              { title: "European Region", city: "HAGUE CENTER", stats: "EU Medical Class I Ref" },
              { title: "Asia Pacific", city: "SINGAPORE LAB", stats: "Regulated Bio-Sanitation" }
            ].map((region, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="text-center"
              >
                <div className="w-24 h-24 mx-auto mb-12 bg-white/5 rounded-[2rem] flex items-center justify-center border border-white/10 backdrop-blur-xl group hover:border-sky-400 transition-all duration-500">
                  <Globe className="w-10 h-10 text-sky-400 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-[10px] font-black text-sky-400 uppercase tracking-[0.1em] mb-4">{region.title}</h3>
                <div className="text-4xl font-black mb-6 uppercase tracking-[0.1em] leading-none">{region.city}</div>
                <div className="text-slate-500 font-black uppercase text-[11px] tracking-[0.1em]">{region.stats}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
