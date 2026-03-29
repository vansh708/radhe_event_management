"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kulkarni",
    role: "Happy Father",
    content: "The wedding management by Pithe Brothers was flawless. From the catering to the DJ setup, everything was top-notch. Highly recommended in Amravati!",
    rating: 5,
  },
  {
    name: "Prita Deshmukh",
    role: "Bride",
    content: "My dream wedding came true thanks to Radhey Events. The floral decorations and the light show were absolutely magical. Thank you so much!",
    rating: 5,
  },
  {
    name: "Sanjay Pawar",
    role: "Corporate Client",
    content: "We hired them for our company's anniversary party. The sound system and the overall vibe were perfect. Professional and elegant service.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/20 via-secondary/40 to-primary/20" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-4">Testimonials</h4>
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#FFF9F9] p-10 rounded-[40px] border border-secondary/10 relative group hover:shadow-2xl hover:shadow-primary/5 transition-all"
            >
              <div className="absolute -top-5 left-10 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <Quote size={24} fill="currentColor" />
              </div>
              
              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-secondary fill-secondary" />
                ))}
              </div>
              
              <p className="text-gray-600 font-inter italic leading-relaxed mb-8">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-secondary/10 pt-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center font-bold text-primary">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-foreground">{t.name}</h5>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
