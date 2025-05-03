import GetYourOwn from "@/components/commercial/home/GetYourOwn";
import Hero from "@/components/commercial/home/Hero";
import HowItWorks from "@/components/commercial/home/HowItWorks";
import InternetPackage from "@/components/commercial/home/InternetPackage";
import Products from "@/components/commercial/home/Products";
import StayConnectedRegions from "@/components/commercial/home/StayConnectedRegions";
import WhyYoowifi from "@/components/commercial/home/WhyYoowifi";
import CollaborateMarquee from "@/components/shared/CollaborateMarquee";
import CustomerTestimonial from "@/components/shared/others/CustomerTestimonial";

function Home() {
  return (
    <div className="overflow-hidden w-full">
      <Hero />
      <Products />
      <GetYourOwn />
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
