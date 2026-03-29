"use client";

import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Download, 
  MessageSquare, 
  Settings, 
  User, 
  LogOut,
  ChevronRight,
  TrendingUp,
  CreditCard,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const bookings = [
  {
    id: "BK-8902",
    service: "Wedding (Lagna Sohala)",
    date: "Dec 15, 2026",
    status: "Confirmed",
    location: "Porgavhan, Morshi",
    price: "₹ 2,50,000",
    color: "bg-green-100 text-green-600",
  },
  {
    id: "BK-9012",
    service: "Sound & DJ Setup",
    date: "Jan 05, 2027",
    status: "Pending",
    location: "Amravati City",
    price: "₹ 15,000",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: "BK-7721",
    service: "Birthday Party",
    date: "Oct 22, 2025",
    status: "Completed",
    location: "Morshi",
    price: "₹ 35,000",
    color: "bg-gray-100 text-gray-600",
  }
];

export default function Dashboard() {
  return (
    <main className="min-h-screen pt-24 bg-[#FFF9F9]">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-[40px] shadow-xl border border-secondary/10 p-8 text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg overflow-hidden font-bold text-3xl text-primary">
                    RB
                </div>
                <h3 className="text-xl font-bold">Rahul Pithe</h3>
                <p className="text-xs text-gray-400 font-inter uppercase tracking-widest font-bold mt-1">Premium Member</p>
                <div className="mt-8 space-y-2">
                    <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-2xl font-bold text-sm text-foreground hover:bg-secondary/10 transition-all group">
                        <div className="flex items-center gap-3">
                            <User size={18} className="text-primary" />
                            <span>My Profile</span>
                        </div>
                        <Settings size={16} className="text-gray-300 group-hover:rotate-45 transition-transform" />
                    </button>
                    <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-2xl font-bold text-sm text-foreground hover:bg-secondary/10 transition-all">
                        <div className="flex items-center gap-3">
                            <CreditCard size={18} className="text-primary" />
                            <span>Payments</span>
                        </div>
                    </button>
                    <button className="w-full flex items-center gap-3 p-4 text-red-500 font-bold text-sm hover:bg-red-50 rounded-2xl transition-all mt-4">
                        <LogOut size={18} />
                        <span>Sign Out</span>
                    </button>
                </div>
            </div>

            <div className="bg-foreground text-background rounded-[40px] shadow-2xl p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                <h4 className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-2">Need Assistance?</h4>
                <p className="text-sm text-gray-400 font-inter mb-6">Our event planners are ready to help you.</p>
                <button className="w-full bg-white text-foreground py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all">
                   <MessageSquare size={16} />
                   Chat Now
                </button>
            </div>
          </aside>

          {/* Main Content */}
          <section className="lg:col-span-3 space-y-8">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-[32px] border border-secondary/10 shadow-lg flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                        <TrendingUp size={24} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest leading-none mb-1">Total Events</p>
                        <h4 className="text-2xl font-bold">12</h4>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-[32px] border border-secondary/10 shadow-lg flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center">
                        <CheckCircle2 size={24} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest leading-none mb-1">Completed</p>
                        <h4 className="text-2xl font-bold">09</h4>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-[32px] border border-secondary/10 shadow-lg flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center">
                        <Clock size={24} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest leading-none mb-1">Upcoming</p>
                        <h4 className="text-2xl font-bold">03</h4>
                    </div>
                </div>
            </div>

            {/* Bookings List */}
            <div className="bg-white rounded-[40px] shadow-xl border border-secondary/10 overflow-hidden">
                <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/30">
                    <div>
                        <h3 className="text-2xl font-bold italic">My Bookings</h3>
                        <p className="text-xs text-gray-400 font-inter">Manage your active and past event requests.</p>
                    </div>
                    <Link href="/book" className="bg-primary text-white px-6 py-2 rounded-full font-bold text-xs shadow-lg shadow-primary/20 hover:bg-accent transition-all">New Booking</Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
                                <th className="px-8 py-4">Booking ID</th>
                                <th className="px-6 py-4">Service</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 font-inter">
                            {bookings.map(b => (
                                <tr key={b.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-8 py-6 font-bold text-sm text-primary">{b.id}</td>
                                    <td className="px-6 py-6 font-bold text-sm">{b.service}</td>
                                    <td className="px-6 py-6 text-sm text-gray-500 whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={14} className="text-secondary" />
                                            {b.date}
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <div className={cn("px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest w-fit border", b.color)}>
                                            {b.status}
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 bg-white rounded-lg border border-gray-100 hover:border-secondary transition-all" title="Download Invoice">
                                                <Download size={16} className="text-secondary" />
                                            </button>
                                            <button className="bg-foreground text-background px-4 py-2 rounded-lg text-xs font-bold hover:bg-primary transition-all">
                                                Details
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Notification Bar */}
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-[32px] flex items-center gap-6 group cursor-pointer hover:bg-blue-100 transition-all">
                <div className="w-12 h-12 bg-blue-100 border-2 border-white text-blue-600 rounded-full flex items-center justify-center shrink-0 shadow-sm animate-bounce group-hover:animate-none">
                    <AlertCircle size={24} />
                </div>
                <div className="flex-1">
                    <h5 className="font-bold text-sm">Action Required: Complete Payment</h5>
                    <p className="text-xs text-blue-600/70 font-inter">Your booking for Sound & DJ Setup (BK-9012) requires an advance payment of ₹5,000.</p>
                </div>
                <ChevronRight size={20} className="text-blue-400 group-hover:translate-x-1 transition-transform" />
            </div>

          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
