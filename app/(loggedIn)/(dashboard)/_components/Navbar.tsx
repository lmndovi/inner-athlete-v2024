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
          <Link href="/user">
            <Button size="sm">Home</Button>
          </Link>
          <Link href="/user">
            <Button size="sm">Workouts</Button>
          </Link>
          <Link href="#/user">
            <Button size="sm">Blog</Button>
          </Link>
          <div>
            <UserButton />
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
