import SectionHeader from "@/components/shared/others/SectionHeader";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { images } from "@/services";
import { useState } from "react";



export default function Promo() {
  
  const discounts = [
    {
      logo: images.promoLogo1,
      title: "HSBC Staff Discount",
      description: "HSBC staff can enjoy 10% off discount.",
    },
    {
      logo: images.promoLogo2,
      title: "UnionPay Card Discount",
      description: "Plus: UnionPay card holder can enjoy 20% off discount",
    },
    {
      logo: images.promoLogo3,
      title: "HYATT Staff Discount",
      description: "HYATT staff can enjoy 10% off discount",
    },
    {
      logo: images.promoLogo4,
      title: "Air Busan Discount",
      description: "Air Busan passengers can enjoy 10% off discount",
    },
    {
      logo: images.promoLogo5,
      title: "KPMG Staff Discount",
      description: "KPMG employees can enjoy 10% off rent.",
    },
    {
      logo: images.promoLogo6,
      title: "Caltex Member Discount",
      description:
        "HK Caltex JoyFuel Card and StarCard members can enjoy 10% off discount",
    },
    {
      logo: images.promoLogo7,
      title: "UBS Staff Discount",
      description: "UBS staff can enjoy 10% off discount",
    },
    {
      logo: images.promoLogo8,
      title: "Blue Cross Discount",
      description: "HK Blue Cross voucher holders can enjoy rental discount",
    },
    {
      logo: images.promoLogo9,
      title: "HKIA Staff Discount",
      description: "HKIA staff can enjoy 10% off discount",
    },
    {
      logo: images.promoLogo1,
      title: "HSBC Staff Discount",
      description: "HSBC staff can enjoy 10% off discount.",
    },
    {
      logo: images.promoLogo2,
      title: "UnionPay Card Discount",
      description: "Plus: UnionPay card holder can enjoy 20% off discount",
    },
    {
      logo: images.promoLogo3,
      title: "HYATT Staff Discount",
      description: "HYATT staff can enjoy 10% off discount",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(9); // initial visible items

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const visibleDiscounts = discounts.slice(0, visibleCount);

  const cards = [
    {
      id: 1,
      title: "Japan/ Korea/ Taiwan",
      tripLength: "4 Day Trip",
      offers: [
        { label: "Last Day Free", calc: "$35 × (4-1)", total: "$105" },
        { label: "Last Day Free", calc: "$35 × (4-1)", total: "$105" },
        { label: "Last Day Free", calc: "$35 × (4-1)", total: "$105" },
      ],
      originalPrice: "HKD46",
      discountedPrice: "HKD46",
      unit: "/Day",
    },
    {
      id: 2,
      title: "Japan/ Korea/ Taiwan",
      tripLength: "4 Day Trip",
      offers: [
        { label: "Last Day Free", calc: "$35 × (4-1)", total: "$105" },
        { label: "Last Day Free", calc: "$35 × (4-1)", total: "$105" },
        { label: "Last Day Free", calc: "$35 × (4-1)", total: "$105" },
      ],
      originalPrice: "HKD46",
      discountedPrice: "HKD46",
      unit: "/Day",
    },
    {
      id: 3,
      title: "Japan/ Korea/ Taiwan",
      tripLength: "4 Day Trip",
      offers: [
        { label: "Last Day Free", calc: "$35 × (4-1)", total: "$105" },
        { label: "Last Day Free", calc: "$35 × (4-1)", total: "$105" },
        { label: "Last Day Free", calc: "$35 × (4-1)", total: "$105" },
      ],
      originalPrice: "HKD46",
      discountedPrice: "HKD46",
      unit: "/Day",
    },
  ];

  return (
    <div className="min-h-screen max-w-7xl mx-auto bg-white px-4 py-10 text-left">
      <SectionHeader
        heading={"Promotional Discount"}
        subHeading={
          "At WifiBB, you’re charged a flat rate per day — no matter how many days you rent the modem, and how many people and devices you share it with."
        }
        containerClassName={"gap-4 md:gap-[18px]"}
      />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, cardIndex) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className={`p-6 border-gray-200 ${
              cardIndex !== cards.length - 1 ? "md:border-r" : ""
            }`}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-700 mb-8">
              Promotional Discount Example {card.id}
            </div>
            <h2 className="font-semibold text-black-900 mb-2 text-2xl">
              {card.title}
            </h2>
            <p className="text-sm text-gray-500 mb-8">{card.tripLength}</p>

            {card.offers.map((offer, i) => (
              <div
                key={i}
                className={`flex justify-between py-3 text-sm ${
                  i !== 0 ? "border-t" : ""
                }`}
              >
                <div>
                  <div className="font-semibold text-black-900 text-base">
                    {offer.label}
                  </div>
                  <div className="text-gray-500 text-left">{offer.calc}</div>
                </div>
                <span className="text-gray-800">{offer.total}</span>
              </div>
            ))}

            <div className="mt-4 flex items-end justify-between">
              <span className="line-through text-gray-400 text-sm">
                {card.originalPrice}
              </span>
              <div className="text-secondary-400">
                <span className=" font-bold text-lg">
                  {card.discountedPrice}
                </span>
                <span className="text-sm text-gray-500">{card.unit}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-6 py-3 rounded-full bg-main-600 hover:bg-main-650 font-semibold text-sm"
        >
          Rent WifiBB Now
        </motion.button>
      </div>

      <section className="py-16 px-4 text-center">

        <SectionHeader
        heading={"All Current Promotional Discounts"}
        subHeading={
          "Explore the Latest Deals and Limited-Time Savings!"
        }
        containerClassName={"gap-4 md:gap-[18px] mb-10"}
      />
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {visibleDiscounts.map((item, index) => (
    <motion.div
      key={index}
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <img src={item.logo} alt={item.title} className="w-32 mb-4" />
      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
      <p className="text-gray-600 text-sm max-w-xs">
        {item.description}
      </p>
    </motion.div>
  ))}
</div>
{visibleCount < discounts.length && (
  <div className="mt-12">
    <Button
      onClick={handleLoadMore}
      className="mt-10 px-6 py-3 rounded-full bg-main-600 hover:bg-main-650 font-semibold text-sm text-black-900"
    >
      Load More
    </Button>
  </div>
)}
      </section>
    </div>
  );
}
