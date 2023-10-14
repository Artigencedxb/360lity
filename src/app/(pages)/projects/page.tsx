import Projects from "@/components/Projects";
import Showcase from "@/components/Showcase";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
};

const ProjectsPage = () => {
  return <Projects />;
};

export default ProjectsPage;
