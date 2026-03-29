"use client";

import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
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
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "wedding",
    title: "Wedding (Lagna Sohala)",
    description: "Our signature service. We provide end-to-end wedding management including venue decoration, mandap setup, traditional music, and premium catering. Pithe Brothers ensure your special day is executed with perfection and grace.",
    icon: Heart,
    features: ["Custom Mandap Decor", "Catering for 500+ guests", "Traditional Orchestra", "Host & Guest Management"],
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
    price: "Custom Quote",
  },
  {
    id: "engagement",
    title: "Engagement (Sakharpuda)",
    description: "Mark your commitment with an elegant engagement ceremony. We specialize in sophisticated stage setups, floral arrangements, and intimate catering that sets the perfect tone for your upcoming journey.",
    icon: CalendarCheck,
    features: ["Floral Backdrop Design", "Signature Ring Ceremony Table", "Photography/Videography Referral", "Snacks & Dinner Menu"],
    image: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1000",
    price: "Starts ₹50,000",
  },
  {
    id: "catering",
    title: "Catering Services",
    description: "Our culinary experts deliver the finest Maharashtrian and multi-cuisine experiences. We prioritize hygiene, taste, and presentation, making our catering the talk of any event in the Morshi region.",
    icon: Utensils,
    features: ["Authentic Maharashtrian Menu", "International Buffets", "Live Counters", "Professional Serving Staff"],
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1000",
    price: "From ₹300/Plate",
  },
  {
    id: "sound",
    title: "Sound & DJ Setup",
    description: "High-energy sound systems and professional DJ services to keep the party alive. We use industry-standard equipment for crystal clear sound and vibrant lighting to match the mood.",
    icon: Volume2,
    features: ["Line Array Sound Systems", "Professional Event DJs", "Fog & Smoke Machines", "Karaoke Setup"],
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000",
    price: "Starts ₹15,000",
  },
  {
    id: "music",
    title: "Orchestra / Instrumental",
    description: "Soulful live music for your traditional ceremonies. From classical instrumental groups to vibrant orchestra singers, we provide high-quality musical entertainment.",
    icon: Music,
    features: ["Live Singer Troupes", "Classical Instrumentalists", "Keyboard & Rhythm Sections", "Custom Setlists"],
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000",
    price: "Starts ₹20,000",
  },
  {
    id: "light",
    title: "Light Shows",
    description: "Transformation through illumination. Our lighting experts create magical atmospheres using LED walls, moving heads, and ambient decor lighting.",
    icon: Lightbulb,
    features: ["LED Venue Washing", "Moving Head Spotlights", "Cold Pyro Effects", "DMX Light Control"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
    price: "Starts ₹10,000",
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#FFF9F9]">
      <Navbar />
      
      {/* Header Section */}
      <section className="py-20 bg-foreground text-background text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 opacity-50" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-bold uppercase tracking-widest text-sm mb-4"
          >
            Explore Options
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 italic"
          >
            Our Professional <span className="text-primary italic">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            At Radhey Events Management, we bring your dreams to life. Every service is provided 
            with a touch of premium Indian luxury and handled with specialized care by Pithe Brothers.
          </motion.p>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                  index % 2 !== 0 && "lg:flex-row-reverse"
                )}
              >
                <div className={cn("space-y-8", index % 2 !== 0 && "lg:order-2")}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl">
                      <service.icon size={32} />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                      <p className="text-primary font-bold italic tracking-wide">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-500 leading-relaxed font-inter text-lg">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map(feature => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-secondary shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-6">
                    <Link href="/book" className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-bold hover:bg-stone-800 transition-all shadow-lg active:scale-95 group">
                      Customize This Service
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
                
                <div className={cn("relative", index % 2 !== 0 && "lg:order-1")}>
                  <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white rotate-1 hover:rotate-0 transition-transform duration-700">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -z-10" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-primary/5 rounded-[50px] pointer-events-none -z-10" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

// Helper function to concatenate class names (should use the lib/utils utility)
function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
