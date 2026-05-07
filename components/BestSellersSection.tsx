"use client";

import {
  ArrowsClockwiseIcon,
  Leaf,
  Lock,
  Motorcycle,
  Star,
} from "@phosphor-icons/react";
import Badge from "./Badge";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "/product1.png",
    name: "Glow Serum",
    rating: 4.8,
    reviews: 320,
    price: "32.00",
  },
  {
    image: "/product2.png",
    name: "Nourishing Day Cream",
    rating: 4.9,
    reviews: 370,
    price: "38.00",
  },
  {
    image: "/product3.png",
    name: "Hydrating Cleanser",
    rating: 4.7,
    reviews: 420,
    price: "28.00",
  },
  {
    image: "/product4.png",
    name: "Rich Night Cream",
    rating: 4.9,
    reviews: 358,
    price: "40.00",
  },
];

const trustItems = [
  {
    icon: <Motorcycle size={32} weight="bold" />,
    title: "Free Shipping",
    subtitle: "On orders over $50",
  },
  {
    icon: <Lock size={32} weight="bold" />,
    title: "Safe & Secure",
    subtitle: "100% secure checkout",
  },
  {
    icon: <ArrowsClockwiseIcon size={32} weight="bold" />,
    title: "Easy Returns",
    subtitle: "30-day return policy",
  },
  {
    icon: <Leaf size={32} weight="bold" />,
    title: "Clean & Ethical",
    subtitle: "Thoughtful skincare",
  },
];

export default function BestSellersSection() {
  return (
    <section
      className="w-full px-6 md:px-16 py-10 md:h-[650px] flex flex-col justify-between gap-8"
      style={{ backgroundColor: "#F0E4E6" }}
    >
      {/* Main content */}
      <div className="flex-1 flex items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-center">
          {/* Left column — 72px blocks */}
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center h-[72px]">
              <Badge
                label="Best Sellers"
                icon={
                  <Star
                    size={14}
                    weight="fill"
                    style={{ color: "rgba(122, 46, 52, 0.75)" }}
                  />
                }
              />
            </div>
            <div className="flex items-center h-[72px]">
              <h2
                className="text-lunea-text font-medium"
                style={{
                  fontSize: "30px",
                  letterSpacing: "-0.04em",
                  lineHeight: "1.2",
                }}
              >
                Loved by many, trusted every day.
              </h2>
            </div>
            <div className="flex items-center h-[72px]">
              <button
                className="px-6 py-3 rounded-full text-sm font-normal text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#9C4E56" }}
              >
                Shop All
              </button>
            </div>
          </div>

          {/* Right — product cards */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {products.map((p) => (
              <ProductCard
                key={p.name}
                image={p.image}
                name={p.name}
                rating={p.rating}
                reviews={p.reviews}
                price={p.price}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Trust bar — pinned at the bottom inside the section */}
      <div
        className="rounded-2xl px-6 py-4 mx-auto"
        style={{ backgroundColor: "#F6ECEE", width: "100%", maxWidth: "906px" }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {trustItems.map((item) => (
            <div key={item.title} className="flex items-center gap-3">
              <span
                className="shrink-0"
                style={{ color: "#9C4E56", fontWeight: "bold" }}
              >
                {item.icon}
              </span>

              <div>
                <p className="text-sm font-medium text-lunea-text">
                  {item.title}
                </p>
                <p
                  className="text-xs font-normal text-lunea-text"
                  style={{ opacity: 0.65 }}
                >
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
