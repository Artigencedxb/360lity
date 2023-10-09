import { LogoMain } from "@/assets";
import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className="bg-white flex items-center justify-center">
      <Image src={LogoMain} alt="360lity Logo" />
    </div>
  );
};

export default loading;
