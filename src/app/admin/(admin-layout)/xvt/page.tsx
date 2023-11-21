"use client";
import { useGetXvt } from "@/api/xvt";
import { useGetAbout } from "../../../../api/about";
import Header from "@/common/Header";
import AboutusForm from "@/components/Aboutus/AboutusForm";
import { useEffect, useState } from "react";
import XvtForm from "@/components/Xvt/XvtForm";

const XvtAdminPage = () => {
  const [state, setState] = useState(false);
  const { data } = useGetXvt();

  const xvt = data?.data?.xvt;

  useEffect(() => {
    setState(true);
  }, []);

  if (xvt && state) {
    return (
      <div className="pb-10">
        <Header heading="XVT" back={false} />
        <XvtForm initialValues={data?.data?.xvt} />
      </div>
    );
  }
  return null;
};

export default XvtAdminPage;
