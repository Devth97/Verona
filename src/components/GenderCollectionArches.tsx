"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";

interface GenderCollectionArchesProps {
  onSelectGender: (cat: string) => void;
}

export default function GenderCollectionArches({ onSelectGender }: GenderCollectionArchesProps) {
  return (
    <section className="py-10 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Palmonas Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-cinzel text-lg sm:text-2xl text-stone-900 tracking-[0.2em] uppercase font-semibold">
            SHOP BY RECIPIENT
          </h2>
        </div>

        {/* 2-Column Palmonas Style Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Gifts for Her Card */}
          <div
            onClick={() => onSelectGender("necklaces")}
            className="group flex flex-col cursor-pointer"
          >
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-lg bg-stone-100 border border-stone-200/80 transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src="/images/gifts_for_her_model_1784983059091.jpg"
                alt="Gifts For Her — Verona Jewellery"
                fill
                priority
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Palmonas Pill Footer Button */}
            <div className="mt-3 flex items-center justify-between p-4 bg-stone-50 rounded-2xl border border-stone-200/80 group-hover:bg-stone-100 transition-colors shadow-sm">
              <span className="font-serif font-bold text-stone-900 text-sm sm:text-base tracking-wide flex items-center gap-1.5">
                <span>Gifts For Her</span>
                <ChevronRight className="w-4 h-4 text-stone-900 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-700 shadow-xs">
                <ArrowRight className="w-4 h-4 text-luxury-gold" />
              </span>
            </div>
          </div>

          {/* Gifts for Him Card */}
          <div
            onClick={() => onSelectGender("bracelets")}
            className="group flex flex-col cursor-pointer"
          >
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-lg bg-stone-100 border border-stone-200/80 transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src="/images/gifts_for_him_model_1784983080454.jpg"
                alt="Gifts For Him — Verona Jewellery"
                fill
                priority
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Palmonas Pill Footer Button */}
            <div className="mt-3 flex items-center justify-between p-4 bg-stone-50 rounded-2xl border border-stone-200/80 group-hover:bg-stone-100 transition-colors shadow-sm">
              <span className="font-serif font-bold text-stone-900 text-sm sm:text-base tracking-wide flex items-center gap-1.5">
                <span>Gifts For Him</span>
                <ChevronRight className="w-4 h-4 text-stone-900 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-700 shadow-xs">
                <ArrowRight className="w-4 h-4 text-luxury-gold" />
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
