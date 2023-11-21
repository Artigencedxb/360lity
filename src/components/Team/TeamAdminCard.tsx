import React, { useState } from "react";
import { Team } from "../../types/team";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDeleteTeam } from "../../api/team";
import { useRouter } from "next/navigation";
import DeleteModal from "../Modal/DeleteModal";
import PriorityModal from "../Modal/priorityModal";
import cn from "classnames";
import Triangle from "../../common/Triangle";
import Image from "next/image";
import { PriorityIcon } from "../../assets";

const TeamAdminCard: React.FC<{ data: Team }> = ({ data }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [priorityModal, setPriorityModal] = useState(false);

  //delete api
  const { mutate, isPending } = useDeleteTeam();

  const showcaseDeleteHandler = () => {
    mutate(
      { id: data!.id ?? data!._id },
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
          label="team"
        />
      )}
      {priorityModal && (
        <PriorityModal
          initialValues={data as Team}
          onClose={() => setPriorityModal(false)}
          open={priorityModal}
          type="team"
        />
      )}
      <div
        className={cn(
          " rounded-x  transition-all relative min-h-[13rem] group overflow-hidden inline-block"
        , {
            "bg-[#d9d9d9]": !data?.image?.length
        })}
        draggable
      >
        <Triangle />
        {data?.image?.length ? (
          <div className="block transition-all duration-300 group-hover:bg-black/30">
            <Image
              src={data?.image}
              fill
              className="rounded-x object-cover transition group-hover:bg-black/30 duration-1000 scale-110 group-hover:scale-100"
              alt={data?.name}
            />
          </div>
        ) : (
            ""
        
        )}
        {
          <div className={cn("absolute bg-black/50 flex-col w-full h-full opacity-0 flex justify-center gap-8 items-center group-hover:opacity-100 z-10", {

          })}>
            <div className="text-white tracking-wide text-base font-semibold">{data?.name}</div>
            <div className="space-x-4">
              <button
                type="button"
                onClick={() =>
                  router.push(`/admin/team/${data?._id as string}`)
                }
              >
                <PencilSquareIcon className="w-8 h-8 text-white" />
              </button>
              <button onClick={() => setPriorityModal(true)}>
                <Image
                  width={35}
                  height={35}
                  src={PriorityIcon}
                  alt="priority"
                />
              </button>
              <button onClick={() => setDeleteModal(true)}>
                <TrashIcon className="w-8 h-8 text-white" />
              </button>
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default TeamAdminCard;
