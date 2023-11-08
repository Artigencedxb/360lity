import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { TriangleBlackIcon, TriangleIcon } from "../assets";

const TriangleBlack: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className="absolute -bottom-[19px] left-[50%] -translate-x-[50%] z-[2000]">
      <Image src={TriangleBlackIcon} alt="Rounded triangle" width={30} />
    </div>
  );
};

export default TriangleBlack;
