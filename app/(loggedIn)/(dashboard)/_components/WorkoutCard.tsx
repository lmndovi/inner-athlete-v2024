import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SpeedWorkoutVideo, StrengthWorkoutVideo } from "./WorkoutVideo";

export const SpeedWorkoutCard = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <SpeedWorkoutVideo />
        </CardContent>
        <CardHeader>
          <CardTitle>Workout #1</CardTitle>
          <CardDescription>Card description</CardDescription>
        </CardHeader>
        <CardFooter>Card Footer</CardFooter>
      </Card>
    </div>
  );
};

export const StrengthWorkoutCard = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <StrengthWorkoutVideo />
        </CardContent>
        <CardHeader>
          <CardTitle>Workout #1</CardTitle>
          <CardDescription>Card description</CardDescription>
        </CardHeader>
        <CardFooter>Card Footer</CardFooter>
      </Card>
    </div>
  );
};
