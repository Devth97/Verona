"use client";

import React from "react";
import { Store, LayoutGrid, Gift, Tag } from "lucide-react";

interface GivaFloatingNavProps {
  onOpenStoreLocator: () => void;
  onSelectCategory: (cat: string) => void;
  activeCategory: string;
}

export default function GivaFloatingNav({
  onOpenStoreLocator,
  onSelectCategory,
  activeCategory,
}: GivaFloatingNavProps) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 sm:hidden w-[92%] max-w-sm bg-white/95 backdrop-blur-md rounded-full shadow-2xl border border-stone-200 p-2 flex items-center justify-around text-stone-700 animate-in slide-in-from-bottom-6 duration-500">
      {/* Switch / Mangaluru Store */}
      <button
        onClick={onOpenStoreLocator}
        className="flex flex-col items-center gap-1 px-3 py-1 text-[10px] font-bold text-stone-700 hover:text-luxury-gold transition-colors"
      >
        <Store className="w-4 h-4 text-luxury-gold" />
        <span>Store</span>
      </button>

      <div className="h-6 w-[1px] bg-stone-200" />

      {/* Categories */}
      <button
        onClick={() => onSelectCategory("all")}
        className={`flex flex-col items-center gap-1 px-3 py-1 text-[10px] font-bold transition-colors ${
          activeCategory === "all" ? "text-luxury-gold" : "text-stone-700 hover:text-luxury-gold"
        }`}
      >
        <LayoutGrid className="w-4 h-4" />
        <span>Categories</span>
      </button>

      {/* Gifts */}
      <button
        onClick={() => onSelectCategory("necklaces")}
        className="flex flex-col items-center gap-1 px-3 py-1 text-[10px] font-bold text-stone-700 hover:text-luxury-gold transition-colors"
      >
        <Gift className="w-4 h-4 text-luxury-gold" />
        <span>Gifts</span>
      </button>

      {/* Under 999 Pill */}
      <button
        onClick={() => onSelectCategory("under-999")}
        className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-full text-[10px] font-bold transition-colors ${
          activeCategory === "under-999"
            ? "bg-luxury-charcoal text-luxury-gold"
            : "bg-rose-50 text-rose-700 hover:bg-rose-100"
        }`}
      >
        <span className="text-[9px] uppercase tracking-wider block">Under</span>
        <span className="font-extrabold text-xs leading-none">₹999</span>
      </button>
    </div>
  );
}
