import Showcase from "@/components/Showcase";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Showcase",
};

const ShowcasePage = () => {
  return <Showcase />;
};

export default ShowcasePage;
