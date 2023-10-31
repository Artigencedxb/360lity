"use client";

import { useProjects } from "@/api/project";
import { useProjectStore } from "@/store/use-projects";
import { Project } from "@/types/project";
import { Showcase } from "@/types/showcase";
import React from "react";

const Viewer360: React.FC<{ data: Project[] | Showcase[] }> = ({ data }) => {
  const { projectIndex } = useProjectStore();
  const [currentSlide, setCurrentSlide] = React.useState(projectIndex);

  return (
    <div>
      {data?.slice(currentSlide, currentSlide + 1).map((el) => {
        return (
          <div key={el?.id}>
            <iframe
              src="https://360lity.com/projects/web/"
              name="360lity"
              width="100%"
              height="100%"
              allowFullScreen
              className="h-screen rounded-x"
            ></iframe>
          </div>
        );
      })}
    </div>
  );
};

export default Viewer360;
