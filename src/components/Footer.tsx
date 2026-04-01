import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin, Instagram, X } from "lucide-react";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Logo & About */}
          <div className="space-y-8">
            <Link href="/" className="flex flex-col group">
              <span className="font-serif text-2xl font-bold tracking-tight text-white group-hover:text-accent transition-colors">
                MAXIMIZE POTENTIAL
              </span>
              <span className="font-sans text-[10px] tracking-[0.2em] font-medium text-accent uppercase -mt-1 ml-0.5">
                GROUP LLC
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Empowering visionary businesses and individuals through exceptional financial clarity and strategic excellence.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <X className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Subscription / Newsletter */}
          <div className="lg:col-span-2">
            <Newsletter />
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-lg font-bold text-accent uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h4 className="text-lg font-bold text-accent uppercase tracking-widest">Solutions</h4>
            <ul className="space-y-4">
              <li><Link href="/services#accounting" className="text-gray-400 hover:text-white transition-colors">Accounting Services</Link></li>
              <li><Link href="/services#tax" className="text-gray-400 hover:text-white transition-colors">Tax Advisory</Link></li>
              <li><Link href="/services#consulting" className="text-gray-400 hover:text-white transition-colors">Business Consulting</Link></li>
              <li><Link href="/services#cfo" className="text-gray-400 hover:text-white transition-colors">CFO Advisory</Link></li>
              <li><Link href="/services#billing" className="text-gray-400 hover:text-white transition-colors">Billing Services</Link></li>
              <li><Link href="/services#multimedia" className="text-gray-400 hover:text-white transition-colors">Multi Media Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-lg font-bold text-accent uppercase tracking-widest">Connect</h4>
            <div className="space-y-6">
              <div className="flex gap-4 items-start text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 text-accent" />
                <p className="text-sm">Lagos, Nigeria Headquarters</p>
              </div>
              <div className="flex gap-4 items-start text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0 text-accent" />
                <p className="text-sm">[Insert Phone]</p>
              </div>
              <div className="flex gap-4 items-start text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0 text-accent" />
                <p className="text-sm">info@maximizepotential.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Maximize Potential Group LLC. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link href="/legal" className="text-gray-500 hover:text-white text-sm transition-colors">Legal Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
