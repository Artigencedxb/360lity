"use client";

import { useProjects } from "@/api/project";
import { useProjectStore } from "@/store/use-projects";
import { Project } from "@/types/project";
import { Showcase } from "@/types/showcase";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  InfoIcon,
  ReduceIcon,
  ViewBackIcon,
  ViewNextIcon,
} from "../assets/360-view";

const Viewer360: React.FC<{ data?: Showcase[] | Project[] }> = ({ data }) => {
  const { projectIndex } = useProjectStore();
  const [currentSlide, setCurrentSlide] = React.useState(projectIndex);
  const [showInfo, setShowInfo] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div>
      {data?.slice(currentSlide, currentSlide + 1).map((el) => {
        return (
          <div key={el?.id} className="relative">
            <iframe
              src={el?.link}
              name="360lity"
              width="100%"
              height="100%"
              allowFullScreen
              className="h-screen rounded-x"
            ></iframe>
            {showInfo && (
              <div className="absolute break-words flex flex-col w-[20rem] bottom-14 z-30 space-y-4 right-16 bg-black/50 px-10 py-7 rounded-x">
                <h3 className="text-white text-[40px] font-medium">
                  {el?.name}
                </h3>
                <p className="text-white text-xl overflow-hidden clear-both block font-medium">
                  {/* @ts-ignore */}
                  {el?.description}
                </p>
              </div>
            )}
            <div className="absolute bottom-4 right-4 flex flex-col gap-6">
              {pathname === "view-showcase" && (
                <Fragment>
                  <button
                    disabled={data?.length === Number(currentSlide) + 1}
                    onClick={() => setCurrentSlide((prev) => prev + 1)}
                  >
                    <Image
                      width={14}
                      height={14}
                      src={ViewNextIcon}
                      alt="information icon"
                    />
                  </button>
                  <button
                    disabled={currentSlide === 0}
                    onClick={() => setCurrentSlide((prev) => prev - 1)}
                  >
                    <Image
                      width={14}
                      height={14}
                      src={ViewBackIcon}
                      alt="information icon"
                    />
                  </button>
                </Fragment>
              )}
              <button onClick={() => setShowInfo(!showInfo)}>
                <Image
                  width={23}
                  height={23}
                  src={InfoIcon}
                  alt="information icon"
                />
              </button>
              <button onClick={() => router.back()}>
                <Image
                  width={23}
                  height={23}
                  src={ReduceIcon}
                  alt="Reduce size icon"
                />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Viewer360;
