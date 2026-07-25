"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle2 } from "lucide-react";

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
    customerName: "Pooja H.",
    location: "Mangaluru",
    productTitle: "Aura Freshwater Pearl Hoops",
    productImage: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=200&q=80",
    timeAgo: "4m ago",
  },
  {
    id: 2,
    customerName: "Ananya R.",
    location: "Bengaluru",
    productTitle: "Celeste 18K Solitaire Pendant",
    productImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=200&q=80",
    timeAgo: "12m ago",
  },
  {
    id: 3,
    customerName: "Shruti S.",
    location: "Mumbai",
    productTitle: "Luna Stackable Pavé Ring",
    productImage: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=200&q=80",
    timeAgo: "18m ago",
  },
];

export default function RecentPurchaseToast() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Initial subtle delay of 8 seconds before showing first toast
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
      // Auto-hide after 3.5 seconds
      setTimeout(() => setIsVisible(false), 3500);
    }, 8000);

    // Rotate toast subtly every 25 seconds
    const interval = setInterval(() => {
      if (isDismissed) return;
      setCurrentIndex((prev) => (prev + 1) % SAMPLE_NOTIFICATIONS.length);
      setIsVisible(true);
      // Auto-hide after 3.5 seconds so it never lingers
      setTimeout(() => setIsVisible(false), 3500);
    }, 25000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  const current = SAMPLE_NOTIFICATIONS[currentIndex];

  return (
    /* Hidden on mobile (hidden md:flex) to prevent obstructing bottom navigation bar */
    <div className="hidden md:flex fixed bottom-6 left-6 z-30 max-w-xs bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-stone-200/80 p-2.5 items-center gap-2.5 animate-in slide-in-from-left-4 fade-in duration-300">
      {/* Product Thumbnail */}
      <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
        <Image src={current.productImage} alt={current.productTitle} fill className="object-cover" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0 pr-1">
        <div className="flex items-center gap-1 text-[9px] uppercase font-bold tracking-wider text-emerald-700">
          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
          <span>Verified Purchase</span>
        </div>
        <p className="text-[11px] font-serif font-bold text-stone-900 truncate">
          {current.productTitle}
        </p>
        <p className="text-[9px] text-stone-500 truncate">
          {current.customerName} ({current.location}) • {current.timeAgo}
        </p>
      </div>

      {/* Dismiss Button (Disables toast for entire session) */}
      <button
        onClick={() => {
          setIsVisible(false);
          setIsDismissed(true);
        }}
        className="p-1 text-stone-400 hover:text-stone-700 transition-colors"
        title="Dismiss"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
