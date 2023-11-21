"use client";
import Image from "next/image";
import React from "react";
import { Logo } from "@/assets";
import Header from "@/common/Header";
import animation from "../../../public/animation.json";
import { useLottie } from "lottie-react";
import { useVideography } from "../../api/Videography";
import { useAnimation } from "../../api/animation";
import AnimationBox from "./AnimationBox";

const Animation = () => {
  const { data, isPending } = useAnimation(undefined, undefined, "priority");
  const animation = data?.data?.animation;

  const options = {
    animationData: animation,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <div className="py-[4.3rem] md:py-10">
      <Header heading="Animation" />
      <div className="mt-5">
        {isPending && <div>{View}</div>}
        {!animation?.length && !isPending && (
          <div className="py-16 text-center text-2xl font-medium">
            No video&apos;s.
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:grid-rows-3 grid-rows-1">
          {animation?.map((dat, index) => {
            let className = "";
            switch (index) {
              case 0:
                className = "lg:row-span-2 lg:col-span-2";
                break;
              case 1:
                className = "col-span-1";
                break;
              case 2:
                className = "col-span-1";
                break;
              case 3:
                className = "lg:col-span-2 col-span-1";
                break;
              case 10:
                className = "lg:row-span-2 lg:col-span-2";
                break;
              case 13:
                className = "lg:col-span-2 col-span-1";
                break;
            }
            return (
              <AnimationBox
                className={className}
                admin={false}
                key={dat?.id}
                data={dat}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Animation;
