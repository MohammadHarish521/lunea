"use client";

import Image from "next/image";
import { Tag, Diamond, Gift } from "@phosphor-icons/react";
import Badge from "./Badge";

const features = [
  { icon: <Tag size={14} weight="regular" />, label: "Exclusive offer" },
  { icon: <Diamond size={14} weight="regular" />, label: "Skincare tips" },
  { icon: <Gift size={14} weight="regular" />, label: "New Launches" },
];

export default function AboutSection() {
  return (
    <section
      className="w-full md:h-[650px] grid grid-cols-1 md:grid-cols-2"
      style={{ backgroundColor: "#F6ECEE" }}
    >
      {/* ── Left panel: About ── */}
      <div
        className="relative overflow-hidden flex flex-col px-6 md:px-12 py-10 md:pt-[130px] md:pb-10 border-b md:border-b-0 md:border-r"
        style={{ borderColor: "#F5E6E9" }}
      >
        {/* Text */}
        <div className="flex flex-col gap-[10px] relative z-10 w-full md:w-[55%]">
          <div className="h-[72px] flex items-center">
            <Badge label="About Lunea" />
          </div>
          <div className="min-h-[72px] flex items-center">
            <h2
              className="text-lunea-text font-medium"
              style={{ fontSize: "30px", letterSpacing: "-0.04em", lineHeight: "1.2" }}
            >
              Skincare inspired by nature, backed by science.
            </h2>
          </div>
          <div className="min-h-[72px] flex items-center">
            <p
              className="text-lunea-text font-normal"
              style={{ fontSize: "15px", letterSpacing: "0", lineHeight: "1.2", opacity: 0.75 }}
            >
              Effective, gentle, and honest — every product is thoughtfully made for your skin's natural glow.
            </p>
          </div>
          <div className="h-[72px] flex items-center">
            <button
              className="px-6 py-3 rounded-full text-sm font-normal text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#9C4E56" }}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* sideleft.png — masked left edge to blend into background */}
        <div
          className="hidden md:block absolute right-0 bottom-0 w-[50%] h-full"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 40%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 40%)",
          }}
        >
          <Image
            src="/sideleft.png"
            alt="Lunea skincare products"
            fill
            className="object-contain object-bottom"
            sizes="30vw"
          />
        </div>
      </div>

      {/* ── Right panel: Newsletter ── */}
      <div className="relative overflow-hidden flex flex-col px-6 md:px-12 py-10 md:pt-[130px] md:pb-10">
        {/* Text + form */}
        <div className="flex flex-col gap-[10px] relative z-10 w-full md:w-[65%]">
          <div className="h-[72px] flex items-center">
            <Badge label="Join Newsletter" />
          </div>
          <div className="h-[72px] flex items-center">
            <h2
              className="text-lunea-text font-medium"
              style={{ fontSize: "30px", letterSpacing: "-0.04em", lineHeight: "1.2" }}
            >
              Be the first to glow.
            </h2>
          </div>
          <div className="min-h-[72px] flex items-center">
            <p
              className="text-lunea-text font-normal"
              style={{ fontSize: "15px", letterSpacing: "0", lineHeight: "1.2", opacity: 0.75 }}
            >
              Get early access to new launches, exclusive offers, and skincare tips.
            </p>
          </div>

          {/* Email input */}
          <div className="h-[72px] flex items-center">
            <div
              className="flex w-full rounded-full border overflow-hidden bg-white"
              style={{ borderColor: "rgba(156, 78, 86, 0.75)" }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-2.5 bg-transparent outline-none text-sm font-normal text-lunea-text placeholder:text-lunea-text placeholder:opacity-40"
              />
              <button
                className="px-6 py-3 rounded-r-full text-sm font-normal text-white transition-opacity hover:opacity-90 shrink-0"
                style={{ backgroundColor: "#9C4E56" }}
              >
                Join Now
              </button>
            </div>
          </div>

          {/* Feature chips */}
          <div className="h-[72px] flex items-center gap-5">
            {features.map((f) => (
              <span
                key={f.label}
                className="flex items-center gap-1.5 text-xs font-normal text-lunea-text"
                style={{ opacity: 0.75 }}
              >
                {f.icon}
                {f.label}
              </span>
            ))}
          </div>
        </div>

        {/* sideright.png */}
        <div className="hidden md:block absolute right-0 top-0 w-[38%] h-full">
          <Image
            src="/sideright.png"
            alt="Floral decoration"
            fill
            className="object-contain object-right"
            sizes="25vw"
          />
        </div>
      </div>
    </section>
  );
}
