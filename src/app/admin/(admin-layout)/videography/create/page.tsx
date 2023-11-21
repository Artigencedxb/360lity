import Header from "@/common/Header";
import ProjectForm from "@/components/Projects/ProjectForm";
import React from "react";
import PhotographyForm from "../../../../../components/Photography/PhotographyForm";
import VideographyForm from "../../../../../components/Videography/VideographyForm";

const AddVideographyPage = () => {
  return (
    <div className="py-10">
      <Header heading="Add Video" />

      <VideographyForm />
    </div>
  );
};

export default AddVideographyPage;
