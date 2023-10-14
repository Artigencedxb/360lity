import Blog from "@/components/Blog";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog",
};

const BlogPage = () => {
  return <Blog />;
};

export default BlogPage;
