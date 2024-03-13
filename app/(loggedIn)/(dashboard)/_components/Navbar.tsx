import SmallLogo from "@/components/SmallLogo";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full h-14 flex justify-between p-5">
        <div>
          <SmallLogo />
        </div>

        <ul className="flex space-x-2 items-center">
          <Link href="/">
            <Button size="sm" variant="outline">
              Home
            </Button>
          </Link>
          <Link href="/">
            <Button size="sm" variant="outline">
              Workouts
            </Button>
          </Link>
          <Link href="/">
            <Button size="sm" variant="outline">
              Blog
            </Button>
          </Link>
          <div className="">
            <UserButton />
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
