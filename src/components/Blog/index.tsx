import Image from "next/image";
import React from "react";
// import ProjectsBox from "./Projectbox";
import { Logo } from "@/assets";
import { projectData } from "@/data/projects";
import BlogCard from "./BlogCard";
import Header from "@/common/Header";
import { BlogData } from "@/data/blog";

const Blog = () => {
  return (
    <div className="py-[4.3rem] md:py-10">
      <Header heading="Blog" />
      <div className="mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
          {BlogData?.map((data) => {
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
