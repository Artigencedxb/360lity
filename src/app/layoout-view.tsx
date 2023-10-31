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

  console.log(pathname, "dalj");

  const footerEnabled =
    !pathname?.includes("admin") &&
    pathname !== "/" &&
    pathname !== "/view-showcase" &&
    pathname !== "/view-project";

  return (
    <Fragment>
      <AnimatePresence>
        {!loading ? (
          !pathname?.includes("admin") && <LoadingScreen loading={loading} />
        ) : (
          <>
            <div className="h-full relative mr-[3rem]">
              {pathname === "/" && <Navigation />}
            </div>
            {children}
            {footerEnabled && <Footer />}{" "}
          </>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default LayooutView;
