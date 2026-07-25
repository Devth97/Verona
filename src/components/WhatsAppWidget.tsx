"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
  const whatsappNumber = "919876543210"; // Official Showroom WhatsApp
  const defaultMessage = encodeURIComponent(
    "Hi VERONA by Mangaladevi Jewellers! I would like to inquire about your 18K anti-tarnish jewellery collection."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 sm:bottom-6 left-4 sm:left-6 z-40 p-3 sm:p-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 border-white group"
      title="Chat on WhatsApp with VERONA Jewellers"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
        Chat with Us
      </span>
    </a>
  );
}
