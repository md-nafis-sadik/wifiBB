import SectionHeader from "@/components/shared/others/SectionHeader";
import { Button } from "@/components/ui/button";
import { PlayButtonIcon } from "@/services";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function DropoffProcess() {
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
        heading="Simple Self-Return In less than a minute"
        subHeading="Introducing WifiBB’s convenient self-return process! With over 20 pickup and return locations, returning your device has never been easier. Our customer-centric approach empowers you to choose any of these accessible locations for a seamless return experience."
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
              HOW TO RETURN
            </p>
            <div className="bg-black opacity-50 absolute w-full h-full"></div>
            <PlayButtonIcon className="absolute " />
          </div>
        )}
      </motion.div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-7xl">
        {/* Step 1 */}
        <div className="rounded-xl border border-neutral-300 bg-white shadow-sm p-5">
          <p className="text-base md:text-lg font-semibold text-secondary-500 mb-3">
            Step-1
          </p>
          <h3 className="font-bold text-lg md:text-2xl mb-4">
            Login to WiFiBB App
          </h3>
          <p className="text-sm md:text-base text-black-600 mb-4">
            Begin by visiting any of our 20+ pickup and return locations – the
            choice is yours. Open the Yoowifi app and navigate to the home page
            section.
          </p>
        </div>

        {/* Step 2 */}
        <div className="rounded-xl border border-neutral-300 bg-white shadow-sm p-5">
          <p className="text-base md:text-lg font-semibold text-secondary-500 mb-3">
            Step-2
          </p>
          <h3 className="font-bold text-lg md:text-2xl mb-4">
            Begin the process of Return Device
          </h3>
          <p className="text-sm md:text-base text-black-600 mb-4">
            Here, simply tap on " Return Device" and scan the location code
            provided by the staff.
          </p>
        </div>

        {/* Step 3 */}
        <div className="rounded-xl border border-neutral-300 bg-white shadow-sm p-5">
          <p className="text-base md:text-lg font-semibold text-secondary-500 mb-3">
            Step-3
          </p>
          <h3 className="font-bold text-lg md:text-2xl mb-4">
            Scan device QR code
          </h3>
          <p className="text-sm md:text-base text-black-600 mb-4">
            Lastly, scan the device(s) QR code that's located at the back of the
            device. And that is all, no complex forms or intricate procedures.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Link to="/pick-drop-location">
          <Button variant="secondary" size="sm" className="w-44">
            Dropoff Locations
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
