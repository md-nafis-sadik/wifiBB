import {
  DataRoamingIcon,
  DeliveryTruckIcon,
  images,
  LteSpeedIcon,
  SimIcon,
  SimPlugIcon,
  SupportIcon,
  ThrottleIcon,
} from "@/services";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {
    name: "SIM/eSIM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typeset industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    features: [
      "Stay Connected Anywhere",
      "Save BIG on International Roaming",
      "Unbeatable Pricing Guarantee",
    ],
    price: {
      currency: "SGD",
      amount: 50,
      starting: true,
    },
    buttons: [
      {
        text: "View Plans",
        action: "openPlans",
      },
    ],
    tabs: [
      {
        title: "Description",
        content:
          "Our Sim/E-Sim is perfect for those who value convenience and ease of use. You can activate it within minutes and start enjoying all the benefits that come with it. Whether you’re a student, a working professional, or anyone who needs a reliable telecommunications service, our Sim/E-Sim is the perfect solution for you. We offer competitive pricing, flexible plans, and excellent customer support to ensure that you get the best value for your money!",
      },
      {
        title: "Terms & Conditions",
        content:
          "One-time use physical SIM card expiry date would be 60 days after purchase\n No refunds or cancellations can be made for eSIM due to eSIM compatibility issues.\n Do not delete or remove your eSIM from your device after successful installation.\n General terms and conditions apply.",
      },
    ],
    images: [
      {
        url: images.sim1,
        alt: "Router Wifi device front view",
      },
    ],
  },
  recomandedPackages: [
    {
      id: 1,
      title: "Basic Package",
      features: [
        "Keep Yoowifi Device",
        "Top-up Plan only",
        "365 Days Validity",
        "Covers 90 Countries",
      ],
      image:
        "https://www.startech.com.bd/image/cache/catalog/router/tp-link/m7000/m7000-01-228x228.jpg",
      category: "multi-country",
      planCode: "plan_1",
      dataSize: 1,
      packPrice: 10,
      validity: 30,
      desc: "GB",
      tags: ["sim", "topup"],
      coverage: [
        "Algeria",
        "Anguilla",
        "Antigua and Barbuda",
        "Argentina",
        "Aruba",
        "Azerbaijan",
        "Bolivia",
        "Brazil",
        "British Virgin Islands",
        "Chile",
        "Colombia",
        "Costa Rica",
      ],
      information:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt perspiciatis, eos distinctio totam repudiandae pariatur modi dignissimos velit ipsam rerum.",
    },
    {
      id: 2,

      title: "Traveler Package",
      features: [
        "Keep Yoowifi Device",
        "Top-up Plan only",
        "365 Days Validity",
        "Covers 90 Countries",
      ],

      image:
        "https://www.startech.com.bd/image/cache/catalog/router/tp-link/m7000/m7000-01-228x228.jpg",
      category: "daily",
      planCode: "plan_2",
      dataSize: 2,
      packPrice: 10,
      validity: 30,
      desc: "GB",
      tags: ["topup", "esim", "sim"],
      coverage: [
        "Algeria",
        "Anguilla",
        "Antigua and Barbuda",
        "Argentina",
        "Aruba",
        "Azerbaijan",
        "Bolivia",
        "Brazil",
        "British Virgin Islands",
        "Chile",
        "Colombia",
        "Costa Rica",
      ],
      information:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt perspiciatis, eos distinctio totam repudiandae pariatur modi dignissimos velit ipsam rerum.",
    },
    {
      id: 3,

      title: "Extended Package",
      features: [
        "Keep Yoowifi Device",
        "Top-up Plan only",
        "365 Days Validity",
        "Covers 90 Countries",
      ],

      image:
        "https://www.startech.com.bd/image/cache/catalog/router/tp-link/m7000/m7000-01-228x228.jpg",
      category: "daily",
      planCode: "plan_3",
      dataSize: 3,
      packPrice: 10,
      validity: 30,
      desc: "GB",
      tags: ["sim", "esim", "topup"],
      coverage: [
        "Algeria",
        "Anguilla",
        "Antigua and Barbuda",
        "Argentina",
        "Aruba",
        "Azerbaijan",
        "Bolivia",
        "Brazil",
        "British Virgin Islands",
        "Chile",
        "Colombia",
        "Costa Rica",
      ],
      information:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt perspiciatis, eos distinctio totam repudiandae pariatur modi dignissimos velit ipsam rerum.",
    },
    {
      id: 4,

      title: "Unlimited Package",
      features: [
        "Keep Yoowifi Device",
        "Top-up Plan only",
        "365 Days Validity",
        "Covers 90 Countries",
      ],

      image:
        "https://www.startech.com.bd/image/cache/catalog/router/tp-link/m7000/m7000-01-228x228.jpg",
      category: "daily",
      planCode: "plan_4",
      dataSize: 4,
      packPrice: 10,
      validity: 30,
      desc: "GB",
      tags: ["sim", "esim", "topup"],
      coverage: [
        "Algeria",
        "Anguilla",
        "Antigua and Barbuda",
        "Argentina",
        "Aruba",
        "Azerbaijan",
        "Bolivia",
        "Brazil",
        "British Virgin Islands",
        "Chile",
        "Colombia",
        "Costa Rica",
      ],
      information:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt perspiciatis, eos distinctio totam repudiandae pariatur modi dignissimos velit ipsam rerum.",
    },
    {
      id: 5,

      title: "Lite Package",
      features: [
        "Keep Yoowifi Device",
        "Top-up Plan only",
        "180 Days Validity",
        "Covers 60 Countries",
      ],

      image:
        "https://www.startech.com.bd/image/cache/catalog/router/tp-link/m7000/m7000-01-228x228.jpg",
      category: "monthly",
      planCode: "plan_5",
      dataSize: 1,
      packPrice: 10,
      validity: 30,
      desc: "GB",
      tags: ["sim", "topup"],
      coverage: [
        "Algeria",
        "Anguilla",
        "Antigua and Barbuda",
        "Argentina",
        "Aruba",
        "Azerbaijan",
        "Bolivia",
        "Brazil",
        "British Virgin Islands",
        "Chile",
        "Colombia",
        "Costa Rica",
      ],
      information:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt perspiciatis, eos distinctio totam repudiandae pariatur modi dignissimos velit ipsam rerum.",
    },
    {
      id: 6,

      title: "Business Package",
      features: [
        "Keep Yoowifi Device",
        "Top-up Plan only",
        "365 Days Validity",
        "Priority support",
        "Covers 100 Countries",
      ],

      image:
        "https://www.startech.com.bd/image/cache/catalog/router/tp-link/m7000/m7000-01-228x228.jpg",
      category: "monthly",
      planCode: "plan_6",
      dataSize: 2,
      packPrice: 10,
      validity: 30,
      desc: "GB",
      tags: ["topup", "esim", "sim"],
      coverage: [
        "Algeria",
        "Anguilla",
        "Antigua and Barbuda",
        "Argentina",
        "Aruba",
        "Azerbaijan",
        "Bolivia",
        "Brazil",
        "British Virgin Islands",
        "Chile",
        "Colombia",
        "Costa Rica",
      ],
      information:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt perspiciatis, eos distinctio totam repudiandae pariatur modi dignissimos velit ipsam rerum.",
    },
    {
      id: 7,

      title: "Premium Package",
      features: [
        "Keep Yoowifi Device",
        "Top-up Plan only",
        "365 Days Validity",
        "Unlimited data in selected countries",
        "Covers 90 Countries",
      ],

      image:
        "https://www.startech.com.bd/image/cache/catalog/router/tp-link/m7000/m7000-01-228x228.jpg",
      category: "daily",
      planCode: "plan_7",
      dataSize: 5,
      packPrice: 10,
      validity: 30,
      desc: "GB",
      tags: ["sim", "esim"],
      coverage: [
        "Algeria",
        "Anguilla",
        "Antigua and Barbuda",
        "Argentina",
        "Aruba",
        "Azerbaijan",
        "Bolivia",
        "Brazil",
        "British Virgin Islands",
        "Chile",
        "Colombia",
        "Costa Rica",
      ],
      information:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt perspiciatis, eos distinctio totam repudiandae pariatur modi dignissimos velit ipsam rerum.",
    },
    {
      id: 8,

      title: "Family Package",
      features: [
        "Keep Yoowifi Device",
        "Top-up Plan only",
        "365 Days Validity",
        "Connect up to 10 devices",
        "Covers 90 Countries",
      ],

      image:
        "https://www.startech.com.bd/image/cache/catalog/router/tp-link/m7000/m7000-01-228x228.jpg",
      category: "monthly",
      planCode: "plan_8",
      dataSize: 3,
      packPrice: 10,
      validity: 30,
      desc: "GB",
      tags: ["sim", "esim"],
      coverage: [
        "Algeria",
        "Anguilla",
        "Antigua and Barbuda",
        "Argentina",
        "Aruba",
        "Azerbaijan",
        "Bolivia",
        "Brazil",
        "British Virgin Islands",
        "Chile",
        "Colombia",
        "Costa Rica",
      ],
      information:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt perspiciatis, eos distinctio totam repudiandae pariatur modi dignissimos velit ipsam rerum.",
    },
    {
      id: 9,

      title: "Traveler Plus Package",
      features: [
        "Keep Yoowifi Device",
        "Top-up Plan only",
        "180 Days Validity",
        "Extended data for heavy users",
        "Covers 80 Countries",
      ],

      image:
        "https://www.startech.com.bd/image/cache/catalog/router/tp-link/m7000/m7000-01-228x228.jpg",
      category: "monthly",
      planCode: "plan_9",
      dataSize: 4,
      packPrice: 10,
      validity: 30,
      desc: "GB",
      tags: ["sim", "esim"],
      coverage: [
        "Algeria",
        "Anguilla",
        "Antigua and Barbuda",
        "Argentina",
        "Aruba",
        "Azerbaijan",
        "Bolivia",
        "Brazil",
        "British Virgin Islands",
        "Chile",
        "Colombia",
        "Costa Rica",
      ],
      information:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt perspiciatis, eos distinctio totam repudiandae pariatur modi dignissimos velit ipsam rerum.",
    },
    {
      id: 10,

      title: "Global Unlimited Package",
      features: [
        "Keep Yoowifi Device",
        "Top-up Plan only",
        "365 Days Validity",
        "Unlimited data globally",
        "Covers 100 Countries",
      ],
      image:
        "https://www.startech.com.bd/image/cache/catalog/router/tp-link/m7000/m7000-01-228x228.jpg",
      category: "daily",
      planCode: "plan_10",
      dataSize: 2,
      packPrice: 10,
      validity: 30,
      desc: "GB",
      tags: ["sim", "esim"],
      coverage: [
        "Algeria",
        "Anguilla",
        "Antigua and Barbuda",
        "Argentina",
        "Aruba",
        "Azerbaijan",
        "Bolivia",
        "Brazil",
        "British Virgin Islands",
        "Chile",
        "Colombia",
        "Costa Rica",
      ],
      information:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt perspiciatis, eos distinctio totam repudiandae pariatur modi dignissimos velit ipsam rerum.",
    },
  ],
  features: [
    {
      icon: () => <LteSpeedIcon />,
      title: "Up To 4G \n LTE Speed",
    },
    {
      icon: () => <ThrottleIcon />,
      title: "No Throttle",
    },
    {
      icon: () => <DeliveryTruckIcon />,
      title: "Fast Delivery",
    },
    {
      icon: () => <SimPlugIcon />,
      title: "Simple Plug and Use",
    },
    {
      icon: () => <SupportIcon />,
      title: "24/7 Technical Support",
    },
    {
      icon: () => <SimIcon />,
      title: "3-in-1 SIM card",
    },
  ],
  setupInstructions: [
    {
      id: 1,
      icon: () => <SimIcon />,
      title: "Purchase A SIM Card",
      description:
        "Easily order a SIM card via the Yoowifi app, and enjoy the convenience of having it delivered right to your doorstep.",
    },
    {
      id: 2,
      icon: () => <SimPlugIcon />,
      title: "Insert SIM Card",
      description:
        "Insert SIM card and power on your mobile device.*Data validity starts immediately upon the first insertion of SIM at destination.",
    },
    {
      id: 3,
      icon: () => <DataRoamingIcon />,
      title: "Enable Data Roaming",
      description:
        "Enable Data Roaming on your mobile device.*If your phone is unable to detect the Data Roaming activation, reboot after step 2 and kindly ensure your Data Roaming is switch on.",
    },
  ],
  activateSteps: [
    {
      title: "iOS",
      deviceSteps: [
        {
          id: 1,
          image: images.simSettingPhone,
          title: "Step 1",
          description: "Activating your eSIM on the Yoowifi app",
          steps: [
            "After purchasing the eSIM, go to My Orders and click the Activate eSIM button to complete the activation.",
            "Once activated, the eSIM will appear under My Data.",
          ],
        },

        {
          id: 2,
          image: images.simSettingPhone,
          title: "Step 2",
          description: "Activating your eSIM",
          steps: [
            "Go to your iPhone’s settings. Tap on Cellular or Mobile Data.",
            "Tap on Add eSIM",
            "Tap on Use QR Code",
            "Scan the QR code you received after purchasing the eSIM in the Yoowifi app or enter Details manually.",
          ],
        },
        {
          id: 3,
          image: images.simSettingPhone,
          title: "Step 3",
          description: "Enabling Data Roaming",
          steps: [
            "If you're setting up manually, you may need to enter the activation details provided in the Yoowifi app under your eSIM order, which can be found in My Data.",
            "Continue to activate eSIM.",
            "Select the eSIM that has been added once you reach your travel destination, then enable Data Roaming to connect.",
          ],
        },
      ],
    },
    {
      title: "Android",
      deviceSteps: [
        {
          id: 1,
          image: images.simSettingPhone,
          title: "Step 1",
          description: "Activating your eSIM on the Yoowifi app",
          steps: [
            "After purchasing the eSIM, go to My Orders and click the Activate eSIM button to complete the activation.",
            "Once activated, the eSIM will appear under My Data.",
          ],
        },

        {
          id: 2,
          image: images.simSettingPhone,
          title: "Step 2",
          description: "Activating your eSIM",
          steps: [
            "Go to your iPhone’s settings. Tap on Cellular or Mobile Data.",
            "Tap on Add eSIM",
            "Tap on Use QR Code",
            "Scan the QR code you received after purchasing the eSIM in the Yoowifi app or enter Details manually.",
          ],
        },
        {
          id: 3,
          image: images.simSettingPhone,
          title: "Step 3",
          description: "Enabling Data Roaming",
          steps: [
            "If you're setting up manually, you may need to enter the activation details provided in the Yoowifi app under your eSIM order, which can be found in My Data.",
            "Continue to activate eSIM.",
            "Select the eSIM that has been added once you reach your travel destination, then enable Data Roaming to connect.",
          ],
        },
      ],
    },
  ],
  deviceCompatibilities: [
    {
      title: "Apple",
      devices: [
        {
          name: "iPhone",
          versions: [
            "iPhone 16, 16 Plus, 16 Pro, 16 Pro Max",
            "iPhone 15, 15 Plus, 15 Pro, 15 Pro Max",
            "iPhone 14, 14 Plus, 14 Pro, 14 Pro Max",
            "iPhone 13, 13 Mini, 13 Pro, 13 Pro, 13 Pro Max",
            "iPhone 12, 12 Mini, 12 Pro, 12 Pro Max",
            "iPhone 11, 11 Pro, 11 Pro Max",
            "iPhone XS, XS Max",
            "iPhone XR",
            "iPhone SE (2020 and 2022)",
          ],
        },
        {
          name: "iPad",
          versions: [
            "iPad (from 7th generation)",
            "iPad Air (from 3rd generation)",
            "iPad Pro, 11-inch (from 1st generation)",
            "iPad Pro 12.9-inch (from 3rd generation)",
            "iPad Mini (from 5th generation)",
          ],
        },
      ],
      note: "eSIM functionality can vary by model and region. Please contact your local carrier for confirmation.",
    },
    {
      title: "Samsung",
      devices: [
        {
          name: "Samsung Galaxy S Series",
          versions: [
            "Galaxy S23",
            "Galaxy S23+",
            "Galaxy S23 Ultra",
            "Galaxy S22",
            "Galaxy S22+",
            "Galaxy S22 Ultra",
            "Galaxy S21",
            "Galaxy S21+",
            "Galaxy S21 Ultra",
            "Galaxy S20",
            "Galaxy S20+",
            "Galaxy S20 Ultra",
          ],
        },
        {
          name: "Samsung Galaxy Z Series (Foldable Phones)",
          versions: [
            "Galaxy Z Fold5 (2023)",
            "Galaxy Z Fold4 (2022)",
            "Galaxy Z Fold3 (2021)",
            "Galaxy Z Flip5 (2023)",
            "Galaxy Z Flip4 (2022)",
            "Galaxy Z Flip3 (2021)",
          ],
        },
        {
          name: "Samsung Galaxy Note Series",
          versions: [
            "Galaxy Note 20 Series (2020)",
            "Galaxy Note 20",
            "Galaxy Note 20 Ultra",
          ],
        },
        {
          name: "Samsung Galaxy A Series",
          versions: ["Galaxy A54 (2023)", "Galaxy A53 (2022)"],
        },
      ],
      note: "eSIM functionality can vary by model and region. Please contact your local carrier for confirmation.",
    },
    {
      title: "Google",
      devices: [
        {
          name: "Google Pixel 8 Series (2023)",
          versions: ["Pixel 8", "Pixel 8 Pro"],
        },

        {
          name: "Google Pixel 7 Series (2022)",
          versions: ["Pixel 7", "Pixel 7 Pro"],
        },

        {
          name: "Google Pixel 6 Series (2021)",
          versions: ["Pixel 6", "Pixel 6 Pro", "Pixel 6a"],
        },

        {
          name: "Google Pixel 5 Series (2020)",
          versions: ["Pixel 5", "Pixel 5a 5G"],
        },

        {
          name: "Google Pixel 4 Series (2019)",
          versions: ["Pixel 4", "Pixel 4 XL", "Pixel 4a"],
        },

        {
          name: "Google Pixel 3 Series (2018)",
          versions: ["Pixel 3", "Pixel 3 XL", "Pixel 3a", "Pixel 3a XL"],
        },
      ],
      note: "eSIM functionality can vary by model and region. Please contact your local carrier for confirmation.",
    },
    {
      title: "Huawei",
      devices: [
        {
          name: "Huawei P Series",
          versions: [
            "Huawei P60 Pro (2023)",
            "Huawei P50 Pro (2021)",
            "Huawei P40 Series (2020)Huawei P40",
            "Huawei P40 Pro",
            "Huawei P40 Pro+",
          ],
        },
        {
          name: "Huawei Mate Series",
          versions: [
            "Huawei Mate 50 Pro (2022)",
            "Huawei Mate 40 Pro (2020)",
            "Huawei Mate 30 Series (2019)Huawei Mate 30",
            "Huawei Mate 30 Pro",
          ],
        },
        {
          name: "Huawei Watch (eSIM models)",
          versions: [
            "Huawei Watch 4 Pro",
            "Huawei Watch 3",
            "Huawei Watch 3 Pro",
          ],
        },
      ],
      note: "eSIM functionality can vary by model and region. Please contact your local carrier for confirmation.",
    },
    {
      title: "Oppo",
      devices: [
        {
          name: "Oppo Find X Series",
          versions: [
            "Oppo Find X6 Pro (2023)",
            "Oppo Find X5 Series (2022)",
            "Oppo Find X5",
            "Oppo Find X5 Pro",
            "Oppo Find X3 Series (2021)",
            "Oppo Find X3",
            "Oppo Find X3 Pro",
          ],
        },
        {
          name: "Oppo Reno Series",
          versions: ["Oppo Reno8 Pro (2022)", "Oppo Reno7 Pro 5G "],
        },
        {
          name: "Oppo A Series",
          versions: ["Oppo A55s 5G (2022) "],
        },
      ],
      note: "eSIM functionality can vary by model and region. Please contact your local carrier for confirmation.",
    },
    {
      title: "Xiaomi",
      devices: [
        {
          name: "iPhone",
          versions: [
            "Xiaomi 13 (2023)",
            "Xiaomi 13 Pro (2023)",
            "Xiaomi 13 Lite (2023)",
          ],
        },
        {
          name: "iPhone",
          versions: [
            "Xiaomi 12 (2021)",
            "Xiaomi 12 Pro (2021)",
            "Xiaomi 12T (2022)",
            "Xiaomi 12T Pro (2022)",
          ],
        },
        {
          name: "iPhone",
          versions: [
            "Xiaomi Mi 11 (2020)",
            "Xiaomi Mi 11 Pro (2021)",
            "Xiaomi Mi 11 Ultra (2021)",
          ],
        },
        {
          name: "iPhone",
          versions: ["Redmi Note 12 Pro (2022)", "Redmi Note 12 Pro+ (2022)"],
        },
      ],

      note: "eSIM functionality can vary by model and region. Please contact your local carrier for confirmation.",
    },
    {
      title: "Honor",
      devices: [
        {
          name: "Honor Magic Series",
          versions: [
            "Honor Magic 5 Pro (2023)",
            "Honor Magic 4 Pro (2022)",
            "Honor Magic 3 Series (2021)",
            "Honor Magic 3",
            "Honor Magic 3 Pro",
            "Honor Magic 3 Pro+",
          ],
        },
        {
          name: "Honor 50 Series",
          versions: ["Honor 50 (2021)", "Honor 50 Pro (2021)"],
        },
        {
          name: "Honor V Series",
          versions: ["Honor V40 (2021)", "Honor V30 (2019)"],
        },
        {
          name: "Honor 20 Series",
          versions: ["Honor 20 Pro (2019)"],
        },
      ],

      note: "eSIM functionality can vary by model and region. Please contact your local carrier for confirmation.",
    },
    {
      title: "Sony",
      devices: [
        {
          name: "Sony Xperia Series",
          versions: [
            "Sony Xperia 1 V (2023)",
            "Sony Xperia 1 IV (2022)",
            "Sony Xperia 5 IV (2022)",
            "Sony Xperia 10 IV (2022)",
          ],
        },
        {
          name: "Sony Xperia 1 III Series (2021)",
          versions: ["Sony Xperia 1 III", "Sony Xperia 5 III"],
        },
        {
          name: "Sony Xperia 10 Series",
          versions: ["Sony Xperia 10 III (2021)"],
        },
      ],
      note: "eSIM functionality can vary by model and region. Please contact your local carrier for confirmation.",
    },
    {
      title: "Sharp",
      devices: [
        {
          name: "iPhone",
          versions: [
            "Vivo X90 Pro (2023)",
            "Vivo X80 Pro (2022)",
            "Vivo X70 Pro (2021)",
          ],
        },
        {
          name: "iPhone",
          versions: ["Vivo V25 Pro (2022)", "Vivo V21 5G (2021)"],
        },
        {
          name: "iPhone",
          versions: ["iQOO 11 (2023)", "iQOO 9 Pro (2022)", "iQOO 8 (2021)"],
        },
      ],
      note: "eSIM functionality can vary by model and region. Please contact your local carrier for confirmation.",
    },
  ],
  topupPlans: [
    {
      planCode: "plan_1",
      dataSize: 3,
      packPrice: 10,
      validity: 30,
      desc: "GB",
    },
    {
      planCode: "plan_2",
      dataSize: 10,
      price: 20,
      validity: 30,
      desc: "GB",
    },
  ],
  packDates: [1, 3, 5, 7, 10, 15, 20, 30],
  cart: {
    color: {},
    promoCode: null,
    memberId: null,
    productCountry: null,
    productCountrySecondary: null,
    package: {},
    topup: {},
    device: {},
    cartType: "sim",
    quantity: 1,
    startDate: null,
    endDate: null,
    startDateSecondary: null,
    endDateSecondary: null,
    shipping: {},
    numberOfDays: 1,
    shippingAddress: {},
    pickupCountry: null,
    pickupLocation: {},
    paymentCard: {},
  },
  pickupLocations: [
    {
      name: "Albert Village Court Hotel",
      location: {
        city: "Singapore",
        address: {
          street: "180 Albert St",
          postal_code: "189971",
        },
      },
      code: "SG-ALBERT-VILLAGE",
    },
    {
      name: "Marina Bay Grand",
      location: {
        city: "Singapore",
        address: {
          street: "10 Bayfront Ave",
          postal_code: "018956",
        },
      },
      code: "SG-MARINA-BAY",
    },
    {
      name: "The Orchard Palace",
      location: {
        city: "Singapore",
        address: {
          street: "442 Orchard Rd",
          postal_code: "238879",
        },
      },
      code: "SG-ORCHARD-PALACE",
    },
    {
      name: "Riverside Elegance Hotel",
      location: {
        city: "Singapore",
        address: {
          street: "1 Fullerton Rd",
          postal_code: "049213",
        },
      },
      code: "SG-RIVERSIDE-ELEGANCE",
    },
    {
      name: "Sentosa Seaside Resort",
      location: {
        city: "Singapore",
        address: {
          street: "101 Siloso Rd",
          postal_code: "098970",
        },
      },
      code: "SG-SENTOSA-SEASIDE",
    },
    {
      name: "Clarke Quay Luxury Suites",
      location: {
        city: "Singapore",
        address: {
          street: "3 River Valley Rd",
          postal_code: "179024",
        },
      },
      code: "SG-CLARKE-QUAY",
    },
  ],
};

const simSlice = createSlice({
  name: "simSlice",
  initialState,
  reducers: {
    setSimCartData: (state, action) => {
      state.cart = { ...state.cart, ...action?.payload };
    },
    handleNextSimCart: (state) => {
      localStorage.setItem("sim_cart", JSON.stringify(state.cart));
    },
  },
});

export const { setSimCartData, handleNextSimCart } = simSlice.actions;
export default simSlice.reducer;
