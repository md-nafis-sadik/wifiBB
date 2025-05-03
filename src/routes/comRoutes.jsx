import { commercialRoutes as routes } from "@/services";

const {
  aboutUs,
  commercialLayout,
  contact,
  home,
  howToSetupSim,
  pocketWifiLayout,
  pocketWifiHome,
  pocketWifiRegion,
  pocketWifiPlan,
  pocketWifiCartService,
  pocketWifiPlanSummery,
  pocketWifiOrderSummery,
  pocketWifiSelfPickup,
  pocketWifiShippingOption,
  pocketWifiDetails,
  routerHome,
  routerLayout,
  routerRegion,
  routerPlan,
  routerCartService,
  routerPlanSummery,
  routerShippingOption,
  routerSelfPickup,
  routerOrderSummery,
  simHome,
  simLayout,
  simRegion,
  simPlan,
  simCartService,
  simPlanSummery,
  simShippingOption,
  simSelfPickup,
  simOrderSummery,
  countryCoverage,
  countryCoverageFilter,
  howToConnectPocketWifi,
  packageDetails,
  howItWorks,
  affiliate,
  pickDropLocation,
  faq,
} = routes || {};

export const comRoutes = [
  {
    path: commercialLayout.path,
    element: commercialLayout.element,
    children: [
      {
        path: home.path,
        element: home.element,
      },
      {
        path: pocketWifiHome.path,
        element: pocketWifiHome.element,
      },
      {
        path: routerHome.path,
        element: routerHome.element,
      },
      {
        path: simHome.path,
        element: simHome.element,
      },
      {
        path: aboutUs.path,
        element: aboutUs.element,
      },
      {
        path: contact.path,
        element: contact.element,
      },
      {
        path: pocketWifiDetails.path,
        element: pocketWifiDetails.element,
      },
      {
        path: countryCoverage.path,
        element: countryCoverage.element,
      },
      {
        path: countryCoverageFilter.path,
        element: countryCoverageFilter.element,
      },
      {
        path: packageDetails.path,
        element: packageDetails.element,
      },
      {
        path: howItWorks.path,
        element: howItWorks.element,
      },
      {
        path: affiliate.path,
        element: affiliate.element,
      },
      {
        path: pickDropLocation.path,
        element: pickDropLocation.element,
      },
      {
        path: howToSetupSim.path,
        element: howToSetupSim.element,
      },
      {
        path: howToConnectPocketWifi.path,
        element: howToConnectPocketWifi.element,
      },
      {
        path: faq.path,
        element: faq.element,
      },
    ],
  },
  {
    path: pocketWifiLayout.path,
    element: pocketWifiLayout.element,
    children: [
      {
        path: pocketWifiRegion.path,
        element: pocketWifiRegion.element,
      },
      {
        path: pocketWifiPlan.path,
        element: pocketWifiPlan.element,
      },
      {
        path: pocketWifiCartService.path,
        element: pocketWifiCartService.element,
      },
      {
        path: pocketWifiPlanSummery.path,
        element: pocketWifiPlanSummery.element,
      },
      {
        path: pocketWifiShippingOption.path,
        element: pocketWifiShippingOption.element,
      },
      {
        path: pocketWifiSelfPickup.path,
        element: pocketWifiSelfPickup.element,
      },
      {
        path: pocketWifiOrderSummery.path,
        element: pocketWifiOrderSummery.element,
      },
    ],
  },
  {
    path: routerLayout.path,
    element: routerLayout.element,
    children: [
      {
        path: routerRegion.path,
        element: routerRegion.element,
      },
      {
        path: routerPlan.path,
        element: routerPlan.element,
      },
      {
        path: routerCartService.path,
        element: routerCartService.element,
      },
      {
        path: routerPlanSummery.path,
        element: routerPlanSummery.element,
      },
      {
        path: routerShippingOption.path,
        element: routerShippingOption.element,
      },
      {
        path: routerSelfPickup.path,
        element: routerSelfPickup.element,
      },
      {
        path: routerOrderSummery.path,
        element: routerOrderSummery.element,
      },
    ],
  },
  {
    path: simLayout.path,
    element: simLayout.element,
    children: [
      {
        path: simRegion.path,
        element: simRegion.element,
      },
      {
        path: simPlan.path,
        element: simPlan.element,
      },
      {
        path: simCartService.path,
        element: simCartService.element,
      },
      {
        path: simPlanSummery.path,
        element: simPlanSummery.element,
      },
      {
        path: simShippingOption.path,
        element: simShippingOption.element,
      },
      {
        path: simSelfPickup.path,
        element: simSelfPickup.element,
      },
      {
        path: simOrderSummery.path,
        element: simOrderSummery.element,
      },
    ],
  },
];
