"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Droplets, Sparkles, Award, CheckCircle2, ArrowRight } from "lucide-react";

export default function TarnishProofGuaranteeBanner() {
  const guarantees = [
    {
      icon: Droplets,
      title: "Waterproof & Sweatproof",
      desc: "Wear your jewellery while showering, swimming in saltwater, or working out. Never fades or dulls.",
      badge: "24/7 Wear",
    },
    {
      icon: Sparkles,
      title: "10x Thicker 18K Gold PVD",
      desc: "Physical Vapor Deposition bonds genuine 18-karat gold onto 316L surgical steel at an atomic level.",
      badge: "PVD Tech",
    },
    {
      icon: ShieldCheck,
      title: "Hypoallergenic & Skin-Safe",
      desc: "100% Nickel-free and Lead-free. Guaranteed zero skin greening or allergic reactions on sensitive skin.",
      badge: "Zero Nickel",
    },
    {
      icon: Award,
      title: "Lifetime Replacement Promise",
      desc: "If your piece ever tarnishes or loses its radiance under normal wear, we replace it 100% free of charge.",
      badge: "Lifetime Guarantee",
    },
  ];

  return (
    <section className="py-16 bg-luxury-charcoal text-white my-16 relative overflow-hidden border-y border-stone-800">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-900/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column — Editorial Underwater Model Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-luxury-gold/30 group">
              <Image
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80"
                alt="VERONA 100% Waterproof & Anti-Tarnish Jewellery"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Quality Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-luxury-gold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-luxury-gold" />
                  <span>Lab Tested & Certified</span>
                </div>
                <p className="text-xs text-stone-200 font-serif italic">
                  &ldquo;100% Resistant to Saltwater, Chlorine, Perfumes & Sweat&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column — Luxury Technical Guarantee Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-luxury-gold" />
                <span>UNCOMPROMISING METALLURGY</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
                The VERONA 100% Anti-Tarnish Guarantee
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 font-sans max-w-xl">
                Engineered with 10x thicker 18K Real Gold PVD Vacuum Plating on surgical-grade stainless steel & 925 Sterling Silver.
              </p>
            </div>

            {/* Guarantee Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {guarantees.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 space-y-2.5 backdrop-blur-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-luxury-gold/20 border border-luxury-gold/40 flex items-center justify-center text-luxury-gold">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/30">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-white text-base">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-400 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
