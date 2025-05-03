import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: {},
  wifiDevices: [
    {
      id: 1,
      name: "Wifi Device",
      deviceId: "55775254747523",
    },
    {
      id: 2,
      name: "Wifi Device",
      deviceId: "55775254222892",
    },
  ],
  sims: [
    {
      id: 1,
      name: "My Sim",
      deviceId: "55775254747523",
    },
    {
      id: 2,
      name: "My eSim",
      deviceId: "55775254222892",
    },
  ],
  userLocations: [
    {
      id: 1,
      name: "Thiago Silva",
      phoneNumber: "+1 (555) 123-6789",
      address: "1234 Elm Street, Springfield, IL 62704",
      appartment: "sdadsa",
      province: "asdasd",
      postCode: "sdasda",
      country: {
        id: 3,
        name: "Albania",
        iso3: "ALB",
        iso2: "AL",
        numeric_code: "008",
        phone_code: 355,
        capital: "Tirana",
        currency: "ALL",
        currency_name: "Albanian lek",
        currency_symbol: "Lek",
        tld: ".al",
        native: "Shqipëria",
        region: "Europe",
        subregion: "Southern Europe",
        latitude: "41.00000000",
        longitude: "20.00000000",
        emoji: "🇦🇱",
      },
      state: {
        id: 629,
        name: "Berat District",
        state_code: "BR",
      },
    },
  ],
  userPaymentCards: [
    {
      id: 1,
      username: "Jack Lewis",
      cardNumber: "1234567891011121",
      cvc: "123",
      expireDate: "06/21",
    },
  ],
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    saveAuthData: (state, action) => {
      state.auth = { ...state.auth, ...action?.payload };
      localStorage.setItem("yoowifi_admin", JSON.stringify(state.auth));
    },
    logout: (state) => {
      state.auth = {};
      localStorage.removeItem("yoowifi_admin");
    },
    setUserLocation: (state, action) => {
      state.userLocations = [...state.userLocations, action?.payload];
    },
    setUserPaymentCard: (state, action) => {
      state.userPaymentCards = [...state.userPaymentCards, action?.payload];
    },
    removeUserLocation: (state, action) => {
      const newLocations = [...state.userLocations];
      newLocations.splice(action?.payload, 1);
      state.userLocations = newLocations;
    },
  },
});

export const {
  saveAuthData,
  logout,
  setUserLocation,
  removeUserLocation,
  setUserPaymentCard,
} = authSlice.actions;
export default authSlice.reducer;
