import CommercialLayout from "@/components/layout/CommercialLayout";
import PocketWifiLayout from "@/components/layout/PocketWifiLayout";
import RouterLayout from "@/components/layout/RouterLayout";
import SimLayout from "@/components/layout/SimLayout";
import AboutUs from "@/pages/commercial/AboutUs";
import Affiliate from "@/pages/commercial/Affiliate";
import Contact from "@/pages/commercial/Contact";
import CountryCoverage from "@/pages/commercial/countryCoverage/CountryCoverage";
import CountryCoverageFilter from "@/pages/commercial/countryCoverage/CountryCoverageFilter";
import Home from "@/pages/commercial/Home";
import HowItWorks from "@/pages/commercial/howItWorks/HowItWorks";
import HowToConnectPocketWifi from "@/pages/commercial/HowToConnectPocketWifi";
import HowToSetupSim from "@/pages/commercial/HowToSetupSim";
import PackageDetails from "@/pages/commercial/PackageDetails";
import PickDropLocation from "@/pages/commercial/PickDropLocation";
import PocketWifiHome from "@/pages/commercial/pocketWifi/Home";
import PocketWifiCartService from "@/pages/commercial/pocketWifi/PocketWifiCartService";
import PocketWifiOrderSummery from "@/pages/commercial/pocketWifi/PocketWifiOrderSummery";
import PocketWifiPlan from "@/pages/commercial/pocketWifi/PocketWifiPlan";
import PocketWifiPlanSummery from "@/pages/commercial/pocketWifi/PocketWifiPlanSummery";
import PocketWifiRegion from "@/pages/commercial/pocketWifi/PocketWifiRegion";
import PocketWifiSelfPickup from "@/pages/commercial/pocketWifi/PocketWifiSelfPickup";
import PocketWifiShippingOption from "@/pages/commercial/pocketWifi/PocketWifiShippingOption";
import PocketWifiDetails from "@/pages/commercial/PocketWifiDetails";
import RouterHome from "@/pages/commercial/router/Home";
import RouterCartService from "@/pages/commercial/router/RouterCartService";
import RouterOrderSummery from "@/pages/commercial/router/RouterOrderSummery";
import RouterPlan from "@/pages/commercial/router/RouterPlan";
import RouterPlanSummery from "@/pages/commercial/router/RouterPlanSummery";
import RouterRegion from "@/pages/commercial/router/RouterRegion";
import RouterSelfPickup from "@/pages/commercial/router/RouterSelfPickup";
import RouterShippingOption from "@/pages/commercial/router/RouterShippingOption";
import SimHome from "@/pages/commercial/sim/Home";
import SimCartService from "@/pages/commercial/sim/SimCartService";
import SimOrderSummery from "@/pages/commercial/sim/SimOrderSummery";
import SimPlan from "@/pages/commercial/sim/SimPlan";
import SimPlanSummery from "@/pages/commercial/sim/SimPlanSummery";
import SimRegion from "@/pages/commercial/sim/SimRegion";
import SimSelfPickup from "@/pages/commercial/sim/SimSelfPickup";
import SimShippingOption from "@/pages/commercial/sim/SimShippingOption";
import AboutCorporate from "@/pages/corporate/AboutCorporate";
import Commercial from "@/pages/corporate/Commercial";
import CorporateHome from "@/pages/corporate/Home";
import Hotel from "@/pages/corporate/Hotel";
import Iot from "@/pages/corporate/Iot";
import MaritimeInternet from "@/pages/corporate/MaritimeInternet";
import Office from "@/pages/corporate/Office";
import TravelAgency from "@/pages/corporate/TravelAgency";
import Faq from "@/pages/Faq";

