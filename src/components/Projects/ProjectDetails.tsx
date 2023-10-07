"use client";
import { RightArrowIcon, ShareIcon } from "@/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ProjectDetails: React.FC<{
  projectId: number;
  data: { name: string; description: string; id: number } | undefined;
}> = ({ projectId, data }) => {
  const router = useRouter();
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="bg-white py-10 px-8 rounded-[10px] space-y-6">
      <h2>{data?.name}</h2>
      <p className="text-base font-medium">
        {isReadMore ? data?.description.slice(0, 400) : data?.description}
        <span onClick={toggleReadMore} className="text-[#0060E4]">
          {isReadMore ? "...Read more" : "...Show less"}
        </span>
      </p>

      <div className="flex items-center justify-end gap-5">
        <Image src={ShareIcon} alt="share icon" />
        <button
          onClick={() => router.replace(`/projects/${Number(projectId) + 1}`)}
        >
          <Image src={RightArrowIcon} alt="right arrow icon" />
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
