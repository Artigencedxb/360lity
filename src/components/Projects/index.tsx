import Image from "next/image";
import React from "react";
import ProjectsBox from "./Projectbox";
import { Logo } from "@/assets";
import { projectData } from "@/data/projects";

const Projects = () => {
  return (
    <div className="py-10">
      <div className="flex items-center gap-3">
        <Image src={Logo} alt="" />
        <h1>Projects</h1>
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
          {projectData?.map((data) => {
            return (
              <ProjectsBox
                key={data?.id}
                data={data}
                className="bg-green-800"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
