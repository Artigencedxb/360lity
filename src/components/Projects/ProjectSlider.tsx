"use client";
import { useProjects } from "@/api/project";
import { useProjectStore } from "@/store/use-projects";
import React from "react";
import ProjectDetails from "./ProjectDetails";
import { AnimatePresence } from "framer-motion";

const ProjectSlider = () => {
  const { projectIndex } = useProjectStore();
  const [currentSlide, setCurrentSlide] = React.useState(projectIndex);
  const [direction, setDirection] = React.useState("left");

  const { data } = useProjects();

  const project = data?.data?.project;
  return (
    <div className="overflow-hidden relative">
      {/* <div className="keen-slider__slide flex items-center justify-center py-8">
        <Image src={UaeMap} alt="Uae Map" />
      </div>
      <div className="keen-slider__slide">2</div>
      <div className="keen-slider__slide">3</div> */}
      <AnimatePresence>
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
              direction={direction}
              length={project?.length}
              projectIndex={indexes}
              setCurrentSlide={setCurrentSlide}
              setDirection={setDirection}
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
