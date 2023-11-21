import Header from "@/common/Header";
import ProjectForm from "@/components/Projects/ProjectForm";
import React from "react";
import PhotographyForm from "../../../../../components/Photography/PhotographyForm";

const AddPhotographyPage = () => {
  return (
    <div className="py-10">
      <Header heading="Add Photo" />

      <PhotographyForm />
    </div>
  );
};

export default AddPhotographyPage;
