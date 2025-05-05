"use client";

import { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import SplitText from "./SplitText";
import { BatteryChargeIcon, ConnectIcon, images, MeterIcon, PuzzleIcon  } from "@/services";

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
      icon: <MeterIcon className="w-8 md:w-12"/>,
      text: "3G/4G speed, up to 40Mbps for download and 15Mbps for upload.",
    },
    {
      icon: <ConnectIcon className="w-8 md:w-12"/>,
      text: "Connect up to 5 devices simultaneously.",
    },
    {
      icon: <PuzzleIcon className="w-8 md:w-12"/>,
      text: "Compatible with all Wi-Fi-enabled devices.",
    },
    {
      icon: <BatteryChargeIcon className="w-8 md:w-12"/>,
      text: "4–6 hours of battery life, plus option to plug in your own USB battery pack.",
    },
  ];

  return (
    <div className="bg-black text-white py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Text Section */}
        <div className="space-y-6 max-w-lg">

            <SplitText text="What is WifiBB?" className="text-center lg:text-left text-4xl md:text-5xl lg:text-6xl font-semibold" />
          
          <p className="text-white text-base md:text-lg lg:text-xl font-extralight max-w-xl text-center lg:text-left">
            <strong className="font-semibold">Wifibb is a portable Wi-Fi device that provides reliable internet in over 90 countries</strong>, making it perfect for both business and leisure travelers.
          </p>
          <p className="font-extralight text-white max-w-xl text-base lg:text-xl md:text-lg text-center lg:text-left">
            It also offers both <strong className="font-semibold italic">SIM</strong> and <strong className="font-semibold italic">eSIM</strong> options, allowing you to easily activate data plans without the need for a physical SIM card. Wifibb makes it easy to stay connected wherever you go.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="bg-main-600 rounded-xl px-6 pt-6 w-[523px] flex justify-center">
            <img
              src={images.rentalDevice}
              alt="WifiBB Device"
              className="w-64 h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 md:mt-16">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-neutral-900 text-white rounded-lg p-5 opacity-0"
          >
            <div className="text-3xl">{feature.icon}</div>
            <p className="text-sm md:text-base mt-6 font-extralight">{feature.text}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
