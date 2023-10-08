import { Logo, LogoView, LogoWhite, RightArrowIcon, ShareIcon } from "@/assets";
import ProjectDetails from "@/components/Projects/ProjectDetails";
import { BlogData } from "@/data/blog";
import { projectData } from "@/data/projects";
import { IBlog } from "@/types/blog";
import Image from "next/image";
import React from "react";

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
    <div className="py-10 space-y-5">
      <div className="flex items-center gap-3">
        <Image src={Logo} alt="" />
        <h1>Blog</h1>
      </div>

      <div className="bg-black rounded-[10px] w-full py-20 flex items-center justify-center">
        <Image src={LogoWhite} alt="" />
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
