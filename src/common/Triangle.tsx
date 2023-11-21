import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { TriangleBlackIcon, TriangleIcon, TriangleWhiteIcon } from "../assets";

const Triangle: React.FC<{ className?: string; type?: string }> = ({
  className,
  type = "default",
}) => {
  let icon;
  switch (type) {
    case "default":
      icon = TriangleIcon;
      break;
    case "black":
      icon = TriangleBlackIcon;
      break;
    case "white":
      icon = TriangleWhiteIcon;
      break;
    default:
      icon = TriangleIcon;
      break;
  }
  return (
    <div className="absolute -bottom-[19px] left-[50%] -translate-x-[50%] z-[2000]">
      <Image src={icon} alt="Rounded triangle" width={35} />
    </div>
  );
};

export default Triangle;
