"use client";
import { useGetBlog } from "@/api/blog";
import Header from "@/common/Header";
import Triangle from "@/common/Triangle";
import * as DOMPurify from "dompurify";
import Image from "next/image";
import React from "react";
import { ShareIcon } from "../../../../assets";

// export const metadata: Metadata = {
//   title: "Blog",
// };

function htmlDecode(content: string) {
  let e = document.createElement("div");
  e.innerHTML = content;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

const BlogPage: React.FC<{ params: { blogId: string } }> = ({ params }) => {
  const { data } = useGetBlog(params?.blogId);
  // const blog: IBlog = BlogData?.find((el) => el?.id === Number(params?.blogId));
  const blog = data?.data?.blog;

  const description = htmlDecode(blog?.description as string);

  const clean = DOMPurify.sanitize(description as string);

  console.log(description, "clean");

  // const desc =
  //   blog?.description1! +
  //     blog?.description2! +
  //     blog?.description3 +
  //     blog?.description4 +
  //     blog?.description5 +
  //     blog?.description6 ??
  //   "" + blog?.description7 ??
  //   "" + blog?.description8 ??
  //   "" + blog?.description9 ??
  //   "";

  // const conc = blog?.conclusion1! + blog?.conclusion2 ?? "";
  if (blog) {
    return (
      <div className="py-[4.8rem] md:py-10 space-y-5">
        <Header heading="Blog" />

        <div className="hidden rounded-[10px] w-full relative md:flex flex-col md:flex-row items-center justify-center">
          {/* <Triangle /> */}
          <div className="fade-effect md:absolute w-full z-[1000] top-0 left-0 md:w-[90%] lg:w-[95%] h-full self-stretch md:flex items-center py-10 rounded-tl-[10px] rounded-bl-[10px]">
            <h1 className="text-3xl md:text-5px text-white pl-12 w-[70%]">
              {blog?.title}
            </h1>
          </div>
          <div className=" md:ml-auto relative basis-full w-full h-full md:w-[18rem] md:h-[12rem] md:basis-[30%]">
            <Image
              src={blog?.image as string}
              alt="blog image"
              fill
              className="rounded-tr-[10px] img-effect rounded-br-[10px]"
            />
          </div>
          {/* <Image src={LogoWhite} alt="" /> */}
        </div>
        <div className="md:hidden relative">
          <div className="w-full justify-center flex absolute z-[3000] top-0 left-0 h-full self-stretch items-center py-10 rounded-bl-[10px]">
            <h1 className="text-base md:text-5px text-white pl-12 w-[70%]">
              {blog?.title}
            </h1>
          </div>
          <div className="overlay relative md:ml-auto w-full h-[13rem]">
            <Image
              src={blog?.image as string}
              alt="blog image"
              fill
              className="rounded-[10px]"
            />
          </div>
        </div>
        <div className="bg-white rounded-[15px] p-5">
          <div dangerouslySetInnerHTML={{ __html: clean }} />
          {/* <div className="text-sm font-semibold whitespace-pre-wrap">
          {blog?.title}
        </div>
        <div className="text-sm font-normal whitespace-pre-wrap">{desc}</div>
        <div className="text-sm font-normal whitespace-pre-wrap">{conc}</div> */}
          <Image className="mt-8 ml-auto" src={ShareIcon} alt="share icon" />
        </div>
        <div></div>
        {/* <ProjectDetails blogId={params?.blogId} data={project} /> */}
      </div>
    );
  }
  return null;
};

export default BlogPage;
