import BannerSection from "@/components/Banner/Banner";
import HeroSection from "@/components/Hero/Hero";
import PricingSection from "@/components/Pricing/Pricing";
import ProcessSection from "@/components/Process/Process";
import ProductSection from "@/components/Product/Product";
import ServicesSection from "@/components/Servicess/Servicess";
import StrategiesSection from "@/components/Strategies/Strategiess";
import TestimonialsSection from "@/components/Testimonials/Testimonials";


export default function ProductPage() {
  return (
    <>
              <HeroSection />
      <ProductSection />
      <ServicesSection />
      <ProcessSection />
      <StrategiesSection />
      <PricingSection />
      <TestimonialsSection />
      <BannerSection />
    </>
  );
}