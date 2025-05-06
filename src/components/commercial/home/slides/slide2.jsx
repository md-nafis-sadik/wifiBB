import { images } from "@/services";
import * as motion from "motion/react-client";
import SplitText from "../SplitText";

export default function Slide2() {


    return (
        <section className="w-full h-full relative bg-gradient-to-b from-secondary-525 to-secondary-600">
        <div className="w-full h-full" style={{ backgroundImage: `url(${images.sunMask})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        
              <div className="flex flex-col h-full items-center justify-between pt-20  max-w-7xl mx-auto">
                <div className="text-white text-3xl sm:text-5xl md:text-6xl font-bold text-center relative mb-6">
                <SplitText text="Japan’s WiFi Flash Sale!" className="w-[95%] lg:w-full max-w-2xl mx-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl" />
                  <motion.button
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                    className="bg-main-650 text-black font-extrabold py-1 px-8 rounded-full mt-2 mb-6 absolute  text-xs md:text-sm lg:text-xl border-4 border-secondary-525 right-20 sm:right-28 md:right-40 lg:right-32 top-16 sm:top-6 md:top-8 lg:top-10"
                  >
                    <div>GRAB IT</div>
                    <div className="md:mt-[-7px]">NOW!</div>
                  </motion.button>
                  <div className="text-white text-base lg:text-lg font-normal mt-12 sm:mt-4 px-4">Enter the coupon code to save <span className="font-bold">HKD.</span></div>
                </div>
        
        
                <img src={images.heroImage3} className="min-h-[260px] object-cover md:object-contain" />
              </div>
              </div>
              </section>
    );
}
