"use client";
import { useProjects } from "@/api/project";
import { useShowcase } from "@/api/showcase";
import Viewer360 from "@/common/Viewer360";
import { Project } from "@/types/project";
import { Showcase } from "@/types/showcase";

const View360Page = () => {
  const { data } = useShowcase(undefined, undefined, "priority");

  const showcase = data?.data?.showcase;
  return (
   
      <Viewer360 data={showcase as Showcase[]} />

  );
};

export default View360Page;
