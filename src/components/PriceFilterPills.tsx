"use client";

import React from "react";
import { Tag, Sparkles } from "lucide-react";

interface PriceFilterPillsProps {
  activePrice: number | null;
  onSelectPrice: (maxPrice: number | null) => void;
}

export default function PriceFilterPills({ activePrice, onSelectPrice }: PriceFilterPillsProps) {
  const pills = [
    { label: "All Items", maxPrice: null },
    { label: "Under ₹999", maxPrice: 999 },
    { label: "Under ₹1,499", maxPrice: 1499 },
    { label: "Under ₹2,499", maxPrice: 2499 },
    { label: "Under ₹3,500 MAX", maxPrice: 3500 },
  ];

  return (
    <div className="py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        <span className="text-xs uppercase font-bold tracking-widest text-stone-500 shrink-0 flex items-center gap-1">
          <Tag className="w-3.5 h-3.5 text-luxury-gold" />
          <span>Shop by Budget:</span>
        </span>

        {pills.map((pill, idx) => {
          const isSelected = activePrice === pill.maxPrice;

          return (
            <button
              key={idx}
              onClick={() => onSelectPrice(pill.maxPrice)}
              className={`px-4 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition-all border shadow-sm ${
                isSelected
                  ? "bg-luxury-charcoal text-luxury-gold border-stone-900 shadow-md scale-105"
                  : "bg-white hover:bg-stone-50 text-stone-700 border-stone-200"
              }`}
            >
              {pill.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
