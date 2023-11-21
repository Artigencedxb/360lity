import Header from "@/common/Header";
import ProjectForm from "@/components/Projects/ProjectForm";
import React from "react";
import PhotographyForm from "../../../../../components/Photography/PhotographyForm";
import VideographyForm from "../../../../../components/Videography/VideographyForm";
import AnimationForm from "../../../../../components/Animation/AnimationForm";

const AddAnimationPage = () => {
  return (
    <div className="py-10">
      <Header heading="Add Animation" />

      <AnimationForm />
    </div>
  );
};

export default AddAnimationPage;
