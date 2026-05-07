"use client";

import { FlowerLotusIcon, Quotes, Star } from "@phosphor-icons/react";
import Image from "next/image";
import Badge from "./Badge";

const reviews = [
  {
    text: "Lunea has completely transformed my skincare routine. My skin feels so soft, balanced, and radiant!",
    name: "Sarah J.",
    role: "Verified Buyer",
    image: "/profile1.jpg",
  },
  {
    text: "I love how gentle and effective the products are. Finally, skincare that truly cares.",
    name: "Emili R.",
    role: "Verified Buyer",
    image: "/profile2.jpg",
  },
  {
    text: "Clean ingredients, beautiful packaging, and real results. Couldn't ask for more!",
    name: "Maya L.",
    role: "Verified Buyer",
    image: "/profile3.jpg",
  },
];

function StarRow() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} weight="fill" className="text-brand" />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="w-full px-6 md:px-16 bg-lunea-bg md:h-[650px] flex flex-col items-center justify-center gap-10 py-10 md:py-0">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4">
        <Badge
          label="Real Results"
          icon={
            <FlowerLotusIcon
              size={20}
              style={{ color: "rgba(122, 46, 52, 0.75)" }}
            />
          }
        />
        <h2
          className="text-lunea-text font-medium"
          style={{
            fontSize: "30px",
            letterSpacing: "-0.04em",
            lineHeight: "1.2",
          }}
        >
          Glowing reviews from glowing skin.
        </h2>
      </div>

      {/* Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="bg-[#FAF7F8] rounded-[24px] flex flex-col  md:h-[315px]"
            style={{ padding: "24px", gap: "16px" }}
          >
            {/* Frame 1 — Stars: 30px */}
            <div style={{ height: "30px" }} className="flex items-center">
              <StarRow />
            </div>

            {/* Frame 2 — Quote + Text: 140px */}
            <div
              className="flex flex-col overflow-hidden"
              style={{ height: "140px", gap: "8px" }}
            >
              <Quotes
                size={32}
                weight="bold"
                className="text-brand shrink-0"
                style={{ opacity: 0.75, transform: "rotate(180deg)" }}
              />

              <p
                className="text-lunea-text font-normal overflow-hidden"
                style={{ fontSize: "16px", lineHeight: "1.6" }}
              >
                {review.text}
              </p>
            </div>

            {/* Frame 3 — Profile: 65px */}
            <div
              className="flex items-center"
              style={{ height: "65px", gap: "12px" }}
            >
              <div
                className="relative shrink-0 rounded-full overflow-hidden"
                style={{ width: 48, height: 48 }}
              >
                <Image
                  src={review.image}
                  alt={review.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <p
                  className="text-lunea-text font-medium"
                  style={{ fontSize: "16px", lineHeight: "1.2" }}
                >
                  {review.name}
                </p>
                <p
                  className="text-lunea-text font-normal"
                  style={{ fontSize: "12px", lineHeight: "1.2", opacity: 0.65 }}
                >
                  {review.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
