"use client";
import Header from "@/common/Header";
import React from "react";
import { useGetVideography } from "../../../../../api/Videography";
import PhotographyForm from "../../../../../components/Photography/PhotographyForm";
import VideographyForm from "../../../../../components/Videography/VideographyForm";

const EditVideographyPage: React.FC<{ params: { videographyId: string } }> = ({
  params,
}) => {
  const { data } = useGetVideography(params?.videographyId);

  console.log(data, "data");

  if (data) {
    return (
      <div className="py-10">
        <Header heading="Update Video" />

        <VideographyForm initialValues={data?.data?.videography} />
      </div>
    );
  }
  return null;
};

export default EditVideographyPage;
