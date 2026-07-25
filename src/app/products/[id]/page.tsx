"use client";

import React, { useState, useEffect } from "react";
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
  ArrowLeft,
  Heart,
  Tag,
  Clock,
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
  const [activeTab, setActiveTab] = useState<"related" | "recent">("related");

  // Cart & Wishlist states
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStoreLocatorOpen, setIsStoreLocatorOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [userPhone, setUserPhone] = useState<string | null>(null);

  // Countdown timer simulation (matching Sorele.co 06m 38s timer box)
  const [timeLeft, setTimeLeft] = useState({ minutes: 6, seconds: 38 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return { minutes: 10, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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

  // Related products & Recently viewed catalog
  const relatedProducts = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const recentlyViewed = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-luxury-bg text-luxury-charcoal pb-24 sm:pb-0">
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
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        {/* Top Back Navigation & Breadcrumbs */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-stone-300 hover:border-luxury-gold text-stone-800 hover:text-stone-900 text-xs font-bold transition-all shadow-sm group"
          >
            <ArrowLeft className="w-4 h-4 text-stone-600 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Shopping</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs text-stone-500 font-sans">
            <Link href="/" className="hover:text-luxury-gold">Home</Link>
            <span>/</span>
            <span className="capitalize">{product.category}</span>
            <span>/</span>
            <span className="text-stone-900 font-semibold truncate max-w-xs">{product.title}</span>
          </div>
        </div>

        {/* Sorele.co PDP Main Grid (Matching Screenshots 1, 2, 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column — Gallery & Thumbnails */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Featured Photo Canvas */}
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

            {/* Thumbnail Row matching Sorele.co (Product Solo, Model Wear, Packaging, Certificate) */}
            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
              {product.galleryImages.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 shrink-0 transition-all ${
                    activeImage === imgUrl ? "border-luxury-gold shadow-md scale-105" : "border-stone-200 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={imgUrl} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column — Sorele-Style Conversion Details Column */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Title */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-serif font-semibold text-stone-900 leading-tight">
                {product.title}
              </h1>

              {/* Price Row (matching Sorele.co ₹1,979 ₹4,200) */}
              <div className="flex items-baseline gap-3 mt-2">
                {product.originalPrice && (
                  <span className="text-lg text-stone-400 line-through font-sans">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
                <span className="text-3xl font-bold text-emerald-700 font-sans">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* Flat Discount Offer Pill (matching Sorele.co Screenshot 2: "Flat 200 off above 2499") */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 font-sans">
              <Tag className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Flat ₹200 OFF on orders above ₹2,499</span>
            </div>

            {/* Red Dashed Secret Offer Box (matching Sorele.co Screenshot 2) */}
            <div className="p-4 rounded-2xl border-2 border-dashed border-rose-300 bg-rose-50/50 space-y-2 font-sans">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-800">
                <Clock className="w-4 h-4 text-rose-600 shrink-0" />
                <span>
                  Order within{" "}
                  <strong className="text-rose-600">
                    {String(timeLeft.minutes).padStart(2, "0")}m {String(timeLeft.seconds).padStart(2, "0")}s
                  </strong>{" "}
                  for an extra <strong className="text-rose-600">10% OFF</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-600">
                <span>Use code</span>
                <span className="px-2.5 py-0.5 rounded bg-stone-900 text-white font-mono font-bold tracking-widest text-[11px]">
                  SECRET10
                </span>
              </div>
            </div>

            {/* Action CTAs (matching Sorele.co Screenshot 2: ADD TO CART + Heart + CHECKOUT NOW) */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleAddToCart(product, quantity)}
                  className="flex-1 py-4 bg-stone-900 hover:bg-black text-white font-bold text-sm tracking-widest uppercase rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all"
                >
                  <ShoppingBag className="w-4 h-4 text-luxury-gold shrink-0" />
                  <span>ADD TO CART</span>
                </button>

                <button
                  onClick={() => handleToggleWishlist(product)}
                  className="p-4 bg-white border border-stone-300 rounded-2xl text-stone-700 hover:text-rose-500 transition-colors shadow-sm shrink-0"
                  title="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${wishlistItems.some((w) => w.id === product.id) ? "fill-rose-500 text-rose-500" : ""}`} />
                </button>
              </div>

              <button
                onClick={() => handleAddToCart(product, quantity)}
                className="w-full py-4 bg-black hover:bg-stone-900 text-white font-bold text-sm tracking-widest uppercase rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all group"
              >
                <span>CHECKOUT NOW</span>
                <span className="text-luxury-gold text-base">💳</span>
                <ArrowRight className="w-4 h-4 text-luxury-gold group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Delivery Trust Badges — Top 3 Column Grid (matching Sorele.co Screenshot 2 & 3) */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-white rounded-2xl border border-stone-200 text-center shadow-sm">
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

            {/* Warranty Trust Badges — Bottom 3 Column Grid (matching Sorele.co Screenshot 3) */}
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

            {/* Ratings & Reviews Counter (matching Sorele.co Screenshot 3) */}
            <div className="flex items-center gap-2 pt-1 font-sans">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-semibold text-stone-700">
                {product.rating} ({product.reviewsCount} reviews)
              </span>
            </div>

            {/* Pincode Estimator */}
            <PincodeDeliveryChecker />

            {/* Collapsible Accordions (matching Sorele.co Screenshot 3: Description & Care Instructions) */}
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

        {/* Sorele-style Tabbed Section: RELATED PRODUCTS / RECENTLY VIEWED (Screenshot 4) */}
        <section className="mt-16 pt-12 border-t border-stone-200">
          <div className="flex items-center gap-8 mb-8 border-b border-stone-200">
            <button
              onClick={() => setActiveTab("related")}
              className={`pb-3 text-xs sm:text-sm font-serif font-bold tracking-widest uppercase transition-all relative ${
                activeTab === "related" ? "text-stone-900 border-b-2 border-stone-900" : "text-stone-400 hover:text-stone-600"
              }`}
            >
              RELATED PRODUCTS
            </button>

            <button
              onClick={() => setActiveTab("recent")}
              className={`pb-3 text-xs sm:text-sm font-serif font-bold tracking-widest uppercase transition-all relative ${
                activeTab === "recent" ? "text-stone-900 border-b-2 border-stone-900" : "text-stone-400 hover:text-stone-600"
              }`}
            >
              RECENTLY VIEWED
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {(activeTab === "related" ? relatedProducts : recentlyViewed).map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onAddToCart={(prod) => handleAddToCart(prod, 1)}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Sorele Mobile Bottom Floating Quick Buy Bar (matching Screenshot 3 & 4) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-stone-200 p-3 shadow-2xl block sm:hidden">
        <div className="flex items-center justify-between gap-3 max-w-7xl mx-auto">
          <div className="min-w-0 flex-1">
            <h4 className="text-xs font-serif font-bold text-stone-900 truncate">
              {product.title}
            </h4>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-sm font-bold text-emerald-700 font-sans">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-stone-400 line-through font-sans">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={() => handleAddToCart(product, quantity)}
            className="py-3 px-6 bg-stone-900 hover:bg-black text-white font-bold text-xs tracking-wider uppercase rounded-xl shadow-lg shrink-0"
          >
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Widgets */}
      <WhatsAppWidget />
      <BackToTopButton />

      {/* Modals & Drawers */}
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

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistItems}
        onRemoveWishlist={(id) => setWishlistItems((prev) => prev.filter((w) => w.id !== id))}
        onAddToCart={(p) => handleAddToCart(p, 1)}
      />

      <StoreLocatorModal isOpen={isStoreLocatorOpen} onClose={() => setIsStoreLocatorOpen(false)} />
      <PhoneAuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} onSuccess={(phone) => setUserPhone(phone)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} onSelectProduct={(p) => router.push(`/products/${p.id}`)} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
