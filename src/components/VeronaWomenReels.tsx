"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Instagram, Sparkles, Heart } from "lucide-react";

export interface VeronaWomenCard {
  id: string;
  title: string;
  badge: string;
  image: string;
  caption: string;
}

export const VERONA_WOMEN_CARDS: VeronaWomenCard[] = [
  {
    id: "card-1",
    title: "VERONA = Connection",
    badge: "VERONA = Connection",
    image: "/images/verona_women_showroom_2_1784976183425.jpg",
    caption: "Real moments shared at our Hampankatta Flagship Store in Mangaluru.",
  },
  {
    id: "card-2",
    title: "Everyday Luxury",
    badge: "18K Gold Plated",
    image: "/images/verona_women_showroom_1_1784976114658.jpg",
    caption: "Pooja Hegde styling our Celeste Solitaire Pendant for daily wear.",
  },
  {
    id: "card-3",
    title: "VERONA = Connection",
    badge: "VERONA = Connection",
    image: "/images/anti_tarnish_waterproof_model_1784973400042.jpg",
    caption: "100% Waterproof & Tarnish-Proof — Wear it 24/7 in shower or workout.",
  },
  {
    id: "card-4",
    title: "Community Memories",
    badge: "VERONA Community",
    image: "/images/hero_anklets_banner_1784972627399.jpg",
    caption: "Lightweight 925 Silver & Gold pieces engineered under ₹3,500.",
  },
  {
    id: "card-5",
    title: "Signature Packaging",
    badge: "Velvet Gift Edition",
    image: "/images/pvd_gold_craftsmanship_1784973415910.jpg",
    caption: "Delivered in signature velvet pouches with custom gift note cards.",
  },
];

export default function VeronaWomenReels() {
  const [activeIndex, setActiveIndex] = useState(2);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? VERONA_WOMEN_CARDS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % VERONA_WOMEN_CARDS.length);
  };

  return (
    <section className="py-16 bg-luxury-cream/20 border-b border-stone-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-12">
          <h2 className="font-cinzel text-3xl sm:text-5xl text-stone-900 tracking-[0.15em] uppercase font-normal">
            VERONA Women
          </h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.25em] text-stone-500 hover:text-luxury-gold uppercase transition-colors"
          >
            <Instagram className="w-4 h-4 text-luxury-gold" />
            <span>FOLLOW @VERONA.JEWELLERY</span>
          </a>
        </div>

        {/* 21st.dev Style 3D Perspective Fisheye Curved Carousel (Matching Sorele.co Screenshot 1) */}
        <div className="relative py-6 flex items-center justify-center min-h-[460px] sm:min-h-[520px] perspective-[1200px]">
          <div className="relative w-full max-w-5xl flex justify-center items-center gap-2 sm:gap-4">
            {VERONA_WOMEN_CARDS.map((card, idx) => {
              const offset = idx - activeIndex;
              const absOffset = Math.abs(offset);

              // 3D curved transform calculations matching Sorele.co Screenshot 1
              let transformStyle = "";
              let opacity = 1;
              let zIndex = 30 - absOffset * 10;

              if (offset === 0) {
                // Center active card
                transformStyle = "scale(1.05) translateZ(0px) rotateY(0deg)";
              } else if (offset === -1) {
                // Immediate left card - curved inwards
                transformStyle = "scale(0.92) rotateY(16deg) skewY(-3deg) translateZ(-40px)";
                opacity = 0.95;
              } else if (offset === 1) {
                // Immediate right card - curved inwards
                transformStyle = "scale(0.92) rotateY(-16deg) skewY(3deg) translateZ(-40px)";
                opacity = 0.95;
              } else if (offset === -2) {
                // Far left card
                transformStyle = "scale(0.8) rotateY(26deg) skewY(-5deg) translateZ(-100px)";
                opacity = 0.6;
              } else if (offset === 2) {
                // Far right card
                transformStyle = "scale(0.8) rotateY(-26deg) skewY(5deg) translateZ(-100px)";
                opacity = 0.6;
              } else {
                transformStyle = "scale(0.7) translateZ(-200px)";
                opacity = 0;
              }

              return (
                <div
                  key={card.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative w-56 sm:w-72 h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl bg-stone-900 border-4 border-white cursor-pointer transition-all duration-700 ease-out shrink-0 ${
                    absOffset > 2 ? "hidden" : "block"
                  }`}
                  style={{
                    transform: transformStyle,
                    opacity: opacity,
                    zIndex: zIndex,
                  }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Sorele-style Floating Pink Sticker Badge */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="px-3.5 py-1 rounded-full bg-rose-950/90 text-rose-200 border border-rose-700/60 text-[10px] font-bold tracking-wider uppercase shadow-lg backdrop-blur-md flex items-center gap-1.5 whitespace-nowrap">
                      <Heart className="w-3 h-3 text-rose-400 fill-current" />
                      <span>{card.badge}</span>
                    </span>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-5 left-4 right-4 z-20 text-white space-y-1">
                    <h3 className="font-serif font-bold text-sm sm:text-base leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-[11px] text-stone-200 line-clamp-2 font-sans">
                      {card.caption}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Control Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-40 p-3 bg-white/90 hover:bg-white text-stone-900 rounded-full shadow-xl backdrop-blur-md border border-stone-200 transition-all hover:scale-110"
            title="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-40 p-3 bg-white/90 hover:bg-white text-stone-900 rounded-full shadow-xl backdrop-blur-md border border-stone-200 transition-all hover:scale-110"
            title="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {VERONA_WOMEN_CARDS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? "w-8 bg-luxury-gold" : "w-3 bg-stone-300 hover:bg-stone-500"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
