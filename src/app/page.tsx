import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Specs from "@/components/Specs";
import Compatibility from "@/components/Compatibility";
import ProductShowcase from "@/components/ProductShowcase";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Advantages from "@/components/Advantages";
import Community from "@/components/Community";
import PartnerCTA from "@/components/PartnerCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Specs />
        <Compatibility />
        <ProductShowcase />
        <Features />
        <Pricing />
        <Advantages />
        <Community />
        <PartnerCTA />
      </main>
      <Footer />
    </>
  );
}
