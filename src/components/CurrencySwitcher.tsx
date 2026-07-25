"use client";

import React, { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";

export interface Currency {
  code: string;
  symbol: string;
  rate: number; // Conversion from INR
  label: string;
}

export const CURRENCIES: Currency[] = [
  { code: "INR", symbol: "₹", rate: 1, label: "INR (₹)" },
  { code: "USD", symbol: "$", rate: 0.012, label: "USD ($)" },
  { code: "AED", symbol: "AED ", rate: 0.044, label: "AED (د.إ)" },
  { code: "GBP", symbol: "£", rate: 0.0094, label: "GBP (£)" },
  { code: "EUR", symbol: "€", rate: 0.011, label: "EUR (€)" },
];

export default function CurrencySwitcher() {
  const [selected, setSelected] = useState<Currency>(CURRENCIES[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left z-30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-[10px] font-bold tracking-wider text-stone-300 hover:text-white uppercase px-2 py-1 rounded bg-white/10 hover:bg-white/20 transition-colors"
      >
        <Globe className="w-3 h-3 text-luxury-gold" />
        <span>{selected.code} ({selected.symbol})</span>
        <ChevronDown className="w-3 h-3" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-32 rounded-xl bg-stone-900 border border-stone-700 shadow-xl py-1 text-xs z-50">
          {CURRENCIES.map((curr) => (
            <button
              key={curr.code}
              onClick={() => {
                setSelected(curr);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-1.5 hover:bg-stone-800 transition-colors text-[11px] font-bold ${
                selected.code === curr.code ? "text-luxury-gold" : "text-stone-300"
              }`}
            >
              {curr.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
