"use client";

import SplitText from "../../commercial/home/SplitText";
import { useEffect, useRef } from "react";
import { inView, animate } from "motion";
import { images } from "@/services";
import { Link } from "react-router-dom";

export default function DownloadApp() {
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      inView(imageRef.current, () => {
        animate(
          imageRef.current,
          { opacity: [0, 1], scale: [0.95, 1] },
          { duration: 0.6, easing: "ease-out" }
        );
      });
    }
  }, []);

  return (
    <section className="bg-main-600 mx-4 container2X xl:mx-auto pt-20 my-10 rounded-[40px]">
      <div className="max-w-full mx-auto text-center">
        <SplitText
          text="Download The WifiBB App"
          className="text-3xl md:text-5xl font-bold text-black mb-4 px-4"
        />

        <p className="text-black/70 mb-8 text-sm md:text-lg px-4">
          Advanced features for an effortless digital experience anytime,
          anywhere!
        </p>

        {/* Buttons */}
        <div className="lg:flex justify-center items-center relative">
          <div className="block w-max mx-auto sm:flex justify-center gap-4 flex-wrap lg:absolute top-0">
            <a href="#">
              <img
                src={images.googlePlay}
                alt="Google Play"
                className="h-12 w-auto mx-auto cursor-pointer"
              />
            </a>
            <a href="#">
              <img
                src={images.appStore}
                alt="App Store"
                className="h-12 w-auto mx-auto cursor-pointer mt-4 md:mt-0"
              />
            </a>
          </div>
          {/* Phone image area */}
          <div ref={imageRef} className="opacity-0 transition-all duration-700">
            <img
              src={images.productShowBackground}
              alt="App Preview"
              className="mx-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
