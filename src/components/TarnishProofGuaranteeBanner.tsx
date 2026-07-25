"use client";

import React from "react";
import { ShieldCheck, Droplets, Sparkles, Award } from "lucide-react";

export default function TarnishProofGuaranteeBanner() {
  return (
    <section className="py-16 bg-luxury-cream/40 border-y border-stone-200/80 my-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-bold">
            Uncompromising Quality
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            The VERONA 100% Anti-Tarnish Promise
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto leading-relaxed">
            Crafted with 10x thicker 18K Real Gold PVD Vacuum Plating on surgical-grade stainless steel & 925 Sterling Silver.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-luxury-goldLight border border-luxury-gold/30 flex items-center justify-center mx-auto text-luxury-goldHover">
              <Droplets className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base">Water & Perfume Proof</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Wear your jewellery while showering, swimming, or applying your favorite perfume without losing shine.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-luxury-goldLight border border-luxury-gold/30 flex items-center justify-center mx-auto text-luxury-goldHover">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base">Hypoallergenic & Skin-Safe</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              100% Nickel-free, Lead-free, and Cadmium-free. Zero skin greening or irritation even on sensitive skin.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-luxury-goldLight border border-luxury-gold/30 flex items-center justify-center mx-auto text-luxury-goldHover">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base">18K Real Gold Plating</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Advanced PVD technology bonds genuine 18-karat gold onto surgical steel for lifelong durability.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-luxury-goldLight border border-luxury-gold/30 flex items-center justify-center mx-auto text-luxury-goldHover">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base">Lifetime Tarnish Warranty</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              If your piece ever tarnishes under normal everyday wear, we replace it completely free of cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
