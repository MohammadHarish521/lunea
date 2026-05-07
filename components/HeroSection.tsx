import Image from "next/image";
import Badge from "./Badge";

export default function HeroSection() {
  return (
    <section
      className="relative w-full bg-lunea-bg overflow-hidden"
      style={{ paddingTop: "16px", paddingBottom: "16px" }}
    >
      {/* Text block
          Mobile/tablet: normal document flow (stacked above image)
          lg+: absolute overlay centered at top of image */}
      <div className="lg:absolute lg:inset-0 lg:z-10 flex flex-col items-center text-center px-6 gap-3 lg:gap-4 lg:pt-12">
        {/* Badge chip */}
        <Badge label="Dermatologist tested" />

        {/* Headline */}
        <h1
          className="text-lunea-text font-medium max-w-xs sm:max-w-lg lg:max-w-2xl"
          style={{
            fontSize: "clamp(32px, 5vw, 60px)",
            letterSpacing: "-0.04em",
            lineHeight: "1",
          }}
        >
          Skincare that
          <br />
          loves you back
        </h1>

        {/* Subheading */}
        <p
          className="text-lunea-text max-w-xs sm:max-w-sm"
          style={{
            fontSize: "16px",
            lineHeight: "1.2",
            letterSpacing: "0",
            opacity: 0.8,
          }}
        >
          Thoughtfully crafted with clean ingredients
          <br className="hidden sm:block" />
          {" "}to bring out your natural glow.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-1 w-full sm:w-auto">
          <button
            className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-normal text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#9C4E56" }}
          >
            Shop BestSellers
          </button>
          <button
            className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-normal border transition-colors hover:bg-lunea-badge"
            style={{
              borderColor: "#F5B5C3",
              color: "rgba(156, 78, 86, 0.75)",
            }}
          >
            Build Your Routine
          </button>
        </div>
      </div>

      {/* Hero Image — hidden on mobile, visible on lg+ */}
      <Image
        src="/main.png"
        alt="Lunea skincare products — serum, nourishing day cream and rose quartz"
        width={1440}
        height={720}
        priority
        className="w-full object-cover hidden lg:block"
      />
    </section>
  );
}
