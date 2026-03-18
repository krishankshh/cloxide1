import {
  Activity,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Building2,
  Globe,
} from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { cn } from "../components/ui/utils";
import heroImg from "../../assets/images/hero.png";
import heroBg from "../../assets/images/hero_bg.png";

export function HomePage() {
  const bentoItems = [
    {
      title: "Molecular Precision",
      desc: "Our unique electrolytic generation ensures 99.9% purity ClO₂ with zero harmful byproducts.",
      icon: Activity,
      size: "lg",
      color: "bg-cyan-50 text-cyan-600",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Rapid Sterilization",
      desc: "Instant eradication of multi-drug resistant pathogens.",
      icon: Zap,
      size: "sm",
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "Clinical Trust",
      desc: "Certified for use in high-risk neonatal and surgical environments.",
      icon: Shield,
      size: "sm",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Universal Utility",
      desc: "From air purification to water sterilization and surface sanitation.",
      icon: Globe,
      size: "md",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Scalable Deployment",
      desc: "Modular systems designed for small clinics to massive industrial complexes.",
      icon: Building2,
      size: "md",
      color: "bg-slate-50 text-slate-700"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* PREMIUM CINEMATIC HERO */}
      <section className="relative pt-[15vh] pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        {/* HERO BACKGROUND IMAGE LAYER */}
        <div
          className="absolute inset-0 z-0 opacity-[0.3] pointer-events-none blur-[2px]"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        {/* AMBIENT OPERATIONAL RADIANCE */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_0%,rgba(8,145,178,0.03)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-slate-50/50 rounded-full blur-[120px] pointer-events-none animate-pulse" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-4 px-6 py-2 bg-slate-950 text-white rounded-[0.5rem] mb-12 shadow-2xl border border-slate-800 tracking-[0.1em] relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="mono-tag !text-white opacity-90">Protocol: V7.HUD-ACTIVE</span>
            </div>
            <h1 className="text-7xl lg:text-titan font-black text-slate-950 leading-[0.8] tracking-[0.1em] mb-10 font-heading uppercase">
              ABSOLUTE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-500 italic font-medium tracking-tight pr-10">PURITY.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium max-w-xl leading-relaxed mb-12">
              Aerospace-grade molecular precision engineered for the world's most high-consequence medical environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/technology">
                <Button className="h-16 px-10 rounded-2xl bg-slate-950 text-white font-black text-[11px] uppercase tracking-[0.1em] group w-full sm:w-auto hover:bg-cyan-600 transition-all shadow-xl hover:shadow-cyan-500/20 border-none">
                  View Protocol <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" className="h-16 px-10 rounded-2xl border-2 border-slate-100 bg-white text-slate-950 font-black text-[11px] uppercase tracking-[0.1em] w-full sm:w-auto hover:bg-slate-50 transition-all">
                  Solutions
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] lg:aspect-square rounded-[1rem] overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.2)] relative border border-slate-200 p-4 bg-slate-50/50 backdrop-blur-sm">
              <div className="absolute inset-0 hud-grid opacity-20 pointer-events-none" />
              <div className="absolute inset-4 rounded-xl overflow-hidden ring-1 ring-slate-200">
                <img src={heroImg} alt="Medical Professional" className="w-full h-full object-cover grayscale-0 hover:grayscale-0 transition-all duration-1000 hover:scale-105" />
              </div>
              <div className="scan-line" />

              {/* HUD OVERLAY ELEMENTS */}
              <div className="absolute top-10 right-10 flex flex-col items-end gap-3 z-20">
                <div className="px-3 py-1 bg-cyan-500/20 backdrop-blur-xl !text-slate-950 rounded border border-cyan-500/30 mono-tag text-[8px]">STATUS: MONITORING</div>
              </div>
            </div>

            {/* FLOATING DOSSIER BADGE - REDESIGNED */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-12 -left-12 medical-glass p-8 rounded-2xl max-w-[300px] hidden lg:block z-30"
            >
              <div className="flex items-center gap-6 mb-4">
                <div className="w-12 h-12 rounded-lg bg-slate-950 flex items-center justify-center text-white">
                  <Activity className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="font-black text-3xl text-slate-950 tracking-[0.1em] leading-none mb-1">99.9%</div>
                  <div className="mono-tag !text-slate-950">Purity_Index</div>
                </div>
              </div>
              <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "99.9%" }}
                  transition={{ duration: 2, delay: 1 }}
                  className="h-full bg-cyan-500"
                />
              </div>
              <p className="text-[10px] font-medium text-slate-500 leading-relaxed italic">
                Real-time molecular analysis verified across clinical network.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BENTO GRID SECTION */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Structured Performance</h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto font-medium">
              A modular approach to comprehensive sanitization, engineered for elite medical standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
            {bentoItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className={cn(
                  "relative rounded-2xl p-8 overflow-hidden group border border-slate-100 bg-white transition-all duration-700",
                  "hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-cyan-200",
                  item.size === "lg" && "md:col-span-2 md:row-span-2",
                  item.size === "md" && "md:col-span-1 md:row-span-2",
                  item.size === "sm" && "md:col-span-1 md:row-span-1"
                )}
              >
                <div className="absolute top-0 right-0 w-32 h-32 hud-grid opacity-[0.05] group-hover:opacity-10 pointer-events-none" />
                {/* ADVANCED GLASS OVERLAY */}
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Visual Background for LG tiles */}
                {item.image && (
                  <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000 scale-110 group-hover:scale-100 transform-gpu">
                    <img src={item.image} className="w-full h-full object-cover" alt="" />
                  </div>
                )}

                <div className="relative z-10 h-full flex flex-col">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                    item.color
                  )}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className={cn(
                    "font-black text-slate-900 mb-6 tracking-[0.1em] uppercase",
                    item.size === "lg" ? "text-4xl" : "text-xl"
                  )}>
                    {item.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed flex-1 font-medium text-[15px]">
                    {item.desc}
                  </p>

                  {item.size === "lg" && (
                    <Link to="/technology" className="w-fit">
                      <Button variant="ghost" className="p-0 h-auto font-black text-[12px] uppercase tracking-[0.1em] text-cyan-600 hover:text-cyan-700 mt-10 flex items-center gap-3">
                        Scientific Dossier <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                      </Button>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRE-VERIFICATION CTA - ELITE NETWORK */}
      <section className="py-24 lg:py-48 bg-slate-950 relative overflow-hidden">
        {/* AMBIENT RADIAL RADIANCE */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(8,145,178,0.12)_0%,transparent_70%)] opacity-50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-white"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 backdrop-blur-2xl text-cyan-400 rounded-full text-[9px] font-black mb-12 border border-white/20 uppercase tracking-[0.1em]">
              Operational Performance Collective
            </div>
            <h2 className="text-5xl lg:text-8xl font-black mb-12 leading-[0.9] tracking-[0.1em] uppercase font-heading">READY TO <br />ELEVATE?</h2>
            <p className="text-xl text-slate-400 font-medium mb-16 leading-relaxed max-w-2xl mx-auto">
              Connect with our clinical engineering collective for a customized molecular safety assessment of your facility's environmental dynamics.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button className="h-16 px-10 rounded-2xl bg-white text-slate-950 font-black uppercase text-[11px] tracking-[0.1em] hover:bg-cyan-500 hover:text-white shadow-xl transition-all hover:scale-105 active:scale-95 border-none">
                  Request Site Audit
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="h-16 px-10 rounded-2xl border-2 border-white/20 text-white font-black uppercase text-[11px] tracking-[0.1em] hover:bg-white/10 transition-all">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
