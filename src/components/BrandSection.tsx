'use client'

import { motion } from 'framer-motion'

const brands = [
  { 
    name: 'tineco', 
    bgColor: 'bg-blue-600',
    textColor: 'text-white',
    productImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=100&fit=crop'
  },
  { 
    name: 'ecovacs', 
    bgColor: 'bg-gray-700',
    textColor: 'text-white',
    productImage: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=150&h=100&fit=crop'
  },
  { 
    name: 'laifen', 
    bgColor: 'bg-blue-100',
    textColor: 'text-gray-700',
    productImage: 'https://images.unsplash.com/photo-1603712725655-edb8b84bcf68?w=150&h=100&fit=crop'
  },
  { 
    name: 'yoniev', 
    bgColor: 'bg-teal-500',
    textColor: 'text-white',
    productImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=150&h=100&fit=crop'
  },
  { 
    name: 'KANS', 
    bgColor: 'bg-red-600',
    textColor: 'text-white',
    productImage: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=150&h=100&fit=crop'
  }
]

export default function BrandSection() {
  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Brands</h2>
        </div>
        
        <div className="flex gap-3">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 0.96 }}
              className={`${brand.bgColor} rounded-xl flex-1 h-24 flex items-center justify-between px-4 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md relative overflow-hidden`}
            >
              {/* Brand Name */}
              <div className="z-20 relative">
                <h3 className={`text-lg font-bold ${brand.textColor} tracking-wide`}>
                  {brand.name}
                </h3>
              </div>
              
              {/* Product Image */}
              <div className="z-10 relative">
                <img
                  src={brand.productImage}
                  alt={brand.name}
                  className="w-14 h-14 object-cover rounded-lg opacity-90"
                />
              </div>
              
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/5 z-0"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
