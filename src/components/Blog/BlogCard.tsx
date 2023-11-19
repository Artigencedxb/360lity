"use client";
import { useDeleteBlog } from "@/api/blog";
import Triangle from "@/common/Triangle";
import { Blog, IBlog, IBlogs } from "@/types/blog";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import DeleteModal from "../Modal/DeleteModal";
import { TrashIcon } from "@heroicons/react/24/outline";
import * as DOMPurify from "dompurify";
import PriorityModal from "../Modal/priorityModal";
import { PriorityIcon } from "../../assets";

function htmlDecode(content: string) {
  let e = document.createElement("div");
  e.innerHTML = content;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

const BlogCard: React.FC<{ data: Blog; admin?: boolean }> = ({
  data,
  admin = false,
}) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [priorityModal, setPriorityModal] = useState(false);
  //data

  const description = htmlDecode(data?.description as string);

  const cleanedData = DOMPurify.sanitize(description as string);

  //delete api
  const { mutate, isPending } = useDeleteBlog();

  const blogDeleteHandler = () => {
    mutate(
      { id: data!.id },
      {
        onSuccess: () => {
          setDeleteModal(false);
        },
      }
    );
  };
  const router = useRouter();
  const toggleReadMore = () => {
    router.push(`/blog/${data?.id}`);
  };

  console.log(cleanedData.slice(0, 200), "blog");

  return (
    <>
      {deleteModal && (
        <DeleteModal
          onClick={blogDeleteHandler}
          loading={isPending}
          open={deleteModal}
          onClose={() => setDeleteModal(false)}
          label="blog"
        />
      )}
      {priorityModal && (
        <PriorityModal
          initialValues={data as Blog}
          onClose={() => setPriorityModal(false)}
          open={priorityModal}
          type="blog"
        />
      )}
      <div className="relative flex flex-col gap-4">
        {data?.image?.length ? (
          <div className="group bg-black overflow-hidden inline-block relative w-full h-[180px] md:h-[210px] rounded-x">
            <Image
              fill
              src={data?.image}
              alt={"Blog image"}
              className="object-cover rounded-[10px] scale-110 transition-all duration-1000 group-hover:scale-100"
            />
            <Triangle />
            {admin && (
              <div className="top-0 left-0 absolute bg-black/50 w-full h-full opacity-0 flex justify-center gap-8 items-center group-hover:opacity-100 z-10">
                <button
                  type="button"
                  onClick={() =>
                    router.push(`/admin/blog/${data?._id as string}`)
                  }
                >
                  <PencilSquareIcon className="w-8 h-8 text-white" />
                </button>
                <button onClick={() => setPriorityModal(true)}>
                  <Image
                    width={35}
                    height={35}
                    src={PriorityIcon}
                    alt="priority"
                  />
                </button>
                <button onClick={() => setDeleteModal(true)}>
                  <TrashIcon className="w-8 h-8 text-white" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="relative w-full bg-black h-[180px] md:h-[210px] rounded-x">
            {" "}
            <Triangle />
            {admin && (
              <div className="top-0 left-0 absolute bg-black/50 w-full h-full opacity-1 flex justify-center gap-8 items-center group-hover:opacity-100 z-10">
                <button onClick={() => setDeleteModal(true)}>
                  <TrashIcon className="w-8 h-8 text-white" />
                </button>
              </div>
            )}
          </div>
        )}
        <div className="bg-white flex flex-col h-[13rem] items-stretch md:h-[32rem] overflow-hidden lg:h-[30rem] xl:h-[30rem] rounded-[10px] p-5">
          <h4 className="text-sm font-semibold">{data?.title}</h4>
          <div
            dangerouslySetInnerHTML={{
              __html: cleanedData?.slice(0, 450),
            }}
            className="hidden md:block text-sm font-normal whitespace-pre-wrap"
          />
          {/* <span
            onClick={toggleReadMore}
            className="text-[#0060E4] cursor-pointer"
          >
            {"...Read more"}
          </span> */}

          <div
            dangerouslySetInnerHTML={{
              __html: cleanedData?.slice(0, 150),
            }}
            className="md:hidden text-sm font-normal whitespace-pre-wrap"
          />
          {/* {data?.description?.slice(0, 150)} */}

          <span
            onClick={toggleReadMore}
            className="text-[#0060E4] cursor-pointer"
          >
            {"...Read more"}
          </span>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default BlogCard;
