import Aboutus from "@/components/Aboutus";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About us",
};

const AboutusPage = () => {
  return <Aboutus />;
};

export default AboutusPage;
