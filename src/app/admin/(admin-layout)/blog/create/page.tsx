"use client";
import Header from "@/common/Header";
import React, { useEffect, useState } from "react";
import BlogAddForm from "@/components/Blog/BlogForm";

const AddBlogsPage = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(true);
  }, []);

  if(state) {
  return (
    <div className="py-10">
      <Header heading="Add Blog" />
      <BlogAddForm />
    </div>
  );
}
return null
};

export default AddBlogsPage;
