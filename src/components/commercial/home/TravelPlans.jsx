import React, { useState } from "react";

const plans = [
  {
    country: "Japan",
    image: "/images/japan.jpg",
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
    country: "Korea",
    image: "/images/korea.jpg",
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
    country: "China",
    image: "/images/china.jpg",
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
    country: "Taiwan",
    image: "/images/taiwan.jpg",
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
    country: "Thailand",
    image: "/images/thailand.jpg",
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
    country: "Australia",
    image: "/images/australia.jpg",
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
    country: "Singapore",
    image: "/images/singapore.jpg",
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
    country: "Malaysia",
    image: "/images/malaysia.jpg",
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
    country: "Vietnam",
    image: "/images/vietnam.jpg",
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
    <div
      onClick={onSelect}
      className={`cursor-pointer rounded-xl overflow-hidden border-2 shadow-md flex flex-col justify-between transition-transform hover:scale-105 ${
        selected
          ? "border-main-600 bg-main-600"
          : "border-zinc-700 bg-zinc-900"
      }`}
    >
      <img src={plan.image} alt={plan.country} className="w-full h-40 object-cover" />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div className=" mb-6">
          <h3 className={`text-2xl mb-6 font-bold ${selected ? "text-black" : "text-white"}`}>{
            plan.country
          } 5G 20GB</h3>
          <ul className={`text-sm md:text-base mt-2 space-y-1 list-disc pl-5 ${selected ? "text-black" : "text-gray-300"}`}>
            {plan.details.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
        <div className={`h-[1px]  my-6 ${selected ? "bg-[#E0CE42]" : "bg-neutral-800"}`} ></div>
        <div className="flex items-center justify-between">
          <div className="text-lg">
            <span className="line-through mr-1 text-gray-400">HKD{plan.original}</span>
            <span className={`font-semibold ${selected ? "text-black" : "text-white"}`}>HKD{plan.price}</span>
            <span className="text-gray-400">/Day</span>
          </div>
          <button
            className={`rounded-full text-sm px-6 py-3 font-semibold transition-colors duration-200 ${
              selected
                ? "bg-black text-main-600 hover:bg-zinc-800"
                : "bg-black text-main-600 border border-main-600 hover:bg-main-600"
            }`}
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

const TravelPlans = () => {
  const [visible, setVisible] = useState(6);
  const [selectedPlan, setSelectedPlan] = useState(0);

  const loadMore = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    <div className="min-h-screen bg-black py-10 px-4 sm:px-8">
      <div>Top</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
