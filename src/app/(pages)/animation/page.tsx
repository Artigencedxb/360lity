import React from "react";
import Photography from "../../../components/Photography";
import { Metadata } from "next";
import Videography from "../../../components/Videography";
import Animation from "../../../components/Animation";
export const metadata: Metadata = {
  title: "Animation",
};
const AnimationPage = () => {
  return <Animation />;
};

export default AnimationPage;
