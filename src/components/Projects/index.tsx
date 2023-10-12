import Image from "next/image";
import React from "react";
import ProjectsBox from "./Projectbox";
import { Logo } from "@/assets";
import { projectData } from "@/data/projects";
import Header from "@/common/Header";

const Projects = () => {
  return (
    <div className="py-10">
      <Header heading="Projects" />
      <div className="mt-5">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
          {projectData?.map((data) => {
            return <ProjectsBox key={data?.id} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
