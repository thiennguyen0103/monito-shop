"use client";

import Section from "@/components/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { brands } from "@/data/brand-data";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

const Brand = () => {
  return (
    <Section
      label="Proud to be part of"
      title="Pet Sellers"
      viewMoreLink="/brands"
    >
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {brands.map((brand) => (
            <CarouselItem key={brand.id} className="basis-1/2 md:basis-1/4 lg:basis-1/6">
              <Link
                href={brand.website}
                target="_blank"
                className="flex h-[112px] w-full items-center justify-center p-1"
              >
                <Image
                  src={brand.imageUrl}
                  alt={brand.name}
                  width={120}
                  height={112}
                  className="object-contain"
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Section>
  );
};

export default Brand;
