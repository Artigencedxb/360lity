import React from "react";
import Photography from "../../../components/Photography";
import { Metadata } from "next";
import Videography from "../../../components/Videography";
export const metadata: Metadata = {
  title: "Videography",
};
const VideographyPage = () => {
  return <Videography />;
};

export default VideographyPage;
