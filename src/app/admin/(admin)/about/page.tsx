"use client";
import { useGetAbout } from "../../../../api/about";
import AboutusForm from "@/components/Aboutus/AboutusForm";

const AboutUsAdminpage = () => {
  const { data } = useGetAbout();

  if (data) {
    return (
      <div className="pb-10">
        <AboutusForm initialValues={data?.data?.about} />
      </div>
    );
  }
  return null;
};

export default AboutUsAdminpage;
