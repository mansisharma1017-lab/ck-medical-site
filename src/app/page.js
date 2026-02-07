import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import CertStrip from "@/components/CertStrip";
import AboutPreview from "@/components/AboutPreview";
import ProductCategories from "@/components/ProductCategories";
import ProductsPreview from "@/components/ProductsPreview";
import Solutions from "@/components/Solutions";
import MissionVision from "@/components/MissionVision";
import Values from "@/components/Values";
import Testimonials from "@/components/Testimonials";
import BrochureCTA from "@/components/BrochureCTA";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingEnquiry from "@/components/FloatingEnquiry";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <FeatureStrip />
      <CertStrip />
      <AboutPreview />
      <ProductCategories />
      <ProductsPreview />
      <Solutions />
      <MissionVision />
      <Values />
      <Testimonials />
      <BrochureCTA />
      <CTA />
      <Footer />
      <FloatingEnquiry />
    </>
  );
}
