import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import CertStrip from "@/components/CertStrip";
import AboutPreview from "@/components/AboutPreview";
import ProductCategories from "@/components/ProductCategories";
import Solutions from "@/components/Solutions";
import ProductsPreview from "@/components/ProductsPreview";
import MissionVision from "@/components/MissionVision";
import Values from "@/components/Values";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FloatingEnquiry from "@/components/FloatingEnquiry";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <CertStrip />
      <AboutPreview />
      <ProductCategories />
      <Solutions />
      <ProductsPreview />
      <MissionVision />
      <Values />
      <Testimonials />
      <CTA />
      <FloatingEnquiry />
    </>
  );
}
