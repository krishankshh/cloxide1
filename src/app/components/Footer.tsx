import { Link } from "react-router";
import { Beaker, Mail, Phone, MapPin } from "lucide-react";
import logo from "../../assets/images/logo.png";

export function Footer() {
  return (
    <footer className="bg-white text-slate-900 pt-16 pb-12 border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* ELITE BRAND BLOCK */}
          <div className="space-y-8 md:col-span-1">
            <Link to="/" className="flex items-center gap-5 group inline-flex">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all duration-700 overflow-hidden p-2.5 border border-slate-100 ring-1 ring-slate-50">
                <img src={logo} alt="cloxide logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.25em] font-black text-cyan-600 leading-none mb-1.5 animate-pulse">
                  Precision
                </span>
                <span className="text-sm uppercase font-black text-slate-900 leading-none tracking-tighter">
                  Medical Bio-Tech
                </span>
              </div>
            </Link>
            <p className="text-slate-500 text-[14px] leading-relaxed font-medium max-w-xs">
              Pioneering molecular biosecurity systems for global healthcare. Engineered for clinical absolute purity and scientific excellence.
            </p>
          </div>

          <div>
            <h3 className="text-slate-950 font-black uppercase tracking-[0.25em] text-[10px] mb-12">Ecosystem</h3>
            <ul className="space-y-5">
              {["Technology", "Healthcare", "Industrial", "Research"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-slate-500 hover:text-cyan-600 font-black uppercase tracking-[0.25em] transition-colors text-[11px]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-slate-950 font-black uppercase tracking-[0.25em] text-[10px] mb-12">Registry</h3>
            <ul className="space-y-5">
              {["Products", "Compliance", "Safety", "Applications"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-slate-500 hover:text-cyan-600 font-black uppercase tracking-[0.25em] transition-colors text-[11px]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-12">
            <div>
              <h3 className="text-slate-950 font-black uppercase tracking-[0.25em] text-[10px] mb-12">Operational Nexus</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-5 text-[13px] text-slate-500 font-medium group cursor-pointer">
                  <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-50 transition-colors shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="hover:text-cyan-600 transition-colors pt-2 uppercase tracking-wide">info@medicalbiotech.com</span>
                </div>
                <div className="flex items-start gap-5 text-[13px] text-slate-500 font-medium group">
                  <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center text-cyan-600 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="pt-2 uppercase tracking-wide">Scientific District<br />Healthcare Corridor</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.25em]">
            © {new Date().getFullYear()} Medical Bio-Tech Systems. Globally Verified Protocol.
          </p>
          <div className="flex gap-12">
            {["Privacy Protocol", "Compliance", "Ethics"].map((item) => (
              <Link key={item} to="#" className="text-slate-400 hover:text-slate-950 transition-colors text-[10px] font-black uppercase tracking-[0.25em]">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
