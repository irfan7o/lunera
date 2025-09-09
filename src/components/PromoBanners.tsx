'use client'

import { motion } from 'framer-motion'

const promoBanners = [
  {
    id: 1,
    title: 'Exclusive Brand Deals',
    subtitle: 'Up to 50% OFF',
    description: 'Selected vacuum cleaners',
    bgColor: 'bg-gradient-to-r from-blue-500 to-purple-600',
    textColor: 'text-white',
    buttonColor: 'bg-white text-blue-600',
    image: '/api/placeholder/400/200'
  },
  {
    id: 2,
    title: 'Hemat s.d',
    subtitle: '1.5 Juta',
    description: 'Special discount for premium series',
    bgColor: 'bg-gradient-to-r from-green-500 to-teal-600',
    textColor: 'text-white',
    buttonColor: 'bg-white text-green-600',
    image: '/api/placeholder/400/200'
  },
  {
    id: 3,
    title: 'FREE GIFT',
    subtitle: 'Worth Rp 500k',
    description: 'With every purchase above Rp 2 million',
    bgColor: 'bg-gradient-to-r from-yellow-400 to-orange-500',
    textColor: 'text-black',
    buttonColor: 'bg-black text-white',
    image: '/api/placeholder/400/200'
  },
  {
    id: 4,
    title: 'Flash Sale',
    subtitle: 'Limited Time',
    description: 'Grab it before it\'s gone!',
    bgColor: 'bg-gradient-to-r from-red-500 to-pink-600',
    textColor: 'text-white',
    buttonColor: 'bg-white text-red-600',
    image: '/api/placeholder/400/200'
  },
  {
    id: 5,
    title: 'Bundle Package',
    subtitle: 'Save More',
    description: 'Buy 2 get extra 20% off',
    bgColor: 'bg-gradient-to-r from-purple-500 to-indigo-600',
    textColor: 'text-white',
    buttonColor: 'bg-white text-purple-600',
    image: '/api/placeholder/400/200'
  },
  {
    id: 6,
    title: 'New Arrival',
    subtitle: 'Latest Models',
    description: 'Experience next-gen cleaning',
    bgColor: 'bg-gradient-to-r from-gray-700 to-black',
    textColor: 'text-white',
    buttonColor: 'bg-white text-black',
    image: '/api/placeholder/400/200'
  }
]

export default function PromoBanners() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Exclusive Brand Deals</h2>
          <p className="text-gray-600">Don't miss out on these amazing offers</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promoBanners.map((banner, index) => (
            <motion.div
              key={banner.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`${banner.bgColor} ${banner.textColor} rounded-xl p-6 relative overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="relative z-10">
                <h3 className="text-sm font-medium mb-1 opacity-90">{banner.title}</h3>
                <h2 className="text-2xl font-bold mb-2">{banner.subtitle}</h2>
                <p className="text-sm mb-4 opacity-90">{banner.description}</p>
                
                <button className={`${banner.buttonColor} px-4 py-2 rounded-lg font-semibold text-sm hover:scale-105 transition-transform duration-200`}>
                  Shop Now
                </button>
              </div>
              
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div className="w-full h-full rounded-full bg-white transform translate-x-8 -translate-y-8"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
                <div className="w-full h-full rounded-full bg-white transform -translate-x-6 translate-y-6"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
