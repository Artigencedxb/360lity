import Header from "@/common/Header";
import BlogForm from "@/components/Blog/BlogForm";
import React from "react";

const AddBlogsPage = () => {
  return (
    <div className="py-10">
      <Header heading="Add Blog" />

      <BlogForm initialValues={undefined} />
    </div>
  );
};

export default AddBlogsPage;
