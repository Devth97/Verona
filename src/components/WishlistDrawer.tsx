"use client";

import React from "react";
import Image from "next/image";
import { X, Heart, ShoppingBag, Trash2 } from "lucide-react";
import { Product } from "@/data/products";

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistItems: Product[];
  onRemoveWishlist: (id: string) => void;
  onAddToCart: (product: Product) => void;
}

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveWishlist,
  onAddToCart,
}: WishlistDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm transition-all animate-in fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-stone-200">
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-stone-200 bg-luxury-bg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-luxury-gold fill-current" />
              <h2 className="text-lg font-serif font-bold text-stone-900">Your Wishlist</h2>
              <span className="text-xs bg-stone-200 text-stone-700 px-2 py-0.5 rounded-full font-bold">
                {wishlistItems.length}
              </span>
            </div>
            <button onClick={onClose} className="p-2 text-stone-400 hover:text-stone-700">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Wishlist Items */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {wishlistItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <Heart className="w-12 h-12 text-stone-300 mx-auto" />
                <p className="text-base font-serif text-stone-700 font-semibold">Your wishlist is empty</p>
                <p className="text-xs text-stone-400">
                  Save your favorite anti-tarnish items to view them anytime
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-2.5 bg-luxury-charcoal text-white text-xs font-semibold rounded-xl hover:bg-black transition-colors"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              wishlistItems.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3 rounded-xl border border-stone-200/60 bg-stone-50/50 hover:bg-stone-50 transition-colors"
                >
                  <div className="relative w-20 h-20 bg-stone-100 rounded-lg overflow-hidden shrink-0">
                    <Image src={product.image} alt={product.title} fill className="object-cover" />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-xs font-bold text-stone-900 line-clamp-1">
                          {product.title}
                        </h4>
                        <button
                          onClick={() => onRemoveWishlist(product.id)}
                          className="text-stone-400 hover:text-red-500 p-0.5"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[10px] text-stone-500 font-sans mt-0.5 line-clamp-1">
                        {product.material}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold text-sm text-stone-900 font-sans">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>

                      <button
                        onClick={() => {
                          onAddToCart(product);
                          onRemoveWishlist(product.id);
                        }}
                        className="px-3 py-1.5 bg-luxury-charcoal hover:bg-black text-white text-xs font-medium rounded-lg transition-colors flex items-center gap-1"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-luxury-gold" />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
