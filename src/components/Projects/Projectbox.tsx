"use client";
import React from "react";
import cn from "classnames";
import { useRouter } from "next/navigation";

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
      className={cn("h-[180px] rounded-[12px] triangle-box", className)}
    >
      {data?.src?.length ? (
        <iframe
          src={data?.src}
          name="galaxy"
          className="rounded-[12px]"
          height="100%%"
          width="100%%"
          allowFullScreen
        ></iframe>
      ) : (
        data?.name
      )}
    </div>
  );
};

export default ProjectsBox;
