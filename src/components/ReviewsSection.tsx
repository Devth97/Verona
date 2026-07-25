"use client";

import React from "react";
import { Star, CheckCircle2, ThumbsUp } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: "Ananya R., Bengaluru",
      product: "Celeste 18K Gold Solitaire Pendant",
      rating: 5,
      date: "Verified Buyer • 3 days ago",
      comment:
        "I was skeptical about waterproof gold under ₹1,500, but I've been showering with this pendant every single day for 2 months! Zero discoloration or fading. Looks like real 18K solid gold!",
    },
    {
      id: 2,
      name: "Pooja Hegde, Mangaluru",
      product: "Aura Freshwater Pearl Hoops",
      rating: 5,
      date: "Verified Buyer • 1 week ago",
      comment:
        "Extremely lightweight! My ears usually get itchy with fashion jewellery, but these 925 sterling silver hoops cause zero irritation. Plus, the packaging felt like a ₹10k luxury order!",
    },
    {
      id: 3,
      name: "Shruti Shetty, Mumbai",
      product: "Luna Stackable Pavé Band Ring",
      rating: 5,
      date: "Verified Buyer • 2 weeks ago",
      comment:
        "The sparkle on this ring is unreal. Fits perfectly and doesn't scratch easily when working on my laptop all day. Highly recommend VERONA by Mangaladevi Jewellers!",
    },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-3 mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-bold">
          Social Proof & Trust
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
          Loved by 10,000+ Modern Women
        </h2>
        <div className="flex items-center justify-center gap-2 text-stone-700 font-semibold text-sm">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span>4.9 / 5 Overall Customer Rating</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between hover:shadow-luxury transition-all"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded">
                  <CheckCircle2 className="w-3 h-3" />
                  {rev.date}
                </span>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed font-sans italic">
                &quot;{rev.comment}&quot;
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
              <div>
                <h4 className="font-serif font-bold text-stone-900 text-sm">{rev.name}</h4>
                <p className="text-[10px] text-luxury-gold font-medium">{rev.product}</p>
              </div>
              <ThumbsUp className="w-4 h-4 text-stone-400 hover:text-luxury-gold cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
