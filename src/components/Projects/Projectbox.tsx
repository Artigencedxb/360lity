"use client";
import { LogoView } from "@/assets";
import Triangle from "@/common/Triangle";
import { IProject } from "@/types/project";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import cn from "classnames";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProjectsBox: React.FC<{
  data: IProject["data"]["project"][0] | undefined;
  className?: string;
  admin?: boolean;
}> = ({ data, className, admin = false }) => {
  const router = useRouter();
  return (
    <div
      className={cn(
        "transition-all h-[13rem] group overflow-hidden inline-block relative w-full rounded-[10px]",
        className
      )}
    >
      <Triangle />
      {data?.image?.length ? (
        <Image
          src={data?.image}
          fill
          className="rounded-[10px] object-cover transition group-hover:bg-black/30 duration-1000 group-hover:scale-125"
          alt={data?.name}
        />
      ) : (
        data?.name
      )}
      {admin ? (
        <div className="absolute bg-black/50 w-full h-full opacity-0 flex justify-center gap-8 items-center group-hover:opacity-100 z-10">
          <button
            type="button"
            onClick={() =>
              router.push(`/admin/projects/${data?._id as string}`)
            }
          >
            <PencilSquareIcon className="w-8 h-8 text-white" />
          </button>
          <button>
            <TrashIcon className="w-10 h-10 text-white" />
          </button>
        </div>
      ) : (
        <div className="absolute bg-black/50 w-full h-full opacity-0 flex justify-center items-center group-hover:opacity-100 z-10">
          <button onClick={() => router.push(`/projects/${data?.id}`)}>
            <Image src={LogoView} alt="360 View Logo" className="" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsBox;
