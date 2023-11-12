"use client";
import React from "react";
import { useGetBlog } from "../../../../../api/blog";
import BlogAddForm from "../../../../../components/Blog/BlogForm";
import Header from "@/common/Header";

const ContactUsAdminpage: React.FC<{ params: { blogId: string } }> = ({
    params,
  }) => {
  const { data } = useGetBlog(params?.blogId);

  if (data) {
    return (
      <div className="pb-10">
        <Header heading="Update blog" />{" "}
        <BlogAddForm initialValues={data?.data?.blog} />
      </div>
    );
  }
  return null;
};

export default ContactUsAdminpage;
