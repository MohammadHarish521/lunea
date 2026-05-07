import Image from "next/image";

export default function CTASection() {
  return (
    <section
      className="w-full overflow-hidden md:h-[299px] grid grid-cols-1 md:grid-cols-2"
      style={{ backgroundColor: "#F6ECEE" }}
    >
      {/* Left — text */}
      <div className="flex flex-col justify-center gap-4 px-6 md:px-16 py-10 md:py-0">
        <h2
          className="text-lunea-text font-medium"
          style={{ fontSize: "30px", letterSpacing: "-0.04em", lineHeight: "1.2" }}
        >
          Your glow journey starts here.
        </h2>
        <p
          className="text-lunea-text font-normal"
          style={{ fontSize: "15px", lineHeight: "1.2", letterSpacing: "0", opacity: 0.75 }}
        >
          Discover clean, effective skincare loved by thousands
        </p>
        <button
          className="mt-1 px-6 py-3 rounded-full text-sm font-normal text-white transition-opacity hover:opacity-90 w-fit"
          style={{ backgroundColor: "#9C4E56" }}
        >
          Shop Bestsellers
        </button>
      </div>

      {/* Right — image fills column exactly, no padding */}
      <div className="relative hidden md:block h-[299px]">
        <Image
          src="/ctaimage.png"
          alt="Lunea skincare products"
          fill
          className="object-cover object-left"
          priority
        />
      </div>
    </section>
  );
}
