"use client";
import { useGetProject } from "@/api/project";
import Header from "@/common/Header";
import ProjectForm from "@/components/Projects/ProjectForm";
import React from "react";
import { useGetPhotography } from "../../../../../api/photography";
import PhotographyForm from "../../../../../components/Photography/PhotographyForm";

const EditPhotographyPage: React.FC<{ params: { photographyId: string } }> = ({
  params,
}) => {
  const { data } = useGetPhotography(params?.photographyId);

  console.log(data, "data");

  if (data) {
    return (
      <div className="py-10">
        <Header heading="Update Photo" />

        <PhotographyForm initialValues={data?.data?.photography} />
      </div>
    );
  }
  return null;
};

export default EditPhotographyPage;
