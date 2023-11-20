import Image from "next/image";
import React from "react";
import { LogoWhite } from "../../assets";
import Triangle from "../../common/Triangle";
import MediaCard from "./MediaCard";
import Header from "../../common/Header";

const Media = () => {
  return (
    <div className="py-[4.3rem] md:py-10 space-y-5">
        <Header heading="Media" />
      <div className="bg-black rounded-[10px] relative w-full py-20 flex items-center justify-center">
        <Image src={LogoWhite} alt="" />
        <Triangle />
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-6 gap-x-6">
            <MediaCard title="Photography" />
            <MediaCard title="Videography" />
            <MediaCard title="Animation" />
      </div>
    </div>
  );
};

export default Media;
