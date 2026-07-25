"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import CartDrawer, { CartItem } from "@/components/CartDrawer";
import PhoneAuthModal from "@/components/PhoneAuthModal";
import ProductQuickViewModal from "@/components/ProductQuickViewModal";
import SearchModal from "@/components/SearchModal";
import StoreLocatorModal from "@/components/StoreLocatorModal";
import WishlistDrawer from "@/components/WishlistDrawer";
import FaqAccordion from "@/components/FaqAccordion";
import TarnishProofGuaranteeBanner from "@/components/TarnishProofGuaranteeBanner";
import ReviewsSection from "@/components/ReviewsSection";
import VeronaWomenReels from "@/components/VeronaWomenReels";
import HeroSliderBanner from "@/components/HeroSliderBanner";
import CategoryVisualCards from "@/components/CategoryVisualCards";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import BackToTopButton from "@/components/BackToTopButton";
import StickyAddToCartBar from "@/components/StickyAddToCartBar";
import Footer from "@/components/Footer";
import { PRODUCTS, Product } from "@/data/products";
import { Sparkles, Shield, Award, ArrowRight, Heart, Star, Check, MapPin } from "lucide-react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeTab, setActiveTab] = useState<"all" | "everyday" | "office">("all");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStoreLocatorOpen, setIsStoreLocatorOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [userPhone, setUserPhone] = useState<string | null>(null);

  // Load wishlist from LocalStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("verona_wishlist");
      if (saved) setWishlistItems(JSON.parse(saved));
    } catch (e) {
      console.error("Failed to load wishlist", e);
    }
  }, []);

  const handleToggleWishlist = (product: Product) => {
    setWishlistItems((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      const updated = exists ? prev.filter((p) => p.id !== product.id) : [...prev, product];
      try {
        localStorage.setItem("verona_wishlist", JSON.stringify(updated));
      } catch (e) {
        console.error("Failed to save wishlist", e);
      }
      return updated;
    });
  };

  // Filter products based on category & everyday/office tabs
  const filteredProducts = PRODUCTS.filter((product) => {
    // Category check
    let catMatch = true;
    if (activeCategory === "under-999") catMatch = product.price <= 999;
    else if (activeCategory !== "all") catMatch = product.category === activeCategory;

    // Tab check (Everyday Wear / Office Wear)
    let tabMatch = true;
    if (activeTab === "everyday") tabMatch = product.tag === "everyday";
    else if (activeTab === "office") tabMatch = product.tag === "office";

    return catMatch && tabMatch;
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
        wishlistCount={wishlistItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenStoreLocator={() => setIsStoreLocatorOpen(true)}
        userPhone={userPhone}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Full-Width Sorele-Style Hero Slider Banner (Screenshot 1) */}
        <HeroSliderBanner onShopNow={() => setActiveCategory("all")} />

        {/* Visual Category Cards Grid (Screenshot 2) */}
        <CategoryVisualCards
          activeCategory={activeCategory}
          onSelectCategory={(cat) => setActiveCategory(cat)}
        />

        {/* Product Collection Grid with Everyday Wear / Office Wear Tab Switcher (Screenshot 2 & 3) */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tab Switcher matching Sorele.co (EVERYDAY WEAR | OFFICE WEAR) */}
          <div className="flex justify-center items-center gap-6 mb-8 border-b border-stone-200 pb-3">
            <button
              onClick={() => setActiveTab("all")}
              className={`text-xs uppercase tracking-[0.25em] font-bold py-2 transition-colors relative ${
                activeTab === "all" ? "text-stone-900" : "text-stone-400 hover:text-stone-700"
              }`}
            >
              All Pieces
              {activeTab === "all" && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-gold" />}
            </button>
            <button
              onClick={() => setActiveTab("everyday")}
              className={`text-xs uppercase tracking-[0.25em] font-bold py-2 transition-colors relative ${
                activeTab === "everyday" ? "text-stone-900" : "text-stone-400 hover:text-stone-700"
              }`}
            >
              EVERYDAY WEAR
              {activeTab === "everyday" && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-gold" />}
            </button>
            <button
              onClick={() => setActiveTab("office")}
              className={`text-xs uppercase tracking-[0.25em] font-bold py-2 transition-colors relative ${
                activeTab === "office" ? "text-stone-900" : "text-stone-400 hover:text-stone-700"
              }`}
            >
              OFFICE WEAR
              {activeTab === "office" && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-gold" />}
            </button>
          </div>

          <div className="flex items-center justify-between mb-6">
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
              <p className="text-xs text-stone-500 mt-1 font-sans">
                Showing {filteredProducts.length} items • Guaranteed price cap under ₹3,500
              </p>
            </div>

            {/* Quick Price Badge Pill */}
            <div className="hidden sm:block px-3.5 py-1.5 bg-luxury-goldLight border border-luxury-gold/40 text-luxury-goldHover text-xs font-bold rounded-lg">
              Max Price: ₹3,500
            </div>
          </div>

          {/* Product Grid with Hover Image Swap & Percentage Badges (Screenshot 3) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={(p) => handleAddToCart(p, 1)}
                onQuickView={(p) => setQuickViewProduct(p)}
                isWishlisted={wishlistItems.some((w) => w.id === product.id)}
                onToggleWishlist={handleToggleWishlist}
              />
            ))}
          </div>
        </section>

        {/* VERONA Women Video Reels Showcase */}
        <VeronaWomenReels />

        {/* Technical Tarnish Proof Guarantee */}
        <TarnishProofGuaranteeBanner />

        {/* Customer Social Proof Reviews */}
        <ReviewsSection />

        {/* FAQ Accordion */}
        <FaqAccordion />

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

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistItems}
        onRemoveWishlist={(id) => setWishlistItems((prev) => prev.filter((p) => p.id !== id))}
        onAddToCart={(product) => handleAddToCart(product, 1)}
      />

      {/* Flagship Store Locator Modal */}
      <StoreLocatorModal
        isOpen={isStoreLocatorOpen}
        onClose={() => setIsStoreLocatorOpen(false)}
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
