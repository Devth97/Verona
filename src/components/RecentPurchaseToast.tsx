"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, X, CheckCircle2 } from "lucide-react";
import { PRODUCTS } from "@/data/products";

export interface NotificationItem {
  id: number;
  customerName: string;
  location: string;
  productTitle: string;
  productImage: string;
  timeAgo: string;
}

const SAMPLE_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 1,
    customerName: "Pooja Hegde",
    location: "Mangaluru",
    productTitle: "Aura Freshwater Pearl Hoop Earrings",
    productImage: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=200&q=80",
    timeAgo: "4 minutes ago",
  },
  {
    id: 2,
    customerName: "Ananya Rao",
    location: "Bengaluru",
    productTitle: "Celeste 18K Gold Solitaire Pendant",
    productImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=200&q=80",
    timeAgo: "12 minutes ago",
  },
  {
    id: 3,
    customerName: "Shruti Shetty",
    location: "Mumbai",
    productTitle: "Luna Stackable Pavé Diamond Band Ring",
    productImage: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=200&q=80",
    timeAgo: "18 minutes ago",
  },
];

export default function RecentPurchaseToast() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show toast after 4 seconds initial delay
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    // Rotate toast every 12 seconds
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % SAMPLE_NOTIFICATIONS.length);
        setIsVisible(true);
      }, 800);
    }, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  const current = SAMPLE_NOTIFICATIONS[currentIndex];

  return (
    <div className="fixed bottom-20 left-6 z-40 max-w-sm bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-stone-200 p-3.5 flex items-center gap-3 animate-in slide-in-from-left-6 duration-500">
      {/* Product Thumbnail */}
      <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
        <Image src={current.productImage} alt={current.productTitle} fill className="object-cover" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-emerald-700">
          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
          <span>Recently Purchased</span>
        </div>
        <p className="text-xs font-serif font-bold text-stone-900 truncate mt-0.5">
          {current.productTitle}
        </p>
        <p className="text-[10px] text-stone-500 truncate">
          Purchased by {current.customerName} ({current.location}) • {current.timeAgo}
        </p>
      </div>

      {/* Dismiss Button */}
      <button onClick={() => setIsVisible(false)} className="p-1 text-stone-400 hover:text-stone-600">
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
