"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Instagram, Heart, Pause, Play, ChevronLeft, ChevronRight } from "lucide-react";

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
    badge: "24/7 Wear",
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
  {
    id: "card-8",
    title: "Stackable Pavé Rings",
    badge: "Tarnish-Free",
    image: "/images/luna_pave_ring_1784974583443.jpg",
    caption: "Cubic Zirconia Pavé ring designed for effortless daily stacking.",
  },
  {
    id: "card-9",
    title: "Layered Chain Bracelets",
    badge: "18K Gold Vermeil",
    image: "/images/starlight_layered_chain_bracelet_1784975507390.jpg",
    caption: "Double-layered wrist chain with lobster clasp extension.",
  },
];

export default function VeronaWomenReels() {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const animRef = useRef<number | null>(null);

  // Sorele.co exact 3D Cylinder Ring geometry constants
  const totalSlides = VERONA_WOMEN_CARDS.length;
  const angleStep = 360 / totalSlides;
  const radius = 480; // 3D cylinder radius in px matching Sorele.co

  // Continuous smooth 3D Y-axis ring rotation loop
  useEffect(() => {
    let lastTime = performance.now();

    const updateRotation = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isPaused) {
        setRotationAngle((prev) => (prev + delta * 0.02) % 360);
      }

      animRef.current = requestAnimationFrame(updateRotation);
    };

    animRef.current = requestAnimationFrame(updateRotation);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isPaused]);

  const handleCardClick = (idx: number) => {
    // Calculate target angle to bring clicked slide directly to front center (0deg)
    const targetSlideAngle = idx * angleStep;
    setRotationAngle(-targetSlideAngle);
    setIsPaused(true);
  };

  const handlePrev = () => {
    setRotationAngle((prev) => prev - angleStep);
  };

  const handleNext = () => {
    setRotationAngle((prev) => prev + angleStep);
  };

  return (
    <section className="py-16 bg-luxury-cream/20 border-b border-stone-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-10">
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
              <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200 animate-pulse">
                <Pause className="w-3 h-3 text-rose-600 fill-current" />
                <span>Paused</span>
              </span>
            )}
          </div>
        </div>

        {/* Sorele.co Exact 3D Curved Cylinder Ring Carousel Container */}
        <div
          className="relative py-8 flex items-center justify-center h-[520px] sm:h-[620px] overflow-hidden"
          style={{ perspective: "1000px" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Sorele.co 3D Ring Wrapper (.ls-curved-carousel__ring) */}
          <div
            className="relative w-full h-full flex justify-center items-center"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${rotationAngle}deg)`,
              transition: isPaused ? "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
            }}
          >
            {VERONA_WOMEN_CARDS.map((card, idx) => {
              const slideAngle = idx * angleStep;
              const rad = (slideAngle * Math.PI) / 180;
              const x = radius * Math.sin(rad);
              const z = radius * Math.cos(rad) - radius;

              return (
                <div
                  key={card.id}
                  onClick={() => handleCardClick(idx)}
                  className="absolute w-[260px] sm:w-[320px] h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-stone-900 border-4 border-white cursor-pointer transition-shadow duration-300 hover:shadow-luxury group"
                  style={{
                    backfaceVisibility: "hidden",
                    transformOrigin: "50% 50%",
                    transform: `translate3d(${x}px, 0px, ${z}px) rotateY(${-slideAngle}deg)`,
                  }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 260px, 320px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Floating Pink Sticker Badge */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="px-3.5 py-1 rounded-full bg-rose-950/90 text-rose-200 border border-rose-700/60 text-[10px] font-bold tracking-wider uppercase shadow-lg backdrop-blur-md flex items-center gap-1.5 whitespace-nowrap">
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

          {/* Carousel Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-40 p-3 bg-white/90 hover:bg-white text-stone-900 rounded-full shadow-xl backdrop-blur-md border border-stone-200 transition-all hover:scale-110"
            title="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-40 p-3 bg-white/90 hover:bg-white text-stone-900 rounded-full shadow-xl backdrop-blur-md border border-stone-200 transition-all hover:scale-110"
            title="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Toggle Auto-Motion Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-stone-200 shadow-sm text-xs font-bold text-stone-700 hover:text-stone-900 transition-all"
          >
            {isPaused ? <Play className="w-3.5 h-3.5 text-luxury-gold fill-current" /> : <Pause className="w-3.5 h-3.5 text-stone-500 fill-current" />}
            <span>{isPaused ? "Resume 3D Rotation" : "Pause Motion"}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
