"use client";
import { useDeleteShowcase } from "@/api/showcase";
import { LogoView, PriorityIcon } from "@/assets";
import Triangle from "@/common/Triangle";
import { Showcase } from "@/types/showcase";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import cn from "classnames";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import DeleteModal from "../Modal/DeleteModal";
import { useProjectStore } from "@/store/use-projects";
import { LottieOptions, useLottie } from "lottie-react";
import animation from "../../../public/animation-white.json";
import PriorityModal from "../Modal/priorityModal";
import { Photography } from "../../types/photography";

const PhotographyBox: React.FC<{
  className?: string;
  data: Photography;
  index?: number;
  admin?: boolean;
}> = ({ className, index, data, admin = false }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [priorityModal, setPriorityModal] = useState(false);

  const { setProjectIndex } = useProjectStore();

  const router = useRouter();

  const options: LottieOptions = {
    animationData: animation,
    loop: true,
    width: 100,
  };
  const { View } = useLottie(options);

  return (
    <>
      <div
        className={cn(
          "transition-all relative min-h-[13rem] group overflow-hidden inline-block",
          className
        )}
      >
        <Triangle />
        {data?.image?.length ? (
          <div className="block transition-all duration-300 group-hover:bg-black/30">
            <Image
              src={data?.image}
              fill
              className="object-cover transition group-hover:bg-black/30 duration-1000 scale-110 group-hover:scale-100"
              alt="photography"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default PhotographyBox;
