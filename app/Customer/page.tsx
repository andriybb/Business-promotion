import BannerSection from "@/components/Banner/Banner";
import HowProductWorksSection from "@/components/Howproductworks/Howproductworks";
import JoinOffersSection from "@/components/Joinoffers/Joinoffers";
import OurClientsSection from "@/components/Ourclients/Ourclients";
import WhyChooseSection from "@/components/Whychoose/Whychoose";

export const metadata = {
    title: "Business promotion - Customers",
    description: "Effective Solutions for Your Business",
  };
   
  export default function CustomersPage() {
    return (
      <>
        <OurClientsSection />
        <WhyChooseSection />
        <HowProductWorksSection />
        <JoinOffersSection />
        <BannerSection /> 
      </>
    );
  }