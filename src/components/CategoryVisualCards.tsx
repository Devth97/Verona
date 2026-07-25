"use client";

import React from "react";
import Image from "next/image";

export interface CategoryCard {
  id: string;
  name: string;
  image: string;
}

export const CATEGORY_CARDS: CategoryCard[] = [
  {
    id: "necklaces",
    name: "Necklace",
    image: "/images/celeste_solitaire_pendant_1784974551066.jpg",
  },
  {
    id: "earrings",
    name: "Earrings",
    image: "/images/aura_pearl_hoops_1784974566340.jpg",
  },
  {
    id: "rings",
    name: "Rings",
    image: "/images/luna_pave_ring_1784974583443.jpg",
  },
  {
    id: "bracelets",
    name: "Bracelets",
    image: "/images/gold_bracelet_category_1784975180318.jpg",
  },
  {
    id: "anklets",
    name: "Anklets",
    image: "/images/hero_anklets_banner_1784972627399.jpg",
  },
  {
    id: "under-999",
    name: "Under ₹999",
    image: "/images/pvd_gold_craftsmanship_1784973415910.jpg",
  },
];

interface CategoryVisualCardsProps {
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
}

export default function CategoryVisualCards({
  activeCategory,
  onSelectCategory,
}: CategoryVisualCardsProps) {
  return (
    <section className="py-8 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-6">
          {CATEGORY_CARDS.map((cat) => {
            const isSelected = activeCategory === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="group flex flex-col items-center cursor-pointer"
              >
                <div
                  className={`relative w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-stone-50 border-2 transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-105 ${
                    isSelected
                      ? "border-luxury-gold ring-2 ring-luxury-gold/30 shadow-luxury"
                      : "border-stone-200 hover:border-luxury-gold/60"
                  }`}
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span
                  className={`mt-2 text-xs font-serif font-semibold tracking-wide text-center transition-colors ${
                    isSelected ? "text-luxury-gold font-bold" : "text-stone-800 group-hover:text-luxury-gold"
                  }`}
                >
                  {cat.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