const commercialRoutes = {
  commercialLayout: {
    path: "/",
    name: "Home",
    activePath: "home",
    element: <CommercialLayout />,
  },
  home: {
    path: "/",
    name: "Home",
    activePath: "home",
    element: <Home />,
  },
  pocketWifiHome: {
    path: "/product/pocket-wifi",
    name: "Pocket Wifi",
    activePath: "pocket-wifi",
    element: <PocketWifiHome />,
  },
  routerHome: {
    path: "/product/router",
    name: "Router",
    activePath: "router",
    element: <RouterHome />,
  },
  simHome: {
    path: "/product/sim",
    name: "SIM/eSIM",
    activePath: "sim",
    element: <SimHome />,
  },

  // pocket wifi
  pocketWifiLayout: {
    path: "/pocket-wifi",
    name: "Pocket Wifi",
    activePath: "pocketWifi",
    element: <PocketWifiLayout />,
  },
  pocketWifiRegion: {
    path: "/pocket-wifi/region",
    name: "Pocket Wifi",
    activePath: "pocketWifi",
    element: <PocketWifiRegion />,
  },
  pocketWifiPlan: {
    path: "/pocket-wifi/wifi-plan",
    name: "Pocket Wifi",
    activePath: "pocketWifi",
    element: <PocketWifiPlan />,
  },
  pocketWifiCartService: {
    path: "/pocket-wifi/cart-service",
    name: "Pocket Wifi",
    activePath: "pocketWifi",
    element: <PocketWifiCartService />,
  },
  pocketWifiPlanSummery: {
    path: "/pocket-wifi/wifi-plan-summery",
    name: "Pocket Wifi",
    activePath: "pocketWifi",
    element: <PocketWifiPlanSummery />,
  },
  pocketWifiShippingOption: {
    path: "/pocket-wifi/shipping-option",
    name: "Pocket Wifi",
    activePath: "pocketWifi",
    element: <PocketWifiShippingOption />,
  },
  pocketWifiSelfPickup: {
    path: "/pocket-wifi/shipping-option/self-pickup",
    name: "Pocket Wifi",
    activePath: "pocketWifi",
    element: <PocketWifiSelfPickup />,
  },
  pocketWifiOrderSummery: {
    path: "/pocket-wifi/order-summery",
    name: "Pocket Wifi",
    activePath: "pocketWifi",
    element: <PocketWifiOrderSummery />,
  },

  pocketWifiDetails: {
    path: "/pocket-wifi-details",
    name: "Pocket Wifi Details",
    activePath: "pocketWifi",
    element: <PocketWifiDetails />,
  },

  // router
  routerLayout: {
    path: "/router",
    name: "Router",
    activePath: "router",
    element: <RouterLayout />,
  },

  routerRegion: {
    path: "/router/region",
    name: "Router Region",
    activePath: "router",
    element: <RouterRegion />,
  },
  routerPlan: {
    path: "/router/router-plan",
    name: "Router Plan",
    activePath: "router",
    element: <RouterPlan />,
  },
  routerCartService: {
    path: "/router/cart-service",
    name: "Router Cart Service",
    activePath: "router",
    element: <RouterCartService />,
  },
  routerPlanSummery: {
    path: "/router/router-plan-summery",
    name: "Router Plan Summery",
    activePath: "router",
    element: <RouterPlanSummery />,
  },
  routerShippingOption: {
    path: "/router/shipping-option",
    name: "Router Shipping Option",
    activePath: "router",
    element: <RouterShippingOption />,
  },
  routerSelfPickup: {
    path: "/router/shipping-option/self-pickup",
    name: "Router Self Pickup",
    activePath: "router",
    element: <RouterSelfPickup />,
  },
  routerOrderSummery: {
    path: "/router/order-summery",
    name: "Router Order Summery",
    activePath: "router",
    element: <RouterOrderSummery />,
  },

  // router
  simLayout: {
    path: "/sim",
    name: "Sim/eSim",
    activePath: "sim",
    element: <SimLayout />,
  },

  simRegion: {
    path: "/sim/region",
    name: "Router Region",
    activePath: "router",
    element: <SimRegion />,
  },
  simPlan: {
    path: "/sim/sim-plan",
    name: "Sim Plan",
    activePath: "sim",
    element: <SimPlan />,
  },
  simCartService: {
    path: "/sim/cart-service",
    name: "Sim Cart Service",
    activePath: "sim",
    element: <SimCartService />,
  },
  simPlanSummery: {
    path: "/sim/sim-plan-summery",
    name: "Sim Plan Summery",
    activePath: "sim",
    element: <SimPlanSummery />,
  },
  simShippingOption: {
    path: "/sim/shipping-option",
    name: "Sim Shipping Option",
    activePath: "sim",
    element: <SimShippingOption />,
  },
  simSelfPickup: {
    path: "/sim/shipping-option/self-pickup",
    name: "Sim Self Pickup",
    activePath: "sim",
    element: <SimSelfPickup />,
  },
  simOrderSummery: {
    path: "/sim/order-summery",
    name: "Sim Order Summery",
    activePath: "sim",
    element: <SimOrderSummery />,
  },

  // about us
  aboutUs: {
    path: "/about-us",
    name: "About Us",
    activePath: "about-us",
    element: <AboutUs />,
  },

  // contact
  contact: {
    path: "/contact",
    name: "Contact Us",
    activePath: "contact",
    element: <Contact />,
  },

  // country coverage
  countryCoverage: {
    path: "/country-coverage",
    name: "Country Coverage",
    activePath: "countryCoverage",
    element: <CountryCoverage />,
  },

  countryCoverageFilter: {
    path: "/country-coverage/filter",
    name: "Country Coverage Filter",
    activePath: "countryCoverageFilter",
    element: <CountryCoverageFilter />,
  },

  packageDetails: {
    path: "/package/details/:packageId",
    name: "Package Details",
    activePath: "packageDetails",
    element: <PackageDetails />,
  },

  howItWorks: {
    path: "/how-it-works",
    name: "How It Works",
    activePath: "howItWorks",
    element: <HowItWorks />,
  },

  affiliate: {
    path: "/affiliate",
    name: "Affiliate",
    activePath: "affiliate",
    element: <Affiliate />,
  },

  // pick drop location
  pickDropLocation: {
    path: "/pick-drop-location",
    name: "Pick Drop Location",
    activePath: "pickDropLocation",
    element: <PickDropLocation />,
  },

  // how to
  howToSetupSim: {
    path: "/how-to-setup-sim",
    name: "How to Setup Sim",
    activePath: "howToSetupSim",
    element: <HowToSetupSim />,
  },
  howToConnectPocketWifi: {
    path: "/how-to-connect-pocket-wifi",
    name: "How to Connect PocketWifi",
    activePath: "howToConnectPocketWifi",
    element: <HowToConnectPocketWifi />,
  },

  // faq

  faq: {
    path: "/faq",
    name: "FAQ",
    activePath: "faq",
    element: <Faq />,
  },
};

const corporateRoutes = {
  home: {
    path: "/corporate",
    name: "Corporate",
    activePath: "home",
    element: <CorporateHome />,
  },
  iot: {
    path: "/corporate/iot",
    name: "IOT",
    activePath: "iot",
    element: <Iot />,
  },
  hotel: {
    path: "/corporate/hotel",
    name: "Hotel",
    activePath: "hotel",
    element: <Hotel />,
  },
  travelAgency: {
    path: "/corporate/travel-agency",
    name: "Travel Agency",
    activePath: "travel-agency",
    element: <TravelAgency />,
  },
  maritimeInternet: {
    path: "/corporate/maritime-internet",
    name: "MARITIME INTERNET",
    activePath: "maritime-internet",
    element: <MaritimeInternet />,
  },
  office: {
    path: "/corporate/office",
    name: "Office",
    activePath: "office",
    element: <Office />,
  },
  aboutUs: {
    path: "/corporate/about-us",
    name: "About Us",
    activePath: "about-us",
    element: <AboutCorporate />,
  },
  commercial: {
    path: "/corporate/commercial",
    name: "Commercial",
    activePath: "commercial",
    element: <Commercial />,
  },
};

export { commercialRoutes, corporateRoutes };
