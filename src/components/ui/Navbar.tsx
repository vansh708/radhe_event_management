"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Book Now", href: "/book" },
  { name: "About", href: "/#about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-secondary/20 py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
            R
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-foreground leading-none">
              Radhey Events
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold-muted font-bold">
              Management
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4">
             <Link 
              href="https://instagram.com/radhey_events_wala" 
              target="_blank"
              className="p-2 hover:bg-secondary/10 rounded-full transition-colors text-accent"
            >
              <Instagram size={20} />
            </Link>
            <Link 
              href="tel:9021378216"
              className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:bg-accent transition-all active:scale-95"
            >
              <Phone size={16} />
              Book Call
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-secondary/20 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium py-2 border-b border-gray-50 last:border-0"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-2">
                <Link 
                  href="tel:9021378216"
                  className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-bold shadow-md w-full justify-center"
                >
                  <Phone size={18} />
                  Book Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
