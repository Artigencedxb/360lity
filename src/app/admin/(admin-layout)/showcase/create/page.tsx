import Header from "@/common/Header";
import ProjectForm from "@/components/Projects/ProjectForm";
import ShowcaseForm from "@/components/Showcase/ShowcaseForm";
import React from "react";

const AddShowcasePage = () => {
  return (
    <div className="py-10">
      <Header heading="Add Showcase" />

      <ShowcaseForm />
    </div>
  );
};

export default AddShowcasePage;
