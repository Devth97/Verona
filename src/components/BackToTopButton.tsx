"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 p-2.5 sm:p-3 bg-stone-900/90 hover:bg-black text-white rounded-xl shadow-xl backdrop-blur-md transition-all duration-300 border border-stone-700 hover:scale-105 active:scale-95"
      title="Back to Top"
    >
      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-luxury-gold" />
    </button>
  );
}
