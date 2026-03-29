"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#FFF9F9]">
      {/* Decorative Background Patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm border border-secondary/20 rounded-full w-fit shadow-sm">
                <Star size={16} className="text-secondary fill-secondary" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent">
                    Amravati's Premier Event Planner
                </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-foreground">
                Crafting <span className="text-primary italic">Elegant</span> <br /> 
                <span className="relative">
                    Memories
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 25 0, 50 5 T 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                    </svg>
                </span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed font-inter">
                From grand weddings to intimate celebrations, Radhey Events Management by <span className="text-foreground font-bold italic">Pithe Brothers</span> brings your vision to life with sophisticated Indian hospitality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href="/book" className="group relative bg-primary text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all overflow-hidden flex items-center justify-center gap-2 active:scale-95">
                    <span className="relative z-10">Check Availability</span>
                    <Calendar size={18} className="relative z-10" />
                    <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
                
                <Link href="/services" className="px-8 py-4 rounded-full font-bold border-2 border-secondary/30 text-foreground hover:bg-secondary/5 transition-all flex items-center justify-center gap-2 group active:scale-95">
                    Explore Services
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
            
            <div className="flex items-center gap-8 mt-10 pt-10 border-t border-secondary/10">
                <div>
                    <h4 className="text-2xl font-bold text-foreground">500+</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Events Managed</p>
                </div>
                <div className="w-px h-10 bg-secondary/20" />
                <div>
                    <h4 className="text-2xl font-bold text-foreground">9</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Premium Services</p>
                </div>
                <div className="w-px h-10 bg-secondary/20" />
                <div>
                    <h4 className="text-2xl font-bold text-foreground">10+</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Years Heritage</p>
                </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Visual Display */}
            <div className="relative z-10 aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2070" 
                    alt="Radhey Events Wedding Setup" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-[3s]"
                />
            </div>
            
            {/* Floating Accents */}
            <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl border-t-4 border-secondary max-w-[180px]"
            >
                <div className="flex gap-1 mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-secondary fill-secondary" />)}
                </div>
                <p className="text-xs font-bold italic leading-snug">"Best wedding management in Morshi district!"</p>
                <span className="text-[10px] text-gray-400 mt-2 block font-medium uppercase tracking-widest">- Satisfied Client</span>
            </motion.div>
            
            <div className="absolute -bottom-10 -left-10 z-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
