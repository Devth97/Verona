"use client";

import React from "react";
import { ShieldCheck, Award, Truck, RefreshCw, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-luxury-charcoal text-stone-300 pt-12 pb-8 border-t border-stone-800">
      {/* Trust Pillars Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-stone-800">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center p-4 bg-stone-900/50 rounded-xl border border-stone-800">
            <ShieldCheck className="w-8 h-8 text-luxury-gold mb-2" />
            <h4 className="font-serif font-semibold text-white text-sm">Anti-Tarnish Guarantee</h4>
            <p className="text-[11px] text-stone-400 mt-1">Waterproof 18K Gold & Silver finish</p>
          </div>

          <div className="flex flex-col items-center p-4 bg-stone-900/50 rounded-xl border border-stone-800">
            <Award className="w-8 h-8 text-luxury-gold mb-2" />
            <h4 className="font-serif font-semibold text-white text-sm">Certified Quality</h4>
            <p className="text-[11px] text-stone-400 mt-1">Skin-safe & 100% hypoallergenic</p>
          </div>

          <div className="flex flex-col items-center p-4 bg-stone-900/50 rounded-xl border border-stone-800">
            <Truck className="w-8 h-8 text-luxury-gold mb-2" />
            <h4 className="font-serif font-semibold text-white text-sm">Insured Shipping</h4>
            <p className="text-[11px] text-stone-400 mt-1">Express delivery across India</p>
          </div>

          <div className="flex flex-col items-center p-4 bg-stone-900/50 rounded-xl border border-stone-800">
            <RefreshCw className="w-8 h-8 text-luxury-gold mb-2" />
            <h4 className="font-serif font-semibold text-white text-sm">7-Day Easy Returns</h4>
            <p className="text-[11px] text-stone-400 mt-1">Hassle-free replacement policy</p>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Bio */}
        <div className="md:col-span-1 space-y-3">
          <h3 className="font-serif font-bold text-2xl text-white tracking-[0.15em]">
            VERONA
          </h3>
          <span className="text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-semibold block -mt-2">
            BY MANGALADEVI JEWELLERS
          </span>
          <p className="text-xs text-stone-400 leading-relaxed pt-1">
            Rooted in Mangaluru&apos;s rich heritage, crafting contemporary lightweight jewellery (₹500 – ₹3,500) designed for everyday luxury without tarnish or fading.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-luxury-gold mb-3">
            Collections
          </h4>
          <ul className="space-y-2 text-xs text-stone-400">
            <li><a href="#" className="hover:text-white transition-colors">Daily Wear Necklaces</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Statement Earrings</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Stackable Rings</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Lightweight Bracelets</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Best Sellers Under ₹999</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-luxury-gold mb-3">
            Customer Care
          </h4>
          <ul className="space-y-2 text-xs text-stone-400">
            <li><a href="#" className="hover:text-white transition-colors">Jewellery Care Guide</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Ring Size Calculator</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Track Your Order</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact & Physical Store */}
        <div className="space-y-3 text-xs text-stone-400">
          <h4 className="text-xs font-bold uppercase tracking-widest text-luxury-gold mb-3">
            Visit Showroom
          </h4>
          <p className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
            <span>Main Showroom, Hampankatta / Bunder, Mangaluru (Mangalore), Karnataka – 575001</span>
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-luxury-gold shrink-0" />
            <span>WhatsApp: +91 98765 43210</span>
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-luxury-gold shrink-0" />
            <span>care@shreemangaladevijewellers.com</span>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-stone-800 text-center text-[11px] text-stone-500">
        © {new Date().getFullYear()} VERONA by Mangaladevi Jewellers. All rights reserved. Powered by Shopify Headless & Firebase Auth.
      </div>
    </footer>
  );
}
