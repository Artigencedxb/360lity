import Header from "@/common/Header";
import ProjectForm from "@/components/Projects/ProjectForm";
import React from "react";

const AddProjectsPage = () => {
  return (
    <div>
      <Header heading="Add Project" />

      <ProjectForm />
    </div>
  );
};

export default AddProjectsPage;
