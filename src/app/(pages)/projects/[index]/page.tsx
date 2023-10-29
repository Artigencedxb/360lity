import Header from "@/common/Header";
import ProjectDetails from "@/components/Projects/ProjectDetails";
import React from "react";

const ProjectPage: React.FC<{ params: { index: number } }> = ({ params }) => {
  return (
    <div className="py-10">
      <Header heading="Projects" />

      <ProjectDetails index={params?.index} />
    </div>
  );
};

export default ProjectPage;
