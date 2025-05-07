"use client";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";
import { images, SearchIconv2 } from "@/services";
import { CalendarPicker } from "./Calendar";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import SplitText from "./SplitText";

function Hero() {
  const { register, handleSubmit, formState: { errors }, control, getValues, watch } = useForm();
  
      const startDate = watch("startDate");
      const endDate = watch("endDate");
      const country = watch("country");
  
      const isFormValid =
          country &&
          startDate &&
          endDate &&
          new Date(startDate) < new Date(endDate) &&
          Object.keys(errors).length === 0;
  
      const onSubmit = (data) => {
          if (new Date(data.startDate) >= new Date(data.endDate)) {
              toast.error("Start date must be earlier than end date", {
                  position: "top-right",
                  autoClose: 3000,
                  theme: "colored",
              });
              return;
          }
  
          console.log("Form Submitted:", data);
      };
  
      const currentLanguage = Cookies.get("i18next");
      const [lang, setLang] = useState(currentLanguage);
      const { t } = useTranslation();
  
      useEffect(() => {
          if (Object.keys(errors).length > 0) {
              toast.error("Please fill out the required fields.", {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  theme: "colored",
              });
          }
      }, [errors]);
  

  return (
    <section className="relative w-full">
      <ToastContainer />
            <section className="w-full relative bg-gradient-to-b from-secondary-525 to-secondary-600">
                <div className="flex flex-col items-center justify-center pt-14 md:pt-20 max-w-7xl mx-auto">
                    <div className="text-white text-3xl sm:text-5xl md:text-6xl font-bold text-center relative mb-12">
                        <SplitText text="Where Are You Travelling Today?" className="w-[95%] lg:w-full max-w-3xl mx-auto text-[33px] md:text-5xl lg:text-6xl" />
                        <motion.button
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1 }}
                            className="bg-main-650 text-black font-extrabold py-1 px-8 rounded-full mt-2 mb-6 absolute  text-xs md:text-sm lg:text-xl border-4 border-secondary-525 right-28 sm:right-28 md:right-44 lg:right-36 top-[60px] sm:top-6 md:top-8 lg:top-10"
                        >
                            <div>GRAB IT</div>
                            <div className="md:mt-[-7px]">NOW!</div>
                        </motion.button>
                    </div>
                    <motion.form
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }} // run once, trigger when 30% visible
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                        onSubmit={handleSubmit(onSubmit)}
                        className="bg-white rounded-3xl shadow-lg w-[95%] max-w-2xl lg:max-w-3xl mt-2 p-4 md:p-5"
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
                                                "w-full pl-12 py-2 md:py-3 or-2 md:pr-3 bg-neutral-50 border-[1px] border-neutral-300 rounded-xl focus:ring-0 focus:border-black-500 focus:outline-none placeholder:text-sm",
                                                errors.country && "border-red-500"
                                            )}
                                        />
                                        <SearchIconv2 className="absolute left-5 top-3 lg:top-4 z-20" />
                                    </div>
                                </div>
                                <div className=" mt-4 md:mt-0"></div>
                                <div className="w-full md:w-[50%] relative">
                                    <input
                                        type="text"
                                        placeholder="Promo Code (Optional)"
                                        {...register("promo")}
                                        className="w-full p-2 md:p-3 bg-neutral-50 border-[1px] border-neutral-300 rounded-xl focus:ring-0 focus:border-black-500 focus:outline-none placeholder:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="block md:flex items-center justify-between gap-2 mt-4">
                                <div className="flex items-center gap-2 w-full md:w-[80%]">
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
                                </div>

                                <button
                                    type="submit"
                                    disabled={!isFormValid}
                                    className={cn(
                                        "w-full md:w-[20%] font-bold py-3 px-4 rounded-full text-sm lg:text-sm mt-4 md:mt-0 transition",
                                        isFormValid
                                            ? "bg-main-600 hover:bg-main-650 cursor-pointer text-black"
                                            : "bg-main-500 text-gray-500 cursor-not-allowed"
                                    )}
                                >
                                    Search Plan
                                </button>
                            </div>
                        </div>
                    </motion.form>

                    <img src={images.heroImage} className="min-h-[220px] object-cover md:object-contain" />
                </div>

            </section>
    </section>
  );
}

export default Hero;
