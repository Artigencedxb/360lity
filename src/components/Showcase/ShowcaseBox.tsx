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
          "trianglebox rounded-[15px] transition-all relative min-h-[13rem] group overflow-hidden inline-block",
          className,
          {
            "!md:h-[13rem]": !!admin,
            "!md:h-auto": !admin,
          }
        )}
      >
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
          <div className="absolute bg-black/50 w-full h-full opacity-0 flex justify-center items-center group-hover:opacity-100 z-10">
            <button
              onClick={() => {
                setProjectIndex(index as number);
                router.push(`/view-showcase`);
              }}
            >
              <Image src={LogoView} alt="360 View Logo" className="" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ShowcaseBox;
