"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, X, Sparkles, ArrowRight } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export default function SearchModal({ isOpen, onClose, onSelectProduct }: SearchModalProps) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const popularSearches = ["Gold Solitaire", "Pearl Earrings", "Stackable Ring", "Under ₹999", "Anklets"];

  const searchResults = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.material.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-start justify-center pt-16 px-4 animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-luxury-gold/40">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-stone-200 bg-luxury-bg flex items-center gap-3">
          <Search className="w-5 h-5 text-luxury-gold shrink-0" />
          <input
            type="text"
            placeholder="Search anti-tarnish necklaces, earrings, rings under ₹3,500..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-stone-900 placeholder-stone-400 font-sans text-sm sm:text-base focus:outline-none"
          />
          <button onClick={onClose} className="p-2 text-stone-400 hover:text-stone-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Popular Tags */}
        {!query.trim() && (
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
              <span>Popular Searches</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-3.5 py-1.5 bg-stone-100 hover:bg-luxury-goldLight hover:text-luxury-goldHover text-stone-700 text-xs font-semibold rounded-xl transition-all border border-stone-200"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {query.trim() && (
          <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-3">
            <p className="text-xs text-stone-500 font-medium">
              Found {searchResults.length} results for &quot;{query}&quot;
            </p>

            {searchResults.length === 0 ? (
              <div className="text-center py-10 text-stone-400 text-sm">
                No matching jewellery found. Try searching for &quot;Gold&quot; or &quot;Ring&quot;.
              </div>
            ) : (
              searchResults.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="flex items-center justify-between p-3 rounded-2xl hover:bg-stone-50 border border-stone-100 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                      <Image src={product.image} alt={product.title} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-stone-900 text-sm group-hover:text-luxury-gold transition-colors">
                        {product.title}
                      </h4>
                      <p className="text-[11px] text-stone-500">{product.material}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-bold text-stone-900 text-sm">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-luxury-gold transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
