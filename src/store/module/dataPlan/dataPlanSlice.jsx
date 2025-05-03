import { createSlice } from "@reduxjs/toolkit";

// Initial state with data
const initialState = {
  pocketWifiDayPass: [
    {
      plan: "Hong Kong, Indonesia, Japan, Macau, Malaysia, Philippines, South Korea, Taiwan, Thailand, Vietnam 1 Day",
      data: [
        { limit: "1GB/day", price: "fr S$ 1.50" },
        { limit: "5GB/day", price: "fr S$ 2.50" },
      ],
    },
    {
      plan: "Australia, Brunei, Canada, Cambodia, China (with VPN), Europe, Laos, Mexico, New Zealand, Turkey, USA 1 Day",
      data: [
        { limit: "1GB/day", price: "S$ 2.90" },
        { limit: "5GB/day", price: "S$ 3.90" },
      ],
    },
    {
      plan: "Bahrain, Bangladesh, Egypt, India, Israel, Jordan, Kazakhstan, Kuwait, Oman, Pakistan, Qatar, Saudi Arabia, South Africa, Sri Lanka, UAE, Uzbekistan 1 Day",
      data: [
        { limit: "1GB/day", price: "S$ 3.90" },
        { limit: "5GB/day", price: "S$ 6.90" },
      ],
    },
  ],
  restOfTheWorldDayPass: [
    {
      plan: "Algeria, Anguilla, Antigua and Barbuda, Argentina, Aruba, Azerbaijan, Bolivia, Brazil, British Virgin Islands, Chile, Colombia, Costa Rica, Dominican Republic, Ecuador, El Salvador, Fiji, French Antilles(Martinique), French Sint Maarten, Grenada, Guadeloupe, Guatemala, Guyana, Haiti, Jamaica, Kyrgyzstan, Maldives, Mongolia, Myanmar, Netherlands Antilles(Curacao), Nicaragua, Panama, Paraguay, Peru, Puerto Rico, Saint Vincent and the Grenadines, Suriname, Tahiti, Tajikistan, the CaymanIslands, Trinidad and Tobago Turks and Caicos Islands, Uruguay, Venezuela",
      data: [
        { limit: "1GB/day", price: "fr S$ 1.50" },
        { limit: "5GB/day", price: "fr S$ 2.50" },
      ],
    },
  ],
  simDataPlan: [
    {
      plan: "Malaysia/ Thailand 1 day",
      data: [
        { limit: "500MB/day", price: "S$ 1.20" },
        { limit: "1GB/day", price: "S$ 1.80" },
        { limit: "2GB/day", price: "S$ 2.60" },
      ],
    },
    {
      plan: "China 1 Day",
      data: [
        { limit: "500MB/day", price: "S$ 4.00" },
        { limit: "1GB/day", price: "S$ 5.90" },
        { limit: "2GB/day", price: "S$ 8.80" },
      ],
    },
    {
      plan: "South Korea 3 Days",
      data: [
        { limit: "500MB/day", price: "S$ 5.60" },
        { limit: "1GB/day", price: "S$ 8.40" },
        { limit: "2GB/day", price: "S$ 12.60" },
      ],
    },
    {
      plan: "Japan 3 Days",
      data: [
        { limit: "500MB/day", price: "S$ 5.80" },
        { limit: "1GB/day", price: "S$ 8.70" },
        { limit: "2GB/day", price: "S$ 13.00" },
      ],
    },
    {
      plan: "Europe 5 Days",
      data: [
        { limit: "500MB/day", price: "S$ 8.30" },
        { limit: "1GB/day", price: "S$ 12.50" },
        { limit: "2GB/day", price: "S$ 18.70" },
      ],
    },
    {
      plan: "Australia 5 Days",
      data: [
        { limit: "500MB/day", price: "S$ 11.00" },
        { limit: "1GB/day", price: "S$ 12.50" },
        { limit: "2GB/day", price: "S$ 24.70" },
      ],
    },
  ],
  regionalCountries:
    "*Europe: Albania, Armenia, Andorra, Austria, Belgium, Bosnia and Herzegovina, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Georgia, Gibraltar, Greece, Guernsey, Hungary, Iceland, Ireland, Isle of Man, Italy, Jersey, Latvia, Liechtenstein, Lithuania, Luxembourg, Macedonia, Malta, Monaco, Montenegro, Netherlands, Norway, Poland, Portugal, Romania, San Marino, Serbia, Slovakia, Slovenia, Spain, Sweden, Switzerland, Ukraine, United Kingdom, Vatican",
};

// Create the slice
const dataPlanSlice = createSlice({
  name: "dataPlan",
  initialState,
  reducers: {
    // Define actions if you need to modify the dataPlan data
  },
});

// Export the actions
export const {} = dataPlanSlice.actions;

// Export the reducer
export default dataPlanSlice.reducer;
