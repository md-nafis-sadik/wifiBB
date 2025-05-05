"use client";

import { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import SplitText from "./SplitText"; // assuming you have this

export default function WhyChooseUs() {
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
      icon: "✈️",
      title: "Effective",
      desc: "Pick up your WifiBB at Hong Kong airport and connect instantly on arrival.",
    },
    {
      icon: "💲",
      title: "Easyrate",
      desc: "With WifiBB, skip roaming fees—just HKD35/day for unlimited access!",
    },
    {
      icon: "🎯",
      title: "Efficient",
      desc: "Enjoy a flat daily rate and get one day FREE on your return day!",
    },
  ];

  return (
    <div className="bg-white py-20 px-6 text-center">
      <div className="text-3xl md:text-4xl font-bold mb-4 text-black">
        <SplitText text="Why Choose Us" />
      </div>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-sm md:text-base">
        Experience unmatched quality, innovation, and customer satisfaction at every step.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="flex flex-col items-center opacity-0"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="font-bold text-lg text-black">{feature.title}</h3>
            <p className="text-gray-600 mt-2 text-sm max-w-xs">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
