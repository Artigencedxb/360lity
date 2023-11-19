"use client";
import { useGetArVr } from "@/api/arvr";
import { useGetAbout } from "../../../../api/about";
import Header from "@/common/Header";
import AboutusForm from "@/components/Aboutus/AboutusForm";
import ArVrForm from "@/components/ArVr/ArVrForm";
import { useEffect, useState } from "react";

const ArVrPage = () => {
  const [state, setState] = useState(false);
  const { data } = useGetArVr();

  const arvr = data?.data?.arvr;

  useEffect(() => {
    setState(true);
  }, []);

  if (arvr && state) {
    return (
      <div className="pb-10">
        <Header heading="Ar/Vr" back={false} />
        <ArVrForm initialValues={arvr} />
      </div>
    );
  }
  return null;
};

export default ArVrPage;
