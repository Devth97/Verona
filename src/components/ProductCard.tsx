"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Shield, ShoppingBag, Heart, ArrowRight } from "lucide-react";
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
  const couponPrice = Math.round(product.price * 0.9);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl overflow-hidden border border-stone-200/80 hover:border-luxury-gold/50 transition-all duration-300 hover:shadow-luxury flex flex-col justify-between"
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
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/90 backdrop-blur-md text-stone-700 hover:text-red-500 transition-colors shadow-sm"
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

        {/* Rating Pill Overlay (Matching GIVA Screenshot 4) */}
        <div className="absolute bottom-3 left-3 z-10 px-2 py-0.5 bg-white/90 backdrop-blur-md rounded-md text-[10px] font-bold text-stone-800 flex items-center gap-1 border border-stone-200 shadow-sm">
          <Star className="w-3 h-3 text-amber-400 fill-current" />
          <span>{product.rating} | {product.reviewsCount}</span>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between space-y-3">
        <div>
          {/* Title */}
          <Link href={`/products/${product.id}`}>
            <h3 className="font-serif font-semibold text-stone-900 text-xs sm:text-base line-clamp-1 group-hover:text-luxury-gold transition-colors cursor-pointer">
              {product.title}
            </h3>
          </Link>

          {/* Material description */}
          <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5 font-sans">
            {product.material}
          </p>

          {/* Price Row (₹1,299 ₹2,499 (48% OFF)) */}
          <div className="mt-2 flex items-baseline gap-1.5 flex-wrap">
            <span className="text-sm sm:text-base font-bold text-stone-900 font-sans">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.originalPrice && (
              <span className="text-[11px] text-stone-400 line-through font-sans">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
            )}
            {discountPercent > 0 && (
              <span className="text-[11px] font-bold text-emerald-600 font-sans">
                ({discountPercent}%)
              </span>
            )}
          </div>

          {/* GIVA-Style Coupon Callout (Screenshot 4: Get it for ₹X with coupon) */}
          <p className="text-[10px] text-blue-700 font-semibold font-sans mt-1">
            Get it for <span className="font-bold text-stone-900">₹{couponPrice.toLocaleString("en-IN")}</span> with SMJ10
          </p>
        </div>

        {/* Full-Width GIVA Direct Add to Cart Button (Screenshot 4) */}
        <button
          onClick={() => onAddToCart(product)}
          className="w-full py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-950 hover:text-rose-900 border border-rose-200 font-bold rounded-xl transition-all shadow-sm active:scale-95 flex items-center justify-center gap-1.5 text-xs"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-rose-800" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
