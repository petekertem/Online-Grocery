import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { Slider } from "@/types";
import Image from "next/image";

interface SliderProps {
  sliderList: Slider[];
}

const Slider = ({ sliderList }: SliderProps) => {
  return (
    <Carousel>
      <CarouselContent>
        {sliderList.map((slider, index) => (
          <CarouselItem key={index}>
            <Image
              width={1000}
              height={100}
              alt="slider"
              unoptimized={true}
              className="w-full h-[200px] md:h-[400px] object-cover rounded-xl"
              src={
                process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                slider?.attributes?.url?.data?.attributes?.url
              }
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Slider;
