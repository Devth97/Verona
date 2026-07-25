"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface GenderCollectionArchesProps {
  onSelectGender: (cat: string) => void;
}

export default function GenderCollectionArches({ onSelectGender }: GenderCollectionArchesProps) {
  return (
    <section className="py-4 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact 2-Column Side-by-Side Cards (Zero Excess Scrolling) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-3xl mx-auto">
          
          {/* Gifts For Her Card */}
          <div
            onClick={() => onSelectGender("necklaces")}
            className="group relative h-[140px] sm:h-[180px] rounded-2xl overflow-hidden shadow-md border-2 border-white cursor-pointer transition-all duration-300 hover:shadow-lg active:scale-95"
          >
            <Image
              src="/images/gifts_for_her_model_1784983059091.jpg"
              alt="Shop for Her — Verona Jewellery"
              fill
              priority
              sizes="(max-width: 640px) 50vw, 384px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

            <div className="absolute bottom-3 left-3 right-3 text-center space-y-1">
              <span className="text-[9px] uppercase tracking-widest text-luxury-gold font-bold block font-sans">
                Women&apos;s Edit
              </span>
              <h3 className="text-base sm:text-xl font-serif font-bold text-white leading-none">
                Gifts For Her
              </h3>
              <div className="pt-1">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white bg-rose-900/90 px-3 py-1 rounded-full group-hover:bg-rose-950 transition-colors font-sans">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 text-luxury-gold" />
                </span>
              </div>
            </div>
          </div>

          {/* Gifts For Him Card */}
          <div
            onClick={() => onSelectGender("bracelets")}
            className="group relative h-[140px] sm:h-[180px] rounded-2xl overflow-hidden shadow-md border-2 border-white cursor-pointer transition-all duration-300 hover:shadow-lg active:scale-95"
          >
            <Image
              src="/images/gifts_for_him_model_1784983080454.jpg"
              alt="Shop for Him — Verona Jewellery"
              fill
              priority
              sizes="(max-width: 640px) 50vw, 384px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

            <div className="absolute bottom-3 left-3 right-3 text-center space-y-1">
              <span className="text-[9px] uppercase tracking-widest text-luxury-gold font-bold block font-sans">
                Men&apos;s & Unisex
              </span>
              <h3 className="text-base sm:text-xl font-serif font-bold text-white leading-none">
                Gifts For Him
              </h3>
              <div className="pt-1">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white bg-luxury-charcoal/90 px-3 py-1 rounded-full group-hover:bg-black transition-colors font-sans">
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
