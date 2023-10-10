"use client";
import React from "react";
import cn from "classnames";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LogoView } from "@/assets";

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
        "h-[120px] sm:h-[180px] relative w-full rounded-[12px] triangle-box",
        className
      )}
    >
      {data?.src?.length ? (
        <Image
          src={data?.src}
          fill
          className="rounded-[12px] object-cover"
          alt={data?.name}
        />
      ) : (
        data?.name
      )}
    </div>
  );
};

export default ProjectsBox;
