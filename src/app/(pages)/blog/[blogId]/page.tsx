import { Logo, LogoView, LogoWhite, RightArrowIcon, ShareIcon } from "@/assets";
import Header from "@/common/Header";
import Triangle from "@/common/Triangle";
import ProjectDetails from "@/components/Projects/ProjectDetails";
import { BlogData } from "@/data/blog";
import { projectData } from "@/data/projects";
import { IBlog } from "@/types/blog";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Blog",
};

const BlogPage: React.FC<{ params: { blogId: number } }> = ({ params }) => {
  const blog: IBlog = BlogData?.find((el) => el?.id === Number(params?.blogId));

  const desc =
    blog?.description1! +
      blog?.description2! +
      blog?.description3 +
      blog?.description4 +
      blog?.description5 +
      blog?.description6 ??
    "" + blog?.description7 ??
    "" + blog?.description8 ??
    "" + blog?.description9 ??
    "";

  const conc = blog?.conclusion1! + blog?.conclusion2 ?? "";
  return (
    <div className="py-[4.8rem] md:py-10 space-y-5">
      <Header heading="Blog" />

      <div className="img-wrap rounded-[10px] w-full relative flex flex-col md:flex-row items-center justify-center">
        <div className="md:absolute w-full md:w-[75%] z-[1000] top-0 left-0 lg:w-[75%] h-full md:basis-[70%] self-stretch flex items-center py-10 rounded-tl-[10px] rounded-bl-[10px] left">
          <h1 className="text-xl md:text-5px text-white px-8">{blog?.title}</h1>
        </div>
        <div className="ml-auto relative w-[12rem] h-[12rem] basis-[30%] right">
          <Image
            src={blog?.image}
            alt="blog image"
            fill
            className="rounded-tr-[10px] rounded-br-[10px]"
          />
        </div>
        {/* <Image src={LogoWhite} alt="" /> */}
        <Triangle />
      </div>
      <div className="bg-white rounded-[15px] p-5">
        <div className="text-sm font-semibold whitespace-pre-wrap">
          {blog?.title}
        </div>
        <div className="text-sm font-normal whitespace-pre-wrap">{desc}</div>
        <div className="text-sm font-normal whitespace-pre-wrap">{conc}</div>
      </div>
      {/* <ProjectDetails blogId={params?.blogId} data={project} /> */}
    </div>
  );
};

export default BlogPage;