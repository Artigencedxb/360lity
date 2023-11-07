"use client";
import { useShowcase } from "@/api/showcase";
import Header from "@/common/Header";
import ShowcaseBox from "@/components/Showcase/ShowcaseBox";
import { showCaseData } from "@/data/showcase";
import React from "react";

const AdminShowcasepage = () => {
  const { data } = useShowcase();
  console.log(data, "data");
  const showcase = data?.data?.showcase;

  return (
    <div>
      <Header
        result={data?.result}
        heading="Showcase"
        buttonText="+ Add Showcase"
        buttonUrl="/admin/showcase/create"
        disabled={data?.result === 8}
      />

      {!showcase?.length && (
        <div className="py-16 text-center text-2xl font-medium">
          No showcase added.
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10 mt-10 py-12">
        {showcase?.map((dat) => {
          return <ShowcaseBox admin={true} key={dat?.id} data={dat} />;
        })}
      </div>
    </div>
  );
};

export default AdminShowcasepage;
