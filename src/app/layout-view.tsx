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
      <div className="h-full relative mx-auto lg:max-w-6xl px-[2rem] sm:px-[3rem] lg:px-[1.5rem]">
        {pathname === "/" && <Navigation />}
      </div>
      {children}
      {footerEnabled && <Footer />}
    </Fragment>
  );
};

export default LayooutView;
