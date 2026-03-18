import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Droplet,
  Beaker,
  CheckCircle,
  Shield,
  Clock,
  Leaf,
  Zap,
  AlertCircle,
  FileText,
  Download,
  ArrowRight,
  Wind,
  Factory
} from "lucide-react";
import { cn } from "../components/ui/utils";
import { Button } from "../components/ui/button";
import tabletsImg from "../../assets/images/tablets.png";
import ventilationImg from "../../assets/images/ventilation.png";
import industrialImg from "../../assets/images/industrial.png";

export function ProductsPage() {
  const products = [
    {
      id: "01",
      title: "Molecular Tablets",
      subtitle: "Effervescent Aqueous Matrix",
      desc: "Instant 99.9% pure ClO₂ generation for surface and liquid sterilization.",
      features: ["60s Activation", "Biofilm Eradication", "Non-Corrosive"],
      image: tabletsImg,
      icon: Droplet,
      color: "cyan"
    },
    {
      id: "02",
      title: "Protection Gel",
      subtitle: "Sustained Diffusion Matrix",
      desc: "Gaseous diffusion for constant 24/7 aseptic environment maintenance.",
      features: ["30-Day Activity", "Occupied Spaces", "Airborne Shield"],
      image: ventilationImg,
      icon: Wind,
      color: "teal"
    },
    {
      id: "03",
      title: "Industrial Systems",
      subtitle: "High-Volume Integration",
      desc: "Large-scale ventilation and water circuit disinfection protocols.",
      features: ["Scale Integration", "Remote Monitoring", "Total Safety"],
      image: industrialImg,
      icon: Factory,
      color: "blue"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* CONCISE DEPLOYMENT HERO */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-50/20 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-start gap-8">
            <div className="inline-flex items-center gap-4 px-4 py-1.5 bg-slate-950 text-white rounded-[0.4rem] shadow-xl border border-slate-800 tracking-[0.25em]">
               <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
               <span className="text-[9px] font-black uppercase">Protocol: V7.STORE-HUB</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-950 tracking-[0.25em] uppercase font-heading leading-none">
              MOLECULAR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-500 italic font-medium">DEPLOYMENT.</span>
            </h1>
            <p className="text-lg text-slate-500 font-medium max-w-xl">
              Precision delivery systems engineered for high-consequence medical infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* CONCISE PRODUCT GRID */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col"
              >
                <div className="h-48 relative overflow-hidden">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 medical-glass px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.25em] text-slate-950">
                    ID-{product.id}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center shadow-sm",
                      product.color === "cyan" ? "bg-cyan-50 text-cyan-600" : 
                      product.color === "teal" ? "bg-teal-50 text-teal-600" : "bg-blue-50 text-blue-600"
                    )}>
                      <product.icon className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-slate-900 leading-none mb-1 uppercase tracking-tight">{product.title}</h3>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em]">{product.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-[14px] text-slate-500 font-medium leading-relaxed mb-8 flex-1">
                    {product.desc}
                  </p>

                  <div className="space-y-3 mb-8">
                    {product.features.map(f => (
                      <div key={f} className="flex items-center gap-3 text-[11px] font-black text-slate-900 uppercase tracking-tight">
                        <CheckCircle className="w-4 h-4 text-cyan-500" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <Button className="w-full h-12 rounded-xl bg-slate-950 text-white text-[10px] font-black uppercase tracking-[0.25em] hover:bg-cyan-600 transition-all border-none">
                    Specifications <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* COMPACT MATRIX PREVIEW */}
        </div>
        <div className="bg-slate-950 py-16 lg:py-24 relative overflow-hidden text-white mt-24">
           <div className="absolute inset-0 hud-grid opacity-[0.05] pointer-events-none" />
           <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-12 items-center justify-between">
              <div className="max-w-md">
                 <div className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.25em] mb-4">Strategic Selection</div>
                 <h2 className="text-4xl lg:text-7xl font-black mb-6 uppercase tracking-[0.25em] leading-none font-heading">TECHNICAL <br />COMPARISON</h2>
                 <p className="text-slate-400 text-lg font-medium">Detailed laboratory data and material compatibility dossiers for clinical engineering teams.</p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                 <Button className="h-14 px-8 rounded-xl bg-white text-slate-950 font-black uppercase text-[10px] tracking-[0.25em] hover:bg-cyan-500 hover:text-white transition-all border-none">
                    Technical Dossier
                 </Button>
                 <Button variant="outline" className="h-14 px-8 rounded-xl border-2 border-white/20 text-white font-black uppercase text-[10px] tracking-[0.25em] hover:bg-white/10 transition-all">
                    Case Studies
                 </Button>
              </div>
           </div>
        </div>
        <div className="max-w-7xl mx-auto px-6">
        </div>
      </section>

      {/* RESOURCE FOOTER */}
      <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-10 shadow-sm">
               <FileText className="w-8 h-8 text-cyan-600" />
            </div>
            <h2 className="text-3xl font-black text-slate-950 uppercase tracking-[0.25em] mb-6">READY FOR IMPLEMENTATION?</h2>
            <p className="text-slate-500 font-medium mb-12 max-w-xl mx-auto italic">Our Clinical Collective provides comprehensive site audits and environment dynamics assessment.</p>
            <Link to="/contact">
               <Button className="h-16 px-10 rounded-2xl bg-cyan-600 text-white font-black uppercase text-[11px] tracking-[0.25em] hover:bg-slate-950 transition-all shadow-xl hover:shadow-cyan-500/20 border-none">
                  Request site audit
               </Button>
            </Link>
         </div>
      </section>
    </div>
  );
}
