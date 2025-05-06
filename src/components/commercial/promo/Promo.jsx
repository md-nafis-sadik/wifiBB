import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Promo(){
    const cards = [1, 2, 3];

    const discounts = [
        {
          logo: '/logos/hsbc.png',
          title: 'HSBC Staff Discount',
          description: 'HSBC staff can enjoy 10% off discount.'
        },
        {
          logo: '/logos/unionpay.png',
          title: 'UnionPay Card Discount',
          description: 'Plus: UnionPay card holder can enjoy 20% off discount'
        },
        {
          logo: '/logos/hyatt.png',
          title: 'HYATT Staff Discount',
          description: 'HYATT staff can enjoy 10% off discount'
        },
        {
          logo: '/logos/airbusan.png',
          title: 'Air Busan Discount',
          description: 'Air Busan passengers can enjoy 10% off discount'
        },
        {
          logo: '/logos/kpmg.png',
          title: 'KPMG Staff Discount',
          description: 'KPMG employees can enjoy 10% off rent.'
        },
        {
          logo: '/logos/caltex.png',
          title: 'Caltex Member Discount',
          description: 'HK Caltex JoyFuel Card and StarCard members can enjoy 10% off discount'
        },
        {
          logo: '/logos/ubs.png',
          title: 'UBS Staff Discount',
          description: 'UBS staff can enjoy 10% off discount'
        },
        {
          logo: '/logos/bluecross.png',
          title: 'Blue Cross Discount',
          description: 'HK Blue Cross voucher holders can enjoy rental discount'
        },
        {
          logo: '/logos/hkia.png',
          title: 'HKIA Staff Discount',
          description: 'HKIA staff can enjoy 10% off discount'
        },
      ];
      
    return(







    <div className="min-h-screen max-w-7xl mx-auto bg-white px-4 py-10 text-center">
      <h1 className="text-3xl font-bold text-gray-900">Promotional Discount</h1>
      <p className="text-gray-500 mt-2 max-w-xl mx-auto">
        At WifiBB, you’re charged a flat rate per day — no matter how many days you rent the modem, and how many people and devices you share it with.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <motion.div
            key={card}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl border border-gray-200 shadow-sm p-6"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-700 mb-4">
              Promotional Discount Example {card}
            </div>
            <h2 className="font-semibold text-lg text-gray-800 mb-1">Japan/ Korea/ Taiwan</h2>
            <p className="text-sm text-gray-500 mb-6">4 Day Trip</p>

            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex justify-between border-t py-2 text-sm">
                <div>
                  <span className="font-semibold text-gray-800">Last Day Free</span>
                  <br />
                  <span className="text-gray-500">$35 × (4-1)</span>
                </div>
                <span className="text-gray-800">$105</span>
              </div>
            ))}

            <div className="mt-4 flex items-end justify-between">
              <span className="line-through text-gray-400 text-sm">HKD46</span>
              <span className="text-sky-500 font-bold text-lg">HKD46</span>
              <span className="text-sm text-gray-500">/Day</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 px-6 py-2.5 rounded-full bg-main-600 hover:bg-main-650 font-semibold text-sm"
      >
        Rent WifiBB Now
      </motion.button>

      <section className="py-16 px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">All Current Promotional Discounts</h1>
      <p className="text-gray-500 mb-10">Explore the Latest Deals and Limited-Time Savings!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {discounts.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={item.logo} alt={item.title} className="h-10 mb-4" />
            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
            <p className="text-gray-600 text-sm max-w-xs">{item.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-12">
        <Button className="mt-10 px-6 py-2.5 rounded-full bg-main-600 hover:bg-main-650 font-semibold text-sm text-black-900">
          Load More
        </Button>
      </div>
    </section>
    </div>

    )
}