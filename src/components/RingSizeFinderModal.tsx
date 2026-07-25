"use client";

import React, { useState } from "react";
import { X, HelpCircle, Check, ArrowRight } from "lucide-react";

interface RingSizeFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RingSizeFinderModal({ isOpen, onClose }: RingSizeFinderModalProps) {
  const [diameter, setDiameter] = useState<number>(16.5);

  if (!isOpen) return null;

  // Calculate Indian / US size based on inner diameter in mm
  const getRingSize = (mm: number) => {
    if (mm < 15.0) return { inSize: "Size 6", usSize: "US 4", circ: "46.5 mm" };
    if (mm < 15.8) return { inSize: "Size 8", usSize: "US 4.5", circ: "49.0 mm" };
    if (mm < 16.5) return { inSize: "Size 10", usSize: "US 5.5", circ: "51.8 mm" };
    if (mm < 17.3) return { inSize: "Size 12", usSize: "US 6.5", circ: "54.4 mm" };
    if (mm < 18.1) return { inSize: "Size 14", usSize: "US 7.5", circ: "56.9 mm" };
    if (mm < 19.0) return { inSize: "Size 16", usSize: "US 8.5", circ: "59.5 mm" };
    return { inSize: "Size 18", usSize: "US 9.5", circ: "62.1 mm" };
  };

  const calculated = getRingSize(diameter);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-luxury-gold/30 p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2 mb-6">
          <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-bold flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-luxury-gold" />
            <span>Interactive Fit Guide</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            Ring Size Calculator
          </h2>
          <p className="text-xs text-stone-500 max-w-sm mx-auto">
            Drag the slider to match your finger diameter or measure an existing ring.
          </p>
        </div>

        {/* Interactive Circle Visualiser */}
        <div className="bg-luxury-cream/40 p-6 rounded-2xl border border-stone-200 text-center space-y-4">
          <div className="relative w-36 h-36 mx-auto flex items-center justify-center">
            {/* Visual Ring Circle */}
            <div
              className="rounded-full border-4 border-luxury-gold shadow-md flex items-center justify-center transition-all duration-300 bg-white"
              style={{
                width: `${Math.min(130, Math.max(60, (diameter / 20) * 110))}px`,
                height: `${Math.min(130, Math.max(60, (diameter / 20) * 110))}px`,
              }}
            >
              <span className="font-serif font-bold text-stone-900 text-sm">{diameter.toFixed(1)} mm</span>
            </div>
          </div>

          {/* Slider Control */}
          <div className="space-y-2 max-w-xs mx-auto">
            <div className="flex justify-between text-xs font-semibold text-stone-600">
              <span>14 mm</span>
              <span>Inner Diameter</span>
              <span>20 mm</span>
            </div>
            <input
              type="range"
              min="14"
              max="20"
              step="0.1"
              value={diameter}
              onChange={(e) => setDiameter(parseFloat(e.target.value))}
              className="w-full accent-luxury-gold cursor-pointer"
            />
          </div>

          {/* Result Box */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-stone-200">
            <div className="p-2 bg-white rounded-xl border border-stone-200">
              <span className="text-[10px] text-stone-400 uppercase font-bold block">Indian Size</span>
              <span className="text-base font-serif font-bold text-stone-900">{calculated.inSize}</span>
            </div>
            <div className="p-2 bg-white rounded-xl border border-stone-200">
              <span className="text-[10px] text-stone-400 uppercase font-bold block">US Standard</span>
              <span className="text-base font-serif font-bold text-stone-900">{calculated.usSize}</span>
            </div>
            <div className="p-2 bg-white rounded-xl border border-stone-200">
              <span className="text-[10px] text-stone-400 uppercase font-bold block">Circumference</span>
              <span className="text-xs font-serif font-bold text-stone-900">{calculated.circ}</span>
            </div>
          </div>
        </div>

        {/* Tip */}
        <div className="mt-4 p-3 bg-stone-50 rounded-xl text-[11px] text-stone-600 flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>All VERONA stackable rings come with a free 7-day size exchange guarantee.</span>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-5 py-3.5 bg-luxury-charcoal hover:bg-black text-white text-xs uppercase tracking-widest font-bold rounded-xl transition-all shadow-md"
        >
          Got My Size — Continue Shopping
        </button>
      </div>
    </div>
  );
}
