"use client";
import Image from "next/image";
import React from "react";
import { Logo } from "@/assets";
import Header from "@/common/Header";
import animation from "../../../public/animation.json";
import { useLottie } from "lottie-react";
import VideographyBox from "./VideographyBox";
import { useVideography } from "../../api/Videography";

const Videography = () => {
  const { data, isPending } = useVideography(undefined, undefined, "priority");
  const videography = data?.data?.videography;

  const options = {
    animationData: animation,
    loop: true,
  };
  const { View } = useLottie(options);
  console.log(data, "data");
  
  return (
    <div className="py-[4.3rem] md:py-10">
      <Header heading="Videography" />
      <div className="mt-5">
        {isPending && <div>{View}</div>}
        {!videography?.length && !isPending && (
          <div className="py-16 text-center text-2xl font-medium">
            No video&apos;s.
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:grid-rows-3 grid-rows-1">
          {videography?.map((dat, index) => {
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
              <VideographyBox
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

export default Videography;
