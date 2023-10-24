import React from "react";
import cn from "classnames";
import Image from "next/image";
import { DeleteIcon, LogoView } from "@/assets";
import Triangle from "@/common/Triangle";

const ShowcaseBox: React.FC<{
  className?: string;
  src: string;
  name: string;
  admin?: boolean;
}> = ({ className, src, name, admin = false }) => {
  console.log(className, "class");

  return (
    <div
      className={cn(
        " rounded-[15px] transition-all relative h-[13rem] md:h-auto group overflow-hidden inline-block",
        className,
        {
          "!md:h-[13rem]": !!admin,
          "!md:h-auto": !admin,
        }
      )}
    >
      <Triangle />
      {src?.length ? (
        <div className="block transition-all duration-300 group-hover:bg-black/30">
          <Image
            src={src}
            fill
            className="rounded-[12px] object-cover transition group-hover:bg-black/30 duration-1000 group-hover:scale-125"
            alt={name}
          />
        </div>
      ) : (
        name
      )}
      {admin ? (
        <div className="absolute bg-black/50 w-full h-full opacity-0 flex justify-center gap-6 items-center group-hover:opacity-100 z-10">
          <button>
            <Image src={LogoView} alt="360 View Logo" className="" />
          </button>
          <button>
            <Image src={DeleteIcon} alt="360 View Logo" className="" />
          </button>
        </div>
      ) : (
        <div className="absolute bg-black/50 w-full h-full opacity-0 flex justify-center items-center group-hover:opacity-100 z-10">
          <button>
            <Image src={LogoView} alt="360 View Logo" className="" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ShowcaseBox;
