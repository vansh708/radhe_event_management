"use client";

import { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { motion } from "framer-motion";
import { 
  Users, 
  Layers, 
  TrendingUp, 
  BarChart3, 
  CheckCircle2, 
  Clock, 
  XCircle,
  MoreVertical,
  Plus,
  Search,
  Filter,
  Calendar,
  IndianRupee,
  LayoutDashboard
} from "lucide-react";
import { cn } from "@/lib/utils";

const adminStats = [
  { label: "Total Revenue", value: "₹ 12.5L", icon: IndianRupee, color: "bg-green-100 text-green-600", trend: "+12.5%" },
  { label: "New Bookings", value: "24", icon: Layers, color: "bg-blue-100 text-blue-600", trend: "+5%" },
  { label: "Active Clients", value: "150+", icon: Users, color: "bg-purple-100 text-purple-600", trend: "+8%" },
  { label: "Avg Rating", value: "4.9", icon: BarChart3, color: "bg-yellow-100 text-yellow-600", trend: "Stable" },
];

const allBookings = [
  { id: "BK-8902", client: "Rahul Deshmukh", service: "Wedding", date: "Dec 15", status: "Approved", amount: "₹ 2.5L" },
  { id: "BK-9012", client: "Sneha Patil", service: "Engagement", date: "Jan 05", status: "Pending", amount: "₹ 75k" },
  { id: "BK-7721", client: "Amit Pawar", service: "Sound & DJ", date: "Oct 22", status: "Rejected", amount: "₹ 15k" },
  { id: "BK-4432", client: "Priya Kulkarni", service: "Birthday", date: "Nov 10", status: "Approved", amount: "₹ 45k" },
];

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <main className="min-h-screen pt-24 bg-[#FFF9F9]">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Admin Sidebar Navigation */}
            <aside className="lg:w-64 space-y-2">
                <div className="bg-white rounded-3xl shadow-xl border border-secondary/10 p-6 mb-8 text-center bg-gradient-to-br from-primary/5 to-transparent">
                    <div className="w-16 h-16 bg-foreground text-background rounded-2xl flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg">
                        PB
                    </div>
                    <h4 className="font-bold text-foreground">Pithe Brothers</h4>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Main Admin</p>
                </div>

                {[
                    { id: "overview", label: "Overview", icon: LayoutDashboard },
                    { id: "bookings", label: "Manage Bookings", icon: Layers, count: 24 },
                    { id: "services", label: "My Services", icon: TrendingUp },
                    { id: "staff", label: "Staff Portal", icon: Users },
                    { id: "settings", label: "Cloud Settings", icon: BarChart3 },
                ].map(tab => (
                    <button 
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                            "w-full flex items-center justify-between p-4 rounded-2xl font-bold text-sm transition-all group",
                            activeTab === tab.id ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105" : "bg-white border border-secondary/5 text-gray-500 hover:bg-secondary/10 hover:text-foreground"
                        )}
                    >
                        <div className="flex items-center gap-3">
                            <tab.icon size={18} />
                            <span>{tab.label}</span>
                        </div>
                        {tab.count && <span className={cn("px-2 py-0.5 rounded-full text-[10px] bg-secondary text-foreground", activeTab === tab.id && "bg-white")}>{tab.count}</span>}
                    </button>
                ))}
            </aside>

            {/* Admin Content Area */}
            <section className="flex-1 space-y-10">
                
                {/* Dashboard Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    {adminStats.map(stat => (
                        <div key={stat.label} className="bg-white p-6 rounded-[32px] border border-secondary/10 shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-all">
                            <div className={cn("inline-flex p-3 rounded-2xl mb-4 shadow-sm", stat.color)}>
                                <stat.icon size={20} />
                            </div>
                            <h5 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</h5>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-bold text-foreground font-playfair">{stat.value}</span>
                                <span className="text-[10px] font-bold text-green-500">{stat.trend}</span>
                            </div>
                            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full -translate-y-12 translate-x-12 blur-2xl group-hover:scale-150 transition-transform" />
                        </div>
                    ))}
                </div>

                {/* Main Viewport */}
                <div className="bg-white rounded-[40px] shadow-2xl border border-secondary/10 overflow-hidden bg-gradient-to-b from-white to-[#FFF9F9]">
                    <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <h3 className="text-2xl font-bold italic translate-y-2">Revenue & Booking Flow</h3>
                            <div className="flex divide-x divide-gray-200 gap-4 mt-2">
                                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Live Updates</span>
                                <span className="text-[10px] uppercase font-bold text-secondary tracking-widest pl-4">Season Peak: Dec 2026</span>
                            </div>
                        </div>
                        <div className="flex gap-3 w-full md:w-auto">
                            <div className="relative flex-1 md:w-64">
                                <input type="text" placeholder="Search booking..." className="w-full bg-gray-50 border border-secondary/10 rounded-xl py-3 pl-10 pr-4 text-sm outline-none focus:border-primary transition-all" />
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                            </div>
                            <button className="p-3 bg-white border border-secondary/10 rounded-xl hover:bg-secondary/10 transition-all text-gray-400"><Filter size={20} /></button>
                            <button className="bg-primary text-white p-3 rounded-xl shadow-lg shadow-primary/20 hover:bg-accent transition-all"><Plus size={20} /></button>
                        </div>
                    </div>

                    <div className="p-0 overflow-x-auto min-h-[400px]">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50/50 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 font-inter">
                                <tr>
                                    <th className="px-8 py-6">Reference</th>
                                    <th className="px-6 py-6">Customer Name</th>
                                    <th className="px-6 py-6">Event Service</th>
                                    <th className="px-6 py-6">Scheduled Date</th>
                                    <th className="px-6 py-6 text-right">Status / Approval</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 font-inter text-sm">
                                {allBookings.map(b => (
                                    <tr key={b.id} className="hover:bg-primary/[0.02] transition-all group">
                                        <td className="px-8 py-6 font-bold text-primary">{b.id}</td>
                                        <td className="px-6 py-6 font-medium text-foreground">{b.client}</td>
                                        <td className="px-6 py-6 font-bold flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-secondary shadow-sm" />
                                            {b.service}
                                        </td>
                                        <td className="px-6 py-6 text-gray-500 whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={14} className="text-secondary" />
                                                {b.date}
                                            </div>
                                        </td>
                                        <td className="px-6 py-6 text-right relative">
                                            <div className="flex items-center justify-end gap-3">
                                                 <div className={cn(
                                                     "px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border",
                                                     b.status === "Approved" ? "bg-green-50 text-green-600 border-green-100" :
                                                     b.status === "Pending" ? "bg-yellow-50 text-yellow-600 border-yellow-100" :
                                                     "bg-red-50 text-red-600 border-red-100"
                                                 )}>
                                                     {b.status}
                                                 </div>
                                                 <button className="p-1 hover:bg-gray-100 rounded-lg text-gray-400 transition-colors">
                                                     <MoreVertical size={16} />
                                                 </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="p-8 text-center mt-12 mb-8 group cursor-pointer">
                            <div className="text-primary font-bold text-xs uppercase tracking-widest border-b-2 border-primary/20 hover:border-primary inline-block pb-1 transition-all">Download Detailed Revenue Report (PDF)</div>
                        </div>
                    </div>
                </div>

                {/* Recent Feed / Logs */}
                <div className="bg-foreground text-background p-8 rounded-[40px] shadow-2xl relative overflow-hidden group">
                     {/* Decorative Graphics */}
                     <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                     <div className="flex items-center justify-between mb-8">
                         <h4 className="text-secondary font-bold uppercase tracking-widest text-xs">Real-time Activity</h4>
                         <span className="flex items-center gap-2 text-[10px] font-bold text-green-500">
                             <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                             CONNECTED TO CLOUD
                         </span>
                     </div>
                     <div className="space-y-6">
                         {[
                             { text: "New booking request received for BK-9012 from Sneha Patil", time: "2 min ago", icon: Layers },
                             { text: "Staff Assigned: Rahul Pithe assigned catering for BK-8902", time: "1 hour ago", icon: Users },
                             { text: "Payment Confirmed: ₹ 50,000 received for BK-8902", time: "4 hours ago", icon: IndianRupee },
                         ].map((log, i) => (
                             <div key={i} className="flex gap-4 items-start border-l-2 border-secondary/20 pl-4 py-1 hover:border-secondary transition-all group">
                                 <log.icon size={16} className="text-secondary mt-0.5" />
                                 <div className="flex flex-col">
                                     <p className="text-xs text-gray-300 font-inter">{log.text}</p>
                                     <span className="text-[10px] text-gray-500 font-bold uppercase mt-1">{log.time}</span>
                                 </div>
                             </div>
                         ))}
                     </div>
                </div>

            </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
