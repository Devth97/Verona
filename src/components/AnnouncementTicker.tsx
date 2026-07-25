"use client";

import React from "react";
import { Sparkles, ShieldCheck, Droplets, Truck, Gift, MapPin, Award, Tag } from "lucide-react";
import CurrencySwitcher from "@/components/CurrencySwitcher";

export const ANNOUNCEMENT_ITEMS = [
  { icon: Droplets, text: "100% WATERPROOF & TARNISH-PROOF" },
  { icon: Sparkles, text: "18K REAL GOLD PVD VACUUM PLATING" },
  { icon: ShieldCheck, text: "HYPOALLERGENIC 925 STERLING SILVER" },
  { icon: Truck, text: "FREE EXPRESS SHIPPING OVER ₹999" },
  { icon: Gift, text: "FREE LUXURY GIFT BOX & POLISHING CLOTH" },
  { icon: MapPin, text: "FLAGSHIP STORE IN MANGALURU (HAMPANKATTA / BUNDER)" },
  { icon: Tag, text: "GUARANTEED PRICE CAP UNDER ₹3,500 MAX" },
  { icon: Award, text: "7-DAY EASY REPLACEMENT WARRANTY" },
];

export default function AnnouncementTicker() {
  // Duplicate array for seamless infinite marquee loop
  const duplicatedItems = [...ANNOUNCEMENT_ITEMS, ...ANNOUNCEMENT_ITEMS, ...ANNOUNCEMENT_ITEMS];

  return (
    <div className="relative w-full bg-luxury-charcoal text-white text-[11px] font-bold tracking-widest overflow-hidden border-b border-stone-800 py-2.5 z-40">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
        {/* Infinite Scrolling Marquee Track */}
        <div className="relative overflow-hidden w-full flex-1">
          <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
            {duplicatedItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="inline-flex items-center gap-2 text-stone-200 shrink-0">
                  <IconComp className="w-3.5 h-3.5 text-luxury-gold shrink-0" />
                  <span className="font-sans uppercase tracking-[0.2em]">{item.text}</span>
                  <span className="text-luxury-gold/50 mx-2">•</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Currency Switcher on Right Side */}
        <div className="hidden md:block shrink-0 pl-4 border-l border-stone-800 ml-4">
          <CurrencySwitcher />
        </div>
      </div>
    </div>
  );
}
