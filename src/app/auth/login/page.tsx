"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { User, Lock, Mail, ChevronRight } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-[#FFF9F9] relative overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-[50px] shadow-2xl border border-secondary/20 p-8 md:p-12"
      >
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg border-2 border-secondary/30">R</div>
            <div className="text-left">
              <h1 className="text-xl font-bold leading-none">Radhey Events</h1>
              <span className="text-[10px] uppercase font-bold tracking-widest text-secondary">Management</span>
            </div>
          </Link>
          <h2 className="text-3xl font-bold text-foreground italic mb-2">Welcome Back</h2>
          <p className="text-gray-400 text-sm font-inter">Sign in to manage your bookings and events.</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <div className="relative group">
              <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 absolute left-4 top-2 z-10">Email Address</label>
              <input 
                type="email" 
                placeholder="example@email.com"
                className="w-full pt-8 pb-3 px-4 rounded-2xl border-2 border-gray-50 focus:border-primary outline-none transition-all font-medium text-foreground bg-gray-50/20 group-hover:bg-white"
              />
              <Mail className="absolute right-4 bottom-3 text-gray-300 pointer-events-none" size={18} />
            </div>

            <div className="relative group">
              <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 absolute left-4 top-2 z-10">Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full pt-8 pb-3 px-4 rounded-2xl border-2 border-gray-50 focus:border-primary outline-none transition-all font-medium text-foreground bg-gray-50/20 group-hover:bg-white"
              />
              <Lock className="absolute right-4 bottom-3 text-gray-300 pointer-events-none" size={18} />
            </div>
          </div>

          <div className="flex items-center justify-between px-2">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded text-primary accent-primary" />
              <span className="text-xs font-bold text-gray-400 group-hover:text-foreground transition-colors">Remember Me</span>
            </label>
            <Link href="#" className="text-xs font-bold text-primary hover:text-accent border-b border-primary/20">Forgot Password?</Link>
          </div>

          <button className="w-full bg-primary text-white py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:bg-accent transition-all active:scale-[0.98] flex items-center justify-center gap-2">
            Sign In Now
            <ChevronRight size={18} />
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-100 text-center space-y-6">
           <button className="w-full flex items-center justify-center gap-3 py-3 border-2 border-gray-50 rounded-full hover:bg-gray-50 transition-all font-bold text-sm text-gray-600">
               <svg className="w-5 h-5" viewBox="0 0 24 24">
                   <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                   <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                   <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                   <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
               </svg>
               Sign in with Google
           </button>
           
           <p className="text-sm font-inter text-gray-400">
             Don't have an account? <Link href="/auth/signup" className="text-primary font-bold hover:text-accent underline decoration-primary/20">Create Free Account</Link>
           </p>
        </div>
      </motion.div>
    </main>
  );
}
