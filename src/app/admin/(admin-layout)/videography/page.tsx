"use client";
import Header from "@/common/Header";
import { useLottie } from "lottie-react";
import animation from "../../../../../public/animation.json";
import { usePhotography } from "../../../../api/photography";
import PhotographyAdminCard from "../../../../components/Photography/photographyAdminCard";
import { useVideography } from "../../../../api/Videography";
import VideographyAdminCard from "../../../../components/Videography/VideographyAdminCard";

const VideographyAdminpage = () => {
  const { data, isPending } = useVideography(undefined, undefined, "priority");
  console.log(data, "data");
  const videography = data?.data?.videography;

  const options = {
    animationData: animation,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <div>
      <Header
        heading="Videography"
        buttonText="+ Add video"
        buttonUrl="/admin/videography/create"
        back={false}
      />
      {isPending && <div>{View}</div>}
      {!videography?.length && !isPending && (
        <div className="py-16 text-center text-2xl font-medium">
          No Video&apos;s.
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10 mt-10 py-10">
        {videography?.map((dat) => {
          return <VideographyAdminCard key={dat?.id} data={dat} />;
        })}
      </div>
    </div>
  );
};

export default VideographyAdminpage;
