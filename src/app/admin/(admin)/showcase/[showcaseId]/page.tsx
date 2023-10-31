"use client";
import { useGetProject } from "@/api/project";
import { useGetShowcase } from "@/api/showcase";
import Header from "@/common/Header";
import ProjectForm from "@/components/Projects/ProjectForm";
import ShowcaseForm from "@/components/Showcase/ShowcaseForm";
import React from "react";

const EditShowcasePage: React.FC<{ params: { showcaseId: string } }> = ({
  params,
}) => {
  console.log(params, "params");
  const { data } = useGetShowcase(params?.showcaseId);

  console.log(data, "data");

  if (data) {
    return (
      <div className="py-10">
        <Header heading="Edit Showcase" />

        <ShowcaseForm initialValues={data?.data?.showcase} />
      </div>
    );
  }
  return null;
};

export default EditShowcasePage;
