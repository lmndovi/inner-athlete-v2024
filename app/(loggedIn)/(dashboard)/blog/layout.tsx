"use client";

import React, { useEffect, useState } from "react";

import BlogNavbar from "../_components/BlogNavbar";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={` transition-all duration-300 ease-in-out ${
          isScrolled ? "hidden" : "fixed"
        }`}
      >
        <BlogNavbar />
      </div>

      <main className="flex flex-col h-screen items-center justify-center">
        {children}
      </main>
    </div>
  );
};

export default BlogLayout;
