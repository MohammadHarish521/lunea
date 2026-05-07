"use client";

import { FlowerIcon, List, ShoppingCart, User, X } from "@phosphor-icons/react";
import { useState } from "react";

const navLinks = ["Shop", "Ingredients", "About", "Blog"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-lunea-bg relative z-50">
      <nav className="px-6 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer select-none">
          <FlowerIcon size={22} className="text-lunea-text" />
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

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-lunea-text text-sm font-normal opacity-75 hover:opacity-100 transition-opacity"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Icon buttons — always visible */}
          <button
            aria-label="Account"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-lunea-border text-lunea-text hover:bg-lunea-badge transition-colors"
          >
            <User size={16} weight="regular" />
          </button>
          <button
            aria-label="Cart"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-lunea-border text-lunea-text hover:bg-lunea-badge transition-colors"
          >
            <ShoppingCart size={16} weight="regular" />
          </button>

          {/* Hamburger — mobile only */}
          <button
            aria-label="Toggle menu"
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-lunea-border text-lunea-text hover:bg-lunea-badge transition-colors ml-1"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <X size={16} weight="bold" />
            ) : (
              <List size={16} weight="bold" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-lunea-bg border-t border-lunea-grid-border px-6 py-4 flex flex-col gap-4 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-lunea-text text-base font-normal opacity-75 hover:opacity-100 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
