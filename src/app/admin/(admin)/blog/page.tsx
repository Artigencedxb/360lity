"use client";
import { useBlog } from "@/api/blog";
import { useProjects } from "@/api/project";
import Header from "@/common/Header";
import BlogCard from "@/components/Blog/BlogCard";
import ProjectsBox from "@/components/Projects/Projectbox";
import { projectData } from "@/data/projects";
import React from "react";

const AdminBlogsPage = () => {
  const { data } = useBlog();
  console.log(data, "data");
  const blogs = data?.data?.blog;

  return (
    <div>
      <Header
        heading="Blogs"
        buttonText="+ Add blog"
        buttonUrl="/admin/blog/create"
      />

      {!blogs?.length && (
        <div className="py-16 text-center text-2xl font-medium">
          No blog added.
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10 mt-10 py-10">
        {blogs?.map((dat) => {
          return <BlogCard admin={true} key={dat?.id} data={dat} />;
        })}
      </div>
    </div>
  );
};

export default AdminBlogsPage;
