import SectionHeader from "@/components/shared/others/SectionHeader";
import { BuildingIcon, EnvelopIcon, images, PhonebIcon, TimeBoxIcon } from "@/services";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="containerX mx-auto px-4 py-16 text-center ">
      <SectionHeader
        heading={"Contact Us"}
        subHeading={"Have questions or need support? We're here to help!"}
        containerClassName={"gap-4 md:gap-[18px] mb-12"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
        {/* Contact Info */}
        <div className="space-y-10">
          <div className="flex items-start gap-4 border-b border-neutral-200 mt-4 pb-5">
            <div className="p-4 rounded-full border border-neutral-200">
              <BuildingIcon />
            </div>
            <div>
              <h4 className="text-sm text-gray-500 mb-1.5">Address</h4>
              <p className="font-semibold">
                Counter A07, Arrival Hall A, Level 5, Terminal 1, <br />
                Hong Kong International Airport
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-b border-neutral-200 pb-5">
          <div className="p-4 rounded-full border border-neutral-200">
            <PhonebIcon />
            </div>
            <div>
              <h4 className="text-sm text-gray-500">Contact</h4>
              <p className="font-semibold">+852 3184 0668</p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-b border-neutral-200 pb-5">
          <div className="p-4 rounded-full border border-neutral-200">
            <TimeBoxIcon />
            </div>
            <div>
              <h4 className="text-sm text-gray-500">Operation Hour</h4>
              <p className="font-semibold">24 HRS</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
          <div className="p-4 rounded-full border border-neutral-200">
            <EnvelopIcon />
            </div>
            <div>
              <h4 className="text-sm text-gray-500">Email Address</h4>
              <p className="font-semibold">hello@wifibb.com</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <motion.div
          className="bg-blue-50 rounded-lg p-6 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={images.contactMap} // Replace with actual map image
            alt="Terminal 1 Map"
            className="max-h-[380px] rounded"
          />
          <a
            href="/map.pdf" // Replace with actual PDF file path
            className="mt-6 inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-sm rounded-full px-6 py-3 w-full"
            download
          >
            <Download className="mr-2 h-4 w-4" />
            Download map <span className="font-bold ml-1">As PDF</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
