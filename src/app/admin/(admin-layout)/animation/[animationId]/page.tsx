"use client";
import Header from "@/common/Header";
import React from "react";
import { useGetAnimation } from "../../../../../api/animation";
import PhotographyForm from "../../../../../components/Photography/PhotographyForm";
import AnimationForm from "../../../../../components/Animation/AnimationForm";

const EditAnimationPage: React.FC<{ params: { animationId: string } }> = ({
  params,
}) => {
  const { data } = useGetAnimation(params?.animationId);

  console.log(data, "data");

  if (data) {
    return (
      <div className="py-10">
        <Header heading="Update Animation" />

        <AnimationForm initialValues={data?.data?.animation} />
      </div>
    );
  }
  return null;
};

export default EditAnimationPage;
