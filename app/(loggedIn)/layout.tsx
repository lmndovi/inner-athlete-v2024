import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

const LoggedInLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ClerkProvider>{children}</ClerkProvider>
    </div>
  );
};

export default LoggedInLayout;
