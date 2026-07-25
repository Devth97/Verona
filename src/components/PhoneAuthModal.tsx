"use client";

import React, { useState, useEffect } from "react";
import { X, Phone, Lock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from "@/lib/firebase";

interface PhoneAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (userPhone: string) => void;
}

export default function PhoneAuthModal({ isOpen, onClose, onSuccess }: PhoneAuthModalProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"PHONE" | "OTP" | "SUCCESS">("PHONE");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setPhoneNumber("");
      setOtp("");
      setStep("PHONE");
      setError("");
      setLoading(false);
    }
  }, [isOpen]);

  const setupRecaptcha = () => {
    if (typeof window === "undefined") return;
    if (!(window as any).recaptchaVerifier) {
      (window as any).recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: () => {},
        "expired-callback": () => {
          setError("reCAPTCHA expired. Please try again.");
        },
      });
    }
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const cleaned = phoneNumber.replace(/\D/g, "");
    if (cleaned.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    const formattedPhone = `+91${cleaned}`;
    setLoading(true);

    try {
      setupRecaptcha();
      const appVerifier = (window as any).recaptchaVerifier;
      const confirmation = await signInWithPhoneNumber(auth, formattedPhone, appVerifier);
      setConfirmationResult(confirmation);
      setStep("OTP");
      setOtp(""); // Leave blank so user enters real SMS OTP received on their mobile phone!
    } catch (err: any) {
      console.error("Firebase Real Phone Auth Error:", err);
      setError(err?.message || "Failed to send real SMS OTP. Please check console or try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (otp.length !== 6) {
      setError("Please enter the 6-digit SMS OTP code sent to your phone.");
      return;
    }

    setLoading(true);

    try {
      if (!confirmationResult) {
        throw new Error("Verification session expired. Please request OTP again.");
      }

      const result = await confirmationResult.confirm(otp);
      const verifiedPhone = result.user.phoneNumber || `+91${phoneNumber}`;
      setStep("SUCCESS");
      setTimeout(() => {
        onSuccess(verifiedPhone);
        onClose();
      }, 1200);
    } catch (err: any) {
      console.error("Real OTP Verification Error:", err);
      setError(err?.message || "Invalid OTP code. Please check your SMS and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-all">
      <div id="recaptcha-container"></div>

      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-luxury-gold/30 p-6 md:p-8 animate-in fade-in zoom-in-95 font-sans">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 transition-colors p-1"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-bold block">
            VERONA BY MANGALADEVI JEWELLERS
          </span>
          <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
            {step === "PHONE" && "Login / Sign Up"}
            {step === "OTP" && "Verify Real SMS OTP"}
            {step === "SUCCESS" && "Welcome Back!"}
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            {step === "PHONE" && "Enter your mobile number to receive a real SMS OTP"}
            {step === "OTP" && `Enter 6-digit code sent via SMS to +91 ${phoneNumber}`}
            {step === "SUCCESS" && "You are successfully authenticated!"}
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Step 1: Phone Input */}
        {step === "PHONE" && (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                Mobile Number
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3 text-sm font-semibold text-stone-500 border-r border-stone-200 pr-2">
                  +91
                </span>
                <input
                  type="tel"
                  maxLength={10}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                  placeholder="9876543210"
                  required
                  className="w-full pl-14 pr-4 py-3.5 bg-stone-50 border border-stone-300 rounded-2xl text-stone-900 font-medium focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold text-sm tracking-wide"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || phoneNumber.length !== 10}
              className="w-full py-3.5 bg-stone-900 hover:bg-black text-white font-bold rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 text-xs uppercase tracking-wider disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-luxury-gold" />
                  Sending Real SMS OTP...
                </>
              ) : (
                <>
                  <Phone className="w-4 h-4 text-luxury-gold" />
                  Send Real SMS OTP
                </>
              )}
            </button>
          </form>
        )}

        {/* Step 2: OTP Input */}
        {step === "OTP" && (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                Enter 6-Digit SMS Code
              </label>
              <input
                type="text"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                placeholder="------"
                required
                autoFocus
                className="w-full text-center tracking-[0.5em] text-xl font-bold py-3.5 bg-stone-50 border border-stone-300 rounded-2xl text-stone-900 focus:outline-none focus:border-luxury-gold"
              />
            </div>

            <button
              type="submit"
              disabled={loading || otp.length !== 6}
              className="w-full py-3.5 bg-luxury-gold hover:bg-luxury-goldHover text-stone-950 font-bold uppercase tracking-wider rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 text-xs disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  Verifying Real OTP...
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 text-white" />
                  Verify Real OTP
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setStep("PHONE")}
              className="w-full text-center text-xs font-semibold text-stone-500 hover:text-luxury-gold underline pt-1"
            >
              Change Mobile Number
            </button>
          </form>
        )}

        {/* Step 3: Success */}
        {step === "SUCCESS" && (
          <div className="py-6 text-center space-y-3 animate-in fade-in">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
            <p className="text-sm font-semibold text-stone-800">
              Authenticated successfully as +91 {phoneNumber}
            </p>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-stone-100 text-center text-[11px] text-stone-400">
          🔒 Real SMS Powered by Firebase Authentication (mangaladevi-jewellers)
        </div>
      </div>
    </div>
  );
}
