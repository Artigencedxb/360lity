"use client";
import { Modal } from "@/UI/Modal";
import { LogoView } from "@/assets";
import Triangle from "@/common/Triangle";
import { IProject } from "@/types/project";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import cn from "classnames";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import DeleteModal from "../Modal/DeleteModal";
import { useDeleteProject } from "@/api/project";
import { useProjectStore } from "@/store/use-projects";
import { LottieOptions, useLottie } from "lottie-react";
import animation from "../../../public/animation-white.json"

const ProjectsBox: React.FC<{
  data: IProject["data"]["project"][0] | undefined;
  index?: number;
  className?: string;
  admin?: boolean;
}> = ({ data, index, className, admin = false }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const { setProjectIndex } = useProjectStore();
console.log(index, "index");

  //delete api
  const { mutate, isPending } = useDeleteProject();

  const projectDeleteHandler = () => {
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
          onClick={projectDeleteHandler}
          loading={isPending}
          open={deleteModal}
          onClose={() => setDeleteModal(false)}
          label="project"
        />
      )}
      <div
        className={cn(
          "transition-all h-[13rem] relative group overflow-hidden inline-block w-full rounded-[10px]",
          className
        )}
      >
        <Triangle />
        {data?.image?.length ? (
          <Image
            src={data?.image}
            fill
            className="rounded-[10px] object-cover transition group-hover:bg-black/30 duration-1000 scale-110 group-hover:scale-100"
            alt={data?.name}
          />
        ) : (
          data?.name
        )}
        {admin ? (
          <div className="absolute bg-black/50 w-full h-full opacity-0 flex justify-center gap-8 items-center group-hover:opacity-100 z-10">
            <button
              type="button"
              onClick={() =>
                router.push(`/admin/projects/${data?._id as string}`)
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
              router.push(`/projects/details/${index}`);
            }}
            className="cursor-pointer absolute flex flex-col bg-black/50 w-full h-full opacity-0 justify-center items-center group-hover:opacity-100 z-10"
          >
            <div className="flex flex-col items-center justify-center">
              {/* <Image src={LogoView} alt="360 View Logo" className="" /> */}
            
              {View}
            
               <div className="absolute bottom-10 text-white font-semibold">{data?.name ?? ""}</div>
            </div>
           
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectsBox;
