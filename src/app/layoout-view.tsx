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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 5000);
  }, []);
  const pathname = usePathname();
  console.log(pathname, "path");

  return (
    <Fragment>
      <AnimatePresence>
        {!loading ? (
          <LoadingScreen loading={loading} />
        ) : (
          <>
            <div className="h-full relative mr-[3rem]">
              {pathname === "/" && <Navigation />}
            </div>
            {children}
            {pathname != "/" && <Footer />}{" "}
          </>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default LayooutView;
