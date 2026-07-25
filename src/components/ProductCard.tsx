"use client";

import React from "react";
import Image from "next/image";
import { Star, Shield, ShoppingBag, Heart } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickView?: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart, onQuickView }: ProductCardProps) {
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-stone-200/70 hover:border-luxury-gold/50 transition-all duration-300 hover:shadow-luxury flex flex-col justify-between">
      {/* Product Image & Badges Container */}
      <div
        onClick={() => onQuickView && onQuickView(product)}
        className="relative aspect-square w-full overflow-hidden bg-stone-100 cursor-pointer"
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {product.badge && (
            <span className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider rounded-md bg-white/90 backdrop-blur-md text-stone-900 border border-stone-200 shadow-sm">
              {product.badge}
            </span>
          )}
          {discountPercent > 0 && (
            <span className="px-2.5 py-1 text-[10px] font-bold rounded-md bg-luxury-charcoal text-luxury-gold tracking-wider">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Anti-Tarnish Guarantee Tag */}
        <div className="absolute bottom-3 left-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/95 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-luxury-gold/40 flex items-center justify-center gap-1 text-[10px] font-medium text-luxury-goldHover shadow-md">
            <Shield className="w-3 h-3 text-luxury-gold shrink-0" />
            <span>100% Tarnish-Proof & Waterproof</span>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1 mb-1.5">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
            <span className="text-[11px] font-medium text-stone-500">
              {product.rating} ({product.reviewsCount})
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif font-semibold text-stone-900 text-sm sm:text-base line-clamp-1 group-hover:text-luxury-gold transition-colors">
            {product.title}
          </h3>

          {/* Material description */}
          <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5 font-sans">
            {product.material}
          </p>
        </div>

        {/* Price & Action */}
        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-base sm:text-lg font-bold text-stone-900 font-sans">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-stone-400 line-through">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>
            <span className="text-[9px] uppercase tracking-wider text-emerald-700 font-semibold block">
              Inclusive of taxes
            </span>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className="p-2.5 bg-luxury-charcoal hover:bg-black text-white rounded-xl transition-all shadow-sm active:scale-95 flex items-center gap-1 text-xs font-medium"
            title="Add to Cart"
          >
            <ShoppingBag className="w-4 h-4 text-luxury-gold" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
