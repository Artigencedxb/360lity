"use client";
import Header from "@/common/Header";
import { useLottie } from "lottie-react";
import animation from "../../../../../public/animation.json";
import { useAnimation } from "../../../../api/animation";
import VideographyAdminCard from "../../../../components/Videography/VideographyAdminCard";
import AnimationAdminCard from "../../../../components/Animation/AnimationAdminCard";

const AnimationAdminpage = () => {
  const { data, isPending } = useAnimation(undefined, undefined, "priority");
  console.log(data, "data");
  const animation = data?.data?.animation;

  const options = {
    animationData: animation,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <div>
      <Header
        heading="Animation"
        buttonText="+ Add Animation"
        buttonUrl="/admin/animation/create"
        back={false}
      />
      {isPending && <div>{View}</div>}
      {!animation?.length && !isPending && (
        <div className="py-16 text-center text-2xl font-medium">
          No Animation&apos;s.
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10 mt-10 py-10">
        {animation?.map((dat) => {
          return <AnimationAdminCard key={dat?.id} data={dat} />;
        })}
      </div>
    </div>
  );
};

export default AnimationAdminpage;
