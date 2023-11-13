import { LogoWhite } from "@/assets";
import { XvtImage1, XvtImage2 } from "@/assets/xvt";
import Header from "@/common/Header";
import Triangle from "@/common/Triangle";
import { XVTData } from "@/data/xvt";
import Image from "next/image";
import React from "react";

const XVT = () => {
  return (
    <div className="py-[4.3rem] md:py-10 space-y-5">
      <Header heading="XVT" />

      {/* <div className="bg-black rounded-[10px] relative w-full py-20 flex items-center justify-center">
        <Image src={LogoWhite} alt="" />
        <Triangle />
      </div> */}

      <div className="bg-white rounded-[15px] py-8 px-14 flex flex-col space-y-14">
        <div className="flex justify-between items-center gap-10 flex-col-reverse lg:flex-row">
          <div className="basis-[50%]">
            <div className="text-sm font-semibold whitespace-pre-wrap">
              {XVTData?.title}
            </div>
            {XVTData?.description?.map((el) => {
              if (el?.id <= 5)
                return (
                  <div
                    key={el?.id}
                    className="text-sm font-normal text-justify whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: el?.desc }}
                  />
                );
            })}
          </div>
          <div className="basis-[50%]">
            <Image src={XvtImage1} alt="Xvt Image" />
          </div>
        </div>
        <div className="flex lg:flex-row-reverse justify-between items-center gap-10 flex-col-reverse">
          <div className="basis-[50%]">
            {XVTData?.description?.map((el) => {
              if (el?.id > 5)
                return (
                  <div
                    key={el?.id}
                    className="text-sm font-normal text-justify whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: el?.desc }}
                  />
                );
            })}
          </div>
          <div className="basis-[50%]">
            <Image src={XvtImage2} alt="Xvt Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default XVT;
