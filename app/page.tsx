"use client";

import React from 'react';
import { Cpu, Zap, Shield, Smartphone, Terminal, ChevronRight, CheckCircle, Globe } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#e5e7eb] font-mono selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* Yazılımsal Arka Plan Efekti */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Üst Menü */}
      <nav className="relative z-10 max-w-7xl mx-auto px-8 py-10 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-black text-xs shadow-[0_0_15px_rgba(37,99,235,0.4)]">T</div>
          <span className="text-xl font-black tracking-tighter uppercase italic">TICK.<span className="text-blue-500 animate-pulse">_</span></span>
        </div>
        <div className="hidden md:flex space-x-8 text-[9px] tracking-[0.3em] font-bold uppercase text-zinc-500">
          <span className="hover:text-blue-400 cursor-pointer transition flex items-center gap-2"><Globe size={10} /> Network_Live</span>
          <span className="hover:text-blue-400 cursor-pointer transition">Upgrades</span>
          <button className="text-white border border-white/20 px-6 py-2 hover:bg-white hover:text-black transition duration-300">LAUNCH_BETA</button>
        </div>
      </nav>

      <section className="relative z-10 max-w-6xl mx-auto px-8 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Sol Metin Alanı */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 text-blue-400 text-[10px] font-bold tracking-[0.4em] uppercase bg-blue-400/5 border border-blue-400/20 px-3 py-1 w-fit">
              <Terminal size
