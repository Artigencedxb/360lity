"use client";
import React from "react";
import cn from "classnames";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LogoView } from "@/assets";
import Triangle from "@/common/Triangle";

const ProjectsBox: React.FC<{
  data:
    | { name: string; description: string; id: number; src?: string }
    | undefined;
  className?: string;
}> = ({ data, className }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/projects/${data?.id}`)}
      className={cn(
        "transition-all h-[13rem] group overflow-hidden inline-block relative w-full rounded-[10px]",
        className
      )}
    >
      <Triangle />
      {data?.src?.length ? (
        <Image
          src={data?.src}
          fill
          className="rounded-[10px] object-cover transition group-hover:bg-black/30 duration-1000 group-hover:scale-125"
          alt={data?.name}
        />
      ) : (
        data?.name
      )}
      <div className="absolute bg-black/50 w-full h-full opacity-0 flex justify-center items-center group-hover:opacity-100 z-10">
        <button>
          <Image src={LogoView} alt="360 View Logo" className="" />
        </button>
      </div>
    </div>
  );
};

export default ProjectsBox;
