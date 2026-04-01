"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = isScrolled || !isHome
    ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 py-0 shadow-2xl"
    : "bg-transparent py-0.5";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg} text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12 items-center">
          {/* Logo */}
          <Link href="/" className="flex flex-col group">
            <span className="font-serif text-xl font-bold tracking-tight text-white leading-tight transition-colors group-hover:text-accent">
              MAXIMIZE POTENTIAL
            </span>
            <span className="font-sans text-[10px] tracking-[0.2em] font-medium text-accent uppercase -mt-1 ml-0.5">
              GROUP LLC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-sm font-semibold hover:text-accent transition-colors tracking-wide">Home</Link>
            <Link href="/services" className="text-sm font-semibold hover:text-accent transition-colors tracking-wide">Services</Link>
            <Link href="/about" className="text-sm font-semibold hover:text-accent transition-colors tracking-wide">About</Link>
            <Link href="/contact" className="px-6 py-2.5 bg-accent text-primary text-sm font-bold rounded-full hover:bg-white hover:scale-105 transition-all shadow-lg active:scale-95">
              Work With Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-2 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-300">
          <Link href="/" className="block py-4 text-base font-medium border-b border-white/5" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/services" className="block py-4 text-base font-medium border-b border-white/5" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/about" className="block py-4 text-base font-medium border-b border-white/5" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className="block mt-6 py-4 bg-accent text-primary text-center font-bold rounded-full" onClick={() => setIsOpen(false)}>
            Work With Us
          </Link>
        </div>
      )}
    </nav>
  );
}
