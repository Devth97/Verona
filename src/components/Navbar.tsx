"use client";

import React, { useState } from "react";
import { Search, ShoppingBag, User, Heart, Menu, X, Sparkles, ShieldCheck } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenAuth: () => void;
  onOpenSearch?: () => void;
  userPhone: string | null;
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
}

export default function Navbar({
  cartCount,
  onOpenCart,
  onOpenAuth,
  onOpenSearch,
  userPhone,
  activeCategory,
  onSelectCategory,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { id: "all", label: "All Jewellery" },
    { id: "necklaces", label: "Necklaces" },
    { id: "earrings", label: "Earrings" },
    { id: "rings", label: "Rings" },
    { id: "bracelets", label: "Bracelets" },
    { id: "anklets", label: "Anklets" },
    { id: "under-999", label: "Under ₹999" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-luxury-bg/95 backdrop-blur-md border-b border-stone-200/80">
      {/* Announcement Bar */}
      <div className="bg-luxury-charcoal text-white text-[11px] font-medium py-2 px-4 text-center tracking-widest flex items-center justify-center gap-2 overflow-hidden">
        <Sparkles className="w-3.5 h-3.5 text-luxury-gold animate-pulse shrink-0" />
        <span className="truncate">
          100% WATERPROOF & TARNISH-FREE • FREE SHIPPING OVER ₹999 • COD AVAILABLE
        </span>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-stone-700 hover:text-luxury-gold"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Brand Logo */}
        <div className="flex flex-col items-center lg:items-start cursor-pointer" onClick={() => onSelectCategory("all")}>
          <div className="flex items-center gap-1.5">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-[0.15em]">
              VERONA
            </span>
          </div>
          <span className="text-[9px] uppercase tracking-[0.3em] text-luxury-gold font-semibold">
            BY MANGALADEVI JEWELLERS
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-xs uppercase tracking-wider font-medium text-stone-700">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`transition-colors py-1 relative ${
                activeCategory === cat.id
                  ? "text-luxury-gold font-bold"
                  : "hover:text-luxury-gold"
              }`}
            >
              {cat.label}
              {activeCategory === cat.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-gold rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="p-2 text-stone-700 hover:text-luxury-gold transition-colors"
            title="Search Jewellery"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* User Account / Auth Button */}
          <button
            onClick={onOpenAuth}
            className="flex items-center gap-1.5 text-xs font-medium text-stone-700 hover:text-luxury-gold p-1.5 transition-colors"
          >
            <User className="w-5 h-5 text-stone-800" />
            <span className="hidden sm:inline">
              {userPhone ? `+91 ${userPhone.slice(-4)}` : "Login"}
            </span>
          </button>

          {/* Cart Icon */}
          <button
            onClick={onOpenCart}
            className="relative p-2 bg-luxury-goldLight hover:bg-luxury-cream border border-luxury-gold/30 rounded-full text-stone-900 transition-all shadow-sm"
          >
            <ShoppingBag className="w-5 h-5 text-luxury-goldHover" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-luxury-charcoal text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-white animate-in zoom-in">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 py-4 space-y-3 animate-in slide-in-from-top-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2 px-3 text-sm font-medium rounded-lg ${
                activeCategory === cat.id
                  ? "bg-luxury-goldLight text-luxury-gold font-bold"
                  : "text-stone-700 hover:bg-stone-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
