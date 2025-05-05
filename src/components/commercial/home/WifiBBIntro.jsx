"use client";

import { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import SplitText from "./SplitText";

export default function WifiBBIntro() {
  const cardRefs = useRef([]);

  useEffect(() => {
    // Animate feature cards one by one
    cardRefs.current.forEach((card, i) => {
      inView(card, () => {
        animate(
          card,
          { opacity: [0, 1], y: [20, 0] },
          { delay: i * 0.3, duration: 0.6, easing: "ease-out" }
        );
      });
    });
  }, []);

  const features = [
    {
      icon: "📶",
      text: "3G/4G speed, up to 40Mbps for download and 15Mbps for upload.",
    },
    {
      icon: "🔗",
      text: "Connect up to 5 devices simultaneously.",
    },
    {
      icon: "📡",
      text: "Compatible with all Wi-Fi-enabled devices.",
    },
    {
      icon: "🔋",
      text: "4–6 hours of battery life, plus option to plug in your own USB battery pack.",
    },
  ];

  return (
    <div className="bg-black text-white py-12 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Text Section */}
        <div className="flex-1 space-y-6">
          <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug">
            <SplitText text="What is WifiBB?" className="inline-block" />
          </div>
          <p className="text-white text-base md:text-lg font-semibold max-w-xl">
            <strong>Wifibb is a portable Wi-Fi device that provides reliable internet in over 90 countries</strong>, making it perfect for both business and leisure travelers.
          </p>
          <p className="text-gray-300 max-w-xl text-sm md:text-base">
            It also offers both <strong>SIM</strong> and <strong>eSIM</strong> options, allowing you to easily activate data plans without the need for a physical SIM card. Wifibb makes it easy to stay connected wherever you go.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <div className="bg-yellow-400 rounded-xl p-6">
            <img
              src="/device.png"
              alt="WifiBB Device"
              className="w-64 h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-neutral-900 text-white rounded-lg p-5 flex items-start gap-3 opacity-0"
          >
            <div className="text-3xl">{feature.icon}</div>
            <p className="text-sm md:text-base">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
