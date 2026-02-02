"use client";

import React from 'react';
import { Terminal, ChevronRight, Cpu, Zap, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      
      {/* Navigasyon */}
      <nav className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white">T</div>
          <span className="text-xl font-black tracking-tighter uppercase italic text-white">TICK._</span>
        </div>
        <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-xs hover:bg-zinc-200 transition">LAUNCH_BETA</button>
      </nav>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-8 pt-24 pb-32 text-center lg:text-left grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase italic text-white">
            MASTER<br />YOUR<br /><span className="text-blue-600">TIME.</span>
          </h1>
          <p className="text-xl text-zinc-500 max-w-md leading-relaxed">
            Dünyanın en hafif görev protokolü. 5.2 MB ile maksimum verimlilik. [cite: 2026-02-01]
          </p>
          <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-sm tracking-widest hover:scale-105 transition shadow-2xl flex items-center mx-auto lg:mx-0">
            START PROTOCOL <ChevronRight className="ml-2" size={18} />
          </button>
        </div>

        {/* Telefon Görünümü */}
        <div className="relative mx-auto">
          <div className="w-[280px] h-[580px] bg-black border-[10px] border-zinc-900 rounded-[3rem] p-6 shadow-2xl relative z-10">
            <div className="w-12 h-1 bg-zinc-800 mx-auto rounded-full mb-10"></div>
            <div className="bg-zinc-950 border border-blue-500/20 p-5 rounded-2xl mb-4 text-left">
              <p className="text-[10px] text-blue-500 font-mono mb-2 uppercase tracking-widest">Active Task</p>
              <p className="font-bold text-white italic">Deploy to Store</p>
            </div>
            <div className="bg-blue-600 p-4 rounded-xl text-center">
              <p className="text-white font-black text-xs uppercase tracking-tighter">+100 XP</p>
            </div>
          </div>
          <div className="absolute -inset-10 bg-blue-600/10 blur-[80px] rounded-full"></div>
        </div>
      </div>

      {/* Özellikler */}
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8 pb-32">
        <div className="p-10 rounded-3xl bg-zinc-950 border border-white/5">
          <Cpu className="text-blue-500 mb-6" size={24} />
          <h3 className="text-white font-bold uppercase italic mb-2">Micro-Core</h3>
          <p className="text-zinc-500 text-sm">Ultra hafif motor, sıfır gecikme. [cite: 2026-02-01]</p>
        </div>
        <div className="p-10 rounded-3xl bg-zinc-950 border border-white/5">
          <Zap className="text-blue-500 mb-6" size={24} />
          <h3 className="text-white font-bold uppercase italic mb-2">Rewards</h3>
          <p className="text-zinc-500 text-sm">Görev tamamla, puan topla. [cite: 2026-02-01]</p>
        </div>
        <div className="p-10 rounded-3xl bg-zinc-950 border border-white/5">
          <Shield className="text-blue-500 mb-6" size={24} />
          <h3 className="text-white font-bold uppercase italic mb-2">Privacy</h3>
          <p className="text-zinc-500 text-sm">Veriler cihazında şifrelenir. [cite: 2026-02-01]</p>
        </div>
      </div>
    </div>
  );
}
