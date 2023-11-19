import Header from "@/common/Header";
import ProjectForm from "@/components/Projects/ProjectForm";
import ShowcaseForm from "@/components/Showcase/ShowcaseForm";
import React from "react";
import TeamForm from "../../../../../components/Team/TeamForm";

const AddTeamPage = () => {
  return (
    <div className="py-10">
      <Header heading="Add Team" />

      <TeamForm />
    </div>
  );
};

export default AddTeamPage;
