"use client";
import { useProjects } from "@/api/project";
import { useProjectStore } from "@/store/use-projects";
import React, { useEffect } from "react";
import ProjectDetails from "./ProjectDetails";
import { AnimatePresence } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useParams } from "next/navigation";

const ProjectSlider = () => {
  const params = useParams();
  console.log(params?.projectId, "id");
  const projectId = Number(params?.projectId);
  const { projectIndex } = useProjectStore();
  const [currentSlide, setCurrentSlide] = React.useState(projectId);

  const [loaded, setLoaded] = React.useState(false);
  console.log(projectIndex, "index");

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: projectId,
    mode: "free-snap",
    loop: false,
    slideChanged(slider) {
      console.log(slider.track.details.rel, "rel");

      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const [direction, setDirection] = React.useState("left");

  const { data } = useProjects(undefined, undefined, "priority");

  const project = data?.data?.project;

  useEffect(() => {
    if (projectIndex) {
      instanceRef?.current?.update();
    }
  }, [project, instanceRef, projectIndex]);

  if (project) {
    return (
      <div ref={sliderRef} className="keen-slider relative">
        {project?.map((el, index) => {
          return (
            <ProjectDetails
              currentSlide={currentSlide}
              direction={direction}
              length={project?.length}
              projectIndex={index}
              setCurrentSlide={setCurrentSlide}
              setDirection={setDirection}
              key={index}
              val={el}
              instanceRef={instanceRef}
            />
          );
        })}
      </div>
    );
  }
  return null;
};

export default ProjectSlider;
