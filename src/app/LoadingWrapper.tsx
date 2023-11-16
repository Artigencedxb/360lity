"use client";
import React, { Fragment, useEffect, useState } from "react";
import LoadingScreen from "../common/LoadingScreen";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const LoadingWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  console.log(pathname, "path");

  useEffect(() => {
    if (pathname === "/") {
      setTimeout(() => setLoading(true), 5000);
    } else {
      setLoading(true);
    }
  }, [pathname]);

  return (
    <div className="relative">
      {!loading ? (
        <AnimatePresence>
          <LoadingScreen loading={loading} />
        </AnimatePresence>
      ) : (
        children
      )}
    </div>
  );
};

export default LoadingWrapper;
