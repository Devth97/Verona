"use client";

import React from "react";
import { X, MapPin, Clock, Phone, Mail, Navigation, CalendarCheck } from "lucide-react";

interface StoreLocatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StoreLocatorModal({ isOpen, onClose }: StoreLocatorModalProps) {
  if (!isOpen) return null;

  const whatsappBookingUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    "Hi VERONA Jewellers! I would like to book a VIP showroom appointment at your Hampankatta, Mangaluru store."
  )}`;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=Hampankatta+Bunder+Mangaluru+Karnataka+575001`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-luxury-gold/30 p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2 mb-6">
          <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-bold">
            Flagship Showroom
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            Visit VERONA Mangaluru
          </h2>
          <p className="text-xs text-stone-500 max-w-md mx-auto">
            Experience our 18K Gold Plated & 925 Sterling Silver lightweight collections in person.
          </p>
        </div>

        {/* Store Card Details */}
        <div className="space-y-4 bg-luxury-cream/40 p-5 rounded-2xl border border-stone-200/80">
          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-white rounded-xl text-luxury-gold shadow-sm border border-luxury-gold/20 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-stone-900 text-sm">Hampankatta / Bunder Showroom</h4>
              <p className="text-xs text-stone-600 leading-relaxed mt-0.5">
                Main Showroom, Hampankatta / Bunder Area, Mangaluru (Mangalore), Karnataka – 575001
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 pt-3 border-t border-stone-200/60">
            <div className="p-2.5 bg-white rounded-xl text-luxury-gold shadow-sm border border-luxury-gold/20 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-stone-900 text-sm">Showroom Timings</h4>
              <p className="text-xs text-stone-600 mt-0.5">
                <span className="font-semibold text-stone-800">Monday to Saturday:</span> 10:00 AM – 8:30 PM
              </p>
              <p className="text-[11px] text-stone-400">Sunday: Closed for artisan crafting</p>
            </div>
          </div>

          <div className="flex items-start gap-3 pt-3 border-t border-stone-200/60">
            <div className="p-2.5 bg-white rounded-xl text-luxury-gold shadow-sm border border-luxury-gold/20 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-stone-900 text-sm">Concierge & WhatsApp</h4>
              <p className="text-xs text-stone-600 mt-0.5">+91 98765 43210 / care@shreemangaladevijewellers.com</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3.5 bg-white hover:bg-stone-50 border border-stone-300 text-stone-900 text-xs font-semibold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <Navigation className="w-4 h-4 text-luxury-gold" />
            <span>Get Google Maps Directions</span>
          </a>

          <a
            href={whatsappBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3.5 bg-luxury-charcoal hover:bg-black text-white text-xs font-semibold rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
          >
            <CalendarCheck className="w-4 h-4 text-luxury-gold" />
            <span>Book Showroom Visit</span>
          </a>
        </div>
      </div>
    </div>
  );
}
