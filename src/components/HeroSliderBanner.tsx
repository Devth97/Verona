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
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1600&q=80",
    ctaText: "SHOP NOW",
    badge: "NEW SUMMER 2026 EDIT",
  },
  {
    id: 2,
    title: "WATERPROOF & TARNISH-FREE",
    italicSubtitle: "Shower, Swim, Workout.",
    subHeadline: "18K Gold Plated & 925 Silver engineered for 24/7 daily wear under ₹3,500.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=80",
    ctaText: "EXPLORE COLLECTION",
    badge: "100% TARNISH GUARANTEE",
  },
  {
    id: 3,
    title: "LUXURY GIFTING EXPERIENCE",
    italicSubtitle: "Delivered in Velvet Pouches.",
    subHeadline: "Includes microfiber polishing cloth & custom personalized note card.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1600&q=80",
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
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-cream/90 via-luxury-cream/70 to-transparent lg:via-luxury-cream/50" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start z-10">
        <div className="max-w-xl space-y-4 text-left animate-in fade-in slide-in-from-left-4 duration-700">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-luxury-gold/40 text-luxury-goldHover text-[11px] font-bold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
            <span>{slide.badge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 leading-[1.1] tracking-tight">
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl font-serif italic text-stone-700">
            {slide.subHeadline} <span className="block font-normal font-sans text-stone-600 text-sm mt-1">{slide.italicSubtitle}</span>
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <button
              onClick={onShopNow}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-luxury-charcoal hover:bg-black text-white text-xs uppercase tracking-[0.25em] font-bold rounded-xl transition-all shadow-xl hover:shadow-2xl"
            >
              <span>{slide.ctaText}</span>
              <span className="w-5 h-0.5 bg-luxury-gold group-hover:w-7 transition-all" />
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
