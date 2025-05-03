import HowItWorks from "@/components/commercial/home/HowItWorks";
import InternetPackage from "@/components/commercial/home/InternetPackage";
import Products from "@/components/commercial/home/Products";
import StayConnectedRegions from "@/components/commercial/home/StayConnectedRegions";
import WhyYoowifi from "@/components/commercial/home/WhyYoowifi";
import ContactUs from "@/components/corporate/home/ContactUs";
import CorporateHero from "@/components/corporate/home/CorporateHero";
import Services from "@/components/corporate/home/Services";
import WhatWeDoCorporate from "@/components/corporate/home/WhatWeDo";
import CollaborateMarquee from "@/components/shared/CollaborateMarquee";
import CustomerTestimonial from "@/components/shared/others/CustomerTestimonial";

function Home() {
  return (
    <div className="overflow-hidden w-full">
      <CorporateHero />
      <ContactUs />
      <Services />
      <WhatWeDoCorporate />
      <Products />
      <InternetPackage />
      <WhyYoowifi />
      <StayConnectedRegions />
      <CustomerTestimonial />
      <HowItWorks />
      <CollaborateMarquee />
    </div>
  );
}

export default Home;
