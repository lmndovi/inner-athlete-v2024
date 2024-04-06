"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import avatar from "@/public/male-avatar1.png";

import { MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

import { useUser } from "@clerk/nextjs";

const DashboardCard = () => {
  const { user } = useUser();

  if (!user) {
    return null; // Or render a loading indicator, sign-in button, etc.
  }

  return (
    <div className="mt-10">
      <Card className="w-96 h-[35rem] text-center flex flex-col items-center space-y-3 rounded-2xl pt-5">
        <CardHeader>
          <CardTitle>{user?.fullName}</CardTitle>
          <CardDescription>
            <p>{user?.primaryEmailAddress?.emailAddress}</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src={user?.imageUrl}
            alt="Avatar"
            height={10}
            width={150} // Set the same width as you set in params
            className="rounded-full"
          />
        </CardContent>
        <CardFooter className="p-5 text-left">
          <ul>
            <li>Workouts Completed:</li>
            <li>10m Time:</li>
            <li>30m Time:</li>
            <li>Injuries:</li>
          </ul>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DashboardCard;
