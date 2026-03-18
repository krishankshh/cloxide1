import { BookOpen, Download, ExternalLink, FileText, Users, ArrowRight, Search, Clock, Award, ShieldCheck, Microscope } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { cn } from "../components/ui/utils";

export function ResearchPage() {
  const articles = [
    {
      category: "Infection Control",
      title: "HAI Prevention Protocols (2026)",
      desc: "Systematic review of environmental disinfection strategies in high-risk isolation environments.",
      image: "https://images.unsplash.com/photo-1707944745911-64b7d6d1c31d",
      time: "12 min read"
    },
    {
      category: "Molecular Science",
      title: "Biofilm Penetration Dynamics",
      desc: "Comparative study on ClO₂ diffusion rates through EPS matrices in clinical water systems.",
      image: "https://images.unsplash.com/photo-1766297246906-210617be31a4",
      time: "15 min read"
    },
    {
      category: "Hospital Standards",
      title: "Operating Theatre Micro-Sanitation",
      desc: "Efficacy of gaseous ClO₂ in achieving log-6 reduction across non-line-of-sight surfaces.",
      image: "https://images.unsplash.com/photo-1728474372689-c3072b79806e",
      time: "10 min read"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* PREMIUM SCIENTIFIC HERO */}
      <section className="relative pt-[15vh] pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        {/* AMBIENT INTELLECTUAL RADIANCE */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(8,145,178,0.03)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute top-[30%] right-[-10%] w-[800px] h-[800px] bg-slate-50/50 rounded-full blur-[160px] pointer-events-none animate-pulse" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 px-6 py-2 bg-slate-950 text-white rounded-[0.5rem] mb-12 shadow-2xl border border-slate-800 tracking-[0.25em] relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="mono-tag !text-white opacity-90">Protocol: V7.EMP-SYSTEM</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl lg:text-7xl font-black text-slate-950 mb-8 leading-[0.8] tracking-[0.25em] font-heading uppercase"
          >
            EMPIRICAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-500 italic font-medium tracking-tight pr-10">INTEGRITY.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed mb-16"
          >
            Rigorous scientific validation documenting the efficacy and biological precision of selective oxidation solutions in clinical environments.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-px h-32 bg-gradient-to-b from-cyan-500/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* CLINICAL INSIGHTS - RESEARCH GRID */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-12">
            <div className="max-w-2xl text-left">
              <div className="text-[10px] font-black text-cyan-600 uppercase tracking-[0.25em] mb-8">Peer-Reviewed Insights</div>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-950 leading-[0.8] tracking-[0.25em] uppercase mb-6">
                CLINICAL <br />DYNAMICS
              </h2>
            </div>
            <div className="relative w-full lg:w-[400px]">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 w-6 h-6" />
              <input 
                type="text" 
                placeholder="TECHNICAL SEARCH..." 
                className="w-full h-14 pl-12 pr-6 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-cyan-400 transition-all font-black text-[11px] uppercase tracking-[0.25em] placeholder:text-slate-300 shadow-sm" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {articles.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group cursor-pointer"
              >
                <div className="relative medical-glass p-1.5 rounded-2xl overflow-hidden mb-8 shadow-2xl ring-1 ring-slate-100">
                  <div className="absolute inset-0 hud-grid opacity-[0.05] pointer-events-none" />
                  <div className="rounded-xl overflow-hidden relative aspect-[4/3]">
                    <img src={article.image + "?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0" alt={article.title} />
                    <div className="scan-line" />
                  </div>
                  <div className="absolute top-6 left-6 medical-glass px-4 py-1 rounded-full text-[9px] font-black text-cyan-600 uppercase tracking-[0.25em] shadow-xl border border-white/40">Article: {article.category}</div>
                </div>
                
                <div className="px-4">
                  <div className="flex items-center gap-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {article.time}</span>
                    <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-cyan-500" /> VERIFIED</span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-950 group-hover:text-cyan-600 transition-colors mb-6 uppercase leading-tight tracking-tight">{article.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8 text-[15px]">{article.desc}</p>
                  <div className="flex items-center gap-4 text-cyan-600 font-black uppercase text-[11px] tracking-[0.3em] group-hover:gap-6 transition-all duration-500">
                    READ PUBLICATION <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL LIBRARY - WHITE PAPERS */}
      <section className="py-16 lg:py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[10px] font-black text-cyan-600 uppercase tracking-[0.25em] mb-8">Verification Dossiers</div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-950 mb-8 leading-tight tracking-[0.25em] uppercase font-heading">TECHNICAL LIBRARY</h2>
            <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">Comprehensive scientific documentation engineered for medical directors and technical engineers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Molecular Stability & Lifecycle Nexus",
              "Substrate Compatibility Dossier (Metals & Elastomers)",
              "Cost-Benefit Audit: ClO₂ vs Legacy Systems",
              "Tertiary Care Deployment Protocols"
            ].map((title, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="p-8 bg-white rounded-2xl border border-slate-100 flex items-center justify-between group hover:border-cyan-200 transition-all duration-500 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-slate-950 group-hover:bg-slate-950 group-hover:text-cyan-400 transition-all duration-500 shadow-sm">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-950 mb-2 uppercase tracking-tight">{title}</h4>
                    <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.25em] flex items-center gap-4">
                      <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> PDF • 2.4 MB</span>
                      <span>PUBLISHED v2026</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="h-14 w-14 rounded-xl border-2 border-slate-100 flex-shrink-0 hover:bg-slate-950 hover:text-cyan-400 hover:border-slate-950 transition-all duration-500 shadow-sm">
                  <Download className="w-6 h-6 pointer-events-none" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHOLARLY CITATIONS - TECHNICAL ACKNOWLEDGMENT */}
      <section className="py-24 lg:py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-10 mb-24">
            <div className="w-20 h-20 bg-slate-950 rounded-[1.5rem] flex items-center justify-center text-cyan-400 shadow-2xl">
               <Award className="w-10 h-10" />
            </div>
            <div>
              <div className="text-[11px] font-black text-cyan-600 uppercase tracking-[0.25em] mb-4">Intellectual Property</div>
              <h2 className="text-5xl lg:text-7xl font-black text-slate-950 leading-tight tracking-[0.25em] uppercase font-heading">SCHOLARLY <br />CITATIONS</h2>
            </div>
          </div>

          <div className="overflow-hidden rounded-[5rem] border border-slate-100 shadow-[0_80px_100px_-40px_rgba(0,0,0,0.1)]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="p-16 text-left text-[11px] font-black text-slate-400 uppercase tracking-[0.25em]">Publication Index</th>
                  <th className="p-16 text-left text-[11px] font-black text-slate-400 uppercase tracking-[0.25em]">Nexus Source</th>
                  <th className="p-16 text-right text-[11px] font-black text-slate-400 uppercase tracking-[0.25em]">Index Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { title: "Broad-Spectrum Efficacy of ClO₂ in Specialized ICU Wards", journal: "Global Health Systems Nexus", year: "2025" },
                  { title: "Oxidative Termination of Pathogenic EPS Biofilms", journal: "Applied Microbiology v12", year: "2024" },
                  { title: "Clinical Atmospheric Safety in Occupied Medical Environments", journal: "Surgical Review Journal", year: "2024" },
                  { title: "Interrupting MDR-Bacteria Chain of Transmission", journal: "Epidemiology Core", year: "2023" }
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-slate-50 transition-all duration-300">
                    <td className="p-16 font-black text-slate-950 text-2xl uppercase tracking-[0.25em] leading-tight max-w-2xl">{row.title}</td>
                    <td className="p-16 text-slate-400 font-bold uppercase text-[12px] tracking-[0.25em]">{row.journal}</td>
                    <td className="p-16 text-right text-cyan-600 font-black text-2xl tracking-[0.25em]">{row.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="py-24 lg:py-48 bg-slate-950 relative overflow-hidden">
        {/* AMBIENT RADIAL RADIANCE */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(8,145,178,0.1)_0%,transparent_70%)] opacity-50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-white">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-4 px-8 py-3 bg-white/10 backdrop-blur-2xl text-cyan-400 rounded-full text-[10px] font-black mb-16 border border-white/20 uppercase tracking-[0.25em]">
               Nexus Network Collective
            </div>
            <h2 className="text-5xl lg:text-8xl font-black mb-12 leading-[0.9] tracking-[0.25em] uppercase font-heading">STAY <br />VALIDATED.</h2>
            <p className="text-2xl text-slate-400 font-medium mb-20 leading-relaxed max-w-2xl mx-auto">
              Join 5,000+ hygiene architects receiving technical updates and peer-reviewed dossier summaries. 
            </p>
            <div className="flex flex-col lg:flex-row gap-4">
              <input 
                type="email" 
                placeholder="MEDICAL EMAIL ADDRESS" 
                className="h-16 px-8 rounded-2xl bg-white text-slate-950 placeholder:text-slate-300 flex-1 focus:outline-none focus:ring-4 focus:ring-cyan-500/20 transition-all font-black text-[11px] uppercase tracking-[0.25em] border-none" 
              />
              <Button className="h-16 px-10 rounded-2xl bg-cyan-600 text-white hover:bg-white hover:text-slate-950 text-[11px] font-black uppercase tracking-[0.25em] shadow-xl transition-all hover:scale-105 active:scale-95 border-none">
                Join Collective
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
