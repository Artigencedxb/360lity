"use client";
import React, { useState } from "react";
import Header from "../../common/Header";
import Image from "next/image";
import { InstagramIcon, LogoText, LogoWhite, TiktokIcon } from "../../assets";
import Triangle from "../../common/Triangle";
import TeamCard from "./TeamCard";
import { useTeam } from "../../api/team";
import { useLottie } from "lottie-react";
import animation from "../../../public/animation.json";
import { ITeam, Team } from "../../types/team";
import Link from "next/link";
import {
  InstagramBlackIcon,
  LinkedinIcon,
  TiktokBlackIcon,
  WhatsappIcon,
} from "../../assets/social";
import cn from "classnames";
import { LogoMain } from "@/assets";

const TeamModule = () => {
  const [teamData, setTeamData] = useState<Team | null>(null);
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
      {teamData ? (
        <div
          className={cn(
            "bg-white rounded-x relative w-full px-10 transition-all ease-in-out duration-1000 py-10 items-start justify-between",
            {
              "hidden lg:flex lg:h-[218px]": !!teamData,
              hidden: !teamData,
            }
          )}
        >
          <Triangle />
          <div className="w-[35%]">
            <h1 className="text-2xl font-bold">{teamData?.name}</h1>
            <div className="text-lg font-bold capitalize">{teamData?.role}</div>
            <div className="text-md break-words font-medium">
              {teamData?.description}
            </div>
          </div>
          <div
            className={cn(
              "transition-all duration-1000 self-center z-[1000] -translate-x-20",
              {
                "translate-x-0 transition-all duration-1000": !!teamData,
              }
            )}
          >
            <div className="relative w-[120px] h-[120px]">
              <Image src={LogoText} fill alt="Logo" />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={cn(
            "bg-black transition-all lg:h-[218px] ease-in-out duration-700 rounded-x relative w-full py-20 flex items-center justify-center"
          )}
        >
          <Image src={LogoWhite} alt="" />
          <Triangle />
        </div>
      )}
      {isPending && <div>{View}</div>}
      {!team?.length && !isPending && (
        <div className="py-16 text-center text-2xl font-medium">No teams.</div>
      )}
      <div className="w-full gap-x-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-y-6">
        {team?.map((dat) => {
          return (
            <TeamCard key={dat?.id} data={dat} setTeamData={setTeamData} />
          );
        })}
      </div>
    </div>
  );
};

export default TeamModule;
