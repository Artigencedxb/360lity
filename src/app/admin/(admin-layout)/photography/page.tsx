"use client";
import Header from "@/common/Header";
import { useLottie } from "lottie-react";
import animation from "../../../../../public/animation.json";
import { usePhotography } from "../../../../api/photography";
import PhotographyAdminCard from "../../../../components/Photography/photographyAdminCard";

const PhotographyAdminpage = () => {
  const { data, isPending } = usePhotography(undefined, undefined, "priority");
  console.log(data, "data");
  const photography = data?.data?.photography;

  const options = {
    animationData: animation,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <div>
      <Header
        heading="Photography"
        buttonText="+ Add photo"
        buttonUrl="/admin/photography/create"
        back={false}
      />
      {isPending && <div>{View}</div>}
      {!photography?.length && !isPending && (
        <div className="py-16 text-center text-2xl font-medium">
          No Photo&apos;s.
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10 mt-10 py-10">
        {photography?.map((dat) => {
          return <PhotographyAdminCard key={dat?.id} data={dat} />;
        })}
      </div>
    </div>
  );
};

export default PhotographyAdminpage;
