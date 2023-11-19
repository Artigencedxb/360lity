"use client";
import { useGetProject } from "@/api/project";
import { useGetShowcase } from "@/api/showcase";
import Header from "@/common/Header";
import ProjectForm from "@/components/Projects/ProjectForm";
import ShowcaseForm from "@/components/Showcase/ShowcaseForm";
import React from "react";
import { useGetTeam } from "../../../../../api/team";
import TeamForm from "../../../../../components/Team/TeamForm";

const EditTeamPage: React.FC<{ params: { teamId: string } }> = ({
  params,
}) => {
  const { data } = useGetTeam(params?.teamId);

  if (data) {
    return (
      <div className="py-10">
        <Header heading="Update Team" />

        <TeamForm initialValues={data?.data?.team} />
      </div>
    );
  }
  return null;
};

export default EditTeamPage;
