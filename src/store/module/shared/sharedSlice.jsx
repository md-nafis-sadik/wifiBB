import { PocketWifiIcon, RouterMiniIcon, SimMiniIcon } from "@/services";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePath: "",
  packages: [{}],
  shippingOptions: [
    {
      shippingId: "001",
      title: "Self Pickup",
      subtitle: "Choose your location",
      description: "Device Collection: 5 days before travel",
      price: "Free",
    },
    {
      shippingId: "002",
      title: "Domestic",
      subtitle: "",
      description:
        "Within 5 business days before trip for Dec with return mailer bag. For advance orders, delivery will be within 3 days before trip",
      price: "SGD 0",
    },
    {
      shippingId: "003",
      title: "Domestic Express",
      subtitle: "",
      description:
        "Within 2 business days for orders before 2pm with return mailer bag",
      price: "SGD 10",
    },
    {
      shippingId: "004",
      title: "Domestic Super Express",
      subtitle: "",
      description: "Same business day before 2pm with return mailer bag",
      price: "SGD 20",
    },
  ],
  products: [
    {
      name: "Pocket Wifi",
      path: "/product/pocket-wifi",
      icon: ({ pocketWifiColor = "", routerColor = "", simColor = "" }) => {
        return pocketWifiColor ? (
          <PocketWifiIcon color={pocketWifiColor} />
        ) : (
          <PocketWifiIcon />
        );
      },
    },

    {
      name: "Router",
      path: "/product/router",
      icon: ({ pocketWifiColor = "", routerColor = "", simColor = "" }) => {
        return routerColor ? (
          <RouterMiniIcon color={routerColor} />
        ) : (
          <RouterMiniIcon />
        );
      },
    },
    {
      name: "SIM/eSIM",
      path: "/product/sim",
      icon: ({ pocketWifiColor = "", routerColor = "", simColor = "" }) => {
        return simColor ? <SimMiniIcon color={simColor} /> : <SimMiniIcon />;
      },
    },
  ],
  productTab: {
    activeTab: null,
  },
  selectedHeroIndex: 0,
  isAuthModalOpen: false,
  isLoginModalOpen: false,
  downloadAppDialogOpen: false,
};

const sharedSlice = createSlice({
  name: "shared",
  initialState,
  reducers: {
    setActivePath: (state, action) => {
      state.activePath = action.payload;
    },
    setHeroIndex: (state, action) => {
      state.selectedHeroIndex = action.payload;
    },
    setAuthModalStatus: (state, action) => {
      state.isAuthModalOpen = action.payload;
    },
    setLoginModalStatus: (state, action) => {
      state.isLoginModalOpen = action.payload;
    },
    setDownloadAppDialogOpen: (state, action) => {
      state.downloadAppDialogOpen = action.payload;
    },
    setProductActiveTab: (state, action) => {
      state.productTab.activeTab = action.payload;
    },
  },
});

export const {
  setActivePath,
  setHeroIndex,
  setDownloadAppDialogOpen,
  setAuthModalStatus,
  setLoginModalStatus,
  setProductActiveTab,
} = sharedSlice.actions;
export default sharedSlice.reducer;
