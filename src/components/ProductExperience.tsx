"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { CaretLeft, CaretRight } from "phosphor-react";

interface ExperienceItem {
  id: number;
  title: string;
  image: string;
  cta?: string;
}

const ITEMS: ExperienceItem[] = [
  {
    id: 1,
    title: "SteelSeries",
    image: "/assets/experience1.jpg",
    cta: "Cek Sekarang!",
  },
  {
    id: 2,
    title: "Tribit",
    image: "/assets/experience2.jpg",
    cta: "Cek Sekarang!",
  },
  {
    id: 3,
    title: "Prassa.ku",
    image: "/assets/experience3.jpg",
    cta: "Cek Sekarang!",
  },
  {
    id: 4,
    title: "Logitech",
    image: "/assets/experience4.jpg",
    cta: "Cek Sekarang!",
  },
  {
    id: 5,
    title: "Razer",
    image: "/assets/experience5.jpg",
    cta: "Cek Sekarang!",
  },
  {
    id: 6,
    title: "Anker",
    image: "/assets/experience6.jpg",
    cta: "Cek Sekarang!",
  },
];

export default function ProductExperience() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    loop: false,
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
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-xl font-medium text-gray-800">
            Product <span className="font-bold">Experience</span>
          </h2>
        </div>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5 md:gap-5 pr-6">
              {ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="flex-[0_0_90%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_32%]"
                >
                  <div className="relative rounded-2xl overflow-hidden h-48 sm:h-52 md:h-56 bg-gray-200 group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
                    <div className="absolute left-6 bottom-6 space-y-3">
                      <h3 className="text-white text-lg font-semibold drop-shadow">
                        {item.title}
                      </h3>
                      {item.cta && (
                        <button className="bg-[#FFD600] text-[#111111] text-xs font-semibold px-4 py-2 rounded shadow">
                          {item.cta}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {prevEnabled && (
            <button
              onClick={scrollPrev}
              aria-label="Previous"
              className="absolute -left-5 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 grid place-items-center rounded-full bg-white border shadow-lg"
            >
              <CaretLeft size={20} />
            </button>
          )}
          {nextEnabled && (
            <button
              onClick={scrollNext}
              aria-label="Next"
              className="absolute -right-5 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 grid place-items-center rounded-full bg-white border shadow-lg"
            >
              <CaretRight size={20} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
