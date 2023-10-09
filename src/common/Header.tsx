import { Logo } from "@/assets";
import Image from "next/image";
import React from "react";

const Header: React.FC<{ heading: string }> = ({ heading }) => {
  return (
    <div className="flex items-center gap-3">
      <Image src={Logo} alt="" />
      <h1>{heading}</h1>
    </div>
  );
};

export default Header;
