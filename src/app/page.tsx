import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/ui/Hero";
import { ServicesSection } from "@/components/ui/ServicesSection";
import { AboutSection } from "@/components/ui/AboutSection";
import { Testimonials } from "@/components/ui/Testimonials";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <div className="relative">
        <ServicesSection />
        <AboutSection />
        <Testimonials />
        
        {/* Simple CTA Section before Footer */}
        <section className="py-20 bg-primary/5 text-center px-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="container mx-auto max-w-2xl relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 italic leading-snug">
                    Ready to Start Your <br /> <span className="text-primary">Celebration</span>?
                </h2>
                <p className="text-gray-500 mb-10 text-lg font-inter">
                    Join hundreds of satisfied families in Amravati district and let us make your next event truly unforgettable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/book" className="bg-primary text-white px-10 py-5 rounded-full font-bold shadow-xl shadow-primary/20 hover:bg-accent transition-all active:scale-95">
                        Book Your Date
                    </a>
                    <a href="tel:9021378216" className="bg-white text-foreground border-2 border-secondary/30 px-10 py-5 rounded-full font-bold hover:bg-secondary/5 transition-all active:scale-95">
                        Call Pithe Brothers
                    </a>
                </div>
            </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
