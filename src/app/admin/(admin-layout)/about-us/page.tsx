"use client";
import { useGetAbout } from "../../../../api/about";
import Header from "../../../../common/Header";
import AboutusForm from "../../../../components/Aboutus/AboutusForm";

const AboutPage = () => {
  const { data } = useGetAbout();

  const about = data?.data?.about;

  if (about) {
    return (
      <div className="pb-10">
        <Header heading="About us" />{" "}
        <AboutusForm initialValues={data?.data?.about} />
      </div>
    );
  }
  return null;
};

export default AboutPage;
