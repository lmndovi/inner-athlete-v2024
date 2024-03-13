import React from "react";
import Navbar from "../_components/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      <main className="flex flex-col h-screen bg-green-500 items-center justify-center">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
