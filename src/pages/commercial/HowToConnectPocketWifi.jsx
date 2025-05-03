import HowToConnect from "@/components/commercial/connectPocketWifi/HowToConnect";
import ReturnDevice from "@/components/commercial/connectPocketWifi/ReturnDevice";
import TopUpPlan from "@/components/commercial/connectPocketWifi/TopUpPlan";
import { Fragment } from "react";

const HowToConnectPocketWifi = () => {
  return (
    <Fragment>
      <HowToConnect
        link={{ to: "/product/pocket-wifi", text: "Buy Pocket Wifi" }}
      />
      <ReturnDevice />
      <TopUpPlan />
    </Fragment>
  );
};

export default HowToConnectPocketWifi;
