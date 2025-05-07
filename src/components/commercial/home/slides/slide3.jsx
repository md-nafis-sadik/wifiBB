import { images } from "@/services";
import * as motion from "motion/react-client";
import SplitText from "../SplitText";

export default function Slide2() {


    return (
        <section className="w-full h-full relative bg-gradient-to-b from-secondary-525 to-secondary-600">
              <div className="flex flex-col h-full items-center justify-between pt-20  max-w-7xl mx-auto">
                <div className="text-white text-3xl sm:text-5xl md:text-6xl font-bold text-center relative mb-6">
                <SplitText text="Grab the latest offers for travel." className="w-[95%] lg:w-full max-w-3xl mx-auto text-3xl sm:text-5xl md:text-6xl lg:text-7xl" />
                  <motion.button
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                    className="bg-main-650 text-black font-extrabold py-1 px-8 rounded-full mt-2 mb-6 absolute  text-xs md:text-sm lg:text-xl border-4 border-secondary-525 right-24 sm:right-44 md:right-48 lg:right-24 top-[54px] sm:top-8 md:top-10 lg:top-12"
                  >
                    <div>GRAB IT</div>
                    <div className="md:mt-[-7px]">NOW!</div>
                  </motion.button>
                  <div className="text-white text-base lg:text-lg font-normal mt-12 sm:mt-4 px-4">Ultra fast <span className="font-bold">5G</span> network <span className="font-bold">20 GB/Day.</span></div>
                </div>
        
        
                <img src={images.heroImage4} className="min-h-[260px] object-cover md:object-contain" />
              </div>
        
              </section>
    );
}
