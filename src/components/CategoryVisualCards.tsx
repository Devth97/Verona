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
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "earrings",
    name: "Earrings",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "rings",
    name: "Rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "bracelets",
    name: "Bracelets",
    image: "https://images.unsplash.com/photo-1611591475179-6fe5e7942297?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "anklets",
    name: "Anklets",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "under-999",
    name: "Under ₹999",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=400&q=80",
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
    <section className="py-10 bg-white border-b border-stone-200/80">
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
