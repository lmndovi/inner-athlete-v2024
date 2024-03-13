import Link from "next/link";
import React from "react";
import { Button } from "../../components/ui/button";
import SmallLogo from "../../components/SmallLogo";
import { auth, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { userId } = auth();

  return (
    <>
      <nav className="fixed top-0 w-full h-14 flex justify-between p-6 items-center">
        <div>
          <SmallLogo />
        </div>

        <ul className="flex justify-center items-center space-x-2">
          {!userId && (
            <>
              <Link href="/sign-in">
                <Button size="sm" variant="outline">
                  Login
                </Button>
              </Link>
            </>
          )}
          {userId && (
            <>
              <Link href="/profile">
                <Button size="sm" variant="outline">
                  Profile
                </Button>
              </Link>
            </>
          )}
          <Link href="#contact">
            <Button size="sm" variant="outline">
              Contact
            </Button>
          </Link>
          <div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
