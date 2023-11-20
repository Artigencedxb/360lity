"use client";
import React from "react";
import Header from "../../common/Header";
import Image from "next/image";
import { LogoWhite } from "../../assets";
import Triangle from "../../common/Triangle";
import TeamCard from "./TeamCard";
import { useTeam } from "../../api/team";
import { useLottie } from "lottie-react";
import animation from "../../../public/animation.json";

const Team = () => {
  const { data, isPending } = useTeam(undefined, undefined, "priority");
  const team = data?.data?.team;

  const options = {
    animationData: animation,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div className="py-[4.3rem] md:py-10 space-y-5">
      <Header heading="Team" />
      <div className="bg-black rounded-[10px] relative w-full py-20 flex items-center justify-center">
        <Image src={LogoWhite} alt="" />
        <Triangle />
      </div>
      <div className="w-full grid grid-cols-1 gap-y-5">
        {isPending && <div>{View}</div>}
        {!team?.length && !isPending && (
          <div className="py-16 text-center text-2xl font-medium">
            No teams.
          </div>
        )}
        {team?.map((dat) => {
          return <TeamCard key={dat?.id} data={dat} />;
        })}
      </div>
    </div>
  );
};

export default Team;
