"use client";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import useEmblaCarouselDotButtons from "@/hooks/useEmblaCarouselDotButtons";
import { cn } from "@/lib/utils";
import { setHeroIndex } from "@/store/module/shared/sharedSlice";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useDispatch } from "react-redux";

import HeroConnected from "./HeroConnected";
import HeroDiscover from "./HeroDiscover";
import HeroTravel from "./HeroTravel";
import { DatePicker } from "@heroui/date-picker";
import { images, SearchIconv2 } from "@/services";
import { Search } from "lucide-react";
import { CalendarPicker } from "./Calendar";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

function Hero() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    if (Object.keys(errors).length > 0) return;
    console.log("Form Submitted:", data);
  };
  const currentLanguage = Cookies.get("i18next");
    const [lang, setLang] = useState(currentLanguage);
    const { t } = useTranslation();

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      toast.error("Please fill out the required fields.", {
        position: "top-right",
        duration: 3000,
        style: {
          background: "#dc2626",
          color: "#fff",
          fontWeight: "bold",
          borderRadius: "8px",
        },
      });
    }
  }, [errors]);

  return (
    <section className="w-full relative bg-gradient-to-b from-secondary-525 to-secondary-600">
      <Toaster /> {/* ✅ Toast container */}

      <div className=" flex flex-col items-center justify-center pt-20">
        <div className="text-white text-3xl sm:text-5xl md:text-6xl font-bold text-center relative mb-20">
          <div className="w-[90%] md:w-full max-w-3xl mx-auto">{t('Where Are You Travelling Today?')}</div>
          <button className="bg-main-650 text-black font-extrabold py-1 px-8 rounded-full mt-2 mb-6 absolute top-14 md:top-10 text-xs md:text-lg lg:text-xl border-4  border-secondary-525 sm:right-16 md:right-32">
            <div>GRAB IT</div>
            <div className="md:mt-[-7px]">NOW!</div>
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-3xl shadow-lg w-[95%] max-w-2xl lg:max-w-3xl p-5"
        >
          <div>
            <div className="block md:flex items-center justify-between gap-2">
              <div className="w-full md:w-[50%] relative">
                <div>
                  <input
                    type="text"
                    placeholder="Search Country"
                    {...register("country", { required: "Country is required" })}
                    className={cn(
                      "w-full pl-12 py-3 pr-3 bg-neutral-50 border-[1px] border-neutral-300 rounded-xl focus:ring-0 focus:border-black-500 focus:outline-none placeholder:text-sm",
                      errors.country && "border-red-500"
                    )}
                  />
                  <SearchIconv2 className="absolute left-5 top-4 z-20" />
                </div>
              </div>
              <div className=" mt-4 md:mt-0"></div>
              <div className="w-full md:w-[50%] relative">
                <input
                  type="text"
                  placeholder="Promo Code (Optional)"
                  {...register("promo")}
                  className="w-full p-3 bg-neutral-50 border-[1px] border-neutral-300 rounded-xl focus:ring-0 focus:border-black-500 focus:outline-none placeholder:text-sm"
                />
              </div>
            </div>

            <div className="block md:flex items-center justify-between gap-2 mt-4">
              <Controller
                name="startDate"
                control={control}
                rules={{ required: "Start date is required" }}
                render={({ field }) => (
                  <CalendarPicker
                    value={field.value}
                    onChange={field.onChange}
                    className={cn(errors.startDate && "border border-red-500 rounded-xl")}
                  />
                )}
              />

            <div className=" mt-4 md:mt-0"></div>
              <Controller
                name="endDate"
                control={control}
                rules={{ required: "End date is required" }}
                render={({ field }) => (
                  <CalendarPicker
                    value={field.value}
                    onChange={field.onChange}
                    className={cn(errors.endDate && "border border-red-500 rounded-xl")}
                  />
                )}
              />

              <button
                type="submit"
                className="w-full md:w-[20%] bg-yellow-300 hover:bg-yellow-500  text-black font-bold py-3 px-4 rounded-full text-sm lg:text-sm mt-4 md:mt-0"
              >
                Search Plan
              </button>
            </div>
          </div>
        </form>

        <img src={images.heroImage} className="min-h-[260px] object-cover md:object-contain" />
      </div>
    </section>
  );
}

export default Hero;
