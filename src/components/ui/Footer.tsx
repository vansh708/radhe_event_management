import Link from "next/link";
import { Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background pt-20 pb-10 border-t border-secondary/20 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-secondary/30">
                R
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">
                  Radhey Events
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">
                  Management
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Crafting premium experiences for your special moments. From traditional weddings to modern DJ setups, we handle it all with elegance.
            </p>
            <div className="flex gap-4">
              <Link href="https://instagram.com/radhey_events_wala" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all border border-white/10 hover:border-primary/50 group text-white">
                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all border border-white/10 hover:border-primary/50 group text-white">
                <Facebook size={18} className="group-hover:scale-110 transition-transform" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all border border-white/10 hover:border-primary/50 group text-white">
                <Youtube size={18} className="group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-6">
            <h4 className="text-secondary font-bold uppercase tracking-widest text-xs">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Wedding (Lagna Sohala)",
                "Engagement (Sakharpuda)",
                "Naming Ceremony (Barse)",
                "Birthday Parties",
                "Catering Services",
                "Orchestra & Sound",
              ].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-secondary font-bold uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex gap-4 group cursor-pointer">
                <div className="p-2.5 bg-white/5 rounded-lg border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all shrink-0">
                  <MapPin size={18} className="text-secondary" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium mb-1">Visit Office</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    At. Post Porgavhan, Tq. Morshi,<br />
                    District Amravati, India
                  </p>
                </div>
              </li>
              <li className="flex gap-4 group cursor-pointer">
                <div className="p-2.5 bg-white/5 rounded-lg border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all shrink-0">
                  <Phone size={18} className="text-secondary" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium mb-1">Call Us Anywhere</p>
                  <p className="text-gray-400 text-xs tracking-wide">
                    +91 9021378216<br />
                    +91 9322083309
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Location Map Placeholder */}
          <div className="space-y-6">
             <h4 className="text-secondary font-bold uppercase tracking-widest text-xs">Business Hours</h4>
             <div className="bg-white/5 rounded-xl p-5 border border-white/10 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400">Mon - Sat:</span>
                  <span className="text-white font-medium italic">9:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Sunday:</span>
                    <span className="text-secondary font-bold">Open for Events</span>
                </div>
                <Link href="/book" className="block text-center bg-secondary text-foreground py-2 rounded-lg text-xs font-bold hover:bg-white transition-all mt-4 border border-secondary">
                   BOOK NOW
                </Link>
             </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-xs tracking-wide text-center">
            &copy; {currentYear} Radhey Events Management. Owned by <span className="text-white font-medium">Pithe Brothers</span>. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[11px] uppercase tracking-widest font-bold text-gray-500">
             <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
