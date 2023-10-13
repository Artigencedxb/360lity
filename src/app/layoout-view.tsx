"use client";
import Navigation from "@/common/Navigation";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import React, { Fragment } from "react";

const LayooutView: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  console.log(pathname, "path");
  return (
    <Fragment>
      <div className="h-full relative px-[2rem] max-w-6xl sm:px-[3rem] lg:px-[1.5rem] mx-auto">
        {pathname === "/" && <Navigation />}
      </div>
      {children}
      {pathname != "/" && <Footer />}
    </Fragment>
  );
};

export default LayooutView;
