"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const MediaCard: React.FC<{ title: string }> = ({ title }) => {
  const router = useRouter();

  const routeHandler = () => {
    switch (title) {
      case "Photography":
        router.push("/photography");
        break;
      case "Videography":
        router.push("/videography");
        break;
      case "Animation":
        router.push("/animation");
        break;
      default:
        break;
    }
  };

  return (
    <div onClick={routeHandler} className="bg-white cursor-pointer transition-all duraion-300 hover:-translate-y-1 px-5 py-6 rounded-x">
      <div className="self-center w-full relative h-[360px] bg-[#D9D9D9] rounded-x">
        {/* {(
        <Image src={data?.image} alt={data?.name} className="object-cover rounded-x" fill />
      )} */}
      </div>
      <div className="font-semibold text-[22px] mt-4 text-center">{title}</div>
    </div>
  );
};

export default MediaCard;
