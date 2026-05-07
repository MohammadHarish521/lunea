"use client";

import { Leaf, Rabbit, Drop, FlowerLotus } from "@phosphor-icons/react";
import Badge from "./Badge";
import FeatureItem from "./FeatureItem";

const features = [
  {
    icon: <Leaf size={28} weight="regular" />,
    title: "Clean Ingredients",
    subtitle: "Safe, non toxic and\nSkin friendly",
  },
  {
    icon: <Rabbit size={28} weight="regular" />,
    title: "Cruelty Free",
    subtitle: "Kind to animals,\nalways.",
  },
  {
    icon: <Drop size={28} weight="regular" />,
    title: "Dermatologist Tested",
    subtitle: "Tested for safety,\nloved by skin",
  },
  {
    icon: <FlowerLotus size={28} weight="regular" />,
    title: "Sustainable Beauty",
    subtitle: "Thoughtful choices\nfor a better planet",
  },
];

export default function PromiseSection() {
  return (
    <section className="w-full px-6 md:px-16 py-12 md:py-0 bg-lunea-bg md:h-[650px] flex items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-center">
        {/* Left column — 72px blocks with 10px gaps */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center h-[72px]">
            <Badge label="Our Promise" />
          </div>
          <div className="flex items-center h-[72px]">
            <h2
              className="text-lunea-text font-medium"
              style={{ fontSize: "30px", letterSpacing: "-0.04em", lineHeight: "1.2" }}
            >
              Clean. Conscious Effective.
            </h2>
          </div>
          <div className="flex items-center h-[72px]">
            <p className="text-sm font-normal text-lunea-text leading-relaxed" style={{ opacity: 0.75 }}>
              We use clean ingredients your skin loves — no compromises, ever.
            </p>
          </div>
          <div className="flex items-center h-[72px]">
            <button
              className="px-6 py-3 rounded-full text-sm font-normal text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#9C4E56" }}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right — 4 feature items */}
        <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6">
          {features.map((f) => (
            <FeatureItem key={f.title} icon={f.icon} title={f.title} subtitle={f.subtitle} />
          ))}
        </div>
      </div>
    </section>
  );
}
