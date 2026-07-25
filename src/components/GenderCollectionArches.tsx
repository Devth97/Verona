"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

interface GenderCollectionArchesProps {
  onSelectGender: (cat: string) => void;
}

export default function GenderCollectionArches({ onSelectGender }: GenderCollectionArchesProps) {
  return (
    <section className="py-12 bg-luxury-cream/30 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-bold flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
            <span>Curated Collections</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            Designed For Everyday Moments
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Shop for Her Card */}
          <div
            onClick={() => onSelectGender("necklaces")}
            className="group relative h-[360px] sm:h-[420px] rounded-t-[120px] rounded-b-3xl overflow-hidden shadow-xl border-4 border-white cursor-pointer transition-transform duration-500 hover:-translate-y-2"
          >
            <Image
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80"
              alt="Shop for Her — VERONA 18K Gold Collection"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-center space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold block">
                Women&apos;s Fine Jewellery
              </span>
              <h3 className="text-2xl font-serif font-bold text-white">
                Shop for Her
              </h3>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-900/90 hover:bg-rose-950 text-white text-xs font-bold rounded-full transition-all shadow-md">
                <span>Explore Collection</span>
                <ArrowRight className="w-3.5 h-3.5 text-luxury-gold" />
              </button>
            </div>
          </div>

          {/* Shop for Him / Unisex Card */}
          <div
            onClick={() => onSelectGender("bracelets")}
            className="group relative h-[360px] sm:h-[420px] rounded-t-[120px] rounded-b-3xl overflow-hidden shadow-xl border-4 border-white cursor-pointer transition-transform duration-500 hover:-translate-y-2"
          >
            <Image
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80"
              alt="Shop for Him — Unisex Silver & Gold Bands"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-center space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold block">
                Unisex & Men&apos;s Edit
              </span>
              <h3 className="text-2xl font-serif font-bold text-white">
                Shop for Him
              </h3>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-luxury-charcoal/90 hover:bg-black text-white text-xs font-bold rounded-full transition-all shadow-md">
                <span>Explore Collection</span>
                <ArrowRight className="w-3.5 h-3.5 text-luxury-gold" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
