import { configureStore } from "@reduxjs/toolkit";
import aboutSlice from "./module/about/aboutSlice";
import { apiSlice } from "./module/api/apiSlice";
import authSlice from "./module/auth/slice";
import contactSlice from "./module/contact/contactSlice";
import countrySlice from "./module/country/countrySlice";
import dataPlanSlice from "./module/dataPlan/dataPlanSlice";
import howItWorksReducer from "./module/howItWorks/HowItWorksSlice";
import pocketWifiSlice from "./module/pocketWifi/slice";
import routerSlice from "./module/router/slice";
import sharedSlice from "./module/shared/sharedSlice";
import simSlice from "./module/sim/slice";
import testimonialsSlice from "./module/testimonials/testimonialsSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    pocketWifi: pocketWifiSlice,
    router: routerSlice,
    sim: simSlice,
    shared: sharedSlice,
    testimonials: testimonialsSlice,
    howItWorks: howItWorksReducer,
    about: aboutSlice,
    contact: contactSlice,
    country: countrySlice,
    dataPlan: dataPlanSlice,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [
          // "api/executeQuery/fulfilled",
        ],
        ignoredActionPaths: [
          "meta.baseQueryMeta.request",
          "meta.arg.originalArgs.data",
          "meta.baseQueryMeta.response",
          "payload",
        ],
        ignoredPaths: [
          "pocketWifi.features",
          "router.features",
          "sim.features",
          "router.cart.startDate",
          "sim.cart.startDate",
          "pocketWifi.aboutUs",
          "pocketWifi.services",
          "sim.setupInstructions",
          "about.features",
          "about.whatWeDo",
          "pocketWifi.benefitsData",
          "shared.products",
          "contact.socialLinks",
          "country.packages",
          "pocketWifi.cart.startDate",
          "howItWorks",
        ],
      },
    }).concat(apiSlice.middleware),
});
