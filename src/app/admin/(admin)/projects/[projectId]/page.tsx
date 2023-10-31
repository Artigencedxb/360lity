"use client";
import { useGetProject } from "@/api/project";
import Header from "@/common/Header";
import ProjectForm from "@/components/Projects/ProjectForm";
import React from "react";

const EditProjectsPage: React.FC<{ params: { projectId: string } }> = ({
  params,
}) => {
  console.log(params, "params");
  const { data } = useGetProject(params?.projectId);

  console.log(data, "data");

  if (data) {
    return (
      <div className="py-10">
        <Header heading="Edit Project" />

        <ProjectForm initialValues={data?.data?.project} />
      </div>
    );
  }
  return null;
};

export default EditProjectsPage;
