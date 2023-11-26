"use client";
import React from "react";
import Header from "./Header";
import { useLottie } from "lottie-react";
import animation from "../../public/animation.json";

const Fallback: React.FC<{ heading: string }> = ({ heading }) => {
  const options = {
    animationData: animation,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div className="py-[4.3rem] md:py-10 space-y-5">
      <Header heading={heading} />
      <div>{View}</div>
    </div>
  );
};

export default Fallback;
