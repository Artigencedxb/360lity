"use client";
import { IBlog } from "@/types/blog";
import { useRouter } from "next/navigation";
import React from "react";

const BlogCard: React.FC<{ data: IBlog }> = ({ data }) => {
  const router = useRouter();
  const toggleReadMore = () => {
    router.push(`/blog/${data?.id}`);
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-black w-full h-[210px] rounded-[15px] triangle-box"></div>
      <div className="bg-white rounded-[15px] p-5">
        <h4 className="text-sm font-semibold">{data?.title}</h4>
        <div className="text-sm font-normal whitespace-pre-wrap">
          {data?.description1?.slice(0, 400)}
          <span
            onClick={toggleReadMore}
            className="text-[#0060E4] cursor-pointer"
          >
            {"...Read more"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
