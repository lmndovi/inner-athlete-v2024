import Link from "next/link";
import React from "react";
import { Button } from "../../components/ui/button";
import SmallLogo from "../../components/SmallLogo";
import { auth, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { userId } = auth();

  return (
    <>
      <nav className="fixed top-0 w-full h-14 flex justify-between pt-6 px-5 items-center">
        <div>
          <SmallLogo />
        </div>

        <ul className="flex justify-center items-center space-x-2">
          {!userId && (
            <>
              <Link href="/sign-in">
                <Button variant="ghost">Login</Button>
              </Link>
            </>
          )}
          {userId && (
            <>
              <Link href="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
            </>
          )}
          <Link href="#contact">
            <Button variant="ghost">Contact</Button>
          </Link>
          <li>
            <UserButton afterSignOutUrl="/" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
