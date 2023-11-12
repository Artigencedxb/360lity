"use client";
import { LogoMain } from "@/assets";
import LoadingScreen from "@/common/LoadingScreen";
import Navigation from "@/common/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { Fragment, useState, useEffect } from "react";
import { AnimatePresence, Variants } from "framer-motion";

const LayooutView: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  const footerEnabled =
    !pathname?.includes("admin") &&
    pathname !== "/" &&
    pathname !== "/view-showcase" &&
    pathname !== "/view-project";

  return (
    <Fragment>
      <div className="h-full relative mr-4 sm:mr-4 lg:mr-[7.2rem]">
        {pathname === "/" && <Navigation />}
      </div>
      {children}
      {footerEnabled && <Footer />}
    </Fragment>
  );
};

export default LayooutView;
