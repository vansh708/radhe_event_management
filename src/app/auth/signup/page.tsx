"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { User, Lock, Mail, ChevronLeft, Phone, ShieldCheck } from "lucide-react";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-[#FFF9F9] relative overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xl bg-white rounded-[50px] shadow-2xl border border-secondary/20 p-8 md:p-12 overflow-hidden relative"
      >
        <div className="text-center mb-10">
          <Link href="/auth/login" className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-primary hover:text-accent mb-4 absolute top-8 left-8">
            <ChevronLeft size={14} /> Back to login
          </Link>
          <h2 className="text-3xl font-bold text-foreground italic mt-6 mb-2">Create Account</h2>
          <p className="text-gray-400 text-sm font-inter">Join Radhey Events Management for premium celebrations.</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative group">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 absolute left-4 top-2 z-10">First Name</label>
                <input 
                    type="text" 
                    placeholder="e.g. Rahul"
                    className="w-full pt-8 pb-3 px-4 rounded-2xl border-2 border-gray-50 focus:border-primary outline-none transition-all font-medium bg-gray-50/20"
                />
                <User className="absolute right-4 bottom-3 text-gray-300 pointer-events-none" size={18} />
              </div>

              <div className="relative group">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 absolute left-4 top-2 z-10">Last Name</label>
                <input 
                    type="text" 
                    placeholder="e.g. Pithe"
                    className="w-full pt-8 pb-3 px-4 rounded-2xl border-2 border-gray-50 focus:border-primary outline-none transition-all font-medium bg-gray-50/20"
                />
              </div>

              <div className="relative group md:col-span-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 absolute left-4 top-2 z-10">Email Address</label>
                <input 
                    type="email" 
                    placeholder="rahul@example.com"
                    className="w-full pt-8 pb-3 px-4 rounded-2xl border-2 border-gray-50 focus:border-primary outline-none transition-all font-medium bg-gray-50/20"
                />
                <Mail className="absolute right-4 bottom-3 text-gray-300 pointer-events-none" size={18} />
              </div>

              <div className="relative group md:col-span-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 absolute left-4 top-2 z-10">Mobile Number</label>
                <input 
                    type="tel" 
                    placeholder="+91 9021378216"
                    className="w-full pt-8 pb-3 px-4 rounded-2xl border-2 border-gray-50 focus:border-primary outline-none transition-all font-medium bg-gray-50/20"
                />
                <Phone className="absolute right-4 bottom-3 text-gray-300 pointer-events-none" size={18} />
              </div>

              <div className="relative group">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 absolute left-4 top-2 z-10">Password</label>
                <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full pt-8 pb-3 px-4 rounded-2xl border-2 border-gray-50 focus:border-primary outline-none transition-all font-medium bg-gray-50/20"
                />
                <Lock className="absolute right-4 bottom-3 text-gray-300 pointer-events-none" size={18} />
              </div>

              <div className="relative group">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 absolute left-4 top-2 z-10">Confirm Password</label>
                <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full pt-8 pb-3 px-4 rounded-2xl border-2 border-gray-50 focus:border-primary outline-none transition-all font-medium bg-gray-50/20"
                />
                <ShieldCheck className="absolute right-4 bottom-3 text-gray-300 pointer-events-none" size={18} />
              </div>
          </div>

          <p className="text-[11px] text-center text-gray-400 font-inter px-8">
              By creating an account, you agree to our <Link href="#" className="font-bold text-primary">Terms of Service</Link> and <Link href="#" className="font-bold text-primary">Privacy Policy</Link>.
          </p>

          <button className="w-full bg-primary text-white py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:bg-accent transition-all active:scale-[0.98] mt-4">
            Build Your First Event
          </button>
        </form>

        <div className="mt-8 text-center bg-gray-50 -mx-12 -mb-12 p-8 border-t border-gray-100 flex items-center justify-center gap-2">
            <span className="text-gray-400 text-sm">Already have an account?</span>
            <Link href="/auth/login" className="text-primary font-bold hover:text-accent underline decoration-primary/20">Sign In instead</Link>
        </div>
      </motion.div>
    </main>
  );
}
