import CountryGrid from "@/components/commercial/home/CountryGrid";
import GetYourOwn from "@/components/commercial/home/GetYourOwn";
import Hero from "@/components/commercial/home/Hero";
import HowItWorks from "@/components/commercial/home/HowItWorks";
import InternetPackage from "@/components/commercial/home/InternetPackage";
import Products from "@/components/commercial/home/Products";
import StayConnectedRegions from "@/components/commercial/home/StayConnectedRegions";
import TravelPlans from "@/components/commercial/home/TravelPlans";
import WhyChooseUs from "@/components/commercial/home/WhyChooseUs";
import WhyYoowifi from "@/components/commercial/home/WhyYoowifi";
import WifiBBIntro from "@/components/commercial/home/WifiBBIntro";
import CollaborateMarquee from "@/components/shared/CollaborateMarquee";
import CustomerTestimonial from "@/components/shared/others/CustomerTestimonial";
import DownloadApp from "../../components/commercial/home/DownloadApp";

function Home() {
  return (
    <div className="overflow-hidden w-full">
      <Hero />
      <TravelPlans/>
      <CountryGrid/>
      <WifiBBIntro/>
      <WhyChooseUs/>
      <DownloadApp/>
      {/* <Products />
      <GetYourOwn />
      <InternetPackage />
      <WhyYoowifi />
      <StayConnectedRegions />
      <CustomerTestimonial />
      <HowItWorks />
      <CollaborateMarquee /> */}
    </div>
  );
}

export default Home;
