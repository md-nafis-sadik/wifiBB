import { images } from "@/services";
import React, { useState } from "react";
import * as motion from "motion/react-client";
import SplitText from "./SplitText";

const plans = [
  {
    country: "Japan 5G 20GB",
    image: images.country1Image,
    price: 46,
    original: 88,
    highlight: true,
    details: [
      "5G-20GB/Day",
      "5G network: 20GB data usage per day, over-limit speed of 384kbps",
      "Works for 13-15 hours when fully charged",
      "Comes with global conversion plug",
    ],
  },
  {
    country: "Korea 5G 20GB",
    image: images.country2Image,
    price: 49,
    original: 88,
    details: [
      "5G-20GB/Day",
      "5G network: 20GB data usage per day, over-limit speed of 384kbps",
      "Works for 13-15 hours when fully charged",
      "Comes with global conversion plug",
    ],
  },
  {
    country: "China 5G 20GB",
    image: images.country3Image,
    price: 78,
    original: 88,
    details: [
      "5G-20GB/Day",
      "5G network: 20GB data usage per day, over-limit speed of 384kbps",
      "Works for 13-15 hours when fully charged",
      "Comes with global conversion plug",
    ],
  },
  {
    country: "Taiwan 5G 20GB",
    image: images.country4Image,
    price: 49,
    original: 88,
    details: [
      "5G-20GB/Day",
      "5G network: 20GB data usage per day, over-limit speed of 384kbps",
      "Works for 13-15 hours when fully charged",
      "Comes with global conversion plug",
    ],
  },
  {
    country: "Thailand 5G 20GB",
    image: images.country5Image,
    price: 49,
    original: 88,
    details: [
      "5G-20GB/Day",
      "5G network: 20GB data usage per day, over-limit speed of 384kbps",
      "Works for 13-15 hours when fully charged",
      "Comes with global conversion plug",
    ],
  },
  {
    country: "Australia 5G 20GB",
    image: images.country6Image,
    price: 78,
    original: 110,
    details: [
      "5G-20GB/Day",
      "5G network: 20GB data usage per day, over-limit speed of 384kbps",
      "Works for 13-15 hours when fully charged",
      "Comes with global conversion plug",
    ],
  },
  {
    country: "Singapore 5G 20GB",
    image: images.country1Image,
    price: 65,
    original: 95,
    details: [
      "5G-20GB/Day",
      "5G high-speed network",
      "Supports hotspot tethering",
      "Compact and lightweight device",
    ],
  },
  {
    country: "Malaysia 5G 20GB",
    image: images.country2Image,
    price: 55,
    original: 85,
    details: [
      "5G-20GB/Day",
      "20GB per day high-speed cap",
      "Includes international plug",
      "Battery lasts 13 hours",
    ],
  },
  {
    country: "Vietnam 5G 20GB",
    image: images.country3Image,
    price: 52,
    original: 82,
    details: [
      "5G-20GB/Day",
      "Coverage in all major cities",
      "Easy plug-and-play setup",
      "Comes with travel pouch",
    ],
  },
];

const PlanCard = ({ plan, selected, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }} // run once, trigger when 30% visible
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      onClick={onSelect}
      className={`cursor-pointer rounded-xl overflow-hidden border-2 shadow-md flex flex-col justify-between transition-transform hover:scale-101 p-2 ${
        selected
          ? "border-main-600 bg-main-600"
          : "border-zinc-700 "
      }`}
    >

      <img src={plan.image} alt={plan.country} className="w-full max-h-72 md:max-h-80 object-cover rounded-lg"  />
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
        <div className=" mb-03 lg:mb-6">
          <div className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-03 lg:mb-6 font-bold ${selected ? "text-black" : "text-white"}`}>{
            plan.country
          }</div>
          <ul className={`text-xs sm:text-sm md:text-base mt-2 space-y-1 list-disc pl-5 ${selected ? "text-black" : "text-gray-300"}`}>
            {plan.details.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
        <div className={`h-[1px] my-3 lg:my-6 ${selected ? "bg-[#E0CE42]" : "bg-neutral-800"}`} ></div>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-between">
          <div className="text-sm sn:text-base lg:text-lg">
            <span className="line-through mr-1 text-gray-400">HKD{plan.original}</span>
            <span className={`font-semibold ${selected ? "text-black" : "text-white"}`}>HKD{plan.price}</span>
            <span className="text-gray-400">/Day</span>
          </div>
          <button
            className={`rounded-full text-xs sm:text-sm px-6 py-3 font-semibold transition-colors duration-200 mt-3 sm:mt-0 ${
              selected
                ? "bg-black text-main-600 hover:bg-zinc-800"
                : "bg-black text-main-600 border border-main-600 hover:bg-main-600 hover:text-black-900"
            }`}
          >
            Buy now
          </button>
        </div>
      </div>

    </motion.div>
  );
};


const TravelPlans = () => {
  const [visible, setVisible] = useState(6);
  const [selectedPlan, setSelectedPlan] = useState(0);

  const loadMore = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    <div className=" bg-black py-12 lg:py-28 px-4 sm:px-8 ">
      <div className="mb-8">
        <SplitText text="Top Destinations" className="text-3xl md:text-5xl font-bold text-white mb-4 px-4 text-center" />
        <div className="text-black-600 text-center text-sm lg:text-base">Discover the most sought-after locations for unforgettable experiences.</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.slice(0, visible).map((plan, idx) => (
          <PlanCard
            key={idx}
            plan={plan}
            selected={selectedPlan === idx}
            onSelect={() => setSelectedPlan(idx)}
          />
        ))}
      </div>
      {visible < plans.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMore}
            className="bg-main-600 text-black font-semibold py-2 px-6 rounded-full hover:bg-main-600 transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default TravelPlans;
