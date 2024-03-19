import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import gym from "@/public/gym.jpg";

const WorkoutCard = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <Image src={gym} alt="Gym" className="h-52 w-64 rounded-t-lg" />
        </CardContent>
        <CardHeader>
          <CardTitle>Workout #1</CardTitle>
          <CardDescription>
            <ul>
              <li>Card description</li>
              <li>Card description</li>
            </ul>
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default WorkoutCard;
