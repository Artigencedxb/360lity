import Header from "@/common/Header";
import React from "react";
import BlogForm from "../../../../../components/Blog/BlogForm";

const AddBlogsPage = () => {
  return (
    <div className="py-10">
      <Header heading="Add Blog" />

      <BlogForm initialValues={undefined} />
    </div>
  );
};

export default AddBlogsPage;
