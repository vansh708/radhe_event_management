"use client";

import { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Calendar, 
  Users, 
  Utensils, 
  Music, 
  Lightbulb,
  PartyPopper,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, title: "Event Type", icon: PartyPopper },
  { id: 2, title: "Customization", icon: Utensils },
  { id: 3, title: "Details", icon: Users },
  { id: 4, title: "Review", icon: CheckCircle2 },
];

const services = [
  "Wedding (Lagna Sohala)",
  "Engagement (Sakharpuda)",
  "Naming Ceremony (Barse)",
  "Traditional Meals",
  "Birthday Party",
  "Catering Only",
  "Sound & DJ Only",
];

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    guests: "",
    catering: false,
    dj: false,
    lighting: false,
    name: "",
    mobile: "",
    email: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const updateFormData = (key: string, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const [isLoading, setIsLoading] = useState(false);

  const calculateEstimate = () => {
    let base = 25000;
    if (formData.service.includes("Wedding")) base = 150000;
    if (formData.service.includes("Engagement")) base = 75000;
    
    let extras = 0;
    if (formData.catering) extras += (parseInt(formData.guests) || 0) * 400;
    if (formData.dj) extras += 15000;
    if (formData.lighting) extras += 10000;
    
    return base + extras;
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventDetails: {
            eventType: formData.service,
            eventDate: formData.date,
            location: "Venue to be discussed", // Placeholder
          },
          services: [
            { name: formData.service, price: calculateEstimate() }
          ],
          enhancements: {
            hasDJ: formData.dj,
            hasCatering: formData.catering,
            extraNotes: `Mobile: ${formData.mobile}, Notes: ${formData.notes}`
          },
          totalEstimate: calculateEstimate()
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        alert(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Booking Error:", error);
      alert("Failed to connect to server. Ensure backend is running.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen pt-24 bg-[#FFF9F9]">
        <Navbar />
        <section className="container mx-auto px-4 py-32 text-center max-w-2xl">
            <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white p-12 rounded-[50px] shadow-2xl border border-secondary/20"
            >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Check size={40} strokeWidth={3} />
                </div>
                <h1 className="text-4xl font-bold mb-4">Booking Received!</h1>
                <p className="text-gray-500 mb-8 font-inter">
                    Your request for <span className="text-primary font-bold">{formData.service}</span> on <span className="font-bold">{formData.date}</span> has been sent. 
                    Pithe Brothers will call you shortly on <span className="text-foreground font-bold">{formData.mobile}</span>.
                </p>
                <div className="flex gap-4 justify-center">
                    <a href="/" className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg">Back to Home</a>
                    <button onClick={() => window.print()} className="border border-secondary/30 px-8 py-3 rounded-full font-bold">Print Summary</button>
                </div>
            </motion.div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 bg-[#FFF9F9] flex flex-col">
      <Navbar />
      
      <section className="flex-1 py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Book Your <span className="text-primary">Event</span></h1>
            <p className="text-gray-500 max-w-md mx-auto italic">Plan your special moments with Radhey Events Management by Pithe Brothers.</p>
          </div>

          {/* Stepper */}
          <div className="relative mb-16 flex justify-between items-center max-w-2xl mx-auto">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 -z-10" />
            {steps.map((step) => (
              <div 
                key={step.id}
                className={cn(
                    "relative z-10 flex flex-col items-center gap-2",
                    currentStep >= step.id ? "text-primary" : "text-gray-400"
                )}
              >
                <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-lg",
                    currentStep >= step.id ? "bg-primary border-primary text-white" : "bg-white border-gray-100 text-gray-400"
                )}>
                  <step.icon size={20} />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest">{step.title}</span>
              </div>
            ))}
          </div>

          {/* Form Content */}
          <div className="bg-white rounded-[40px] shadow-2xl border border-secondary/10 overflow-hidden min-h-[500px] flex flex-col">
            <div className="p-8 md:p-12 flex-1 relative overflow-hidden">
                <AnimatePresence mode="wait">
                    {currentStep === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            <h3 className="text-2xl font-bold mb-6">Select Your Event Type</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {services.map(s => (
                                    <button 
                                        key={s}
                                        onClick={() => updateFormData("service", s)}
                                        className={cn(
                                            "p-6 text-left rounded-3xl border-2 transition-all duration-200 group relative",
                                            formData.service === s ? "border-primary bg-primary/5" : "border-gray-50 hover:border-secondary/30"
                                        )}
                                    >
                                        <span className="font-bold block tracking-tight">{s}</span>
                                        {formData.service === s && <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white"><Check size={14}/></div>}
                                    </button>
                                ))}
                            </div>
                            <div className="pt-4">
                                <label className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Event Date</label>
                                <div className="relative">
                                    <input 
                                        type="date" 
                                        className="w-full p-4 rounded-2xl border-2 border-gray-50 focus:border-primary outline-none text-lg font-medium"
                                        value={formData.date}
                                        onChange={(e) => updateFormData("date", e.target.value)}
                                    />
                                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {currentStep === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            <h3 className="text-2xl font-bold mb-6">Customize Enhancements</h3>
                            <div className="space-y-4">
                                <label className="flex items-center gap-4 p-6 rounded-3xl border-2 border-gray-50 hover:border-secondary/30 transition-all cursor-pointer group">
                                    <input 
                                        type="checkbox" 
                                        checked={formData.catering} 
                                        onChange={(e) => updateFormData("catering", e.target.checked)}
                                        className="w-6 h-6 rounded-lg text-primary accent-primary" 
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <Utensils size={18} className="text-secondary" />
                                            <span className="font-bold text-lg">Catering Services</span>
                                        </div>
                                        <p className="text-sm text-gray-400">Premium food & buffet arrangements</p>
                                    </div>
                                    <span className="text-sm font-bold text-accent italic">Pricing/Plate</span>
                                </label>

                                <label className="flex items-center gap-4 p-6 rounded-3xl border-2 border-gray-50 hover:border-secondary/30 transition-all cursor-pointer group">
                                    <input 
                                        type="checkbox" 
                                        checked={formData.dj} 
                                        onChange={(e) => updateFormData("dj", e.target.checked)}
                                        className="w-6 h-6 rounded-lg text-primary accent-primary" 
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <Music size={18} className="text-secondary" />
                                            <span className="font-bold text-lg">Sound & DJ Setup</span>
                                        </div>
                                        <p className="text-sm text-gray-400">Professional lineup with party lighting</p>
                                    </div>
                                    <span className="text-sm font-bold text-accent italic">+₹15k</span>
                                </label>

                                <label className="flex items-center gap-4 p-6 rounded-3xl border-2 border-gray-50 hover:border-secondary/30 transition-all cursor-pointer group">
                                    <input 
                                        type="checkbox" 
                                        checked={formData.lighting} 
                                        onChange={(e) => updateFormData("lighting", e.target.checked)}
                                        className="w-6 h-6 rounded-lg text-primary accent-primary" 
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <Lightbulb size={18} className="text-secondary" />
                                            <span className="font-bold text-lg">Premium Light Show</span>
                                        </div>
                                        <p className="text-sm text-gray-400">Venue transformation with LED effects</p>
                                    </div>
                                    <span className="text-sm font-bold text-accent italic">+₹10k</span>
                                </label>
                            </div>
                        </motion.div>
                    )}

                    {currentStep === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                                    <input type="text" placeholder="e.g. Rahul Pithe" className="w-full p-4 rounded-xl border-2 border-gray-50 focus:border-secondary transition-all outline-none bg-gray-50/30" value={formData.name} onChange={e => updateFormData("name", e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Mobile Number</label>
                                    <input type="tel" placeholder="e.g. 9021378216" className="w-full p-4 rounded-xl border-2 border-gray-50 focus:border-secondary transition-all outline-none bg-gray-50/30" value={formData.mobile} onChange={e => updateFormData("mobile", e.target.value)} />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Approx Guests</label>
                                    <input type="number" placeholder="Number of guests" className="w-full p-4 rounded-xl border-2 border-gray-50 focus:border-secondary transition-all outline-none bg-gray-50/30" value={formData.guests} onChange={e => updateFormData("guests", e.target.value)} />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Notes (Optional)</label>
                                    <textarea rows={4} placeholder="Tell Pithe Brothers more about your event..." className="w-full p-4 rounded-xl border-2 border-gray-50 focus:border-secondary transition-all outline-none bg-gray-50/30" value={formData.notes} onChange={e => updateFormData("notes", e.target.value)} />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {currentStep === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            <div className="bg-primary/5 p-8 rounded-[32px] border border-primary/10">
                                <h3 className="text-2xl font-bold mb-6 italic">Booking Summary</h3>
                                <div className="space-y-4 font-inter">
                                    <div className="flex justify-between border-b border-dashed border-primary/20 pb-4">
                                        <span className="text-gray-500">Service</span>
                                        <span className="font-bold">{formData.service || "Not selected"}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-dashed border-primary/20 pb-4">
                                        <span className="text-gray-500">Event Date</span>
                                        <span className="font-bold">{formData.date || "Not selected"}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-dashed border-primary/20 pb-4">
                                        <span className="text-gray-500">Guests</span>
                                        <span className="font-bold">{formData.guests || "0"}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {formData.catering && <span className="bg-white px-3 py-1 rounded-full text-xs font-bold border border-secondary/30">CATERING</span>}
                                        {formData.dj && <span className="bg-white px-3 py-1 rounded-full text-xs font-bold border border-secondary/30">SOUND & DJ</span>}
                                        {formData.lighting && <span className="bg-white px-3 py-1 rounded-full text-xs font-bold border border-secondary/30">LIGHT SHOW</span>}
                                    </div>
                                    <div className="pt-6 mt-6 border-t-2 border-primary/20 flex justify-between items-center">
                                        <span className="text-lg font-bold">Estimated Cost*</span>
                                        <span className="text-3xl font-bold text-primary">₹ {calculateEstimate().toLocaleString()}</span>
                                    </div>
                                    <p className="text-[10px] text-gray-400 italic mt-2">*Final pricing subject to specific requirement discussions with Pithe Brothers.</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="p-8 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                <button 
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2 font-bold text-gray-400 hover:text-foreground transition-all disabled:opacity-30 disabled:pointer-events-none"
                >
                    <ChevronLeft size={20} />
                    Back
                </button>
                
                {currentStep < 4 ? (
                    <button 
                        onClick={nextStep}
                        className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:bg-accent transition-all flex items-center gap-2"
                    >
                        Continue
                        <ChevronRight size={20} />
                    </button>
                ) : (
                    <button 
                        onClick={handleSubmit}
                        disabled={isLoading || !formData.service || !formData.date || !formData.name || !formData.mobile}
                        className="bg-foreground text-white px-12 py-4 rounded-full font-bold shadow-2xl hover:bg-primary transition-all flex items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Sending Request..." : "Confirm Booking"}
                        {!isLoading && (
                            <div className="w-6 h-6 bg-secondary text-foreground rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                                <Check size={14} strokeWidth={4} />
                            </div>
                        )}
                    </button>
                )}
            </div>
          </div>

          <div className="mt-8 text-center bg-secondary/10 p-4 rounded-2xl flex items-center justify-center gap-4 text-xs font-bold italic tracking-wide">
              <span>FOR EMERGENCY BOOKINGS CALL: 9021378216</span>
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
          </div>

        </div>
      </section>
      
      <Footer />
    </main>
  );
}
