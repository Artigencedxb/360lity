"use client";
import { useDeleteShowcase } from "@/api/showcase";
import { LogoView } from "@/assets";
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
import animation from "../../../public/animation-white.json"

const ShowcaseBox: React.FC<{
  className?: string;
  data: Showcase;
  index?: number;
  admin?: boolean;
}> = ({ className, index, data, admin = false }) => {
  const [deleteModal, setDeleteModal] = useState(false);

  const { setProjectIndex } = useProjectStore();

  //delete api
  const { mutate, isPending } = useDeleteShowcase();


  const showcaseDeleteHandler = () => {
    mutate(
      { id: data!.id },
      {
        onSuccess: () => {
          setDeleteModal(false);
        },
      }
    );
  };
  const router = useRouter();

  const options: LottieOptions = {
    animationData: animation,
    loop: true,
    width: 100
  };
  const { View } = useLottie(options);

  return (
    <>
      {deleteModal && (
        <DeleteModal
          onClick={showcaseDeleteHandler}
          loading={isPending}
          open={deleteModal}
          onClose={() => setDeleteModal(false)}
          label="showcase"
        />
      )}
      <div
        className={cn(
          " rounded-[15px] transition-all relative min-h-[13rem] group overflow-hidden inline-block",
          className
        )}
      >
        <Triangle />
        {data?.image?.length ? (
          <div className="block transition-all duration-300 group-hover:bg-black/30">
            <Image
              src={data?.image}
              fill
              className="rounded-[12px] object-cover transition group-hover:bg-black/30 duration-1000 scale-110 group-hover:scale-100"
              alt={data?.name}
            />
          </div>
        ) : (
          data?.name
        )}
        {admin ? (
          <div className="absolute bg-black/50 w-full h-full opacity-0 flex justify-center gap-8 items-center group-hover:opacity-100 z-10">
            <button
              type="button"
              onClick={() =>
                router.push(`/admin/showcase/${data?._id as string}`)
              }
            >
              <PencilSquareIcon className="w-8 h-8 text-white" />
            </button>
            <button onClick={() => setDeleteModal(true)}>
              <TrashIcon className="w-8 h-8 text-white" />
            </button>
          </div>
        ) : (
          <div
            onClick={() => {
              setProjectIndex(index as number);
              router.push(`/projects/details`);
            }}
            className="cursor-pointer absolute flex flex-col bg-black/50 w-full h-full opacity-0 justify-center items-center group-hover:opacity-100 z-10"
          >
            <div className="flex flex-col items-center justify-center">
              {/* <Image src={LogoView} alt="360 View Logo" className="" /> */}
            
              {View}
            
               <div className={cn("absolute bottom-10 text-white font-semibold", {
                "lg:!bottom-32" : index === 0,
               
               })}>{data?.name ?? ""}</div>
            </div>
           
          </div>
        )}
      </div>
    </>
  );
};

export default ShowcaseBox;
