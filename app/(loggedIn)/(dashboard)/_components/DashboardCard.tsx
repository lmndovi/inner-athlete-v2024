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

const DashboardCard = () => {
  return (
    <div className="mt-10">
      <Card className="w-96 h-[35rem] text-center flex flex-col items-center space-y-3 rounded-2xl pt-5">
        <CardHeader>
          <CardTitle>User Name</CardTitle>
          <CardDescription>
            <p>User Email</p>
            <div className="flex space-x-2 px-5 py-5 text-gray-500/60">
              <span>
                <MapPinIcon height={20} width={20} />
              </span>
              <p>Location</p>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image src={avatar} alt="Avatar" className="h-36 w-36 rounded-full" />
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
