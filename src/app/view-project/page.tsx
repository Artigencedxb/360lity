"use client";
import { useProjects } from "@/api/project";
import Viewer360 from "@/common/Viewer360";
import { Project } from "@/types/project";

const View360Page = () => {
  const { data } = useProjects(undefined, undefined, "priority");

  const project = data?.data?.project;
  return (
    <div>
      <Viewer360 data={project as Project[]} />
    </div>
  );
};

export default View360Page;
