import React from "react";
import Navbar from "../../_components/Navbar";

const StrengthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      <main className="flex flex-col h-screen items-center justify-center">
        {children}
      </main>
    </div>
  );
};

export default StrengthLayout;
