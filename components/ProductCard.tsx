"use client";

import { Star } from "@phosphor-icons/react";
import { HeartIcon } from "@phosphor-icons/react/dist/ssr";

type ProductCardProps = {
  image: string;
  name: string;
  rating: number;
  reviews: number;
  price: string;
};

export default function ProductCard({
  image,
  name,
  rating,
  reviews,
  price,
}: ProductCardProps) {
  return (
    <div
      className="bg-lunea-bg rounded-[24px] p-4 flex flex-col relative border md:h-[434px]"
      style={{ borderColor: "#F5E6E9" }}
    >
      {/* Wishlist */}
      <button
        aria-label="Add to wishlist"
        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white text-lunea-text hover:bg-lunea-badge transition-colors z-10"
      >
        <HeartIcon size={20} weight="regular" />
      </button>

      {/* Product image — square on mobile, flex-grow on desktop */}
      <div className="relative w-full aspect-square md:aspect-auto md:flex-1 md:min-h-0">
        <img src={image} alt={name} className="object-contain" />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1.5 mt-3 shrink-0">
        <p className="text-[15px] font-medium text-lunea-text">{name}</p>
        <div className="flex items-center gap-1">
          <Star size={12} weight="fill" className="text-brand" />
          <span
            className="text-[15px] font-medium text-lunea-text"
            style={{ opacity: 0.7 }}
          >
            {rating} ({reviews})
          </span>
        </div>
        <p className="text-[15px] tracking-[-0.04em] font-bold text-lunea-text">
          ${price}
        </p>
      </div>

      {/* CTA */}
      <button
        className="w-full px-6 py-3 rounded-full text-sm font-normal text-white transition-opacity hover:opacity-90 mt-3 shrink-0"
        style={{ backgroundColor: "#9C4E56" }}
      >
        Add to cart
      </button>
    </div>
  );
}
