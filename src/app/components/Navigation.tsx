import { Link, useLocation } from "react-router";
import { Activity, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo.png";

import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { cn } from "./ui/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Technology", path: "/technology" },
    { name: "Applications", path: "/applications" },
    { name: "Products", path: "/products" },
    { name: "Research", path: "/research" },
  ];

  return (
    <nav className={cn(
      "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-700 w-full max-w-7xl px-6",
      isScrolled ? "top-4" : "top-6"
    )}>
      <div
        className={cn(
          "w-full h-18 lg:h-20 transition-all duration-700 px-8 flex items-center justify-between overflow-hidden relative",
          "medical-glass rounded-2xl shadow-2xl bg-white/80 border border-white/20"
        )}
      >
        <div className={cn(
          "absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent transition-opacity duration-700",
          isScrolled ? "opacity-100" : "opacity-0"
        )} />
        <div className={cn(
          "absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent transition-opacity duration-700",
          isScrolled ? "opacity-100" : "opacity-0"
        )} />

        {/* BRAND - Enhanced Visibility */}
        <Link to="/" className="flex items-center gap-5 group">
          <motion.div
            animate={{
              width: isScrolled ? 56 : 72,
              height: isScrolled ? 56 : 72,
            }}
            className="flex items-center justify-center overflow-hidden"
          >
            <img src={logo} alt="ClO₂xide" className="w-full h-full object-contain" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-600 leading-none">
              Precision
            </span>
            <span className="text-sm font-black text-slate-950 tracking-tight leading-none mt-1.5 uppercase">
              Medical Bio-Tech
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-[10px] font-black uppercase tracking-[0.25em] transition-colors relative group",
                isActive(link.path) ? "text-cyan-600" : "text-slate-800 hover:text-cyan-600"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-2 left-0 h-0.5 bg-cyan-600 transition-all",
                isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
          <Link to="/contact">
            <Button className="h-11 px-8 rounded-xl bg-slate-950 text-white font-black uppercase text-[10px] tracking-[0.25em] hover:bg-cyan-600 transition-all shadow-lg hover:shadow-cyan-500/20 border-none">
              Get Started
            </Button>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-900 bg-slate-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 lg:hidden shadow-xl"
          >
            <div className="flex flex-col gap-6 pt-10">
              <div className="flex items-center gap-4 px-3 mb-8">
                <div className="w-24 h-24 overflow-hidden flex items-center justify-center">
                  <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-600">Precision</div>
                  <div className="text-sm font-black text-slate-900 uppercase">Medical Bio-Tech</div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-black text-slate-900 p-4 rounded-2xl hover:bg-slate-50 transition-all uppercase tracking-tight"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4">
                <Button className="w-full h-16 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-[0.25em] text-[12px]">
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
