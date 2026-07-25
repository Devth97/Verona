"use client";

import React, { useState } from "react";
import { Play, Pause, Volume2, VolumeX, Instagram, Sparkles } from "lucide-react";

export interface ReelItem {
  id: string;
  title: string;
  caption: string;
  videoUrl: string; // Placeholder or user mp4 link
  posterUrl: string;
  username: string;
}

export const REELS_DATA: ReelItem[] = [
  {
    id: "reel-1",
    title: "Signature Twist Hoops",
    caption: "POV: You found 18K gold hoops that never tarnish even in the shower ✨",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-showing-her-earrings-41549-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80",
    username: "@verona.jewellery",
  },
  {
    id: "reel-2",
    title: "Showroom Tour in Mangaluru",
    caption: "Inside our Hampankatta showroom — lightweight everyday luxury under ₹3,500 🏛️",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-wearing-a-gold-necklace-41551-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    username: "@verona.jewellery",
  },
  {
    id: "reel-3",
    title: "How It All Started",
    caption: "From traditional Mangalore goldsmiths to modern tarnish-proof 18K gold 💫",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-putting-on-a-necklace-41550-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    username: "@verona.jewellery",
  },
  {
    id: "reel-4",
    title: "A Touch That Feels Indulgent",
    caption: "Indulge in 925 silver & 18K gold stackables designed for 24/7 wear 👑",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-woman-putting-on-rings-41548-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1611591475179-6fe5e7942297?auto=format&fit=crop&w=800&q=80",
    username: "@verona.jewellery",
  },
  {
    id: "reel-5",
    title: "Unboxing Signature Packaging",
    caption: "Every order arrives with our luxury velvet pouch & polishing cloth 🎁",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-woman-adjusting-a-bracelet-41547-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    username: "@verona.jewellery",
  },
];

export default function VeronaWomenReels() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = (id: string) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <section className="py-16 bg-luxury-bg border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Sorele Women style) */}
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            VERONA Women
          </h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.25em] text-stone-500 hover:text-luxury-gold uppercase transition-colors"
          >
            <Instagram className="w-4 h-4 text-luxury-gold" />
            <span>FOLLOW @VERONA.JEWELLERY</span>
          </a>
        </div>

        {/* Video Reels Horizontal Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {REELS_DATA.map((reel) => {
            const isPlaying = playingId === reel.id;

            return (
              <div
                key={reel.id}
                className="group relative aspect-[9/16] rounded-3xl overflow-hidden shadow-xl border border-stone-200/80 bg-stone-900 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                onClick={() => togglePlay(reel.id)}
              >
                {/* HTML5 Video Element with Poster Fallback */}
                <video
                  src={reel.videoUrl}
                  poster={reel.posterUrl}
                  loop
                  muted={isMuted}
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 group-hover:from-black/90 transition-all" />

                {/* Top Controls & Handle */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 text-white">
                  <span className="text-[10px] font-semibold tracking-wider bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/20">
                    {reel.username}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMuted(!isMuted);
                    }}
                    className="p-1.5 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 transition-colors border border-white/20"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5 text-stone-300" /> : <Volume2 className="w-3.5 h-3.5 text-luxury-gold" />}
                  </button>
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div
                    className={`w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white transition-opacity duration-300 ${
                      isPlaying ? "opacity-0" : "opacity-90 group-hover:opacity-100 scale-110"
                    }`}
                  >
                    {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                  </div>
                </div>

                {/* Bottom Caption & Title */}
                <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold block">
                    {reel.title}
                  </span>
                  <p className="text-xs font-serif leading-snug line-clamp-2 text-stone-100">
                    {reel.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Video Upload Info Banner for Store Owner */}
        <div className="mt-8 p-4 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-luxury-gold shrink-0" />
            <span>
              <strong>Showroom Video Reels Active</strong>: Replace any video URL in <code className="bg-stone-100 px-1.5 py-0.5 rounded text-stone-800 font-mono">VeronaWomenReels.tsx</code> with your MP4 video links anytime.
            </span>
          </div>
          <span className="text-[11px] font-bold text-luxury-goldHover uppercase tracking-wider shrink-0">
            5 Video Slots Configured
          </span>
        </div>
      </div>
    </section>
  );
}
