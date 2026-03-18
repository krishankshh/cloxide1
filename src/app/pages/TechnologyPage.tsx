import {
  Atom,
  Shield,
  Zap,
  Leaf,
  Target,
  CheckCircle,
  XCircle,
  ArrowRight,
  Beaker,
  Activity,
  Microscope,
  FileText,
  Award,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { cn } from "../components/ui/utils";
import moleculeImg from "../../assets/images/molecule.png";

export function TechnologyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* PREMIUM SCIENTIFIC HERO */}
      <section className="relative pt-[15vh] pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        {/* AMBIENT TECHNICAL RADIANCE */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(8,145,178,0.05)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] bg-cyan-50/50 rounded-full blur-[120px] pointer-events-none animate-pulse" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 px-6 py-2 bg-slate-950 text-white rounded-[0.5rem] mb-12 shadow-2xl border border-slate-800 tracking-[0.1em] relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="mono-tag !text-white opacity-90">Protocol: V7.TECH-CORE</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl lg:text-7xl font-black text-slate-950 mb-8 leading-[0.8] tracking-[0.1em] font-heading uppercase"
          >
            SELECTIVE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-500 italic font-medium tracking-tight pr-10">OXIDATION.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Engineered molecular intelligence that discriminates between pathogenic threats and healthy organic structures with absolute precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-10"
          >
            <div className="w-px h-24 bg-gradient-to-b from-cyan-500 to-transparent" />
          </motion.div>
        </div>
      </section>
      {/* MOLECULAR ARCHITECTURE - BENTO DOSSIER */}
      <section className="py-20 lg:py-48 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mono-tag text-cyan-600 mb-6">Structural Analytics</div>
              <h2 className="text-5xl lg:text-7xl font-black text-slate-950 mb-10 leading-[0.8] tracking-[0.1em] uppercase">
                THE ClO₂ <br />ARCHITECTURE
              </h2>
              <p className="text-xl text-slate-500 mb-16 leading-relaxed font-medium">
                Chlorine dioxide is a radical molecule with unique electron resonance. Its symmetrical triatomic structure ensures zero residual toxicity, prioritizing high-tier clinical safety protocols.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {[
                  { label: "Molecular Fingerprint", value: "Symmetrical Radical", icon: <Atom className="w-6 h-6" /> },
                  { label: "Selective Affinity", value: "99.9% Pathogen Targeting", icon: <Target className="w-6 h-6" /> },
                  { label: "By-Product Integrity", value: "Zero Residual Carbon", icon: <Leaf className="w-6 h-6" /> }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-8 p-8 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 hud-grid opacity-[0.03]" />
                    <div className="w-12 h-12 bg-slate-950 rounded-lg shadow-2xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-black tracking-[0.1em] text-slate-400 mb-1 uppercase">{stat.label}</div>
                      <div className="text-xl font-black text-slate-950 uppercase tracking-tight">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* DEEP RADIANCE */}
              <div className="absolute -inset-20 bg-cyan-100/30 rounded-full blur-[160px] animate-pulse" />
              
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-8 border-white group">
                <img
                  src={moleculeImg}
                  alt="ClO2 Molecular Structure"
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/10 via-transparent to-transparent" />
                
                {/* FLOATING TECHNICAL OVERLAY */}
                <div className="absolute top-8 left-8 p-6 bg-white/90 backdrop-blur-xl rounded-2xl border border-white shadow-xl">
                   <div className="text-[9px] font-black text-cyan-600 uppercase tracking-[0.1em] mb-2">Resonance</div>
                   <div className="text-2xl font-black text-slate-950 tracking-[0.1em] uppercase">ELECTRON <br />SYMMETRY</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MECHANISM: THE PRECISION SEQUENCE */}
      <section className="py-24 lg:py-48 bg-slate-950 text-white relative overflow-hidden">
        {/* SCIENTIFIC GRID OVERLAY */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(8,145,178,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(8,145,178,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan-900/20 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
            <div className="max-w-2xl">
              <div className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.1em] mb-8">Mechanism of Action</div>
              <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-[0.1em] uppercase">
                THE PRECISION <br />SEQUENCE
              </h2>
            </div>
            <p className="text-xl text-slate-400 font-medium max-w-md leading-relaxed mb-4">
              Irreversible selective oxidation engineered to terminate pathogenic threats without biological compromise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { step: "01", title: "Affinity", desc: "Targets pathogenic envelopes with molecular specificity.", icon: <Shield /> },
              { step: "02", title: "Diffusion", desc: "Rapid kinetic penetration through protective biofilms.", icon: <Zap /> },
              { step: "03", title: "Oxidize", desc: "Immediate electron theft disabling critical enzymes.", icon: <Activity /> },
              { step: "04", title: "Collapse", desc: "Total structural disintegration without resistence.", icon: <Target /> }
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="relative p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-3xl group hover:bg-white/[0.08] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -top-4 -right-4 text-7xl font-black text-cyan-500/10 group-hover:text-cyan-500/20 transition-colors uppercase italic font-heading">{m.step}</div>
                
                <div className="w-16 h-16 bg-cyan-600 rounded-xl flex items-center justify-center mb-8 shadow-2xl shadow-cyan-600/20 group-hover:scale-110 transition-transform">
                  <span className="text-white scale-110">{m.icon}</span>
                </div>
                
                <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{m.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium text-[14px]">{m.desc}</p>
                
                {/* ACTIVE ACCENT */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARATIVE DATASHEET */}
      <section className="py-24 lg:py-48 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12">
            <div className="max-w-2xl">
              <div className="text-[11px] font-black text-cyan-600 uppercase tracking-[0.1em] mb-10">Analytical Comparison</div>
              <h2 className="text-6xl lg:text-7xl font-black text-slate-950 leading-[0.9] tracking-[0.1em] uppercase mb-6">
                COMPARATIVE <br />DATASHEET
              </h2>
            </div>
            <p className="text-2xl text-slate-500 font-medium max-w-md leading-relaxed mb-4">
              A comprehensive technical audit of Bio-Tech precision against legacy chemical protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              { 
                title: "SELECTIVE TOXICITY", 
                advantage: "Radical oxidation breaking down into bio-inert salts and H2O.",
                legacy: "Formation of THMs, HAAs and carcinogenic residual compounds.",
                status: "Precision Safe"
              },
              { 
                title: "BIOFILM PENETRATION", 
                advantage: "100% saturation through extracellular polymeric substances.",
                legacy: "Inability to breach protective microbial shields effectively.",
                status: "Absolute"
              },
              { 
                title: "SUBSTRATE INTEGRITY", 
                advantage: "Neutral pH profile safe for aerospace and medical instrumentation.",
                legacy: "Oxidative corrosion causing rapid degradation of elastomer seals.",
                status: "Non-Corrosive"
              },
              { 
                title: "BIOLOGICAL RESISTANCE", 
                advantage: "Physical mechanical destruction preventing DNA adaptation.",
                legacy: "Consistent risk of developing multi-drug resistance (MDR).",
                status: "Zero Adaptation"
              }
            ].map((row, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="p-16 rounded-[4rem] border border-slate-100 bg-slate-50/30 flex flex-col h-full hover:bg-white hover:shadow-[0_80px_100px_-40px_rgba(0,0,0,0.1)] transition-all duration-700 group"
              >
                <div className="flex items-center justify-between mb-16">
                  <h3 className="text-2xl font-black text-slate-950 uppercase tracking-[0.1em]">{row.title}</h3>
                  <div className="px-6 py-2 text-[10px] font-black uppercase tracking-[0.1em] bg-cyan-950 text-cyan-400 rounded-lg shadow-2xl">
                    {row.status}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-auto">
                  <div className="space-y-6">
                    <div className="text-[10px] font-black text-cyan-600 uppercase tracking-[0.1em] flex items-center gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-cyan-600" /> BIO-TECH SYSTEM
                    </div>
                    <p className="text-slate-900 font-black text-lg leading-tight uppercase tracking-tight">{row.advantage}</p>
                  </div>
                  <div className="space-y-6">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] flex items-center gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-slate-200" /> LEGACY AGENTS
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed font-bold uppercase tracking-tight">{row.legacy}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALIDATION CALL-TO-ACTION */}
      <section className="py-24 lg:py-48 px-6 bg-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto rounded-[5rem] bg-slate-950 p-20 lg:p-40 overflow-hidden relative shadow-[0_100px_150px_-50px_rgba(0,0,0,0.4)]"
        >
          {/* TECHNICAL MESH ACCENT */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(8,145,178,0.15)_0%,transparent_70%)] opacity-50" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-20 pointer-events-none" />

          <div className="relative z-10 text-center max-w-4xl mx-auto text-white">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-2xl rounded-[1.5rem] flex items-center justify-center mx-auto mb-16 border border-white/20">
               <Microscope className="w-12 h-12 text-cyan-400" />
            </div>
            <h2 className="text-5xl lg:text-7xl font-black mb-12 leading-[0.9] tracking-[0.1em] uppercase font-heading">
              SCIENTIFICALLY <br />REPLICATED. <br />GLOBALLY VERIFIED.
            </h2>
            <p className="text-2xl text-slate-400 font-medium mb-20 leading-relaxed">
              Standardized compliance with EPA and Global Sterilization Protocols. Request our full laboratory dossier for technical verification.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button className="h-16 px-10 rounded-2xl bg-white text-slate-950 hover:bg-cyan-50 text-[11px] font-black uppercase tracking-[0.1em] shadow-xl transition-all hover:scale-105 active:scale-95 border-none">
                Technical Dossier
              </Button>
              <Button variant="outline" className="h-16 px-10 rounded-2xl border-2 border-white/20 text-white hover:bg-white/10 text-[11px] font-black uppercase tracking-[0.1em] transition-all hover:scale-105 active:scale-95">
                Scientific Counsel
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
