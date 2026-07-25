"use client";

import React, { useState, useEffect } from "react";
import { ShoppingBag, Sparkles, ArrowRight } from "lucide-react";

interface StickyAddToCartBarProps {
  onOpenCart: () => void;
  cartCount: number;
}

export default function StickyAddToCartBar({ onOpenCart, cartCount }: StickyAddToCartBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-stone-200 p-3 shadow-2xl animate-in slide-in-from-bottom-full transition-all">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
        <div className="hidden sm:flex items-center gap-2 text-xs text-stone-700">
          <Sparkles className="w-4 h-4 text-luxury-gold shrink-0" />
          <span className="font-serif font-bold text-stone-900 text-sm">VERONA 18K Gold Collection</span>
          <span className="text-stone-400">•</span>
          <span className="text-stone-500 font-sans">Guaranteed Tarnish-Proof & Waterproof</span>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button
            onClick={onOpenCart}
            className="w-full sm:w-auto px-6 py-3 bg-luxury-charcoal hover:bg-black text-white text-xs font-semibold rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4 text-luxury-gold" />
            <span>View Bag ({cartCount} Items)</span>
            <ArrowRight className="w-4 h-4 text-luxury-gold" />
          </button>
        </div>
      </div>
    </div>
  );
}
