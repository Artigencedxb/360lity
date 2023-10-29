import Header from "@/common/Header";
import BlogForm from "@/components/Blog/BlogForm";
import ProjectForm from "@/components/Projects/ProjectForm";
import React from "react";

const AddBlogsPage = () => {
  return (
    <div>
      <Header heading="Add Blog" />

      <BlogForm />
    </div>
  );
};

export default AddBlogsPage;
