import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import WorkoutVideo from "./WorkoutVideo";

const WorkoutCard = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <WorkoutVideo />
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

export default WorkoutCard;
