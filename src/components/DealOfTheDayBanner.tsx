"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Clock, ArrowRight } from "lucide-react";

interface DealOfTheDayBannerProps {
  onShopDeal: () => void;
}

export default function DealOfTheDayBanner({ onShopDeal }: DealOfTheDayBannerProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: 7, minutes: 42, seconds: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 8, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="my-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-950 via-rose-900 to-rose-950 text-white p-6 sm:p-10 border border-rose-800/60 shadow-2xl">
        {/* Decorative Glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-800/80 border border-rose-600/50 text-amber-300 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Only For Today • Flash Sale</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
              DEAL OF THE DAY
            </h2>

            <p className="text-sm text-rose-200 font-sans">
              Flat <span className="text-amber-300 font-bold text-base">30% OFF</span> on 18K Anti-Tarnish Bestsellers • Use Code: <code className="bg-white/20 px-2 py-0.5 rounded font-mono font-bold text-white">DOTD</code>
            </p>

            {/* Countdown Ticker Box */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2 text-xs">
              <span className="text-rose-300 font-semibold flex items-center gap-1">
                <Clock className="w-4 h-4 text-amber-300" /> Ends In:
              </span>
              <div className="flex gap-2 font-mono font-bold text-stone-900 text-sm">
                <div className="bg-white px-2.5 py-1 rounded-lg shadow">{String(timeLeft.hours).padStart(2, "0")}h</div>
                <div className="bg-white px-2.5 py-1 rounded-lg shadow">{String(timeLeft.minutes).padStart(2, "0")}m</div>
                <div className="bg-white px-2.5 py-1 rounded-lg shadow">{String(timeLeft.seconds).padStart(2, "0")}s</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <button
              onClick={onShopDeal}
              className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs uppercase tracking-[0.2em] rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Claim Deal Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
