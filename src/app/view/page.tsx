"use client";
import { useProjects } from "@/api/project";
import Viewer360 from "@/common/Viewer360";
import { Project } from "@/types/project";

const View360Page = () => {
  const { data } = useProjects();

  const project = data?.data?.project;
  return (
    <div className="p-10">
      <Viewer360 data={project as Project[]} />
    </div>
  );
};

export default View360Page;
