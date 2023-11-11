import React from "react";
import { useGetAbout } from "../../api/about";
import AboutusForm from "./AboutusForm";

const AboutusAdmin = () => {
  const { data } = useGetAbout();

  if (data) {
    return <AboutusForm initialValues={data?.data?.about} />;
  }
  return null;
};

export default AboutusAdmin;
