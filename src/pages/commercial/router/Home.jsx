import Description from "@/components/commercial/router/home/Description";
import Hero from "@/components/commercial/router/home/Hero";
import HowToConnect from "@/components/commercial/router/home/HowToConnect";
import Included from "@/components/commercial/router/home/Included";
import KeyFeatures from "@/components/commercial/router/home/KeyFeatures";
import OtherProducts from "@/components/commercial/router/home/OtherProducts";
import RecomendedPackage from "@/components/commercial/router/home/RecomendedPackage";

function Home() {
  return (
    <section>
      <Hero />
      <Description />
      <RecomendedPackage />
      <KeyFeatures />
      <Included />
      <HowToConnect />
      <OtherProducts />
    </section>
  );
}

export default Home;
