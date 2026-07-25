"use client";

import React from "react";
import Image from "next/image";
import { Instagram, MapPin, Sparkles, Gem, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ShreeMangaladeviAboutUs() {
  return (
    <section className="py-16 bg-stone-900 text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Real Showroom Photo & Instagram Bio Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column — Real Physical Showroom Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-luxury-gold/40 group">
              <Image
                src="/images/shree_mangaladevi_showroom.jpg"
                alt="Shree Mangaladevi Jewellers Showroom Facade Hampankatta Mangaluru"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
              
              {/* Overlay Location Pill with Direct Google Maps Link */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-stone-700/80 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-luxury-gold text-xs font-bold uppercase tracking-wider">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span>Flagship Showroom</span>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/SHREE+MANGALADEVI+JEWELLERS,+Hampankatta,+Mangaluru,+Karnataka+575001/data=!4m2!3m1!1s0x3ba35a4d45d9236d:0xf5fe163198e9cb31"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold text-luxury-gold hover:underline bg-stone-900 px-2.5 py-1 rounded-md border border-luxury-gold/40 shrink-0"
                  >
                    Open Map 📍
                  </a>
                </div>
                <p className="text-xs text-stone-300 font-sans leading-snug">
                  Hampankatta, Opp Clock Tower, Mangalore 575001
                </p>
              </div>
            </div>
          </div>

          {/* Right Column — Instagram Profile & About Us Bio */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Instagram Profile Header */}
            <div className="p-6 rounded-3xl bg-stone-800/80 border border-stone-700/60 backdrop-blur-md space-y-4 shadow-xl">
              
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600">
                    <div className="w-full h-full rounded-full bg-stone-900 flex items-center justify-center border-2 border-stone-900">
                      <Instagram className="w-7 h-7 text-luxury-gold" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-white tracking-wide">
                      Shree Mangaladevi Jewellers
                    </h3>
                    <a
                      href="https://instagram.com/shreemangaladevi_jewellers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-luxury-gold hover:underline tracking-wider"
                    >
                      @shreemangaladevi_jewellers
                    </a>
                  </div>
                </div>

                <a
                  href="https://instagram.com/shreemangaladevi_jewellers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-luxury-gold hover:bg-luxury-goldHover text-stone-950 text-xs font-bold uppercase tracking-widest transition-all shadow-md inline-flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4 fill-current" />
                  <span>Follow on IG</span>
                </a>
              </div>

              {/* Instagram Stats Pill */}
              <div className="flex items-center gap-6 py-2 px-4 rounded-xl bg-stone-900/60 border border-stone-700/50 text-xs text-stone-300 font-sans">
                <div>
                  <span className="font-bold text-white">13</span> posts
                </div>
                <div className="h-4 w-px bg-stone-700" />
                <div>
                  <span className="font-bold text-white">11</span> followers
                </div>
                <div className="h-4 w-px bg-stone-700" />
                <div>
                  <span className="font-bold text-white">13</span> following
                </div>
              </div>

              {/* Specialty Category */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-stone-700/50 text-stone-300 text-[11px] font-semibold tracking-wide">
                <Gem className="w-3.5 h-3.5 text-luxury-gold" />
                <span>Jewelry / Watches</span>
              </div>

              {/* Verified Instagram Bio */}
              <blockquote className="p-4 rounded-2xl bg-stone-900/80 border-l-4 border-luxury-gold text-xs sm:text-sm text-stone-200 leading-relaxed font-serif italic">
                &ldquo;All types of gold, silver & platinum ornaments, available precious gem stones. We take custom orders for gold, silver & platinum.&rdquo;
              </blockquote>

            </div>

            {/* Legacy & Showroom Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-stone-800/40 border border-stone-800 space-y-1">
                <div className="flex items-center gap-2 text-luxury-gold text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Custom Orders Taken</span>
                </div>
                <p className="text-xs text-stone-400 font-sans">
                  Tailor-made gold, silver & platinum ornaments designed to your custom requirements.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-800/40 border border-stone-800 space-y-1">
                <div className="flex items-center gap-2 text-luxury-gold text-xs font-bold uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-luxury-gold" />
                  <span>Store Timings</span>
                </div>
                <p className="text-xs text-stone-400 font-sans">
                  10:00 AM to 8:30 PM (Monday to Saturday)
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
