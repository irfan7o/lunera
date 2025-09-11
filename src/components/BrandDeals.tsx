"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";

type Banner = {
  id: string;
  image: string;
  alt: string;
  href?: string;
};

const leftColumn: Banner[] = [
  {
    id: "tineco",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
    alt: "Tineco promo",
  },
  {
    id: "ecovacs",
    image:
      "https://images.unsplash.com/photo-1598300183928-75dc814fd777?q=80&w=1200&auto=format&fit=crop",
    alt: "Ecovacs promo",
  },
];

const middleColumn: Banner[] = [
  {
    id: "laifen",
    image:
      "https://images.unsplash.com/photo-1595433707802-6b2626ef1c86?q=80&w=1200&auto=format&fit=crop",
    alt: "Laifen promo",
  },
  {
    id: "usmile",
    image:
      "https://images.unsplash.com/photo-1559264730-1533a6ec0433?q=80&w=1200&auto=format&fit=crop",
    alt: "U Smile promo",
  },
];

const carouselBanners: Banner[] = [
  {
    id: "slide-1",
    image:
      "https://images.unsplash.com/photo-1612197527762-8cfb55b61876?q=80&w=1000&auto=format&fit=crop",
    alt: "Carousel slide 1",
  },
  {
    id: "slide-2",
    image:
      "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=1000&auto=format&fit=crop",
    alt: "Carousel slide 2",
  },
  {
    id: "slide-3",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1000&auto=format&fit=crop",
    alt: "Carousel slide 3",
  },
];

function BannerCard({
  banner,
  aspect = "aspect-[16/9]",
  fill = false,
}: {
  banner: Banner;
  aspect?: string;
  fill?: boolean;
}) {
  return (
    <div
      className={`w-full ${
        fill ? "h-full" : aspect
      } rounded-xl overflow-hidden bg-gray-100`}
    >
      <img
        src={banner.image}
        alt={banner.alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

function SquareCarousel({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevEnabled(emblaApi.canScrollPrev());
    setNextEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div
        className="overflow-hidden rounded-xl aspect-square"
        ref={(el) => {
          // Forward to Embla and to parent containerRef for height syncing
          emblaRef(el);
          if (containerRef) {
            // @ts-ignore
            containerRef.current = el;
          }
        }}
      >
        <div className="flex">
          {carouselBanners.map((b) => (
            <div key={b.id} className="flex-[0_0_100%] min-w-0">
              <img
                src={b.image}
                alt={b.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      {prevEnabled && (
        <button
          aria-label="Previous"
          onClick={scrollPrev}
          className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 grid place-items-center rounded-full bg-white border shadow-md"
        >
          <CaretLeft size={20} />
        </button>
      )}
      {nextEnabled && (
        <button
          aria-label="Next"
          onClick={scrollNext}
          className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 grid place-items-center rounded-full bg-white border shadow-md"
        >
          <CaretRight size={20} />
        </button>
      )}

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {carouselBanners.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`h-2 w-2 rounded-full ${
              selectedIndex === i ? "bg-white" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function BrandDeals() {
  const squareRef = useRef<HTMLDivElement | null>(null);
  const [colHeight, setColHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (!squareRef.current) return;
    const el = squareRef.current;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const h = entry.contentRect.height;
        if (h && h > 0) setColHeight(h);
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [squareRef.current]);

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-medium text-gray-900 mb-4">
          Exclusive Brand Deals
        </h2>
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Left column */}
          <div
            className="grid grid-rows-2 gap-4"
            style={colHeight ? { height: colHeight } : undefined}
          >
            {leftColumn.map((b) => (
              <BannerCard key={b.id} banner={b} fill />
            ))}
          </div>

          {/* Middle column */}
          <div
            className="grid grid-rows-2 gap-4"
            style={colHeight ? { height: colHeight } : undefined}
          >
            {middleColumn.map((b) => (
              <BannerCard key={b.id} banner={b} fill />
            ))}
          </div>

          {/* Right column: square carousel */}
          <div>
            <SquareCarousel containerRef={squareRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
