"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS_DATA: FaqItem[] = [
  {
    question: "Is VERONA jewellery really 100% waterproof and tarnish-proof?",
    answer:
      "Yes! Our jewellery is crafted using 10x thicker 18K Real Gold PVD Vacuum Plating over surgical stainless steel or solid 925 sterling silver. You can shower, swim, workout, and apply perfume without any loss of color or shine.",
  },
  {
    question: "Will it cause skin allergy, greening, or itching?",
    answer:
      "Never. All VERONA pieces are 100% hypoallergenic, nickel-free, lead-free, and cadmium-free. They are engineered specifically for sensitive Indian skin types.",
  },
  {
    question: "What is your price guarantee policy?",
    answer:
      "Every single piece in our online catalog is strictly priced under ₹3,500 MAX, with best-selling daily wear pieces starting from ₹500 to ₹999. You get luxury craftsmanship without offline gold markups.",
  },
  {
    question: "How long does shipping take across India?",
    answer:
      "Orders are dispatched within 24 hours from our Mangaluru warehouse. Express delivery takes 1–2 days for Karnataka/South India, 2–3 days for Metros, and 3–5 days for the rest of India. Cash on Delivery (COD) is available.",
  },
  {
    question: "What if I receive a damaged product or want a return?",
    answer:
      "We offer a 7-Day Hassle-Free Exchange & Replacement Guarantee. If your piece arrives damaged or has any defect, contact our WhatsApp care team (+91 98765 43210) for instant doorstep replacement.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-3 mb-10">
        <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-bold flex items-center justify-center gap-1.5">
          <HelpCircle className="w-4 h-4 text-luxury-gold" />
          <span>Got Questions?</span>
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm text-stone-500 max-w-lg mx-auto">
          Everything you need to know about our anti-tarnish guarantee, delivery, and care.
        </p>
      </div>

      <div className="space-y-4">
        {FAQS_DATA.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-stone-900 text-sm sm:text-base hover:text-luxury-gold transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-luxury-gold shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-stone-600 font-sans leading-relaxed border-t border-stone-100 mt-1 animate-in fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
