"use client";
import React from "react";
import cn from "classnames";
import { useRouter } from "next/navigation";

const ProjextsBox: React.FC<{
  data: { name: string; description: string; id: number } | undefined;
  className?: string;
}> = ({ data, className }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/projects/${data?.id}`)}
      className={cn("h-[180px] rounded-[12px]", className)}
    >
      {data?.name}
    </div>
  );
};

export default ProjextsBox;
