import {
  Bed,
  Building2,
  Waves,
  Stethoscope,
  Droplet,
  Shield,
  FileCheck,
  Trash2,
  Truck,
  Wind,
  Beaker,
  Users,
  CheckCircle,
  ArrowRight,
  MapPin,
  Microscope,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { cn } from "../components/ui/utils";
import ventilationImg from "../../assets/images/ventilation.png";
import industrialImg from "../../assets/images/industrial.png";
import liquidActionImg from "../../assets/images/liquid_action.png";

export function ApplicationsPage() {
  const applications = [
    {
      icon: Bed,
      title: "Patient Wards",
      category: "Clinical",
      desc: "High-level disinfection for bed frames, mattresses, and high-touch patient surfaces.",
      image: "https://images.unsplash.com/photo-1710074213374-e68503a1b795",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Building2,
      title: "Operating Theatres",
      category: "Surgical",
      desc: "Ensuring sterile environments for critical surgical procedures with zero residue.",
      image: ventilationImg,
      color: "from-teal-500 to-emerald-600"
    },
    {
      icon: Stethoscope,
      title: "Sterilization Units",
      category: "Logistics",
      desc: "Medical instrument decontamination preserving utility and extending tool lifespan.",
      image: industrialImg,
      color: "from-indigo-500 to-blue-700"
    },
    {
      icon: Truck,
      title: "Emergency Fleet",
      category: "Mobile",
      desc: "Rapid turnaround disinfection for ambulances between critical patient transports.",
      image: "https://images.unsplash.com/photo-1597188558265-f0fb7428a243",
      color: "from-blue-600 to-cyan-700"
    },
    {
      icon: Microscope,
      title: "Laboratories",
      category: "Diagnostics",
      desc: "Bio-hazard control and surface sterilization in diagnostic and research environments.",
      itemIcon: Beaker,
      image: "https://images.unsplash.com/photo-1707944746058-4da338d0f827",
      color: "from-cyan-700 to-teal-800"
    },
    {
      icon: Droplet,
      title: "Facility Water",
      category: "Infrastructure",
      desc: "Legionella control and potable water disinfection across the entire hospital system.",
      image: liquidActionImg,
      color: "from-teal-600 to-cyan-500"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* PREMIUM STRATEGIC HERO */}
      <section className="relative pt-[15vh] pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        {/* AMBIENT OPERATIONAL RADIANCE */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_0%,rgba(13,148,136,0.03)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-slate-50/50 rounded-full blur-[140px] pointer-events-none animate-pulse" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 px-6 py-2 bg-slate-950 text-white rounded-[0.5rem] mb-12 shadow-2xl border border-slate-800 tracking-[0.25em] relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span className="mono-tag !text-white opacity-90">Protocol: V7.APP-DEPLOY</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl lg:text-7xl font-black text-slate-950 mb-8 leading-[0.8] tracking-[0.25em] uppercase font-heading"
          >
            UNIVERSAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500 italic font-medium tracking-tight pr-10">ERADICATION.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed mb-16"
          >
            Deploying selective oxidation architectures where clinical purity is non-negotiable. From high-consequence ICU environments to critical industrial infrastructure.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-px h-32 bg-gradient-to-b from-teal-500/50 to-transparent" />
          </motion.div>
        </div>
      </section>


      {/* STRATEGIC SECTORS - APPLICATIONS GRID */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-2xl text-left">
              <div className="text-[10px] font-black text-teal-600 uppercase tracking-[0.25em] mb-8">Application Portfolio</div>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-950 leading-[0.9] tracking-[0.25em] uppercase mb-6">
                STRATEGIC <br />SECTORS
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">Cross-sector deployment protocols engineered for absolute biological termination.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {applications.map((app, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group relative flex flex-col h-full bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:shadow-[0_60px_100px_-30px_rgba(13,148,136,0.15)] transition-all duration-700 hover:-translate-y-2 ring-1 ring-slate-100"
              >
                <div className="relative medical-glass p-1.5 rounded-xl overflow-hidden mb-4 shadow-2xl ring-1 ring-slate-100">
                  <div className="absolute inset-0 hud-grid opacity-[0.05] pointer-events-none" />
                  <div className="rounded-xl overflow-hidden relative aspect-video">
                    <img 
                      src={typeof app.image === 'string' ? app.image + "?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" : app.image} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0" 
                      alt={app.title} 
                    />
                    <div className="scan-line" />
                  </div>
                  <div className="absolute top-6 left-6 medical-glass px-4 py-1 rounded-full text-[9px] font-black text-cyan-600 uppercase tracking-[0.25em] shadow-xl border border-white/40">Sector: {app.category}</div>
                  <div className={cn("absolute bottom-6 right-6 w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br shadow-xl group-hover:rotate-6 transition-transform", app.color)}>
                    <app.icon className="w-7 h-7" />
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4">Industrial Sector {i+1}</div>
                  <h3 className="text-2xl font-black text-slate-950 mb-4 font-heading uppercase leading-tight tracking-tight">{app.title}</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed flex-1 font-medium text-[14px]">{app.desc}</p>
                  
                  <Button variant="outline" className="w-full h-14 rounded-xl border-2 border-slate-100 text-slate-950 hover:bg-slate-950 hover:text-white transition-all font-black text-[10px] uppercase tracking-[0.25em] flex items-center justify-between px-8">
                    Protocol Analysis <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CONSULTATIVE IMPLEMENTATION - SECTOR STRATEGY */}
      <section className="py-24 lg:py-48 bg-slate-50 relative overflow-hidden">
        {/* INDUSTRIAL BACKGROUND ACCENT */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-500/5 skew-x-12 transform origin-top pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-[11px] font-black text-teal-600 uppercase tracking-[0.25em] mb-10">Operational Intelligence</div>
              <h2 className="text-6xl lg:text-7xl font-black text-slate-950 mb-10 leading-[0.9] tracking-[0.25em] uppercase font-heading">CONSULTATIVE <br />IMPLEMENTATION</h2>
              <p className="text-2xl text-slate-500 mb-16 leading-relaxed font-medium">
                We deliver more than chemical agents; we engineer comprehensive clinical safety architectures tailored to institutional dynamics and high-consequence biothreats.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  "Systemic Risk Assessment",
                  "Site-Specific Protocol v2",
                  "Smart Dispensing Nexus",
                  "Efficacy Assurance Audit"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                    <div className="w-12 h-12 rounded-[1rem] bg-slate-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all duration-500">
                      <CheckCircle className="w-7 h-7" />
                    </div>
                    <span className="font-black text-slate-950 text-[10px] lg:text-[12px] uppercase tracking-[0.25em] leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-8 lg:p-16 bg-white rounded-[3rem] shadow-[0_50px_100px_-25px_rgba(0,0,0,0.1)] border-8 border-white ring-1 ring-slate-100"
            >
              <div className="text-teal-600 font-black mb-10 uppercase tracking-[0.25em] text-[10px]">Technical Request</div>
              <h3 className="text-4xl lg:text-5xl font-black text-slate-950 mb-10 uppercase leading-none tracking-[0.25em]">PROFESSIONAL <br />SITE AUDIT</h3>
              <p className="text-slate-500 mb-16 leading-relaxed text-lg lg:text-xl font-medium">
                Collaborate with our chemical engineering collective to identify high-consequence zones and engineer an optimized molecular defense strategy.
              </p>
              <Button className="h-16 px-10 rounded-2xl bg-slate-950 text-white hover:bg-teal-600 text-[11px] font-black uppercase tracking-[0.25em] w-full shadow-xl transition-all hover:scale-105 active:scale-95 border-none">
                Schedule Engineering Survey
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
