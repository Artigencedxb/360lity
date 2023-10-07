import Image from "next/image";
import React from "react";
import { Logo } from "../../../assets";
import ProjectsBox from "./Projectbox";

const Projects = () => {
  return (
    <div className="py-10">
      <div className="flex items-center gap-3">
        <Image src={Logo} alt="" />
        <h1>Projects</h1>
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <ProjectsBox className="bg-green-500" />
          <ProjectsBox className=" bg-blue-300" />
          <ProjectsBox className=" bg-blue-300" />
          <ProjectsBox className=" bg-blue-300 " />
          <ProjectsBox className=" bg-blue-300 " />
          <ProjectsBox className=" bg-blue-300 " />
        </div>
      </div>
    </div>
  );
};

export default Projects;
