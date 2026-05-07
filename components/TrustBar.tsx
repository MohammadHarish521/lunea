"use client";

import { Package, Lock, ArrowCounterClockwise, Leaf } from "@phosphor-icons/react";

const items = [
  {
    icon: <Package size={22} weight="regular" />,
    title: "Free Shipping",
    subtitle: "On orders over $50",
  },
  {
    icon: <Lock size={22} weight="regular" />,
    title: "Safe & Secure",
    subtitle: "100% secure checkout",
  },
  {
    icon: <ArrowCounterClockwise size={22} weight="regular" />,
    title: "Easy Returns",
    subtitle: "30-day return policy",
  },
  {
    icon: <Leaf size={22} weight="regular" />,
    title: "Clean & Ethical",
    subtitle: "Thoughtful skincare",
  },
];

export default function TrustBar() {
  return (
    <div
      className="w-full px-6 md:px-8 py-6 border-t"
      style={{ backgroundColor: "#F6ECEE", borderColor: "#F5E6E9" }}
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.title} className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: "#F3D6D8", color: "#9C4E56" }}
            >
              {item.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-lunea-text">{item.title}</p>
              <p className="text-xs font-normal text-lunea-text" style={{ opacity: 0.65 }}>
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
