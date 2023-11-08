"use client";
import React from "react";
import { Logo } from "@/assets";
import { projectData } from "@/data/projects";
import BlogCard from "./BlogCard";
import Header from "@/common/Header";
import animation from "../../../public/animation.json";
import { useBlog } from "@/api/blog";
import { useLottie } from "lottie-react";

const Blog = () => {
  const { data, isPending } = useBlog();
  const blogs = data?.data?.blog;
  const options = {
    animationData: animation,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div className="py-[4.3rem] md:py-10">
      <Header heading="Blog" />
      <div className="mt-5">
        {isPending && <div>{View}</div>}
        {!blogs?.length && !isPending && (
          <div className="py-16 text-center text-2xl font-medium">
            No blogs.
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
          {blogs?.map((data) => {
            return <BlogCard key={data?.id} data={data} />;
          })}
          {/* {projectData?.map((data) => {
            return (
              <ProjectsBox
                key={data?.id}
                data={data}
                className="bg-green-800"
              />
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
