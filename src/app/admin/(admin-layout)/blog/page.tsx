"use client";
import { useBlog } from "@/api/blog";
import Header from "@/common/Header";
import BlogCard from "@/components/Blog/BlogCard";
import { useLottie } from "lottie-react";
import animation from "../../../../../public/animation.json";

const AdminBlogsPage = () => {
  const { data, isPending } = useBlog();
  console.log(data, "data");
  const blogs = data?.data?.blog;
  const options = {
    animationData: animation,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div>
      <Header
        heading="Blogs"
        buttonText="+ Add blog"
        buttonUrl="/admin/blog/create"
        back={false}
      />
      {isPending && <div>{View}</div>}
      {!blogs?.length && !isPending && (
        <div className="py-16 text-center text-2xl font-medium">No blogs.</div>
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
