"use client";

import { useMemo, useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import productsData from "@/data/products.json";
import { CaretLeft, CaretRight, Star, CheckCircle } from "phosphor-react";

type Brand = {
  key: string;
  label: string;
  color: string; // bg color for avatar circle
};

const BRANDS: Brand[] = [
  { key: "tineco", label: "Tineco", color: "bg-blue-600" },
  { key: "ecovacs", label: "Ecovacs", color: "bg-sky-500" },
  { key: "laifen", label: "Laifen", color: "bg-rose-200" },
  { key: "yoniev", label: "Yoniev", color: "bg-teal-500" },
  { key: "kans", label: "Kans", color: "bg-red-500" },
];

// Temporary mapping since products don't have a brand field.
function inferBrandKey(productId: number): Brand["key"] {
  const order = ["tineco", "ecovacs", "laifen", "yoniev", "kans"] as const;
  return order[(productId - 1) % order.length];
}

function ProductCard({ product }: { product: any }) {
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
      </div>
      <div className="mt-3 text-left space-y-2">
        <h3 className="text-[16px] leading-[22px] font-medium text-gray-900 line-clamp-2">
          {product.name}
        </h3>
        <div className="text-[#111111] text-[18px] leading-tight font-bold">
          {product.price}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400 line-through">
            {product.originalPrice}
          </span>
          <span className="text-xs px-2 py-0.5 rounded-md bg-red-50 text-red-600 border border-red-200 font-medium">
            -{product.discount}
          </span>
        </div>
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
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <span>{product.brand ?? "Mazuta Indonesia"}</span>
          <CheckCircle size={14} className="text-blue-500" weight="fill" />
        </div>
      </div>
    </div>
  );
}

function BrandRow({ brand }: { brand: Brand }) {
  const items = useMemo(() => {
    const keyOf = (p: any) =>
      typeof p.brand === "string" && p.brand
        ? p.brand.toLowerCase()
        : inferBrandKey(p.id);
    return productsData.filter((p: any) => keyOf(p) === brand.key);
  }, [brand.key]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);

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

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <div className="py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div
            className={`w-7 h-7 rounded-full ${brand.color} grid place-items-center text-white text-xs font-bold`}
          >
            {brand.label[0]}
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{brand.label}</h3>
        </div>
        <button className="text-sm text-gray-500 hover:text-gray-700">
          See All
        </button>
      </div>

      {/* Slider container */}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 lg:gap-4 xl:gap-4 2xl:gap-5 pr-6">
            {items.map((p: any) => (
              <div
                key={p.id}
                className="flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:basis-[14.5%] xl:basis-[14.3%] 2xl:basis-[14.25%]"
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        {prevEnabled && (
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 grid place-items-center rounded-full bg-white border shadow-md"
          >
            <CaretLeft size={20} />
          </button>
        )}
        {nextEnabled && (
          <button
            onClick={scrollNext}
            aria-label="Next"
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 grid place-items-center rounded-full bg-white border shadow-md"
          >
            <CaretRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
}

export default function BrandProducts() {
  const [active, setActive] = useState<"all" | Brand["key"]>("all");

  const brandsToShow = useMemo(() => {
    if (active === "all") return BRANDS;
    return BRANDS.filter((b) => b.key === active);
  }, [active]);

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setActive("all")}
            className={`px-4 py-2 rounded-xl border text-sm ${
              active === "all"
                ? "bg-black text-white border-black"
                : "bg-white text-gray-700"
            }`}
          >
            All
          </button>
          {BRANDS.map((b) => (
            <button
              key={b.key}
              onClick={() => setActive(b.key)}
              className={`px-4 py-2 rounded-xl border text-sm ${
                active === b.key
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700"
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>

        {/* Brand rows */}
        {brandsToShow.map((b) => (
          <BrandRow key={b.key} brand={b} />
        ))}
      </div>
    </section>
  );
}
