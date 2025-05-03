import {
  Communications2Icon,
  ConnectionsIcon,
  CustomerServiceIcon,
  EventIcon,
  GlobeIcon,
  images,
  InternetAccessIcon,
  SettingsCustomnIcon,
  WifiSecondaryIcon,
} from "@/services";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  header: {
    title: "About Us",
    description:
      "Yoowifi is a Singapore-based company that provides pocket wifi rental services for travelers. We offer a wide range of pocket wifi devices with unlimited data plans to keep you connected wherever you go.",
  },
  whoWeAre: {
    title: "Who We Are",
    description:
      "UR Communications Pte Ltd, operating under the renowned brand name Yoowifi, introduces an advanced solution for effortless global connectivity via its intuitive mobile application. With a commitment to enriching travel journeys and fostering global communication, Yoowifi App delivers unmatched convenience, dependability, and cost-effectiveness. \n\nOur aspiration is to establish a world where telecom experts and travelers can effortlessly stay linked across countries, free from concerns about excessive data roaming fees. Our mission revolves around building a company that offers accessible, trustworthy, and boundary-free mobile services, empowering individuals to stay connected with their dear ones while exploring diverse corners of the globe.",
    image: images.whoWeAre1,
  },
  companyMission: {
    title: "Our Company Mission",
    mission: {
      title: "Stay Connected Anytime, Anywhere",
      year: "2001",
      description:
        "Our mission is to deliver accessible, reliable, and boundary-free data services. We strive to empower individuals to stay seamlessly connected with their loved ones while exploring new cultures, experiencing adventures, and navigating diverse corners of the globe, ensuring a seamless and enriching connectivity experience.",
      image: images.companyMission1,
    },
  },
  awardsAndAchievements: {
    details: [
      {
        year: "2024",
        title: "Most Innovative Travel Wi-Fi Solutions Company 2024",
        description: "Awarded by AI Business Excellence Awards",
      },
      {
        year: "2024",
        title: "Singapore's Fastest Growing Companies 2024",
        description: "Awarded by The Straits Times & Statista",
      },
    ],
    images: [
      images.awards1,
      images.companyMission1,
      // images.whoWeAre1,
    ],
  },
  features: [
    {
      icon: () => (
        <WifiSecondaryIcon className="h-10 w-10 md:h-[60px] md:w-[60px]" />
      ),
      title: "Reliable WiFi, anywhere you go",
    },
    {
      icon: () => <GlobeIcon className="h-10 w-10 md:h-[60px] md:w-[60px]" />,
      title: "Covers more than 160 Countries",
    },
    {
      icon: () => (
        <CustomerServiceIcon className="h-10 w-10 md:h-[60px] md:w-[60px]" />
      ),
      title: "24/7 Customer Support",
    },
    {
      icon: () => (
        <ConnectionsIcon className="h-10 w-10 md:h-[60px] md:w-[60px]" />
      ),
      title: "Local presence in over 10 countries",
    },
  ],
  whatWeDo: [
    {
      icon: () => (
        <InternetAccessIcon className="h-10 w-10 md:h-[60px] md:w-[60px]" />
      ),
      title: "Management Portal",
      description:
        "Our management portal provides a user-friendly platform for seamless control and monitoring, empowering you to manage services efficiently.",
    },
    {
      icon: () => (
        <Communications2Icon className="h-10 w-10 md:h-[60px] md:w-[60px]" />
      ),
      title: "Mobile general solutions",
      description:
        "Our mobile solutions offer reliable, flexible, and cutting-edge services to keep you connected anytime, anywhere, tailored for both personal and business use.",
    },
    {
      icon: () => (
        <SettingsCustomnIcon className="h-10 w-10 md:h-[60px] md:w-[60px]" />
      ),
      title: "Custom solutions",
      description:
        "Discover our custom solutions tailored to meet your unique needs. We work closely with you to design innovative, flexible services that drive success and enhance your business outcomes.",
    },
    {
      icon: () => <EventIcon className="h-10 w-10 md:h-[60px] md:w-[60px]" />,
      title: "Events & Roadshows",
      description:
        "Join us at our exciting events and roadshows, where we present innovative solutions, engage with customers, and shape the future of seamless communication.",
    },
  ],
  personal: [
    {
      _id: 1,
      title: "Global Coverage",
      description:
        "Stay connected across 160 countries, no matter where your journey takes you with Yoowifi's travel wifi services.",
      image: images.person1,
    },
    {
      _id: 2,
      title: "Flexible Data Plans",
      description:
        "Choose from a variety of flexible data options, allowing you to select the perfect plan based on your usage needs.",
      image: images.person2,
    },
    {
      _id: 3,
      title: "Hassle-Free Delivery",
      description:
        "Enjoy hassle-free delivery with fast, reliable service that gets your order to you with ease and convenience.",
      image: images.person3,
    },
  ],
  business: [
    {
      _id: 1,
      title: "Zero Touch On Demand",
      description:
        "Enjoy seamless, effortless zero-touch, on-demand service tailored to your needs.",
      image: images.tour,
    },
    {
      _id: 2,
      title: "Flexible Data Plans",
      description:
        "Flexible data plans for businesses, designed to fit your company's unique needs and usage.",
      image: images.dataPlan,
    },
    {
      _id: 3,
      title: "Multi-homing network",
      description:
        "Ensure uninterrupted connectivity with our multi-homing network, offering multiple connections for enhanced reliability and performance.",
      image: images.network,
    },
  ],
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
});

export default aboutSlice.reducer;
