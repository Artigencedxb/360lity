"use client";
import { LogoMain } from "@/assets";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import Lottie, { useLottie } from "lottie-react";
import animation from "../../public/animation.json";
import { Variants, motion } from "framer-motion";

const LoadingScreen: React.FC<{ loading: boolean }> = ({ loading }) => {
  const variants: Variants = {
    show: {
      opacity: 1,
    },
    hide: {
      opacity: 0,

      transition: {
        ease: "easeInOut",
        duration: 300,
      },
    },
  };
  const options = {
    animationData: animation,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <motion.div
      variants={variants}
      key={"my-animation"}
      initial="initial"
      animate={!loading ? "show" : "hide"}
      className={classNames(
        "transition-all bg-white h-screen z-[100] relative flex items-center justify-center"
      )}
    >
      {/* <div>{`${loading}`}</div> */}
      {View}
    </motion.div>
  );
};

export default LoadingScreen;
