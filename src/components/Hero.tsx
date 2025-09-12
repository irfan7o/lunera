"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CaretLeft, CaretRight } from "phosphor-react";

const banners = [
  {
    id: 1,
    title: "NO.1",
    subtitle: "Wet Dry Vacuum",
    subtitle2: "Cleaner Brand",
    description:
      "Experience the ultimate cleaning power with our premium vacuum cleaners. Trusted by millions of customers worldwide.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    bgGradient: "from-purple-900 via-blue-900 to-purple-900",
  },
  {
    id: 2,
    title: "BEST",
    subtitle: "Premium Quality",
    subtitle2: "Home Electronics",
    description:
      "Discover our wide range of premium electronics for your smart home. Quality guaranteed.",
    image:
      "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&h=400&fit=crop",
    bgGradient: "from-red-900 via-purple-900 to-red-900",
  },
  {
    id: 3,
    title: "NEW",
    subtitle: "Smart Technology",
    subtitle2: "For Modern Living",
    description:
      "Embrace the future with our latest smart home technologies. Innovation at its finest.",
    image:
      "https://images.unsplash.com/photo-1603712725655-edb8b84bcf68?w=600&h=400&fit=crop",
    bgGradient: "from-blue-900 via-teal-900 to-blue-900",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Autoplay every 5s, pause while hovered
  useEffect(() => {
    if (isHovered) return; // pause autoplay when user hovers
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const currentBanner = banners[currentSlide];

  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-6">
        <div
          className={`relative bg-gradient-to-r ${currentBanner.bgGradient} text-white overflow-hidden h-80 md:h-96 rounded-2xl shadow-lg`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute inset-0 bg-black/30 rounded-2xl" />

          {/* Navigation Arrows - Only show on hover */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              x: isHovered ? 0 : -20,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute -left-5 md:-left-6 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-100 rounded-full p-3 transition-all duration-300 shadow-lg"
          >
            <CaretLeft size={20} className="text-gray-800" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              x: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute -right-5 md:-right-6 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-100 rounded-full p-3 transition-all duration-300 shadow-lg"
          >
            <CaretRight size={20} className="text-gray-800" />
          </motion.button>

          <div className="relative h-full flex items-center px-8 md:px-12">
            <div className="grid md:grid-cols-2 gap-8 items-center w-full">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium">
                  ✨{" "}
                  {currentBanner.title === "NO.1"
                    ? "No.1 Brand"
                    : currentBanner.title === "BEST"
                    ? "Best Quality"
                    : "New Innovation"}
                </div>

                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  <span className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    {currentBanner.title}
                  </span>
                  <br />
                  <span className="text-white text-2xl md:text-3xl">
                    {currentBanner.subtitle}
                  </span>
                  <br />
                  <span className="text-white text-2xl md:text-3xl">
                    {currentBanner.subtitle2}
                  </span>
                </h1>

                <p className="text-sm md:text-base text-gray-200 max-w-md leading-relaxed">
                  {currentBanner.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm">
                    Shop Now
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 text-sm">
                    Learn More
                  </button>
                </div>
              </motion.div>

              <motion.div
                key={`image-${currentSlide}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative flex justify-center"
              >
                <div className="relative z-10">
                  <img
                    src={currentBanner.image}
                    alt="Product Showcase"
                    className="w-full max-w-sm h-48 md:h-56 object-cover rounded-lg shadow-xl"
                  />

                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [-8, 8, -8] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-2 -right-2 bg-yellow-400 text-black font-bold px-3 py-1 rounded-full shadow-lg text-xs"
                  >
                    BEST SELLER
                  </motion.div>

                  <motion.div
                    animate={{ y: [8, -8, 8] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-2 -left-2 bg-white text-black font-semibold px-3 py-1 rounded-full shadow-lg text-xs"
                  >
                    30% OFF
                  </motion.div>
                </div>

                {/* Background decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 blur-xl" />
              </motion.div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
