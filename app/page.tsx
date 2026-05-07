import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PromiseSection from "@/components/PromiseSection";
import BestSellersSection from "@/components/BestSellersSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-lunea-bg text-lunea-text font-sans min-h-screen">
      <div className="max-w-[1440px] mx-auto overflow-hidden">
        <Navbar />
        <HeroSection />
        <PromiseSection />
        <BestSellersSection />
        <AboutSection />
        <ReviewsSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
