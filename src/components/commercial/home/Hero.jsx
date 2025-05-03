import useEmblaCarouselDotButtons from "@/hooks/useEmblaCarouselDotButtons";
import { cn } from "@/lib/utils";
import { setHeroIndex } from "@/store/module/shared/sharedSlice";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useDispatch } from "react-redux";
import HeroConnected from "./HeroConnected";
import HeroDiscover from "./HeroDiscover";
import HeroTravel from "./HeroTravel";
import React from "react";
import { useForm } from "react-hook-form";
import { images } from "@/services";

function Hero() {


  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    // Add your API call or navigation logic here
  };

  return (
    <section className="w-full relative bg-blue-400">






    <div className=" flex flex-col items-center justify-center pt-20">
      <h1 className="text-white text-3xl md:text-6xl font-bold text-center relative mb-20">
        Where Are You Travelling <br/>Today?
      </h1>

      <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full mt-2 mb-6 absolute top-32 ">
        GRAB IT NOW!
      </button>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-xl shadow-lg w-full max-w-4xl p-4 grid grid-cols-1 md:grid-cols-5 gap-3"
      >
        <input
          type="text"
          placeholder="Search Country"
          {...register("country", { required: "Country is required" })}
          className="col-span-2 p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="Promo Code (Optional)"
          {...register("promo")}
          className="col-span-1 p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="date"
          {...register("startDate", { required: "Start date is required" })}
          className="col-span-1 p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="date"
          {...register("endDate", { required: "End date is required" })}
          className="col-span-1 p-3 border border-gray-300 rounded-lg"
        />

        <button
          type="submit"
          className="col-span-1 md:col-span-5 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-4 rounded-lg"
        >
          Search Plan
        </button>

        {/* Validation Messages */}
        <div className="col-span-5 text-red-500 text-sm mt-1 space-y-1">
          {errors.country && <p>{errors.country.message}</p>}
          {errors.startDate && <p>{errors.startDate.message}</p>}
          {errors.endDate && <p>{errors.endDate.message}</p>}
        </div>
      </form>

      <img src={images.heroImage} />
    </div>


    </section>
  );
}

export default Hero;
