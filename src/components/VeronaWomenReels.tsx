"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Instagram, Heart, Pause, ChevronLeft, ChevronRight } from "lucide-react";

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
    caption: "Styling our Celeste Solitaire Pendant for hypoallergenic daily wear.",
  },
  {
    id: "card-3",
    title: "100% Waterproof",
    badge: "VERONA = Connection",
    image: "/images/anti_tarnish_waterproof_model_1784973400042.jpg",
    caption: "100% Waterproof & Tarnish-Proof — Wear in shower or workout.",
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
  {
    id: "card-6",
    title: "Solitaire Collection",
    badge: "Best Seller",
    image: "/images/celeste_solitaire_pendant_1784974551066.jpg",
    caption: "Crafted with 10x thicker 18K Real Gold PVD Vacuum Plating.",
  },
  {
    id: "card-7",
    title: "Freshwater Pearls",
    badge: "Under ₹999",
    image: "/images/aura_pearl_hoops_1784974566340.jpg",
    caption: "Cultured freshwater pearl hoops for everyday Mangaluru charm.",
  },
];

export default function VeronaWomenReels() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const totalCards = VERONA_WOMEN_CARDS.length;

  // Circular Wrapping Index Math
  const getCircularOffset = (idx: number, active: number, total: number) => {
    let diff = idx - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  // Auto-slide fisheye gallery every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalCards);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, totalCards]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? totalCards - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalCards);
  };

  const handleCardClick = (idx: number) => {
    setActiveIndex(idx);
    setIsPaused(true);
  };

  // Touch Swipe Gesture Support for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;

    if (deltaX < -40) {
      nextSlide();
    } else if (deltaX > 40) {
      prevSlide();
    }

    touchStartX.current = null;
  };

  return (
    <section
      className="py-12 sm:py-16 bg-luxury-cream/20 border-b border-stone-200/80 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-8 sm:mb-12">
          <h2 className="font-cinzel text-3xl sm:text-5xl text-stone-900 tracking-[0.15em] uppercase font-normal">
            VERONA Women
          </h2>
          <div className="flex items-center justify-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.25em] text-stone-500 hover:text-luxury-gold uppercase transition-colors"
            >
              <Instagram className="w-4 h-4 text-luxury-gold" />
              <span>FOLLOW @VERONA.JEWELLERY</span>
            </a>

            {isPaused && (
              <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200 animate-pulse font-sans">
                <Pause className="w-3 h-3 text-rose-600 fill-current" />
                <span>Paused</span>
              </span>
            )}
          </div>
        </div>

        {/* 21st.dev Style Touch Swiper 3D Curved Arc Container */}
        <div
          className="relative py-4 flex items-center justify-center h-[420px] sm:h-[540px] overflow-hidden"
          style={{ perspective: "1000px" }}
        >
          <div className="relative w-full max-w-5xl flex justify-center items-center">
            {VERONA_WOMEN_CARDS.map((card, idx) => {
              const offset = getCircularOffset(idx, activeIndex, totalCards);
              const absOffset = Math.abs(offset);

              // 21st.dev Fisheye Arc Transformations for Mobile & Desktop
              let transformStyle = "";
              let opacity = 1;
              let zIndex = 30 - absOffset * 10;

              if (offset === 0) {
                // Active Center Card
                transformStyle = "scale(1.05) translate3d(0, 0, 0) rotateY(0deg)";
              } else if (offset === -1) {
                // Immediate Left Card
                transformStyle = "scale(0.88) translate3d(-105%, 0, -40px) rotateY(16deg) skewY(-2deg)";
                opacity = 0.9;
              } else if (offset === 1) {
                // Immediate Right Card
                transformStyle = "scale(0.88) translate3d(105%, 0, -40px) rotateY(-16deg) skewY(2deg)";
                opacity = 0.9;
              } else if (offset === -2) {
                // Outer Left Card (Desktop only)
                transformStyle = "scale(0.75) translate3d(-200%, 0, -90px) rotateY(24deg) skewY(-4deg)";
                opacity = 0.5;
              } else if (offset === 2) {
                // Outer Right Card (Desktop only)
                transformStyle = "scale(0.75) translate3d(200%, 0, -90px) rotateY(-24deg) skewY(4deg)";
                opacity = 0.5;
              } else {
                transformStyle = "scale(0.6) translate3d(0, 0, -200px)";
                opacity = 0;
              }

              return (
                <div
                  key={card.id}
                  onClick={() => handleCardClick(idx)}
                  className={`absolute w-[240px] sm:w-72 h-[370px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl bg-stone-900 border-4 border-white cursor-pointer transition-all duration-700 ease-out shrink-0 ${
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
                    priority={absOffset <= 1}
                    sizes="(max-width: 640px) 240px, 288px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Floating Pink Sticker Badge */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="px-3.5 py-1 rounded-full bg-rose-950/90 text-rose-200 border border-rose-700/60 text-[10px] font-bold tracking-wider uppercase shadow-lg backdrop-blur-md flex items-center gap-1.5 whitespace-nowrap font-sans">
                      <Heart className="w-3 h-3 text-rose-400 fill-current" />
                      <span>{card.badge}</span>
                    </span>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-5 left-4 right-4 z-20 text-white space-y-1">
                    <h3 className="font-serif font-bold text-base sm:text-lg leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs text-stone-200 line-clamp-2 font-sans">
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
            className="absolute left-1 sm:left-6 top-1/2 -translate-y-1/2 z-40 p-2.5 sm:p-3 bg-white/90 hover:bg-white text-stone-900 rounded-full shadow-xl backdrop-blur-md border border-stone-200 transition-all hover:scale-110"
            title="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-1 sm:right-6 top-1/2 -translate-y-1/2 z-40 p-2.5 sm:p-3 bg-white/90 hover:bg-white text-stone-900 rounded-full shadow-xl backdrop-blur-md border border-stone-200 transition-all hover:scale-110"
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
              onClick={() => handleCardClick(idx)}
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
