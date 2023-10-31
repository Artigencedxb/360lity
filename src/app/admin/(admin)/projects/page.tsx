"use client";
import { useProjects } from "@/api/project";
import Header from "@/common/Header";
import ProjectsBox from "@/components/Projects/Projectbox";
import { projectData } from "@/data/projects";
import React from "react";

const AdminProjectspage = () => {
  const { data } = useProjects();
  console.log(data, "data");
  const projects = data?.data?.project;

  return (
    <div>
      <Header
        heading="Projects"
        buttonText="+ Add Projects"
        buttonUrl="/admin/projects/create"
      />

      {!projects?.length && (
        <div className="py-16 text-center text-2xl font-medium">
          No projects added.
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
