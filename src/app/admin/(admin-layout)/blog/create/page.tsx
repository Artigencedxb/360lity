import Header from "@/common/Header";
import React from "react";
import BlogAddForm from "@/components/Blog/BlogForm";

const AddBlogsPage = () => {
  return (
    <div className="py-10">
      <Header heading="Add Blog" />
      <BlogAddForm />
    </div>
  );
};

export default AddBlogsPage;
