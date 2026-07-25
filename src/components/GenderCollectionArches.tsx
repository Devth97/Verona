"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface GenderCollectionArchesProps {
  onSelectGender: (cat: string) => void;
}

export default function GenderCollectionArches({ onSelectGender }: GenderCollectionArchesProps) {
  return (
    <section className="py-4 bg-luxury-cream/20 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-3xl mx-auto">
          {/* Shop for Her Compact Card */}
          <div
            onClick={() => onSelectGender("necklaces")}
            className="group relative h-[140px] sm:h-[180px] rounded-2xl overflow-hidden shadow-md border-2 border-white cursor-pointer transition-all duration-300 hover:shadow-lg active:scale-95"
          >
            <Image
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80"
              alt="Shop for Her — VERONA 18K Gold Collection"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-3 left-3 right-3 text-center space-y-1">
              <span className="text-[9px] uppercase tracking-widest text-luxury-gold font-bold block">
                Women&apos;s Edit
              </span>
              <h3 className="text-base sm:text-xl font-serif font-bold text-white leading-none">
                Shop for Her
              </h3>
              <div className="pt-1">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white bg-rose-900/90 px-3 py-1 rounded-full group-hover:bg-rose-950 transition-colors">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 text-luxury-gold" />
                </span>
              </div>
            </div>
          </div>

          {/* Shop for Him Compact Card */}
          <div
            onClick={() => onSelectGender("bracelets")}
            className="group relative h-[140px] sm:h-[180px] rounded-2xl overflow-hidden shadow-md border-2 border-white cursor-pointer transition-all duration-300 hover:shadow-lg active:scale-95"
          >
            <Image
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
              alt="Shop for Him — Unisex Silver & Gold Bands"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-3 left-3 right-3 text-center space-y-1">
              <span className="text-[9px] uppercase tracking-widest text-luxury-gold font-bold block">
                Men&apos;s & Unisex
              </span>
              <h3 className="text-base sm:text-xl font-serif font-bold text-white leading-none">
                Shop for Him
              </h3>
              <div className="pt-1">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white bg-luxury-charcoal/90 px-3 py-1 rounded-full group-hover:bg-black transition-colors">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 text-luxury-gold" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
