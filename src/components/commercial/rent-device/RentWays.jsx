"use client";

import { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import SplitText from "../home/SplitText"; // assuming you have this
import { EasyrateIcon, EfficientIcon, PlaneIcon } from "@/services";

export default function RentWays() {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      inView(card, () => {
        animate(
          card,
          { opacity: [0, 1], y: [30, 0] },
          { delay: i * 0.2, duration: 0.6, easing: "ease-out" }
        );
      });
    });
  }, []);

  const features = [
    {
      icon: <PlaneIcon className="w-6 md:w-12" />,
      title: "Effective",
      desc: "Pick up your WifiBB at Hong Kong airport and connect instantly on arrival.",
    },
    {
      icon: <EasyrateIcon className="w-6 md:w-12" />,
      title: "Easyrate",
      desc: "With WifiBB, skip roaming fees—just HKD35/day for unlimited access!",
    },
    {
      icon: <EfficientIcon className="w-6 md:w-12" />,
      title: "Efficient",
      desc: "Enjoy a flat daily rate and get one day FREE on your return day!",
    },
  ];

  return (
    <div className=" w-full bg-secondary-50 py-10 md:py-32 xl:py-40 text-center">


      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 containerX mx-auto px-10">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="flex flex-col items-center opacity-0"
          >
            <div className="text-4xl mb-6 rounded-full p-3 md:p-6 border">
              {feature.icon}
            </div>
            <h3 className="font-bold text-lg text-black">{feature.title}</h3>
            <p className="text-gray-600 mt-2 text-sm max-w-xs">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
