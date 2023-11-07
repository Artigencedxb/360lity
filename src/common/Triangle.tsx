import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { TriangleIcon } from "../assets";

const Triangle: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className="absolute -bottom-[19px] left-[50%] -translate-x-[50%] z-[2000]">
      <Image src={TriangleIcon} alt="Rounded triangle" width={35} />
    </div>
  );
};

export default Triangle;
