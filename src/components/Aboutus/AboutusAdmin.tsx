"use client";
import React, { Fragment } from "react";
import { useGetAbout } from "../../api/about";
import AboutusForm from "./AboutusForm";

const AboutusAdmin = () => {
  const { data } = useGetAbout();

  if (data) {
    return <AboutusForm initialValues={data?.data?.about} />;
  }
  return <Fragment></Fragment>;
};

export default AboutusAdmin;
