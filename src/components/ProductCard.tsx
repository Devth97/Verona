"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Shield, ShoppingBag, Heart } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickView?: (product: Product) => void;
  isWishlisted?: boolean;
  onToggleWishlist?: (product: Product) => void;
}

export default function ProductCard({
  product,
  onAddToCart,
  onQuickView,
  isWishlisted = false,
  onToggleWishlist,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const currentImage = isHovered && product.secondaryImage ? product.secondaryImage : product.image;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl overflow-hidden border border-stone-200/70 hover:border-luxury-gold/50 transition-all duration-300 hover:shadow-luxury flex flex-col justify-between"
    >
      {/* Product Image & Badges Container */}
      <Link href={`/products/${product.id}`} className="block relative aspect-square w-full overflow-hidden bg-stone-50 cursor-pointer">
        <Image
          src={currentImage}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-105"
        />

        {/* Wishlist Heart Icon */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (onToggleWishlist) onToggleWishlist(product);
          }}
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/80 backdrop-blur-md text-stone-700 hover:text-red-500 transition-colors shadow-sm"
          title="Add to Wishlist"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isWishlisted ? "fill-red-500 text-red-500" : "text-stone-600"
            }`}
          />
        </button>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {product.badge && (
            <span className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider rounded-md bg-white/90 backdrop-blur-md text-stone-900 border border-stone-200 shadow-sm">
              {product.badge}
            </span>
          )}
        </div>

        {/* Anti-Tarnish Guarantee Tag on Hover */}
        <div className="absolute bottom-3 left-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/95 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-luxury-gold/40 flex items-center justify-center gap-1 text-[10px] font-medium text-luxury-goldHover shadow-md">
            <Shield className="w-3 h-3 text-luxury-gold shrink-0" />
            <span>100% Tarnish-Proof & Waterproof</span>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          {/* Title */}
          <Link href={`/products/${product.id}`}>
            <h3 className="font-serif font-semibold text-stone-900 text-sm sm:text-base line-clamp-1 group-hover:text-luxury-gold transition-colors cursor-pointer">
              {product.title}
            </h3>
          </Link>

          {/* Material description */}
          <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5 font-sans">
            {product.material}
          </p>
        </div>

        {/* Price & Action (Matching Sorele.co format: ₹2,450 ₹3,598 (31%)) */}
        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span className="text-base sm:text-lg font-bold text-stone-900 font-sans">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-stone-400 line-through font-sans">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
              {discountPercent > 0 && (
                <span className="text-xs font-bold text-emerald-600 font-sans">
                  ({discountPercent}%)
                </span>
              )}
            </div>
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
