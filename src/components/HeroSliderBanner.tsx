"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export interface SlideItem {
  id: number;
  title: string;
  italicSubtitle: string;
  subHeadline: string;
  image: string;
  ctaText: string;
  badge: string;
}

export const HERO_SLIDES: SlideItem[] = [
  {
    id: 1,
    title: "EFFORTLESS EVERY DAY",
    italicSubtitle: "Easy to Wear. Easy to Love",
    subHeadline: "Jewellery that slips into your routine and elevates every look.",
    image: "/images/celeste_solitaire_pendant_1784974551066.jpg",
    ctaText: "SHOP NOW",
    badge: "NEW SUMMER 2026 EDIT",
  },
  {
    id: 2,
    title: "WATERPROOF & TARNISH-FREE",
    italicSubtitle: "Shower, Swim, Workout.",
    subHeadline: "18K Gold Plated & 925 Silver engineered for 24/7 daily wear under ₹3,500.",
    image: "/images/anti_tarnish_waterproof_model_1784973400042.jpg",
    ctaText: "EXPLORE COLLECTION",
    badge: "100% TARNISH GUARANTEE",
  },
  {
    id: 3,
    title: "LUXURY GIFTING EXPERIENCE",
    italicSubtitle: "Delivered in Velvet Pouches.",
    subHeadline: "Includes microfiber polishing cloth & custom personalized note card.",
    image: "/images/pvd_gold_craftsmanship_1784973415910.jpg",
    ctaText: "DISCOVER GIFTS",
    badge: "SIGNATURE PACKAGING",
  },
];

interface HeroSliderBannerProps {
  onShopNow: () => void;
}

export default function HeroSliderBanner({ onShopNow }: HeroSliderBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative w-full h-[520px] sm:h-[600px] lg:h-[650px] overflow-hidden bg-stone-900 border-b border-stone-200">
      {/* Background Image Slide */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          priority
          className="object-cover object-center scale-105 transition-transform duration-10000"
        />
        {/* Soft Luxury Overlay matching Sorele.co */}
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-cream/95 via-luxury-cream/80 to-transparent lg:via-luxury-cream/60" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center z-10">
        <div className="max-w-2xl space-y-4 animate-in fade-in duration-700">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-luxury-gold/40 text-luxury-goldHover text-[10px] font-bold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
            <span>{slide.badge}</span>
          </div>

          {/* Main Headline (Cinzel Thin Luxury Serif matching Sorele.co screenshot) */}
          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl text-stone-900 tracking-[0.18em] uppercase font-normal leading-tight">
            {slide.title}
          </h1>

          {/* Sub-headline */}
          <p className="font-sans text-stone-700 text-sm sm:text-base tracking-wide font-normal max-w-lg mx-auto">
            {slide.subHeadline}
          </p>

          {/* Cursive Script Subtitle matching Sorele.co ("Easy to Wear. Easy to Love") */}
          <span className="font-script text-3xl sm:text-5xl text-stone-800 tracking-wider font-normal block pt-1 pb-2">
            {slide.italicSubtitle}
          </span>

          {/* Sorele-style Underlined CTA */}
          <div className="pt-2">
            <button
              onClick={onShopNow}
              className="font-cinzel text-xs sm:text-sm tracking-[0.3em] font-bold text-stone-900 border-b-2 border-stone-900 hover:border-luxury-gold hover:text-luxury-gold transition-all pb-1 uppercase inline-block cursor-pointer"
            >
              {slide.ctaText}
            </button>
          </div>
        </div>
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/80 hover:bg-white text-stone-800 rounded-full shadow-md backdrop-blur-md border border-stone-200 transition-all hover:scale-110"
        title="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/80 hover:bg-white text-stone-800 rounded-full shadow-md backdrop-blur-md border border-stone-200 transition-all hover:scale-110"
        title="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Progress Dash Indicators (matching Sorele.co bottom slider bar) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1 rounded-full transition-all duration-500 ${
              currentSlide === idx ? "w-10 bg-luxury-gold" : "w-4 bg-stone-400/60 hover:bg-stone-600"
            }`}
            title={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
