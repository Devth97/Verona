export interface Product {
  id: string;
  title: string;
  category: "necklaces" | "earrings" | "rings" | "bracelets" | "anklets";
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  secondaryImage?: string;
  badge?: "Best Seller" | "Tarnish-Free" | "Under ₹999" | "New Arrival";
  material: string;
  inStock: boolean;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "smj-101",
    title: "Celeste 18K Gold Plated Solitaire Pendant",
    category: "necklaces",
    price: 1299,
    originalPrice: 2499,
    rating: 4.9,
    reviewsCount: 142,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    badge: "Best Seller",
    material: "18K Gold Plated Stainless Steel (Waterproof & Anti-Tarnish)",
    inStock: true,
    description: "Everyday luxury solitaire pendant designed for hypoallergenic daily wear. Guaranteed tarnish-free."
  },
  {
    id: "smj-102",
    title: "Aura Freshwater Pearl Hoop Earrings",
    category: "earrings",
    price: 899,
    originalPrice: 1799,
    rating: 4.8,
    reviewsCount: 98,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80",
    badge: "Under ₹999",
    material: "925 Sterling Silver & Genuine Freshwater Pearl",
    inStock: true,
    description: "Delicate pearl hoops that blend traditional elegance with contemporary lightweight comfort."
  },
  {
    id: "smj-103",
    title: "Luna Stackable Pavé Diamond Band Ring",
    category: "rings",
    price: 1499,
    originalPrice: 2999,
    rating: 4.9,
    reviewsCount: 215,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    badge: "Tarnish-Free",
    material: "Cubic Zirconia Pavé in 18K Gold Vermeil",
    inStock: true,
    description: "Sparkling slim band designed for ring stacking. Sweatproof and scratch-resistant finish."
  },
  {
    id: "smj-104",
    title: "Starlight Layered Chain Bracelet",
    category: "bracelets",
    price: 1199,
    originalPrice: 2299,
    rating: 4.7,
    reviewsCount: 76,
    image: "https://images.unsplash.com/photo-1611591475179-6fe5e7942297?auto=format&fit=crop&w=800&q=80",
    badge: "Best Seller",
    material: "18K Gold Plated Brass & Crystal Charms",
    inStock: true,
    description: "Double-layered delicate wrist chain with lobster clasp and adjustable extension link."
  },
  {
    id: "smj-105",
    title: "Minimalist Beaded Barefoot Anklet",
    category: "anklets",
    price: 699,
    originalPrice: 1299,
    rating: 4.8,
    reviewsCount: 112,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    badge: "Under ₹999",
    material: "Waterproof Stainless Steel Gold Beads",
    inStock: true,
    description: "Ultra-lightweight ankle chain engineered to withstand water, perfume, and daily wear."
  },
  {
    id: "smj-106",
    title: "Ophelia Emerald Cut Crystal Pendant",
    category: "necklaces",
    price: 1899,
    originalPrice: 3499,
    rating: 4.9,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80",
    badge: "New Arrival",
    material: "Hydro Emerald Crystal in 925 Silver Prong",
    inStock: true,
    description: "Vibrant emerald green statement crystal crafted for evening celebrations and festive gifting."
  },
  {
    id: "smj-107",
    title: "Serenade Twisted Rope Huggie Earrings",
    category: "earrings",
    price: 799,
    originalPrice: 1499,
    rating: 4.7,
    reviewsCount: 154,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    badge: "Under ₹999",
    material: "18K Gold Plated Stainless Steel",
    inStock: true,
    description: "Classic textured huggie hoops with secure click closure. Lightweight for 24/7 wear."
  },
  {
    id: "smj-108",
    title: "Verona Adjustable Open Cuff Bangle",
    category: "bracelets",
    price: 2499,
    originalPrice: 4299,
    rating: 4.9,
    reviewsCount: 63,
    image: "https://images.unsplash.com/photo-1611591475179-6fe5e7942297?auto=format&fit=crop&w=800&q=80",
    badge: "Tarnish-Free",
    material: "Heavy 18K Gold Plating on Surgical Steel",
    inStock: true,
    description: "Sleek architectural cuff bangle with micro-paved ends. Fits all wrist sizes effortlessly."
  }
];
