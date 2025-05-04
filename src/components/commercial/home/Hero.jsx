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
    <section className="w-full relative bg-gradient-to-b from-secondary-525 to-secondary-600">






    <div className=" flex flex-col items-center justify-center pt-20">
      <div className="text-white text-3xl md:text-6xl font-bold text-center relative mb-20">
        <div className="">Where Are You Travelling <br/>Today?</div>
        <button className="bg-main-650 text-black font-extrabold py-1 px-8 rounded-full mt-2 mb-6 absolute top-10 text-xl border-4  border-secondary-525 right-32">
        <div>GRAB IT</div><div className="mt-[-7px]">NOW!</div>
      </button>
      </div>

      

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-3xl shadow-lg w-full max-w-2xl lg:max-w-3xl p-5"
      >

        <div>
          <div className="block md:flex items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Search Country"
          {...register("country", { required: "Country is required" })}
          className="w-full md:w-[50%] p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="Promo Code (Optional)"
          {...register("promo")}
          className="w-full md:w-[50%] p-3 border border-gray-300 rounded-lg"
        />
        </div>
        <div  className="block md:flex items-center justify-between gap-4 mt-4">
        <input
          type="date"
          {...register("startDate", { required: "Start date is required" })}
          className="w-full md:w-[40%] p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="date"
          {...register("endDate", { required: "End date is required" })}
          className="w-full md:w-[40%] p-3 border border-gray-300 rounded-lg"
        />

        <button
          type="submit"
          className="w-full md:w-[20%] bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-4 rounded-lg text-sm lg:text-base"
        >
          Search Plan
        </button>
        </div>
        {/* Validation Messages */}
        <div className="col-span-5 text-red-500 text-sm mt-1 space-y-1">
          {errors.country && <p>{errors.country.message}</p>}
          {errors.startDate && <p>{errors.startDate.message}</p>}
          {errors.endDate && <p>{errors.endDate.message}</p>}
        </div>

        </div>
      </form>

      <img src={images.heroImage} />
    </div>


    </section>
  );
}

export default Hero;
