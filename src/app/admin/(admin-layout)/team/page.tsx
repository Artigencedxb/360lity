"use client";
import { useShowcase } from "@/api/showcase";
import Header from "@/common/Header";
import ShowcaseBox from "@/components/Showcase/ShowcaseBox";
import { useLottie } from "lottie-react";
import animation from "../../../../../public/animation.json";
import { useTeam } from "../../../../api/team";
import TeamAdminCard from "../../../../components/Team/TeamAdminCard";

const TeamAdminpage = () => {
  const { data, isPending } = useTeam(undefined, undefined, "priority");
  console.log(data, "data");
  const team = data?.data?.team;
  const options = {
    animationData: animation,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div>
      <Header
        result={data?.result}
        heading="Team"
        buttonText="+ Add Team"
        buttonUrl="/admin/team/create"
        back={false}
      />
      {isPending && <div>{View}</div>}
      {!team?.length && !isPending && (
        <div className="py-16 text-center text-2xl font-medium">
          No team&apos;s.
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10 mt-10 py-12">
        {team?.map((dat) => {
          return <TeamAdminCard key={dat?.id} data={dat} />;
        })}
      </div>
    </div>
  );
};

export default TeamAdminpage;
