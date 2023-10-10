import React from "react";
import cn from "classnames";
import Image from "next/image";
import { LogoView } from "@/assets";

const ShowcaseBox: React.FC<{
  className?: string;
  src: string;
  name: string;
}> = ({ className, src, name }) => {
  return (
    <div
      className={cn(
        " rounded-[15px] relative h-[180px] w-auto md:h-auto triangle-box",
        className
      )}
    >
      {src?.length ? (
        <Image
          src={src}
          fill
          className="rounded-[12px] object-cover"
          alt={name}
        />
      ) : (
        name
      )}
      <div className="absolute bottom-4 right-4">
        <Image src={LogoView} alt="360 View Logo" />
      </div>
    </div>
  );
};

export default ShowcaseBox;
