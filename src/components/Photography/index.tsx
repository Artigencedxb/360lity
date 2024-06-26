"use client";
import Image from "next/image";
import React from "react";
import { Logo } from "@/assets";
import Header from "@/common/Header";
import { showCaseData } from "@/data/showcase";
import { useShowcase } from "@/api/showcase";
import animation from "../../../public/animation.json";
import { useLottie } from "lottie-react";
import { usePhotography } from "../../api/photography";
import PhotographyBox from "./PhotographyBox";

const Photography = () => {
  const { data, isPending } = usePhotography(undefined, undefined, "priority");
  const photography = data?.data?.photography;

  const options = {
    animationData: animation,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div className="py-[4.3rem] md:py-10">
      <Header heading="Photography" />
      <div className="mt-5">
        {isPending && <div>{View}</div>}
        {!photography?.length && !isPending && (
          <div className="py-16 text-center text-2xl font-medium">
            No photo&apos;s.
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:grid-rows-3 grid-rows-1">
          {photography?.map((dat, index) => {
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
              <PhotographyBox
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

export default Photography;
