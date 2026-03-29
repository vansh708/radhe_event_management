"use client";

import { motion } from "framer-motion";
import { 
  Heart, 
  Music, 
  Utensils, 
  Cake, 
  Mic2, 
  Volume2, 
  Lightbulb, 
  CalendarCheck,
  Users,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Wedding (Lagna Sohala)",
    description: "Tailored weddings blending tradition and elegance. We handle everything from mandap to rituals.",
    icon: Heart,
    color: "bg-pink-100 text-pink-600",
    price: "Custom Packages",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Engagement (Sakharpuda)",
    description: "Start your journey with a memorable engagement ceremony. Elegant floral and stage decor.",
    icon: CalendarCheck,
    color: "bg-blue-100 text-blue-600",
    price: "Starts ₹50k",
    image: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Naming Ceremony (Barse)",
    description: "A joyful celebration for your new family member with charming decorations and catering.",
    icon: Users,
    color: "bg-purple-100 text-purple-600",
    price: "Starts ₹30k",
    image: "https://images.unsplash.com/photo-1519225421980-619bad15479e?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Catering Services",
    description: "Exquisite Indian cuisine and international flavors served with hospitality excellence.",
    icon: Utensils,
    color: "bg-orange-100 text-orange-600",
    price: "₹300 - ₹1200 / Plate",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Birthday Parties",
    description: "Themed birthday celebrations with creative decor, games, and entertainment for all ages.",
    icon: Cake,
    color: "bg-yellow-100 text-yellow-600",
    price: "Starts ₹25k",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Sound & DJ Setup",
    description: "Premium sound quality and high-energy DJ setups for every event, from weddings to parties.",
    icon: Volume2,
    color: "bg-indigo-100 text-indigo-600",
    price: "Starts ₹15k",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000",
  },
  {
      title: "Orchestra/Instrumental",
      description: "Live musical experiences with professional singers and instrumental groups for a soulful event.",
      icon: Music,
      color: "bg-indigo-100 text-indigo-600",
      price: "Starts ₹20k",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000",
  },
  {
      title: "Light Shows",
      description: "Breathtaking light arrangements that transform your venue into a magical space.",
      icon: Lightbulb,
      color: "bg-yellow-100 text-yellow-600",
      price: "Starts ₹10k",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
  },
  {
      title: "Traditional Meals",
      description: "Dohale Jevan and other traditional Maharashtrian meals served with authenticity.",
      icon: Mic2,
      color: "bg-red-100 text-red-600",
      price: "Custom",
      image: "https://images.unsplash.com/photo-1585932231552-2999aa33575c?auto=format&fit=crop&q=80&w=1000",
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-secondary font-bold uppercase tracking-widest text-sm mb-4"
          >
            What We Do
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
          >
            Our <span className="text-primary italic">Premium</span> Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 font-inter leading-relaxed"
          >
            Whether it's a grand traditional wedding or a vibrant party, we bring professional 
            expertise and Indian hospitality to every celebration we manage.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#FFF9F9] rounded-3xl overflow-hidden border border-secondary/10 hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/10 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex flex-col gap-1">
                  <span className="text-white font-bold text-xl">{service.title}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-secondary text-xs uppercase tracking-widest font-bold font-inter bg-black/40 px-2.5 py-1 rounded backdrop-blur-sm border border-secondary/30">
                        {service.price}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 gap-4">
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center p-3 opacity-80 group-hover:opacity-100 transition-opacity", service.color)}>
                  <service.icon size={28} />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed font-inter line-clamp-3">
                  {service.description}
                </p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <Link
                    href="/book"
                    className="text-sm font-bold text-primary group-hover:text-accent flex items-center gap-2 transition-colors uppercase tracking-widest"
                  >
                    Quick Book
                    <div className="w-6 h-px bg-primary group-hover:w-10 transition-all" />
                  </Link>
                  <Link 
                    href={`/services#${service.title.toLowerCase().split(' ')[0]}`}
                    className="text-[10px] uppercase font-bold text-gray-400 hover:text-foreground transition-colors tracking-widest bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100"
                   >
                     View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 bg-foreground text-background px-10 py-5 rounded-full font-bold hover:bg-primary transition-all shadow-xl hover:shadow-primary/40 active:scale-95 group"
          >
            SEE ALL SERVICES
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
