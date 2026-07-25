"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Star, ShieldCheck, ShoppingBag, Heart, Droplets, Sparkles, Truck, Check } from "lucide-react";
import { Product } from "@/data/products";

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function ProductQuickViewModal({
  product,
  onClose,
  onAddToCart,
}: ProductQuickViewModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState<string>("");

  if (!product) return null;

  const currentImage = activeImage || product.image;
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-luxury-gold/30 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur-md rounded-full text-stone-600 hover:text-stone-900 shadow-md transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image Gallery */}
          <div className="relative bg-stone-100 p-6 flex flex-col items-center justify-center">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md bg-white border border-stone-200">
              <Image
                src={currentImage}
                alt={product.title}
                fill
                priority
                className="object-cover object-center"
              />
              {discountPercent > 0 && (
                <span className="absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-lg bg-luxury-charcoal text-luxury-gold shadow-md">
                  {discountPercent}% OFF
                </span>
              )}
            </div>

            {/* Thumbnail Selector */}
            {product.secondaryImage && (
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => setActiveImage(product.image)}
                  className={`w-14 h-14 rounded-xl overflow-hidden border-2 relative transition-all ${
                    currentImage === product.image ? "border-luxury-gold shadow-md scale-105" : "border-stone-300 opacity-70"
                  }`}
                >
                  <Image src={product.image} alt="Thumbnail 1" fill className="object-cover" />
                </button>
                <button
                  onClick={() => setActiveImage(product.secondaryImage!)}
                  className={`w-14 h-14 rounded-xl overflow-hidden border-2 relative transition-all ${
                    currentImage === product.secondaryImage ? "border-luxury-gold shadow-md scale-105" : "border-stone-300 opacity-70"
                  }`}
                >
                  <Image src={product.secondaryImage} alt="Thumbnail 2" fill className="object-cover" />
                </button>
              </div>
            )}
          </div>

          {/* Product Details & Actions */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-5">
            <div>
              {/* Category & Badge */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold bg-luxury-goldLight px-2.5 py-1 rounded-md border border-luxury-gold/30">
                  {product.category}
                </span>
                {product.badge && (
                  <span className="text-[10px] uppercase tracking-widest text-stone-600 font-bold bg-stone-100 px-2.5 py-1 rounded-md">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 className="text-xl md:text-2xl font-serif font-bold text-stone-900 leading-tight">
                {product.title}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-stone-700">
                  {product.rating} ({product.reviewsCount} verified reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mt-4">
                <span className="text-2xl font-bold text-stone-900 font-sans">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-stone-400 line-through">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Save ₹{(product.originalPrice! - product.price).toLocaleString("en-IN")}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-stone-600 leading-relaxed mt-3 border-t border-stone-100 pt-3">
                {product.description}
              </p>

              {/* Guarantee Pills */}
              <div className="space-y-2 pt-4">
                <div className="flex items-center gap-2 text-xs font-medium text-stone-800">
                  <ShieldCheck className="w-4 h-4 text-luxury-gold shrink-0" />
                  <span>{product.material}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-stone-800">
                  <Droplets className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>100% Waterproof, Sweatproof & Gym-Proof</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-stone-800">
                  <Truck className="w-4 h-4 text-stone-700 shrink-0" />
                  <span>Dispatched in 24 Hours • COD Available</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-stone-200">
              <div className="flex items-center gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-stone-300 rounded-xl bg-stone-50 p-1">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 flex items-center justify-center text-stone-700 hover:bg-white rounded-lg font-bold text-sm"
                  >
                    -
                  </button>
                  <span className="px-3 text-sm font-bold text-stone-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 flex items-center justify-center text-stone-700 hover:bg-white rounded-lg font-bold text-sm"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => {
                    onAddToCart(product, quantity);
                    onClose();
                  }}
                  className="flex-1 py-3.5 bg-luxury-charcoal hover:bg-black text-white font-semibold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm"
                >
                  <ShoppingBag className="w-4 h-4 text-luxury-gold" />
                  <span>Add {quantity} to Bag • ₹{(product.price * quantity).toLocaleString("en-IN")}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
