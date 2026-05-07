"use client";

import {
  ArrowRight,
  FacebookLogo,
  Flower,
  InstagramLogo,
  PinterestLogo,
  TiktokLogo,
} from "@phosphor-icons/react";

const shopLinks = [
  "All products",
  "Best Sellers",
  "Cleanser",
  "Moisturizers",
  "Serums",
];
const aboutLinks = [
  "Our Story",
  "Ingredients",
  "Sustainability",
  "Careers",
  "Press",
];
const helpLinks = [
  "FAQs",
  "Shipping & Returns",
  "Contact Us",
  "Track Order",
  "Privacy Policy",
];

const socialIcons = [
  { icon: <InstagramLogo size={20} weight="regular" />, label: "Instagram" },
  { icon: <FacebookLogo size={20} weight="regular" />, label: "Facebook" },
  { icon: <TiktokLogo size={20} weight="regular" />, label: "TikTok" },
  { icon: <PinterestLogo size={20} weight="regular" />, label: "Pinterest" },
];

function LinkColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-medium text-lunea-text">{title}</p>
      {links.map((link) => (
        <a
          key={link}
          href="#"
          className="text-sm font-normal text-lunea-text transition-opacity hover:opacity-100"
          style={{ opacity: 0.65 }}
        >
          {link}
        </a>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="w-full bg-lunea-bg"
      style={{ borderTop: "1px solid #F5E6E9" }}
    >
      {/* Main grid */}
      <div className="px-6 md:px-16 py-12 grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
        {/* Brand column */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Flower size={20} className="text-lunea-text" />
            <span
              className="text-lunea-text font-medium"
              style={{
                fontSize: "24px",
                letterSpacing: "-0.04em",
                lineHeight: "1.2",
              }}
            >
              Lunea
            </span>
          </div>

          {/* Tagline */}
          <p
            className="text-lunea-text font-normal"
            style={{ fontSize: "14px", lineHeight: "1.5", opacity: 0.7 }}
          >
            Skincare that loves you back,
            <br />
            Clean ingredients, real results.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3 mt-1">
            {socialIcons.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="text-lunea-text transition-opacity hover:opacity-100"
                style={{ opacity: 0.65 }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        <LinkColumn title="Shop" links={shopLinks} />
        <LinkColumn title="About" links={aboutLinks} />
        <LinkColumn title="Help" links={helpLinks} />

        {/* Newsletter column */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
          <p className="text-sm font-medium text-lunea-text">Newsletter</p>
          <p
            className="text-lunea-text font-normal"
            style={{ fontSize: "14px", lineHeight: "1.5", opacity: 0.7 }}
          >
            Get skincare tips and exclusive offers straight to your inbox.
          </p>
          {/* Email input */}
          <div className="flex items-center rounded-full border border-lunea-text">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 pl-5 pr-2 py-3 bg-transparent outline-none text-sm font-normal text-lunea-text placeholder:text-lunea-text placeholder:opacity-50 min-w-0"
            />
            <button
              className="m-1 w-9 h-9 rounded-full flex items-center justify-center text-white shrink-0 transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#9C4E56" }}
              aria-label="Subscribe"
            >
              <ArrowRight size={16} weight="bold" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="px-6 md:px-16 py-5 text-center"
        style={{ borderTop: "1px solid #F5E6E9" }}
      >
        <p
          className="text-lunea-text font-normal"
          style={{ fontSize: "13px", opacity: 0.55 }}
        >
          © 2026 Lunea. All rights reserved
        </p>
      </div>
    </footer>
  );
}
