'use client'

import productsData from '@/data/products.json'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { CaretLeft, CaretRight, Star } from 'phosphor-react'

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group h-full">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* TOP ribbon */}
        <div className="absolute left-3 top-3">
          <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">TOP</div>
        </div>

        {/* Discount badge */}
        <div className="absolute right-3 top-3">
          <div className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">-{product.discount}</div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[3.25rem]">{product.name}</h3>

        {/* Rating */}
        <div className="flex items-center gap-2 text-yellow-400 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} weight={i < Math.round(product.rating) ? 'fill' : 'regular'} />
          ))}
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-red-600">{product.price}</span>
          <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
        </div>
      </div>
    </div>
  )
}

export default function ProductGrid() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: true,
    loop: false,
    skipSnaps: false,
  })

  const [prevEnabled, setPrevEnabled] = useState(false)
  const [nextEnabled, setNextEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevEnabled(emblaApi.canScrollPrev())
    setNextEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Best Seller</h2>
        </div>
        <div className="relative">
          {/* Slider viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {productsData.map((product) => (
                <div
                  key={product.id}
                  className="flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] xl:flex-[0_0_20%]"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* Overlay arrows centered on the slider, hide when at edges */}
          {prevEnabled && (
            <button
              onClick={scrollPrev}
              aria-label="Previous"
              className="absolute -left-5 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 grid place-items-center rounded-full bg-white border shadow-lg hover:bg-white"
            >
              <CaretLeft size={20} />
            </button>
          )}
          {nextEnabled && (
            <button
              onClick={scrollNext}
              aria-label="Next"
              className="absolute -right-5 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 grid place-items-center rounded-full bg-white border shadow-lg hover:bg-white"
            >
              <CaretRight size={20} />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
