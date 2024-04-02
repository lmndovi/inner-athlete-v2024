import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SpeedWorkoutCard, StrengthWorkoutCard } from "./WorkoutCard";

export const SpeedCardCarousel = () => {
  return (
    <div>
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <SpeedWorkoutCard />
          </CarouselItem>
          <CarouselItem>
            <SpeedWorkoutCard />
          </CarouselItem>
          <CarouselItem>
            <SpeedWorkoutCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export const StrengthCardCarousel = () => {
  return (
    <div>
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <StrengthWorkoutCard />
          </CarouselItem>
          <CarouselItem>
            <StrengthWorkoutCard />
          </CarouselItem>
          <CarouselItem>
            <StrengthWorkoutCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
