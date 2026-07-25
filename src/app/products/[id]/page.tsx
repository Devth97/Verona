"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer, { CartItem } from "@/components/CartDrawer";
import PhoneAuthModal from "@/components/PhoneAuthModal";
import SearchModal from "@/components/SearchModal";
import StoreLocatorModal from "@/components/StoreLocatorModal";
import WishlistDrawer from "@/components/WishlistDrawer";
import PincodeDeliveryChecker from "@/components/PincodeDeliveryChecker";
import ProductCard from "@/components/ProductCard";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import BackToTopButton from "@/components/BackToTopButton";
import { PRODUCTS, Product } from "@/data/products";
import {
  Star,
  ShieldCheck,
  Truck,
  RefreshCw,
  IndianRupee,
  Shield,
  PackageCheck,
  Droplets,
  ChevronDown,
  ChevronUp,
  ShoppingBag,
  ArrowRight,
  Heart,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function StandaloneProductPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params?.id as string;

  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];

  const [activeImage, setActiveImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<"desc" | "care" | null>("desc");

  // Cart & Wishlist states
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStoreLocatorOpen, setIsStoreLocatorOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [userPhone, setUserPhone] = useState<string | null>(null);

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = (p: Product, qty: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === p.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === p.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prev, { product: p, quantity: qty }];
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

  const handleToggleWishlist = (p: Product) => {
    setWishlistItems((prev) => {
      const exists = prev.some((w) => w.id === p.id);
      return exists ? prev.filter((w) => w.id !== p.id) : [...prev, p];
    });
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Related products under same category
  const relatedProducts = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-luxury-bg text-luxury-charcoal">
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
        activeCategory={product.category}
        onSelectCategory={() => router.push("/")}
      />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-stone-500 mb-6 font-sans">
          <Link href="/" className="hover:text-luxury-gold">Home</Link>
          <span>/</span>
          <span className="capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-stone-900 font-semibold truncate">{product.title}</span>
        </div>

        {/* Product Page Main Grid (Matching Sorele.co PDP Screenshot 4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column — Gallery & Thumbnails */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Featured Photo */}
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-white border border-stone-200 shadow-lg">
              <Image
                src={activeImage}
                alt={product.title}
                fill
                priority
                className="object-cover object-center"
              />
              {discountPercent > 0 && (
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-lg bg-luxury-charcoal text-luxury-gold shadow-md">
                  {discountPercent}% OFF
                </span>
              )}
            </div>

            {/* Thumbnail Strip (Product Solo, Model Wear, Packaging, Certificate) */}
            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
              {product.galleryImages.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                    activeImage === imgUrl ? "border-luxury-gold shadow-md scale-105" : "border-stone-200 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={imgUrl} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column — Sorele-Style Conversion Purchase Column (Screenshot 4) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Sticky Checkout Header Banner matching Sorele.co ("CHECKOUT NOW 💳 >") */}
            <button
              onClick={() => handleAddToCart(product, quantity)}
              className="w-full py-4 bg-black hover:bg-stone-900 text-white font-bold text-sm tracking-widest uppercase rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all group"
            >
              <span>CHECKOUT NOW</span>
              <span className="text-luxury-gold text-base">💳</span>
              <ArrowRight className="w-4 h-4 text-luxury-gold group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Title & Rating */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 leading-tight">
                {product.title}
              </h1>

              {/* Price Row (₹2,450 ₹3,598 31% OFF) */}
              <div className="flex items-baseline gap-3 mt-3">
                <span className="text-3xl font-bold text-stone-900 font-sans">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-stone-400 line-through font-sans">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 font-sans">
                    ({discountPercent}% OFF)
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-stone-600">
                  {product.rating} ({product.reviewsCount} verified reviews)
                </span>
              </div>
            </div>

            {/* Top 3-Column Delivery Trust Grid (Matching Sorele.co Screenshot 4) */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-stone-50 rounded-2xl border border-stone-200 text-center">
              <div className="flex flex-col items-center p-2">
                <Truck className="w-6 h-6 text-stone-800 mb-1" />
                <span className="text-[11px] font-bold text-stone-900">2 Day Express Delivery</span>
              </div>

              <div className="flex flex-col items-center p-2 border-x border-stone-200">
                <RefreshCw className="w-6 h-6 text-stone-800 mb-1" />
                <span className="text-[11px] font-bold text-stone-900">7 Day Return & Exchange</span>
              </div>

              <div className="flex flex-col items-center p-2">
                <IndianRupee className="w-6 h-6 text-stone-800 mb-1" />
                <span className="text-[11px] font-bold text-stone-900">Cash On Delivery</span>
              </div>
            </div>

            {/* Bottom 3-Column Warranty & Waterproof Grid (Matching Sorele.co Screenshot 4) */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-white rounded-2xl border border-stone-200 text-center shadow-sm">
              <div className="flex flex-col items-center p-2">
                <Shield className="w-6 h-6 text-luxury-gold mb-1" />
                <span className="text-[11px] font-bold text-stone-900">6-Month Warranty</span>
              </div>

              <div className="flex flex-col items-center p-2 border-x border-stone-200">
                <PackageCheck className="w-6 h-6 text-luxury-gold mb-1" />
                <span className="text-[11px] font-bold text-stone-900">7-Day Easy Returns</span>
              </div>

              <div className="flex flex-col items-center p-2">
                <Droplets className="w-6 h-6 text-cyan-600 mb-1" />
                <span className="text-[11px] font-bold text-stone-900">Fully Waterproof</span>
              </div>
            </div>

            {/* Quantity & Add to Cart Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <div className="flex items-center justify-between border border-stone-300 rounded-xl bg-stone-50 p-1 sm:w-auto">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone-700 hover:bg-white rounded-lg font-bold text-base"
                >
                  -
                </button>
                <span className="px-4 text-base font-bold text-stone-900">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone-700 hover:bg-white rounded-lg font-bold text-base"
                >
                  +
                </button>
              </div>

              <div className="flex items-center gap-2 flex-1">
                <button
                  onClick={() => handleAddToCart(product, quantity)}
                  className="flex-1 py-3.5 sm:py-4 bg-luxury-charcoal hover:bg-black text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-xs sm:text-sm whitespace-nowrap"
                >
                  <ShoppingBag className="w-4 h-4 text-luxury-gold shrink-0" />
                  <span>Add {quantity} to Bag • ₹{(product.price * quantity).toLocaleString("en-IN")}</span>
                </button>

                <button
                  onClick={() => handleToggleWishlist(product)}
                  className="p-3.5 sm:p-4 bg-white border border-stone-300 rounded-xl text-stone-700 hover:text-red-500 transition-colors shrink-0"
                  title="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${wishlistItems.some((w) => w.id === product.id) ? "fill-red-500 text-red-500" : ""}`} />
                </button>
              </div>
            </div>

            {/* Pincode Estimator */}
            <PincodeDeliveryChecker />

            {/* Collapsible Accordions matching Sorele.co (Description & Care Instructions) */}
            <div className="space-y-3 pt-4 border-t border-stone-200">
              {/* Description Accordion */}
              <div className="border border-stone-200 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => setOpenAccordion(openAccordion === "desc" ? null : "desc")}
                  className="w-full p-4 text-left flex justify-between items-center font-serif font-bold text-stone-900 text-sm"
                >
                  <span>Description</span>
                  {openAccordion === "desc" ? <ChevronUp className="w-4 h-4 text-stone-500" /> : <ChevronDown className="w-4 h-4 text-stone-500" />}
                </button>
                {openAccordion === "desc" && (
                  <div className="p-4 pt-0 text-xs text-stone-600 leading-relaxed font-sans border-t border-stone-100">
                    <p>{product.description}</p>
                    <p className="mt-2 font-semibold text-stone-800">Material: {product.material}</p>
                  </div>
                )}
              </div>

              {/* Care Instructions Accordion */}
              <div className="border border-stone-200 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => setOpenAccordion(openAccordion === "care" ? null : "care")}
                  className="w-full p-4 text-left flex justify-between items-center font-serif font-bold text-stone-900 text-sm"
                >
                  <span>Care Instructions</span>
                  {openAccordion === "care" ? <ChevronUp className="w-4 h-4 text-stone-500" /> : <ChevronDown className="w-4 h-4 text-stone-500" />}
                </button>
                {openAccordion === "care" && (
                  <div className="p-4 pt-0 text-xs text-stone-600 leading-relaxed font-sans border-t border-stone-100">
                    <p>{product.careInstructions}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Grid */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-stone-200">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Complete The Look</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {relatedProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onAddToCart={(prod) => handleAddToCart(prod, 1)}
                />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Sorele Widgets */}
      <WhatsAppWidget />
      <BackToTopButton />

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
        onRemoveWishlist={(id) => setWishlistItems((prev) => prev.filter((w) => w.id !== id))}
        onAddToCart={(p) => handleAddToCart(p, 1)}
      />

      {/* Store Locator Modal */}
      <StoreLocatorModal isOpen={isStoreLocatorOpen} onClose={() => setIsStoreLocatorOpen(false)} />

      {/* Phone Auth Modal */}
      <PhoneAuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} onSuccess={(phone) => setUserPhone(phone)} />

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} onSelectProduct={(p) => router.push(`/products/${p.id}`)} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
