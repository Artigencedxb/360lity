"use client";
import Image from "next/image";
import React from "react";
import ShowcaseBox from "./ShowcaseBox";
import { Logo } from "@/assets";
import Header from "@/common/Header";
import { showCaseData } from "@/data/showcase";
import { useShowcase } from "@/api/showcase";
import animation from "../../../public/animation.json";
import { useLottie } from "lottie-react";

const Showcase = () => {
  const { data, isPending } = useShowcase(1, 6);
  const showcase = data?.data?.showcase;

  const options = {
    animationData: animation,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div className="py-[4.3rem] md:py-10">
      <Header heading="Showcase" />
      <div className="mt-5">
        {isPending && <div>{View}</div>}
        {!showcase?.length && (
          <div className="py-16 text-center text-2xl font-medium">
            No showcase&apos;s.
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 md:grid-rows-5 lg:grid-rows-3 grid-rows-1 md:h-[85rem] lg:h-[50rem]">
          {showcase?.map((dat, index) => {
            const className = showCaseData?.[index]?.className;
            return (
              <ShowcaseBox key={dat?.id} className={className} data={dat} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
