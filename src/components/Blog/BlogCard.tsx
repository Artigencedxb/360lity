"use client";
import Triangle from "@/common/Triangle";
import { IBlog } from "@/types/blog";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const BlogCard: React.FC<{ data: IBlog }> = ({ data }) => {
  const router = useRouter();
  const toggleReadMore = () => {
    router.push(`/blog/${data?.id}`);
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-black w-full h-[180px] md:h-[210px] rounded-[15px] relative">
        <Triangle />
        <Image
          fill
          src={data?.image}
          alt={"Blog image"}
          className="object-cover rounded-[10px]"
        />
      </div>
      <div className="bg-white flex flex-col h-[13rem] items-stretch md:h-[32rem] lg:h-[30rem] xl:h-[26rem] rounded-[10px] p-5">
        <h4 className="text-sm font-semibold">{data?.title}</h4>
        <div className="hidden md:block text-sm font-normal whitespace-pre-wrap">
          {data?.description1?.slice(0, 350)}

          <span
            onClick={toggleReadMore}
            className="text-[#0060E4] cursor-pointer"
          >
            {"...Read more"}
          </span>
        </div>
        <div className="md:hidden text-sm font-normal whitespace-pre-wrap">
          {data?.description1?.slice(0, 150)}

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
