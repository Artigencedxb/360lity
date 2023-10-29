"use client";
import { useGetProject, useProjects } from "@/api/project";
import { LogoView, RightArrowIcon, ShareIcon } from "@/assets";
import { Project } from "@/types/project";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProjectDetails: React.FC<{
  index: number;
}> = ({ index }) => {
  const router = useRouter();
  const [isReadMore, setIsReadMore] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(index);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const { data } = useProjects();

  const project = data?.data?.project;

  console.log(index, "index");

  if (project && index) {
    return (
      <>
        {project!.slice(0, currentIndex).map((val) => {
          return (
            <div
              key={val?._id}
              className="mt-5 grid lg:grid-cols-2 gap-x-6 grid-cols-1 gap-y-8"
            >
              <div className="relative rounded-x w-full h-[375px] group overflow-hidden inline-block">
                {val?.image?.length ? (
                  <Image
                    src={val?.image}
                    fill
                    className="rounded-[10px] object-cover transition group-hover:bg-black/30 duration-1000 scale-110 group-hover:scale-100"
                    alt={val?.name}
                  />
                ) : (
                  val?.name
                )}
                <div className="absolute bg-black/50 w-full h-full opacity-0 flex justify-center items-center group-hover:opacity-100 z-10">
                  <button onClick={() => router.push(`/projects/${val?.id}`)}>
                    <Image src={LogoView} alt="360 View Logo" className="" />
                  </button>
                </div>
              </div>
              <div className=" py-10 px-8 rounded-[10px] flex flex-col bg-white justify-between">
                <div className=" space-y-4 block">
                  <h2>{val?.name}</h2>
                  <p className="text-base font-medium">
                    {isReadMore
                      ? val?.description?.slice(0, 400)
                      : val?.description}
                    {val?.description?.length > 400 && (
                      <span onClick={toggleReadMore} className="text-[#0060E4]">
                        {isReadMore ? "...Read more" : "...Show less"}
                      </span>
                    )}
                  </p>
                </div>
                <div className="flex mt-auto items-center justify-end gap-5">
                  <Image src={ShareIcon} alt="share icon" />
                  <button>
                    <Image src={RightArrowIcon} alt="right arrow icon" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
  return null;
};

export default ProjectDetails;
