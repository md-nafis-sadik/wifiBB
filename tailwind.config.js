/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      flex: {
        full: "0 0 100%",
      },
      margin: {
        15: "3.75rem",
      },
      padding: {
        15: "3.75rem",
      },
      gap: {
        15: "3.75rem",
      },
      width: {
        15: "3.75rem",
      },
      height: {
        15: "3.75rem",
      },
      screens: {
        xs: "380px",
      },
      colors: {
        disabled: {
          DEFAULT: "#D0D0D0",
        },
        white: {
          DEFAULT: "#ffffff",
          rgb: "rgba(255, 255, 255, 0.60)",
        },
        // secondary: {
        //   100: "#FFFCC5",
        //   200: "#FFFA85",
        //   300: "#FFF146",
        //   400: "#FFE31B",
        //   650: "#FFC266",
        //   500: "#FFC400",
        //   600: "#E29800",
        //   700: "#BB6C02",
        //   800: "#985308",
        //   900: "#7C440B",
        // },
        // main: {
        //   10: "#FFF1F1",
        //   20: "#FFF2F2",
        //   50: "#FEF2F2",
        //   60: "#E2CACA",
        //   100: "#FFE1E1",
        //   200: "#FFC9CA",
        //   300: "#FEA3A4",
        //   400: "#FB6E70",
        //   500: "#F24144",
        //   650: "#E41F26",
        //   600: "#D81F22",
        //   700: "#BC191C",
        //   750: "#E52226",
        //   800: "#9B191B",
        //   900: "#811B1D",
        //   950: "#46090A",
        // },
        black: {
          100: "#E7E7E7",
          200: "#D1D1D1",
          500: "#25262B",
          600: "#888888",
          700: "#4F4F4F",
          800: "#161616",
          900: "#191919",
          DEFAULT: "#000000",
        },
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#EEEEEE",
          250: "#ECECEC",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
          black: "#181A20",
          rgb: "rgba(207, 207, 207, 0.20)",
        },
        secondary: {
          50: "#F0F9FF",
          100: "#E6F4FB",  // Lightest tint (10% of #299ED3)
          200: "#C3E5F6",  // 20% tint
          300: "#9FD5F1",
          400: "#5BBBE8",  // 50% tint
          450: "#3AAEE2",  // Between 400-500
          500: "#37B7F9",
          525: "#299ED3",   // Your original base blue
          550: "#0D94D0",  // Between 500-600
          600: "#0285C3",  // Your deep blue
          650: "#0274A8",  // Slightly darker
          700: "#01638E",  // Darker blue
          800: "#015274",  // Navy transition
          900: "#01415A",  // Darkest blue
        },
        main: {
          10: "#FFFDF5",   // Lightest tint (near-white yellow)
          20: "#FFFCEB",
          50: "#FFFAE1",
          60: "#FFFAE1",
          100: "#FFF9D7",  // Very light yellow
          200: "#FEFBE6",
          300: "#FEF7CC",  // Pale yellow
          400: "#FEF3B3",  // Soft yellow
          500: "#FDEF99",  // Your original base yellow
          600: "#F9E550",  // Added vibrant orange-yellow
          650: "#f2d730",  // Darker gold
          700: "#FFC212",  // Deep amber
          750: "#B27600",  // Rich brown-orange
          800: "#995C00",  // Dark burnt orange
          900: "#804300",  // Deep espresso
          950: "#663500",  // Darkest brown
        },
        yellow: {
          400: "#F7D259",
        },
        status: {
          error: "#DE3737",
          success: "#56AD7E",
          warning: "#FF9F43",
          info: "#54A0FF",
          alert: "#FECA57",
        },
      },
      fontSize: {
        xxs: "0.665rem",
        "2xml": "1.75rem",
        "3xml": "1.875rem",
        "6xml": "4rem",
        "7xml": "5rem",
      },
      fontFamily: {
        dmsans: ["DMSans", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"],
        sansPro: ["SansPro", "sans-serif"],
        meid: ["Miedinger", "sans-serif"],
        proxima: ["ProximaNova", "sans-serif"],
      },
      boxShadow: {
        mid: "0px -8px 24px 0px rgba(0, 0, 0, 0.10)",
        "card-primary": "0px 15px 24px 0px rgba(0, 0, 0, 0.12)",
        "card-secondary": "0px 4px 12.1px 0px rgba(13, 13, 13, 0.06)",
      },
      backgroundImage: {
        login: "url('./assets/images/loginBg.png')",
        mainGradient:
          "linear-gradient(1deg, #D33739 0.75%, #D33739 30.9%, rgba(211, 55, 57, 0.00) 89.76%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },
  darkMode: ["class", "class"],
  plugins: [require("tailwindcss-animate")],
};
