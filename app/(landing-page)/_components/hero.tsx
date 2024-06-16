"use client";

import { Button } from "@/components/ui/button";
import { useWindowSize } from "@/hooks/useWindowSize";
import { CirclePlay } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const { width } = useWindowSize();

  return (
    <div className="container relative h-[790px] w-full overflow-hidden rounded-bl-2xl rounded-br-2xl bg-[#FCEED5] lg:h-[695px] lg:rounded-bl-3xl lg:rounded-br-3xl">
      <div className="absolute -left-[30%] -top-[98%] z-20 h-[635px] w-[635px] rotate-[19.42deg] rounded-[99px] bg-secondary lg:-left-60 lg:-top-[85%] lg:rotate-[25.23deg]"></div>

      <div className="absolute -bottom-[85%] left-40 z-20 h-[635px] w-[635px] -rotate-[56.47deg] rounded-[99px] bg-secondary"></div>
      <div className="absolute left-[122px] top-[156px] z-20 hidden h-[67px] w-[67px] rotate-[24deg] rounded-[20px] bg-secondary md:block"></div>

      <div className="absolute right-[35%] top-[18%] z-20 h-[15px] w-[15px] rotate-[21deg] rounded-sm bg-secondary"></div>
      <div className="absolute right-[44%] top-[22%] z-20 h-[16px] w-[16px] rotate-[80deg] rounded-sm bg-secondary lg:right-[44.5%] lg:top-[26.5%] lg:h-[28px] lg:w-[28px] lg:rotate-[77deg] lg:rounded-md"></div>
      <div className="absolute right-[44.5%] top-[22.5%] z-30 h-[13px] w-[13px] rotate-[47deg] rounded-sm bg-dark-blue lg:right-[45%] lg:top-[28%] lg:h-[21px] lg:w-[21px] lg:rounded-md"></div>

      <div className="absolute bottom-0 right-0 h-[690px] w-full lg:w-[930px]">
        <div className="relative h-full w-full">
          <div className="absolute -bottom-[40%] -right-[50%] z-20 h-[528px] w-[528px] rotate-[5deg] rounded-[48px] bg-dark-blue md:-bottom-[40%] md:right-[1%] lg:-bottom-[35.5%] lg:right-[19.8%] lg:h-[635px] lg:w-[635px] lg:rounded-[99px]"></div>
          <div className="absolute -bottom-[31%] -right-[65%] z-20 h-[528px] w-[528px] -rotate-[64.77deg] rounded-[48px] bg-secondary md:-bottom-[40%] md:-right-[2%] lg:-bottom-[29.5%] lg:right-[13%] lg:h-[635px] lg:w-[635px] lg:rounded-[99px]"></div>
          <Image
            src="/hero.png"
            width={930}
            height={690}
            alt="Hero banner"
            className="absolute bottom-0 right-1/2 z-30 translate-x-1/2 object-contain md:w-1/2 lg:w-2/3"
          />
        </div>
      </div>
      <div className="container absolute left-0 top-24 z-30 w-fit max-w-full space-y-5 md:max-w-[750px] lg:top-36">
        <div>
          <h1 className="text-[46px] font-bold text-dark-blue-80 lg:text-[60px]">
            One More Friend
          </h1>
          <h2 className="text-[28px] font-bold text-dark-blue-80 lg:text-[46px]">
            Thousands More Fun!
          </h2>
        </div>
        <p className="text-justify text-neutral-80">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <div className="flex items-center gap-5">
          <Button variant="rounded-outline">
            View Intro <CirclePlay className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="rounded">Explore Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
