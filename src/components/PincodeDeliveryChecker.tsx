"use client";

import React, { useState } from "react";
import { Truck, CheckCircle2, AlertCircle, MapPin, Loader2 } from "lucide-react";

export default function PincodeDeliveryChecker() {
  const [pincode, setPincode] = useState("");
  const [status, setStatus] = useState<"IDLE" | "LOADING" | "SUCCESS" | "ERROR">("IDLE");
  const [result, setResult] = useState<string | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPin = pincode.trim().replace(/\D/g, "");

    if (cleanPin.length !== 6) {
      setStatus("ERROR");
      setResult("Please enter a valid 6-digit Indian Pincode.");
      return;
    }

    setStatus("LOADING");

    setTimeout(() => {
      // Logic for pincode regions
      if (cleanPin.startsWith("575") || cleanPin.startsWith("570") || cleanPin.startsWith("560")) {
        setResult("⚡ Express Delivery by Tomorrow (1–2 Days) • COD Available");
      } else if (cleanPin.startsWith("400") || cleanPin.startsWith("110") || cleanPin.startsWith("600") || cleanPin.startsWith("700") || cleanPin.startsWith("500")) {
        setResult("🚚 Metro Express Delivery in 2–3 Business Days • COD Available");
      } else {
        setResult("📦 Standard Insured Delivery in 4–5 Business Days • COD Available");
      }
      setStatus("SUCCESS");
    }, 600);
  };

  return (
    <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200 space-y-2">
      <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-700">
        <Truck className="w-4 h-4 text-luxury-gold" />
        <span>Check Delivery & COD Availability</span>
      </div>

      <form onSubmit={handleCheck} className="flex gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            maxLength={6}
            placeholder="Enter 6-digit Pincode (e.g. 575001)"
            value={pincode}
            onChange={(e) => {
              setPincode(e.target.value.replace(/\D/g, ""));
              if (status !== "IDLE") setStatus("IDLE");
            }}
            className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg bg-white focus:outline-none focus:border-luxury-gold font-sans"
          />
        </div>
        <button
          type="submit"
          disabled={status === "LOADING" || pincode.length !== 6}
          className="px-4 py-2 bg-luxury-charcoal hover:bg-black text-white text-xs font-semibold rounded-lg transition-colors disabled:opacity-50"
        >
          {status === "LOADING" ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : "Check"}
        </button>
      </form>

      {status === "SUCCESS" && result && (
        <div className="p-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-medium rounded-lg flex items-center gap-1.5 animate-in fade-in">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>{result}</span>
        </div>
      )}

      {status === "ERROR" && result && (
        <div className="p-2 bg-red-50 border border-red-200 text-red-700 text-[11px] font-medium rounded-lg flex items-center gap-1.5 animate-in fade-in">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{result}</span>
        </div>
      )}
    </div>
  );
}
