import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VERONA by Mangaladevi Jewellers | Lightweight Everyday Luxury Jewellery (₹500 - ₹3,500)",
  description: "Shop 100% waterproof, tarnish-free lightweight gold & silver jewellery by Mangaladevi Jewellers. Sorele-inspired necklaces, earrings, rings & bracelets under ₹3,500.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Great+Vibes&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-luxury-bg text-luxury-charcoal selection:bg-luxury-goldLight selection:text-luxury-goldHover">
        {children}
      </body>
    </html>
  );
}
