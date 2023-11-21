import React from "react";
import Photography from "../../../components/Photography";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Photography",
};
const PhotographyPage = () => {
  return <Photography />;
};

export default PhotographyPage;
