"use client";

import { motion } from "framer-motion";
import { CheckCircle2, UserCheck, ShieldCheck, MapPin } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  const highlights = [
    { title: "Legacy", description: "Owned by Pithe Brothers with over a decade of excellence in Morshi & Amravati.", icon: UserCheck },
    { title: "Detail-Oriented", description: "Every floral, sound, and catering detail is handled with precision.", icon: ShieldCheck },
    { title: "Deep Local Roots", description: "Based at Porgavhan, we understand the soul of Maharashtrian culture.", icon: MapPin },
    { title: "Full-Stack Care", description: "From weddings to sound & DJ setups, we manage the entire event.", icon: CheckCircle2 }
  ];

  return (
    <section id="about" className="py-24 bg-[#FFF9F9] overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="rounded-3xl shadow-2xl overflow-hidden aspect-[4/5] border-4 border-white">
                  <img src="https://images.unsplash.com/photo-1519225421980-619bad15479e?auto=format&fit=crop&q=80" alt="About Radhey Events 1" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl shadow-2xl overflow-hidden aspect-square border-4 border-white">
                  <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80" alt="About Radhey Events 2" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl shadow-2xl overflow-hidden aspect-square border-4 border-white">
                  <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80" alt="About Radhey Events 3" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl shadow-2xl overflow-hidden aspect-[4/5] border-4 border-white">
                    <img src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80" alt="About Radhey Events 4" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/5 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div className="space-y-4">
              <h4 className="text-secondary font-bold uppercase tracking-widest text-sm">About Pithe Brothers</h4>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Crafting <span className="text-primary italic">Excellence</span> <br /> 
                in Every Event
              </h2>
              <p className="text-gray-500 font-inter leading-relaxed">
                 Founded and managed by the dedicated <span className="text-foreground font-bold italic underline decoration-secondary">Pithe Brothers</span>, Radhey Events Management 
                 has become a household name in Amravati district for luxurious yet authentic celebrations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={item.title} className="flex gap-4 group">
                  <div className="p-3 bg-white rounded-2xl shadow-md group-hover:bg-primary group-hover:text-white transition-all border border-secondary/10 shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-sm uppercase tracking-wide">{item.title}</h5>
                    <p className="text-xs text-gray-400 font-inter leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-secondary/10 flex flex-col sm:flex-row items-center gap-8">
                <div className="bg-white p-6 rounded-3xl border border-secondary/20 shadow-xl flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <MapPin className="text-primary" />
                    </div>
                    <div>
                        <p className="font-bold text-sm">Porgavhan Office</p>
                        <p className="text-xs text-gray-500 font-inter italic font-medium">District Amravati, India</p>
                    </div>
                </div>
                <Link href="/book" className="text-primary font-bold border-b-2 border-primary/20 hover:border-primary pb-1 transition-all">
                    GET FOR A FREE CONSULTATION &rarr;
                </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
