"use client";
import { useProjects } from "@/api/project";
import { useKeenSlider } from "keen-slider/react";
import React, { useEffect } from "react";
import ProjectDetails from "./ProjectDetails";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { UaeMap } from "@/assets";
import { AnimatePresence, motion } from "framer-motion";
import { useProjectStore } from "@/store/use-projects";

const ProjectSlider = () => {
  const { projectIndex } = useProjectStore();
  const [currentSlide, setCurrentSlide] = React.useState(projectIndex);

  const { data } = useProjects();

  const project = data?.data?.project;
  return (
    <div className="overflow-hidden relative">
      <AnimatePresence>
        {/* <div className="keen-slider__slide flex items-center justify-center py-8">
        <Image src={UaeMap} alt="Uae Map" />
      </div>
      <div className="keen-slider__slide">2</div>
      <div className="keen-slider__slide">3</div> */}
        {project?.slice(currentSlide, currentSlide + 1).map((el, indexes) => {
          return (
            // <div
            //   key={indexes}
            //   initial={{ x: -200 }}
            //   animate={{ x: 0 }}
            //   exit={{ x: 200 }}
            //   transition={{ duration: 1 }}
            // >
            <ProjectDetails
              currentSlide={currentSlide}
              length={project?.length}
              setCurrentSlide={setCurrentSlide}
              key={indexes}
              val={el}
            />
            // </div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default ProjectSlider;
