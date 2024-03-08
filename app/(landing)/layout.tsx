import React from "react";
import Navbar from "./Navbar";
import Footer from "./_components/Footer";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="">{children}</main>
    </div>
  );
};

export default LandingLayout;
