'use client'

import { motion } from 'framer-motion'
import { Star, Quotes } from 'phosphor-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Jakarta',
    rating: 5,
    text: 'Amazing vacuum cleaner! The suction power is incredible and it\'s so easy to use. My house has never been cleaner.',
    product: 'Tineco Pure ONE S15 Pro',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=80&h=80&fit=crop&crop=face'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Surabaya',
    rating: 5,
    text: 'Best investment for my home! The cordless design makes cleaning so convenient. Highly recommended!',
    product: 'Tineco Floor ONE S3',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
  },
  {
    id: 3,
    name: 'Lisa Wong',
    location: 'Bandung',
    rating: 5,
    text: 'Perfect for pet owners! Removes all pet hair effortlessly. The HEPA filter is a game-changer.',
    product: 'Tineco A11 Master',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face'
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 relative border border-gray-100 shadow-sm"
            >
              <Quotes size={32} className="text-red-200 mb-4" />
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16}
                    weight={i < testimonial.rating ? 'fill' : 'regular'}
                    className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-xs text-red-600 font-medium">{testimonial.product}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
