"use client";
import React, { Fragment, useEffect, useState } from "react";
import LoadingScreen from "../../common/LoadingScreen";
import { AnimatePresence } from "framer-motion";

const LoadingWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 5000);
  }, []);
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
