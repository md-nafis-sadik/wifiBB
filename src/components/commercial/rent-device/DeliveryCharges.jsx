import SectionHeader from "@/components/shared/others/SectionHeader";
import { motion } from "framer-motion";

const deliveryOptions = [
  { title: "Local", note: "", days: "3-4 Business day", price: "Free" },
  {
    title: "Express",
    note: "(Order by 10am)",
    days: "3-4 Business day",
    price: "$7",
  },
  {
    title: "Super Express",
    note: "(Order by 10am)",
    days: "3-4 Business day",
    price: "$20",
  },
  {
    title: "Standard International",
    note: "",
    days: "3-4 Business day",
    price: "$25",
  },
];

export default function DeliveryCharges() {
  return (
    <section className="px-4 pb-28 pt-20 lg:px-0">
      <SectionHeader
        heading="Delivery Charges"
        subHeading="Everything You Need to Know About Delivery Fees, Shipping Times, and Handling Costs"
        containerClassName={"gap-4 md:gap-[18px] my-12"}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {deliveryOptions.map((option, idx) => (
          <motion.div
            key={option.title}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.1 * idx }}
            viewport={{ once: true }}
            className="border border-gray-200 rounded-2xl p-4 bg-white shadow-sm"
          >
            <p className="font-semibold text-base md:text-lg text-black">
              {option.title}{" "}
              {option.note && (
                <span className="text-xs md:text-sm text-gray-400 font-normal">
                  {option.note}
                </span>
              )}
            </p>
            <p className="text-sm md:text-base text-gray-500 mt-1">
              {option.days}
            </p>
            <p className="text-sky-500 font-bold text-2xl md:text-4xl mt-8">
              {option.price}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
