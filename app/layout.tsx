import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const interDisplay = localFont({
  src: [
    { path: "./font/ttf/InterDisplay-Regular.ttf", weight: "400", style: "normal" },
    { path: "./font/ttf/InterDisplay-Medium.ttf", weight: "500", style: "normal" },
    { path: "./font/ttf/InterDisplay-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./font/ttf/InterDisplay-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-inter-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lunea — Skincare that loves you back",
  description: "Thoughtfully crafted with clean ingredients to bring out your natural glow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interDisplay.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
