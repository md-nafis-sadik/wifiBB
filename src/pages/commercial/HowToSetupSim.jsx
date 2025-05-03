import { Fragment } from "react";
import HowToSetup from "@/components/commercial/sim/home/HowToSetup";
import HowToTopUp from "@/components/commercial/sim/home/HowToTopUp";
import StepToActiveSim from "@/components/commercial/sim/home/StepToActiveSim";
import DeviceCompability from "@/components/commercial/sim/home/DeviceCompability";

const HowToSetupSim = () => {
  return (
    <Fragment>
      <HowToSetup link={{ to: "/product/sim", text: "Buy SIM/eSIM" }} />
      <StepToActiveSim />
      <DeviceCompability />
      <HowToTopUp />
    </Fragment>
  );
};

export default HowToSetupSim;
