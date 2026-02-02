"use client";

import React from 'react';
import { Terminal, ChevronRight, Cpu, Zap, Shield, Smartphone } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30">
      
      {/* Üst Menü - Minimal ve Şık */}
      <nav className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center font-black text-lg">T</div>
          <span className="text-xl font-black tracking-tighter uppercase italic">TICK._</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-[10px] tracking-[0.3em] font-bold text-zinc-500 uppercase">
          <span>Core_v1</span>
          <span>Security</span>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-500 transition tracking-normal font-bold lowercase">get_beta</button>
        </div>
      </nav>

      {/* Hero Bölümü - Afilli ama Sade */}
      <div className="max-w-6xl mx-auto px-8 pt-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-10">
            <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-white/10 px-3 py-1 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">System Online</span>
            </div>

            <h1 className="text-7xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase italic">
              Simple.<br />
              <span className="text-blue-600">Powerful.</span><br />
              Personal.
            </h1>

            <p className="text-xl text-zinc-500 max-w-md leading-relaxed">
              TICK._ Protocol, görevlerinizi oyuna dönüştüren dünyanın en hafif verimlilik aracıdır.
            </p>

            <div className="flex items-center space-x-6">
              <button className="group flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-2xl font-black text-sm hover:scale-105 transition duration-300">
                <span>START_MISSION</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition" />
              </button>
              <div className="text-zinc-600 font-mono text-xs">
                <p>Build: 2026.02</p>
                <p>Status: Stable</p>
              </div>
            </div>
          </div>

          {/* Telefon Mockup - Tertemiz */}
          <div className="relative">
            <div className="absolute -inset-20 bg-blue-600/10 blur-[100px] rounded-full"></div>
            <div className="relative w-[300px] h-[600px] bg-black border-[12px] border-zinc-900 rounded-[3rem] mx-auto shadow-2xl flex flex-col p-6">
              <div className="w-16 h-1 bg-zinc-800 mx-auto rounded-full mb-12"></div>
              
              <div className="flex-1 space-y-6">
                <div className="bg-zinc-900/50 p-5 rounded-2xl border border-white/5">
                  <p className="text-[10px] text-zinc-500 font-bold mb-3 uppercase tracking-widest font-mono">Current Task</p>
                  <p className="text-sm font-bold text-white mb-4 italic">Deploy Protocol</p>
                  <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[60%]"></div>
                  </div>
                </div>

                <div className="bg-blue-600 p-5 rounded-2xl shadow-lg shadow-blue-600/20 text-center">
                  <p className="text-white font-black text-xs tracking-tighter">+50 POINTS COLLECTED</p>
                </div>

                <div className="pt-4 space-y-3 opacity-20">
                  <div className="h-12 bg-zinc-900 rounded-xl"></div>
                  <div className="h-12 bg-zinc-900 rounded-xl"></div>
                </div>
              </div>

              <div className="h-1 w-24 bg-zinc-800 mx-auto rounded-full mt-auto"></div>
            </div>
          </div>
        </div>

        {/* Özellikler - Minimal Kartlar */}
        <div className="grid md:grid-cols-3 gap-6 mt-40">
          <Feature icon={<Cpu size={20} />} title="5.2 MB Core" desc="Ultra hafif mimari ile cihazınızı yormaz." />
          <Feature icon={<Zap size={20} />} title="Game Logic" desc="Her görev puan kazandırır ve seviye atlatır." />
          <Feature icon={<Shield size={20} />} title="No-Tracking" desc="Verileriniz sadece sizin cihazınızda kalır." />
        </div>
      </div>

      <footer className="py-20 text-center border-t border-white/5">
        <p className="text-[10px] font-bold text-zinc-700 tracking-[0.5em] uppercase">© 2026 TICK._ PROTOCOL LABS</p>
      </footer>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-10 rounded-3xl bg-zinc-950 border border-white/5 hover:border-blue-500/20 transition-all duration-500 group">
