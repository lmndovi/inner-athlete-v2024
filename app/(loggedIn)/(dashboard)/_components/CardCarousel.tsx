import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import WorkoutCard from "./WorkoutCard";

const CardCarousel = () => {
  return (
    <div>
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <WorkoutCard />
          </CarouselItem>
          <CarouselItem>
            <WorkoutCard />
          </CarouselItem>
          <CarouselItem>
            <WorkoutCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CardCarousel;
