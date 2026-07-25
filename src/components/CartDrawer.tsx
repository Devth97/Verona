"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Trash2, Plus, Minus, ShoppingBag, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onOpenAuth: () => void;
  userPhone: string | null;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onOpenAuth,
  userPhone,
}: CartDrawerProps) {
  const [couponCode, setCouponCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = discountApplied ? Math.round(subtotal * 0.1) : 0;
  const freeShippingThreshold = 999;
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === "SORELE10" || couponCode.trim().toUpperCase() === "SMJ10") {
      setDiscountApplied(true);
    } else {
      alert("Invalid coupon code. Try 'SMJ10' for 10% OFF!");
    }
  };

  const handleCheckout = () => {
    if (!userPhone) {
      onOpenAuth();
    } else {
      alert(`Proceeding to Razorpay UPI Checkout for +91 ${userPhone}! Total: ₹${subtotal - discountAmount}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm transition-all animate-in fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-stone-200">
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-stone-200 bg-luxury-bg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-luxury-gold" />
                <h2 className="text-lg font-serif font-bold text-stone-900">Your Shopping Bag</h2>
                <span className="text-xs bg-stone-200 text-stone-700 px-2 py-0.5 rounded-full font-bold">
                  {cartItems.reduce((a, b) => a + b.quantity, 0)}
                </span>
              </div>
              <button onClick={onClose} className="p-2 text-stone-400 hover:text-stone-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Bar */}
            <div className="mt-4 bg-white p-3 rounded-xl border border-stone-200/80 shadow-sm">
              <div className="flex items-center justify-between text-xs font-medium text-stone-700 mb-1.5">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
                  {amountNeededForFreeShipping === 0
                    ? "🎉 You unlocked FREE Express Shipping!"
                    : `Add ₹${amountNeededForFreeShipping} more for FREE Express Delivery`}
                </span>
              </div>
              <div className="w-full bg-stone-100 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-luxury-gold h-2 rounded-full transition-all duration-500"
                  style={{ width: `${shippingProgress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <ShoppingBag className="w-12 h-12 text-stone-300 mx-auto" />
                <p className="text-base font-serif text-stone-700 font-semibold">Your bag is empty</p>
                <p className="text-xs text-stone-400">
                  Explore our lightweight anti-tarnish collection under ₹3,500
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-2.5 bg-luxury-charcoal text-white text-xs font-semibold rounded-xl hover:bg-black transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 rounded-xl border border-stone-200/60 bg-stone-50/50 hover:bg-stone-50 transition-colors"
                >
                  <div className="relative w-20 h-20 bg-stone-100 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-xs font-bold text-stone-900 line-clamp-1">
                          {item.product.title}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-stone-400 hover:text-red-500 p-0.5"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[10px] text-stone-500 font-sans mt-0.5">
                        {item.product.material}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold text-sm text-stone-900 font-sans">
                        ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                      </span>

                      {/* Quantity Controls */}
                      <div className="flex items-center border border-stone-300 rounded-lg bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="p-1 hover:bg-stone-100 text-stone-600"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-stone-800">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="p-1 hover:bg-stone-100 text-stone-600"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout */}
          {cartItems.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-stone-200 bg-luxury-bg space-y-3">
              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Coupon code (Try SMJ10)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs border border-stone-300 rounded-lg bg-white focus:outline-none focus:border-luxury-gold uppercase"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-bold rounded-lg transition-colors"
                >
                  Apply
                </button>
              </form>

              {/* Subtotal Calculations */}
              <div className="space-y-1 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
                {discountApplied && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>10% Discount (SMJ10)</span>
                    <span>-₹{discountAmount.toLocaleString("en-IN")}</span>
                  </div>
                )}
                <div className="flex justify-between text-stone-500">
                  <span>Shipping</span>
                  <span>{amountNeededForFreeShipping === 0 ? "FREE" : "₹99"}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-stone-900 pt-2 border-t border-stone-200">
                  <span>Total Amount</span>
                  <span className="text-luxury-goldHover font-sans text-base">
                    ₹{(subtotal - discountAmount + (amountNeededForFreeShipping === 0 ? 0 : 99)).toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full py-3.5 bg-luxury-charcoal hover:bg-black text-white font-semibold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm"
              >
                <span>{userPhone ? "Pay via UPI / COD" : "Login with Phone to Checkout"}</span>
                <ArrowRight className="w-4 h-4 text-luxury-gold" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-stone-400 text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-luxury-gold" />
                <span>100% Insured Shipping & Easy 7-Day Returns</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
