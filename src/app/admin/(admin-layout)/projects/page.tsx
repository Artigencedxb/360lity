"use client";
import { useProjects } from "@/api/project";
import Header from "@/common/Header";
import ProjectsBox from "@/components/Projects/Projectbox";
import { projectData } from "@/data/projects";
import React from "react";
import animation from "../../../../../public/animation.json";
import { useLottie } from "lottie-react";
const AdminProjectspage = () => {
  const { data, isPending } = useProjects();
  console.log(data, "data");
  const projects = data?.data?.project;

  const options = {
    animationData: animation,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <div>
      <Header
        heading="Projects"
        buttonText="+ Add Projects"
        buttonUrl="/admin/projects/create"
        back={false}
      />
      {isPending && <div>{View}</div>}
      {!projects?.length && !isPending && (
        <div className="py-16 text-center text-2xl font-medium">
          No projects.
        </div>
      )}
 

      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10 mt-10 py-10">
        {projects?.map((dat) => {
          return <ProjectsBox admin={true} key={dat?.id} data={dat} />;
        })}
      </div>
    </div>
  );
};

export default AdminProjectspage;
