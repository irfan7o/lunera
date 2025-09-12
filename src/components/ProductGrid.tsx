"use client";

import productsData from "@/data/products.json";
import { siteConfig } from "@/config/site";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { CaretLeft, CaretRight, Star, CheckCircle } from "phosphor-react";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="bg-white rounded-xl transition-all duration-300 h-full">
      <div className="relative">
        <div className="w-full aspect-square overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* TOP ribbon */}
        <div className="absolute left-3 top-3">
          <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            TOP
          </div>
        </div>

        {/* Discount badge */}
        <div className="absolute right-3 top-3">
          <div className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
            -{product.discount}
          </div>
        </div>
      </div>

      <div className="mt-3 text-left space-y-2.5">
        {/* Name/description two lines */}
        <h3 className="text-[16px] leading-[22px] font-medium text-[#111] line-clamp-2">
          {product.name}
        </h3>

        {/* Price main */}
        <div className="text-[#111] text-[18px] leading-tight font-bold">
          {product.price}
        </div>

        {/* Original + discount */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400 line-through">
            {product.originalPrice}
          </span>
          <span className="text-xs px-2 py-0.5 rounded-md bg-red-50 text-red-600 border border-red-200 font-medium">
            -{product.discount}
          </span>
        </div>

        {/* Stars row */}
        <div className="flex items-center gap-1 text-gray-700">
          <Star size={16} weight="fill" className="text-yellow-400" />
          <span className="text-xs md:text-sm font-medium">
            {Number(product.rating).toFixed(1)}
          </span>
          {product.reviews ? (
            <span className="text-xs md:text-sm text-gray-400">
              • {product.reviews} reviews
            </span>
          ) : null}
        </div>

        {/* Brand verified */}
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <span>{product.brand ?? `${siteConfig.name} Indonesia`}</span>
          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-[10px] font-bold">
            ✓
          </span>
        </div>
      </div>
    </div>
  );
};

export default function ProductGrid() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    loop: false,
    skipSnaps: false,
  });

  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevEnabled(emblaApi.canScrollPrev());
    setNextEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-xl font-medium text-gray-800">Best Seller</h2>
        </div>
        <div className="relative">
          {/* Slider viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 lg:gap-4 xl:gap-4 2xl:gap-5 pr-6">
              {productsData.map((product) => (
                <div
                  key={product.id}
                  className="flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:basis-[14.5%] xl:basis-[14.3%] 2xl:basis-[14.25%]"
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
  );
}
