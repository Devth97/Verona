"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import CartDrawer, { CartItem } from "@/components/CartDrawer";
import PhoneAuthModal from "@/components/PhoneAuthModal";
import ProductQuickViewModal from "@/components/ProductQuickViewModal";
import SearchModal from "@/components/SearchModal";
import TarnishProofGuaranteeBanner from "@/components/TarnishProofGuaranteeBanner";
import ReviewsSection from "@/components/ReviewsSection";
import VeronaWomenReels from "@/components/VeronaWomenReels";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import BackToTopButton from "@/components/BackToTopButton";
import StickyAddToCartBar from "@/components/StickyAddToCartBar";
import Footer from "@/components/Footer";
import { PRODUCTS, Product } from "@/data/products";
import { Sparkles, Shield, Award, ArrowRight, Heart, Star, Check } from "lucide-react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [userPhone, setUserPhone] = useState<string | null>(null);

  // Filter products based on selected category / price filter
  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "under-999") return product.price <= 999;
    return product.category === activeCategory;
  });

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== id));
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col justify-between relative bg-luxury-bg text-luxury-charcoal selection:bg-luxury-goldLight selection:text-luxury-goldHover">
      {/* Header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        userPhone={userPhone}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative overflow-hidden bg-gradient-to-b from-luxury-cream/80 via-luxury-bg to-luxury-bg py-12 lg:py-20 border-b border-stone-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Text Left */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-luxury-gold/40 text-luxury-goldHover text-xs font-semibold shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
                  <span>VERONA • By Mangaladevi Jewellers • Under ₹3,500</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 leading-[1.15] tracking-tight">
                  Everyday Luxury <br />
                  <span className="italic font-normal font-serif text-luxury-goldHover">
                    That Never Tarnishes.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
                  Rooted in Mangaluru&apos;s rich heritage. Waterproof, sweatproof, and skin-safe 18K gold plated & 925 silver jewellery designed for modern Indian women.
                </p>

                {/* Hero Badges */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-semibold text-stone-700">
                  <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-lg border border-stone-200">
                    <Shield className="w-4 h-4 text-luxury-gold" />
                    <span>Waterproof & Sweatproof</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-lg border border-stone-200">
                    <Award className="w-4 h-4 text-luxury-gold" />
                    <span>Hypoallergenic 925 Silver</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-lg border border-stone-200">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>COD Available</span>
                  </div>
                </div>

                {/* Call to Action Buttons */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4">
                  <button
                    onClick={() => setActiveCategory("under-999")}
                    className="px-6 py-3.5 bg-luxury-charcoal hover:bg-black text-white text-xs font-semibold rounded-xl transition-all shadow-md flex items-center gap-2"
                  >
                    <span>Shop Best Sellers Under ₹999</span>
                    <ArrowRight className="w-4 h-4 text-luxury-gold" />
                  </button>
                  <button
                    onClick={() => setActiveCategory("all")}
                    className="px-6 py-3.5 bg-white hover:bg-stone-50 text-stone-900 border border-stone-300 text-xs font-semibold rounded-xl transition-all shadow-sm"
                  >
                    View All Collections
                  </button>
                </div>
              </div>

              {/* Hero Image Collage */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80"
                    alt="VERONA Luxury Jewellery Collection by Mangaladevi Jewellers"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                    <p className="text-xs uppercase tracking-widest font-semibold text-luxury-gold">
                      Featured Piece
                    </p>
                    <h3 className="font-serif text-lg font-bold text-white">
                      Celeste 18K Gold Solitaire — ₹1,299
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filters Bar */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                {activeCategory === "all" && "All Lightweight Jewellery"}
                {activeCategory === "necklaces" && "Everyday Necklaces & Pendants"}
                {activeCategory === "earrings" && "Anti-Tarnish Earrings & Hoops"}
                {activeCategory === "rings" && "Stackable & Pavé Rings"}
                {activeCategory === "bracelets" && "Lightweight Wrist Bracelets"}
                {activeCategory === "anklets" && "Waterproof Barefoot Anklets"}
                {activeCategory === "under-999" && "Curated Pieces Under ₹999"}
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Showing {filteredProducts.length} items • Guaranteed price cap under ₹3,500
              </p>
            </div>

            {/* Quick Price Badge Pill */}
            <div className="hidden sm:block px-3 py-1.5 bg-luxury-goldLight border border-luxury-gold/40 text-luxury-goldHover text-xs font-bold rounded-lg">
              Max Price: ₹3,500
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={(p) => handleAddToCart(p, 1)}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            ))}
          </div>
        </section>

        {/* VERONA Women Video Reels Showcase (Sorele Women Style) */}
        <VeronaWomenReels />

        {/* Tarnish Proof Guarantee Technology Section */}
        <TarnishProofGuaranteeBanner />

        {/* Customer Social Proof Reviews */}
        <ReviewsSection />

        {/* Gifting Banner */}
        <section className="my-16 py-14 bg-luxury-charcoal text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
            <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-bold">
              Luxury Gifting Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold max-w-2xl mx-auto">
              Delivered in Signature Luxury Packaging
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto leading-relaxed">
              Every order includes our signature pouch, microfiber polishing cloth, and custom gift note card. Perfect for birthdays, anniversaries, and self-love.
            </p>
            <button
              onClick={() => setActiveCategory("under-999")}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-luxury-gold hover:bg-luxury-goldHover text-white text-xs font-semibold rounded-xl transition-all shadow-md"
            >
              <span>Explore Giftables Under ₹1,500</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>

      {/* Floating Sorele-Style Widgets */}
      <WhatsAppWidget />
      <BackToTopButton />
      <StickyAddToCartBar onOpenCart={() => setIsCartOpen(true)} cartCount={totalCartCount} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onOpenAuth={() => {
          setIsCartOpen(false);
          setIsAuthOpen(true);
        }}
        userPhone={userPhone}
      />

      {/* Firebase Phone Auth Modal */}
      <PhoneAuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onSuccess={(phone) => setUserPhone(phone)}
      />

      {/* Product Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(product, qty) => handleAddToCart(product, qty)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setQuickViewProduct(p)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
