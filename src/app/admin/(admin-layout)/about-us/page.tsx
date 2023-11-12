"use client";
import { useGetAbout } from "../../../../api/about";
import Header from "@/common/Header";
import AboutusForm from "@/components/Aboutus/AboutusForm";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [state, setState] = useState(false);
  const { data } = useGetAbout();

  const about = data?.data?.about;

  useEffect(() => {
    setState(true);
  }, []);

  if (about && state) {
    return (
      <div className="pb-10">
        <Header heading="About us" back={false} />
        <AboutusForm initialValues={data?.data?.about} />
      </div>
    );
  }
  return null;
};

export default AboutPage;
