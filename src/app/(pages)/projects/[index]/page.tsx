import Header from "@/common/Header";
import ProjectDetails from "@/components/Projects/ProjectDetails";
import ProjectSlider from "@/components/Projects/ProjectSlider";
import React from "react";

const ProjectPage: React.FC<{ params: { index: number } }> = ({ params }) => {
  return (
    <div className="py-10 h-screen">
      <Header heading="Projects" />

      {params?.index && <ProjectSlider index={params?.index} />}
    </div>
  );
};

export default ProjectPage;
