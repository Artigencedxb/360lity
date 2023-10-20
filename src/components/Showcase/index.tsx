import Image from "next/image";
import React from "react";
import ShowcaseBox from "./ShowcaseBox";
import { Logo } from "@/assets";
import Header from "@/common/Header";
import { showCaseData } from "@/data/showcase";

const Showcase = () => {
  return (
    <div className="py-[4.3rem] md:py-10">
      <Header heading="Showcase" />
      <div className="mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 md:grid-rows-5 lg:grid-rows-3 grid-rows-1 md:h-[1100px] lg:h-[850px]">
          {showCaseData?.map((dat) => {
            return (
              <ShowcaseBox
                key={dat?.id}
                className={dat?.className}
                name={dat?.name as string}
                src={dat?.src as string}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
