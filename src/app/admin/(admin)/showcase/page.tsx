import Header from "@/common/Header";
import ShowcaseBox from "@/components/Showcase/ShowcaseBox";
import { showCaseData } from "@/data/showcase";
import React from "react";

const AdminShowcasepage = () => {
  return (
    <div>
      <Header
        heading="Showcase"
        buttonText="+ Add Showcase"
        buttonUrl="/admin/showcase/create"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10 mt-10">
        {showCaseData?.map((dat) => {
          return (
            <ShowcaseBox
              admin={true}
              key={dat?.id}
              src={dat?.src as string}
              name={dat?.name as string}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AdminShowcasepage;
