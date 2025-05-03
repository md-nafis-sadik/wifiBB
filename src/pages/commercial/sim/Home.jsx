import Description from "@/components/commercial/sim/home/Description";
import DeviceCompability from "@/components/commercial/sim/home/DeviceCompability";
import Hero from "@/components/commercial/sim/home/Hero";
import HowToSetup from "@/components/commercial/sim/home/HowToSetup";
import HowToTopUp from "@/components/commercial/sim/home/HowToTopUp";
import KeyFeatures from "@/components/commercial/sim/home/KeyFeatures";
import OtherProducts from "@/components/commercial/sim/home/OtherProducts";
import StepToActiveSim from "@/components/commercial/sim/home/StepToActiveSim";

function Home() {
  return (
    <section>
      <Hero />
      <Description />
      <KeyFeatures />
      <HowToSetup />
      <StepToActiveSim />
      <DeviceCompability />  
      <HowToTopUp />
      <OtherProducts />
    </section>
  );
}

export default Home;
