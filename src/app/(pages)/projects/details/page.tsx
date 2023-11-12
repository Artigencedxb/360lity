import Header from "@/common/Header";
import ProjectDetails from "@/components/Projects/ProjectDetails";
import ProjectSlider from "@/components/Projects/ProjectSlider";
import React from "react";

const ProjectPage = () => {
  return (
    <div className="py-10 h-full">
      <Header heading="Projects" />

      <ProjectSlider />
    </div>
  );
};

export default ProjectPage;
