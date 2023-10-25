import { XvtImage2 } from "@/assets/xvt";
import Header from "@/common/Header";
import ProjectsBox from "@/components/Projects/Projectbox";
import { projectData } from "@/data/projects";
import React from "react";

const AdminProjectspage = () => {
  return (
    <div>
      <Header
        heading="Projects"
        buttonText="+ Add Projects"
        buttonUrl="/admin/projects/create"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10 mt-10">
        {projectData?.map((dat) => {
          return <ProjectsBox admin={true} key={dat?.id} data={dat} />;
        })}
      </div>
    </div>
  );
};

export default AdminProjectspage;
