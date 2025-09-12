"use client";

import { useMemo, useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import productsData from "@/data/products.json";
import { CaretLeft, CaretRight, Star, CheckCircle } from "phosphor-react";

type Brand = {
  key: string;
  label: string;
  color: string; // accent color (fallback)
  logo: string; // path to logo image in /assets/brands
  rating: number;
  reviews: number;
};

const BRANDS: Brand[] = [
  {
    key: "tineco",
    label: "Tineco",
    color: "#052E73",
    logo: "/assets/brands/tineco.png",
    rating: 4.7,
    reviews: 1780,
  },
  {
    key: "ecovacs",
    label: "Ecovacs",
    color: "#1F2B3A",
    logo: "/assets/brands/ecovacs.png",
    rating: 4.6,
    reviews: 940,
  },
  {
    key: "laifen",
    label: "Laifen",
    color: "#183E6B",
    logo: "/assets/brands/laifen.png",
    rating: 4.8,
    reviews: 1220,
  },
  {
    key: "yoniev",
    label: "Yoniev",
    color: "#095B53",
    logo: "/assets/brands/yoniev.png",
    rating: 4.5,
    reviews: 680,
  },
  {
    key: "kans",
    label: "Kans",
    color: "#7A0A0A",
    logo: "/assets/brands/kans.png",
    rating: 4.7,
    reviews: 1780,
  },
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
        <h3 className="text-[16px] leading-[22px] font-medium text-[#111] line-clamp-2">
          {product.name}
        </h3>
        <div className="text-[#111] text-[18px] leading-tight font-bold">
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
          <span>{product.brand ?? "Lunera Indonesia"}</span>
          {/* Placeholder for Instagram-like verified icon (using blue circle with check) */}
          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-[10px] font-bold">
            ✓
          </span>
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
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: brand.color }}
          >
            <img
              src={brand.logo}
              alt={brand.label}
              className="w-8 h-8 object-contain"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-base font-medium text-[#111] leading-none mb-1">
              {brand.label}
            </h3>
            <div className="flex items-center gap-1 text-xs text-gray-700">
              <span className="inline-flex items-center gap-1">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3.5 h-3.5 text-yellow-400"
                >
                  <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                </svg>
                <span className="font-medium">{brand.rating.toFixed(1)}</span>
              </span>
              <span className="text-gray-400">({brand.reviews})</span>
            </div>
          </div>
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
            className={`px-4 py-2 rounded-md border text-sm ${
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
              className={`px-4 py-2 rounded-md border text-sm ${
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
