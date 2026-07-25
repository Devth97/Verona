export interface Product {
  id: string;
  title: string;
  category: "necklaces" | "earrings" | "rings" | "bracelets" | "anklets";
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  secondaryImage: string;
  galleryImages: string[];
  badge?: "Best Seller" | "Tarnish-Free" | "Under ₹999" | "New Arrival";
  material: string;
  inStock: boolean;
  description: string;
  careInstructions: string;
  tag?: "everyday" | "office";
}

export const PRODUCTS: Product[] = [
  {
    id: "celeste-18k-gold-solitaire-pendant",
    title: "Celeste 18K Gold Plated Solitaire Pendant",
    category: "necklaces",
    price: 1299,
    originalPrice: 2499,
    rating: 4.9,
    reviewsCount: 142,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "Best Seller",
    material: "18K Gold Plated Stainless Steel (Waterproof & Anti-Tarnish)",
    inStock: true,
    description: "Everyday luxury solitaire pendant designed for hypoallergenic daily wear. Crafted with 10x thicker 18K PVD gold plating over surgical stainless steel. Guaranteed zero tarnishing, greening, or skin irritation even when worn in the shower.",
    careInstructions: "Wipe gently with the complimentary microfiber polishing cloth after exposure to heavy saltwater or chlorine. Store in your signature VERONA velvet pouch when not in use.",
    tag: "everyday"
  },
  {
    id: "aura-freshwater-pearl-hoop-earrings",
    title: "Aura Freshwater Pearl Hoop Earrings",
    category: "earrings",
    price: 899,
    originalPrice: 1799,
    rating: 4.8,
    reviewsCount: 98,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "Under ₹999",
    material: "925 Sterling Silver & Genuine Freshwater Pearl",
    inStock: true,
    description: "Delicate pearl hoops that blend traditional Mangaluru elegance with contemporary lightweight comfort. Crafted with genuine cultured freshwater pearls.",
    careInstructions: "Avoid direct contact with harsh chemical solvents. Clean pearls with warm damp cloth.",
    tag: "office"
  },
  {
    id: "luna-stackable-pave-diamond-band-ring",
    title: "Luna Stackable Pavé Diamond Band Ring",
    category: "rings",
    price: 1499,
    originalPrice: 2999,
    rating: 4.9,
    reviewsCount: 215,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1611591475179-6fe5e7942297?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1611591475179-6fe5e7942297?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "Tarnish-Free",
    material: "Cubic Zirconia Pavé in 18K Gold Vermeil",
    inStock: true,
    description: "Sparkling slim band designed for ring stacking. Sweatproof, scratch-resistant finish engineered for 24/7 wear.",
    careInstructions: "Safe to wear during hand washing and daily routine.",
    tag: "everyday"
  },
  {
    id: "starlight-layered-chain-bracelet",
    title: "Starlight Layered Chain Bracelet",
    category: "bracelets",
    price: 1199,
    originalPrice: 2299,
    rating: 4.7,
    reviewsCount: 76,
    image: "https://images.unsplash.com/photo-1611591475179-6fe5e7942297?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1611591475179-6fe5e7942297?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "Best Seller",
    material: "18K Gold Plated Brass & Crystal Charms",
    inStock: true,
    description: "Double-layered delicate wrist chain with lobster clasp and adjustable extension link.",
    careInstructions: "Store dry in pouch.",
    tag: "office"
  },
  {
    id: "minimalist-beaded-barefoot-anklet",
    title: "Minimalist Beaded Barefoot Anklet",
    category: "anklets",
    price: 699,
    originalPrice: 1299,
    rating: 4.8,
    reviewsCount: 112,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "Under ₹999",
    material: "Waterproof Stainless Steel Gold Beads",
    inStock: true,
    description: "Ultra-lightweight ankle chain engineered to withstand water, perfume, and daily wear.",
    careInstructions: "Waterproof & sweatproof.",
    tag: "everyday"
  },
  {
    id: "ophelia-emerald-cut-crystal-pendant",
    title: "Ophelia Emerald Cut Crystal Pendant",
    category: "necklaces",
    price: 1899,
    originalPrice: 3499,
    rating: 4.9,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "New Arrival",
    material: "Hydro Emerald Crystal in 925 Silver Prong",
    inStock: true,
    description: "Vibrant emerald green statement crystal crafted for evening celebrations and festive gifting.",
    careInstructions: "Wipe crystal gently with soft cloth.",
    tag: "office"
  },
  {
    id: "serenade-twisted-rope-huggie-earrings",
    title: "Serenade Twisted Rope Huggie Earrings",
    category: "earrings",
    price: 799,
    originalPrice: 1499,
    rating: 4.7,
    reviewsCount: 154,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "Under ₹999",
    material: "18K Gold Plated Stainless Steel",
    inStock: true,
    description: "Classic textured huggie hoops with secure click closure. Lightweight for 24/7 wear.",
    careInstructions: "100% tarnish-free.",
    tag: "everyday"
  },
  {
    id: "verona-adjustable-open-cuff-bangle",
    title: "Verona Adjustable Open Cuff Bangle",
    category: "bracelets",
    price: 2499,
    originalPrice: 4299,
    rating: 4.9,
    reviewsCount: 63,
    image: "https://images.unsplash.com/photo-1611591475179-6fe5e7942297?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1611591475179-6fe5e7942297?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "Tarnish-Free",
    material: "Heavy 18K Gold Plating on Surgical Steel",
    inStock: true,
    description: "Sleek architectural cuff bangle with micro-paved ends. Fits all wrist sizes effortlessly.",
    careInstructions: "Tarnish-free & waterproof.",
    tag: "office"
  }
];
