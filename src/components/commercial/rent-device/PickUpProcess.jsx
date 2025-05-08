import SectionHeader from "@/components/shared/others/SectionHeader";
import { Button } from "@/components/ui/button";
import { PlayButtonIcon } from "@/services";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function PickUpProcess() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 space-y-8 md:px-12 lg:px-24 font-proxima">
      {/* Video Section */}
      <SectionHeader
        heading="Rent WiFiBB Pocket WiFi Device In Three Simple Steps"
        subHeading="Don’t let slow internet tie you down! Switch to our portable solutions to experience connectivity without boundaries."
        containerClassName={"gap-4 md:gap-[18px] my-12"}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-7xl rounded-2xl overflow-hidden shadow-lg"
      >
        <video
          ref={videoRef}
          className="w-full h-auto object-cover"
          poster="/poster-image.jpg" // Optional: poster image before play
          controls={playing}
          onClick={handlePlay}
        >
          <source src="/videos/how-to-rent.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {!playing && (
          <div
            className="absolute inset-0 text-white bg-secondary-500 flex flex-col items-center justify-center text-center cursor-pointer"
            onClick={handlePlay}
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-6xl">
              TUTORIAL:
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-bold mt-4">
              HOW TO RENT
            </p>
            <div className="bg-black opacity-50 absolute w-full h-full"></div>
            <PlayButtonIcon className="absolute " />
          </div>
        )}
      </motion.div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-7xl">
        {/* Step 1 */}
        <div className="rounded-xl border border-neutral-300 bg-white shadow-sm p-4 flex flex-col justify-between">
          <div>
            <p className="text-base md:text-lg font-semibold text-secondary-500 mb-3">
              Step-1
            </p>
            <h3 className="font-bold text-lg md:text-2xl mb-4">
              Get WiFiBB App
            </h3>
            <p className="text-sm md:text-base text-black-600 mb-4">
              Download WiFiBB App (first timer only)
            </p>
          </div>
          <button className="bg-yellow-300 text-black font-semibold rounded-full px-8 py-3 text-sm">
            Download WiFiBB App <span className="ml-2">📥</span>
          </button>
        </div>

        {/* Step 2 */}
        <div className="rounded-xl border border-neutral-300 bg-white shadow-sm p-4">
          <p className="text-base md:text-lg font-semibold text-secondary-500 mb-3">
            Step-2
          </p>
          <h3 className="font-bold text-lg md:text-2xl mb-4">
            Reserve a WiFiBB Device
          </h3>
          <p className="text-sm md:text-base text-black-600 mb-4">
            Stay connected on your travels with WiFiBB's top-tier data plans.
            Choose from 100 options and get started by tapping 'PocketWiFi,
            SIM/eSIM.
          </p>
        </div>

        {/* Step 3 */}
        <div className="rounded-xl border border-neutral-300 bg-white shadow-sm p-4">
          <p className="text-base md:text-lg font-semibold text-secondary-500 mb-3">
            Step-3
          </p>
          <h3 className="font-bold text-lg md:text-2xl mb-4">
            Delivery Options
          </h3>
          <p className="text-sm md:text-base text-black-600 mb-4">
            WiFiBB offers flexible delivery options for your convenience— choose
            doorstep delivery or self-pickup. Enjoy seamless connectivity on
            your travels with WiFiBB.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Link to="/pick-drop-location">
          <Button variant="secondary" size="sm" className="w-44">
            Pickup Locations
          </Button>
        </Link>
        <Link to="/contact">
          <Button variant="default" size="sm" className="w-44">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
}
