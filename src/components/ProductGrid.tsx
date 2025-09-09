'use client'

import { motion } from 'framer-motion'
import { Star, Heart, ShoppingCart } from 'phosphor-react'
import productsData from '@/data/products.json'

const ProductCard = ({ product, index }: { product: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badge */}
        <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          {product.badge}
        </div>
        
        {/* Discount */}
        <div className="absolute top-3 right-3 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
          -{product.discount}
        </div>
        
        {/* Heart icon */}
        <button className="absolute top-12 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-50">
          <Heart size={16} className="text-gray-600 hover:text-red-500" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
        
        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-2">
          {product.features.slice(0, 2).map((feature: string) => (
            <span key={feature} className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
              {feature}
            </span>
          ))}
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} weight={i < Math.floor(product.rating) ? 'fill' : 'regular'} />
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.reviews})</span>
        </div>
        
        {/* Price */}
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-red-600">{product.price}</span>
            <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
          </div>
        </div>
        
        {/* Add to cart button */}
        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300">
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </motion.div>
  )
}

export default function ProductGrid() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Best Seller</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular vacuum cleaners trusted by thousands of customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}
