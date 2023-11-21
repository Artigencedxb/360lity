"use client";
import { LeftArrow, LogoView, RightArrow, ShareIcon } from "@/assets";
import { Project } from "@/types/project";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import Triangle from "../../common/Triangle";
import "keen-slider/keen-slider.min.css";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";
const ProjectDetails: React.FC<{
  currentSlide: number;
  direction: string;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
  setDirection: React.Dispatch<React.SetStateAction<string>>;
  length?: number;
  projectIndex?: number;
  val: Project;
  instanceRef: any;
  index: number
}> = ({
  currentSlide,
  setCurrentSlide,
  val,
  length,
  setDirection,
  direction,
  projectIndex,
  instanceRef,
  index
}) => {
  const router = useRouter();
  const params = useParams();
  const projectId = params?.projectId;
  const [isReadMore, setIsReadMore] = useState(true);

  const shareData = {
    title: "Projects",
    text: "360lity projects!",
    url: `${window.location.origin}/projects/details/${currentSlide}`,
  };

  console.log(Number(currentSlide) + 1, "test");

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const shareButton = async () => {
    try {
      if(navigator.share) {
      await navigator.share(shareData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="keen-slider__slide mt-12 lg:mt-5 grid lg:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-6 grid-cols-1">
      <div className="relative rounded-x w-full h-[300px] lg:h-[375px] group overflow-hidden inline-block">
        <Triangle />
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
          <button onClick={() => router.push(`/view-project?index=${index}`)}>
            <Image src={LogoView} alt="360 View Logo" className="" />
          </button>
        </div>
      </div>
      <div className="py-10 px-8 rounded-[10px] flex flex-col bg-white justify-between">
        <div className="space-y-4 block">
          <h2>{val?.name}</h2>
          <div
            className={cn("", {
              "h-[13rem] md:h-[8rem] lg:h-[12rem] scrollbar-thin overflow-y-auto scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-gray-100":
                !isReadMore,
            })}
          >
            <p className="text-base font-medium">
              {isReadMore ? val?.description?.slice(0, 400) : val?.description}
              {val?.description?.length > 400 && (
                <span
                  onClick={toggleReadMore}
                  className="text-[#0060E4] cursor-pointer"
                >
                  {isReadMore ? "...Read more" : "...Show less"}
                </span>
              )}
            </p>
          </div>
        </div>
        <div className="flex mt-5 items-center justify-between">
          {currentSlide != 0 && (
            <button
              // onClick={(e: any) => {
              //   setDirection("left");
              //   setCurrentSlide((prev) => prev - 1);
              // }}
              onClick={(e: any) => {
                setIsReadMore(true);
                e.stopPropagation() || instanceRef.current?.prev();
              }}
              disabled={currentSlide === 0}
            >
              <Image src={LeftArrow} alt="right arrow icon" />
            </button>
          )}
          <div className="self-end flex items-center gap-5 ml-auto">
            <button onClick={shareButton}>
              <Image src={ShareIcon} alt="share icon" />
            </button>
            {currentSlide !==
              instanceRef.current?.track?.details?.slides.length - 1 && (
              <button
                // onClick={(e: any) => {
                //   setDirection("right");
                //   setCurrentSlide((prev) => prev + 1);
                // }}
                onClick={(e: any) => {
                  setIsReadMore(true);
                  e.stopPropagation() || instanceRef.current?.next();
                }}
                disabled={
                  currentSlide ===
                  instanceRef.current?.track?.details?.slides.length - 1
                }
              >
                <Image src={RightArrow} alt="right arrow icon" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
