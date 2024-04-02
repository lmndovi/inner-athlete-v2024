import Link from "next/link";
import React from "react";
import { Button } from "../../../components/ui/button";
import SmallLogo from "../../../components/SmallLogo";

const Footer = () => {
  return (
    <>
      <nav className="relative bottom-0 w-full h-14 flex justify-between p-5">
        <div>
          <SmallLogo />
        </div>

        <ul className="flex space-x-2">
          <li>
            <Button size="sm">Privacy Policy</Button>
          </li>

          <li>
            <Button size="sm">Terms of Service</Button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Footer;
