import { images } from "@/services";
import * as motion from "motion/react-client";
import SplitText from "../SplitText";

export default function Slide2() {


    return (
        <section className="w-full relative bg-main-600 h-full"  style={{ backgroundImage: `url(${images.buildingMask})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="flex flex-col  h-full  lg:flex-row items-center lg:items-start justify-between pt-20 px-4  max-w-7xl mx-auto">
                <div className="text-[#764111] text-3xl sm:text-5xl md:text-6xl font-extrabold text-center lg:text-left relative mb-6">
                <SplitText text="Stay Connected While Traveling" className="w-[95%]  lg:w-full max-w-3xl mx-auto text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#764111]" />
        
                  <div className="text-[#b1660c] text-lg lg:text-xl font-normal mt-4 sm:mt-8 px-4">Deal starts with just <span className="font-bold">HKD 28/day</span></div>
                </div>
        
        
                <div ><img src={images.heroImage2} className="min-h-[300px] h-28 lg:h-auto object-cover md:object-contain" /></div>
              </div>
        
              </section>
    );
}
